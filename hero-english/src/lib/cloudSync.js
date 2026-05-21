import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

// Store hero-english data inside the shared users/{uid} doc
// to reuse existing Firestore security rules
export async function loadFromCloud(uid) {
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? (snap.data().heroEnglish ?? null) : null;
}

export async function saveToCloud(uid, data) {
  await setDoc(doc(db, 'users', uid), { heroEnglish: data }, { merge: true });
}
