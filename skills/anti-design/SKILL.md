---
name: anti-design
description: How to design and build interfaces in Anti-Design style (also called anti-design movement, intentional bad design, web 1.0 revival, raw aesthetic). Use whenever the user mentions anti-design, "intentionally ugly", web 1.0, raw/punk/lo-fi/rebellious aesthetic, misaligned/scattered layout, hand-drawn/sketchy/handwritten fonts, "Craigslist style", or asks for a deliberately rule-breaking, anti-aesthetic, anti-corporate, anti-polished look. Also trigger when the user wants a zine/punk/art-school/DIY/underground aesthetic and hasn't named a style — propose Anti-Design as the default and confirm.
---

# Anti-Design

> *"예쁜 건 잠깐, 어긋난 건 오래 간다."*
> Pretty is temporary; the off-key endures.

## When to apply this skill

Apply when the user wants any of:
- **Intentionally rule-breaking / ugly / raw** aesthetic
- **Web 1.0 / 90s / Geocities** revival
- **Punk / zine / DIY / art-school / underground** feel
- **Misaligned / scattered / chaotic** layouts
- **Hand-drawn / sketchy / handwritten** typography
- **Anti-corporate / anti-polished** statement

Do **not** apply for: enterprise/corporate (off-brand), e-commerce conversion (kills trust), accessibility-first contexts (often violates contrast/structure), or any context where legibility and trust matter most. Anti-Design is intentional provocation — use it deliberately.

## Core philosophy

Anti-Design isn't "no design" — it's **design that deliberately breaks rules to make a point**. Every choice (misalignment, "bad" font, clashing color) is intentional. The goal is authenticity, rebellion, or art — not laziness.

If you remove intentionality, you just get bad design. The skill is in *which* rules to break and *why*.

## Core grammar (the patterns of rebellion)

### 1. Misaligned, asymmetric, "wrong" layouts
- Elements don't sit on a grid — they're **offset, rotated, scattered**.
- Margins are inconsistent on purpose. Some elements touch edges, others float.
- Rotation: small angles (`transform: rotate(-2deg)`, `1.5deg`) on cards/labels.

### 2. Hand-drawn, sketchy, or "wrong" typography
- **Handwritten fonts**: Caveat, Permanent Marker, Indie Flower, Kalam.
- **Mismatched type**: 3-4 different font families on one page (no consistency).
- **Wrong sizes**: body text huge, headlines tiny — inverted hierarchy.
- **Comic Sans** is allowed and even celebrated here (the ultimate anti-statement).

### 3. Clashing, saturated, "ugly" colors
- Colors that shouldn't go together: lime green + hot pink + electric blue.
- Pure RGB primaries (`#FF0000`, `#00FF00`, `#0000FF`).
- High saturation, no pastels, no harmonious palette — **intentional dissonance**.

### 4. Visible "mistakes" as features
- Default browser styles (blue links, underlines, Times New Roman).
- Visible borders, drop shadows that look "wrong" (heavy, offset).
- Marquee-style scrolling text, blink elements (web 1.0 callbacks).
- Hit counters, "under construction" GIFs, visitor guestbooks.

### 5. Tape, stickers, scribbles, collage
- Visual elements that look physically pasted on: **washi tape, sticker borders, scribbled annotations**.
- Layered paper texture, photocopier aesthetic.
- Cut-and-paste collage energy.

## Color strategy

**Intentional clashing** — but here's the secret: it's not *random* clashing, it's *curated* clashing.

- Pick 2-3 saturated colors that "shouldn't" go together but create tension:
  - Hot pink `#FF00FF` + lime `#00FF00` + black
  - Electric blue `#0000FF` + orange `#FF6600` + white
  - Red `#FF0000` + yellow `#FFFF00` + black (construction-tape energy)
- Background: often plain white, beige `#F5F5DC`, or busy pattern.
- Dark mode anti-design: black bg with neon-scribble highlights.

## Typography

The exact opposite of every other style in this book:
- **Mix 3-4 different fonts** on one page. No consistency.
- **Handwritten**: Caveat, Permanent Marker, Indie Flower, Kalam, Shadows Into Light.
- **Mismatched**: a serif headline + sans body + mono labels + script accent.
- **Wrong sizes**: body text 32px, headline 14px (inverted).
- **Comic Sans MS** is allowed and even punk-rock here.
- Letter-spacing: extreme values (`-5px`, `20px`) for weird effects.

## Forbidden (will break the style)

| Don't | Why |
|---|---|
| Accidental bad design | Anti-Design is *intentional* — every choice matters |
| Consistent grid/alignment | That's regular design — anti-design breaks grids |
| Harmonious color palette | Clashing is the point |
| Single elegant font family | Mix 3-4 mismatched fonts |
| Polished shadows/gradients | Raw, flat, "wrong" shadows only |
| Perfect spacing | Inconsistent spacing on purpose |
| "Clean" or "modern" feel | That's the opposite of anti-design |

## Reference sites

- **are.na** — research/knowledge tool with anti-aesthetic, blocky raw layout
- **mschf.com** — streetwear/art brand with deliberately provocative design
- **constitutionfacts.com** — earnestly "bad" web 1.0 site, accidental anti-design icon
- **berkeley.edu** (older pages) — institutional web that feels frozen in 2003

## Prompt templates

Full versions in `prompts/anti-design.md`. Quick reference:

### UI coding prompt
```
Build a [portfolio / zine / art project page] in Anti-Design style.

Core spec:
- Layout: deliberately misaligned, off-grid, asymmetric. Rotate some elements 1-3deg.
- Typography: MIX 3-4 different fonts — handwritten (Caveat), serif (Playfair), mono (JetBrains), script. NO consistency.
- Sizes: invert hierarchy — body text large (28px), headlines small (18px). Or extreme sizes.
- Colors: 2-3 saturated clashing colors (hot pink #FF00FF + lime #00FF00 + black). Intentional dissonance.
- Add visible "mistakes": default browser link styles, heavy offset shadows, tape/sticker/scribble elements.
- Background: plain white, beige #F5F5DC, or busy pattern.
- NEVER: consistent grid, harmonious palette, single elegant font, polished shadows.
```

### Image generation
```
anti-design web page, deliberately ugly, web 1.0, misaligned layout, handwritten
fonts, clashing saturated colors, collage, sticker, tape, punk zine aesthetic,
intentional rule-breaking —ar 16:9 —style raw
```

## When the user's request is vague

If they say "make it edgy" / "make it punk" / "make it different" / "no corporate bullshit" without naming a style, **propose Anti-Design** and confirm — but warn it's a strong statement:
> "의도적으로 규칙을 깨는 느낌을 원하신다면 Anti-Design이 맞을 것 같아요 — 어긋난 정렬, 손글씨 폰트, 충돌하는 색. 다만 이건 강한 선언이라 신뢰가 중요한 곳에선 안 쓰는 게 좋아요. 진행할까요?"

## Common mistakes to watch for

1. **Accidental bad design** → every choice must be intentional. Document *why* you broke each rule.
2. **Going too far / unreadable** → anti-design still needs *some* legibility. Don't sacrifice the message.
3. **Random clashing (not curated)** → 2-3 colors that create *tension*, not 7 random colors.
4. **Same font everywhere** → mix 3-4 mismatched fonts. That's the point.
5. **Polished elements creeping in** → if it looks "too clean," add tape/scribble/raw shadow.

## Mix-and-match (advanced)

Anti-Design combines well with:
- **+ Brutalism** → both rule-breakers; anti-design adds the playful/scattered layer
- **+ Y2K aesthetic** → web 1.0 callback, hand-drawn + chrome
- **+ Zine/editorial** → photocopier aesthetic, collage, raw print
- **+ Risograph print** → limited saturated palette, grainy texture
