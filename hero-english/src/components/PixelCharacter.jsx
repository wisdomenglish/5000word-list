import swordsmanImg  from '../../swordsman-hd.png';
import mageImg       from '../../mage-hd.png';
import fighterImg    from '../../fighter-hd.png';
import beastmasterImg from '../../beastmaster-hd.png';

const CHARACTER_IMAGES = {
  swordsman:  swordsmanImg,
  mage:       mageImg,
  beastTamer: beastmasterImg,
  fighter:    fighterImg,
};

export default function PixelCharacter({ classId, scale = 4, animate = true }) {
  const src  = CHARACTER_IMAGES[classId] ?? CHARACTER_IMAGES.swordsman;
  const size = scale * 16; // 128px source → scale=4 gives 64px display

  return (
    <div style={{
      width: size,
      height: size,
      flexShrink: 0,
      animation: animate ? 'pixelFloat 1.8s ease-in-out infinite' : 'none',
    }}>
      <style>{`@keyframes pixelFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}`}</style>
      <img
        src={src}
        alt={classId}
        style={{ width: '100%', height: '100%', imageRendering: 'pixelated', display: 'block' }}
      />
    </div>
  );
}
