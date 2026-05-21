// Generates PNG icons for PWA/apple-touch-icon using Playwright
import { chromium } from 'playwright';

const html = `<!DOCTYPE html>
<html>
<head>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { width: 100%; height: 100%; overflow: hidden; }
body {
  background: #3B0764;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
</head>
<body>
<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 100 100"
     width="80%" height="80%">
  <!-- H letterform: left leg -->
  <rect x="14" y="11" width="18" height="78" fill="white"/>
  <!-- H letterform: right leg -->
  <rect x="68" y="11" width="18" height="78" fill="white"/>
  <!-- H letterform: crossbar -->
  <rect x="14" y="41" width="72" height="18" fill="white"/>
  <!-- Gold accent highlight at top of legs -->
  <rect x="14" y="11" width="18" height="4" fill="#F59E0B" opacity="0.8"/>
  <rect x="68" y="11" width="18" height="4" fill="#F59E0B" opacity="0.8"/>
</svg>
</body>
</html>`;

async function main() {
  const browser = await chromium.launch();

  for (const [size, name] of [
    [512,  'pwa-512x512'],
    [192,  'pwa-192x192'],
    [180,  'apple-touch-icon'],
  ]) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: size, height: size });
    await page.setContent(html, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `public/${name}.png` });
    console.log(`✅ public/${name}.png  (${size}×${size})`);
    await page.close();
  }

  await browser.close();
}

main().catch(err => { console.error(err); process.exit(1); });
