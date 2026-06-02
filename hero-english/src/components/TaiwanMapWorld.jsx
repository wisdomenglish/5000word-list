import { useRef, useEffect } from 'react';
import PixelCharacter from './PixelCharacter';

const ROW_H   = 90;
const PAD_TOP = 70;
const NODE_R  = 26;
const X_PCT   = [18, 50, 82];

const TOTAL_ROWS = 10;
const MAP_H = PAD_TOP + TOTAL_ROWS * ROW_H + 60;  // ~1000px

function getNodePos(idx) {
  const row = Math.floor(idx / 3);
  const col = idx % 3;
  const ltr = row % 2 === 0;
  const xArr = ltr ? X_PCT : [X_PCT[2], X_PCT[1], X_PCT[0]];
  return { xPct: xArr[col], y: PAD_TOP + row * ROW_H };
}

const positions = Array.from({ length: 30 }, (_, i) => getNodePos(i));

// Floating decorative bubbles
const BUBBLES = [
  { x: 7,  y: 80,  r: 13, c: '#D4B8FF', o: 0.55 },
  { x: 80, y: 55,  r: 20, c: '#FFD866', o: 0.65 },
  { x: 88, y: 180, r: 9,  c: '#B8D4FF', o: 0.4  },
  { x: 6,  y: 260, r: 10, c: '#FFC8E0', o: 0.4  },
  { x: 84, y: 360, r: 13, c: '#B8FFD4', o: 0.38 },
  { x: 8,  y: 450, r: 8,  c: '#FFE0B8', o: 0.38 },
  { x: 87, y: 530, r: 11, c: '#D4B8FF', o: 0.35 },
  { x: 7,  y: 640, r: 14, c: '#B8EEFF', o: 0.4  },
  { x: 82, y: 700, r: 8,  c: '#FFD866', o: 0.35 },
  { x: 45, y: 780, r: 7,  c: '#FFB8C8', o: 0.3  },
  { x: 15, y: 860, r: 10, c: '#C8FFB8', o: 0.32 },
  { x: 80, y: 900, r: 9,  c: '#B8D4FF', o: 0.32 },
];

// Chapter banners every 10 days
const CHAPTERS = [
  { startIdx: 0,  title: 'Chapter 1', sub: '單字冒險的起點' },
  { startIdx: 10, title: 'Chapter 2', sub: '中級挑戰開始！' },
  { startIdx: 20, title: 'Chapter 3', sub: '高手的最終試煉' },
];

export default function TaiwanMapWorld({ classData, level = 1, checkinDays }) {
  const now = new Date();
  const today = now.getDate();
  const currentDay = Math.min(Math.max(today, 1), 30);
  const currentIdx = currentDay - 1;
  const containerRef = useRef(null);

  const monthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  const doneDays = new Set(checkinDays?.[monthKey] ?? []);
  const checkinCount = doneDays.size;
  const pct = currentDay > 0 ? Math.round((checkinCount / currentDay) * 100) : 0;

  useEffect(() => {
    if (!containerRef.current) return;
    const pos = positions[currentIdx];
    containerRef.current.scrollTop = Math.max(0, pos.y - containerRef.current.clientHeight * 0.4);
  }, []);

  // SVG polyline coords (viewBox 0 0 340 MAP_H, xPct*3.4 = pixel x)
  const allPts  = positions.map(p => `${p.xPct * 3.4},${p.y}`).join(' ');
  const donePts = positions.slice(0, currentIdx + 1).map(p => `${p.xPct * 3.4},${p.y}`).join(' ');

  // Which chapter is the current day in?
  const curChapter = CHAPTERS.slice().reverse().find(c => currentIdx >= c.startIdx);

  return (
    <div className="mx-4 mt-3 rounded-2xl overflow-hidden"
      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.1)' }}>

      {/* ── Top info bar ── */}
      <div style={{
        background: 'linear-gradient(135deg, #2D5016 0%, #1E3B0E 100%)',
        padding: '10px 16px',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ color: '#F0FFF4', fontWeight: 800, fontSize: '0.75rem' }}>
            {curChapter?.title} · {curChapter?.sub}
          </div>
          <div style={{
            marginTop: 5, height: 5, borderRadius: 3,
            background: 'rgba(255,255,255,0.15)', overflow: 'hidden',
          }}>
            <div style={{
              height: '100%', borderRadius: 3, width: `${pct}%`,
              background: 'linear-gradient(90deg,#A3E635,#65A30D)',
              transition: 'width 0.8s ease',
            }}/>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.55rem', marginTop: 3 }}>
            已簽到 {checkinCount} / {currentDay} 天 · {pct}% 出勤率
          </div>
        </div>
        <div style={{
          background: `${classData.primaryColor}25`,
          border: `1px solid ${classData.primaryColor}60`,
          borderRadius: 20, padding: '4px 12px',
          color: classData.primaryColor,
          fontSize: '0.68rem', fontWeight: 800,
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          <span style={{ fontSize: '1rem' }}>{classData.emoji}</span>
          <span>{classData.name} Lv.{level}</span>
        </div>
      </div>

      {/* ── Scrollable map ── */}
      <div ref={containerRef} style={{ overflowY: 'auto', maxHeight: 390 }}>
        <div style={{
          position: 'relative', width: '100%', height: MAP_H,
          background: 'linear-gradient(180deg, #A8D48A 0%, #8EC870 40%, #7BBD5C 100%)',
        }}>

          {/* Subtle light rays from top */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 80% 30% at 50% 0%, rgba(255,255,255,0.18) 0%, transparent 70%)',
          }}/>

          {/* Floating bubbles */}
          {BUBBLES.map((b, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: `${b.x}%`, top: b.y,
              width: b.r * 2, height: b.r * 2,
              borderRadius: '50%',
              background: b.c,
              opacity: b.o,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              animation: `bubbleFloat ${2.5 + (i % 4) * 0.5}s ease-in-out ${i * 0.3}s infinite`,
              boxShadow: `inset -${b.r*0.3}px -${b.r*0.3}px ${b.r*0.5}px rgba(255,255,255,0.5)`,
            }}/>
          ))}

          {/* Chapter separator banners */}
          {CHAPTERS.map((ch, i) => {
            if (i === 0) return null; // skip first (shown in header)
            const pos = positions[ch.startIdx];
            return (
              <div key={i} style={{
                position: 'absolute',
                top: pos.y - ROW_H * 0.7,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 6,
                background: 'rgba(255,255,255,0.92)',
                borderRadius: 12,
                padding: '5px 18px',
                boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
                textAlign: 'center',
                whiteSpace: 'nowrap',
              }}>
                <div style={{ color: '#166534', fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.08em' }}>
                  {ch.title}
                </div>
                <div style={{ color: '#4B5563', fontSize: '0.52rem' }}>{ch.sub}</div>
              </div>
            );
          })}

          {/* FINISH marker */}
          <div style={{
            position: 'absolute', top: 14, left: '50%',
            transform: 'translateX(-50%)', zIndex: 8,
            background: 'linear-gradient(135deg,#F59E0B,#D97706)',
            borderRadius: 12, padding: '5px 20px',
            color: '#fff', fontWeight: 900, fontSize: '0.7rem',
            letterSpacing: '0.12em', whiteSpace: 'nowrap',
            boxShadow: '0 4px 16px rgba(245,158,11,0.5)',
          }}>🏆 FINISH</div>

          {/* SVG: path road */}
          <svg
            style={{ position:'absolute', inset:0, width:'100%', height:'100%', overflow:'visible', zIndex:3 }}
            viewBox={`0 0 340 ${MAP_H}`}
            preserveAspectRatio="none"
          >
            {/* Thick cream road — completed segment */}
            {currentIdx > 0 && (
              <polyline points={donePts}
                fill="none"
                stroke="#E8D9A0"
                strokeWidth="34"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
            {/* Thick cream road — future segment */}
            <polyline points={allPts}
              fill="none"
              stroke="#D4C88A"
              strokeWidth="34"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.55"
            />
            {/* Dashed centre line — completed */}
            {currentIdx > 0 && (
              <polyline points={donePts}
                fill="none"
                stroke="rgba(255,255,255,0.65)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="9 7"
              />
            )}
            {/* Dashed centre line — future */}
            <polyline points={allPts}
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="9 7"
            />
          </svg>

          {/* Nodes */}
          {positions.map((pos, i) => {
            const dayNum = i + 1;
            const checkedIn = doneDays.has(dayNum);
            const cur    = i === currentIdx;
            const done   = checkedIn && !cur;
            const locked = !checkedIn && !cur;
            const size   = cur ? NODE_R * 2 + 10 : NODE_R * 2;

            return (
              <div key={i} style={{
                position: 'absolute',
                left: `${pos.xPct}%`, top: pos.y,
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: cur ? 12 : 7,
              }}>
                {/* Pixel character */}
                {cur && (
                  <div style={{
                    position: 'absolute',
                    bottom: size / 2 + 6,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 20,
                    filter: `drop-shadow(0 0 8px ${classData.primaryColor}80) drop-shadow(0 4px 6px rgba(0,0,0,0.5))`,
                  }}>
                    <PixelCharacter classId={classData.id} level={level} scale={4} animate />
                  </div>
                )}

                {/* Pulse ring */}
                {cur && (
                  <div style={{
                    position: 'absolute',
                    width: size + 18, height: size + 18,
                    borderRadius: '50%',
                    border: '3px solid rgba(255,165,0,0.6)',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%,-50%)',
                    animation: 'ringPulse 1.6s ease-out infinite',
                    zIndex: 6,
                  }}/>
                )}

                {/* Node circle */}
                <div style={{
                  width: size, height: size,
                  borderRadius: '50%',
                  background: done
                    ? 'linear-gradient(145deg, #22C55E, #16A34A)'
                    : cur
                    ? (checkedIn
                      ? 'linear-gradient(145deg, #22C55E, #16A34A)'
                      : 'linear-gradient(145deg, #FF6B00, #E05500)')
                    : i < currentIdx
                    ? 'linear-gradient(145deg, #9CA3AF, #6B7280)'
                    : 'linear-gradient(145deg, #C8B880, #B0A068)',
                  border: done || cur
                    ? '3px solid rgba(255,255,255,0.5)'
                    : '3px solid rgba(180,160,80,0.4)',
                  boxShadow: cur
                    ? (checkedIn
                      ? '0 6px 20px rgba(34,197,94,0.5), 0 2px 6px rgba(0,0,0,0.25), inset 0 2px 4px rgba(255,255,255,0.3)'
                      : '0 6px 20px rgba(255,100,0,0.5), 0 2px 6px rgba(0,0,0,0.25), inset 0 2px 4px rgba(255,255,255,0.3)')
                    : done
                    ? '0 4px 12px rgba(34,197,94,0.35), inset 0 2px 3px rgba(255,255,255,0.25)'
                    : '0 3px 8px rgba(0,0,0,0.15), inset 0 2px 3px rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: cur ? 20 : 16,
                  opacity: i > currentIdx ? 0.65 : 1,
                  position: 'relative', zIndex: 8,
                  transition: 'all 0.2s',
                }}>
                  {done || (cur && checkedIn)
                    ? <span style={{ color:'#fff', fontWeight:900, fontSize:'0.75rem' }}>✓</span>
                    : i > currentIdx
                    ? <span style={{ fontSize:13, opacity:0.8 }}>🔒</span>
                    : cur
                    ? <span style={{ color:'#fff', fontWeight:900, fontSize:'0.9rem' }}>{dayNum}</span>
                    : <span style={{ color:'rgba(255,255,255,0.5)', fontWeight:700, fontSize:'0.65rem' }}>{dayNum}</span>
                  }
                </div>

                {/* "今日站點" speech bubble for current */}
                {cur && (
                  <div style={{
                    position: 'absolute',
                    top: -(size / 2 + 78),
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#fff',
                    borderRadius: 20,
                    padding: '5px 14px',
                    color: '#1A3A00',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
                    zIndex: 22,
                  }}>
                    今日站點！
                    <div style={{
                      position: 'absolute', bottom: -6, left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0, height: 0,
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '7px solid #fff',
                    }}/>
                  </div>
                )}

                {/* Label */}
                <div style={{
                  marginTop: 4,
                  color: cur ? '#1A3A00' : done ? '#2D4D10' : 'rgba(30,60,10,0.35)',
                  fontWeight: cur ? 700 : done ? 600 : 400,
                  fontSize: cur ? '0.6rem' : '0.52rem',
                  whiteSpace: 'nowrap',
                  textShadow: '0 1px 2px rgba(255,255,255,0.5)',
                }}>
                  Day {dayNum}
                </div>
              </div>
            );
          })}

        </div>
      </div>

      <style>{`
        @keyframes ringPulse {
          0%   { transform:translate(-50%,-50%) scale(1);   opacity:0.7; }
          100% { transform:translate(-50%,-50%) scale(1.6); opacity:0; }
        }
        @keyframes bubbleFloat {
          0%,100% { transform:translate(-50%,-50%) translateY(0); }
          50%      { transform:translate(-50%,-50%) translateY(-6px); }
        }
        @keyframes pixelFloat {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-5px); }
        }
      `}</style>
    </div>
  );
}
