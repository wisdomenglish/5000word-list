import { useState, useMemo, useRef, useEffect } from 'react';
import { VOCAB_DATA } from '../data/vocab-data';
import { generateExample, lookupDefinition } from '../api/claudeClient';
import { kkToIPA } from '../utils/phonetic';

const { vocab, phrases } = VOCAB_DATA;
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const EX_CACHE_PREFIX = 'hej_ex_';

function mainZh(zh) { return zh.split(/[；;]/)[0].trim(); }
function posDisplay(pos) { return Array.isArray(pos) ? pos.join('/') : pos; }

function speakWord(word) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(word);
  u.lang = 'en-US';
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

function highlightWord(sentence, word) {
  if (!sentence || !word) return sentence;
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return sentence.replace(
    new RegExp(`\\b(${escaped}\\w*)\\b`, 'gi'),
    '<strong style="color:#C9742A">$1</strong>'
  );
}

function WordCard({ item, isPhrase, isMastered, isCustom, primaryColor, onDelete }) {
  const [exOpen, setExOpen] = useState(false);
  const [exData, setExData] = useState(null);
  const [exState, setExState] = useState('idle'); // idle | loading | done | error

  const wordText = isPhrase ? item.phrase : item.word;
  const posText = !isPhrase && item.pos ? posDisplay(item.pos) : '';

  const loadExample = async () => {
    if (exOpen) { setExOpen(false); return; }
    setExOpen(true);
    if (exData) return;

    const cached = localStorage.getItem(EX_CACHE_PREFIX + wordText);
    if (cached) { setExData(JSON.parse(cached)); setExState('done'); return; }

    setExState('loading');
    try {
      const data = await generateExample(wordText, posText || (isPhrase ? 'phrase' : ''), item.zh);
      setExData(data);
      setExState('done');
    } catch {
      setExState('error');
    }
  };

  const retryExample = async () => {
    localStorage.removeItem(EX_CACHE_PREFIX + wordText);
    setExState('loading');
    setExData(null);
    try {
      const data = await generateExample(wordText, posText || (isPhrase ? 'phrase' : ''), item.zh);
      setExData(data);
      setExState('done');
    } catch {
      setExState('error');
    }
  };

  return (
    <div
      className="rounded-2xl p-4 mb-3"
      style={{
        background: 'var(--cozy-panel)',
        border: isMastered ? `1px solid ${primaryColor}40` : '1px solid rgba(140,100,55,0.1)',
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap mb-0.5">
            <span className="text-base font-bold text-ink">{wordText}</span>
            {!isPhrase && item.phonetic && (
              <span className="text-xs text-gray-400">{kkToIPA(item.phonetic)}</span>
            )}
            {!isPhrase && posText && (
              <span className="text-xs text-gray-500">· {posText}</span>
            )}
          </div>

          <div className="text-sm text-gray-300 mb-2">{mainZh(item.zh)}</div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: isPhrase ? '#8B5CF622' : '#3B82F622', color: isPhrase ? '#7C3AED' : '#2563EB' }}
            >
              {isPhrase ? '片語' : '單字'}
            </span>
            {!isPhrase && item.grade && (
              <span className="text-xs px-2 py-0.5 rounded-full text-gray-400" style={{ background: 'rgba(140,100,55,0.1)' }}>
                Grade {item.grade}
              </span>
            )}
            {isCustom && (
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: '#EC489922', color: '#F472B6' }}>
                自訂
              </span>
            )}
            {isMastered && (
              <span
                className="text-xs px-2 py-0.5 rounded-full font-semibold"
                style={{ background: `${primaryColor}22`, color: primaryColor }}
              >
                已掌握 ✓
              </span>
            )}
            <button
              onClick={loadExample}
              className="text-xs px-2 py-0.5 rounded-full transition-all"
              style={{
                background: exOpen ? `${primaryColor}22` : 'rgba(140,100,55,0.1)',
                color: exOpen ? primaryColor : 'var(--cozy-ink-faint)',
              }}
            >
              💬 例句
            </button>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          <button
            onClick={() => speakWord(wordText)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all active:scale-90"
            style={{ background: 'rgba(140,100,55,0.1)' }}
            aria-label="播放發音"
          >
            🔊
          </button>
          {isCustom && onDelete && (
            <button
              onClick={() => onDelete(wordText)}
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs transition-all active:scale-90"
              style={{ background: 'rgba(140,100,55,0.06)', color: 'var(--cozy-ink-faint)' }}
              aria-label="刪除"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {exOpen && (
        <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(140,100,55,0.1)' }}>
          {exState === 'loading' && (
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <div className="w-3 h-3 rounded-full border border-gray-400 border-t-transparent animate-spin" />
              Claude AI 生成例句中…
            </div>
          )}
          {(exState === 'done' || exState === 'idle') && exData && (
            <div>
              <div
                className="text-sm leading-relaxed"
                style={{ color: 'var(--cozy-ink)' }}
                dangerouslySetInnerHTML={{ __html: highlightWord(exData.sentence || '', wordText) }}
              />
              <div className="text-xs text-gray-500 mt-1">{exData.translation || ''}</div>
            </div>
          )}
          {exState === 'error' && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">例句生成失敗</span>
              <button onClick={retryExample} className="text-xs" style={{ color: '#2563EB' }}>🔄 重試</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function AddWordSheet({ visible, onClose, onSave, existingCustom }) {
  const [wordEn, setWordEn] = useState('');
  const [wordZh, setWordZh] = useState('');
  const [wordPos, setWordPos] = useState('');
  const [lookupStatus, setLookupStatus] = useState('');
  const [lookupColor, setLookupColor] = useState('');
  const [error, setError] = useState('');
  const timerRef = useRef(null);
  const ctrlRef = useRef(null);

  useEffect(() => {
    if (!visible) return;
    setWordEn(''); setWordZh(''); setWordPos('');
    setLookupStatus(''); setLookupColor(''); setError('');
    clearTimeout(timerRef.current);
    if (ctrlRef.current) { ctrlRef.current.abort(); ctrlRef.current = null; }
  }, [visible]);

  const handleWordEnChange = (val) => {
    setWordEn(val);
    setLookupStatus('');
    setLookupColor('');
    setError('');
    clearTimeout(timerRef.current);
    if (ctrlRef.current) { ctrlRef.current.abort(); ctrlRef.current = null; }

    const word = val.trim();
    if (!word || word.length < 2) return;

    const wordLower = word.toLowerCase();
    const matchLocal = vocab.find(w => w.word?.toLowerCase() === wordLower) ||
                       existingCustom.find(w => w.word?.toLowerCase() === wordLower);
    if (matchLocal) {
      setLookupStatus('✓ 已在字典中找到，已自動填入');
      setLookupColor('#6ecf88');
      setWordZh(prev => prev || matchLocal.zh || '');
      setWordPos(prev => prev || (matchLocal.pos ? posDisplay(matchLocal.pos) : ''));
      return;
    }

    timerRef.current = setTimeout(async () => {
      const ctrl = new AbortController();
      ctrlRef.current = ctrl;
      setLookupStatus('AI 查詢中…');
      setLookupColor('var(--cozy-ink-faint)');
      try {
        const data = await lookupDefinition(word, ctrl.signal);
        if (data.zh) {
          setWordZh(prev => prev || data.zh);
          setWordPos(prev => prev || data.pos || '');
          setLookupStatus('✨ AI 已自動填入，可自行修改');
          setLookupColor('#2563EB');
        } else {
          setLookupStatus('');
        }
      } catch (e) {
        if (e.name !== 'AbortError') setLookupStatus('');
      } finally {
        if (ctrlRef.current === ctrl) ctrlRef.current = null;
      }
    }, 650);
  };

  const handleSave = () => {
    const wordVal = wordEn.trim();
    const zhVal = wordZh.trim();
    const posVal = wordPos.trim();
    if (!wordVal || !zhVal) { setError('請填寫英文單字和中文解釋'); return; }
    const wordLower = wordVal.toLowerCase();
    if (vocab.some(w => w.word?.toLowerCase() === wordLower)) {
      setError('此單字已在字典中'); return;
    }
    if (existingCustom.some(w => w.word?.toLowerCase() === wordLower)) {
      setError('此單字已在自訂單字庫中'); return;
    }
    onSave({ word: wordVal, pos: posVal, zh: zhVal, custom: true });
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end"
      style={{ background: 'rgba(0,0,0,0.65)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full rounded-t-2xl p-5 pb-10"
        style={{ background: 'var(--cozy-panel)', borderTop: '1px solid var(--cozy-border)', maxWidth: '480px', margin: '0 auto' }}
      >
        <div className="w-10 h-1 rounded-full mx-auto mb-4" style={{ background: 'var(--cozy-border)' }} />

        <div className="flex items-center justify-between mb-1">
          <div className="font-bold text-ink text-base">＋ 新增單字</div>
          <button onClick={onClose} className="text-gray-500 text-xl leading-none">✕</button>
        </div>
        <div className="text-xs text-gray-500 mb-4">加入自訂單字庫，可搜尋、發音、生成 AI 例句</div>

        <div
          className="rounded-xl px-3 py-2.5 mb-1"
          style={{ background: 'rgba(140,100,55,0.1)', border: '1px solid var(--cozy-border)' }}
        >
          <input
            type="text"
            value={wordEn}
            onChange={e => handleWordEnChange(e.target.value)}
            placeholder="英文單字 *"
            className="w-full bg-transparent text-sm text-ink placeholder-gray-500 outline-none"
            autoComplete="off"
            autoCapitalize="none"
          />
        </div>
        {lookupStatus ? (
          <div className="text-xs mb-2 px-1 min-h-[16px]" style={{ color: lookupColor }}>{lookupStatus}</div>
        ) : (
          <div className="mb-2 min-h-[16px]" />
        )}

        <div className="flex gap-2 mb-3">
          <div
            className="rounded-xl px-3 py-2.5"
            style={{ background: 'rgba(140,100,55,0.1)', border: '1px solid var(--cozy-border)', width: '100px' }}
          >
            <input
              type="text"
              value={wordPos}
              onChange={e => setWordPos(e.target.value)}
              placeholder="詞性（選填）"
              className="w-full bg-transparent text-sm text-ink placeholder-gray-500 outline-none"
              autoComplete="off"
            />
          </div>
          <div
            className="rounded-xl px-3 py-2.5 flex-1"
            style={{ background: 'rgba(140,100,55,0.1)', border: '1px solid var(--cozy-border)' }}
          >
            <input
              type="text"
              value={wordZh}
              onChange={e => setWordZh(e.target.value)}
              placeholder="中文解釋 *"
              className="w-full bg-transparent text-sm text-ink placeholder-gray-500 outline-none"
              autoComplete="off"
            />
          </div>
        </div>

        {error && <div className="text-xs text-red-400 mb-3">{error}</div>}

        <button
          onClick={handleSave}
          className="w-full py-3.5 rounded-xl font-bold text-sm transition-all active:scale-95"
          style={{ background: 'linear-gradient(135deg, #4361EE, #7B9EFF)', color: '#fff' }}
        >
          儲存單字
        </button>
      </div>
    </div>
  );
}

const BASE_FILTERS = [
  { id: 'all',      label: '全部' },
  { id: 'vocab',    label: '單字' },
  { id: 'phrase',   label: '片語' },
  { id: 'mastered', label: '已掌握' },
];

export default function VocabBookTab({ mastery, classData, customWords = [], onAddCustomWord, onRemoveCustomWord }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [letter, setLetter] = useState(null);
  const [showAddSheet, setShowAddSheet] = useState(false);

  const allItems = useMemo(() => [
    ...vocab.map(w => ({ ...w, isPhrase: false, isCustom: false, key: w.word })),
    ...phrases.map(p => ({ ...p, isPhrase: true, isCustom: false, key: p.phrase })),
    ...customWords.map(w => ({ ...w, isPhrase: false, isCustom: true, key: w.word })),
  ], [customWords]);

  const filters = useMemo(() => {
    if (customWords.length > 0) return [...BASE_FILTERS, { id: 'custom', label: '自訂' }];
    return BASE_FILTERS;
  }, [customWords.length]);

  const filtered = useMemo(() => {
    let items = allItems;
    if (filter === 'vocab')    items = items.filter(i => !i.isPhrase);
    if (filter === 'phrase')   items = items.filter(i => i.isPhrase);
    if (filter === 'mastered') items = items.filter(i => mastery[i.key]);
    if (filter === 'custom')   items = items.filter(i => i.isCustom);

    if (letter) {
      items = items.filter(i => {
        const text = i.isPhrase ? i.phrase : i.word;
        return text[0]?.toUpperCase() === letter;
      });
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(i => {
        const text = i.isPhrase ? i.phrase : i.word;
        return text.toLowerCase().includes(q) || i.zh.includes(q);
      });
    }

    return items.slice(0, 120);
  }, [allItems, filter, letter, query, mastery]);

  const handleSaveWord = (wordObj) => {
    onAddCustomWord(wordObj);
    setShowAddSheet(false);
    setFilter('custom');
    setLetter(null);
    setQuery('');
  };

  return (
    <div className="pb-24">
      {/* Sticky header — top:48px accounts for GlobalTopBar */}
      <div className="pt-5 pb-3 px-4 sticky z-10" style={{ top: '48px', background: 'var(--cozy-bg-top)' }}>
        {/* Title + total count */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs text-gray-500 font-semibold tracking-widest uppercase">單字片語本</div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span>{vocab.length + customWords.length} 單字</span>
            <span className="opacity-40">·</span>
            <span>{phrases.length} 片語</span>
          </div>
        </div>

        {/* Search */}
        <div
          className="flex items-center gap-2 rounded-xl px-3 py-2.5 mb-3"
          style={{ background: 'var(--cozy-panel)', border: '1px solid rgba(140,100,55,0.12)' }}
        >
          <span className="text-gray-500 text-sm">🔍</span>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="搜尋單字或片語..."
            className="flex-1 bg-transparent text-sm text-ink placeholder-gray-500 outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-gray-500 text-xs">✕</button>
          )}
        </div>

        {/* A-Z bar */}
        <div
          className="flex gap-1 pb-2 mb-2"
          style={{ overflowX: 'auto', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          <button
            onClick={() => setLetter(null)}
            className="flex-shrink-0 text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all"
            style={{
              background: letter === null ? classData.primaryColor : 'rgba(140,100,55,0.1)',
              color: letter === null ? '#fff' : 'var(--cozy-ink-faint)',
            }}
          >
            全
          </button>
          {ALPHABET.map(l => (
            <button
              key={l}
              onClick={() => setLetter(letter === l ? null : l)}
              className="flex-shrink-0 text-xs rounded-lg font-medium transition-all"
              style={{
                width: '28px',
                height: '28px',
                background: letter === l ? classData.primaryColor : 'rgba(140,100,55,0.1)',
                color: letter === l ? '#fff' : 'var(--cozy-ink-faint)',
              }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full font-medium transition-all"
              style={{
                background: filter === f.id ? classData.primaryColor : 'rgba(140,100,55,0.1)',
                color: filter === f.id ? '#fff' : 'var(--cozy-ink-soft)',
              }}
            >
              {f.label}
              {f.id === 'mastered' && ` (${Object.keys(mastery).length})`}
              {f.id === 'custom' && ` (${customWords.length})`}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="px-4 pt-2">
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500 text-sm py-12">
            <div className="text-3xl mb-3">🔍</div>
            <div>沒有符合的結果</div>
            {filter === 'mastered' && (
              <div className="text-xs mt-2 text-gray-600">完成測驗後答對的單字會標記為已掌握</div>
            )}
            {filter === 'custom' && customWords.length === 0 && (
              <div className="text-xs mt-2 text-gray-600">點右下角 ＋ 新增自訂單字</div>
            )}
          </div>
        ) : (
          <>
            <div className="text-xs text-gray-500 mb-3">顯示 {filtered.length} 筆</div>
            {filtered.map(item => (
              <WordCard
                key={item.key}
                item={item}
                isPhrase={item.isPhrase}
                isMastered={!!mastery[item.key]}
                isCustom={item.isCustom}
                primaryColor={classData.primaryColor}
                onDelete={item.isCustom ? (word) => onRemoveCustomWord(word) : null}
              />
            ))}
            {filtered.length >= 120 && (
              <p className="text-center text-xs text-gray-500 py-4">搜尋關鍵字以縮小範圍</p>
            )}
          </>
        )}
      </div>

      {/* FAB */}
      <button
        onClick={() => setShowAddSheet(true)}
        className="fixed z-40 flex items-center justify-center text-2xl font-light rounded-full transition-all active:scale-90"
        style={{
          bottom: '80px',
          right: '16px',
          width: '52px',
          height: '52px',
          background: `linear-gradient(135deg, ${classData.gradientFrom}, ${classData.gradientTo})`,
          boxShadow: `0 4px 20px ${classData.glowColor}`,
          color: '#fff',
        }}
      >
        ＋
      </button>

      <AddWordSheet
        visible={showAddSheet}
        onClose={() => setShowAddSheet(false)}
        onSave={handleSaveWord}
        existingCustom={customWords}
      />
    </div>
  );
}
