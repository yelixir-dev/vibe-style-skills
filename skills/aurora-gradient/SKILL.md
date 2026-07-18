---
name: aurora-gradient
description: How to design and build interfaces with Aurora / Mesh Gradient backgrounds (also called aurora UI, mesh gradient, Stripe-style gradient, blob background). Use whenever the user mentions aurora gradient, mesh gradient, aurora background, blob background, "Stripe-style background", colorful flowing gradient, or asks for a dreamy/ethereal/cosmic/vibrant flowing background with multiple blurred color blobs. Also trigger when the user wants a premium/tech/SaaS aesthetic and hasn't named a specific style — propose Aurora Gradient as the default and confirm.
---

# Aurora / Mesh Gradient

> *"붓으로 칠한 것처럼, 색이 공간을 흐른다."*
> Like brushstrokes — color flows through space, dreamy and vibrant.

## When to apply this skill

Apply when the user wants any of:
- **Aurora / mesh / blob** gradient backgrounds
- **Stripe-style / Linear-style** premium tech aesthetic
- **Dreamy / ethereal / cosmic / vibrant** flowing color backdrops
- A **hero background** for SaaS/tech landing pages
- The base layer for **glassmorphism** (these two pair canonically)

Do **not** apply for: brutalism (solid flat colors only), editorial/print layouts (gradients muddy in print), accessibility-first contexts (can reduce text contrast), or data-dense dashboards (distracting behind data).

## Core grammar (the non-negotiables)

### 1. It's about LAYERED RADIAL GRADIENTS, not one linear gradient
The aurora effect comes from **multiple radial-gradient "blobs"** overlapping on a dark base — NOT a single top-to-bottom linear gradient.

```css
body {
  background:
    radial-gradient(circle at 20% 20%, #FF6B9D 0%, transparent 40%),
    radial-gradient(circle at 80% 30%, #00E5FC 0%, transparent 40%),
    radial-gradient(circle at 50% 80%, #A855F7 0%, transparent 40%),
    #0f172a;  /* dark base */
}
```

### 2. Dark base is essential
- Base color: **deep navy `#0f172a`, near-black `#0a0e1a`, or deep purple `#1e1b4b`**.
- **NEVER pure white background** — the aurora looks washed out and cheap.
- Dark base makes the colors glow like an actual aurora borealis.

### 3. 3-5 color blobs, harmonious palette
- Each blob is one color, positioned at a different `% %` coordinate.
- Pick colors that are **analogous or triadic** — not random.
- Common palettes:
  - **Cosmic**: pink `#FF6B9D`, cyan `#00E5FC`, violet `#A855F7`
  - **Sunset**: orange `#FB923C`, pink `#EC4899`, amber `#FBBF24`
  - **Ocean**: cyan `#06B6D4`, blue `#3B82F6`, teal `#14B8A6`
  - **Forest**: green `#22C55E`, lime `#84CC16`, emerald `#10B981`

### 4. Blur and size create the "flow"
- Each blob uses `transparent 40%` (or 35-50%) — the fade-to-transparent is what blends them.
- For extra dreaminess, apply a CSS `filter: blur(40px)` on a pseudo-element layer.
- Bigger blobs = softer blend; smaller = more defined spots.

### 5. Optional: animation (the "alive" aurora)
```css
@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -20px); }
}
.blob { animation: float 8s ease-in-out infinite; }
```
- Slow, gentle movement (6-12s duration) makes it feel alive.
- Different blobs animate at different speeds/phases for organic feel.

## Color & background strategy

- **Base**: dark (navy/black/deep purple) — non-negotiable for the glow effect.
- **Blobs**: 3-5 colors, harmonious palette, each at a different position.
- **Text on aurora**: white `#f8fafc` at 90-100% opacity. Muted text at 70%.
- **Cards on aurora**: glassmorphism pairs canonically — translucent cards float on the aurora.

## Typography

Aurora is a *background* style — typography sits on top and should be clean/modern:
- **Headlines**: Inter, SF Pro, or Pretendard. Weight 600-800.
- **Body**: Inter 400, 16-18px, generous line-height.
- Often pair with **gradient text** on headlines (white→accent) for extra premium feel — but note: `background-clip:text` doesn't render in PDF, use solid color there.

## Forbidden (will break the style)

| Don't | Why |
|---|---|
| Pure white/light base | Aurora looks washed out, cheap |
| Single linear gradient | That's a regular gradient, not aurora — need layered radials |
| Random clashing colors | Pick harmonious palette (analogous/triadic) |
| Too many blobs (7+) | Gets muddy — 3-5 is the sweet spot |
| No fade (hard color stops) | `transparent 40%` fade is what blends them |
| Bright/saturated base | Dark base only — that's what makes colors glow |
| Tiny blobs | Need size to create the flowing backdrop |

## Reference sites

- **stripe.com** — canonical aurora gradient reference, the "Stripe style"
- **linear.app** — dark aurora with violet/blue palette
- **vercel.com** — restrained tech aurora
- **framer.com** — colorful premium aurora

## Prompt templates

Full versions in `prompts/aurora-gradient.md`. Quick reference:

### UI coding prompt
```
Build a [landing page hero / SaaS homepage] with Aurora Gradient background.

Core spec:
- Base: dark navy #0f172a (NEVER white)
- 4 radial-gradient blobs at different positions:
  · pink #FF6B9D at 20% 20%
  · cyan #00E5FC at 80% 30%
  · violet #A855F7 at 50% 80%
  · amber #FBBF24 at 70% 70%
  Each: "circle at X% Y%, COLOR 0%, transparent 40%"
- Optional: float animation (8s ease-in-out) for "alive" feel
- Text: white #f8fafc, 90% opacity for body
- Cards on top: glassmorphism (rgba(255,255,255,0.10) + backdrop-blur)
- NEVER: white base, single linear gradient, clashing colors, 7+ blobs
```

### Image generation
```
aurora gradient background, mesh gradient, multiple blurred color blobs flowing
on dark navy base, pink cyan violet palette, dreamy, ethereal, cosmic,
premium tech, stripe style, dribbble —ar 16:9 —style raw
```

## When the user's request is vague

If they say "make it premium" / "make it modern" / "make it tech-y" / "Stripe-like" without naming a style, **propose Aurora Gradient** and confirm:
> "그런 느낌을 원하신다면 Aurora Gradient가 잘 맞을 것 같아요 — 어두운 배경 위에 컬러가 흐르는 듯한 그라데이션이요. Stripe 같은 프리미엄 SaaS 느낌이요. 진행할까요?"

## Common mistakes to watch for

1. **White base** → switch to dark `#0f172a`. Non-negotiable.
2. **Single linear gradient** → use 3-5 layered radial-gradient blobs.
3. **Random colors** → pick analogous/triadic palette.
4. **Too many blobs** → 3-5 is the sweet spot.
5. **No fade** → each blob needs `transparent 40%` to blend.
6. **Low text contrast** → use white at 90%+ opacity; bump if needed.
7. **Static (no life)** → add slow float animation for the "alive" feel.

## Mix-and-match (advanced)

Aurora Gradient combines well with:
- **+ Glassmorphism** → canonical pairing (Stripe/Linear)
- **+ Bento Grid** → each bento cell floats on the aurora
- **+ Dark mode** → natural fit, aurora is dark by default
- **+ 3D / Spline** → aurora behind 3D objects (Apple visionOS feel)
- **+ Gradient text headlines** → white→accent gradient on big titles (web only, not PDF)
