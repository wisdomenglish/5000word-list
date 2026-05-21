// Quest definitions — progress is derived from hero/stats, not stored separately
const QUESTS = [
  {
    id: 'daily_session',
    icon: '📖',
    title: '今日學習',
    detail: '今天完成一次任務',
    type: 'daily',
    sessionCount: 5,
    xpReward: 60,
    minLevel: 1,
    tag: '每日',
    tagColor: '#3B82F6',
  },
  {
    id: 'vocab_20',
    icon: '🗺️',
    title: '詞彙探索者',
    detail: '累積掌握 20 個單字',
    type: 'mastery',
    target: 20,
    xpReward: 120,
    minLevel: 1,
    tag: '挑戰',
    tagColor: '#8B5CF6',
  },
  {
    id: 'phrase_10',
    icon: '💬',
    title: '片語達人',
    detail: '累積答對 10 個片語',
    type: 'phrase',
    target: 10,
    xpReward: 100,
    minLevel: 2,
    tag: '挑戰',
    tagColor: '#8B5CF6',
    sessionType: 'phrase',
  },
  {
    id: 'streak_3',
    icon: '🔥',
    title: '三日連打',
    detail: '連續 3 天練習',
    type: 'streak',
    target: 3,
    xpReward: 150,
    minLevel: 1,
    tag: '連打',
    tagColor: '#F59E0B',
  },
  {
    id: 'reading_daily',
    icon: '📰',
    title: '閱讀測驗',
    detail: '完成一篇英文閱讀理解（3 題，每題 +30 XP）',
    type: 'reading_daily',
    sessionCount: 3,
    xpReward: 90,
    minLevel: 1,
    tag: '每日',
    tagColor: '#10B981',
    sessionType: 'reading',
  },
  {
    id: 'conversation',
    icon: '🗣️',
    title: '會話口說練習',
    detail: '與 AI 來回對話，選出最自然的回應',
    type: 'conversation',
    sessionCount: 4,
    xpReward: 350,
    minLevel: 2,
    tag: '限定',
    tagColor: '#8B5CF6',
    locked: true,
    sessionType: 'conversation',
  },
  {
    id: 'speed_phrase',
    icon: '⚡',
    title: '片語急流',
    detail: '快速答對 5 個片語',
    type: 'speed',
    sessionCount: 5,
    xpReward: 80,
    minLevel: 3,
    tag: '限時',
    tagColor: '#F59E0B',
    sessionType: 'phrase',
  },
];

function getProgress(quest, stats, masteredCount, streak, sessionsToday, level) {
  if (level < quest.minLevel) return { locked: true, pct: 0, current: 0, target: quest.target ?? quest.sessionCount };
  switch (quest.type) {
    case 'daily':        return { locked: false, done: sessionsToday >= 1, pct: Math.min(1, sessionsToday), current: sessionsToday, target: 1 };
    case 'reading_daily': return { locked: false, pct: 0, current: 0, target: quest.sessionCount };
    case 'mastery':   return { locked: false, pct: Math.min(1, masteredCount / quest.target), current: Math.min(masteredCount, quest.target), target: quest.target };
    case 'phrase':    return { locked: false, pct: Math.min(1, stats.phraseCorrect / quest.target), current: Math.min(stats.phraseCorrect, quest.target), target: quest.target };
    case 'streak':    return { locked: false, pct: Math.min(1, streak / quest.target), current: Math.min(streak, quest.target), target: quest.target };
    case 'conversation': return { locked: level < quest.minLevel, pct: 0, current: 0, target: quest.sessionCount };
    case 'boss':      return { locked: level < quest.minLevel, pct: 0, current: 0, target: quest.sessionCount };
    case 'speed':     return { locked: false, pct: 0, current: 0, target: quest.sessionCount };
    default:          return { locked: false, pct: 0, current: 0, target: 1 };
  }
}

function QuestCard({ quest, progress, classData, onStart }) {
  const isDone = progress.pct >= 1 || progress.done;
  const isLocked = progress.locked;
  const pct = Math.round((progress.pct ?? 0) * 100);

  return (
    <div
      className="rounded-2xl p-4 mb-3"
      style={{
        background: isDone ? 'rgba(34,197,94,0.08)' : '#1A1B2E',
        border: isDone ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(255,255,255,0.06)',
        opacity: isLocked ? 0.5 : 1,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: `${classData.primaryColor}18` }}
        >
          {quest.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-sm font-bold text-white truncate">{quest.title}</span>
            {isDone && <span className="text-xs text-green-400">✓ 今日已完成</span>}
          </div>
          <div className="text-xs text-gray-400 mb-2">{quest.detail}</div>

          {/* Progress bar */}
          {!isDone && !isLocked && progress.pct > 0 && (
            <div className="mb-2">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>{progress.current}/{progress.target}</span>
                <span>{pct}%</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${pct}%`, background: classData.primaryColor }}
                />
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="text-xs px-2 py-0.5 rounded-full font-semibold"
              style={{ background: `${quest.tagColor}22`, color: quest.tagColor }}
            >
              {quest.tag}
            </span>
            <span className="text-xs text-yellow-400">獎勵 +{quest.xpReward} XP</span>
          </div>
        </div>

        {/* Action button */}
        <div className="flex-shrink-0 self-center">
          {isLocked ? (
            <div className="text-xs text-gray-500 text-center px-1">
              <div>🔒</div>
              <div>Lv.{quest.minLevel}</div>
            </div>
          ) : isDone ? (
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-lg">✓</div>
          ) : (
            <button
              onClick={() => onStart(quest)}
              className="text-xs px-4 rounded-xl font-semibold transition-all active:scale-95 active:opacity-80"
              style={{
                background: classData.primaryColor,
                color: '#fff',
                minWidth: '56px',
                minHeight: '44px',
              }}
            >
              開始
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function QuestBoardTab({ hero, classData, xpProgress, stats, masteredCount, onStartQuest }) {
  const level = xpProgress.level;
  const streak = hero.streak;

  // Simple "sessions today" counter — just check lastStudied date
  const today = new Date().toDateString();
  const lastStudiedToday = hero.lastStudied && new Date(hero.lastStudied).toDateString() === today;
  const sessionsToday = lastStudiedToday ? (stats.sessionsCompleted > 0 ? 1 : 0) : 0;

  const activeQuests = QUESTS.filter(q => {
    const p = getProgress(q, stats, masteredCount, streak, sessionsToday, level);
    return !p.locked && p.pct < 1 && !p.done;
  });
  const completedToday = QUESTS.filter(q => {
    const p = getProgress(q, stats, masteredCount, streak, sessionsToday, level);
    return !p.locked && (p.pct >= 1 || p.done);
  });
  const lockedQuests = QUESTS.filter(q => {
    const p = getProgress(q, stats, masteredCount, streak, sessionsToday, level);
    return p.locked;
  });

  const handleStart = (quest) => {
    onStartQuest({ count: quest.sessionCount ?? 5, topic: quest.title, type: quest.sessionType });
  };

  const renderList = (list, label) => list.length > 0 && (
    <div className="mb-1">
      <div className="text-xs font-semibold text-gray-400 mb-3 tracking-wide">{label}</div>
      {list.map(q => (
        <QuestCard
          key={q.id}
          quest={q}
          progress={getProgress(q, stats, masteredCount, streak, sessionsToday, level)}
          classData={classData}
          onStart={handleStart}
        />
      ))}
    </div>
  );

  return (
    <div className="pb-24 overflow-y-auto px-4">
      <div className="pt-5 pb-1 text-center text-xs text-gray-500 font-semibold tracking-widest uppercase mb-4">
        任務板
      </div>

      {renderList(activeQuests, '進行中')}
      {renderList(completedToday, '今日完成')}
      {renderList(lockedQuests, '可接任務')}
    </div>
  );
}
