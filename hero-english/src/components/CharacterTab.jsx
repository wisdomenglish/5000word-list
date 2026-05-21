import { BookOpen, Headphones, Mic, PenLine } from 'lucide-react';
import { MOOD_CONFIG } from '../data/classes';
import TaiwanMapWorld from './TaiwanMapWorld';
import LeaderboardSection from './LeaderboardSection';


const STAMINA_LEVELS = [
  { min: 80, label: '元氣滿滿', icon: '💪', color: '#22C55E' },
  { min: 50, label: '稍微疲憊', icon: '😐', color: '#F59E0B' },
  { min: 20, label: '飢餓中！', icon: '🍖', color: '#F97316' },
  { min:  0, label: '危急狀態', icon: '💀', color: '#EF4444' },
];

function StaminaBar({ happiness, lastStudied }) {
  const daysSince = lastStudied
    ? Math.floor((Date.now() - new Date(lastStudied).getTime()) / 86400000)
    : 0;
  const lv = STAMINA_LEVELS.find(l => happiness >= l.min) ?? STAMINA_LEVELS[3];
  const isCritical = happiness < 20;
  const isHungry   = happiness < 50;

  return (
    <div className="mx-4 mt-3 rounded-2xl p-4" style={{ background: '#1A1B2E' }}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold tracking-wide">
          <span>體力值</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: lv.color }}>
          <span>{lv.icon}</span>
          <span>{lv.label}</span>
          {daysSince >= 1 && (
            <span className="text-gray-500 font-normal ml-1">· {daysSince}天未練習</span>
          )}
        </div>
      </div>

      {/* Bar */}
      <div className="relative h-3.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${happiness}%`,
            background: `linear-gradient(90deg, ${lv.color}66, ${lv.color})`,
            boxShadow: isHungry ? `0 0 8px ${lv.color}70` : undefined,
            animation: isCritical ? 'staminaPulse 1.4s ease-in-out infinite' : undefined,
          }}
        />
        {[25, 50, 75].map(p => (
          <div key={p} className="absolute top-0 h-full w-px bg-black/30" style={{ left: `${p}%` }} />
        ))}
      </div>

      {isHungry && (
        <p className="text-xs mt-2 text-center" style={{ color: lv.color }}>
          {isCritical
            ? '⚠️ 英雄體力耗盡！快去答題救牠！'
            : '🍖 英雄餓了！答題可以恢復體力！'}
        </p>
      )}
      <style>{`@keyframes staminaPulse{0%,100%{opacity:1}50%{opacity:0.45}}`}</style>
    </div>
  );
}

const ABILITY_CONFIG = [
  { key: 'reading',   label: '閱讀力', color: '#3B82F6', Icon: BookOpen },
  { key: 'listening', label: '聽力',   color: '#F59E0B', Icon: Headphones },
  { key: 'speaking',  label: '口說',   color: '#A855F7', Icon: Mic },
  { key: 'writing',   label: '寫作',   color: '#22C55E', Icon: PenLine },
];

const CEFR_COLOR = { A1:'#6B7280', A2:'#10B981', B1:'#3B82F6', B2:'#8B5CF6', C1:'#F59E0B', C2:'#EF4444' };

const CLASS_SUBTITLE = {
  swordsman: 'Vocabulary Warrior',
  mage: 'Vocabulary Mage',
  beastTamer: 'Phrase Tamer',
  fighter: 'Grammar Fighter',
};

const UNLOCKS = [
  { level: 2,  label: '初學徽章',   icon: '🎖️', desc: '完成第一次任務' },
  { level: 5,  label: '單字劍',     icon: '⚔️',  desc: '掌握 20 個單字' },
  { level: 10, label: '智慧法袍',   icon: '🪄',  desc: '累積 500 XP' },
  { level: 14, label: '龍紋法袍',   icon: '🐉',  desc: '連打挑戰勝利者', isNew: true },
  { level: 20, label: '語言大師',   icon: '👑',  desc: '達到 B1 等級' },
];

function AbilityBar({ label, Icon, value, color }) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={16} color={color} aria-hidden="true" className="shrink-0" />
      <span className="text-sm text-gray-300 w-12 shrink-0">{label}</span>
      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${value}%`, background: color, boxShadow: `0 0 6px ${color}60` }}
        />
      </div>
      <span className="text-sm font-bold text-white w-8 text-right">{value}</span>
    </div>
  );
}

export default function CharacterTab({ hero, classData, xpProgress, mood, happiness, abilities, cefr, stats, masteredCount, uid, onEditProfile, accuracy, checkinDays }) {
  const subtitle = CLASS_SUBTITLE[classData.id] ?? classData.nameEn;
  const unlockedItems = UNLOCKS.filter(u => xpProgress.level >= u.level);
  const latestUnlock = unlockedItems[unlockedItems.length - 1];

  return (
    <div className="pb-24 overflow-y-auto">
      {/* Header */}
      <div className="px-5 pt-5 pb-1 text-center text-xs text-gray-500 font-semibold tracking-widest uppercase">
        大廳
      </div>

      {/* Walking hero world */}
      <TaiwanMapWorld
        classData={classData}
        level={xpProgress.level}
        checkinDays={checkinDays}
      />

      {/* Name + Level + XP */}
      <div className="mx-4 mt-3 rounded-2xl p-5" style={{ background: '#1A1B2E' }}>
        <div className="text-center mb-4">
          <div className="font-display text-lg font-bold text-white">
            {hero.name} · Lv.{xpProgress.level}
          </div>
          <div className="text-sm text-gray-400">{subtitle}</div>
        </div>

        {/* XP bar */}
        <div className="mb-1 flex justify-between text-xs text-gray-400">
          <span>{xpProgress.xpIntoLevel} / {xpProgress.xpNeeded} XP</span>
          <span>下一級</span>
        </div>
        <div className="h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${xpProgress.percent}%`,
              background: `linear-gradient(90deg, ${classData.gradientFrom}, ${classData.primaryColor})`,
            }}
          />
        </div>

        {/* Stat badges */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="rounded-xl py-2.5 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="text-base font-bold" style={{ color: CEFR_COLOR[cefr] ?? '#fff' }}>{cefr}</div>
            <div className="text-xs text-gray-500 mt-0.5">等級</div>
          </div>
          <div className="rounded-xl py-2.5 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="text-base font-bold text-white">{masteredCount}</div>
            <div className="text-xs text-gray-500 mt-0.5">已掌握</div>
          </div>
          <div className="rounded-xl py-2.5 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="text-base font-bold text-orange-400">{hero.streak}</div>
            <div className="text-xs text-gray-500 mt-0.5">天連續</div>
          </div>
        </div>
      </div>

      {/* Stamina bar */}
      <StaminaBar happiness={happiness} lastStudied={hero.lastStudied} />

      {/* Ability bars */}
      <div className="mx-4 mt-3 rounded-2xl p-5" style={{ background: '#1A1B2E' }}>
        <div className="text-xs font-semibold text-gray-400 mb-4 tracking-wide">能力值</div>
        <div className="space-y-4">
          {ABILITY_CONFIG.map(({ key, label, color, Icon }) => (
            <AbilityBar key={key} label={label} color={color} Icon={Icon} value={abilities[key]} />
          ))}
        </div>
      </div>

      {/* Latest unlock */}
      {latestUnlock && (
        <div className="mx-4 mt-3 rounded-2xl p-5" style={{ background: '#1A1B2E' }}>
          <div className="text-xs font-semibold text-gray-400 mb-3 tracking-wide">最近解鎖</div>
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: `${classData.primaryColor}20`, border: `1px solid ${classData.primaryColor}40` }}
            >
              {latestUnlock.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">{latestUnlock.label}</span>
                {latestUnlock.isNew && (
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold"
                    style={{ background: classData.primaryColor, color: '#fff' }}>新</span>
                )}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">{latestUnlock.desc}</div>
            </div>
          </div>
        </div>
      )}

      {/* All unlocks */}
      {unlockedItems.length > 1 && (
        <div className="mx-4 mt-3 rounded-2xl p-5" style={{ background: '#1A1B2E' }}>
          <div className="text-xs font-semibold text-gray-400 mb-3 tracking-wide">成就收藏</div>
          <div className="grid grid-cols-4 gap-2">
            {unlockedItems.map(u => (
              <div key={u.level} className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(255,255,255,0.06)' }}>
                  {u.icon}
                </div>
                <span className="text-xs text-gray-400 text-center leading-tight">{u.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Leaderboard */}
      <LeaderboardSection
        uid={uid}
        primaryColor={classData.primaryColor}
        onEditProfile={onEditProfile}
      />
    </div>
  );
}
