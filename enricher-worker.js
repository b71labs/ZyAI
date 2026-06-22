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
      const secret = url.searchParams.get('secret');
      if (secret !== env.PIPELINE_SECRET) {
        return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401, headers: cors });
      }
      const results = await runEnricher(env);
      return new Response(JSON.stringify(results, null, 2), {
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    if (url.pathname === '/status') {
      const total = await env.DB.prepare('SELECT COUNT(*) as total FROM knowledge').first();
      const enriched = await env.DB.prepare('SELECT COUNT(*) as total FROM knowledge WHERE enriched = 1').first();
      return new Response(JSON.stringify({ total: total.total, enriched: enriched.total }), {
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ endpoints: { '/run?secret=X': 'Run enricher', '/status': 'Stats' } }), {
      headers: { ...cors, 'Content-Type': 'application/json' },
    });
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(runEnricher(env));
  }
};

async function runEnricher(env) {
  // First ensure enriched column exists
  try {
    await env.DB.prepare('ALTER TABLE knowledge ADD COLUMN enriched INTEGER DEFAULT 0').run();
  } catch (e) {}

  const results = { enriched: 0, skipped: 0, failed: 0, items: [] };

  // Get unenriched rows - process 10 at a time to avoid timeouts
  const rows = await env.DB.prepare(
    'SELECT id, title, content, source_type FROM knowledge WHERE enriched = 0 OR enriched IS NULL LIMIT 25'
  ).all();

  if (!rows.results.length) {
    return { message: 'All entries are already enriched', ...results };
  }

  for (const row of rows.results) {
    try {
      const prompt = 'You are a technical knowledge base assistant. Given this raw content about "' + row.title + '", write a clear, concise, and informative summary (2-4 sentences) that explains: what it is, what problem it solves, and when to use it. Category: ' + (row.source_type || 'general') + '. Raw content: ' + row.content.slice(0, 800);

      const ai = await env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 256,
      });

      const msg = ai.choices && ai.choices[0] && ai.choices[0].message;
      const enrichedContent = ai.response || (msg && msg.content) || (msg && msg.reasoning_content) || '';

      if (!enrichedContent) {
        results.skipped++;
        results.items.push({ id: row.id, title: row.title, status: 'no_response' });
        continue;
      }

      // Store enriched summary alongside original content
      const newContent = row.content + ' [AI Summary: ' + enrichedContent.trim() + ']';

      await env.DB.prepare(
        'UPDATE knowledge SET content = ?, enriched = 1 WHERE id = ?'
      ).bind(newContent, row.id).run();

      // Update FTS
      try {
        await env.DB.prepare(
          'INSERT OR REPLACE INTO knowledge_fts(rowid, title, content) VALUES (?, ?, ?)'
        ).bind(row.id, row.title, newContent).run();
      } catch (e) {}

      results.enriched++;
      results.items.push({ id: row.id, title: row.title, status: 'enriched' });

      await new Promise(r => setTimeout(r, 500));

    } catch (e) {
      results.failed++;
      results.items.push({ id: row.id, title: row.title, status: 'failed', error: e.message });
    }
  }

  return results;
}
