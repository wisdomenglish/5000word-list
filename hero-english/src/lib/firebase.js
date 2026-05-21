import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAvr2g4M8OzdR63oElWurndcv8dE190_DU',
  authDomain: 'news-english-ef2e4.firebaseapp.com',
  projectId: 'news-english-ef2e4',
  storageBucket: 'news-english-ef2e4.firebasestorage.app',
  messagingSenderId: '1039973180615',
  appId: '1:1039973180615:web:26067ea33794014628cae2',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
