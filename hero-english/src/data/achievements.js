// condition(hero, stats, masteredCount, profile) → boolean
// hero: { totalXP, streak, level }  (level derived outside, passed in)
// stats: { correctAnswers, conversationSessions, typesAttempted, ... }
// masteredCount: number
// profile: { nickname, ... } | null

export const ACHIEVEMENT_TYPES = {
  progress:    { label: '進度類', color: '#F59E0B', bg: '#F59E0B18' },
  behavior:    { label: '行為類', color: '#EF4444', bg: '#EF444418' },
  difficulty:  { label: '難度類', color: '#8B5CF6', bg: '#8B5CF618' },
  mastery:     { label: '專精類', color: '#3B82F6', bg: '#3B82F618' },
  social:      { label: '社交類', color: '#EC4899', bg: '#EC489918' },
  exploration: { label: '探索類', color: '#22C55E', bg: '#22C55E18' },
};

const ACHIEVEMENTS_BASE = [
  // ── 進度類 ──
  {
    id: 'prog_lv5',
    type: 'progress', icon: '🌟', rarity: 'common',
    title: '冒險開始', desc: '升到 Lv.5',
    reward: '角色配飾解鎖', rewardIcon: '🎖️',
    condition: (h, s, m) => h.level >= 5,
  },
  {
    id: 'prog_lv10',
    type: 'progress', icon: '⚔️', rarity: 'rare',
    title: '職業覺醒', desc: '升到 Lv.10',
    reward: '閃耀光環', rewardIcon: '💫',
    condition: (h, s, m) => h.level >= 10,
  },
  {
    id: 'prog_lv20',
    type: 'progress', icon: '💫', rarity: 'epic',
    title: '精英征途', desc: '升到 Lv.20',
    reward: '黃金王冠配飾', rewardIcon: '👑',
    condition: (h, s, m) => h.level >= 20,
  },
  {
    id: 'prog_lv30',
    type: 'progress', icon: '💎', rarity: 'legendary',
    title: '不敗傳說', desc: '升到 Lv.30',
    reward: '傳說稱號', rewardIcon: '🏆',
    condition: (h, s, m) => h.level >= 30,
  },

  // ── 行為類 ──
  {
    id: 'beh_streak3',
    type: 'behavior', icon: '🔥', rarity: 'common',
    title: '初燃火苗', desc: '連續練習 3 天',
    reward: '+10% XP 加成', rewardIcon: '⚡',
    condition: (h, s, m) => h.streak >= 3,
  },
  {
    id: 'beh_streak7',
    type: 'behavior', icon: '🔥', rarity: 'rare',
    title: '七日烈焰', desc: '連續練習 7 天',
    reward: '+50% XP 加成', rewardIcon: '🌟',
    condition: (h, s, m) => h.streak >= 7,
  },
  {
    id: 'beh_streak30',
    type: 'behavior', icon: '🌋', rarity: 'legendary',
    title: '月光傳說', desc: '連續練習 30 天',
    reward: 'XP 翻倍', rewardIcon: '💎',
    condition: (h, s, m) => h.streak >= 30,
  },

  // ── 難度類 ──
  {
    id: 'diff_c50',
    type: 'difficulty', icon: '🎯', rarity: 'common',
    title: '初試身手', desc: '累計答對 50 題',
    reward: '銅製頭像框', rewardIcon: '🥉',
    condition: (h, s, m) => s.correctAnswers >= 50,
  },
  {
    id: 'diff_c100',
    type: 'difficulty', icon: '💪', rarity: 'rare',
    title: '百戰精兵', desc: '累計答對 100 題',
    reward: '稀缺銀框', rewardIcon: '🥈',
    condition: (h, s, m) => s.correctAnswers >= 100,
  },
  {
    id: 'diff_c300',
    type: 'difficulty', icon: '⚡', rarity: 'epic',
    title: '鐵壁意志', desc: '累計答對 300 題',
    reward: '黃金頭像框', rewardIcon: '🥇',
    condition: (h, s, m) => s.correctAnswers >= 300,
  },
  {
    id: 'diff_c1000',
    type: 'difficulty', icon: '🏅', rarity: 'legendary',
    title: '不可戰勝', desc: '累計答對 1000 題',
    reward: '傳說鑽石框', rewardIcon: '💎',
    condition: (h, s, m) => s.correctAnswers >= 1000,
  },

  // ── 專精類：口說會話 ──
  {
    id: 'mastery_conv1',
    type: 'mastery', icon: '🗣️', rarity: 'common',
    title: '初探會話', desc: '完成 1 次口說會話練習',
    reward: '會話初學徽章', rewardIcon: '🎫',
    condition: (h, s, m) => (s.conversationSessions ?? 0) >= 1,
  },
  {
    id: 'mastery_conv5',
    type: 'mastery', icon: '💬', rarity: 'rare',
    title: '會話達人', desc: '完成 5 次口說會話練習',
    reward: '主題徽章', rewardIcon: '🏷️',
    condition: (h, s, m) => (s.conversationSessions ?? 0) >= 5,
  },
  {
    id: 'mastery_conv10',
    type: 'mastery', icon: '🎤', rarity: 'epic',
    title: '口說大師', desc: '完成 10 次口說會話練習',
    reward: '大師口說徽章', rewardIcon: '🎖️',
    condition: (h, s, m) => (s.conversationSessions ?? 0) >= 10,
  },

  // ── 社交類 ──
  {
    id: 'social_profile',
    type: 'social', icon: '👤', rarity: 'common',
    title: '冒險者簡歷', desc: '完成個人資料設定',
    reward: '暱稱標籤', rewardIcon: '🏷️',
    condition: (h, s, m, profile) => !!(profile?.nickname),
  },
  {
    id: 'social_leaderboard',
    type: 'social', icon: '🏆', rarity: 'rare',
    title: '排行榜亮相', desc: '登上排行榜前 10 名',
    reward: '特殊角色邊框', rewardIcon: '✨',
    condition: (h, s, m) => false, // evaluated externally when leaderboard rank is known
    comingSoon: false,
    manualUnlock: true,
  },
  {
    id: 'social_invite',
    type: 'social', icon: '🤝', rarity: 'epic',
    title: '召喚夥伴', desc: '邀請 3 位朋友加入（即將推出）',
    reward: '特殊角色皮膚', rewardIcon: '🎨',
    condition: () => false,
    comingSoon: true,
  },

  // ── 探索類 ──
  {
    id: 'exp_vocab',
    type: 'exploration', icon: '📖', rarity: 'common',
    title: '詞彙初探', desc: '完成第一次單字任務',
    reward: '詞彙探索者稱號', rewardIcon: '🗒️',
    condition: (h, s, m) => (s.typesAttempted ?? []).includes('vocab'),
  },
  {
    id: 'exp_phrase',
    type: 'exploration', icon: '💬', rarity: 'common',
    title: '片語初探', desc: '完成第一次片語任務',
    reward: '片語探索者稱號', rewardIcon: '🗒️',
    condition: (h, s, m) => (s.typesAttempted ?? []).includes('phrase'),
  },
  {
    id: 'exp_reading',
    type: 'exploration', icon: '📰', rarity: 'rare',
    title: '閱讀初探', desc: '完成第一次閱讀任務',
    reward: '閱讀探索者稱號', rewardIcon: '📚',
    condition: (h, s, m) => (s.typesAttempted ?? []).includes('reading'),
  },
  {
    id: 'exp_conv',
    type: 'exploration', icon: '🗣️', rarity: 'rare',
    title: '會話初探', desc: '完成第一次口說會話任務',
    reward: '口說探索者稱號', rewardIcon: '🎙️',
    condition: (h, s, m) => (s.typesAttempted ?? []).includes('conversation'),
  },
  {
    id: 'exp_all',
    type: 'exploration', icon: '🗺️', rarity: 'legendary',
    title: '全方位學習者', desc: '體驗所有四種題型',
    reward: '稀有探索者物品', rewardIcon: '💎',
    condition: (h, s, m) => {
      const tried = s.typesAttempted ?? [];
      return ['vocab', 'phrase', 'reading', 'conversation'].every(t => tried.includes(t));
    },
  },
];

// ── 稀缺限時成就 ──
const LIMITED = [
  {
    id: 'limited_weekend',
    type: 'behavior', icon: '🏖️', rarity: 'epic',
    title: '週末鬥士', desc: '週六或週日完成 3 次練習',
    reward: '週末限定金框', rewardIcon: '🥇',
    timeWindow: { type: 'weekend' },
    condition: (h, s, m) => (s.weekendSessions ?? 0) >= 3,
  },
  {
    id: 'limited_night',
    type: 'behavior', icon: '🌙', rarity: 'rare',
    title: '夜貓學霸', desc: '晚上 9 點後完成一次練習',
    reward: '深夜特別徽章', rewardIcon: '🌙',
    timeWindow: { type: 'hours', hours: [21, 24] },
    condition: (h, s, m) => (s.nightSessions ?? 0) >= 1,
  },
  {
    id: 'limited_morning',
    type: 'behavior', icon: '🌅', rarity: 'rare',
    title: '晨曦英雄', desc: '早上 8 點前完成一次練習',
    reward: '早起勛章', rewardIcon: '☀️',
    timeWindow: { type: 'hours', hours: [5, 8] },
    condition: (h, s, m) => (s.morningSessions ?? 0) >= 1,
  },
];

export const ACHIEVEMENTS = [...ACHIEVEMENTS_BASE, ...LIMITED];

export const RARITY_META = {
  common:    { label: '普通',   color: '#9CA3AF', glow: '' },
  rare:      { label: '稀有',   color: '#3B82F6', glow: '0 0 8px #3B82F660' },
  epic:      { label: '史詩',   color: '#A855F7', glow: '0 0 10px #A855F760' },
  legendary: { label: '傳說',   color: '#F59E0B', glow: '0 0 14px #F59E0B80' },
};
