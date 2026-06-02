import { useState, useCallback, useEffect } from 'react';
import {
  loadHero, saveHero, loadStats, saveStats, loadMastery, saveMastery,
  loadCustomWords, saveCustomWords, loadProfile, saveProfile, DEFAULT_STATS,
} from '../utils/storage';
import { getXPProgress, getHappiness, getMoodFromHappiness } from '../utils/xp';
import { CLASSES } from '../data/classes';
import { checkAndUnlock, loadUnlocked } from '../utils/achievementChecker';
import { ACHIEVEMENTS } from '../data/achievements';

const CLASS_ABILITY_BONUS = {
  swordsman:  { reading: 5,  listening: 5,  speaking: 15, writing: 10 },
  mage:       { reading: 15, listening: 10, speaking: 5,  writing: 15 },
  beastTamer: { reading: 20, listening: 15, speaking: 10, writing: 5  },
  fighter:    { reading: 5,  listening: 10, speaking: 20, writing: 5  },
};

export function getCEFR(totalXP) {
  if (totalXP >= 3000) return 'C1';
  if (totalXP >= 1500) return 'B2';
  if (totalXP >= 600)  return 'B1';
  if (totalXP >= 200)  return 'A2';
  return 'A1';
}

function calcAbilities(stats, classId) {
  const bonus = CLASS_ABILITY_BONUS[classId] ?? CLASS_ABILITY_BONUS.mage;
  const base = (x) => Math.min(100, Math.max(5, Math.floor(x)));
  return {
    reading:   base(stats.vocabCorrect * 0.25 + bonus.reading),
    listening: base(stats.correctAnswers * 0.15 + bonus.listening),
    speaking:  base(stats.sessionsCompleted * 1.5 + bonus.speaking),
    writing:   base(stats.wordRecallCorrect * 0.3 + bonus.writing),
  };
}

function getWeekKey() {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const mon = new Date(d);
  mon.setDate(diff);
  return mon.toISOString().split('T')[0];
}

function getMonthKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

export function useHeroState() {
  const [hero, setHero] = useState(() => loadHero());
  const [stats, setStats] = useState(() => loadStats());
  const [mastery, setMastery] = useState(() => loadMastery());
  const [customWords, setCustomWords] = useState(() => loadCustomWords());
  const [profile, setProfile] = useState(() => loadProfile());
  const [justLeveledUp, setJustLeveledUp] = useState(false);
  const [newLevel, setNewLevel] = useState(null);
  const [prevLevel, setPrevLevel] = useState(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState(() => loadUnlocked());
  const [newAchievementIds, setNewAchievementIds] = useState([]);

  // On mount: silently check if any achievements are already met (no toast, just unlock)
  useEffect(() => {
    const h = loadHero();
    const s = loadStats();
    const p = loadProfile();
    if (!h) return;
    const level = getXPProgress(h.totalXP).level;
    const mc    = Object.keys(loadMastery()).length;
    const newIds = checkAndUnlock({ level, hero: h, stats: s, masteredCount: mc, profile: p });
    if (newIds.length > 0) setUnlockedAchievements(loadUnlocked());
    // No toast on mount — achievements silently unlock in the background
  }, []);

  const createHero = useCallback((classId, name) => {
    const newHero = {
      classId, name: name.trim() || '英雄',
      totalXP: 0, lastStudied: null,
      streak: 0, bestStreak: 0,
      createdAt: new Date().toISOString(),
    };
    saveHero(newHero);
    setHero(newHero);
  }, []);

  const saveProfileData = useCallback((p) => {
    saveProfile(p);
    setProfile(p);
  }, []);

  const addXP = useCallback((amount) => {
    setHero(prev => {
      const oldProgress = getXPProgress(prev.totalXP);
      const newTotalXP = prev.totalXP + amount;
      const newProgress = getXPProgress(newTotalXP);

      const today = new Date().toDateString();
      const lastDate = prev.lastStudied ? new Date(prev.lastStudied).toDateString() : null;
      let { streak, bestStreak } = prev;

      if (lastDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        streak = lastDate === yesterday.toDateString() ? streak + 1 : 1;
        bestStreak = Math.max(streak, bestStreak);
      }

      // Weekly / monthly XP (auto-resets when key changes)
      const weekKey = getWeekKey();
      const monthKey = getMonthKey();
      const weeklyXP = prev.weeklyXP?.key === weekKey
        ? { key: weekKey, xp: (prev.weeklyXP.xp ?? 0) + amount }
        : { key: weekKey, xp: amount };
      const monthlyXP = prev.monthlyXP?.key === monthKey
        ? { key: monthKey, xp: (prev.monthlyXP.xp ?? 0) + amount }
        : { key: monthKey, xp: amount };

      // Daily check-in: record day number once per day
      const todayDay = new Date().getDate();
      const prevDays = prev.checkinDays?.[monthKey] ?? [];
      const checkinDays = {
        ...(prev.checkinDays ?? {}),
        [monthKey]: prevDays.includes(todayDay) ? prevDays : [...prevDays, todayDay],
      };

      const updated = {
        ...prev, totalXP: newTotalXP, lastStudied: new Date().toISOString(),
        streak, bestStreak, weeklyXP, monthlyXP, checkinDays,
      };
      saveHero(updated);

      if (newProgress.level > oldProgress.level) {
        setPrevLevel(oldProgress.level);
        setNewLevel(newProgress.level);
        setJustLeveledUp(true);
      }
      return updated;
    });
  }, []);

  const triggerAchievementCheck = useCallback((latestHero, latestStats, latestMasteredCount, latestProfile) => {
    const level = latestHero ? getXPProgress(latestHero.totalXP).level : 1;
    const newIds = checkAndUnlock({ level, hero: latestHero, stats: latestStats, masteredCount: latestMasteredCount, profile: latestProfile });
    if (newIds.length > 0) {
      setUnlockedAchievements(loadUnlocked());
      setNewAchievementIds(prev => [...prev, ...newIds]);
    }
  }, []);

  const recordAnswer = useCallback((correct, questionType) => {
    setStats(prev => {
      const updated = {
        ...prev,
        totalQuestions: prev.totalQuestions + 1,
        correctAnswers: prev.correctAnswers + (correct ? 1 : 0),
        vocabCorrect: prev.vocabCorrect + (correct && questionType === 'vocabulary_meaning' ? 1 : 0),
        phraseCorrect: prev.phraseCorrect + (correct && questionType === 'phrase_meaning' ? 1 : 0),
        wordRecallCorrect: prev.wordRecallCorrect + (correct && questionType === 'vocabulary_word' ? 1 : 0),
      };
      saveStats(updated);
      return updated;
    });
  }, []);

  const markMastered = useCallback((wordKey) => {
    setMastery(prev => {
      const updated = { ...prev, [wordKey]: true };
      saveMastery(updated);
      return updated;
    });
  }, []);

  const completeSession = useCallback((sessionType) => {
    setStats(prev => {
      const isConv = sessionType === 'conversation';
      const typeKey = sessionType ?? 'vocab';
      const prevTypes = prev.typesAttempted ?? [];
      const typesAttempted = prevTypes.includes(typeKey) ? prevTypes : [...prevTypes, typeKey];
      const now  = new Date();
      const day  = now.getDay();
      const hour = now.getHours();
      const isWeekend = day === 0 || day === 6;
      const isNight   = hour >= 21;
      const isMorning = hour >= 5 && hour < 8;
      const updated = {
        ...prev,
        sessionsCompleted: prev.sessionsCompleted + 1,
        conversationSessions: (prev.conversationSessions ?? 0) + (isConv ? 1 : 0),
        typesAttempted,
        weekendSessions: (prev.weekendSessions ?? 0) + (isWeekend ? 1 : 0),
        nightSessions:   (prev.nightSessions ?? 0) + (isNight ? 1 : 0),
        morningSessions: (prev.morningSessions ?? 0) + (isMorning ? 1 : 0),
      };
      saveStats(updated);
      return updated;
    });
  }, []);

  const dismissLevelUp = useCallback(() => { setJustLeveledUp(false); setNewLevel(null); setPrevLevel(null); }, []);
  const dismissAchievement = useCallback((id) => {
    setNewAchievementIds(prev => prev.filter(x => x !== id));
  }, []);

  const loadCloudData = useCallback((cloudData) => {
    if (!cloudData) return;
    if (cloudData.hero)        { setHero(cloudData.hero);                              saveHero(cloudData.hero); }
    if (cloudData.stats)       { setStats({ ...DEFAULT_STATS, ...cloudData.stats });   saveStats({ ...DEFAULT_STATS, ...cloudData.stats }); }
    if (cloudData.mastery)     { setMastery(cloudData.mastery);                        saveMastery(cloudData.mastery); }
    if (cloudData.customWords) { setCustomWords(cloudData.customWords);                saveCustomWords(cloudData.customWords); }
    if (cloudData.profile)     { setProfile(cloudData.profile);                        saveProfile(cloudData.profile); }
  }, []);

  const addCustomWord = useCallback((wordObj) => {
    setCustomWords(prev => {
      const next = [...prev, wordObj];
      saveCustomWords(next);
      return next;
    });
  }, []);

  const removeCustomWord = useCallback((word) => {
    setCustomWords(prev => {
      const next = prev.filter(w => w.word !== word);
      saveCustomWords(next);
      return next;
    });
  }, []);

  const classData = hero ? CLASSES[hero.classId] : null;
  const xpProgress = hero ? getXPProgress(hero.totalXP) : null;
  const happiness = hero ? getHappiness(hero.lastStudied) : 60;
  const mood = getMoodFromHappiness(happiness);
  const abilities = hero ? calcAbilities(stats, hero.classId) : { reading: 5, listening: 5, speaking: 5, writing: 5 };
  const cefr = hero ? getCEFR(hero.totalXP) : 'A1';
  const accuracy = stats.totalQuestions > 0 ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100) : 0;
  const masteredCount = Object.keys(mastery).length;

  return {
    hero, classData, stats, xpProgress, mood, happiness, abilities,
    cefr, accuracy, mastery, masteredCount, customWords, profile,
    justLeveledUp, newLevel, prevLevel,
    unlockedAchievements, newAchievementIds,
    createHero, addXP, recordAnswer, markMastered, completeSession, dismissLevelUp,
    dismissAchievement, triggerAchievementCheck,
    addCustomWord, removeCustomWord, loadCloudData, saveProfileData,
  };
}
