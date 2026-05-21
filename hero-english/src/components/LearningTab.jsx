import { useState, useEffect, useCallback } from 'react';
import { buildQuestSession, buildReadingSession } from '../api/claudeClient';
import { calcXPReward } from '../utils/xp';
import { HERO_CRIES } from '../data/classes';
import { kkToIPA } from '../utils/phonetic';
import ConversationSession from './ConversationSession';

const CHOICE_COLORS = ['#EF4444', '#22C55E', '#3B82F6', '#A855F7'];
const CHOICE_ICONS  = ['📕', '📗', '📘', '📙'];

function SentenceWithBlank({ sentence, answer, revealed, isCorrect, primaryColor }) {
  const parts = sentence.split('______');
  if (parts.length !== 2) return <span>{sentence}</span>;
  const blankColor = revealed ? (isCorrect ? '#22C55E' : '#EF4444') : primaryColor;
  return (
    <>
      {parts[0]}
      <span style={{
        display: 'inline-block',
        minWidth: 72,
        borderBottom: `2px solid ${blankColor}`,
        color: blankColor,
        fontStyle: 'italic',
        padding: '0 6px',
        textAlign: 'center',
        transition: 'color 0.3s, border-color 0.3s',
      }}>
        {revealed ? answer : '______'}
      </span>
      {parts[1]}
    </>
  );
}

function ReadingQuestionView({ question, questionNum, total, primaryColor, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [passageOpen, setPassageOpen] = useState(true);

  const handleChoice = (choice, idx) => {
    if (revealed) return;
    const correct = choice === question.answer;
    setSelected(idx);
    setRevealed(true);
    setIsCorrect(correct);
    setTimeout(() => onAnswer(correct, question), 1100);
  };

  return (
    <div className="flex flex-col min-h-0 flex-1 overflow-y-auto">
      {/* Header */}
      <div className="px-4 pt-4 flex items-center justify-between mb-2">
        <span
          className="text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-1"
          style={{ background: `${primaryColor}22`, color: primaryColor }}
        >
          📰 {question.passageSource}
        </span>
        <span className="text-xs text-gray-400 font-medium">{questionNum} / {total}</span>
      </div>
      <div className="mx-4 mb-3 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${(questionNum / total) * 100}%`, background: primaryColor }}
        />
      </div>

      {/* Passage (collapsible) */}
      <div className="mx-4 mb-3 rounded-2xl overflow-hidden" style={{ background: '#1A1B2E', border: '1px solid rgba(255,255,255,0.06)' }}>
        <button
          onClick={() => setPassageOpen(o => !o)}
          className="w-full flex items-center justify-between px-4 py-3 text-left"
        >
          <span className="text-xs font-bold text-white truncate pr-2">{question.passageTitle}</span>
          <span className="text-xs text-gray-400 flex-shrink-0">{passageOpen ? '▲ 收起' : '▼ 展開'}</span>
        </button>
        {passageOpen && (
          <div className="px-4 pb-4 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3">
            {question.passage}
          </div>
        )}
      </div>

      {/* Question card */}
      <div className="mx-4 mb-3 rounded-2xl p-4" style={{ background: '#1A1B2E', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="text-xs text-gray-500 mb-2">閱讀理解</div>
        <div className="text-sm font-semibold text-white leading-relaxed">{question.prompt}</div>
      </div>

      {/* Choices */}
      <div className="px-4 space-y-2.5 mb-3">
        {question.choices.map((choice, idx) => {
          let bg = 'rgba(255,255,255,0.05)';
          let borderColor = 'rgba(255,255,255,0.08)';
          let textColor = '#E8E8F0';
          let leftColor = CHOICE_COLORS[idx];

          if (revealed) {
            if (choice === question.answer) {
              bg = 'rgba(34,197,94,0.12)'; borderColor = '#22C55E'; textColor = '#86EFAC'; leftColor = '#22C55E';
            } else if (idx === selected) {
              bg = 'rgba(239,68,68,0.12)'; borderColor = '#EF4444'; textColor = '#FCA5A5'; leftColor = '#EF4444';
            } else {
              textColor = 'rgba(255,255,255,0.3)';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleChoice(choice, idx)}
              disabled={revealed}
              className="w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200"
              style={{ background: bg, border: `1px solid ${borderColor}`, borderLeftWidth: '3px', borderLeftColor: leftColor, color: textColor }}
            >
              <span className="mr-2 opacity-60">{CHOICE_ICONS[idx]}</span>
              {revealed && choice === question.answer && '✓ '}
              {revealed && idx === selected && choice !== question.answer && '✗ '}
              {choice}
            </button>
          );
        })}
      </div>

      {/* Explanation + XP */}
      {revealed && (
        <>
          {question.explanation && (
            <div className="mx-4 mb-3 px-4 py-2.5 rounded-xl text-xs text-gray-400 leading-relaxed"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              💡 {question.explanation}
            </div>
          )}
          <div className="mx-4 mb-4 rounded-xl py-3 flex items-center justify-center gap-4"
            style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-1.5 text-sm">
              <span className="text-yellow-400">✦</span>
              <span className="font-bold" style={{ color: isCorrect ? '#22C55E' : '#9CA3AF' }}>
                {isCorrect ? '+30 XP' : '+3 XP'}
              </span>
            </div>
            <span className="text-lg">{isCorrect ? '🎉' : '💪'}</span>
          </div>
        </>
      )}
    </div>
  );
}

function QuestionView({ question, questionNum, total, topic, primaryColor, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const isContext = question.type === 'context_choice';
  const isSentence = isContext || question.type === 'fill_blank';

  const handleChoice = (choice, idx) => {
    if (revealed) return;
    const correct = choice === question.answer;
    setSelected(idx);
    setRevealed(true);
    setIsCorrect(correct);
    setTimeout(() => onAnswer(correct, question), 1100);
  };

  return (
    <div className="flex flex-col min-h-0 flex-1">
      {/* Topic + progress */}
      <div className="px-4 pt-4 flex items-center justify-between mb-2">
        <span
          className="text-xs px-3 py-1.5 rounded-full font-semibold"
          style={{ background: `${primaryColor}22`, color: primaryColor }}
        >
          {topic}
        </span>
        <span className="text-xs text-gray-400 font-medium">{questionNum} / {total}</span>
      </div>
      <div className="mx-4 mb-4 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${(questionNum / total) * 100}%`, background: primaryColor }}
        />
      </div>

      {/* Word / sentence card */}
      <div
        className="mx-4 mb-4 rounded-2xl p-5"
        style={{ background: '#1A1B2E', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        {isContext && (
          <div className="text-xs text-gray-500 mb-2">文意選擇</div>
        )}
        <div
          className={`font-bold text-white mb-1 ${isSentence ? 'text-base leading-relaxed' : 'text-3xl'}`}
          style={!isSentence ? { textShadow: `0 0 20px ${primaryColor}60` } : undefined}
        >
          {isContext
            ? <SentenceWithBlank
                sentence={question.prompt}
                answer={question.answer}
                revealed={revealed}
                isCorrect={isCorrect}
                primaryColor={primaryColor}
              />
            : question.prompt
          }
        </div>
        {question.phonetic && (
          <div className="text-sm mb-1" style={{ color: primaryColor }}>
            {kkToIPA(question.phonetic)}
          </div>
        )}
        {question.subtext && (
          <div className="text-xs text-gray-500">{question.subtext}</div>
        )}
      </div>

      {/* Choices label */}
      <div className="px-4 mb-2 text-xs text-gray-400">{question.promptLabel}</div>

      {/* Choices */}
      <div className="px-4 space-y-2.5">
        {question.choices.map((choice, idx) => {
          let bg = 'rgba(255,255,255,0.05)';
          let borderColor = 'rgba(255,255,255,0.08)';
          let textColor = '#E8E8F0';
          let leftColor = CHOICE_COLORS[idx];

          if (revealed) {
            if (choice === question.answer) {
              bg = 'rgba(34,197,94,0.12)';
              borderColor = '#22C55E';
              textColor = '#86EFAC';
              leftColor = '#22C55E';
            } else if (idx === selected) {
              bg = 'rgba(239,68,68,0.12)';
              borderColor = '#EF4444';
              textColor = '#FCA5A5';
              leftColor = '#EF4444';
            } else {
              textColor = 'rgba(255,255,255,0.3)';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleChoice(choice, idx)}
              disabled={revealed}
              className="w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.98]"
              style={{
                background: bg,
                border: `1px solid ${borderColor}`,
                borderLeftWidth: '3px',
                borderLeftColor: leftColor,
                color: textColor,
                minHeight: '52px',
              }}
            >
              <span className="mr-2 opacity-60">{CHOICE_ICONS[idx]}</span>
              {revealed && choice === question.answer && '✓ '}
              {revealed && idx === selected && choice !== question.answer && '✗ '}
              {choice}
            </button>
          );
        })}
      </div>

      {/* Translation for context questions */}
      {revealed && isContext && question.translation && (
        <div className="mx-4 mt-3 px-4 py-2.5 rounded-xl text-xs text-gray-400 leading-relaxed"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          {question.translation}
        </div>
      )}

      {/* XP reward */}
      {revealed && (
        <div
          className="mx-4 mt-3 rounded-xl py-3 flex items-center justify-center gap-4"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <div className="flex items-center gap-1.5 text-sm">
            <span className="text-yellow-400">✦</span>
            <span className="font-bold" style={{ color: isCorrect ? '#22C55E' : '#9CA3AF' }}>
              {isCorrect ? (isContext ? '+20 XP' : '+12 XP') : '+3 XP'}
            </span>
          </div>
          {isCorrect && (
            <div className="flex items-center gap-1.5 text-sm text-gray-400">
              <span>詞彙+1</span>
            </div>
          )}
          <span className="text-lg">{isCorrect ? '🎉' : '💪'}</span>
        </div>
      )}
    </div>
  );
}

function SessionDone({ results, totalXP, classData, onDone }) {
  const correct = results.filter(r => r.correct).length;
  const pct = Math.round((correct / results.length) * 100);
  const grade = pct === 100 ? '完美！🏆' : pct >= 80 ? '太棒了！⭐' : pct >= 60 ? '繼續加油！👊' : '再接再厲！💪';

  return (
    <div className="flex flex-col items-center justify-center flex-1 px-5 py-10">
      <div className="text-6xl mb-4" style={{ animation: 'float 2s ease-in-out infinite' }}>{classData.emoji}</div>
      <div className="font-display text-2xl font-bold text-white mb-1">{grade}</div>
      <div className="text-gray-400 text-sm mb-6">任務完成</div>

      <div
        className="w-full max-w-xs rounded-2xl p-5 mb-6"
        style={{
          background: `linear-gradient(135deg, ${classData.gradientFrom}80, ${classData.gradientTo}60)`,
          border: `1px solid ${classData.primaryColor}40`,
        }}
      >
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

      <button
        onClick={onDone}
        className="w-full max-w-xs py-4 rounded-2xl font-display font-bold text-lg transition-all active:scale-95"
        style={{
          background: `linear-gradient(135deg, ${classData.gradientFrom}, ${classData.gradientTo})`,
          boxShadow: `0 6px 24px ${classData.glowColor}`,
        }}
      >
        回到大廳
      </button>
    </div>
  );
}

const TRAIN_MODES = [
  { key: 'mixed',   icon: '📚', label: '綜合練習', type: undefined,   topic: '綜合練習' },
  { key: 'word',    icon: '🔤', label: '單字配對', type: 'word',      topic: '單字配對' },
  { key: 'context', icon: '📝', label: '文意選填', type: 'context',   topic: '文意選填' },
  { key: 'reading', icon: '📰', label: '閱讀測驗', type: 'reading',   topic: '閱讀測驗' },
];

function NoSession({ hero, classData, mood, onQuickStart }) {
  const [modeKey, setModeKey] = useState('mixed');
  const msgs = HERO_CRIES[classData.id]?.[mood] ?? ['你的英雄在等你！'];
  const currentMode = TRAIN_MODES.find(m => m.key === modeKey);
  // reading mode: fixed 1 passage = 3 questions; context skips 1-question option
  const counts = modeKey === 'reading'
    ? [{ label: '開始閱讀測驗（3 題）', count: 3 }]
    : modeKey === 'context'
    ? [{ label: '練習 5 題', count: 5 }, { label: '全力 10 題', count: 10 }]
    : [
        { label: classData.sessionLabels?.[0] ?? '快速 1 題', count: 1 },
        { label: classData.sessionLabels?.[1] ?? '練習 5 題', count: 5 },
        { label: classData.sessionLabels?.[2] ?? '全力 10 題', count: 10 },
      ];

  return (
    <div className="flex flex-col items-center justify-center flex-1 px-5 text-center">
      <div className="text-7xl mb-5" style={{ animation: 'float 3s ease-in-out infinite' }}>{classData.emoji}</div>
      <p className="text-sm text-gray-300 mb-5 leading-relaxed">{msgs[0]}</p>

      {/* Mode selector */}
      <div className="w-full max-w-xs flex gap-1.5 mb-5 p-1 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
        {TRAIN_MODES.map(m => (
          <button
            key={m.key}
            onClick={() => setModeKey(m.key)}
            className="flex-1 py-2 rounded-xl text-xs font-semibold transition-all"
            style={{
              background: modeKey === m.key ? classData.primaryColor : 'transparent',
              color: modeKey === m.key ? '#fff' : 'rgba(255,255,255,0.4)',
            }}
          >
            <div style={{ fontSize: '1rem' }}>{m.icon}</div>
            <div style={{ marginTop: 2 }}>{m.label}</div>
          </button>
        ))}
      </div>

      {/* Count buttons */}
      <div className="w-full max-w-xs space-y-3">
        {counts.map((opt, i) => (
          <button
            key={opt.count}
            onClick={() => onQuickStart(opt.count, currentMode)}
            className="w-full py-3.5 rounded-2xl font-bold text-sm transition-all active:scale-95"
            style={{
              background: i === 0
                ? `linear-gradient(135deg, ${classData.gradientFrom}, ${classData.gradientTo})`
                : 'rgba(255,255,255,0.06)',
              border: i !== 0 ? `1px solid ${classData.primaryColor}40` : 'none',
              color: '#fff',
              boxShadow: i === 0 ? `0 4px 16px ${classData.glowColor}` : 'none',
            }}
          >
            {opt.label}
            <span className="text-xs opacity-60 ml-2">({opt.count} 題)</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function LearningTab({ hero, classData, mood, session, onComplete, onClearSession }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [results, setResults] = useState([]);
  const [sessionXP, setSessionXP] = useState(0);
  const [done, setDone] = useState(false);

  // Hooks must all be declared before any early return
  useEffect(() => {
    if (!session || session.type === 'conversation') {
      setDone(false); setQuestions([]); setCurrentIdx(0); setResults([]); setSessionXP(0); setLoadError(false);
      return;
    }
    setLoading(true);
    setDone(false);
    setLoadError(false);
    setCurrentIdx(0);
    setResults([]);
    setSessionXP(0);
    const loader = session.type === 'reading'
      ? buildReadingSession()
      : buildQuestSession({ count: session.count, classId: hero.classId, type: session.type });
    loader
      .then(qs => { setQuestions(qs); setLoading(false); })
      .catch(() => { setLoading(false); setLoadError(true); });
  }, [session]);

  const handleAnswer = useCallback((correct, question) => {
    const xp = correct
      ? (question.type === 'reading_choice' ? 30 : question.type === 'context_choice' ? 20 : 12)
      : 3;
    const newResult = { prompt: question.prompt, answer: question.answer, correct, xp, wordKey: question.wordKey, type: question.type };
    const newResults = [...results, newResult];
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

  const handleQuickStart = (count, mode) => {
    onClearSession({ count, topic: mode?.topic ?? '自由練習', type: mode?.type });
  };

  // Conversation session rendered separately (early return AFTER all hooks)
  if (session?.type === 'conversation') {
    return (
      <div className="flex flex-col min-h-[calc(100dvh-64px)] pb-24">
        <div className="pt-1 px-2">
          <button
            onClick={onClearSession}
            className="text-xs text-gray-400 transition-colors active:opacity-60"
            style={{ minWidth: '44px', minHeight: '44px', padding: '0 12px' }}
            aria-label="離開學習"
          >
            ← 離開
          </button>
        </div>
        <ConversationSession
          classData={classData}
          onComplete={onComplete}
          onExit={onClearSession}
        />
      </div>
    );
  }

  if (!session && !done) {
    return (
      <div className="flex flex-col min-h-[calc(100dvh-64px)] pb-24">
        <div className="pt-5 pb-1 text-center text-xs text-gray-500 font-semibold tracking-widest uppercase mb-2">學習</div>
        <NoSession hero={hero} classData={classData} mood={mood} onQuickStart={handleQuickStart} />
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-64px)] pb-24 px-6 text-center">
        <div className="text-4xl mb-4">⚠️</div>
        <p className="text-white font-semibold mb-1">載入題目失敗</p>
        <p className="text-gray-400 text-sm mb-6">請確認網路連線後再試</p>
        <button
          onClick={onClearSession}
          className="px-6 py-3 rounded-xl font-semibold text-sm active:scale-95 transition-transform"
          style={{ background: classData.primaryColor, color: '#fff', minHeight: '44px' }}
        >
          返回重試
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col min-h-[calc(100dvh-64px)] pb-24 px-4 pt-4">
        {/* Skeleton header */}
        <div className="flex items-center justify-between mb-4">
          <div className="skeleton h-7 w-20 rounded-full" />
          <div className="skeleton h-4 w-12 rounded" />
        </div>
        <div className="skeleton h-1 rounded-full mb-6" />
        {/* Skeleton card */}
        <div className="rounded-2xl p-5 mb-4" style={{ background: '#1A1B2E' }}>
          <div className="skeleton h-4 w-16 rounded mb-3" />
          <div className="skeleton h-10 w-3/4 rounded mb-2" />
          <div className="skeleton h-4 w-1/3 rounded" />
        </div>
        {/* Skeleton choices */}
        {[0,1,2,3].map(i => (
          <div key={i} className="skeleton h-14 rounded-xl mb-2.5" />
        ))}
      </div>
    );
  }

  if (done) {
    return (
      <div className="flex flex-col min-h-[calc(100dvh-64px)] pb-24">
        <SessionDone results={results} totalXP={sessionXP} classData={classData} onDone={onClearSession} />
      </div>
    );
  }

  const currentQ = questions[currentIdx];
  const isReading = currentQ?.type === 'reading_choice';

  return (
    <div className="flex flex-col min-h-[calc(100dvh-64px)] pb-24">
      <div className="pt-2 pb-2 flex items-center px-2">
        <button
          onClick={onClearSession}
          className="text-xs text-gray-400 transition-colors active:opacity-60 flex items-center gap-1"
          style={{ minWidth: '44px', minHeight: '44px', padding: '0 12px' }}
          aria-label="離開學習"
        >
          ← 離開
        </button>
        <span className="ml-auto text-xs text-gray-500 pr-4">+{sessionXP} XP</span>
      </div>
      {questions.length > 0 && (
        isReading
          ? <ReadingQuestionView
              key={currentIdx}
              question={currentQ}
              questionNum={currentIdx + 1}
              total={questions.length}
              primaryColor={classData.primaryColor}
              onAnswer={handleAnswer}
            />
          : <QuestionView
              key={currentIdx}
              question={currentQ}
              questionNum={currentIdx + 1}
              total={questions.length}
              topic={session?.topic ?? '練習'}
              primaryColor={classData.primaryColor}
              onAnswer={handleAnswer}
            />
      )}
    </div>
  );
}
