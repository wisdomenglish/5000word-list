import { useState, useCallback } from 'react';
import { buildListeningSession } from '../api/claudeClient';
import { stopSpeaking } from '../utils/tts';
import ListeningQuestionView from './ListeningQuestionView';
import ListeningSessionDone from './ListeningSessionDone';

const PARTS_INTRO = [
  { icon: '🖼️', title: 'Part 1 · 辨識句意', desc: '看圖選出正確描述', xp: '10 XP' },
  { icon: '💬', title: 'Part 2 · 基本問答', desc: '聽問題選最佳回答', xp: '15 XP' },
  { icon: '🎙️', title: 'Part 3 · 言談理解', desc: '聽對話/短文回答問題', xp: '20 XP' },
];

function Intro({ classData, onStart }) {
  return (
    <div className="flex flex-col items-center flex-1 px-5 pt-6 text-center">
      <div className="text-6xl mb-3" style={{ animation: 'float 3s ease-in-out infinite' }}>🎧</div>
      <div className="font-display text-2xl font-bold text-ink mb-1">會考聽力測驗</div>
      <p className="text-sm text-ink-soft mb-5 leading-relaxed">仿國中教育會考形式，三部分共 21 題</p>

      <div className="w-full max-w-xs space-y-2.5 mb-6">
        {PARTS_INTRO.map(p => (
          <div key={p.title} className="flex items-center gap-3 px-4 py-3 rounded-2xl text-left"
            style={{ background: 'var(--cozy-panel)', border: '1px solid var(--cozy-border)' }}>
            <span style={{ fontSize: '1.6rem' }}>{p.icon}</span>
            <div className="flex-1">
              <div className="text-sm font-bold text-ink">{p.title}</div>
              <div className="text-xs text-gray-400">{p.desc}</div>
            </div>
            <span className="text-xs font-bold" style={{ color: classData.primaryColor }}>{p.xp}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onStart}
        className="w-full max-w-xs py-4 rounded-2xl font-display font-bold text-lg transition-all active:scale-95"
        style={{
          background: `linear-gradient(135deg, ${classData.gradientFrom}, ${classData.gradientTo})`,
          boxShadow: `0 6px 24px ${classData.glowColor}`,
          color: '#fff',
        }}
      >
        開始聽力測驗
      </button>
      <p className="text-xs text-gray-400 mt-3">🔊 請開啟裝置音量</p>
    </div>
  );
}

function LoadingView() {
  return (
    <div className="flex flex-col flex-1 px-4 pt-4">
      <div className="flex items-center justify-between mb-4">
        <div className="skeleton h-7 w-28 rounded-full" />
        <div className="skeleton h-4 w-12 rounded" />
      </div>
      <div className="skeleton h-1 rounded-full mb-4" />
      <div className="skeleton h-44 rounded-2xl mb-3" />
      <div className="skeleton h-14 rounded-2xl mb-4" />
      {[0, 1, 2, 3].map(i => <div key={i} className="skeleton h-14 rounded-xl mb-2.5" />)}
    </div>
  );
}

export default function ListeningTab({ hero, classData, onComplete }) {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [results, setResults] = useState([]);
  const [sessionXP, setSessionXP] = useState(0);
  const [done, setDone] = useState(false);

  const reset = () => {
    stopSpeaking();
    setStarted(false); setQuestions([]); setLoading(false); setLoadError(false);
    setCurrentIdx(0); setResults([]); setSessionXP(0); setDone(false);
  };

  const startSession = () => {
    setStarted(true); setLoading(true); setLoadError(false);
    setCurrentIdx(0); setResults([]); setSessionXP(0); setDone(false);
    buildListeningSession()
      .then(qs => {
        if (!qs.length) { setLoadError(true); setLoading(false); return; }
        setQuestions(qs); setLoading(false);
      })
      .catch(() => { setLoading(false); setLoadError(true); });
  };

  const handleAnswer = useCallback((correct, question) => {
    const xp = correct ? question.xp : 3;
    const newResults = [...results, { part: question.part, correct, xp, type: question.type }];
    const newXP = sessionXP + xp;
    setResults(newResults);
    setSessionXP(newXP);
    if (currentIdx + 1 >= questions.length) {
      setDone(true);
      onComplete({ results: newResults, totalXP: newXP });
    } else {
      setCurrentIdx(i => i + 1);
    }
  }, [results, sessionXP, currentIdx, questions.length, onComplete]);

  if (!started) {
    return (
      <div className="flex flex-col min-h-[calc(100dvh-64px)] pb-24">
        <div className="pt-5 pb-1 text-center text-xs text-gray-500 font-semibold tracking-widest uppercase mb-1">聽力</div>
        <Intro classData={classData} onStart={startSession} />
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-64px)] pb-24 px-6 text-center">
        <div className="text-4xl mb-4">⚠️</div>
        <p className="text-ink font-semibold mb-1">載入題目失敗</p>
        <p className="text-gray-400 text-sm mb-6">請確認網路連線後再試</p>
        <button onClick={reset}
          className="px-6 py-3 rounded-xl font-semibold text-sm active:scale-95 transition-transform"
          style={{ background: classData.primaryColor, color: '#fff', minHeight: '44px' }}>
          返回重試
        </button>
      </div>
    );
  }

  if (loading) {
    return <div className="flex flex-col min-h-[calc(100dvh-64px)] pb-24"><LoadingView /></div>;
  }

  if (done) {
    return (
      <div className="flex flex-col min-h-[calc(100dvh-64px)] pb-24">
        <ListeningSessionDone results={results} totalXP={sessionXP} classData={classData} onDone={reset} />
      </div>
    );
  }

  const currentQ = questions[currentIdx];

  return (
    <div className="flex flex-col min-h-[calc(100dvh-64px)] pb-24">
      <div className="pt-2 pb-2 flex items-center px-2">
        <button onClick={reset}
          className="text-xs text-gray-400 transition-colors active:opacity-60 flex items-center gap-1"
          style={{ minWidth: '44px', minHeight: '44px', padding: '0 12px' }}
          aria-label="離開聽力測驗">
          ← 離開
        </button>
        <span className="ml-auto text-xs text-gray-500 pr-4">+{sessionXP} XP</span>
      </div>
      {currentQ && (
        <ListeningQuestionView
          key={currentIdx}
          question={currentQ}
          questionNum={currentIdx + 1}
          total={questions.length}
          primaryColor={classData.primaryColor}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}
