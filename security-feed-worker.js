async function fetchNVDCVEs(env) {
  const results = { added: 0, skipped: 0, failed: 0, items: [] };
  try {
    const now = new Date();
    const past = new Date(now - 30 * 24 * 60 * 60 * 1000);
    const pubStartDate = past.toISOString().split('.')[0] + '.000';
    const pubEndDate = now.toISOString().split('.')[0] + '.000';

    const res = await fetch(
      'https://services.nvd.nist.gov/rest/json/cves/2.0?resultsPerPage=20&cvssV3Severity=CRITICAL&pubStartDate=' + pubStartDate + '&pubEndDate=' + pubEndDate,
      { headers: { 'User-Agent': 'security-feed/1.0' } }
    );
    if (!res.ok) throw new Error('NVD API failed: ' + res.status);
    const data = await res.json();
    const cves = data.vulnerabilities || [];

    for (const item of cves) {
      const cve = item.cve;
      const id = cve.id;
      const desc = cve.descriptions && cve.descriptions.find(d => d.lang === 'en');
      const content = desc ? desc.value : 'No description';
      const score = cve.metrics && cve.metrics.cvssMetricV31 && cve.metrics.cvssMetricV31[0] && cve.metrics.cvssMetricV31[0].cvssData && cve.metrics.cvssMetricV31[0].cvssData.baseScore;
      const published = cve.published || '';
      const title = id + (score ? ' [CVSS: ' + score + ']' : '');

      const existing = await env.DB.prepare('SELECT id FROM knowledge WHERE title = ? AND source = ?').bind(title, 'nvd-cve').first();
      if (existing) { results.skipped++; continue; }

      const enriched = content + ' [Category: cve | Published: ' + published + (score ? ' | CVSS Score: ' + score : '') + ' | Severity: CRITICAL]';
      await env.DB.prepare(
        'INSERT INTO knowledge (source, source_type, title, content, url, created_at) VALUES (?, ?, ?, ?, ?, datetime("now"))'
      ).bind('nvd-cve', 'cve', title, enriched, 'https://nvd.nist.gov/vuln/detail/' + id).run();

      try {
        await env.DB.prepare(
          'INSERT INTO knowledge_fts(rowid, title, content) SELECT id, title, content FROM knowledge WHERE title = ? AND source = "nvd-cve" ORDER BY id DESC LIMIT 1'
        ).bind(title).run();
      } catch(e) {}

      results.added++;
      results.items.push({ id, score, status: 'added' });
    }
  } catch(e) {
    results.failed++;
    results.items.push({ source: 'NVD', error: e.message });
  }
  return results;
}

async function fetchSecurityBlogs(env) {
  const results = { added: 0, skipped: 0, failed: 0, items: [] };

  const feeds = [
    { name: 'Krebs on Security', url: 'https://krebsonsecurity.com/feed/', source: 'krebs', category: 'web2-security' },
    { name: 'Schneier on Security', url: 'https://www.schneier.com/feed/atom', source: 'schneier', category: 'web2-security' },
    { name: 'The Hacker News', url: 'https://feeds.feedburner.com/TheHackersNews', source: 'hackernews-sec', category: 'web2-security' },
    { name: 'Trail of Bits Blog', url: 'https://blog.trailofbits.com/feed/', source: 'trailofbits', category: 'smart-contract-security' },
    { name: 'OpenZeppelin Blog', url: 'https://blog.openzeppelin.com/rss.xml', source: 'openzeppelin', category: 'smart-contract-security' },
  ];

  for (const feed of feeds) {
    try {
      const res = await fetch(feed.url, { headers: { 'User-Agent': 'security-feed/1.0' } });
      if (!res.ok) { results.failed++; results.items.push({ source: feed.name, error: 'HTTP ' + res.status }); continue; }
      const xml = await res.text();

      const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/g) || xml.match(/<entry>([\s\S]*?)<\/entry>/g) || [];
      const items = itemMatches.slice(0, 8).map(item => {
        const title = (item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || item.match(/<title[^>]*>(.*?)<\/title>/) || [])[1] || '';
        const link = (item.match(/<link>(.*?)<\/link>/) || item.match(/<link[^>]*href="([^"]*)"/) || [])[1] || '';
        const desc = (item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) || item.match(/<description[^>]*>(.*?)<\/description>/) || item.match(/<summary[^>]*>(.*?)<\/summary>/) || [])[1] || '';
        const pubDate = (item.match(/<pubDate>(.*?)<\/pubDate>/) || item.match(/<published>(.*?)<\/published>/) || [])[1] || '';
        return {
          title: title.replace(/<[^>]+>/g, '').trim(),
          link: link.trim(),
          desc: desc.replace(/<[^>]+>/g, '').trim().slice(0, 600),
          pubDate
        };
      }).filter(i => i.title);

      for (const item of items) {
        const fullTitle = feed.name + ': ' + item.title;
        const existing = await env.DB.prepare('SELECT id FROM knowledge WHERE title = ? AND source = ?').bind(fullTitle, feed.source).first();
        if (existing) { results.skipped++; continue; }

        const content = item.desc + ' [Category: ' + feed.category + ' | Source: ' + feed.name + ' | Date: ' + item.pubDate + ']';
        await env.DB.prepare(
          'INSERT INTO knowledge (source, source_type, title, content, url, created_at) VALUES (?, ?, ?, ?, ?, datetime("now"))'
        ).bind(feed.source, feed.category, fullTitle, content, item.link).run();

        try {
          await env.DB.prepare(
            'INSERT INTO knowledge_fts(rowid, title, content) SELECT id, title, content FROM knowledge WHERE title = ? AND source = ? ORDER BY id DESC LIMIT 1'
          ).bind(fullTitle, feed.source).run();
        } catch(e) {}

        results.added++;
        results.items.push({ title: item.title, source: feed.name, status: 'added' });
      }
    } catch(e) {
      results.failed++;
      results.items.push({ source: feed.name, error: e.message });
    }
  }
  return results;
}

async function fetchWeb3SecurityFeeds(env) {
  const results = { added: 0, skipped: 0, failed: 0, items: [] };

  const feeds = [
    { name: 'Ethereum Research', url: 'https://ethresear.ch/latest.rss', source: 'ethresearch', category: 'web3' },
    { name: 'DeFi Safety', url: 'https://defisafety.com/feed', source: 'defisafety', category: 'defi' },
    { name: 'Blocksec Blog', url: 'https://blocksec.com/blog/rss.xml', source: 'blocksec', category: 'smart-contract-security' },
  ];

  for (const feed of feeds) {
    try {
      const res = await fetch(feed.url, { headers: { 'User-Agent': 'security-feed/1.0' } });
      if (!res.ok) { results.failed++; results.items.push({ source: feed.name, error: 'HTTP ' + res.status }); continue; }
      const xml = await res.text();

      const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/g) || xml.match(/<entry>([\s\S]*?)<\/entry>/g) || [];
      const items = itemMatches.slice(0, 8).map(item => {
        const title = (item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || item.match(/<title[^>]*>(.*?)<\/title>/) || [])[1] || '';
        const link = (item.match(/<link>(.*?)<\/link>/) || item.match(/<link[^>]*href="([^"]*)"/) || [])[1] || '';
        const desc = (item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) || item.match(/<description[^>]*>(.*?)<\/description>/) || item.match(/<summary[^>]*>(.*?)<\/summary>/) || [])[1] || '';
        return {
          title: title.replace(/<[^>]+>/g, '').trim(),
          link: link.trim(),
          desc: desc.replace(/<[^>]+>/g, '').trim().slice(0, 600),
        };
      }).filter(i => i.title);

      for (const item of items) {
        const fullTitle = feed.name + ': ' + item.title;
        const existing = await env.DB.prepare('SELECT id FROM knowledge WHERE title = ? AND source = ?').bind(fullTitle, feed.source).first();
        if (existing) { results.skipped++; continue; }

        const content = item.desc + ' [Category: ' + feed.category + ' | Source: ' + feed.name + ']';
        await env.DB.prepare(
          'INSERT INTO knowledge (source, source_type, title, content, url, created_at) VALUES (?, ?, ?, ?, ?, datetime("now"))'
        ).bind(feed.source, feed.category, fullTitle, content, item.link).run();

        try {
          await env.DB.prepare(
            'INSERT INTO knowledge_fts(rowid, title, content) SELECT id, title, content FROM knowledge WHERE title = ? AND source = ? ORDER BY id DESC LIMIT 1'
          ).bind(fullTitle, feed.source).run();
        } catch(e) {}

        results.added++;
        results.items.push({ title: item.title, source: feed.name, status: 'added' });
      }
    } catch(e) {
      results.failed++;
      results.items.push({ source: feed.name, error: e.message });
    }
  }
  return results;
}

async function runFeed(env) {
  const [cves, secBlogs, web3Feeds] = await Promise.all([
    fetchNVDCVEs(env),
    fetchSecurityBlogs(env),
    fetchWeb3SecurityFeeds(env),
  ]);

  return {
    nvd_cve: { added: cves.added, skipped: cves.skipped, failed: cves.failed },
    security_blogs: { added: secBlogs.added, skipped: secBlogs.skipped, failed: secBlogs.failed, items: secBlogs.items },
    web3_feeds: { added: web3Feeds.added, skipped: web3Feeds.skipped, failed: web3Feeds.failed, items: web3Feeds.items },
    total_added: cves.added + secBlogs.added + web3Feeds.added,
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    if (url.pathname === '/run') {
      if (url.searchParams.get('secret') !== env.PIPELINE_SECRET) {
        return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401, headers: cors });
      }
      const results = await runFeed(env);
      return new Response(JSON.stringify(results, null, 2), { headers: { ...cors, 'Content-Type': 'application/json' } });
    }

    if (url.pathname === '/status') {
      const cveCount = await env.DB.prepare('SELECT COUNT(*) as total FROM knowledge WHERE source = "nvd-cve"').first();
      const blogCount = await env.DB.prepare('SELECT COUNT(*) as total FROM knowledge WHERE source_type = "web2-security"').first();
      const web3Count = await env.DB.prepare('SELECT COUNT(*) as total FROM knowledge WHERE source_type IN ("smart-contract-security", "defi-hack", "web3")').first();
      const total = await env.DB.prepare('SELECT COUNT(*) as total FROM knowledge').first();
      return new Response(JSON.stringify({
        total: total.total,
        cves: cveCount.total,
        security_blogs: blogCount.total,
        web3_security: web3Count.total,
      }), { headers: { ...cors, 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({
      name: 'security-feed',
      endpoints: { '/run?secret=X': 'Run feed', '/status': 'Stats' }
    }), { headers: cors });
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(runFeed(env));
  }
};
