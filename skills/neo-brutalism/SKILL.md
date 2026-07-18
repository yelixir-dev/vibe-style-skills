---
name: neo-brutalism
description: How to design and build interfaces in Neo-Brutalism (Neubrutalism) style. Use whenever the user mentions Neo-Brutalism, neubrutalism, brutalist UI, "Gumroad style", or asks for bold borders, hard offset shadows, fluorescent/cream-yellow aesthetics, or a loud/raw/playful look. Also trigger when the user wants a trendy/Gen-Z/creator-economy/AI-product aesthetic and hasn't named a specific style — propose Neo-Brutalism as the default and confirm.
---

# Neo-Brutalism (Neubrutalism)

> *"노출된 뼈대, 가공되지 않은 색, 숨기지 않는 보더."*
> Raw structure, unfiltered color, borders that don't hide.

## When to apply this skill

Apply when the user wants any of:
- A **loud / bold / playful / trendy** web or app UI
- Something **Gumroad-like**, **Linear-like**, or "vibe-coded" looking
- A **creator-economy**, **Gen-Z**, **developer-tool**, **AI-product**, or **portfolio** site
- An explicitly **brutalist** or **neubrutalist** look

Do **not** apply for: finance/medical/legal (too noisy for trust), luxury (use Art Deco/Minimalism), data-dense B2B dashboards (use IBM Carbon), or government/accessibility-first services.

## Core grammar (the non-negotiables)

These five rules define the style. Violating any one of them breaks it.

### 1. Borders
- **Every** container, button, card, input, badge gets a `2px solid #0A0A0A` border.
- Never use 1px (too thin), dashed (wrong tone), or colored borders as the primary border.

### 2. Shadows — hard offset, zero blur
- `box-shadow: 4px 4px 0 #0A0A0A` (offset, **zero blur**, solid black).
- Larger elements: `6px 6px 0` or `8px 8px 0`.
- On hover: `transform: translate(-2px, -2px)` + shadow grows to `6px 6px 0`.
- **NEVER** use soft/blurred shadows (`0 4px 12px rgba(...)`) — that instantly kills the style.

### 3. Color — cream background + fluorescent accents
- **Background**: warm cream `#FFF9E6` (or `#FFFBEB`). **Never pure white `#FFFFFF`** — it looks cold and kills the warmth.
- **Signature primary**: fluorescent yellow `#FFD803` (the "Gumroad yellow").
- **Accents** (pick 1–2, not all): hot pink `#FF6B9D`, cyan `#00E5FC`, lime `#A6FF4D`.
- **Text & borders**: jet black `#0A0A0A` (not pure `#000`, slightly softer).
- **NEVER** use gradients, mesh, or aurora effects. Solid fills only.
- Dark-mode variant: background `#0A0A0A`, accents become neon glows.

### 4. Border-radius — sharp OR large, never in between
- `0px` (sharp corners) **OR** `16px`+ (large rounded).
- **Never** `4px`, `6px`, `8px`, `12px` — these middle values look indecisive.
- Be consistent within a project: pick one and stick to it.

### 5. Typography — bold geometric or monospace
- **Headlines**: Space Grotesk 700, Archivo Black, or Clash Display. Size 48–96px on desktop. Weight 700–900.
- **Body**: Inter, DM Sans, or Pretendard (Korean). Weight 400–500, size 16–18px.
- **Labels / buttons / captions**: Space Mono or JetBrains Mono, **UPPERCASE**, `letter-spacing: 0.05em`.
- No thin/light weights for headlines. No serif fonts (wrong era).

## Layout

- Simple single-column **or** clean 2–3 column grid. Avoid complex asymmetric layouts.
- Every container is a "card" — border + offset shadow gives depth.
- Buttons are square cards with hard shadow, depress on click.
- **Generous whitespace** between sections (60–96px) and between cards (20–32px). The loud colors need room to breathe.

## Forbidden (will break the style)

| Don't | Why |
|---|---|
| Pure white `#FFFFFF` background | Cold, kills the warm "brutal" feel |
| Soft/blurred shadows | Instantly looks like generic SaaS |
| Gradients of any kind | Conflicts with the flat, honest aesthetic |
| Mid border-radius (4–12px) | Looks indecisive — either commit to sharp or to round |
| More than 3 accent colors at once | Visual chaos, loses hierarchy |
| Serif headline fonts | Wrong era — this is geometric sans territory |
| Glassmorphism / backdrop-blur | The philosophical opposite of brutalism |

## Reference sites (for the AI to recall visual patterns)

- **gumroad.com** — modern neubrutalism canonical reference (cream + yellow + offset shadow)
- **linear.app** — dark-mode brutal variant (restrained, B2B-safe)
- **figma.com** (marketing) — tech-company softened brutalism
- **retroui.dev** — neubrutalist component library (living spec)

## Prompt templates

When the user asks for something in this style, you can hand them (or use directly) these ready prompts. Full versions live in `prompts/neo-brutalism.md`.

### UI coding prompt (paste into v0 / Cursor / Lovable / Bolt)

```
Build a [landing page / dashboard / portfolio] in Neo-Brutalism style.

Core spec:
- Background: #FFF9E6 warm cream. NEVER pure white.
- All borders: 2px solid #0A0A0A
- Box shadows: 4px 4px 0 #0A0A0A (zero blur)
- Border-radius: 0px OR 16px. Never mid values like 4-8px.
- Palette: #FFD803 yellow primary, accents #FF6B9D pink / #00E5FC cyan
- Typography: Space Grotesk 700 headlines, Inter 400 body
- Labels/buttons: UPPERCASE, letter-spacing 0.05em
- NO gradients, glass blur, or soft shadows
- Button hover: translate(-2px,-2px), shadow 6px 6px 0
```

### Image generation (Midjourney / DALL·E)

```
neo-brutalism web UI, bold black 2px borders, hard offset shadows,
fluorescent yellow #FFD803 and hot pink, cream background,
Space Grotesk typography, playful geometric cards, flat — no gradients,
no glass, dribbble, awwwards —ar 16:9 —style raw
```

## When the user's request is vague

If they say "make it trendy" / "make it pop" / "make it Gen-Z" without naming a style, **propose Neo-Brutalism** and confirm before building. Example:

> "그런 느낌을 원하신다면 Neo-Brutalism이 잘 맞을 것 같아요 — 크림 배경에 형광 옐로우, 검정 보더, 오프셋 그림자 스타일이요. 이대로 진행할까요, 아니면 다른 스타일이 더 끌리시나요?"

Don't silently default — confirm, because the look is strong and not every "trendy" request actually wants it.

## Common mistakes to watch for (when reviewing AI output)

1. **White background crept in** → swap to `#FFF9E6`.
2. **Soft shadow on some element** → replace with `4px 4px 0 #0A0A0A`.
3. **8px border-radius** → change to either 0 or 16.
4. **Gradient "just for accent"** → remove, use solid color.
5. **Headlines too thin** → bump weight to 700+.
6. **Pink/cyan text on colored background with poor contrast** → use black text on bright fills; only use white on the very darkest fills.

## Mix-and-match (advanced)

Neo-Brutalism combines well with:
- **+ Swiss grid** → "intellectual rebellion": Swiss precision in layout, brutal cards.
- **+ Bento grid** → trendy SaaS: each bento cell is a brutal card.
- **+ Cyberpunk dark** → Web3/gamer: dark `#0A0A0A` bg, neon cyan/pink borders & shadows.
- **+ Monospace overload** → developer-tool aesthetic: headlines in mono too.
