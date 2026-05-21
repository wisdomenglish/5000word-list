// XP required to reach a given level (cumulative)
const XP_TABLE = Array.from({ length: 51 }, (_, lvl) => {
  if (lvl === 0) return 0;
  return Math.floor(100 * lvl * Math.pow(1.15, lvl - 1));
});

export const XP_REWARDS = {
  correct_easy: 15,
  correct_medium: 20,
  correct_hard: 30,
  incorrect: 3,
  streak_bonus: 10,
};

export function getLevelFromXP(totalXP) {
  for (let lvl = XP_TABLE.length - 1; lvl >= 1; lvl--) {
    if (totalXP >= XP_TABLE[lvl]) return lvl;
  }
  return 1;
}

export function getXPForLevel(level) {
  return XP_TABLE[Math.min(level, 50)] ?? XP_TABLE[50];
}

export function getXPProgress(totalXP) {
  const level = getLevelFromXP(totalXP);
  const currentLevelXP = XP_TABLE[level] ?? 0;
  const nextLevelXP = XP_TABLE[Math.min(level + 1, 50)] ?? currentLevelXP;
  const xpIntoLevel = totalXP - currentLevelXP;
  const xpNeeded = nextLevelXP - currentLevelXP;
  const percent = xpNeeded > 0 ? Math.round((xpIntoLevel / xpNeeded) * 100) : 100;
  return { level, currentLevelXP, nextLevelXP, xpIntoLevel, xpNeeded, percent };
}

export function calcXPReward({ correct, difficulty = 'medium', classId, bonusKey, bonusMultiplier, streak }) {
  let base = correct
    ? (XP_REWARDS[`correct_${difficulty}`] ?? XP_REWARDS.correct_medium)
    : XP_REWARDS.incorrect;

  if (correct && bonusKey && classId) {
    const questionType = difficulty === 'phrase' ? 'phrase' : 'vocabulary';
    if (bonusKey === questionType || bonusKey === difficulty) {
      base = Math.round(base * bonusMultiplier);
    }
    if (bonusKey === 'streak' && streak >= 2) {
      base = Math.round(base * bonusMultiplier);
    }
  }

  return base;
}

// Returns 0–100 happiness score based on time since last practice
export function getHappiness(lastStudiedDate) {
  if (!lastStudiedDate) return 60; // fresh hero
  const daysSince = Math.floor((Date.now() - new Date(lastStudiedDate).getTime()) / 86400000);
  if (daysSince === 0) return 100;
  if (daysSince === 1) return 80;
  if (daysSince === 2) return 60;
  if (daysSince === 3) return 40;
  if (daysSince === 4) return 20;
  if (daysSince === 5) return 10;
  return 0;
}

export function getMoodFromHappiness(happiness) {
  if (happiness >= 80) return 'happy';
  if (happiness >= 50) return 'neutral';
  if (happiness >= 20) return 'sad';
  return 'critical';
}

// Keep legacy export so nothing else breaks
export const getMoodFromStreak = (lastStudiedDate) =>
  getMoodFromHappiness(getHappiness(lastStudiedDate));
