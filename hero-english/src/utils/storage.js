const HERO_KEY    = 'hej_hero';
const STATS_KEY   = 'hej_stats';
const MASTERY_KEY = 'hej_mastery';

export const DEFAULT_HERO = {
  classId: null,
  name: '',
  totalXP: 0,
  lastStudied: null,
  streak: 0,
  bestStreak: 0,
  createdAt: null,
};

export const DEFAULT_STATS = {
  totalQuestions: 0,
  correctAnswers: 0,
  sessionsCompleted: 0,
  vocabCorrect: 0,
  phraseCorrect: 0,
  wordRecallCorrect: 0,
  conversationSessions: 0,
  typesAttempted: [],
  weekendSessions: 0,
  nightSessions: 0,
  morningSessions: 0,
  listeningCorrect: 0,
  listeningTotal: 0,
};

export function loadHero() {
  try { return JSON.parse(localStorage.getItem(HERO_KEY)) ?? null; } catch { return null; }
}
export function saveHero(h) { localStorage.setItem(HERO_KEY, JSON.stringify(h)); }

export function loadStats() {
  try { return { ...DEFAULT_STATS, ...JSON.parse(localStorage.getItem(STATS_KEY)) }; }
  catch { return { ...DEFAULT_STATS }; }
}
export function saveStats(s) { localStorage.setItem(STATS_KEY, JSON.stringify(s)); }

// mastery: { [word]: true }
export function loadMastery() {
  try { return JSON.parse(localStorage.getItem(MASTERY_KEY)) ?? {}; } catch { return {}; }
}
export function saveMastery(m) { localStorage.setItem(MASTERY_KEY, JSON.stringify(m)); }

export function clearAll() {
  [HERO_KEY, STATS_KEY, MASTERY_KEY].forEach(k => localStorage.removeItem(k));
}

const CUSTOM_WORDS_KEY = 'hej_custom_words';
export function loadCustomWords() {
  try { return JSON.parse(localStorage.getItem(CUSTOM_WORDS_KEY)) ?? []; } catch { return []; }
}
export function saveCustomWords(words) { localStorage.setItem(CUSTOM_WORDS_KEY, JSON.stringify(words)); }

const PROFILE_KEY = 'hej_profile';
export const DEFAULT_PROFILE = { nickname: '', grade: '', school: '' };
export function loadProfile() {
  try { return JSON.parse(localStorage.getItem(PROFILE_KEY)) ?? null; } catch { return null; }
}
export function saveProfile(p) { localStorage.setItem(PROFILE_KEY, JSON.stringify(p)); }
