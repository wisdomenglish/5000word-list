// 文字轉語音工具 — 聽力測驗用
// 主要使用瀏覽器內建 Web Speech API（免費、免 CORS、無長度限制、可離線）
// 之後若要改用 Google Translate TTS，改寫 speak() 內部即可，呼叫端不需更動

export function ttsSupported() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

// 去掉對話的 M:/W: 說話者標記，讓朗讀自然一些
function cleanForSpeech(text) {
  return String(text)
    .replace(/\b[MWmw]\s*:\s*/g, '')
    .replace(/\s*\n\s*/g, '. ')
    .trim();
}

let activeResolve = null;

// 朗讀一段文字，回傳 Promise（朗讀結束 / 出錯 / 被中止時 resolve）
export function speak(text, { rate = 0.9 } = {}) {
  stopSpeaking();
  if (!ttsSupported() || !text) return Promise.resolve();

  return new Promise((resolve) => {
    activeResolve = resolve;
    const u = new SpeechSynthesisUtterance(cleanForSpeech(text));
    u.lang = 'en-US';
    u.rate = rate;
    const finish = () => { if (activeResolve === resolve) activeResolve = null; resolve(); };
    u.onend = finish;
    u.onerror = finish;
    try {
      window.speechSynthesis.speak(u);
    } catch {
      finish();
    }
  });
}

export function stopSpeaking() {
  if (ttsSupported()) {
    try { window.speechSynthesis.cancel(); } catch { /* noop */ }
  }
  if (activeResolve) { const r = activeResolve; activeResolve = null; r(); }
}
