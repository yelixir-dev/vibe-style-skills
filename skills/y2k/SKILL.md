---
name: y2k
description: How to design and build interfaces in Y2K Aesthetic style (also called Y2K design, year 2000 aesthetic, millennial design, cyber-y2k). Use whenever the user mentions Y2K, year 2000, millennial aesthetic, "1999", "early 2000s", chrome/metallic/holographic/iridescent UI, blob shapes, "frutiger aero" callbacks, jelly buttons, pixel art + chrome mix, or asks for a nostalgic retro-futurist shiny translucent aesthetic. Also trigger when the user wants a Gen-Z / TikTok / beauty / fashion brand with retro-futurist energy and hasn't named a style — propose Y2K as the default and confirm.
---

# Y2K Aesthetic

> *"1999년의 미래 — 크롬과 젤리, 홀로그램의 꿈."*
> The future as 1999 imagined it — chrome, jelly, holographic dreams.

## When to apply this skill

Apply when the user wants any of:
- **Y2K / year 2000 / millennial** nostalgic aesthetic
- **Chrome / metallic / holographic / iridescent** surfaces
- **Blob shapes / organic curves** ("blobitecture")
- **Jelly/gel buttons**, translucent plastic, frosted gel
- **Retro-futurism** — the future as imagined in 1999-2003
- **Gen Z / TikTok / beauty / fashion** with retro-futurist energy

Do **not** apply for: enterprise (too nostalgic/playful), accessibility-first (low contrast on chrome), or contexts needing timeless/professional feel. Y2K is intentional retro — use it for nostalgia-driven brands.

## Core grammar (the non-negotiables)

### 1. Chrome, metallic, holographic surfaces
- Elements look like **polished chrome, liquid metal, or holographic foil**.
- Achieved with **linear-gradients** simulating metal reflection (light stripe through middle).
- Iridescent shifts: pink→cyan→yellow depending on "angle".
```css
.chrome {
  background: linear-gradient(180deg,
    #c0c0c0 0%, #ffffff 30%, #e8e8f0 50%,
    #ffffff 70%, #a8a8b0 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.9),
              inset 0 -1px 0 rgba(0,0,0,0.2);
}
.holo {
  background: linear-gradient(135deg, #FF00FF, #00FFFF, #FFFF00, #FF00FF);
  background-size: 200% 200%;
}
```

### 2. Blob shapes — organic, bulging, "alive"
- Buttons and containers are **blob-shaped** — irregular organic curves.
- `border-radius: 50% 30% 70% 40%` style asymmetric radii.
- Soft, bulging, "jelly" feel — never sharp or geometric.
- "Blobitecture" — buildings/objects that look molten.

### 3. Jelly/gel buttons — translucent, puffy
- Buttons look like **translucent jelly candy** — soft, shiny, slightly see-through.
- Strong top highlight (light from above), inner shadow at bottom.
- Pastel colors with high gloss.
```css
.jelly-btn {
  background: linear-gradient(180deg, #FFB3D9 0%, #FF6FA5 100%);
  border-radius: 30px 25px 35px 20px;  /* blob */
  box-shadow: inset 0 2px 4px rgba(255,255,255,0.7),
              inset 0 -4px 8px rgba(255,0,100,0.3),
              0 4px 8px rgba(0,0,0,0.2);
  border: 1px solid rgba(255,255,255,0.4);
}
```

### 4. Translucent, frosted, layered plastic
- iMac G3 candy colors — **translucent blue, pink, grape, lime, tangerine**.
- Two-tone translucent: see-through top layer, solid color underneath.
- Frosted/mesh textures (similar to early glassmorphism but chunkier).

### 5. Pixel art + chrome combo (Cyber-Y2K variant)
- Pixel art elements (8/16-bit) mixed with chrome/3D rendered shapes.
- "Interface nostalgia" — retro computer GUI elements, scan lines, pixel fonts.
- Cyber-Y2K is the darker, more digital variant.

## Color strategy

**Y2K has two main palettes**:

### Classic Y2K (candy chrome)
- Pastel pinks `#FFB3D9`, baby blues `#B3D9FF`, mint greens `#B3FFD9`.
- Chrome silver `#C0C0C0` accents.
- White backgrounds — bright, optimistic.

### Cyber-Y2K (dark techno)
- Deep purple `#2D1B69`, hot pink `#FF00FF`, electric blue `#00FFFF`.
- Black backgrounds — darker, club/rave energy.
- Glow effects, neon chrome.

## Typography

- **Headlines**: futuristic geometric — Eurostile, Orbitron, Michroma, Audiowide. OR chunky rounded — Comic Sans (yes, allowed here), Baloo.
- **Body**: clean sans — Verdana, Tahoma (period-accurate) or modern Inter.
- **Pixel fonts**: Press Start 2P, VT323 for accents.
- Often outlined or chrome-effect text.

## Forbidden (will break the style)

| Don't | Why |
|---|---|
| Flat matte colors | Need chrome/gloss/holographic sheen |
| Sharp geometric corners | Y2K is blobby/organic — use asymmetric radii |
| Modern minimalism | Too clean — Y2K is decorative, optimistic, busy |
| Single solid shadow | Need inner+outer, gloss highlights |
| Pure black/white | Need translucent, frosted, gradient surfaces |
| Serif fonts | Wrong era — Y2K is futuristic sans or pixel |
| Restraint | Y2K is optimistic excess, not minimalism |

## Reference sites

- **webdesignmuseum.org/y2k-aesthetic** — canonical Y2K web exhibition
- **glossier.com** — beauty brand with Y2K-pastel energy
- **fentybeauty.com** — chrome/holographic beauty aesthetic
- **mschf.com** — streetwear with Y2K irony

## Prompt templates

Full versions in `prompts/y2k.md`. Quick reference:

### UI coding prompt
```
Build a [beauty brand / Gen-Z app / fashion landing] in Y2K Aesthetic style.

Core spec:
- Surfaces: chrome/metallic (linear-gradient light stripe), holographic (iridescent 135deg gradient).
- Shapes: blob forms — asymmetric border-radius like "50% 30% 70% 40%". NO sharp corners.
- Buttons: jelly/gel — translucent pastel, strong top highlight, inner shadow bottom, puffy.
- Colors: pastel pink/blue/mint + chrome silver (classic Y2K), OR deep purple + neon pink/cyan (cyber-Y2K).
- Typography: futuristic geometric (Eurostile/Orbitron) for headlines, pixel fonts (Press Start 2P) for accents.
- Add: star sparkles ✦, blob shapes, holographic gradients.
- NEVER: flat matte, sharp corners, minimalism, single shadow, pure black/white.
```

### Image generation
```
Y2K aesthetic, year 2000, chrome metallic surfaces, holographic iridescent,
blob shapes, jelly translucent buttons, pastel pink and baby blue, pixel art
accents, futuristic optimism, iMac G3 candy colors —ar 16:9 —style raw
```

## When the user's request is vague

If they say "make it nostalgic" / "make it Gen Z" / "make it TikTok" / "make it futuristic retro" without naming a style, **propose Y2K** and confirm:
> "그런 느낌을 원하신다면 Y2K Aesthetic이 잘 맞을 것 같아요 — 크롬과 젤리, 홀로그램, 1999년의 미래를 상상하던 그 시절의 미감이요. 진행할까요?"

## Common mistakes to watch for

1. **Flat colors** → add chrome gradient, holographic shift, gloss highlights.
2. **Sharp corners** → switch to blob radii (asymmetric percentages).
3. **Too minimal** → Y2K is busy/optimistic — add sparkles, decorative elements.
4. **Modern font** → use Eurostile/Orbitron or pixel fonts for that period feel.
5. **Pure black/white bg** → use translucent, frosted, or holographic surfaces.
6. **Single shadow** → need inner top highlight + outer soft drop.

## Mix-and-match (advanced)

Y2K combines well with:
- **+ Cyberpunk** → Cyber-Y2K (darker, neon, club/rave)
- **+ Vaporwave** → pastel nostalgia overload
- **+ Glassmorphism** → frosted gel plastic aesthetic (Frutiger Aero)
- **+ Maximalism** → Y2K patterns + chrome explosion
