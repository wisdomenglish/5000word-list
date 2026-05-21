import { useState, useEffect } from 'react';
import { ONBOARDING_WORDS } from '../data/classes';

// Each word gets a random-ish starting position across the screen
const WORD_POSITIONS = ONBOARDING_WORDS.map((_, i) => ({
  left: `${8 + (i % 5) * 18 + Math.random() * 8}%`,
  delay: `${i * 0.4}s`,
  size: i % 3 === 0 ? 'text-xl' : i % 3 === 1 ? 'text-base' : 'text-sm',
  opacity: i % 3 === 0 ? 'opacity-90' : 'opacity-60',
}));

export default function Onboarding({ onReady }) {
  const [phase, setPhase] = useState(0);
  // 0 = hero appears, 1 = words float, 2 = tagline, 3 = button

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 2400);
    const t3 = setTimeout(() => setPhase(3), 3600);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at center, #1a1040 0%, #0D0D1A 70%)' }}
    >
      {/* Floating words layer */}
      {phase >= 1 && ONBOARDING_WORDS.map((word, i) => (
        <div
          key={word}
          className={`absolute font-display font-bold text-white ${WORD_POSITIONS[i].size} ${WORD_POSITIONS[i].opacity}`}
          style={{
            left: WORD_POSITIONS[i].left,
            bottom: '-20px',
            animationName: 'floatWord',
            animationDuration: `${3 + (i % 3)}s`,
            animationDelay: WORD_POSITIONS[i].delay,
            animationTimingFunction: 'ease-out',
            animationFillMode: 'both',
            pointerEvents: 'none',
          }}
        >
          {word}
        </div>
      ))}

      {/* Center content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        {/* Hero emoji waking up */}
        <div
          className="text-8xl mb-6"
          style={{
            opacity: phase >= 0 ? 1 : 0,
            transform: phase >= 0 ? 'scale(1)' : 'scale(0)',
            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            filter: 'drop-shadow(0 0 30px rgba(168,85,247,0.6))',
            animation: phase >= 1 ? 'float 3s ease-in-out infinite' : undefined,
          }}
        >
          ⚔️
        </div>

        {/* Tagline */}
        <div
          className="space-y-2"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(12px)',
            transition: 'all 0.7s ease-out',
          }}
        >
          <div className="font-display text-2xl font-bold text-white tracking-wide">
            Hero's English Journey
          </div>
          <p className="text-gray-400 text-sm">
            你的英雄在等你——一起踏上詞彙冒險！
          </p>
        </div>

        {/* CTA button */}
        <div
          className="mt-10"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <button
            onClick={onReady}
            className="px-10 py-4 rounded-2xl font-display font-bold text-base text-white transition-all duration-150 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #3B0764, #7C3AED)',
              boxShadow: '0 6px 30px rgba(168,85,247,0.5)',
            }}
          >
            開始冒險 →
          </button>
          <p className="text-xs text-gray-500 mt-3">選擇你的職業，踏上學習之旅</p>
        </div>
      </div>

      <style>{`
        @keyframes floatWord {
          0%   { transform: translateY(0);    opacity: 0; }
          15%  { opacity: 0.7; }
          85%  { opacity: 0.4; }
          100% { transform: translateY(-110vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
