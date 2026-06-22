const WORKER_URL = 'https://zyai.org';

async function sendMessage(chatId, text, token) {
  await fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'Markdown',
    }),
  });
}

async function sendTyping(chatId, token) {
  await fetch('https://api.telegram.org/bot' + token + '/sendChatAction', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, action: 'typing' }),
  });
}

async function handleMessage(message, env) {
  const chatId = message.chat.id;
  const text = message.text || '';
  const userId = message.from.id;
  const username = message.from.username || message.from.first_name || 'user';

  if (text === '/start') {
    await sendMessage(chatId,
      '👋 *Welcome to Test AI!*\n\nI\'m a security-focused developer AI assistant.\n\n' +
      '🔐 Ask me about Web2/Web3 security\n' +
      '⛓ Analyze smart contracts\n' +
      '💻 Build websites and apps\n' +
      '🔍 Research CVEs and exploits\n\n' +
      'Just send me a message to get started!\n\n' +
      '_Powered by zyai.org_',
      env.TELEGRAM_TOKEN
    );
    return;
  }

  if (text === '/help') {
    await sendMessage(chatId,
      '🤖 *Test AI Commands*\n\n' +
      '/start - Welcome message\n' +
      '/help - Show this help\n' +
      '/clear - Clear conversation history\n' +
      '/web - Visit web interface\n\n' +
      '*Example questions:*\n' +
      '• What is a reentrancy attack?\n' +
      '• Explain SQL injection\n' +
      '• Build me a landing page\n' +
      '• Analyze contract 0x...',
      env.TELEGRAM_TOKEN
    );
    return;
  }

  if (text === '/clear') {
    await env.DB.prepare('DELETE FROM telegram_history WHERE user_id = ?').bind(userId).run();
    await sendMessage(chatId, '✅ Conversation history cleared!', env.TELEGRAM_TOKEN);
    return;
  }

  if (text === '/web') {
    await sendMessage(chatId, '🌐 Visit us at: https://zyai.org', env.TELEGRAM_TOKEN);
    return;
  }

  // Show typing indicator
  await sendTyping(chatId, env.TELEGRAM_TOKEN);

  // Get conversation history
  let history = [];
  try {
    const rows = await env.DB.prepare(
      'SELECT role, content FROM telegram_history WHERE user_id = ? ORDER BY created_at DESC LIMIT 10'
    ).bind(userId).all();
    history = rows.results.reverse().map(r => ({ role: r.role, content: r.content }));
  } catch(e) {
    // Table might not exist yet, create it
    try {
      await env.DB.prepare(
        'CREATE TABLE IF NOT EXISTS telegram_history (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, role TEXT NOT NULL, content TEXT NOT NULL, created_at TEXT DEFAULT (datetime("now")))'
      ).run();
    } catch(e2) {}
  }

  history.push({ role: 'user', content: text });

  // Call main Worker API
  try {
    const res = await fetch(WORKER_URL + '/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: history,
        model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
        user_id: null,
      }),
    });

    const data = await res.json();
    const answer = data.answer || data.error || 'Sorry, I could not process your request.';

    // Save to history
    try {
      await env.DB.prepare('INSERT INTO telegram_history (user_id, role, content) VALUES (?, ?, ?)').bind(userId, 'user', text).run();
      await env.DB.prepare('INSERT INTO telegram_history (user_id, role, content) VALUES (?, ?, ?)').bind(userId, 'assistant', answer).run();
    } catch(e) {}

    // Telegram has 4096 char limit
    const chunks = [];
    let remaining = answer;
    while (remaining.length > 0) {
      chunks.push(remaining.slice(0, 4000));
      remaining = remaining.slice(4000);
    }

    for (const chunk of chunks) {
      await sendMessage(chatId, chunk, env.TELEGRAM_TOKEN);
    }

  } catch(e) {
    await sendMessage(chatId, '❌ Error: ' + e.message, env.TELEGRAM_TOKEN);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Set webhook
    if (url.pathname === '/set-webhook') {
      const secret = url.searchParams.get('secret');
      if (secret !== env.PIPELINE_SECRET) {
        return new Response('unauthorized', { status: 401 });
      }
      const webhookUrl = 'https://' + url.hostname + '/webhook';
      const res = await fetch('https://api.telegram.org/bot' + env.TELEGRAM_TOKEN + '/setWebhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: webhookUrl }),
      });
      const data = await res.json();
      return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
    }

    // Handle webhook from Telegram
    if (url.pathname === '/webhook' && request.method === 'POST') {
      try {
        const body = await request.json();
        if (body.message) {
          await handleMessage(body.message, env);
        }
      } catch(e) {}
      return new Response('ok');
    }

    return new Response(JSON.stringify({
      name: 'telegram-bot',
      endpoints: {
        '/set-webhook?secret=X': 'Register webhook with Telegram',
        '/webhook': 'Telegram webhook endpoint',
      }
    }), { headers: { 'Content-Type': 'application/json' } });
  }
};
