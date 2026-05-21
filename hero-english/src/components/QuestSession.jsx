import { useState, useEffect } from 'react';
import { buildQuestSession } from '../api/claudeClient';
import { calcXPReward } from '../utils/xp';

function QuestionCard({ question, onAnswer, questionNum, total, primaryColor }) {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const handleChoice = (choice) => {
    if (revealed) return;
    setSelected(choice);
    setRevealed(true);
    setTimeout(() => onAnswer(choice === question.answer), 900);
  };

  const isPromptSentence = question.type === 'fill_blank';

  return (
    <div className="flex flex-col h-full">
      {/* Progress */}
      <div className="px-5 pt-5">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>第 {questionNum} 題 / 共 {total} 題</span>
          <span className="capitalize" style={{ color: primaryColor }}>
            {question.type === 'vocabulary_meaning' && '單字意思'}
            {question.type === 'vocabulary_word' && '英文單字'}
            {question.type === 'phrase_meaning' && '片語意思'}
            {question.type === 'fill_blank' && '填空題'}
          </span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${(questionNum / total) * 100}%`, background: primaryColor }}
          />
        </div>
      </div>

      {/* Question prompt */}
      <div className="px-5 py-6 flex-1">
        <p className="text-xs text-gray-400 mb-3">{question.promptLabel}</p>

        <div
          className="rounded-2xl p-5 mb-4"
          style={{ background: `${primaryColor}15`, border: `1px solid ${primaryColor}30` }}
        >
          <div
            className={`font-bold text-white mb-1 ${isPromptSentence ? 'text-base leading-relaxed' : 'text-3xl'}`}
            style={!isPromptSentence ? { textShadow: `0 0 20px ${primaryColor}80` } : undefined}
          >
            {isPromptSentence
              ? question.prompt.replace('_____', '______')
              : question.prompt}
          </div>
          {question.subtext && (
            <div className="text-xs text-gray-400 mt-1">{question.subtext}</div>
          )}
        </div>

        {/* Choices */}
        <div className="space-y-2.5">
          {question.choices.map((choice, idx) => {
            let state = 'default';
            if (revealed) {
              if (choice === question.answer) state = 'correct';
              else if (choice === selected) state = 'wrong';
            }
            return (
              <button
                key={idx}
                onClick={() => handleChoice(choice)}
                disabled={revealed}
                className="w-full text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200"
                style={{
                  background: state === 'correct' ? '#16A34A22'
                    : state === 'wrong' ? '#DC262622'
                    : 'rgba(255,255,255,0.06)',
                  borderColor: state === 'correct' ? '#22C55E'
                    : state === 'wrong' ? '#EF4444'
                    : 'rgba(255,255,255,0.12)',
                  color: state === 'correct' ? '#86EFAC'
                    : state === 'wrong' ? '#FCA5A5'
                    : '#E8E8F0',
                }}
              >
                <span className="mr-2">
                  {revealed
                    ? choice === question.answer ? '✓' : choice === selected ? '✗' : ' '
                    : String.fromCharCode(65 + idx)}
                </span>
                {choice}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ResultScreen({ results, totalXP, onDone, classData }) {
  const correct = results.filter(r => r.correct).length;
  const pct = Math.round((correct / results.length) * 100);

  const grade = pct === 100 ? '完美！🏆' : pct >= 80 ? '太棒了！⭐' : pct >= 60 ? '繼續加油！👊' : '再接再厲！💪';

  return (
    <div className="min-h-screen bg-bg text-white flex flex-col items-center justify-center px-5 py-10">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{classData.emoji}</div>
          <div className="font-display text-2xl font-bold text-white mb-1">{grade}</div>
          <div className="text-gray-400 text-sm">任務完成</div>
        </div>

        <div
          className="rounded-2xl p-5 mb-6"
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

        {/* Per-question summary */}
        <div className="space-y-2 mb-8">
          {results.map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm"
              style={{ background: r.correct ? '#16A34A15' : '#DC262615' }}
            >
              <span>{r.correct ? '✓' : '✗'}</span>
              <span className="flex-1 text-gray-300 truncate">{r.prompt}</span>
              {!r.correct && <span className="text-xs text-green-400">{r.answer}</span>}
            </div>
          ))}
        </div>

        <button
          onClick={onDone}
          className="w-full py-4 rounded-2xl font-display font-bold text-lg transition-all duration-200 active:scale-95"
          style={{
            background: `linear-gradient(135deg, ${classData.gradientFrom}, ${classData.gradientTo})`,
            boxShadow: `0 6px 24px ${classData.glowColor}`,
          }}
        >
          回到大廳
        </button>
      </div>
    </div>
  );
}

export default function QuestSession({ hero, classData, onComplete, onExit, questionCount = 5 }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [results, setResults] = useState([]);
  const [sessionXP, setSessionXP] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    buildQuestSession({ count: questionCount, classId: hero.classId })
      .then(qs => { setQuestions(qs); setLoading(false); });
  }, [hero.classId]);

  const handleAnswer = (correct) => {
    const q = questions[currentIdx];
    const xp = calcXPReward({
      correct,
      difficulty: q.xpDifficulty,
      classId: hero.classId,
      bonusKey: classData.bonusKey,
      bonusMultiplier: classData.bonusMultiplier,
      streak: hero.streak,
    });
    const newResult = { prompt: q.prompt, answer: q.answer, correct, xp };
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
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-bounce">{classData.emoji}</div>
          <p className="text-gray-400 text-sm">準備題目中...</p>
        </div>
      </div>
    );
  }

  if (done) {
    return (
      <ResultScreen
        results={results}
        totalXP={sessionXP}
        onDone={onExit}
        classData={classData}
      />
    );
  }

  return (
    <div className="min-h-screen bg-bg text-white flex flex-col">
      {/* Exit button */}
      <div className="flex items-center px-5 pt-4 pb-2">
        <button
          onClick={onExit}
          className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition-colors"
        >
          ← 離開
        </button>
        <div className="ml-auto text-xs text-gray-500">
          XP +{sessionXP}
        </div>
      </div>

      {questions.length > 0 && (
        <QuestionCard
          key={currentIdx}
          question={questions[currentIdx]}
          onAnswer={handleAnswer}
          questionNum={currentIdx + 1}
          total={questions.length}
          primaryColor={classData.primaryColor}
        />
      )}
    </div>
  );
}
