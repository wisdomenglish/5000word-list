import { useState, useEffect, useRef } from 'react';
import { useHeroState } from './hooks/useHeroState';
import { useAuth } from './hooks/useAuth';
import { loadFromCloud, saveToCloud } from './lib/cloudSync';
import { updateLeaderboard } from './lib/leaderboard';
import SplashScreen from './components/SplashScreen';
import Onboarding from './components/Onboarding';
import ClassSelect from './components/ClassSelect';
import BottomNav from './components/BottomNav';
import GlobalTopBar from './components/GlobalTopBar';
import SideDrawer from './components/SideDrawer';
import CharacterTab from './components/CharacterTab';
import QuestBoardTab from './components/QuestBoardTab';
import LearningTab from './components/LearningTab';
import ListeningTab from './components/ListeningTab';
import VocabBookTab from './components/VocabBookTab';
import LevelUpModal from './components/LevelUpModal';
import CharacterUnboxingModal from './components/CharacterUnboxingModal';
import ProfileSetupModal from './components/ProfileSetupModal';
import WelcomeGuideModal from './components/WelcomeGuideModal';
import HungerBanner from './components/HungerBanner';
import AchievementToast from './components/AchievementToast';
import { isTierMilestone } from './utils/characterTier';

const WELCOME_KEY = 'hej_welcome_v1';
const AUTH_HASH = '59bfb511121daa6f3a1d14c9187c071c7b378049f0712c3f0637226e300262d8';
const AUTH_KEY = 'hero_auth_v1';

async function sha256(s) {
  const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, '0')).join('');
}

function AuthGate({ onAuth }) {
  const [pw, setPw] = useState('');
  const [show, setShow] = useState(false);
  const [err, setErr] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const h = await sha256(pw);
    if (h === AUTH_HASH) {
      localStorage.setItem(AUTH_KEY, JSON.stringify({ h: AUTH_HASH }));
      onAuth();
    } else {
      setErr('密碼錯誤，請再試一次');
      setPw('');
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: '#0D0D1A',
      zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{
        background: '#171433',
        border: '1px solid rgba(167,139,250,0.2)',
        borderRadius: '20px',
        padding: '40px 32px',
        width: '100%', maxWidth: '360px',
        textAlign: 'center',
        boxShadow: '0 8px 40px rgba(124,58,237,0.25)',
      }}>
        <img src="/pwa-192x192.png" alt="英雄英語"
          style={{ width: '64px', height: '64px', borderRadius: '22%', imageRendering: 'pixelated', marginBottom: '16px' }} />
        <h2 style={{ color: '#E8E8F0', fontSize: '1.3rem', margin: '0 0 8px' }}>英雄英語</h2>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', marginBottom: '28px', lineHeight: 1.6 }}>
          請輸入授權密碼以繼續
        </p>
        <form onSubmit={handleSubmit}>
          <div style={{ position: 'relative', marginBottom: '16px' }}>
            <input
              type={show ? 'text' : 'password'}
              value={pw}
              onChange={e => { setPw(e.target.value); setErr(''); }}
              placeholder="密碼"
              autoFocus
              style={{
                width: '100%', padding: '12px 44px 12px 16px',
                background: '#0D0D1A',
                border: '1.5px solid rgba(167,139,250,0.3)',
                borderRadius: '10px',
                color: '#E8E8F0', fontSize: '1rem',
                outline: 'none', boxSizing: 'border-box',
                fontFamily: 'inherit',
              }}
            />
            <button type="button" onClick={() => setShow(v => !v)}
              style={{
                position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)',
                cursor: 'pointer', fontSize: '1rem', padding: '4px',
              }}>
              {show ? '🙈' : '👁'}
            </button>
          </div>
          <button type="submit"
            style={{
              width: '100%', padding: '13px',
              background: 'linear-gradient(135deg,#7C3AED,#A78BFA)',
              border: 'none', borderRadius: '10px',
              color: '#fff', fontSize: '1rem', fontWeight: '600',
              cursor: 'pointer',
            }}>
            進入
          </button>
        </form>
        {err && <p style={{ color: '#F87171', fontSize: '0.82rem', marginTop: '12px' }}>{err}</p>}
      </div>
    </div>
  );
}

export default function App() {
  const {
    hero, classData, stats, xpProgress, mood, happiness,
    abilities, cefr, accuracy, mastery, masteredCount, customWords, profile,
    justLeveledUp, newLevel, prevLevel,
    unlockedAchievements, newAchievementIds,
    createHero, addXP, recordAnswer, recordListeningAnswer, markMastered, completeSession, dismissLevelUp,
    dismissAchievement, triggerAchievementCheck,
    addCustomWord, removeCustomWord, loadCloudData, saveProfileData,
  } = useHeroState();

  const { user, loading: authLoading, signIn, signOut } = useAuth();

  const [showSplash, setShowSplash] = useState(
    () => !sessionStorage.getItem('hej_splash_v1')
  );

  const [authed, setAuthed] = useState(() => {
    try {
      const d = JSON.parse(localStorage.getItem(AUTH_KEY) || 'null');
      return d?.h === AUTH_HASH;
    } catch { return false; }
  });

  const [setup, setSetup] = useState(() => !hero ? 'onboarding' : null);
  const [activeTab, setActiveTab] = useState('character');
  const [activeSession, setActiveSession] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [syncStatus, setSyncStatus] = useState('');
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [showWelcomeGuide, setShowWelcomeGuide] = useState(false);

  const finishSetup = () => {
    setSetup(null);
    if (!localStorage.getItem(WELCOME_KEY)) setShowWelcomeGuide(true);
  };

  // ── Cloud sync helpers ──
  const doSync = async (uid, data, label = '同步中…') => {
    setSyncStatus(label);
    try {
      await saveToCloud(uid, data);
      setSyncStatus(`✓ 已同步 ${new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })}`);
    } catch {
      setSyncStatus('⚠️ 同步失敗，請稍後再試');
    }
  };

  // On login: load cloud data; if none, upload local
  const loadedUidRef = useRef(null);
  useEffect(() => {
    if (!user || !hero) return;
    if (loadedUidRef.current === user.uid) return;
    loadedUidRef.current = user.uid;

    setSyncStatus('雲端讀取中…');
    loadFromCloud(user.uid)
      .then(cloudData => {
        if (cloudData) {
          loadCloudData(cloudData);
          setSyncStatus('✓ 已從雲端載入');
        } else {
          return doSync(user.uid, { hero, stats, mastery, customWords, profile }, '上傳本地資料…');
        }
      })
      .catch(() => setSyncStatus('⚠️ 無法連接雲端'));
  }, [user?.uid]);

  // Auto-save on state change (2s debounce)
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return; }
    if (!user || !hero) return;
    const t = setTimeout(() => {
      saveToCloud(user.uid, { hero, stats, mastery, customWords, profile })
        .then(() => setSyncStatus(`✓ 已同步 ${new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })}`))
        .catch(() => {});
    }, 2000);
    return () => clearTimeout(t);
  }, [hero, stats, mastery, customWords, profile]);

  // Update leaderboard when key data changes (3s debounce, only if logged in + profile set)
  useEffect(() => {
    if (!user || !hero || !profile?.nickname || !xpProgress) return;
    const t = setTimeout(() => {
      updateLeaderboard(user.uid, {
        profile, hero, masteredCount,
        customWordsCount: customWords.length,
        xpProgress,
      }).catch(() => {});
    }, 3000);
    return () => clearTimeout(t);
  }, [hero?.totalXP, masteredCount, customWords.length, profile?.nickname]);

  // Reset on logout
  useEffect(() => {
    if (user === null) loadedUidRef.current = null;
  }, [user]);

  // ── Setup flow ──
  if (setup === 'onboarding') {
    return <Onboarding onReady={() => setSetup('classSelect')} />;
  }
  if (setup === 'classSelect' || !hero) {
    return (
      <ClassSelect
        onConfirm={(classId, name) => {
          createHero(classId, name);
          setSetup('profileSetup');
        }}
      />
    );
  }
  if (setup === 'profileSetup') {
    return (
      <ProfileSetupModal
        heroName={hero?.name}
        existingProfile={profile}
        onSave={(p) => { saveProfileData(p); finishSetup(); }}
        onSkip={() => finishSetup()}
      />
    );
  }

  // ── Session handlers ──
  const handleStartQuest = (sessionOpts) => {
    setActiveSession(sessionOpts);
    setActiveTab('learning');
  };

  const handleSessionComplete = ({ results, totalXP }) => {
    const sessionType = activeSession?.type ?? 'vocab';
    results.forEach(r => {
      recordAnswer(r.correct, r.type);
      if (r.correct && r.wordKey) markMastered(r.wordKey);
    });
    completeSession(sessionType);
    addXP(totalXP);
    // Derive updated counts inline for achievement check (state updates are async)
    const updatedCorrect = stats.correctAnswers + results.filter(r => r.correct).length;
    const updatedConvSessions = (stats.conversationSessions ?? 0) + (sessionType === 'conversation' ? 1 : 0);
    const updatedTypes = (stats.typesAttempted ?? []).includes(sessionType)
      ? stats.typesAttempted
      : [...(stats.typesAttempted ?? []), sessionType];
    const latestStats = {
      ...stats, correctAnswers: updatedCorrect,
      conversationSessions: updatedConvSessions,
      typesAttempted: updatedTypes,
    };
    triggerAchievementCheck(hero, latestStats, masteredCount, profile);
  };

  const handleClearSession = (newSession = null) => {
    setActiveSession(newSession?.count ? newSession : null);
  };

  const handleListeningComplete = ({ results, totalXP }) => {
    results.forEach(r => recordListeningAnswer(r.correct));
    completeSession('listening');
    addXP(totalXP);
    const updatedCorrect = stats.correctAnswers + results.filter(r => r.correct).length;
    const updatedTypes = (stats.typesAttempted ?? []).includes('listening')
      ? stats.typesAttempted
      : [...(stats.typesAttempted ?? []), 'listening'];
    const latestStats = {
      ...stats,
      correctAnswers: updatedCorrect,
      listeningTotal: (stats.listeningTotal ?? 0) + results.length,
      listeningCorrect: (stats.listeningCorrect ?? 0) + results.filter(r => r.correct).length,
      typesAttempted: updatedTypes,
    };
    triggerAchievementCheck(hero, latestStats, masteredCount, profile);
  };

  if (showSplash) return (
    <SplashScreen onDone={() => {
      sessionStorage.setItem('hej_splash_v1', '1');
      setShowSplash(false);
    }} />
  );

  if (!authed) return <AuthGate onAuth={() => setAuthed(true)} />;

  // ── Main layout ──
  return (
    <div className="relative min-h-screen" style={{ background: 'transparent', color: 'var(--cozy-ink)' }}>
      <GlobalTopBar streak={hero.streak} level={xpProgress?.level} xpProgress={xpProgress} onOpenDrawer={() => setDrawerOpen(true)} />

      <div style={{ paddingTop: '48px' }}>
        {activeTab === 'character' && (
          <CharacterTab
            hero={hero}
            classData={classData}
            xpProgress={xpProgress}
            mood={mood}
            happiness={happiness}
            abilities={abilities}
            cefr={cefr}
            stats={stats}
            masteredCount={masteredCount}
            uid={user?.uid ?? null}
            onEditProfile={() => setProfileModalVisible(true)}
            checkinDays={hero.checkinDays}
            unlockedAchievements={unlockedAchievements}
            profile={profile}
            onNavigate={setActiveTab}
          />
        )}

        {activeTab === 'quests' && (
          <QuestBoardTab
            hero={hero}
            classData={classData}
            xpProgress={xpProgress}
            stats={stats}
            masteredCount={masteredCount}
            onStartQuest={handleStartQuest}
          />
        )}

        {activeTab === 'learning' && (
          <LearningTab
            hero={hero}
            classData={classData}
            mood={mood}
            session={activeSession}
            onComplete={handleSessionComplete}
            onClearSession={handleClearSession}
          />
        )}

        {activeTab === 'listening' && (
          <ListeningTab
            hero={hero}
            classData={classData}
            onComplete={handleListeningComplete}
          />
        )}

        {activeTab === 'vocab' && (
          <VocabBookTab
            mastery={mastery}
            classData={classData}
            customWords={customWords}
            onAddCustomWord={addCustomWord}
            onRemoveCustomWord={removeCustomWord}
          />
        )}
      </div>

      <BottomNav active={activeTab} onChange={setActiveTab} />

      {justLeveledUp && newLevel && (
        isTierMilestone(newLevel)
          ? <CharacterUnboxingModal newLevel={newLevel} classData={classData} onDismiss={dismissLevelUp} />
          : <LevelUpModal newLevel={newLevel} prevLevel={prevLevel} classData={classData} onDismiss={dismissLevelUp} />
      )}

      {newAchievementIds.length > 0 && (
        <AchievementToast
          achievementId={newAchievementIds[0]}
          onDismiss={() => dismissAchievement(newAchievementIds[0])}
        />
      )}

      {hero && !showWelcomeGuide && (
        <HungerBanner
          hero={hero}
          classData={classData}
          happiness={happiness}
          onGoTrain={() => setActiveTab('learning')}
        />
      )}

      {showWelcomeGuide && (
        <WelcomeGuideModal
          classData={classData}
          onClose={() => {
            localStorage.setItem(WELCOME_KEY, '1');
            setShowWelcomeGuide(false);
          }}
        />
      )}

      <SideDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        user={user}
        authLoading={authLoading}
        onSignIn={signIn}
        onSignOut={() => { signOut(); setSyncStatus(''); }}
        onManualSync={() => user && doSync(user.uid, { hero, stats, mastery, customWords, profile })}
        syncStatus={syncStatus}
        profile={profile}
        onEditProfile={() => setProfileModalVisible(true)}
      />

      {profileModalVisible && (
        <ProfileSetupModal
          heroName={hero?.name}
          existingProfile={profile}
          onSave={(p) => { saveProfileData(p); setProfileModalVisible(false); }}
          onSkip={() => setProfileModalVisible(false)}
        />
      )}
    </div>
  );
}
