import { useState } from 'react';

const SLIDES = [
  {
    icon: '⚔️',
    title: '歡迎來到冒險旅程！',
    color: '#7C3AED',
    glow: 'rgba(124,58,237,0.4)',
    items: [
      { icon: '🎮', text: '透過任務和練習獲得 XP，讓英雄不斷成長' },
      { icon: '📚', text: '涵蓋國中會考必考單字，從 A1 到 B2 分級練習' },
      { icon: '🗣️', text: '文意選填、單字配對、AI 口說多種題型' },
      { icon: '🏆', text: '登上排行榜，和同學一起競賽' },
    ],
  },
  {
    icon: '🗺️',
    title: '四個主要分頁',
    color: '#3B82F6',
    glow: 'rgba(59,130,246,0.4)',
    items: [
      { icon: '👤', text: '角色：查看英雄等級、CEFR 能力、成就徽章' },
      { icon: '📋', text: '任務：接取每日任務，完成後獲得豐厚 XP 獎勵' },
      { icon: '🎯', text: '練習：選擇綜合練習、單字配對或文意選填開始答題' },
      { icon: '📖', text: '單字本：瀏覽全部單字，查例句、字根，加入學習清單' },
    ],
  },
  {
    icon: '⭐',
    title: '如何升等',
    color: '#F59E0B',
    glow: 'rgba(245,158,11,0.4)',
    items: [
      { icon: '✅', text: '答對單字配對 +12 XP，文意選填 +20 XP' },
      { icon: '📋', text: '完成任務可額外獲得任務獎勵 XP（50～350 不等）' },
      { icon: '🔥', text: '每天練習維持連續打卡，解鎖特別獎勵' },
      { icon: '🗣️', text: 'Lv.5 解鎖 AI 口說對話，Lv.10 解鎖更多功能' },
    ],
  },
  {
    icon: '☁️',
    title: '登入保存你的紀錄',
    color: '#22C55E',
    glow: 'rgba(34,197,94,0.4)',
    items: [
      { icon: '📱', text: '點右上角 ☰ 選單，使用 Google 帳號登入' },
      { icon: '💾', text: '登入後 XP、單字、學習進度自動同步雲端' },
      { icon: '📲', text: '換手機或重裝 App 也不會遺失進度' },
      { icon: '🏅', text: '登入後才能上排行榜，讓同學看到你的排名' },
    ],
  },
];

export default function WelcomeGuideModal({ classData, onClose }) {
  const [page, setPage] = useState(0);
  const slide = SLIDES[page];
  const isLast = page === SLIDES.length - 1;

  const primary = classData?.primaryColor ?? '#7C3AED';
  const from    = classData?.gradientFrom  ?? '#3B0764';
  const to      = classData?.gradientTo    ?? '#7C3AED';
  const glow    = classData?.glowColor     ?? 'rgba(124,58,237,0.4)';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
    >
      <div
        className="w-full max-w-sm rounded-3xl overflow-hidden"
        style={{
          background: '#12131F',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: `0 0 60px ${slide.glow}`,
        }}
      >
        {/* Header gradient strip */}
        <div
          className="px-5 pt-6 pb-5 text-center"
          style={{ background: `linear-gradient(160deg, ${slide.color}22, transparent)` }}
        >
          {/* Skip button */}
          <div className="flex justify-end mb-2">
            <button
              onClick={onClose}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              跳過 ✕
            </button>
          </div>

          {/* Icon */}
          <div
            className="text-6xl mb-3"
            style={{
              animation: 'float 2.5s ease-in-out infinite',
              filter: `drop-shadow(0 0 20px ${slide.glow})`,
            }}
          >
            {slide.icon}
          </div>

          {/* Title */}
          <h2
            className="font-display text-xl font-bold text-white mb-1"
            style={{ color: slide.color }}
          >
            {slide.title}
          </h2>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-3">
            {SLIDES.map((_, i) => (
              <div
                key={i}
                onClick={() => setPage(i)}
                className="rounded-full transition-all cursor-pointer"
                style={{
                  width: i === page ? 20 : 6,
                  height: 6,
                  background: i === page ? slide.color : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pb-2 space-y-3">
          {slide.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
              <p className="text-sm text-gray-300 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Footer buttons */}
        <div className="px-5 pt-4 pb-6 flex gap-3">
          {page > 0 && (
            <button
              onClick={() => setPage(p => p - 1)}
              className="flex-1 py-3 rounded-2xl text-sm font-semibold transition-all active:scale-95"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
            >
              ← 上一步
            </button>
          )}
          <button
            onClick={() => isLast ? onClose() : setPage(p => p + 1)}
            className="flex-1 py-3 rounded-2xl font-bold text-sm text-white transition-all active:scale-95"
            style={{
              background: isLast
                ? `linear-gradient(135deg, ${from}, ${to})`
                : `linear-gradient(135deg, ${slide.color}cc, ${slide.color})`,
              boxShadow: isLast ? `0 4px 20px ${glow}` : `0 4px 16px ${slide.glow}`,
            }}
          >
            {isLast ? '開始冒險！⚔️' : '下一步 →'}
          </button>
        </div>
      </div>

      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}`}</style>
    </div>
  );
}
