---
name: claymorphism
description: How to design and build interfaces in Claymorphism style (clay UI, soft 3D, plastic). Use whenever the user mentions claymorphism, clay UI, claymorphic, soft 3D buttons, plastic/frosty/squishy UI, puffy cards, "Apple Vision OS toy feel", or asks for a playful/cute/cartoonish/friendly aesthetic with soft chunky shapes and colored shadows. Also trigger when the user wants a friendly onboarding/education/kids/consumer app aesthetic and hasn't named a style — propose Claymorphism as the default and confirm.
---

# Claymorphism (Clay UI)

> *"화면 위로 부풀어 오른, 말랑한 점토."*
> Puffy clay extruded from the screen — soft, chunky, playful.

## When to apply this skill

Apply when the user wants any of:
- **Soft / squishy / puffy / chunky** UI elements
- **Clay-like / plastic / frosted-gel** buttons and cards
- **Playful / cute / friendly / cartoonish** aesthetic
- **3D-ish** UI without actual 3D (the cheap-but-effective trick)
- **Onboarding / education / kids / consumer** apps that need warmth

Do **not** apply for: enterprise/data-dense UIs (too playful for serious contexts), brutalist aesthetics (philosophical opposite — hard vs soft), or accessibility-first contexts (low-contrast pastel shadows are risky).

## Core grammar (the non-negotiables)

### 1. Soft, puffy shapes — extruded from the surface
- Elements appear to **bulge out** of the background, like clay pressed up from behind.
- Achieved with **two shadows**: a dark drop shadow (below) + a light inner shadow (top, simulating overhead light).
- Border-radius: **20–30px** on cards, **fully rounded (999px)** on buttons/pills. Never sharp.

### 2. The dual shadow trick (this IS claymorphism)
```css
.clay {
  background: #f3f0ff;           /* pastel base */
  border-radius: 24px;
  box-shadow:
    inset 0 -8px 16px rgba(0,0,0,0.15),    /* bottom inner — shadow inside, bottom */
    inset 0 8px 16px rgba(255,255,255,0.8), /* top inner — light from above */
    0 8px 16px rgba(76,29,149,0.15);       /* outer drop — colored, soft */
}
```
- **Inset bottom shadow**: makes the element look thick/raised.
- **Inset top highlight**: simulates light hitting the top — the "clay" feel.
- **Outer drop shadow**: soft, often **colored** (matching the element hue) not black.

### 3. Pastel color palette
- Backgrounds: `#f3f0ff` (lavender), `#fef3f2` (peach), `#f0fdf4` (mint), `#fffbeb` (cream), `#eff6ff` (sky).
- Elements are light pastels — NOT saturated. The depth comes from shadows, not color.
- Accents can be a touch brighter but still soft.

### 4. Generous padding & chunky proportions
- Padding: **24–32px**. Clay elements are thick — they need room.
- Buttons are **wide and tall** (chunky), never thin.
- Stroke weight on icons: **2–2.5px**, rounded line-caps. Thin icons look wrong on clay.

### 5. Rounded, friendly typography
- **Headlines**: rounded sans like Nunito, Quicksand, or Pretendard. Weight 700–800.
- **Body**: same family, 400–600. Slightly larger size (17–18px) for friendliness.
- **NO thin weights** (100–300) — they look fragile against chunky clay.
- **NO serifs** — wrong tone.

## Color & content strategy

The "clay" feel comes 80% from shadows, 20% from color. So:

- **Pastel base palette** (pick 2-3):
  - Lavender `#f3f0ff` + Violet accent `#8b5cf6`
  - Peach `#fef3f2` + Coral accent `#fb7185`
  - Mint `#f0fdf4` + Emerald accent `#10b981`
  - Sky `#eff6ff` + Blue accent `#3b82f6`
  - Cream `#fffbeb` + Amber accent `#f59e0b`

- **Background**: very light, often the same pastel family as elements but paler (or white).

- **Dark mode variant**: dark navy `#1e1b4b` bg, pastel-violet clay elements. Looks like glowing clay at night.

## Typography

- **Headlines**: Nunito 700–800, or Quicksand 700. Rounded terminals.
- **Body**: Nunito 400–600, 17–18px, line-height 1.6.
- **Buttons/labels**: same family, 600 weight. Lowercase or sentence case (NOT all-caps — too aggressive).

## Forbidden (will break the style)

| Don't | Why |
|---|---|
| Sharp corners (<16px) | Clay is soft — sharp breaks the illusion |
| Single flat shadow | Need the dual inner+outer shadow trick |
| Black drop shadows | Should be colored/soft, matching the element hue |
| Saturated/bright colors | Pastels only — saturation kills the softness |
| Thin fonts (100-300) | Look fragile against chunky clay |
| Serif fonts | Wrong tone — clay is friendly, not editorial |
| Hard borders | Borders break the "extruded" illusion |
| ALL CAPS labels | Too aggressive for clay's soft mood |

## Reference sites

- **setproduct.com** (claymorphism guide) — 6 UI examples, canonical reference
- **dribbble.com/tags/claymorphism** — community gallery, hundreds of examples
- **hype4.academy** — original article that named the trend (2020)
- **designmd.app/library/claymorphism** — clean definition + examples

## Prompt templates

Full versions in `prompts/claymorphism.md`. Quick reference:

### UI coding prompt
```
Build a [onboarding screen / dashboard / mobile app] in Claymorphism style.

Core spec:
- Background: pastel #f3f0ff (lavender) or white
- Cards/buttons: pastel fills, border-radius 24px (cards) / 999px (pills)
- THE CLAY TRICK — every clay element needs 3 shadows:
  · inset 0 -8px 16px rgba(0,0,0,0.15)  (bottom inner)
  · inset 0 8px 16px rgba(255,255,255,0.8) (top inner highlight)
  · 0 8px 16px rgba(76,29,149,0.15) (outer, colored, soft)
- Padding: 28px on cards, chunky buttons
- Colors: pastels only — lavender, peach, mint, sky, cream. NEVER saturated.
- Typography: Nunito 700 headlines, 400 body. NEVER thin weights or serifs.
- NEVER sharp corners, flat shadows, black drop shadows, hard borders, or all-caps labels.
```

### Image generation
```
claymorphism UI design, soft puffy 3D clay buttons and cards, pastel lavender
and mint palette, rounded chunky shapes, dual shadows, glossy highlights,
playful, friendly, cute, mobile app, dribbble —ar 16:9 —style raw
```

## When the user's request is vague

If they say "make it cute" / "make it friendly" / "make it playful" / "kid-friendly" without naming a style, **propose Claymorphism** and confirm:
> "그런 느낌을 원하신다면 Claymorphism이 잘 맞을 것 같아요 — 말랑한 점토 같은 버튼과 카드가 톡 튀어나온, 귀엽고 친근한 스타일이요. 진행할까요?"

## Common mistakes to watch for

1. **Flat single shadow** → must be the dual inner+outer shadow trick.
2. **Sharp corners** → minimum 20px, prefer 24px+.
3. **Black drop shadow** → should be colored, soft, low-opacity.
4. **Saturated colors** → pastels only. The depth comes from shadows.
5. **Thin fonts** → use rounded sans at 600+ weight.
6. **Borders on clay elements** → kill the "extruded" illusion; remove them.
7. **All-caps labels** → too aggressive; use sentence case.

## Mix-and-match (advanced)

Claymorphism combines well with:
- **+ Bento Grid** → each bento cell is a puffy clay card (very 2026)
- **+ Pastel Aurora background** → clay cards floating on soft gradients
- **+ Dark mode** → glowing pastel clay on deep navy (Apple visionOS feel)
- **+ Illustration-heavy** → clay UI pairs naturally with cute mascots/characters
