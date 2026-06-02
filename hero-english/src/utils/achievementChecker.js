import { ACHIEVEMENTS } from '../data/achievements';

const KEY = 'hej_achievements';

export function loadUnlocked() {
  try { return JSON.parse(localStorage.getItem(KEY)) ?? {}; } catch { return {}; }
}

export function saveUnlocked(obj) {
  localStorage.setItem(KEY, JSON.stringify(obj));
}

// Returns array of newly unlocked achievement IDs (those not previously unlocked)
export function checkAndUnlock({ level, hero, stats, masteredCount, profile }) {
  const unlocked = loadUnlocked();
  const newIds = [];

  for (const ach of ACHIEVEMENTS) {
    if (unlocked[ach.id]) continue;
    if (ach.comingSoon || ach.manualUnlock) continue;
    try {
      const met = ach.condition({ ...hero, level }, stats, masteredCount, profile);
      if (met) {
        unlocked[ach.id] = { unlockedAt: Date.now() };
        newIds.push(ach.id);
      }
    } catch { /* ignore */ }
  }

  if (newIds.length > 0) saveUnlocked(unlocked);
  return newIds;
}

export function manualUnlock(id) {
  const unlocked = loadUnlocked();
  if (!unlocked[id]) {
    unlocked[id] = { unlockedAt: Date.now() };
    saveUnlocked(unlocked);
    return true;
  }
  return false;
}
