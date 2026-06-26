const PART_INFO = [
  { part: 1, label: 'Part 1 辨識句意', icon: '🖼️' },
  { part: 2, label: 'Part 2 基本問答', icon: '💬' },
  { part: 3, label: 'Part 3 言談理解', icon: '🎙️' },
];

export default function ListeningSessionDone({ results, totalXP, classData, onDone }) {
  const correct = results.filter(r => r.correct).length;
  const pct = results.length ? Math.round((correct / results.length) * 100) : 0;
  const grade = pct === 100 ? '完美聽力！🏆' : pct >= 80 ? '太棒了！⭐' : pct >= 60 ? '繼續加油！👊' : '多聽多練！💪';

  const byPart = PART_INFO.map(p => {
    const items = results.filter(r => r.part === p.part);
    return { ...p, correct: items.filter(r => r.correct).length, total: items.length };
  }).filter(p => p.total > 0);

  const handleShare = () => {
    const text = `我在英雄英語完成了會考聽力測驗 🎧\n答對 ${correct}/${results.length}（${pct}%），獲得 +${totalXP} XP！`;
    if (navigator.share) {
      navigator.share({ text }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(text).catch(() => {});
    }
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 px-5 py-10">
      <div className="text-6xl mb-4" style={{ animation: 'float 2s ease-in-out infinite' }}>🎧</div>
      <div className="font-display text-2xl font-bold text-ink mb-1">{grade}</div>
      <div className="text-gray-400 text-sm mb-6">聽力測驗完成</div>

      {/* 總成績卡 */}
      <div className="w-full max-w-xs rounded-2xl p-5 mb-4"
        style={{
          background: `linear-gradient(135deg, ${classData.gradientFrom}80, ${classData.gradientTo}60)`,
          border: `1px solid ${classData.primaryColor}40`,
        }}>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <div className="text-2xl font-bold text-white">{correct}/{results.length}</div>
            <div className="text-xs text-gray-300 mt-0.5">答對</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{pct}%</div>
            <div className="text-xs text-gray-300 mt-0.5">正確率</div>
          </div>
          <div>
            <div className="text-2xl font-bold" style={{ color: classData.primaryColor }}>+{totalXP}</div>
            <div className="text-xs text-gray-300 mt-0.5">XP</div>
          </div>
        </div>
      </div>

      {/* 分部成績 */}
      <div className="w-full max-w-xs space-y-2 mb-6">
        {byPart.map(p => (
          <div key={p.part} className="flex items-center justify-between px-4 py-2.5 rounded-xl"
            style={{ background: 'var(--cozy-panel)', border: '1px solid var(--cozy-border)' }}>
            <span className="text-sm text-ink-soft font-medium">{p.icon} {p.label}</span>
            <span className="text-sm font-bold text-ink">{p.correct} / {p.total}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleShare}
        className="w-full max-w-xs py-3 mb-3 rounded-2xl font-semibold text-sm transition-all active:scale-95"
        style={{ background: 'var(--cozy-panel)', border: `1px solid ${classData.primaryColor}55`, color: 'var(--cozy-ink)' }}
      >
        📤 分享成績
      </button>
      <button
        onClick={onDone}
        className="w-full max-w-xs py-4 rounded-2xl font-display font-bold text-lg transition-all active:scale-95"
        style={{
          background: `linear-gradient(135deg, ${classData.gradientFrom}, ${classData.gradientTo})`,
          boxShadow: `0 6px 24px ${classData.glowColor}`,
          color: '#fff',
        }}
      >
        回到大廳
      </button>
    </div>
  );
}
