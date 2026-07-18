---
name: glassmorphism
description: How to design and build interfaces in Glassmorphism style (including Apple's 2026 "Liquid Glass" evolution and Microsoft Fluent Acrylic). Use whenever the user mentions glassmorphism, frosted glass, glass UI, "Apple Liquid Glass", "Microsoft Acrylic", backdrop blur, translucent UI, blurred glass cards, or asks for a sleek/modern/depth-rich aesthetic with layered transparency. Also trigger when the user wants an iOS/macOS/Windows 11 native-feeling UI or a premium/Apple-like aesthetic and hasn't named a specific style — propose Glassmorphism as the default and confirm.
---

# Glassmorphism (incl. Apple "Liquid Glass" & Microsoft Acrylic)

> *"서리낀 유리 위로, 색이 스며든다."*
> Frosted glass through which color bleeds — depth without heaviness.

## When to apply this skill

Apply when the user wants any of:
- A **sleek / modern / premium / Apple-like** UI
- **Frosted glass / translucent / blurred** cards, panels, navigation bars, modals
- An **iOS / macOS / Windows 11 native**-feeling interface
- **Apple "Liquid Glass"** (2026, iOS 26) — the new dynamic refractive variant
- **Microsoft Fluent "Acrylic"** material
- Depth-rich dashboard with layered panels over colorful backgrounds

Do **not** apply for: data-dense enterprise tables (legibility suffers), brutalist/raw aesthetics (philosophical opposite), accessibility-first public services (contrast risk), or print-heavy editorial layouts (the effect is screen-native).

## The three variants (know the difference)

| Variant | Origin | Key trait |
|---|---|---|
| **Classic Glassmorphism** | 2020 Michal Malewicz trend | Frosted blur + translucent fill + thin light border |
| **Apple Liquid Glass** | iOS 26 (2025 WWDC) | Dynamic refraction — content beneath appears to shift/bend; glass reacts to light |
| **Microsoft Acrylic** | Fluent Design (Win 11) | "Host backdrop" or "in-app acrylic"; more opaque, focus on depth behind windows |

When unsure which the user means, default to **classic glassmorphism** and confirm. If they say "Apple style" or "iOS 26", use Liquid Glass refinements.

## Core grammar (the non-negotiables)

### 1. The background MUST be colorful or busy
Glassmorphism is **invisible on flat white**. The frosted effect only reads when there's vibrant content *behind* the glass to blur.
- Use a **mesh gradient / aurora background**, **vibrant photo**, or **colorful blob shapes** as the base layer.
- NEVER put a glass card on a plain white/cream background — it looks like a slightly-gray box. The #1 mistake.

### 2. backdrop-filter: blur() is the soul
```css
.glass {
  background: rgba(255, 255, 255, 0.10);   /* ~10-20% white */
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);  /* Safari */
  border: 1px solid rgba(255, 255, 255, 0.20);   /* thin light edge */
}
```
- **Blur radius**: 8–30px. 12–16px is the sweet spot. <8px = barely visible, >30px = muddy.
- **Saturation boost** (`saturate(160-200%)`) makes colors pop through the frost — this is what separates "premium" from "washed out".
- **Fallback**: backdrop-filter has ~97% browser support now, but always pair with a solid `rgba()` background so the card is readable if blur fails.

### 3. Translucent fill, not transparent
- Fill: `rgba(255,255,255, 0.08–0.20)` for light glass, `rgba(20,20,30, 0.30–0.50)` for dark glass.
- **Never** fully transparent (`rgba(...,0)`) — the border alone can't carry the shape.
- **Never** fully opaque — then it's just a card, not glass.

### 4. Thin light border (the "edge highlight")
- `1px solid rgba(255,255,255, 0.15–0.30)`.
- This simulates light catching the glass edge. Without it, the card looks like a flat stain.
- Optional inner glow: `box-shadow: inset 0 1px 0 rgba(255,255,255,0.25)`.

### 5. Soft elevation shadows
Unlike brutalism's hard offset shadows, glass uses **soft, diffuse** shadows:
- `box-shadow: 0 8px 32px rgba(0,0,0, 0.10)`.
- The shadow should feel like ambient depth, not a stamped outline.

### 6. Generous padding & rounded corners
- Padding: 24–32px inside cards. Glass needs room to "breathe".
- Border-radius: 16–24px. Sharp corners feel wrong on glass — it's a soft material.
- Never below 12px radius.

## Color & background strategy

The background is 50% of the effect. Strong options:

### Aurora / mesh gradient background (most popular)
```css
body {
  background:
    radial-gradient(circle at 20% 20%, #FF6B9D 0%, transparent 40%),
    radial-gradient(circle at 80% 30%, #00E5FC 0%, transparent 40%),
    radial-gradient(circle at 50% 80%, #A6FF4D 0%, transparent 40%),
    #1a1a2e;
}
```

### Vibrant photo background
- Use a high-quality colorful image (landscape, abstract art)
- Apply slight overlay dim: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))` for text legibility

### Dark mode glass (premium, my favorite)
- Background: deep navy/charcoal `#0f172a` or `#1a1a2e`
- Glass: `rgba(255,255,255, 0.05–0.10)` + blur
- Text: white `#f8fafc` at 90–100% opacity
- Accents glow softly

## Typography

Glass pairs with clean, light-feeling type:
- **Headlines**: Inter, SF Pro, or Pretendard. Weight 600–700 (not black — too heavy for glass).
- **Body**: Inter 400, 16–18px. Generous line-height (1.6) — glass rewards breathing room.
- **Labels**: SF Mono / JetBrains Mono, often lowercase or sentence case (not ALL CAPS — feels too brutal).

## Apple "Liquid Glass" refinements (2026)

If the user explicitly wants the iOS 26 / Liquid Glass look, add:
- **Dynamic specular highlights**: a subtle radial gradient that shifts with content beneath (CSS-only approximation: layered radial-gradients animated on hover).
- **Higher refraction**: stronger saturation boost `saturate(200%)`, slightly larger blur.
- **Edge lighting**: `box-shadow: inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 8px 16px rgba(255,255,255,0.1)`.
- **Content bending** (advanced, needs SVG/custom): text/elements near glass edges appear slightly refracted. Hard to do in pure CSS — approximate with subtle skew or scale on hover.
- Glass elements often **float** with larger shadows and feel like physical objects layered above the content.

## Microsoft Acrylic refinements

If the user wants Windows 11 native feel:
- More **opaque** than classic glass: `rgba(255,255,255, 0.50–0.70)` (called "background acrylic").
- **In-app acrylic** (behind nav): `rgba(250,249,248, 0.70)`, blur 30px.
- Subtle **noise texture** overlay for tactility.
- Always paired with **Reveal** (hover lighting) and **Mica** (desktop material) on Win 11.

## Forbidden (will break the style)

| Don't | Why |
|---|---|
| Glass on flat white/cream background | No blur to see — looks like a faint gray box |
| Fully transparent fill (`rgba 0`) | Border can't carry the shape; illegible |
| Fully opaque card | Then it's not glass — just a regular card |
| Hard offset shadows (brutalist) | Conflicts with the soft, ambient glass material |
| Sharp corners (<12px radius) | Glass is a soft material; sharp feels wrong |
| Heavy black borders | Kills the floating, light feel |
| ALL CAPS heavy labels | Too aggressive for glass's soft mood |
| Low-contrast text on glass | Accessibility failure — text becomes unreadable |

## Accessibility warning (read this)

Glassmorphism is the **most accessibility-risky** popular style. Common failures:
- Text contrast drops below WCAG 4.5:1 over blurred backgrounds.
- Solution 1: **Increase fill opacity** (0.20 → 0.35) until contrast passes.
- Solution 2: **Add a dark overlay** behind the text only.
- Solution 3: **Test on the actual background image** — don't approve on a designer's bright gradient then ship on a dark photo.
- Always run the page through a contrast checker before shipping.

## Reference sites

- **Apple.com** (iOS 26 marketing) — Liquid Glass canonical reference
- **Microsoft Fluent** docs — Acrylic material spec
- **Stripe.com** — classic glassmorphism over aurora gradients
- **Linear.app** — dark glass variant

## Prompt templates

Full versions live in `prompts/glassmorphism.md`. Quick reference:

### UI coding prompt
```
Build a [dashboard / landing page] with Glassmorphism style.

Core spec:
- Background: aurora mesh gradient (radial gradients of #FF6B9D, #00E5FC, #A6FF4D on dark navy #1a1a2e)
- Glass cards: background rgba(255,255,255,0.10), backdrop-filter blur(16px) saturate(180%)
- Card borders: 1px solid rgba(255,255,255,0.20)
- Card shadows: 0 8px 32px rgba(0,0,0,0.10) (soft, ambient)
- Border-radius: 20px on cards
- Typography: Inter 400 body, 600 headlines. NO all-caps heavy labels.
- ABSOLUTELY NO glass on flat white background — always over the colorful base.
- ABSOLUTELY NO hard offset shadows, no heavy black borders.
- Verify text contrast over the blurred areas; bump fill opacity if needed.
```

### Image generation (Midjourney / DALL·E)
```
glassmorphism UI design, frosted glass cards, backdrop blur, translucent
panels floating over vibrant aurora gradient background, soft ambient
shadows, thin light edge highlights, Inter typography, modern, sleek,
Apple style, dribbble, awwwards —ar 16:9 —style raw
```

## When the user's request is vague

If they say "make it sleek" / "make it premium" / "make it Apple-like" without naming a style, **propose Glassmorphism** and confirm:
> "그런 느낌을 원하신다면 Glassmorphism이 잘 맞을 것 같아요 — 컬러풀한 배경 위에 서리낀 유리 카드가 떠 있는 스타일이요. 다만 글자 대비가 중요해서, 가독성 부분은 제가 신경 써서 처리할게요. 진행할까요?"

Confirm because glassmorphism is strong-looking and demands a colorful base layer — not every "premium" request wants that.

## Common mistakes to watch for (when reviewing AI output)

1. **Glass card on flat white background** → add a colorful/gradient base layer first.
2. **Fill too transparent** (text unreadable) → bump to `rgba(255,255,255,0.18)`+.
3. **Hard shadow crept in** → replace with `0 8px 32px rgba(0,0,0,0.10)`.
4. **Sharp corners** → minimum 16px, prefer 20–24px.
5. **No saturation boost** → add `saturate(180%)` to backdrop-filter.
6. **All-caps heavy labels** → switch to sentence case, lighter weight.
7. **Safari missing `-webkit-` prefix** → always include `-webkit-backdrop-filter`.

## Mix-and-match (advanced)

Glassmorphism combines well with:
- **+ Aurora gradient background** → canonical pairing (Stripe, Linear style)
- **+ Dark mode** → premium, my favorite — neon accents glow through the frost
- **+ Bento grid** → each bento cell is a glass card over a shared vibrant backdrop
- **+ 3D / Spline** → glass panels floating in 3D space (Apple visionOS vibe)
