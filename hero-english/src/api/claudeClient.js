import { VOCAB_DATA } from '../data/vocab-data';

const API_URL          = import.meta.env.VITE_CLAUDE_API_URL || null;
const EXAMPLE_URL      = 'https://generatewordexample-gtlccx6nka-uc.a.run.app';
const DEFINITION_URL   = 'https://generateworddefinition-gtlccx6nka-uc.a.run.app';
const CONVERSATION_URL = 'https://generateconversation-gtlccx6nka-uc.a.run.app';
const VOCAB_QUIZ_URL   = 'https://generatevocabquizv2-gtlccx6nka-uc.a.run.app';
const READING_QUIZ_URL = 'https://generatereadingquiz-gtlccx6nka-uc.a.run.app';
const LISTENING_QUIZ_URL = 'https://generatelisteningquiz-gtlccx6nka-uc.a.run.app';
const EX_CACHE_PREFIX  = 'hej_ex_';
const { vocab, phrases } = VOCAB_DATA;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function mainZh(zh) { return zh.split(/[；;]/)[0].trim(); }
function posDisplay(pos) { return Array.isArray(pos) ? pos.join('/') : pos; }

function getDistractors(pool, correctKey, n = 3, key = 'zh') {
  return shuffle(pool.filter(item => item[key] !== correctKey))
    .slice(0, n)
    .map(item => (key === 'zh' ? mainZh(item[key]) : item[key]));
}

function makeVocabMeaningQ(word) {
  const correctZh = mainZh(word.zh);
  return {
    type: 'vocabulary_meaning',
    prompt: word.word,
    phonetic: word.phonetic || '',
    promptLabel: '選出正確意思',
    subtext: posDisplay(word.pos),
    answer: correctZh,
    choices: shuffle([correctZh, ...getDistractors(vocab, word.zh, 3, 'zh')]),
    xpDifficulty: word.grade <= 2 ? 'easy' : word.grade <= 4 ? 'medium' : 'hard',
    wordKey: word.word,
  };
}

function makeVocabWordQ(word) {
  return {
    type: 'vocabulary_word',
    prompt: mainZh(word.zh),
    phonetic: '',
    promptLabel: '哪個英文單字符合這個意思？',
    subtext: posDisplay(word.pos),
    answer: word.word,
    choices: shuffle([word.word, ...getDistractors(vocab, word.word, 3, 'word')]),
    xpDifficulty: word.grade <= 2 ? 'medium' : 'hard',
    wordKey: word.word,
  };
}

function makePhraseQ(phrase) {
  const correctZh = mainZh(phrase.zh);
  return {
    type: 'phrase_meaning',
    prompt: phrase.phrase,
    phonetic: '',
    promptLabel: '選出正確意思',
    answer: correctZh,
    choices: shuffle([correctZh, ...getDistractors(phrases, phrase.zh, 3, 'zh')]),
    xpDifficulty: 'medium',
    wordKey: phrase.phrase,
  };
}

// Convert API response item to context_choice question format
function aiItemToContextQ(item) {
  const { word, sentence, options, answer, translation, explanation } = item;
  if (!sentence || !Array.isArray(options) || options.length < 2) return null;
  const correctWord = options[typeof answer === 'number' ? answer : 0];
  return {
    type: 'context_choice',
    prompt: sentence,
    phonetic: '',
    promptLabel: '選出符合文意的單字',
    subtext: '',
    answer: correctWord,
    choices: options,
    xpDifficulty: 'medium',
    wordKey: word,
    translation: translation || '',
    explanation: explanation || '',
  };
}

async function fetchContextQuestions(wordsForContext) {
  try {
    const res = await fetch(VOCAB_QUIZ_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        words: wordsForContext.map(w => ({
          word: w.word,
          pos: posDisplay(w.pos),
          zh: mainZh(w.zh),
        })),
        cefrLevel: 'A2-B1',
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) ? data : null;
  } catch {
    return null;
  }
}

export async function buildQuestSession({ count = 5, classId, type } = {}) {
  if (API_URL) {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ count, classId, type }),
      });
      if (res.ok) return await res.json();
    } catch { /* fallthrough */ }
  }
  return buildLocalSession(count, classId, type);
}

async function buildLocalSession(count, classId, type) {
  if (type === 'phrase') {
    return shuffle(phrases).slice(0, count).map(makePhraseQ);
  }

  // ── 文意選填專項 ──
  if (type === 'context') {
    const pool = shuffle(vocab.filter(w => w.grade <= 3)).slice(0, count);
    const aiItems = await fetchContextQuestions(pool);
    if (aiItems && aiItems.length) {
      const qs = aiItems.map(aiItemToContextQ).filter(Boolean).slice(0, count);
      if (qs.length >= count) return qs;
      const extra = shuffle(vocab).slice(0, count - qs.length).map(makeVocabMeaningQ);
      return shuffle([...qs, ...extra]);
    }
    return shuffle(vocab).slice(0, count).map(makeVocabMeaningQ);
  }

  // ── 單字配對專項 ──
  if (type === 'word') {
    const vocabPool = shuffle(vocab);
    const meaningCount = Math.ceil(count * 0.6);
    const wordCount = count - meaningCount;
    return shuffle([
      ...vocabPool.slice(0, meaningCount).map(makeVocabMeaningQ),
      ...vocabPool.slice(meaningCount, meaningCount + wordCount).map(makeVocabWordQ),
    ]).slice(0, count);
  }

  // ── 綜合練習（預設） ──
  const phraseRatio = classId === 'beastTamer' ? 0.4 : 0.25;
  const phraseCount = Math.max(1, Math.round(count * phraseRatio));
  const vocabCount = count - phraseCount;

  const contextCount = count >= 3 ? Math.floor(vocabCount * 0.35) : 0;
  const meaningCount = Math.ceil(vocabCount * 0.4);
  const wordCount = Math.max(0, vocabCount - meaningCount - contextCount);

  const vocabPool = shuffle(vocab);
  const meaningQs = vocabPool.slice(0, meaningCount).map(makeVocabMeaningQ);
  const wordQs = vocabPool.slice(meaningCount, meaningCount + wordCount).map(makeVocabWordQ);
  const phraseQs = shuffle(phrases).slice(0, phraseCount).map(makePhraseQ);

  let contextQs = [];
  if (contextCount > 0) {
    const contextPool = shuffle(vocab.filter(w => w.grade <= 3)).slice(0, contextCount);
    const aiItems = await fetchContextQuestions(contextPool);
    if (aiItems && aiItems.length) {
      contextQs = aiItems.map(aiItemToContextQ).filter(Boolean).slice(0, contextCount);
    }
    if (contextQs.length < contextCount) {
      const extra = vocabPool.slice(meaningCount + wordCount, meaningCount + wordCount + (contextCount - contextQs.length));
      contextQs = [...contextQs, ...extra.map(makeVocabMeaningQ)];
    }
  }

  return shuffle([...meaningQs, ...wordQs, ...contextQs, ...phraseQs]).slice(0, count);
}

export async function generateExample(word, pos, zh) {
  const key = EX_CACHE_PREFIX + word;
  const cached = localStorage.getItem(key);
  if (cached) return JSON.parse(cached);
  const res = await fetch(EXAMPLE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ word, pos: pos || '', zh: zh || '' }),
  });
  if (!res.ok) throw new Error(res.status);
  const data = await res.json();
  localStorage.setItem(key, JSON.stringify(data));
  return data;
}

export async function generateConversationData() {
  const res = await fetch(CONVERSATION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  if (!res.ok) throw new Error(res.status);
  return await res.json();
}

export async function lookupDefinition(word, signal) {
  const res = await fetch(DEFINITION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ word }),
    ...(signal ? { signal } : {}),
  });
  if (!res.ok) throw new Error(res.status);
  return await res.json();
}

export async function buildReadingSession() {
  const res = await fetch(READING_QUIZ_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  if (!res.ok) throw new Error(res.status);
  const data = await res.json();
  // Convert to question array with passage embedded in each question
  const { passage, title, source, questions } = data;
  return questions.map(q => ({
    type: 'reading_choice',
    passage,
    passageTitle: title,
    passageSource: source,
    prompt: q.prompt,
    promptLabel: '閱讀理解',
    choices: q.choices,
    answer: q.answer,
    explanation: q.explanation,
    xpDifficulty: 'hard',
    wordKey: null,
  }));
}

// ───────────────────────── 會考聽力測驗 ─────────────────────────
// Part 1 辨識句意(看圖) 10 XP / Part 2 基本問答 15 XP / Part 3 言談理解 20 XP
export const LISTENING_XP = { 1: 10, 2: 15, 3: 20 };

// 依「正確答案句子」即時生成扁平插畫風圖片（Pollinations.ai，免費免金鑰）
// 圖由句子生成 → 保證圖文一致；seed 用句子雜湊讓同題每次拿到同一張（可被瀏覽器快取）
function strHash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; }
  return Math.abs(h);
}
function listeningIllustrationUrl(sentence) {
  const prompt = `${sentence}. Flat vector illustration, children's storybook style, soft pastel colors, simple clean background, cute, no text, no words, no letters`;
  const seed = strHash(sentence || 'scene');
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=384&nologo=true&seed=${seed}`;
}

// 把 CF 回傳的三部分資料攤平成統一的題目陣列
function flattenListening(data) {
  const out = [];
  (data.part1 || []).forEach((q, i) => {
    if (!Array.isArray(q.choices) || q.choices.length < 2) return;
    out.push({
      part: 1, type: 'listening_part1', index: i,
      emoji: q.emoji || '🖼️',
      imageUrl: listeningIllustrationUrl(q.answer),
      promptLabel: '聽四個句子，選出最符合圖片的描述',
      audioText: q.choices.join('. '),       // 朗讀四個選項
      transcript: q.choices.map((c, n) => `${n + 1}. ${c}`).join('\n'),
      choices: q.choices,
      answer: q.answer,
      explanation: q.explanation || '',
      xp: LISTENING_XP[1],
    });
  });
  (data.part2 || []).forEach((q, i) => {
    if (!q.question || !Array.isArray(q.choices)) return;
    out.push({
      part: 2, type: 'listening_part2', index: i,
      promptLabel: '聽問題，選出最適合的回答',
      audioText: q.question,                  // 朗讀題目（題幹播放、不顯示）
      transcript: q.question,
      question: q.question,
      choices: q.choices,
      answer: q.answer,
      explanation: q.explanation || '',
      xp: LISTENING_XP[2],
    });
  });
  (data.part3 || []).forEach((q, i) => {
    if (!q.dialogue || !Array.isArray(q.choices)) return;
    out.push({
      part: 3, type: 'listening_part3', index: i,
      scenario: q.scenario || '',
      promptLabel: '聽對話/短文，回答問題',
      audioText: q.dialogue,                   // 朗讀連貫對話/短文
      transcript: q.dialogue,
      question: q.question || '',
      choices: q.choices,
      answer: q.answer,
      explanation: q.explanation || '',
      xp: LISTENING_XP[3],
    });
  });
  return out;
}

// 離線/未部署 CF 時的示範題庫（精簡版，足以試玩流程）
function localListeningFallback() {
  return flattenListening({
    part1: [
      { emoji: '👧📖',
        choices: ['A girl is reading a book.', 'A boy is playing soccer.', 'A man is cooking dinner.', 'A woman is riding a bike.'],
        answer: 'A girl is reading a book.', explanation: '圖中女孩正在看書。' },
      { emoji: '🌧️☂️',
        choices: ['It is sunny and hot.', 'People are using umbrellas in the rain.', 'Children are swimming.', 'The sky is full of stars.'],
        answer: 'People are using umbrellas in the rain.', explanation: '圖中下著雨、人們撐傘。' },
      { emoji: '🎂👨‍👩‍👧',
        choices: ['They are sleeping.', 'A cat is on the table.', 'A family is celebrating a birthday.', 'Two men are fixing a car.'],
        answer: 'A family is celebrating a birthday.', explanation: '圖中一家人在慶生。' },
    ],
    part2: [
      { question: 'How is the weather today?', choices: ['It is rainy.', 'I am twelve.', 'By bus.', 'A red apple.'], answer: 'It is rainy.', explanation: '問天氣，回答下雨最合適。' },
      { question: 'What time do you go to school?', choices: ['At seven.', 'It is blue.', 'Three dogs.', 'Yes, I do.'], answer: 'At seven.', explanation: '問時間，回答「七點」。' },
      { question: 'Would you like some tea?', choices: ['Yes, please.', 'In the park.', 'He is tall.', 'Last week.'], answer: 'Yes, please.', explanation: '被問要不要茶，回答「好的，謝謝」。' },
      { question: 'Where is the library?', choices: ['It is next to the bank.', 'I like music.', 'She is happy.', 'Two hours.'], answer: 'It is next to the bank.', explanation: '問地點，回答「在銀行旁邊」。' },
    ],
    part3: [
      { scenario: '餐廳點餐', dialogue: 'M: Are you ready to order?\nW: Yes, I would like the chicken soup, please.', question: 'What will the woman have?', choices: ['Chicken soup.', 'A hamburger.', 'Ice cream.', 'Fried rice.'], answer: 'Chicken soup.', explanation: '女士說要點雞湯。' },
      { scenario: '機場廣播', dialogue: 'Attention passengers. Flight 201 to Tokyo will leave from gate 5 at three o\'clock.', question: 'What time will the flight leave?', choices: ['At three o\'clock.', 'At five o\'clock.', 'At one o\'clock.', 'At nine o\'clock.'], answer: 'At three o\'clock.', explanation: '廣播說班機三點起飛。' },
      { scenario: '朋友約看電影', dialogue: 'W: Do you want to see a movie on Saturday?\nM: Sure, let\'s meet at the theater at six.', question: 'Where will they meet?', choices: ['At the theater.', 'At school.', 'At the park.', 'At home.'], answer: 'At the theater.', explanation: '男生說在電影院碰面。' },
    ],
  });
}

export async function buildListeningSession() {
  try {
    const res = await fetch(LISTENING_QUIZ_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    if (res.ok) {
      const data = await res.json();
      const qs = flattenListening(data);
      if (qs.length) return qs;
    }
  } catch { /* fall through to local demo */ }
  return localListeningFallback();
}
