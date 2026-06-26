import { useState, useEffect } from 'react';
import { speak, stopSpeaking, ttsSupported } from '../utils/tts';

const CHOICE_COLORS = ['#EF4444', '#22C55E', '#3B82F6', '#A855F7'];
const CHOICE_LETTERS = ['A', 'B', 'C', 'D'];

const PART_META = {
  1: { tag: 'Part 1 · 辨識句意', icon: '🖼️' },
  2: { tag: 'Part 2 · 基本問答', icon: '💬' },
  3: { tag: 'Part 3 · 言談理解', icon: '🎙️' },
};

// 答對療癒回饋：金幣上浮 + 分數彈跳 + 光環
function RewardBurst({ xp }) {
  const coins = [{ x: -46, d: 0 }, { x: -18, d: 0.07 }, { x: 14, d: 0.15 }, { x: 44, d: 0.22 }, { x: 0, d: 0.3 }];
  return (
    <div style={{ position: 'absolute', left: '50%', top: '26%', transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 30, width: 0 }}>
      <div style={{
        position: 'absolute', left: '50%', top: '50%', width: 74, height: 74,
        borderRadius: '50%', border: '4px solid var(--cozy-sun)',
        animation: 'correctBurst 0.6s ease-out forwards',
      }} />
      {coins.map((c, i) => (
        <div key={i} style={{
          position: 'absolute', left: `${c.x}px`, top: 0, fontSize: '1.5rem',
          transform: 'translate(-50%, 0)', animation: `coinPop 0.95s ease-out ${c.d}s both`,
        }}>🪙</div>
      ))}
      <div style={{
        position: 'absolute', left: '50%', top: -16, transform: 'translateX(-50%)',
        fontWeight: 900, fontSize: '1.7rem', color: '#E8740E', whiteSpace: 'nowrap',
        textShadow: '0 2px 0 #fff, 0 0 12px rgba(246,169,76,0.7)',
        animation: 'scorePop 0.7s cubic-bezier(0.34,1.56,0.64,1) both',
      }}>+{xp} XP</div>
    </div>
  );
}

function AudioButton({ text, primaryColor, label = '🔊 播放音檔' }) {
  const [playing, setPlaying] = useState(false);
  const play = () => {
    setPlaying(true);
    speak(text).then(() => setPlaying(false));
  };
  return (
    <button
      onClick={play}
      className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base transition-all active:scale-[0.98]"
      style={{
        background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}cc)`,
        color: '#fff',
        boxShadow: `0 6px 18px ${primaryColor}55`,
      }}
    >
      <span style={{ fontSize: '1.3rem', animation: playing ? 'float 0.8s ease-in-out infinite' : undefined }}>
        {playing ? '🎧' : '▶️'}
      </span>
      {playing ? '播放中…' : label}
    </button>
  );
}

export default function ListeningQuestionView({ question, questionNum, total, primaryColor, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const meta = PART_META[question.part] ?? PART_META[2];

  // 進入題目自動播放一次音檔；離開時停止
  useEffect(() => {
    const t = setTimeout(() => speak(question.audioText), 350);
    return () => { clearTimeout(t); stopSpeaking(); };
  }, [question]);

  const handleChoice = (choice, idx) => {
    if (revealed) return;
    const correct = choice === question.answer;
    setSelected(idx);
    setRevealed(true);
    setIsCorrect(correct);
    stopSpeaking();
    setTimeout(() => onAnswer(correct, question), 1200);
  };

  return (
    <div className="flex flex-col min-h-0 flex-1 overflow-y-auto relative pb-4">
      {revealed && isCorrect && <RewardBurst xp={question.xp} />}

      {/* Header: part tag + progress */}
      <div className="px-4 pt-4 flex items-center justify-between mb-2">
        <span className="text-xs px-3 py-1.5 rounded-full font-semibold"
          style={{ background: `${primaryColor}22`, color: primaryColor }}>
          {meta.icon} {meta.tag}
        </span>
        <span className="text-xs text-gray-400 font-medium">{questionNum} / {total}</span>
      </div>
      <div className="mx-4 mb-3 h-1 rounded-full overflow-hidden" style={{ background: 'var(--cozy-border)' }}>
        <div className="h-full rounded-full transition-all duration-300"
          style={{ width: `${(questionNum / total) * 100}%`, background: primaryColor }} />
      </div>

      {/* Part 1: 插畫情境卡（依正確答案句子即時生成扁平插畫，確保圖文一致） */}
      {question.part === 1 && (
        <div className="mx-4 mb-3 rounded-2xl overflow-hidden relative flex items-center justify-center"
          style={{
            minHeight: 200,
            background: `linear-gradient(160deg, ${primaryColor}18, ${primaryColor}08)`,
            border: `1px solid ${primaryColor}33`,
          }}>
          {question.imageUrl && !imgError && (
            <img
              src={question.imageUrl}
              alt="聽力情境插畫"
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              style={{
                width: '100%', height: 200, objectFit: 'cover',
                opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.4s',
              }}
            />
          )}
          {/* 載入中 / 失敗時的 placeholder（emoji） */}
          {(!imgLoaded || imgError) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <span style={{ fontSize: '3.5rem', lineHeight: 1, opacity: imgError ? 1 : 0.5 }}>{question.emoji}</span>
              {!imgError && !imgLoaded && (
                <span className="text-xs text-gray-400">插畫生成中…</span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Part 3: 場景說明 */}
      {question.part === 3 && question.scenario && (
        <div className="mx-4 mb-3 text-xs font-semibold" style={{ color: 'var(--cozy-ink-soft)' }}>
          🎬 {question.scenario}
        </div>
      )}

      {/* 音檔播放 */}
      <div className="mx-4 mb-2">
        <AudioButton text={question.audioText} primaryColor={primaryColor}
          label={question.part === 1 ? '🔊 播放四個句子' : '🔊 播放音檔'} />
        {!ttsSupported() && (
          <div className="mt-1 text-center text-xs" style={{ color: '#EF4444' }}>
            此裝置不支援語音播放
          </div>
        )}
      </div>
      <div className="mx-4 mb-3 text-center text-xs text-gray-400">{question.promptLabel}</div>

      {/* Part 2/3: 顯示題目文字（聽完後也方便對照） */}
      {question.part === 3 && question.question && (
        <div className="mx-4 mb-3 rounded-2xl p-4 text-sm font-semibold text-ink"
          style={{ background: 'var(--cozy-panel)', border: '1px solid var(--cozy-border)' }}>
          {question.question}
        </div>
      )}

      {/* Choices */}
      <div className="px-4 space-y-2.5">
        {question.choices.map((choice, idx) => {
          let bg = 'var(--cozy-panel-2)';
          let borderColor = 'var(--cozy-border)';
          let textColor = 'var(--cozy-ink)';
          let leftColor = CHOICE_COLORS[idx];
          if (revealed) {
            if (choice === question.answer) {
              bg = 'rgba(34,197,94,0.12)'; borderColor = '#22C55E'; textColor = '#15803D'; leftColor = '#22C55E';
            } else if (idx === selected) {
              bg = 'rgba(239,68,68,0.12)'; borderColor = '#EF4444'; textColor = '#B91C1C'; leftColor = '#EF4444';
            } else {
              textColor = 'var(--cozy-ink-faint)';
            }
          }
          return (
            <button
              key={idx}
              onClick={() => handleChoice(choice, idx)}
              disabled={revealed}
              className="w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.98]"
              style={{
                background: bg, border: `1px solid ${borderColor}`,
                borderLeftWidth: '3px', borderLeftColor: leftColor, color: textColor, minHeight: '52px',
              }}
            >
              <span className="mr-2 font-bold" style={{ color: leftColor }}>{CHOICE_LETTERS[idx]}</span>
              {revealed && choice === question.answer && '✓ '}
              {revealed && idx === selected && choice !== question.answer && '✗ '}
              {choice}
            </button>
          );
        })}
      </div>

      {/* 作答後：原文 + 解析 + XP */}
      {revealed && (
        <>
          <div className="mx-4 mt-3 px-4 py-3 rounded-xl text-xs leading-relaxed"
            style={{ background: 'var(--cozy-panel-2)', border: '1px solid var(--cozy-border)', color: 'var(--cozy-ink-soft)' }}>
            <div className="font-semibold mb-1" style={{ color: 'var(--cozy-ink)' }}>📝 聽力原文</div>
            <div style={{ whiteSpace: 'pre-line' }}>{question.transcript}</div>
            {question.explanation && <div className="mt-2 text-gray-400">💡 {question.explanation}</div>}
          </div>
          <div className="mx-4 mt-3 rounded-xl py-3 flex items-center justify-center gap-4"
            style={{ background: 'var(--cozy-panel-2)' }}>
            <div className="flex items-center gap-1.5 text-sm">
              <span className="text-yellow-400">✦</span>
              <span className="font-bold" style={{ color: isCorrect ? '#22C55E' : 'var(--cozy-ink-soft)' }}>
                {isCorrect ? `+${question.xp} XP` : '+3 XP'}
              </span>
            </div>
            <span className="text-lg">{isCorrect ? '🎉' : '💪'}</span>
          </div>
        </>
      )}
    </div>
  );
}
