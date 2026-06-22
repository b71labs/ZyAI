var HTML = [
'<!DOCTYPE html>',
'<html lang="en" data-theme="dark">',
'<head>',
'<meta charset="UTF-8">',
'<meta name="viewport" content="width=device-width, initial-scale=1.0">',
'<title>ZyAI</title>',
'<link rel="icon" type="image/png" href="https://pub-7dbec42453ff40268e3c576af7817563.r2.dev/favicon.png/favicon.png">',
'<link rel="apple-touch-icon" href="https://pub-7dbec42453ff40268e3c576af7817563.r2.dev/favicon.png/favicon.png">',
'<link rel="apple-touch-icon" href="https://pub-7dbec42453ff40268e3c576af7817563.r2.dev/favicon.png/favicon.png">',
'<link rel="apple-touch-icon" href="/logo.png">',
'<meta name="description" content="ZyAI - Security-focused developer AI">',
'<meta property="og:title" content="ZyAI">',
'<meta property="og:description" content="Security-focused developer AI assistant">',
'<meta property="og:image" content="https://pub-7dbec42453ff40268e3c576af7817563.r2.dev/logo.png">',
'<meta name="twitter:card" content="summary">',
'<meta name="twitter:image" content="https://pub-7dbec42453ff40268e3c576af7817563.r2.dev/logo.png">',
'<style>',
'*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }',
'[data-theme="dark"] {',
'  --bg: #0a0a0a; --surface: #111; --border: #1e1e1e; --border-hover: #2e2e2e;',
'  --text: #f0f0f0; --text2: #aaa; --muted: #444;',
'  --green: #4ade80; --green-bg: #0a1f12; --green-border: #1a3d26;',
'  --user-bg: #161616; --btn-text: #0a0a0a;',
'  --code-bg: #0d0d0d; --scrollbar: #222; --modal-bg: #0f0f0f;',
'  --sidebar-bg: #0d0d0d;',
'}',
'[data-theme="light"] {',
'  --bg: #fafafa; --surface: #fff; --border: #e8e8e8; --border-hover: #ccc;',
'  --text: #111; --text2: #666; --muted: #bbb;',
'  --green: #16a34a; --green-bg: #f0fdf4; --green-border: #bbf7d0;',
'  --user-bg: #f0f0f0; --btn-text: #fff;',
'  --code-bg: #f4f4f4; --scrollbar: #ddd; --modal-bg: #fff;',
'  --sidebar-bg: #f0f0f0;',
'}',
'html, body { height: 100%; overflow: hidden; }',
'body { background: var(--bg); color: var(--text); font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif; display: flex; transition: background 0.2s, color 0.2s; }',
'',
'/* SIDEBAR */',
'.sidebar { width: 52px; flex-shrink: 0; background: var(--sidebar-bg); border-right: 1px solid var(--border); display: flex; flex-direction: column; align-items: center; padding: 12px 0; gap: 4px; z-index: 20; }',
'.sidebar-logo { width: 32px; height: 32px; background: var(--green); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 900; color: var(--btn-text); margin-bottom: 8px; cursor: pointer; flex-shrink: 0; }',
'.sidebar-divider { width: 28px; height: 1px; background: var(--border); margin: 4px 0; }',
'.sb-btn { width: 36px; height: 36px; background: none; border: none; color: var(--muted); cursor: pointer; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: all 0.15s; position: relative; flex-shrink: 0; }',
'.sb-btn:hover { background: var(--surface); color: var(--text); }',
'.sb-btn.active { background: var(--green-bg); color: var(--green); }',
'.sb-btn[title]:hover::after { content: attr(title); position: absolute; left: 44px; background: var(--surface); border: 1px solid var(--border); color: var(--text); font-size: 11px; padding: 4px 8px; border-radius: 6px; white-space: nowrap; z-index: 100; pointer-events: none; }',
'.sb-bottom { margin-top: auto; display: flex; flex-direction: column; align-items: center; gap: 4px; }',
'.user-avatar { width: 32px; height: 32px; background: var(--green); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: var(--btn-text); cursor: pointer; flex-shrink: 0; }',
'',
'/* MAIN */',
'.main { flex: 1; min-width: 0; display: flex; flex-direction: column; overflow: hidden; }',
'',
'/* TOPBAR */',
'.topbar { display: flex; align-items: center; justify-content: space-between; padding: 0.65rem 1rem; border-bottom: 1px solid var(--border); flex-shrink: 0; gap: 8px; }',
'.brand { font-size: 15px; font-weight: 800; letter-spacing: -0.03em; display: flex; align-items: center; gap: 6px; }',
'.brand em { font-style: normal; color: var(--green); }',
'.brand-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); animation: glow 2s infinite; flex-shrink: 0; }',
'@keyframes glow { 0%,100%{opacity:1;box-shadow:0 0 4px var(--green)} 50%{opacity:0.4;box-shadow:none} }',
'.topbar-right { display: flex; gap: 6px; align-items: center; }',
'.model-select { background: var(--surface); border: 1px solid var(--border); color: var(--text2); font-family: inherit; font-size: 11px; padding: 5px 8px; border-radius: 8px; cursor: pointer; outline: none; max-width: 130px; }',
'.pill-btn { background: none; border: 1px solid var(--border); color: var(--text2); font-size: 12px; padding: 5px 11px; border-radius: 20px; cursor: pointer; font-family: inherit; transition: all 0.15s; white-space: nowrap; }',
'.pill-btn:hover { border-color: var(--green); color: var(--green); }',
'.icon-btn { background: none; border: 1px solid var(--border); color: var(--text2); font-size: 14px; width: 30px; height: 30px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; flex-shrink: 0; }',
'.icon-btn:hover { border-color: var(--border-hover); color: var(--text); }',
'',
'/* APP CONTENT */',
'.app-content { flex: 1; display: flex; overflow: hidden; }',
'',
'/* CHAT */',
'.chat-panel { flex: 1; min-width: 0; display: flex; flex-direction: column; overflow: hidden; }',
'.messages { flex: 1; overflow-y: auto; padding: 1.25rem 1rem 1rem; display: flex; flex-direction: column; gap: 1.25rem; scroll-behavior: smooth; max-width: 800px; width: 100%; margin: 0 auto; }',
'.messages::-webkit-scrollbar { width: 3px; }',
'.messages::-webkit-scrollbar-thumb { background: var(--scrollbar); border-radius: 4px; }',
'',
'.empty-state { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 0.6rem; padding: 2rem 1rem; }',
'.empty-logo { font-size: clamp(1.8rem, 5vw, 2.8rem); font-weight: 900; letter-spacing: -0.05em; }',
'.empty-logo em { font-style: normal; color: var(--green); }',
'.chips { display: flex; flex-wrap: wrap; gap: 7px; justify-content: center; margin-top: 1rem; max-width: 480px; }',
'.chip { background: var(--surface); border: 1px solid var(--border); color: var(--text2); font-size: 12px; font-family: inherit; padding: 6px 12px; border-radius: 20px; cursor: pointer; transition: all 0.15s; text-align: left; }',
'.chip:hover { border-color: var(--green); color: var(--green); background: var(--green-bg); }',
'',
'.msg { display: flex; flex-direction: column; gap: 3px; animation: fadeIn 0.2s ease; }',
'@keyframes fadeIn { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:none} }',
'.msg-user { align-items: flex-end; }',
'.msg-ai { align-items: flex-start; }',
'.msg-meta { font-size: 10px; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; padding: 0 4px; display: flex; align-items: center; gap: 5px; }',
'.msg-meta .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--green); }',
'.bubble { max-width: 88%; padding: 11px 15px; border-radius: 14px; font-size: 14px; line-height: 1.75; word-break: break-word; }',
'.bubble-user { background: var(--user-bg); border: 1px solid var(--border); border-bottom-right-radius: 4px; }',
'.bubble-ai { background: var(--green-bg); border: 1px solid var(--green-border); border-bottom-left-radius: 4px; }',
'.bubble-ai.loading { color: var(--muted); }',
'.bubble-ai.loading::after { content: \'●●●\'; animation: dots 1.2s infinite; display: inline-block; }',
'@keyframes dots { 0%{opacity:0.2} 50%{opacity:1} 100%{opacity:0.2} }',
'.bubble-ai code { background: var(--code-bg); border: 1px solid var(--border); border-radius: 4px; padding: 1px 5px; font-size: 12px; font-family: \'SF Mono\', monospace; color: var(--green); }',
'.bubble-ai pre { background: var(--code-bg); border: 1px solid var(--border); border-radius: 8px; padding: 12px; margin: 8px 0; overflow-x: auto; }',
'.bubble-ai pre code { background: none; border: none; padding: 0; color: var(--text2); font-size: 12px; }',
'.bubble-ai strong { font-weight: 600; }',
'.bubble-ai a { color: var(--green); text-decoration: none; }',
'.bubble-ai ul, .bubble-ai ol { padding-left: 1.25rem; margin: 6px 0; }',
'.bubble-ai li { margin: 3px 0; }',
'.msg-actions { display: flex; gap: 5px; padding: 0 4px; opacity: 0; transition: opacity 0.15s; flex-wrap: wrap; }',
'.msg:hover .msg-actions { opacity: 1; }',
'.action-btn { background: none; border: 1px solid var(--border); color: var(--muted); font-size: 11px; padding: 3px 8px; border-radius: 6px; cursor: pointer; font-family: inherit; transition: all 0.15s; }',
'.action-btn:hover { color: var(--text); border-color: var(--border-hover); }',
'.action-btn.preview-btn { border-color: var(--green-border); color: var(--green); }',
'.sources { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 6px; padding: 0 4px; }',
'.source-tag { background: var(--surface); border: 1px solid var(--border); color: var(--text2); font-size: 11px; padding: 3px 9px; border-radius: 20px; text-decoration: none; transition: all 0.15s; }',
'.source-tag:hover { border-color: var(--green); color: var(--green); }',
'',
'.file-preview-wrap { padding: 0 1rem; max-width: 800px; margin: 0 auto; width: 100%; }',
'.file-preview { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 7px 12px; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--text2); }',
'.file-preview-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }',
'.file-preview-remove { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 14px; }',
'.file-preview-remove:hover { color: #f87171; }',
'',
'.input-area { flex-shrink: 0; padding: 0.6rem 1rem 0.75rem; border-top: 1px solid var(--border); }',
'.input-wrap { max-width: 800px; margin: 0 auto; }',
'.input-box { display: flex; align-items: flex-end; background: var(--surface); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; transition: border-color 0.2s, box-shadow 0.2s; }',
'.input-box:focus-within { border-color: var(--green); box-shadow: 0 0 0 3px rgba(74,222,128,0.07); }',
'.chat-input { flex: 1; background: transparent; border: none; color: var(--text); font-size: 14px; padding: 12px 14px; outline: none; font-family: inherit; resize: none; max-height: 140px; line-height: 1.6; }',
'.chat-input::placeholder { color: var(--muted); }',
'.input-actions { display: flex; align-items: flex-end; padding: 5px; gap: 3px; }',
'.attach-btn { background: none; border: 1px solid var(--border); color: var(--muted); font-size: 15px; width: 32px; height: 32px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }',
'.attach-btn:hover { border-color: var(--green); color: var(--green); }',
'.send-btn { background: var(--green); border: none; color: var(--btn-text); font-size: 16px; width: 36px; height: 36px; cursor: pointer; flex-shrink: 0; border-radius: 10px; display: flex; align-items: center; justify-content: center; transition: opacity 0.15s; }',
'.send-btn:hover { opacity: 0.85; }',
'.send-btn:disabled { opacity: 0.3; cursor: not-allowed; }',
'.input-hint { font-size: 10px; color: var(--muted); text-align: center; margin-top: 5px; }',
'.file-input { display: none; }',
'',
'/* PREVIEW PANEL */',
'.preview-panel { width: 0; flex-shrink: 0; display: flex; flex-direction: column; overflow: hidden; transition: width 0.3s ease; background: var(--surface); border-left: 1px solid var(--border); }',
'.preview-panel.open { width: 48%; }',
'.preview-header { display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 1rem; border-bottom: 1px solid var(--border); flex-shrink: 0; }',
'.preview-title { font-size: 12px; font-weight: 600; color: var(--text2); text-transform: uppercase; letter-spacing: 0.05em; }',
'.preview-tabs { display: flex; gap: 4px; }',
'.preview-tab { background: none; border: 1px solid var(--border); color: var(--muted); font-size: 11px; font-family: inherit; padding: 3px 9px; border-radius: 6px; cursor: pointer; transition: all 0.15s; }',
'.preview-tab.active { background: var(--green); border-color: var(--green); color: var(--btn-text); }',
'.preview-close { background: none; border: none; color: var(--muted); font-size: 16px; cursor: pointer; padding: 2px 5px; border-radius: 4px; }',
'.preview-close:hover { color: var(--text); }',
'.preview-content { flex: 1; overflow: hidden; }',
'.preview-iframe { width: 100%; height: 100%; border: none; background: white; }',
'.preview-code { width: 100%; height: 100%; overflow: auto; padding: 1rem; font-family: \'SF Mono\', monospace; font-size: 12px; color: var(--text2); background: var(--code-bg); white-space: pre; line-height: 1.6; }',
'.preview-empty { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: var(--muted); font-size: 13px; gap: 8px; text-align: center; padding: 2rem; }',
'',
'/* MODALS */',
'.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.75); z-index: 100; display: flex; align-items: center; justify-content: center; padding: 1rem; }',
'.modal-overlay.hidden { display: none; }',
'.modal { background: var(--modal-bg); border: 1px solid var(--border); border-radius: 16px; padding: 1.75rem; width: 100%; max-width: 380px; }',
'.modal-title { font-size: 19px; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 0.25rem; }',
'.modal-title em { font-style: normal; color: var(--green); }',
'.modal-sub { font-size: 13px; color: var(--text2); margin-bottom: 1.25rem; }',
'.modal-tabs { display: flex; margin-bottom: 1.25rem; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }',
'.modal-tab { flex: 1; background: none; border: none; color: var(--text2); font-family: inherit; font-size: 13px; padding: 8px; cursor: pointer; transition: all 0.15s; }',
'.modal-tab.active { background: var(--green); color: var(--btn-text); font-weight: 600; }',
'.field { margin-bottom: 10px; }',
'.field label { font-size: 12px; color: var(--text2); display: block; margin-bottom: 4px; }',
'.field input { width: 100%; background: var(--bg); border: 1px solid var(--border); color: var(--text); font-family: inherit; font-size: 14px; padding: 9px 12px; border-radius: 8px; outline: none; transition: border-color 0.15s; }',
'.field input:focus { border-color: var(--green); }',
'.modal-btn { width: 100%; background: var(--green); border: none; color: var(--btn-text); font-family: inherit; font-size: 14px; font-weight: 700; padding: 11px; border-radius: 8px; cursor: pointer; margin-top: 4px; transition: opacity 0.15s; }',
'.modal-btn:hover { opacity: 0.85; }',
'.modal-err { font-size: 12px; color: #f87171; margin-top: 8px; text-align: center; min-height: 16px; }',
'.modal-skip { font-size: 12px; color: var(--text2); text-align: center; margin-top: 10px; cursor: pointer; }',
'.modal-skip:hover { color: var(--green); }',
'',
'/* DISCLAIMER MODAL */',
'.disclaimer-modal { max-width: 480px; }',
'.disclaimer-modal h3 { font-size: 16px; font-weight: 700; margin-bottom: 1rem; }',
'.disclaimer-modal p { font-size: 13px; color: var(--text2); line-height: 1.7; margin-bottom: 0.75rem; }',
'.disclaimer-modal .close-btn { width: 100%; background: var(--green); border: none; color: var(--btn-text); font-family: inherit; font-size: 14px; font-weight: 700; padding: 10px; border-radius: 8px; cursor: pointer; margin-top: 0.5rem; }',
'',
'/* MOBILE */',
'@media (max-width: 640px) {',
'  .sidebar { width: 44px; }',
'  .model-select { display: none; }',
'  .preview-panel.open { position: fixed; inset: 0; width: 100%; z-index: 50; }',
'  .bubble { max-width: 95%; }',
'  .topbar { padding: 0.5rem 0.75rem; }',
'}',
'</style>',
'</head>',
'<body>',
'',
'<!-- AUTH MODAL -->',
'<div class="modal-overlay" id="modal-auth">',
'  <div class="modal">',
'    <div class="modal-title">Zy<em>AI</em></div>',
'    <div class="modal-sub">Sign in to save your chat history</div>',
'    <div class="modal-tabs">',
'      <button class="modal-tab active" id="tab-login" onclick="switchTab(\'login\')">Login</button>',
'      <button class="modal-tab" id="tab-register" onclick="switchTab(\'register\')">Register</button>',
'    </div>',
'    <div class="field"><label>Email</label><input type="email" id="auth-email" placeholder="you@example.com" /></div>',
'    <div class="field"><label>Password</label><input type="password" id="auth-password" placeholder="••••••••" /></div>',
'    <button class="modal-btn" id="auth-btn" onclick="doAuth()">Login</button>',
'    <div class="modal-err" id="auth-err"></div>',
'    <div class="modal-skip" onclick="skipAuth()">Continue without account →</div>',
'  </div>',
'</div>',
'',
'<!-- DISCLAIMER MODAL -->',
'<div class="modal-overlay hidden" id="modal-disclaimer">',
'  <div class="modal disclaimer-modal">',
'    <h3>⚠ Terms & Disclaimer</h3>',
'    <p>By using ZyAI, you acknowledge that AI-generated responses may contain errors and you assume full responsibility for any decisions made based on this information.</p>',
'    <p>Laws and regulations vary by jurisdiction. ZyAI does not provide legal, financial, or professional advice.</p>',
'    <p>Unauthorized copying, reproduction, or distribution of our code and content is strictly prohibited.</p>',
'    <p style="color: var(--muted); font-size: 12px;">© 2026 ZyAI. All rights reserved.</p>',
'    <button class="close-btn" onclick="closeDisclaimer()">I Understand</button>',
'  </div>',
'</div>',
'',
'<!-- SIDEBAR -->',
'<div class="sidebar">',
'  <div class="sidebar-logo" onclick="clearChat()">T</div>',
'  <button class="sb-btn active" id="sb-chat" onclick="setPanel(\'chat\')" title="Chat">💬</button>',
'  <button class="sb-btn" id="sb-search" onclick="setPanel(\'search\')" title="Search">🔍</button>',
'  <button class="sb-btn" id="sb-preview" onclick="togglePreviewFromSidebar()" title="Preview">🖥</button>',
'  <div class="sidebar-divider"></div>',
'  <button class="sb-btn" id="sb-theme" onclick="toggleTheme()" title="Toggle theme">☀</button>',
'  <button class="sb-btn" onclick="showDisclaimer()" title="Terms">⚖</button>',
'  <div class="sb-bottom">',
'    <div class="user-avatar" id="user-avatar" onclick="showUserMenu()" title="Account">?</div>',
'  </div>',
'</div>',
'',
'<!-- MAIN -->',
'<div class="main">',
'  <div class="topbar">',
'    <div class="brand"><div class="brand-dot"></div>Zy<em>AI</em></div>',
'    <div class="topbar-right">',
'      <select class="model-select" id="model-select" onchange="saveModel()">',
'        <option value="@cf/meta/llama-3.3-70b-instruct-fp8-fast">llama-3.3-70b</option>',
'        <option value="@cf/zai-org/glm-4.7-flash">glm-4.7-flash</option>',
'        <option value="@cf/meta/llama-3.2-3b-instruct">llama-3.2-3b</option>',
'      </select>',
'      <button class="pill-btn" onclick="clearChat()">new chat</button>',
'      <button class="icon-btn" onclick="document.getElementById(\'modal-auth\').classList.remove(\'hidden\')" title="Account">👤</button>',
'    </div>',
'  </div>',
'',
'  <div class="app-content">',
'    <div class="chat-panel" id="chat-panel">',
'      <div class="messages" id="messages">',
'        <div class="empty-state" id="empty">',
'          <div class="empty-logo">Zy<em>AI</em></div>',
'          <div class="chips">',
'            <button class="chip" onclick="suggest(this)">Merhaba! Ne yapabilirsin?</button>',
'            <button class="chip" onclick="suggest(this)">What is a reentrancy attack?</button>',
'            <button class="chip" onclick="suggest(this)">Build me a landing page</button>',
'            <button class="chip" onclick="suggest(this)">SQL injection nasıl çalışır?</button>',
'            <button class="chip" onclick="suggest(this)">Write a Solidity ERC20 token</button>',
'            <button class="chip" onclick="suggest(this)">Explain MEV on Ethereum</button>',
'            <button class="chip" onclick="suggest(this)">React ile todo app yaz</button>',
'            <button class="chip" onclick="suggest(this)">What is OWASP Top 10?</button>',
'          </div>',
'        </div>',
'      </div>',
'      <div class="input-area">',
'        <div class="input-wrap">',
'          <div class="file-preview-wrap" id="file-preview-area"></div>',
'          <div class="input-box">',
'            <textarea class="chat-input" id="input" placeholder="Ask ZyAI anything..." rows="1"></textarea>',
'            <div class="input-actions">',
'              <button class="attach-btn" onclick="document.getElementById(\'file-input\').click()" title="Attach file">📎</button>',
'              <button class="send-btn" id="send-btn" onclick="send()">↑</button>',
'            </div>',
'          </div>',
'          <input type="file" id="file-input" class="file-input" accept=".txt,.js,.ts,.py,.sol,.html,.css,.json,.md,.jsx,.tsx,.rs,.go,.java,.cpp,.c,.php" onchange="handleFile(this)" />',
'          <div class="input-hint">Enter to send · Shift+Enter for new line · 📎 attach file</div>',
'        </div>',
'      </div>',
'    </div>',
'',
'    <div class="preview-panel" id="preview-panel">',
'      <div class="preview-header">',
'        <div class="preview-title">Preview</div>',
'        <div class="preview-tabs">',
'          <button class="preview-tab active" id="ptab-preview" onclick="switchPreview(\'preview\')">Preview</button>',
'          <button class="preview-tab" id="ptab-code" onclick="switchPreview(\'code\')">Code</button>',
'        </div>',
'        <button class="preview-close" onclick="closePreview()">✕</button>',
'      </div>',
'      <div class="preview-content" id="preview-content">',
'        <div class="preview-empty">No preview yet.<br><br>Ask AI to build something!</div>',
'      </div>',
'    </div>',
'  </div>',
'</div>',
'',
'<script>',
'const WORKER = \'https://zyai.org\';',
'let history = [];',
'let loading = false;',
'let currentUser = null;',
'let authTab = \'login\';',
'let currentCode = \'\';',
'let previewMode = \'preview\';',
'let attachedFile = null;',
'',
'(function init() {',
'  const saved = localStorage.getItem(\'testai_user\');',
'  if (saved) { currentUser = JSON.parse(saved); updateUserAvatar(); document.getElementById(\'modal-auth\').classList.add(\'hidden\'); }',
'  else { document.getElementById(\'modal-auth\').classList.remove(\'hidden\'); }',
'  const model = localStorage.getItem(\'testai_model\');',
'  if (model) document.getElementById(\'model-select\').value = model;',
'  const theme = localStorage.getItem(\'testai_theme\') || \'dark\';',
'  document.documentElement.setAttribute(\'data-theme\', theme);',
'  document.getElementById(\'sb-theme\').textContent = theme === \'dark\' ? \'☀\' : \'☾\';',
'})();',
'',
'function updateUserAvatar() {',
'  const av = document.getElementById(\'user-avatar\');',
'  if (currentUser) { av.textContent = currentUser.email[0].toUpperCase(); av.title = currentUser.email; }',
'  else { av.textContent = \'?\'; av.title = \'Account\'; }',
'}',
'',
'function showUserMenu() {',
'  if (currentUser) { if (confirm(\'Logout from \' + currentUser.email + \'?\')) logout(); }',
'  else { document.getElementById(\'modal-auth\').classList.remove(\'hidden\'); }',
'}',
'',
'function showDisclaimer() { document.getElementById(\'modal-disclaimer\').classList.remove(\'hidden\'); }',
'function closeDisclaimer() { document.getElementById(\'modal-disclaimer\').classList.add(\'hidden\'); }',
'',
'function setPanel(panel) {',
'  document.getElementById(\'sb-chat\').classList.toggle(\'active\', panel === \'chat\');',
'  document.getElementById(\'sb-search\').classList.toggle(\'active\', panel === \'search\');',
'}',
'',
'function togglePreviewFromSidebar() {',
'  const panel = document.getElementById(\'preview-panel\');',
'  if (panel.classList.contains(\'open\')) { closePreview(); document.getElementById(\'sb-preview\').classList.remove(\'active\'); }',
'  else if (currentCode) { panel.classList.add(\'open\'); document.getElementById(\'sb-preview\').classList.add(\'active\'); switchPreview(previewMode); }',
'}',
'',
'function switchTab(tab) {',
'  authTab = tab;',
'  document.getElementById(\'tab-login\').classList.toggle(\'active\', tab === \'login\');',
'  document.getElementById(\'tab-register\').classList.toggle(\'active\', tab === \'register\');',
'  document.getElementById(\'auth-btn\').textContent = tab === \'login\' ? \'Login\' : \'Register\';',
'  document.getElementById(\'auth-err\').textContent = \'\';',
'}',
'',
'async function doAuth() {',
'  const email = document.getElementById(\'auth-email\').value.trim();',
'  const password = document.getElementById(\'auth-password\').value;',
'  const errEl = document.getElementById(\'auth-err\');',
'  if (!email || !password) { errEl.textContent = \'Please fill in all fields\'; return; }',
'  document.getElementById(\'auth-btn\').textContent = \'Please wait...\';',
'  try {',
'    const res = await fetch(WORKER + \'/api/auth\', { method: \'POST\', headers: { \'Content-Type\': \'application/json\' }, body: JSON.stringify({ action: authTab, email, password }) });',
'    const data = await res.json();',
'    if (data.error) { errEl.textContent = data.error; document.getElementById(\'auth-btn\').textContent = authTab === \'login\' ? \'Login\' : \'Register\'; return; }',
'    currentUser = data.user;',
'    localStorage.setItem(\'testai_user\', JSON.stringify(currentUser));',
'    document.getElementById(\'modal-auth\').classList.add(\'hidden\');',
'    updateUserAvatar();',
'    if (data.history) loadHistory(data.history);',
'  } catch(e) { errEl.textContent = \'Connection error\'; document.getElementById(\'auth-btn\').textContent = authTab === \'login\' ? \'Login\' : \'Register\'; }',
'}',
'',
'function skipAuth() { document.getElementById(\'modal-auth\').classList.add(\'hidden\'); }',
'',
'function logout() {',
'  currentUser = null;',
'  localStorage.removeItem(\'testai_user\');',
'  updateUserAvatar();',
'  clearChat();',
'}',
'',
'function loadHistory(msgs) {',
'  if (!msgs || !msgs.length) return;',
'  msgs.forEach(function(m) {',
'    history.push({ role: m.role === \'assistant\' ? \'assistant\' : \'user\', content: m.content });',
'    addMsg(m.role === \'assistant\' ? \'ai\' : \'user\', m.content, false);',
'  });',
'}',
'',
'function saveModel() { localStorage.setItem(\'testai_model\', document.getElementById(\'model-select\').value); }',
'',
'function toggleTheme() {',
'  const html = document.documentElement;',
'  const next = html.getAttribute(\'data-theme\') === \'dark\' ? \'light\' : \'dark\';',
'  html.setAttribute(\'data-theme\', next);',
'  document.getElementById(\'sb-theme\').textContent = next === \'dark\' ? \'☀\' : \'☾\';',
'  localStorage.setItem(\'testai_theme\', next);',
'}',
'',
'function clearChat() { history = []; loading = false; attachedFile = null; document.getElementById(\'send-btn\').disabled = false; location.reload(); }',
'function suggest(btn) { document.getElementById(\'input\').value = btn.textContent; send(); }',
'',
'function handleFile(input) {',
'  const file = input.files[0];',
'  if (!file) return;',
'  if (file.size > 500 * 1024) { alert(\'File too large. Max 500KB.\'); return; }',
'  const reader = new FileReader();',
'  reader.onload = function(e) {',
'    attachedFile = { name: file.name, content: e.target.result };',
'    const ext = file.name.split(\'.\').pop().toLowerCase();',
'    const icons = { js: \'🟨\', ts: \'🔷\', py: \'🐍\', sol: \'⟠\', html: \'🌐\', css: \'🎨\', json: \'{}\', md: \'📝\', rs: \'🦀\' };',
'    document.getElementById(\'file-preview-area\').innerHTML = \'<div class="file-preview"><span>\' + (icons[ext] || \'📄\') + \'</span><span class="file-preview-name">\' + esc(file.name) + \'</span><button class="file-preview-remove" onclick="removeFile()">✕</button></div>\';',
'  };',
'  reader.readAsText(file);',
'  input.value = \'\';',
'}',
'',
'function removeFile() { attachedFile = null; document.getElementById(\'file-preview-area\').innerHTML = \'\'; }',
'',
'const inp = document.getElementById(\'input\');',
'inp.addEventListener(\'keydown\', function(e) { if (e.key === \'Enter\' && !e.shiftKey) { e.preventDefault(); send(); } });',
'inp.addEventListener(\'input\', function() { this.style.height = \'auto\'; this.style.height = Math.min(this.scrollHeight, 140) + \'px\'; });',
'',
'function extractCode(text) {',
'  const htmlMatch = text.match(/\\u0060\\u0060\\u0060html\\n?([\\s\\S]*?)\\u0060\\u0060\\u0060/i);',
'  if (htmlMatch) return { type: \'html\', code: htmlMatch[1].trim() };',
'  const jsMatch = text.match(/\\u0060\\u0060\\u0060javascript\\n?([\\s\\S]*?)\\u0060\\u0060\\u0060/i) || text.match(/\\u0060\\u0060\\u0060js\\n?([\\s\\S]*?)\\u0060\\u0060\\u0060/i);',
'  if (jsMatch) return { type: \'js\', code: jsMatch[1].trim() };',
'  return null;',
'}',
'',
'function openPreview(code) {',
'  currentCode = code;',
'  document.getElementById(\'preview-panel\').classList.add(\'open\');',
'  document.getElementById(\'sb-preview\').classList.add(\'active\');',
'  switchPreview(previewMode);',
'}',
'',
'function closePreview() {',
'  document.getElementById(\'preview-panel\').classList.remove(\'open\');',
'  document.getElementById(\'sb-preview\').classList.remove(\'active\');',
'}',
'',
'function switchPreview(mode) {',
'  previewMode = mode;',
'  document.getElementById(\'ptab-preview\').classList.toggle(\'active\', mode === \'preview\');',
'  document.getElementById(\'ptab-code\').classList.toggle(\'active\', mode === \'code\');',
'  const content = document.getElementById(\'preview-content\');',
'  if (mode === \'preview\') {',
'    content.innerHTML = \'<iframe class="preview-iframe" id="preview-frame"></iframe>\';',
'    const frame = document.getElementById(\'preview-frame\');',
'    const doc = frame.contentDocument || frame.contentWindow.document;',
'    doc.open(); doc.write(currentCode); doc.close();',
'  } else {',
'    content.innerHTML = \'<div class="preview-code">\' + esc(currentCode) + \'</div>\';',
'  }',
'}',
'',
'function renderMarkdown(text) {',
'  return text',
'    .replace(/&/g,\'&amp;\').replace(/</g,\'&lt;\').replace(/>/g,\'&gt;\')',
'    .replace(/\\u0060\\u0060\\u0060(\\w*)\\n?([\\s\\S]*?)\\u0060\\u0060\\u0060/g, function(_, lang, code) { return \'<pre><code>\' + code.trim() + \'</code></pre>\'; })',
'    .replace(/\\u0060([^\\u0060]+)\\u0060/g, \'<code>$1</code>\')',
'    .replace(/\\*\\*([^*]+)\\*\\*/g, \'<strong>$1</strong>\')',
'    .replace(/\\*([^*]+)\\*/g, \'<em>$1</em>\')',
'    .replace(/\\[([^\\]]+)\\]\\((https?:\\/\\/[^)]+)\\)/g, \'<a href="$2" target="_blank">$1</a>\')',
'    .replace(/^#{1,3} (.+)$/gm, \'<strong>$1</strong>\')',
'    .replace(/^- (.+)$/gm, \'• $1\')',
'    .replace(/\\n/g, \'<br>\');',
'}',
'',
'function addMsg(role, text, isLoading) {',
'  const empty = document.getElementById(\'empty\');',
'  if (empty) empty.remove();',
'  const msgs = document.getElementById(\'messages\');',
'  const div = document.createElement(\'div\');',
'  div.className = \'msg msg-\' + role;',
'  const label = role === \'user\' ? \'you\' : \'<span class="dot"></span> AI\';',
'  const content = isLoading ? \'\' : (role === \'ai\' ? renderMarkdown(text) : esc(text));',
'  div.innerHTML = \'<div class="msg-meta">\' + label + \'</div><div class="bubble bubble-\' + role + (isLoading ? \' loading\' : \'\') + \'">\' + content + \'</div>\';',
'  msgs.appendChild(div);',
'  msgs.scrollTop = msgs.scrollHeight;',
'  return div.querySelector(\'.bubble\');',
'}',
'',
'function copyMsg(btn) {',
'  const bubble = btn.closest(\'.msg\').querySelector(\'.bubble\');',
'  navigator.clipboard.writeText(bubble.innerText).then(function() { btn.textContent = \'copied!\'; setTimeout(function() { btn.textContent = \'copy\'; }, 1500); });',
'}',
'',
'async function send() {',
'  if (loading) return;',
'  const q = inp.value.trim();',
'  if (!q && !attachedFile) return;',
'  inp.value = \'\'; inp.style.height = \'auto\';',
'  loading = true;',
'  document.getElementById(\'send-btn\').disabled = true;',
'  let userContent = q;',
'  let fileData = null;',
'  if (attachedFile) { fileData = { name: attachedFile.name, content: attachedFile.content.slice(0, 50000) }; if (!q) userContent = \'Please analyze this file: \' + attachedFile.name; removeFile(); }',
'  addMsg(\'user\', userContent + (fileData ? \'\\n\\n📎 \' + fileData.name : \'\'));',
'  history.push({ role: \'user\', content: userContent });',
'  const bubble = addMsg(\'ai\', \'\', true);',
'  const model = document.getElementById(\'model-select\').value;',
'  try {',
'    const res = await fetch(WORKER + \'/api/chat\', { method: \'POST\', headers: { \'Content-Type\': \'application/json\' }, body: JSON.stringify({ messages: history, model, user_id: currentUser ? currentUser.id : null, file: fileData }) });',
'    const data = await res.json();',
'    const answer = data.answer || data.error || \'No response\';',
'    bubble.classList.remove(\'loading\');',
'    bubble.innerHTML = renderMarkdown(answer);',
'    history.push({ role: \'assistant\', content: answer });',
'    const extracted = extractCode(answer);',
'    const actions = document.createElement(\'div\');',
'    actions.className = \'msg-actions\';',
'    let btns = \'<button class="action-btn" onclick="copyMsg(this)">copy</button>\';',
'    if (extracted && extracted.type === \'html\') { btns += \'<button class="action-btn preview-btn" onclick="openPreview(\' + JSON.stringify(extracted.code) + \')">▶ preview</button>\'; openPreview(extracted.code); }',
'    actions.innerHTML = btns;',
'    bubble.closest(\'.msg\').appendChild(actions);',
'    if (data.sources && data.sources.length) {',
'      const src = document.createElement(\'div\'); src.className = \'sources\';',
'      src.innerHTML = data.sources.map(function(s) { return s.url ? \'<a class="source-tag" href="\' + esc(s.url) + \'" target="_blank">\' + esc(s.title) + \'</a>\' : \'\'; }).filter(Boolean).join(\'\');',
'      bubble.closest(\'.msg\').appendChild(src);',
'    }',
'  } catch(e) { bubble.classList.remove(\'loading\'); bubble.textContent = \'Error: \' + e.message; }',
'  loading = false;',
'  document.getElementById(\'send-btn\').disabled = false;',
'  document.getElementById(\'messages\').scrollTop = 99999;',
'}',
'',
'function esc(s) { return String(s).replace(/&/g,\'&amp;\').replace(/</g,\'&lt;\').replace(/>/g,\'&gt;\').replace(/"/g,\'&quot;\'); }',
'</script>',
'</body>',
'</html>',
''
].join("\n");

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function analyzeContract(address) {
  try {
    const rpcUrl = 'https://mainnet.base.org';
    const [codeRes, balRes] = await Promise.all([
      fetch(rpcUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ jsonrpc: '2.0', method: 'eth_getCode', params: [address, 'latest'], id: 1 }) }),
      fetch(rpcUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ jsonrpc: '2.0', method: 'eth_getBalance', params: [address, 'latest'], id: 2 }) })
    ]);
    const codeData = await codeRes.json();
    const balData = await balRes.json();
    const code = codeData.result;
    if (!code || code === '0x') return { error: 'Not a contract or empty' };
    const balEth = parseInt(balData.result, 16) / 1e18;
    return { address, hasCode: true, codeSize: (code.length - 2) / 2 + ' bytes', balance: balEth.toFixed(6) + ' ETH', network: 'Base Mainnet' };
  } catch(e) { return { error: e.message }; }
}

async function runAI(model, messages, env) {
  // Try Cloudflare AI first
  try {
    const ai = await env.AI.run(model, { messages, max_tokens: 2048 });
    const msg = ai.choices && ai.choices[0] && ai.choices[0].message;
    const answer = ai.response || (msg && msg.content) || (msg && msg.reasoning_content) || '';
    if (answer && !answer.includes('neuron')) return { answer, provider: 'cloudflare' };
  } catch(e) {
    if (!e.message.includes('neuron') && !e.message.includes('4006') && !e.message.includes('limit')) {
      throw e;
    }
  }

  // Fallback to Groq
  if (env.GROQ_KEY) {
    const groqModel = model.includes('llama-3.2') ? 'llama-3.2-3b-preview' : 'llama-3.3-70b-versatile';
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + env.GROQ_KEY },
      body: JSON.stringify({ model: groqModel, messages, max_tokens: 2048 }),
    });
    if (res.ok) {
      const data = await res.json();
      const answer = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
      if (answer) return { answer, provider: 'groq' };
    }
  }

  // Fallback to OpenRouter
  if (env.OPENROUTER_KEY) {
    const orModel = 'meta-llama/llama-3.3-70b-instruct:free';
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + env.OPENROUTER_KEY, 'HTTP-Referer': 'https://zyai.org', 'X-Title': 'ZyAI' },
      body: JSON.stringify({ model: orModel, messages, max_tokens: 2048 }),
    });
    if (res.ok) {
      const data = await res.json();
      const answer = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
      if (answer) return { answer, provider: 'openrouter' };
    }
  }

  // Fallback to Mistral
  if (env.MISTRAL_KEY) {
    const res = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + env.MISTRAL_KEY },
      body: JSON.stringify({ model: 'mistral-small-latest', messages, max_tokens: 2048 }),
    });
    if (res.ok) {
      const data = await res.json();
      const answer = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
      if (answer) return { answer, provider: 'mistral' };
    }
  }

  throw new Error('All AI providers unavailable');
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    if (url.pathname === '/' || url.pathname === '') {
      return new Response(HTML, { headers: { ...cors, 'Content-Type': 'text/html;charset=UTF-8' } });
    }

    if (url.pathname === '/api/auth' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { action, email, password } = body;
        if (!email || !password) return new Response(JSON.stringify({ error: 'Email and password required' }), { status: 400, headers: cors });
        const hash = await hashPassword(password);
        if (action === 'register') {
          try {
            await env.DB.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)').bind(email, hash).run();
            const user = await env.DB.prepare('SELECT id, email FROM users WHERE email = ?').bind(email).first();
            return new Response(JSON.stringify({ user }), { headers: { ...cors, 'Content-Type': 'application/json' } });
          } catch(e) { return new Response(JSON.stringify({ error: 'Email already exists' }), { status: 400, headers: cors }); }
        }
        if (action === 'login') {
          const user = await env.DB.prepare('SELECT id, email FROM users WHERE email = ? AND password_hash = ?').bind(email, hash).first();
          if (!user) return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401, headers: cors });
          const chats = await env.DB.prepare('SELECT role, content FROM chats WHERE user_id = ? ORDER BY created_at DESC LIMIT 20').bind(user.id).all();
          return new Response(JSON.stringify({ user, history: chats.results.reverse() }), { headers: { ...cors, 'Content-Type': 'application/json' } });
        }
        return new Response(JSON.stringify({ error: 'Invalid action' }), { status: 400, headers: cors });
      } catch(e) { return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: cors }); }
    }

    if (url.pathname === '/api/chat' && request.method === 'POST') {
      try {
        const body = await request.json();
        const messages = body.messages || [];
        const model = body.model || '@cf/meta/llama-3.3-70b-instruct-fp8-fast';
        const user_id = body.user_id || null;
        const file = body.file || null;
        const lastMsg = messages[messages.length - 1];
        const question = lastMsg ? lastMsg.content : '';

        const addressMatch = question.match(/0x[a-fA-F0-9]{40}/);
        let onchainData = null;
        if (addressMatch) onchainData = await analyzeContract(addressMatch[0]);

        let sources = [];
        let rows;
        try {
          const ftsQuery = question.split(' ').filter(Boolean).slice(0, 8).map(function(w) { return w + '*'; }).join(' ');
          rows = await env.DB.prepare(
            'SELECT k.title, k.content, k.url FROM knowledge k INNER JOIN knowledge_fts f ON k.id = f.rowid WHERE knowledge_fts MATCH ? ORDER BY rank LIMIT 6'
          ).bind(ftsQuery).all();
        } catch(e) {
          rows = await env.DB.prepare('SELECT title, content, url FROM knowledge WHERE content LIKE ? OR title LIKE ? LIMIT 6').bind('%' + question + '%', '%' + question + '%').all();
        }

        sources = rows.results.map(function(r) { return { title: r.title, url: r.url }; });
        const context = rows.results.map(function(r) { return r.title + ': ' + r.content.slice(0, 500); }).join('\n\n');
        const onchainContext = onchainData && !onchainData.error ? 'Onchain Data: ' + JSON.stringify(onchainData) + '\n\n' : '';
        const fileContext = file ? 'User attached file "' + file.name + '":\n' + file.content.slice(0, 8000) + '\n\n' : '';

        const systemPrompt = 'You are a smart, helpful AI assistant. You adapt to the user naturally:\n' +
          '- If someone greets you or makes small talk, respond warmly and naturally\n' +
          '- If someone asks a technical question, go deep and be precise\n' +
          '- Match the language of the user (Turkish or English)\n' +
          '- When asked to build something, provide complete working HTML/CSS/JS in a single file inside \u0060\u0060\u0060html code blocks\n' +
          '- When analyzing code or files, be thorough: find bugs, security issues, improvements\n' +
          '- For security topics, be technical and cite specific CVEs or patterns when relevant\n' +
          '- Never be robotic or overly formal - be like a knowledgeable friend\n' +
          '- CRITICAL: Always respond ONLY in the same language the user wrote in. Never mix languages.\n\n' +
          fileContext + onchainContext + (context ? 'Knowledge Base:\n' + context : '');

        const aiMessages = [{ role: 'system', content: systemPrompt }].concat(messages.slice(-10));
        const result = await runAI(model, aiMessages, env);
        const answer = result.answer;

        if (user_id) {
          const userMsg = messages[messages.length - 1];
          if (userMsg) await env.DB.prepare('INSERT INTO chats (user_id, role, content) VALUES (?, ?, ?)').bind(user_id, 'user', userMsg.content).run();
          await env.DB.prepare('INSERT INTO chats (user_id, role, content) VALUES (?, ?, ?)').bind(user_id, 'assistant', answer).run();
        }

        return new Response(JSON.stringify({ answer, sources, onchain: onchainData, provider: result.provider }), { headers: { ...cors, 'Content-Type': 'application/json' } });
      } catch(e) { return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: cors }); }
    }

    return new Response('not found', { status: 404, headers: cors });
  }
};