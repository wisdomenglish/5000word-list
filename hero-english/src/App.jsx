import { useState, useEffect, useRef } from 'react';
import { useHeroState } from './hooks/useHeroState';
import { useAuth } from './hooks/useAuth';
import { loadFromCloud, saveToCloud } from './lib/cloudSync';
import { updateLeaderboard } from './lib/leaderboard';
import Onboarding from './components/Onboarding';
import ClassSelect from './components/ClassSelect';
import BottomNav from './components/BottomNav';
import GlobalTopBar from './components/GlobalTopBar';
import SideDrawer from './components/SideDrawer';
import CharacterTab from './components/CharacterTab';
import QuestBoardTab from './components/QuestBoardTab';
import LearningTab from './components/LearningTab';
import VocabBookTab from './components/VocabBookTab';
import LevelUpModal from './components/LevelUpModal';
import ProfileSetupModal from './components/ProfileSetupModal';
import WelcomeGuideModal from './components/WelcomeGuideModal';
import HungerBanner from './components/HungerBanner';

const WELCOME_KEY = 'hej_welcome_v1';

export default function App() {
  const {
    hero, classData, stats, xpProgress, mood, happiness,
    abilities, cefr, accuracy, mastery, masteredCount, customWords, profile,
    justLeveledUp, newLevel,
    createHero, addXP, recordAnswer, markMastered, completeSession, dismissLevelUp,
    addCustomWord, removeCustomWord, loadCloudData, saveProfileData,
  } = useHeroState();

  const { user, loading: authLoading, signIn, signOut } = useAuth();

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
    results.forEach(r => {
      recordAnswer(r.correct, r.type);
      if (r.correct && r.wordKey) markMastered(r.wordKey);
    });
    completeSession();
    addXP(totalXP);
  };

  const handleClearSession = (newSession = null) => {
    setActiveSession(newSession?.count ? newSession : null);
  };

  // ── Main layout ──
  return (
    <div className="relative min-h-screen" style={{ background: '#0F0F14', color: '#E8E8F0' }}>
      <GlobalTopBar streak={hero.streak} onOpenDrawer={() => setDrawerOpen(true)} />

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
        <LevelUpModal newLevel={newLevel} classData={classData} onDismiss={dismissLevelUp} />
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
