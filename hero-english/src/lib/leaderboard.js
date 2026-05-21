import { doc, setDoc, collection, getDocs, limit, query, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

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

export { getWeekKey, getMonthKey };

export async function updateLeaderboard(uid, { profile, hero, masteredCount, customWordsCount, xpProgress }) {
  if (!profile?.nickname?.trim()) return;
  const weekKey = getWeekKey();
  const monthKey = getMonthKey();
  await setDoc(doc(db, 'heroLeaderboard', uid), {
    nickname: profile.nickname.trim(),
    grade: profile.grade || '',
    school: profile.school || '',
    classId: hero.classId,
    level: xpProgress.level,
    totalXP: hero.totalXP,
    masteredCount,
    customWordsCount,
    weeklyXP: hero.weeklyXP?.key === weekKey ? (hero.weeklyXP.xp ?? 0) : 0,
    weeklyXPKey: weekKey,
    monthlyXP: hero.monthlyXP?.key === monthKey ? (hero.monthlyXP.xp ?? 0) : 0,
    monthlyXPKey: monthKey,
    updatedAt: serverTimestamp(),
  });
}

export async function fetchLeaderboard() {
  const q = query(collection(db, 'heroLeaderboard'), limit(100));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ uid: d.id, ...d.data() }));
}
