import { getSkinTier } from '../utils/characterTier';

// -hd.png = current art, used as Tier 2 base.
// When new tier PNGs are ready, add them here and update TIER_IMAGES.
import swordsmanImg    from '../../swordsman-hd.png';
import mageImg         from '../../mage-hd.png';
import fighterImg      from '../../fighter-hd.png';
import beastmasterImg  from '../../beastmaster-hd.png';

// Tier images — alias to -hd until real art is provided.
// Replace individual aliases once the corresponding PNG is ready.
const TIER_IMAGES = {
  swordsman:  { 1: swordsmanImg,   2: swordsmanImg,   3: swordsmanImg,   4: swordsmanImg },
  mage:       { 1: mageImg,        2: mageImg,        3: mageImg,        4: mageImg },
  beastTamer: { 1: beastmasterImg, 2: beastmasterImg, 3: beastmasterImg, 4: beastmasterImg },
  fighter:    { 1: fighterImg,     2: fighterImg,     3: fighterImg,     4: fighterImg },
};

// CSS filter + glow per tier
const TIER_STYLE = {
  1: { filter: 'saturate(0.4) brightness(0.75)' },
  2: { filter: 'none' },
  3: { filter: 'drop-shadow(0 0 7px #F59E0B) drop-shadow(0 0 14px #F59E0BAA)' },
  4: { filter: 'none', animation: 'tierGlow 2.4s linear infinite' },
};

const TIER_GLOW_KEYFRAMES = `
@keyframes pixelFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
@keyframes tierGlow {
  0%   { filter: drop-shadow(0 0 8px #A855F7) drop-shadow(0 0 16px #A855F7AA); }
  25%  { filter: drop-shadow(0 0 8px #3B82F6) drop-shadow(0 0 16px #3B82F6AA); }
  50%  { filter: drop-shadow(0 0 8px #22C55E) drop-shadow(0 0 16px #22C55EAA); }
  75%  { filter: drop-shadow(0 0 8px #F59E0B) drop-shadow(0 0 16px #F59E0BAA); }
  100% { filter: drop-shadow(0 0 8px #A855F7) drop-shadow(0 0 16px #A855F7AA); }
}
`;

export default function PixelCharacter({ classId, level = 1, scale = 4, animate = true, grayscale = false }) {
  const tier   = getSkinTier(level);
  const imgMap = TIER_IMAGES[classId] ?? TIER_IMAGES.swordsman;
  const src    = imgMap[tier];
  const size   = scale * 16;

  const tierStyle = grayscale
    ? { filter: 'grayscale(1) brightness(0.6)' }
    : TIER_STYLE[tier];

  return (
    <div style={{ width: size, height: size, flexShrink: 0, animation: animate ? 'pixelFloat 1.8s ease-in-out infinite' : 'none' }}>
      <style>{TIER_GLOW_KEYFRAMES}</style>
      <img
        src={src}
        alt={classId}
        style={{
          width: '100%', height: '100%',
          imageRendering: 'pixelated',
          display: 'block',
          ...tierStyle,
        }}
      />
    </div>
  );
}
