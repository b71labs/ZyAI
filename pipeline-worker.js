const SOURCES = [
  // AI Coding
  { title: 'Aider - AI Pair Programming', repo: 'paul-gauthier/aider', category: 'ai-coding' },
  { title: 'Continue - Open Source Autopilot', repo: 'continuedev/continue', category: 'ai-coding' },
  { title: 'Tabby - Self Hosted AI Coding', repo: 'TabbyML/tabby', category: 'ai-coding' },
  { title: 'Cline - AI Coding Agent', repo: 'cline/cline', category: 'ai-coding' },
  { title: 'Cursor Rules', repo: 'PatrickJS/awesome-cursorrules', category: 'ai-coding' },
  { title: 'GPT Engineer', repo: 'AntonOsika/gpt-engineer', category: 'ai-coding' },
  { title: 'Void - Open Source Cursor', repo: 'voideditor/void', category: 'ai-coding' },
  { title: 'Sweep - AI Junior Dev', repo: 'sweepai/sweep', category: 'ai-coding' },
  // Agents
  { title: 'OpenHands - AI Software Agent', repo: 'All-Hands-AI/OpenHands', category: 'agents' },
  { title: 'AutoGPT - Autonomous AI', repo: 'Significant-Gravitas/AutoGPT', category: 'agents' },
  { title: 'CrewAI - Multi Agent Framework', repo: 'crewAIInc/crewAI', category: 'agents' },
  { title: 'LangChain - LLM Framework', repo: 'langchain-ai/langchain', category: 'agents' },
  { title: 'LlamaIndex - Data Framework', repo: 'run-llama/llama_index', category: 'agents' },
  { title: 'MetaGPT - Multi Agent', repo: 'geekan/MetaGPT', category: 'agents' },
  { title: 'Autogen - Microsoft Multi Agent', repo: 'microsoft/autogen', category: 'agents' },
  { title: 'Semantic Kernel', repo: 'microsoft/semantic-kernel', category: 'agents' },
  { title: 'Phidata - AI Agents Platform', repo: 'phidatahq/phidata', category: 'agents' },
  { title: 'BabyAGI - Task Driven Agent', repo: 'yoheinakajima/babyagi', category: 'agents' },
  // SaaS Tools
  { title: 'Supabase - Open Source Firebase', repo: 'supabase/supabase', category: 'saas-tools' },
  { title: 'Appwrite - Backend as a Service', repo: 'appwrite/appwrite', category: 'saas-tools' },
  { title: 'Pocketbase - Backend in One File', repo: 'pocketbase/pocketbase', category: 'saas-tools' },
  { title: 'Neon - Serverless Postgres', repo: 'neondatabase/neon', category: 'saas-tools' },
  { title: 'Trigger.dev - Background Jobs', repo: 'triggerdotdev/trigger.dev', category: 'saas-tools' },
  { title: 'Cal.com - Open Source Calendly', repo: 'calcom/cal.com', category: 'saas-tools' },
  { title: 'Plausible - Privacy Analytics', repo: 'plausible/analytics', category: 'saas-tools' },
  { title: 'Dub - Open Source Bitly', repo: 'dubinc/dub', category: 'saas-tools' },
  { title: 'Infisical - Secret Management', repo: 'Infisical/infisical', category: 'saas-tools' },
  { title: 'Twenty - Open Source CRM', repo: 'twentyhq/twenty', category: 'saas-tools' },
  { title: 'Formbricks - Open Source Typeform', repo: 'formbricks/formbricks', category: 'saas-tools' },
  // Web3 / Blockchain
  { title: 'Hardhat - Ethereum Dev', repo: 'NomicFoundation/hardhat', category: 'web3' },
  { title: 'Foundry - Solidity Toolkit', repo: 'foundry-rs/foundry', category: 'web3' },
  { title: 'Wagmi - React Hooks for Ethereum', repo: 'wevm/wagmi', category: 'web3' },
  { title: 'Viem - TypeScript Ethereum', repo: 'wevm/viem', category: 'web3' },
  { title: 'Ethers.js', repo: 'ethers-io/ethers.js', category: 'web3' },
  { title: 'OpenZeppelin Contracts', repo: 'OpenZeppelin/openzeppelin-contracts', category: 'web3' },
  { title: 'RainbowKit - Wallet Connect UI', repo: 'rainbow-me/rainbowkit', category: 'web3' },
  { title: 'Scaffold ETH 2', repo: 'scaffold-eth/scaffold-eth-2', category: 'web3' },
  { title: 'Thirdweb SDK', repo: 'thirdweb-dev/js', category: 'web3' },
  { title: 'Awesome Web3', repo: 'ttumiel/Awesome-Web3', category: 'web3' },
  // DeFi & Onchain
  { title: 'Uniswap V3 Core', repo: 'Uniswap/v3-core', category: 'defi' },
  { title: 'Aave Protocol V3', repo: 'aave/aave-v3-core', category: 'defi' },
  { title: 'Compound Protocol', repo: 'compound-finance/compound-protocol', category: 'defi' },
  { title: 'Curve Finance', repo: 'curvefi/curve-contract', category: 'defi' },
  { title: 'OpenZeppelin Defender', repo: 'OpenZeppelin/defender-sdk', category: 'defi' },
  { title: 'Chainlink Contracts', repo: 'smartcontractkit/chainlink', category: 'defi' },
  { title: 'MEV Boost', repo: 'flashbots/mev-boost', category: 'defi' },
  { title: 'Flashbots - MEV Research', repo: 'flashbots/flashbots-writings', category: 'defi' },
  // Web2 Security
  { title: 'OWASP CheatSheet Series', repo: 'OWASP/CheatSheetSeries', category: 'web2-security' },
  { title: 'Awesome Web Security', repo: 'qazbnm456/awesome-web-security', category: 'web2-security' },
  { title: 'PayloadsAllTheThings', repo: 'swisskyrepo/PayloadsAllTheThings', category: 'web2-security' },
  { title: 'HackTricks', repo: 'HackTricks-wiki/hacktricks', category: 'web2-security' },
  { title: 'SecLists - Security Wordlists', repo: 'danielmiessler/SecLists', category: 'web2-security' },
  { title: 'Awesome Hacking', repo: 'Hack-with-Github/Awesome-Hacking', category: 'web2-security' },
  { title: 'Nuclei Templates', repo: 'projectdiscovery/nuclei-templates', category: 'web2-security' },
  { title: 'PWNCAT - Post Exploitation', repo: 'calebstewart/pwncat', category: 'web2-security' },
  { title: 'Metasploit Framework', repo: 'rapid7/metasploit-framework', category: 'web2-security' },
  { title: 'Burp Suite Extensions', repo: 'snoopysecurity/awesome-burp-extensions', category: 'web2-security' },
  // Smart Contract Security
  { title: 'Slither - Solidity Analyzer', repo: 'crytic/slither', category: 'smart-contract-security' },
  { title: 'Mythril - Smart Contract Security', repo: 'ConsenSys/mythril', category: 'smart-contract-security' },
  { title: 'Echidna - Smart Contract Fuzzer', repo: 'crytic/echidna', category: 'smart-contract-security' },
  { title: 'Manticore - Symbolic Execution', repo: 'trailofbits/manticore', category: 'smart-contract-security' },
  { title: 'Not So Smart Contracts', repo: 'crytic/not-so-smart-contracts', category: 'smart-contract-security' },
  { title: 'Awesome Ethereum Security', repo: 'crytic/awesome-ethereum-security', category: 'smart-contract-security' },
  { title: 'DeFi Hack Analysis', repo: 'SunWeb3Sec/DeFiHackLabs', category: 'smart-contract-security' },
  { title: 'Smart Contract Auditing', repo: 'Cyfrin/audit-data', category: 'smart-contract-security' },
  { title: 'Trail of Bits - Testing Handbook', repo: 'trailofbits/testing-handbook', category: 'smart-contract-security' },
  // Blockchain Forensics & Onchain Research
  { title: 'Ethers.js Onchain Tools', repo: 'ethers-io/ethers.js', category: 'onchain-research' },
  { title: 'Breadcrumbs - Blockchain Analytics', repo: 'BreadcrumbsApp/breadcrumbs', category: 'onchain-research' },
  { title: 'Awesome Blockchain Analysis', repo: 'aamir-cuelogic/blockchain-analysis', category: 'onchain-research' },
  { title: 'Transpose - Onchain Data', repo: 'transpose-data/transpose-python-sdk', category: 'onchain-research' },
  // LLM Tools
  { title: 'Ollama - Run LLMs Locally', repo: 'ollama/ollama', category: 'llm-tools' },
  { title: 'Open WebUI - AI Chat Interface', repo: 'open-webui/open-webui', category: 'llm-tools' },
  { title: 'LiteLLM - LLM API Gateway', repo: 'BerriAI/litellm', category: 'llm-tools' },
  { title: 'Vercel AI SDK', repo: 'vercel/ai', category: 'llm-tools' },
  { title: 'DSPy - Programming with LLMs', repo: 'stanfordnlp/dspy', category: 'llm-tools' },
  { title: 'Instructor - Structured LLM Output', repo: 'jxnl/instructor', category: 'llm-tools' },
  { title: 'Jan - Local AI Assistant', repo: 'janhq/jan', category: 'llm-tools' },
  { title: 'LocalAI', repo: 'mudler/LocalAI', category: 'llm-tools' },
  // DevOps
  { title: 'Coolify - Self Hosted Heroku', repo: 'coollabsio/coolify', category: 'devops' },
  { title: 'Dokploy - Deploy Anywhere', repo: 'Dokploy/dokploy', category: 'devops' },
  { title: 'Caprover - App Deploy Platform', repo: 'caprover/caprover', category: 'devops' },
  { title: 'Portainer - Container Management', repo: 'portainer/portainer', category: 'devops' },
  { title: 'Traefik - Cloud Native Proxy', repo: 'traefik/traefik', category: 'devops' },
  { title: 'Gitea - Self Hosted Git', repo: 'go-gitea/gitea', category: 'devops' },
  // Frontend
  { title: 'Next.js - React Framework', repo: 'vercel/next.js', category: 'frontend' },
  { title: 'Remix - Web Framework', repo: 'remix-run/remix', category: 'frontend' },
  { title: 'Astro - Content Framework', repo: 'withastro/astro', category: 'frontend' },
  { title: 'Shadcn UI - Component Library', repo: 'shadcn-ui/ui', category: 'frontend' },
  { title: 'Tailwind CSS', repo: 'tailwindlabs/tailwindcss', category: 'frontend' },
  { title: 'Zod - TypeScript Schema', repo: 'colinhacks/zod', category: 'frontend' },
  { title: 'tRPC - TypeScript RPC', repo: 'trpc/trpc', category: 'frontend' },
  // Rust
  { title: 'Awesome Rust', repo: 'rust-unofficial/awesome-rust', category: 'rust' },
  { title: 'Tokio - Async Rust Runtime', repo: 'tokio-rs/tokio', category: 'rust' },
  { title: 'Actix Web - Rust Web Framework', repo: 'actix/actix-web', category: 'rust' },
  { title: 'Axum - Rust Web Framework', repo: 'tokio-rs/axum', category: 'rust' },
  { title: 'Serde - Rust Serialization', repo: 'serde-rs/serde', category: 'rust' },
  { title: 'Tauri - Desktop Apps with Rust', repo: 'tauri-apps/tauri', category: 'rust' },
  { title: 'Anchor - Solana Smart Contracts', repo: 'coral-xyz/anchor', category: 'rust' },
  // Python AI/ML
  { title: 'PyTorch - Deep Learning', repo: 'pytorch/pytorch', category: 'python-ai' },
  { title: 'Hugging Face Transformers', repo: 'huggingface/transformers', category: 'python-ai' },
  { title: 'FastAPI - Modern Python API', repo: 'tiangolo/fastapi', category: 'python-ai' },
  { title: 'Gradio - ML Demo Interface', repo: 'gradio-app/gradio', category: 'python-ai' },
  { title: 'Diffusers - Stable Diffusion', repo: 'huggingface/diffusers', category: 'python-ai' },
  // Database
  { title: 'Drizzle ORM - TypeScript ORM', repo: 'drizzle-team/drizzle-orm', category: 'database' },
  { title: 'Prisma - Next-gen ORM', repo: 'prisma/prisma', category: 'database' },
  { title: 'Kysely - Type-safe SQL', repo: 'kysely-org/kysely', category: 'database' },
  // Open Source
  { title: 'Awesome Selfhosted', repo: 'awesome-selfhosted/awesome-selfhosted', category: 'open-source' },
  { title: 'System Design Primer', repo: 'donnemartin/system-design-primer', category: 'open-source' },
  { title: 'Developer Roadmap', repo: 'kamranahmedse/developer-roadmap', category: 'open-source' },
  { title: 'Build Your Own X', repo: 'codecrafters-io/build-your-own-x', category: 'open-source' },
  { title: 'Public APIs List', repo: 'public-apis/public-apis', category: 'open-source' },
];

function cleanText(text) {
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/#{1,6}\s/g, '')
    .replace(/[*_~]/g, '')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchReadme(repo, token) {
  const headers = { 'User-Agent': 'knowledge-pipeline/3.0' };
  if (token) headers['Authorization'] = 'token ' + token;
  const res = await fetch('https://api.github.com/repos/' + repo + '/readme', { headers });
  if (!res.ok) return null;
  const data = await res.json();
  if (!data.content) return null;
  return atob(data.content.replace(/\n/g, ''));
}

async function fetchRepoInfo(repo, token) {
  const headers = { 'User-Agent': 'knowledge-pipeline/3.0' };
  if (token) headers['Authorization'] = 'token ' + token;
  const res = await fetch('https://api.github.com/repos/' + repo, { headers });
  if (!res.ok) return null;
  return res.json();
}

async function runPipeline(env) {
  const token = env.GITHUB_TOKEN || null;
  const results = { success: 0, skipped: 0, failed: 0, items: [] };

  for (const source of SOURCES) {
    try {
      const existing = await env.DB.prepare(
        'SELECT id FROM knowledge WHERE title = ? AND source = ?'
      ).bind(source.title, 'github').first();

      if (existing) {
        results.skipped++;
        results.items.push({ repo: source.repo, status: 'skipped' });
        continue;
      }

      const [readme, info] = await Promise.all([
        fetchReadme(source.repo, token),
        fetchRepoInfo(source.repo, token),
      ]);

      const rawContent = readme ? readme.slice(0, 4000) : '';
      const cleaned = rawContent ? cleanText(rawContent) : (info && info.description ? info.description : source.title);
      const stars = (info && info.stargazers_count) ? ' | Stars: ' + info.stargazers_count : '';
      const desc = (info && info.description) ? ' | ' + info.description : '';
      const enriched = cleaned.slice(0, 2000) + ' [Category: ' + source.category + desc + stars + ']';

      await env.DB.prepare(
        'INSERT INTO knowledge (source, source_type, title, content, url, created_at) VALUES (?, ?, ?, ?, ?, datetime("now"))'
      ).bind('github', source.category, source.title, enriched, 'https://github.com/' + source.repo).run();

      try {
        await env.DB.prepare(
          'INSERT INTO knowledge_fts(rowid, title, content) SELECT id, title, content FROM knowledge WHERE title = ? AND source = "github" ORDER BY id DESC LIMIT 1'
        ).bind(source.title).run();
      } catch(e) {}

      results.success++;
      results.items.push({ repo: source.repo, status: 'added', stars: info && info.stargazers_count });
      await new Promise(r => setTimeout(r, 250));

    } catch (e) {
      results.failed++;
      results.items.push({ repo: source.repo, status: 'failed', error: e.message });
    }
  }
  return results;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    if (url.pathname === '/run') {
      if (url.searchParams.get('secret') !== env.PIPELINE_SECRET) {
        return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401, headers: cors });
      }
      const results = await runPipeline(env);
      return new Response(JSON.stringify(results, null, 2), { headers: { ...cors, 'Content-Type': 'application/json' } });
    }

    if (url.pathname === '/status') {
      const counts = await env.DB.prepare('SELECT source_type, COUNT(*) as count FROM knowledge GROUP BY source_type ORDER BY count DESC').all();
      const total = await env.DB.prepare('SELECT COUNT(*) as total FROM knowledge').first();
      return new Response(JSON.stringify({ total: total.total, by_category: counts.results }), { headers: { ...cors, 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({ endpoints: { '/run?secret=X': 'Run pipeline', '/status': 'Stats' } }), { headers: cors });
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(runPipeline(env));
  }
};
