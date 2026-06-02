// Pure Web Audio API — no sound files needed
// All functions are fire-and-forget; safe to call if AudioContext fails.

function ctx() {
  try { return new (window.AudioContext || window.webkitAudioContext)(); } catch { return null; }
}

function tone(ac, freq, start, dur, vol = 0.25, type = 'triangle') {
  const osc  = ac.createOscillator();
  const gain = ac.createGain();
  osc.connect(gain);
  gain.connect(ac.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  gain.gain.setValueAtTime(vol, start);
  gain.gain.exponentialRampToValueAtTime(0.001, start + dur);
  osc.start(start);
  osc.stop(start + dur + 0.01);
}

// ── Public API ──

/** Short ascending arpeggio for regular level-up */
export function playLevelUp() {
  const ac = ctx(); if (!ac) return;
  const t = ac.currentTime;
  [523, 659, 784, 1047].forEach((f, i) => tone(ac, f, t + i * 0.09, 0.22));
}

/** Epic 3-chord fanfare for tier milestone (Lv.10/20/30) */
export function playTierEvolution() {
  const ac = ctx(); if (!ac) return;
  const t = ac.currentTime;
  // Chord 1
  [392, 494, 587].forEach(f => tone(ac, f, t,        0.18, 0.2));
  // Chord 2
  [440, 554, 659].forEach(f => tone(ac, f, t + 0.22, 0.18, 0.2));
  // Chord 3 — high triumphant
  [523, 659, 784, 1047].forEach((f, i) => tone(ac, f, t + 0.44 + i * 0.06, 0.35, 0.22));
}

/** Sparkle ding sequence for achievement unlock */
export function playAchievement() {
  const ac = ctx(); if (!ac) return;
  const t = ac.currentTime;
  [784, 988, 1175, 1568].forEach((f, i) => tone(ac, f, t + i * 0.07, 0.15, 0.18, 'sine'));
}

/** Drum-roll style suspense for unboxing anticipation */
export function playDrumRoll(durationMs = 2000) {
  const ac = ctx(); if (!ac) return;
  const t  = ac.currentTime;
  const count = Math.floor(durationMs / 80);
  for (let i = 0; i < count; i++) {
    const vol = 0.04 + (i / count) * 0.18;
    tone(ac, 150 + i * 0.5, t + i * 0.08, 0.05, vol, 'square');
  }
}

/** Big bang reveal sound */
export function playReveal() {
  const ac = ctx(); if (!ac) return;
  const t = ac.currentTime;
  // Noise burst
  tone(ac, 220, t,       0.08, 0.35, 'sawtooth');
  tone(ac, 330, t,       0.08, 0.30, 'sawtooth');
  // Rising sweep
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.connect(gain); gain.connect(ac.destination);
  osc.type = 'sine';
  osc.frequency.setValueAtTime(200, t);
  osc.frequency.exponentialRampToValueAtTime(1200, t + 0.4);
  gain.gain.setValueAtTime(0.3, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
  osc.start(t); osc.stop(t + 0.55);
  // Triumphant arpeggio immediately after
  [523, 659, 784, 1047, 1319].forEach((f, i) =>
    tone(ac, f, t + 0.3 + i * 0.07, 0.3, 0.2, 'triangle')
  );
}

/** Short positive ding for correct answer */
export function playCorrect() {
  const ac = ctx(); if (!ac) return;
  tone(ac, 880, ac.currentTime, 0.12, 0.15, 'sine');
}
