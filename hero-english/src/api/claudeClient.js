import { VOCAB_DATA } from '../data/vocab-data';

const API_URL          = import.meta.env.VITE_CLAUDE_API_URL || null;
const EXAMPLE_URL      = 'https://generatewordexample-gtlccx6nka-uc.a.run.app';
const DEFINITION_URL   = 'https://generateworddefinition-gtlccx6nka-uc.a.run.app';
const CONVERSATION_URL = 'https://generateconversation-gtlccx6nka-uc.a.run.app';
const VOCAB_QUIZ_URL   = 'https://generatevocabquiz-gtlccx6nka-uc.a.run.app';
const READING_QUIZ_URL = 'https://generatereadingquiz-gtlccx6nka-uc.a.run.app';
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
