import { useMemo } from 'react';
import { HERO_CRIES, MOOD_CONFIG } from '../data/classes';

const SESSION_OPTIONS = [
  { count: 1, label: (cls) => cls.sessionLabels[0], sub: '1 題' },
  { count: 5, label: (cls) => cls.sessionLabels[1], sub: '5 題' },
  { count: 10, label: (cls) => cls.sessionLabels[2], sub: '10 題' },
];

function HungerBar({ happiness, primaryColor }) {
  const color = happiness >= 70 ? '#22C55E' : happiness >= 35 ? '#F59E0B' : '#EF4444';
  const isCritical = happiness < 20;

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="text-gray-400">英雄狀態</span>
        <span style={{ color }}>{happiness}%</span>
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden relative">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${happiness}%`,
            background: `linear-gradient(90deg, ${color}aa, ${color})`,
            boxShadow: isCritical ? `0 0 8px ${color}` : undefined,
            animation: isCritical ? 'glow 1.5s ease-in-out infinite' : undefined,
          }}
        />
      </div>
    </div>
  );
}

function HeroAvatar({ classData, mood, happiness }) {
  const isCritical = mood === 'critical';
  const isSad = mood === 'sad';
  const isHappy = mood === 'happy';

  return (
    <div className="relative flex justify-center py-4">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-20 mx-auto"
        style={{
          background: classData.primaryColor,
          width: '140px',
          height: '140px',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      {/* Avatar container */}
      <div
        className="relative w-28 h-28 rounded-3xl flex items-center justify-center text-6xl"
        style={{
          background: `linear-gradient(135deg, ${classData.gradientFrom}80, ${classData.gradientTo}80)`,
          border: `2px solid ${classData.primaryColor}40`,
          boxShadow: `0 8px 32px ${classData.glowColor}`,
          animation: isCritical
            ? 'none'
            : isHappy
              ? 'float 2.5s ease-in-out infinite'
              : 'float 4s ease-in-out infinite',
          filter: isSad || isCritical ? 'grayscale(0.3) brightness(0.85)' : 'none',
        }}
      >
        {classData.emoji}

        {/* Mood overlay emoji */}
        <div
          className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-lg"
          style={{ background: '#1A1A2E', border: `2px solid ${classData.primaryColor}40` }}
        >
          {MOOD_CONFIG[mood].emoji}
        </div>

        {isCritical && (
          <div
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white animate-bounce"
            style={{ background: '#DC2626' }}
          >
            !
          </div>
        )}
      </div>
    </div>
  );
}

export default function HeroDashboard({ hero, classData, xpProgress, mood, happiness, stats, accuracy, onStartQuest }) {
  // Pick a random hero plea message based on current mood
  const heroMessage = useMemo(() => {
    const msgs = HERO_CRIES[classData.id]?.[mood] ?? ['你的英雄在等你！'];
    return msgs[Math.floor(Math.random() * msgs.length)];
  }, [classData.id, mood]);

  const isCritical = mood === 'critical';

  return (
    <div
      className="min-h-screen text-white flex flex-col"
      style={{ background: '#0D0D1A' }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/6">
        <div className="font-display text-sm font-bold tracking-wide text-white/80">
          Hero's English Journey
        </div>
        <div
          className="text-xs px-2.5 py-1 rounded-full"
          style={{ background: `${classData.primaryColor}20`, color: classData.primaryColor }}
        >
          Lv.{xpProgress.level}
        </div>
      </div>

      {/* Hero avatar + plea */}
      <div className="px-5 pt-2">
        <HeroAvatar classData={classData} mood={mood} happiness={happiness} />

        {/* Hero name + plea message */}
        <div className="text-center mb-5">
          <div className="font-display text-lg font-bold text-white mb-1">{hero.name}</div>
          <p
            className="text-sm leading-relaxed px-2"
            style={{
              color: isCritical ? '#FCA5A5' : 'rgba(255,255,255,0.75)',
              animation: isCritical ? 'glow 2s ease-in-out infinite' : undefined,
            }}
          >
            {heroMessage}
          </p>
        </div>

        {/* Hunger / happiness bar */}
        <HungerBar happiness={happiness} primaryColor={classData.primaryColor} />
      </div>

      {/* XP bar */}
      <div className="px-5 mt-5">
        <div className="bg-white/5 border border-white/8 rounded-2xl p-4">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span className="font-semibold text-white">Lv.{xpProgress.level}</span>
            <span>{xpProgress.xpIntoLevel} / {xpProgress.xpNeeded} XP</span>
          </div>
          <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${xpProgress.percent}%`,
                background: `linear-gradient(90deg, ${classData.gradientFrom}, ${classData.primaryColor})`,
                boxShadow: `0 0 8px ${classData.glowColor}`,
              }}
            />
          </div>
          {hero.streak >= 2 && (
            <div className="flex items-center gap-1.5 mt-2.5 text-xs text-orange-400">
              <span>🔥</span>
              <span>{hero.streak} 天連續打卡</span>
              <span className="text-gray-500 ml-auto">最佳 {hero.bestStreak} 天</span>
            </div>
          )}
        </div>
      </div>

      {/* Session picker */}
      <div className="px-5 mt-4">
        <p className="text-xs text-gray-500 text-center mb-3">要練多少？</p>
        <div className="grid grid-cols-3 gap-2.5">
          {SESSION_OPTIONS.map((opt) => (
            <button
              key={opt.count}
              onClick={() => onStartQuest(opt.count)}
              className="flex flex-col items-center py-4 rounded-2xl border transition-all duration-150 active:scale-95"
              style={{
                background: opt.count === 1 ? `${classData.primaryColor}18` : 'rgba(255,255,255,0.05)',
                borderColor: opt.count === 1 ? `${classData.primaryColor}60` : 'rgba(255,255,255,0.08)',
                boxShadow: opt.count === 1 ? `0 0 16px ${classData.glowColor}` : undefined,
              }}
            >
              <span className="text-sm font-bold text-white mb-0.5">{opt.label(classData)}</span>
              <span className="text-xs text-gray-400">{opt.sub}</span>
            </button>
          ))}
        </div>
        {isCritical && (
          <p className="text-center text-xs text-red-400 mt-3">
            🚨 就算只練 1 題也好——英雄需要你！
          </p>
        )}
      </div>

      {/* Stats strip */}
      <div className="px-5 mt-4 mb-8">
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: '📝', label: '答題', value: stats.totalQuestions },
            { icon: '🎯', label: '正確率', value: `${accuracy}%` },
            { icon: '⚡', label: 'XP', value: hero.totalXP },
            { icon: '🎮', label: '次數', value: stats.sessionsCompleted },
          ].map(s => (
            <div key={s.label} className="bg-white/4 rounded-xl py-2.5 text-center border border-white/6">
              <div className="text-base mb-0.5">{s.icon}</div>
              <div className="text-xs font-bold text-white">{s.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
