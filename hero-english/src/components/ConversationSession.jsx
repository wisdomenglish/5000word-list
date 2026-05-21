import { useState, useEffect, useRef } from 'react';
import { generateConversationData } from '../api/claudeClient';

const XP_NATURAL = 75;
const XP_WRONG   = 20;

export default function ConversationSession({ classData, onComplete, onExit }) {
  const [convData, setConvData]   = useState(null);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(false);
  const [turnIdx, setTurnIdx]     = useState(0);
  const [history, setHistory]     = useState([]);   // [{aiLine, aiZh, chosen, isNatural}]
  const [pendingChoice, setPendingChoice] = useState(null);
  const [done, setDone]           = useState(false);
  const [totalXP, setTotalXP]     = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    generateConversationData()
      .then(d => { setConvData(d); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, pendingChoice]);

  const handleChoice = (choice) => {
    if (pendingChoice) return;
    setPendingChoice(choice);
    const xp = choice.isNatural ? XP_NATURAL : XP_WRONG;

    setTimeout(() => {
      const newHistory = [...history, {
        aiLine: convData.turns[turnIdx].ai,
        aiZh:   convData.turns[turnIdx].aiZh,
        chosen: choice.en,
        isNatural: choice.isNatural,
      }];
      const newXP = totalXP + xp;
      setHistory(newHistory);
      setTotalXP(newXP);
      setPendingChoice(null);

      if (turnIdx + 1 >= convData.turns.length) {
        setDone(true);
        onComplete({
          results: newHistory.map(h => ({ correct: h.isNatural, type: 'conversation', wordKey: null })),
          totalXP: newXP,
        });
      } else {
        setTurnIdx(i => i + 1);
      }
    }, 700);
  };

  const naturalCount = history.filter(h => h.isNatural).length;

  // ── Loading ──
  if (loading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <div className="text-4xl animate-bounce">{classData.emoji}</div>
        <div className="text-sm text-gray-400">AI 正在準備對話情境…</div>
      </div>
    );
  }

  // ── Error ──
  if (error || !convData) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
        <div className="text-3xl">😓</div>
        <div className="text-sm text-gray-400 text-center">無法連接 AI，請檢查網路後重試</div>
        <button onClick={onExit} className="text-xs text-gray-500 mt-2">← 離開</button>
      </div>
    );
  }

  // ── Done ──
  if (done) {
    const pct = Math.round((naturalCount / convData.turns.length) * 100);
    const grade = pct === 100 ? '天才英語人！🏆' : pct >= 75 ? '說得很自然！⭐' : pct >= 50 ? '不錯的開始！👊' : '繼續練習！💪';
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-5 py-8">
        <div className="text-6xl mb-4" style={{ animation: 'float 2s ease-in-out infinite' }}>{classData.emoji}</div>
        <div className="font-display text-xl font-bold text-white mb-1">{grade}</div>
        <div className="text-gray-400 text-sm mb-6">對話練習完成</div>

        <div className="w-full max-w-xs rounded-2xl p-5 mb-6"
          style={{ background: `linear-gradient(135deg, ${classData.gradientFrom}80, ${classData.gradientTo}60)`, border: `1px solid ${classData.primaryColor}40` }}>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-2xl font-bold text-white">{naturalCount}/{convData.turns.length}</div>
              <div className="text-xs text-gray-300 mt-0.5">自然回應</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{pct}%</div>
              <div className="text-xs text-gray-300 mt-0.5">自然率</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: classData.primaryColor }}>+{totalXP}</div>
              <div className="text-xs text-gray-300 mt-0.5">XP</div>
            </div>
          </div>
        </div>

        <button onClick={onExit}
          className="w-full max-w-xs py-4 rounded-2xl font-display font-bold text-lg transition-all active:scale-95"
          style={{ background: `linear-gradient(135deg, ${classData.gradientFrom}, ${classData.gradientTo})`, boxShadow: `0 6px 24px ${classData.glowColor}` }}>
          回到大廳
        </button>
      </div>
    );
  }

  const currentTurn = convData.turns[turnIdx];

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Topic bar */}
      <div className="px-4 pt-3 pb-2 flex items-center justify-between">
        <span className="text-xs px-3 py-1.5 rounded-full font-semibold"
          style={{ background: `${classData.primaryColor}22`, color: classData.primaryColor }}>
          🗣 {convData.topic}
        </span>
        <span className="text-xs text-gray-400">{turnIdx + 1} / {convData.turns.length} 輪</span>
      </div>

      {/* Progress bar */}
      <div className="mx-4 mb-3 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div className="h-full rounded-full transition-all duration-300"
          style={{ width: `${(turnIdx / convData.turns.length) * 100}%`, background: classData.primaryColor }} />
      </div>

      {/* Scenario hint (first turn only) */}
      {turnIdx === 0 && history.length === 0 && (
        <div className="mx-4 mb-3 px-3 py-2 rounded-xl text-xs text-gray-400 text-center"
          style={{ background: 'rgba(255,255,255,0.04)' }}>
          📍 {convData.scenario}
        </div>
      )}

      {/* Chat area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 pb-2 space-y-3" style={{ minHeight: 0 }}>
        {/* Past turns */}
        {history.map((h, i) => (
          <div key={i}>
            {/* AI bubble */}
            <div className="flex gap-2 items-end mb-1">
              <div className="text-xl flex-shrink-0">{classData.emoji}</div>
              <div className="max-w-[80%]">
                <div className="rounded-2xl rounded-bl-sm px-3 py-2.5"
                  style={{ background: '#1A1B2E', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-sm text-white">{h.aiLine}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{h.aiZh}</div>
                </div>
              </div>
            </div>
            {/* User bubble */}
            <div className="flex gap-2 items-end justify-end">
              <div className="max-w-[80%]">
                <div className="rounded-2xl rounded-br-sm px-3 py-2.5"
                  style={{ background: h.isNatural ? `${classData.primaryColor}33` : 'rgba(239,68,68,0.15)', border: `1px solid ${h.isNatural ? classData.primaryColor + '40' : 'rgba(239,68,68,0.3)'}` }}>
                  <div className="text-sm" style={{ color: h.isNatural ? '#fff' : '#FCA5A5' }}>
                    {h.isNatural ? '✓ ' : '✗ '}{h.chosen}
                  </div>
                </div>
              </div>
              <div className="text-xl flex-shrink-0">👤</div>
            </div>
          </div>
        ))}

        {/* Current AI turn */}
        <div className="flex gap-2 items-end">
          <div className="text-xl flex-shrink-0">{classData.emoji}</div>
          <div className="max-w-[80%]">
            <div className="rounded-2xl rounded-bl-sm px-3 py-2.5"
              style={{ background: '#1A1B2E', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="text-sm text-white">{currentTurn.ai}</div>
              <div className="text-xs text-gray-500 mt-0.5">{currentTurn.aiZh}</div>
            </div>
          </div>
        </div>

        {/* Pending choice (before commit) */}
        {pendingChoice && (
          <div className="flex gap-2 items-end justify-end">
            <div className="max-w-[80%]">
              <div className="rounded-2xl rounded-br-sm px-3 py-2.5"
                style={{ background: `${classData.primaryColor}33`, border: `1px solid ${classData.primaryColor}40` }}>
                <div className="text-sm text-white">{pendingChoice.en}</div>
              </div>
            </div>
            <div className="text-xl flex-shrink-0">👤</div>
          </div>
        )}
      </div>

      {/* Choice buttons */}
      {!pendingChoice && (
        <div className="px-4 pt-2 pb-4 space-y-2.5">
          <div className="text-xs text-gray-500 mb-1">選出最自然的回應：</div>
          {currentTurn.choices.map((choice, idx) => (
            <button key={idx}
              onClick={() => handleChoice(choice)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm transition-all active:scale-[0.98]"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#E8E8F0' }}>
              {choice.en}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
