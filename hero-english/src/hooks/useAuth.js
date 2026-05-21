import { useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut as fbSignOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

export function useAuth() {
  // undefined = still initializing, null = signed out, object = signed in
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    return onAuthStateChanged(auth, u => setUser(u ?? null));
  }, []);

  const signIn = () =>
    signInWithPopup(auth, new GoogleAuthProvider()).catch(err => {
      if (err.code !== 'auth/popup-closed-by-user') console.error(err);
    });

  const signOut = () => fbSignOut(auth).catch(console.error);

  return { user, loading: user === undefined, signIn, signOut };
}
