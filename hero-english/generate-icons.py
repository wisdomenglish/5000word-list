from playwright.sync_api import sync_playwright

HTML = """<!DOCTYPE html>
<html>
<head>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { width: 100%; height: 100%; overflow: hidden; }
body {
  background: #0D0D1A;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
</head>
<body>
<!--
  Lettermark from hero-english-logo-wisdom.html (Color Dark version).
  Original SVG viewBox: 0 0 320 480, lettermark region: x=34-276, y=25-255.
  Scaled to fill 82% of a square via viewBox crop.
-->
<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="28 18 256 244"
     width="82%" height="82%">
  <defs>
    <linearGradient id="hGD" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#A78BFA"/>
      <stop offset="100%" stop-color="#7C3AED"/>
    </linearGradient>
    <linearGradient id="hGDh" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="50%" stop-color="#A78BFA"/>
      <stop offset="100%" stop-color="#7C3AED"/>
    </linearGradient>
    <filter id="glowH" x="-25%" y="-20%" width="150%" height="140%">
      <feGaussianBlur stdDeviation="5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Ambient glow -->
  <ellipse cx="155" cy="140" rx="115" ry="120" fill="#6D28D9" opacity="0.1"/>

  <!-- E letterform (gold, background) -->
  <rect x="34" y="40" width="16" height="202" fill="#FCD34D" opacity="0.5"/>
  <rect x="34" y="40" width="242" height="16" fill="#FCD34D" opacity="0.5"/>
  <rect x="34" y="131" width="242" height="16" fill="#FCD34D" opacity="0.5"/>
  <rect x="34" y="226" width="242" height="16" fill="#FCD34D" opacity="0.5"/>

  <!-- H letterform (purple gradient, foreground) -->
  <rect x="72" y="25" width="46" height="230" fill="url(#hGD)" filter="url(#glowH)"/>
  <rect x="202" y="25" width="46" height="230" fill="url(#hGD)" filter="url(#glowH)"/>
  <rect x="72" y="116" width="176" height="38" fill="url(#hGDh)" filter="url(#glowH)"/>

  <!-- H subtle highlight -->
  <rect x="72"  y="25" width="7" height="230" fill="rgba(255,255,255,0.1)"/>
  <rect x="202" y="25" width="7" height="230" fill="rgba(255,255,255,0.1)"/>
</svg>
</body>
</html>"""

SIZES = [
    (512, "public/pwa-512x512.png"),
    (192, "public/pwa-192x192.png"),
    (180, "public/apple-touch-icon.png"),
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    for size, path in SIZES:
        page = browser.new_page()
        page.set_viewport_size({"width": size, "height": size})
        page.set_content(HTML)
        page.screenshot(path=path)
        page.close()
        print(f"OK {path}  ({size}x{size})")
    browser.close()
