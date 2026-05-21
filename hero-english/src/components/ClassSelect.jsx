import { useState } from 'react';
import { CLASSES } from '../data/classes';

const STAT_LABELS = { strength: '力量', magic: '魔法', agility: '敏捷', endurance: '耐力' };

function StatBar({ label, value }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-gray-400 w-8 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${value * 20}%`, background: 'currentColor' }}
        />
      </div>
      <span className="text-gray-300 w-3 text-right">{value}</span>
    </div>
  );
}

function ClassCard({ cls, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-2xl p-5 text-left transition-all duration-200 border-2 cursor-pointer
        ${selected
          ? 'border-white scale-[1.03] shadow-2xl'
          : 'border-white/10 hover:border-white/30 hover:scale-[1.01]'}
      `}
      style={{
        background: selected
          ? `linear-gradient(135deg, ${cls.gradientFrom}, ${cls.gradientTo})`
          : 'rgba(255,255,255,0.04)',
        boxShadow: selected ? `0 0 30px ${cls.glowColor}` : undefined,
      }}
    >
      {selected && (
        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white flex items-center justify-center">
          <span className="text-xs">✓</span>
        </div>
      )}

      <div className="text-4xl mb-3">{cls.emoji}</div>
      <div className="font-display text-lg font-bold text-white mb-0.5">{cls.name}</div>
      <div className="text-xs text-gray-300 mb-3">{cls.nameEn}</div>
      <p className="text-xs text-gray-200 mb-4 leading-relaxed">{cls.description}</p>

      <div
        className="text-xs font-semibold px-2 py-1 rounded-full inline-block mb-4"
        style={{ background: `${cls.primaryColor}33`, color: cls.primaryColor }}
      >
        ⚡ {cls.bonus}
      </div>

      <div className="space-y-1.5" style={{ color: cls.primaryColor }}>
        {Object.entries(cls.stats).map(([key, val]) => (
          <StatBar key={key} label={STAT_LABELS[key]} value={val} />
        ))}
      </div>
    </button>
  );
}

export default function ClassSelect({ onConfirm }) {
  const [selectedClass, setSelectedClass] = useState(null);
  const [name, setName] = useState('');

  const cls = selectedClass ? CLASSES[selectedClass] : null;

  return (
    <div className="min-h-screen bg-bg text-white flex flex-col">
      {/* Header */}
      <div className="text-center pt-10 pb-6 px-4">
        <div className="font-display text-2xl font-bold text-white mb-1">Hero's English Journey</div>
        <p className="text-gray-400 text-sm">選擇你的英雄職業，展開學習冒險！</p>
      </div>

      {/* Class grid */}
      <div className="flex-1 px-4 pb-4">
        <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
          {Object.values(CLASSES).map(c => (
            <ClassCard
              key={c.id}
              cls={c}
              selected={selectedClass === c.id}
              onClick={() => setSelectedClass(c.id)}
            />
          ))}
        </div>
      </div>

      {/* Name + confirm */}
      <div
        className="sticky bottom-0 px-4 py-5 border-t border-white/10"
        style={{ background: 'rgba(13,13,26,0.95)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-lg mx-auto space-y-3">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="輸入你的英雄名稱（可跳過）"
            maxLength={20}
            className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-white/40 transition-colors"
          />
          <button
            onClick={() => selectedClass && onConfirm(selectedClass, name)}
            disabled={!selectedClass}
            className="w-full py-4 rounded-xl font-display font-bold text-base transition-all duration-200
              disabled:opacity-30 disabled:cursor-not-allowed"
            style={cls ? {
              background: `linear-gradient(135deg, ${cls.gradientFrom}, ${cls.gradientTo})`,
              boxShadow: cls ? `0 4px 20px ${cls.glowColor}` : undefined,
            } : { background: '#333' }}
          >
            {selectedClass
              ? `⚔️ 以${cls.name}身份出發！`
              : '請先選擇職業'}
          </button>
        </div>
      </div>
    </div>
  );
}
