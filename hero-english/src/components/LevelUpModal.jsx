import { useEffect } from 'react';

export default function LevelUpModal({ newLevel, classData, onDismiss }) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 4000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
      onClick={onDismiss}
    >
      <div
        className="w-full max-w-xs rounded-3xl p-8 text-center animate-[levelUp_0.6s_ease-out_forwards]"
        style={{
          background: `linear-gradient(135deg, ${classData.gradientFrom}, ${classData.gradientTo})`,
          boxShadow: `0 0 60px ${classData.glowColor}`,
          border: `2px solid ${classData.primaryColor}80`,
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="text-6xl mb-4" style={{ animation: 'float 1.5s ease-in-out infinite' }}>
          {classData.emoji}
        </div>

        <div className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-2">
          Level Up!
        </div>

        <div className="font-display text-5xl font-bold text-white mb-1">
          Lv.{newLevel}
        </div>

        <div
          className="text-base font-semibold mb-5"
          style={{ color: classData.primaryColor }}
        >
          {classData.name}の力が増した！
        </div>

        <div className="grid grid-cols-2 gap-2 mb-6">
          {Object.entries(classData.stats).map(([key, val]) => (
            <div key={key} className="bg-black/20 rounded-xl py-2 px-3">
              <div className="text-sm font-bold text-white">{val}</div>
              <div className="text-xs text-white/60">
                {key === 'strength' ? '力量' : key === 'magic' ? '魔法' : key === 'agility' ? '敏捷' : '耐力'}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onDismiss}
          className="text-sm text-white/60 hover:text-white transition-colors"
        >
          點擊繼續 →
        </button>
      </div>
    </div>
  );
}
