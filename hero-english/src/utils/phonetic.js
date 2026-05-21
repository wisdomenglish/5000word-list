export function kkToIPA(kk) {
  if (!kk) return '';
  let s = kk.replace(/^\[/, '').replace(/\]$/, '');
  // Digraphs first
  s = s.replace(/AI/g, 'aɪ');
  s = s.replace(/AU/g, 'aʊ');
  s = s.replace(/eI/g, 'eɪ');
  s = s.replace(/oU/g, 'oʊ');
  s = s.replace(/cI/g, 'ɔɪ');
  s = s.replace(/tS/g, 'tʃ');
  s = s.replace(/dD/g, 'dʒ');
  // Vowels
  s = s.replace(/E/g, 'ə');
  s = s.replace(/I/g, 'ɪ');
  s = s.replace(/V/g, 'ʌ');
  s = s.replace(/Z/g, 'æ');
  s = s.replace(/c/g, 'ɔ');
  s = s.replace(/R/g, 'ɚ');
  s = s.replace(/2/g, 'ɝ');
  s = s.replace(/3/g, 'ɛ');
  s = s.replace(/A/g, 'ɑ');
  s = s.replace(/U/g, 'ʊ');
  // Consonants
  s = s.replace(/S/g, 'ʃ');
  s = s.replace(/G/g, 'ŋ');
  s = s.replace(/T/g, 'ð');
  s = s.replace(/O/g, 'θ');
  // Stress markers
  s = s.replace(/'/g, 'ˈ');
  s = s.replace(/,/g, 'ˌ');
  return '/' + s + '/';
}
