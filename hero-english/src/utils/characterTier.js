export function getSkinTier(level) {
  if (level >= 30) return 4;
  if (level >= 20) return 3;
  if (level >= 10) return 2;
  return 1;
}

export function isTierMilestone(level) {
  return level === 10 || level === 20 || level === 30;
}

export const TIER_META = {
  1: { label: '學徒',   icon: '🌱', desc: 'Lv.1~9',   color: '#9CA3AF', evolveMsg: null },
  2: { label: '初學者', icon: '⚔️', desc: 'Lv.10~19', color: '#3B82F6', evolveMsg: '職業覺醒！' },
  3: { label: '精英',   icon: '✨', desc: 'Lv.20~29', color: '#F59E0B', evolveMsg: '精英晉升！' },
  4: { label: '大師',   icon: '👑', desc: 'Lv.30+',   color: '#A855F7', evolveMsg: '大師降臨！' },
};
