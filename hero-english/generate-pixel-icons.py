from pathlib import Path
from shutil import copyfile

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parent
PUBLIC = ROOT / "public"
SOURCE = Path.home() / "Downloads" / "\u53bb\u80cc \u9ed1.png"

SIZES = {
    512: PUBLIC / "pwa-512x512.png",
    192: PUBLIC / "pwa-192x192.png",
    180: PUBLIC / "apple-touch-icon.png",
}


def rect(draw, box, fill):
    draw.rectangle(tuple(int(v) for v in box), fill=fill)


def rgba_layer(size=128):
    return Image.new("RGBA", (size, size), (0, 0, 0, 0))


def draw_pixel_frame(draw):
    bg = "#0d0d1a"
    deep = "#171433"
    purple = "#7c3aed"
    violet = "#a78bfa"
    gold = "#fcd34d"
    amber = "#d97706"

    rect(draw, (0, 0, 128, 128), bg)

    for y in range(0, 128, 8):
        for x in range(0, 128, 8):
            if (x // 8 + y // 8) % 5 == 0:
                rect(draw, (x, y, x + 4, y + 4), "#12102a")

    rect(draw, (7, 7, 121, 121), "#241a45")
    rect(draw, (11, 11, 117, 117), bg)
    rect(draw, (11, 11, 117, 15), purple)
    rect(draw, (11, 113, 117, 117), "#4c1d95")
    rect(draw, (11, 15, 15, 113), "#5b21b6")
    rect(draw, (113, 15, 117, 113), "#2e1065")

    for x, y, c in [
        (19, 20, gold),
        (103, 20, gold),
        (19, 103, amber),
        (103, 103, amber),
        (27, 27, violet),
        (95, 95, purple),
    ]:
        rect(draw, (x, y, x + 7, y + 7), c)


def pixel_logo_mask():
    src = Image.open(SOURCE).convert("RGBA")
    alpha = src.getchannel("A")
    bbox = alpha.getbbox()
    if not bbox:
        raise ValueError(f"No visible pixels found in {SOURCE}")

    cropped_alpha = alpha.crop(bbox)
    cropped_alpha.thumbnail((76, 58), Image.Resampling.LANCZOS)

    pixel_mask = cropped_alpha.resize(
        (max(1, cropped_alpha.width // 3), max(1, cropped_alpha.height // 3)),
        Image.Resampling.LANCZOS,
    )
    pixel_mask = pixel_mask.point(lambda p: 255 if p > 42 else 0)
    return pixel_mask.resize(cropped_alpha.size, Image.Resampling.NEAREST)


def paste_colored_mask(base, mask, xy, color):
    stamp = Image.new("RGBA", mask.size, color)
    stamp.putalpha(mask)
    base.alpha_composite(stamp, xy)


def build_base_icon():
    base = rgba_layer()
    draw = ImageDraw.Draw(base)
    draw_pixel_frame(draw)

    mask = pixel_logo_mask()
    x = (128 - mask.width) // 2
    y = 34 + (64 - mask.height) // 2

    paste_colored_mask(base, mask, (x + 2, y + 2), (28, 16, 72, 210))
    paste_colored_mask(base, mask, (x + 1, y + 1), (76, 29, 149, 190))
    paste_colored_mask(base, mask, (x, y), (255, 242, 184, 255))

    draw = ImageDraw.Draw(base)
    rect(draw, (43, 101, 85, 105), "#fcd34d")
    rect(draw, (47, 106, 81, 109), "#7c3aed")
    rect(draw, (53, 112, 75, 115), "#a78bfa")
    return base


def main():
    if not SOURCE.exists():
        raise FileNotFoundError(f"Logo source not found: {SOURCE}")

    PUBLIC.mkdir(exist_ok=True)
    copyfile(SOURCE, PUBLIC / "source-logo-black.png")

    base = build_base_icon()
    base.save(PUBLIC / "pixel-icon-master.png")

    for size, out in SIZES.items():
        icon = base.resize((size, size), Image.Resampling.NEAREST)
        icon.save(out)
        print(f"OK {out.relative_to(ROOT)} ({size}x{size})")


if __name__ == "__main__":
    main()
