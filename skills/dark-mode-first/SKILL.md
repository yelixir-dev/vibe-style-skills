---
name: dark-mode-first
description: How to design and build Dark Mode First interfaces (darkness as the primary aesthetic, not just an option). Use whenever the user mentions dark mode first, dark UI, dark theme primary, "Vercel style", "Linear style", "developer tool aesthetic", always-dark interface, OLED-friendly design, or asks for a sleek/dark/tech/premium aesthetic where dark is the default, not a toggle. Also trigger when the user wants a developer tool, crypto/web3, or modern SaaS aesthetic and hasn't named a style — propose Dark Mode First as the default and confirm.
---

# Dark Mode First

> *"어둠이 기본이다 — 빛은 포인트로."*
> Darkness is the default — light is the accent.

## When to apply this skill

Apply when the user wants any of:
- **Dark mode as the DEFAULT** (not a toggle, but the primary experience)
- **Vercel / Linear / Arc / Raycast** style developer tool aesthetic
- **OLED-friendly / battery-saving** design
- **Premium / sleek / modern tech** feel
- **Crypto / web3 / AI product** aesthetic
- A **developer-focused** tool where dark mode is expected

Do **not** apply for: children/education apps (kids prefer bright), accessibility contexts needing maximum contrast (some users need light mode), long-form reading (e-readers prove light mode reads better for long sessions), or print-oriented design (dark backgrounds waste ink).

## Core grammar (the non-negotiables)

### 1. The base is deep, not pure black
- Background: `#0a0a0a`, `#0f172a`, `#0d1117` (GitHub dark), or `#000000` (OLED pure).
- **Never `#333` or grey** as base — that's dim, not dark. Go deep.
- Layered darks: base `#0a0a0a`, surface `#141414`, elevated `#1a1a1a`. Subtle distinction through slight lightness shifts.

### 2. Text contrast is everything
- Primary text: `#fafafa` or `#f8fafc` (near-white, NOT pure white — slightly softer).
- Secondary text: `#a1a1aa` (zinc-400 range) — readable but de-emphasized.
- Muted/tertiary: `#71717a` (zinc-500) — for placeholders, metadata.
- **WCAG AA minimum**: 4.5:1 for body text. Dark mode makes this easy IF you use near-white text.

### 3. Neon/electric accents are the life
- Accents pop dramatically on dark backgrounds:
  - Electric blue `#3b82f6`, cyan `#06b6d4`, emerald `#10b981`
  - Hot pink `#ec4899`, violet `#8b5cf6`, amber `#f59e0b`
- Accents used SPARINGLY — buttons, links, active states, key data points.
- **Glow effects**: `box-shadow: 0 0 20px rgba(59,130,246,0.4)` — neon glows are dark mode's signature.

### 4. Borders and dividers are subtle
- Border: `1px solid rgba(255,255,255,0.08)` — barely visible, just enough to separate.
- Dividers: same subtle white-on-dark. Never `#333` solid borders (too harsh).
- Card elevation: slightly lighter background `#141414` + subtle border, NOT heavy shadows.

### 5. Shadows are different in dark mode
- Heavy drop shadows are invisible on dark backgrounds.
- Instead: **subtle light glow** (if accent color) or **lighter surface** (elevation via color, not shadow).
- `box-shadow: 0 0 0 1px rgba(255,255,255,0.05)` for subtle outlines.

## Color strategy

### The dark base layers
```css
--bg-base: #0a0a0a;      /* page background */
--bg-surface: #141414;   /* cards */
--bg-elevated: #1a1a1a;  /* modals, dropdowns */
--bg-hover: #222222;     /* hover states */
```

### Accent palettes (pick one family)
- **Blue family** (Vercel/Linear feel): `#3b82f6` primary, `#06b6d4` secondary
- **Green family** (success/dev): `#10b981` primary, `#84cc16` secondary
- **Purple family** (premium/AI): `#8b5cf6` primary, `#a855f7` secondary
- **Pink family** (bold/web3): `#ec4899` primary, `#f43f5e` secondary

## Typography

- **Clean sans-serif**: Inter, SF Pro, Geist (Vercel's font), or IBM Plex Sans.
- **Headlines**: weight 600-700 (not 900 — too heavy on dark).
- **Body**: weight 400, 16-17px, line-height 1.6-1.7 (generous for readability).
- **Mono**: JetBrains Mono, Fira Code, or SF Mono for code/technical labels.
- **Letter-spacing**: slightly relaxed for body (`0.01em`) — dark mode reads differently.

## Forbidden (will break the style)

| Don't | Why |
|---|---|
| Grey base (#333, #2d2d2d) | Too dim — use deep near-black |
| Heavy drop shadows | Invisible on dark — use glow/surface elevation |
| Pure white text (#ffffff) | Too harsh — use #fafafa or #f8fafc |
| Many accent colors at once | One accent family — dark mode rewards restraint |
| Solid visible borders (#555) | Too harsh — use rgba(255,255,255,0.08) |
| Low-contrast secondary text | WCAG 4.5:1 minimum for all text |
| Light mode as default | Dark mode FIRST means dark is primary, not a toggle |

## Reference sites

- **vercel.com** — canonical dark mode first developer tool
- **linear.app** — dark premium SaaS with violet accents
- **arc.net** — browser with dark, friendly aesthetic
- **raycast.com** — launcher tool, dark with red accents
- **warp.dev** — terminal, dark with GPU-accelerated feel

## Prompt templates

Full versions in `prompts/dark-mode-first.md`. Quick reference:

### UI coding prompt
```
Build a [developer tool dashboard / SaaS landing] in Dark Mode First style.

Core spec:
- Base background: #0a0a0a (deep near-black, NEVER #333 grey)
- Surface layers: #141414 (cards), #1a1a1a (elevated), #222222 (hover)
- Borders: 1px solid rgba(255,255,255,0.08) — barely visible
- Text: #fafafa primary, #a1a1aa secondary, #71717a muted
- Accent: ONE family — blue #3b82f6 (or violet #8b5cf6, emerald #10b981)
- Accent glow: box-shadow 0 0 20px rgba(accent, 0.4) on interactive elements
- Elevation: lighter surface color, NOT heavy shadows
- Typography: Inter 400/600, JetBrains Mono for code
- NEVER: grey base, heavy drop shadows, pure white text, multiple accent families
```

### Image generation
```
dark mode UI, deep near-black background #0a0a0a, electric blue accents,
subtle borders, glowing interactive elements, developer tool aesthetic,
Vercel style, sleek, premium, minimal —ar 16:9 —style raw
```

## When the user's request is vague

If they say "make it sleek" / "make it modern tech" / "developer-friendly" / "Vercel-like" without naming a style, **propose Dark Mode First** and confirm:
> "그런 느낌을 원하신다면 Dark Mode First가 잘 맞을 것 같아요 — 어두운 배경에 네온 액센트가 빛나는, Vercel이나 Linear 같은 스타일이요. 진행할까요?"

## Common mistakes to watch for

1. **Grey base (#333)** → use deep near-black (#0a0a0a). Grey looks dim, not dark.
2. **Heavy drop shadows** → invisible on dark. Use surface elevation + glow.
3. **Pure white text** → too harsh. Use #fafafa.
4. **Too many accents** → one family only. Dark mode rewards restraint.
5. **Visible borders (#555)** → use rgba(255,255,255,0.08).
6. **Low-contrast text** → verify all text passes WCAG 4.5:1.
7. **Forgetting hover/active states** → dark mode needs clear interaction feedback (lighter surface + glow).

## Mix-and-match (advanced)

Dark Mode First combines well with:
- **+ Aurora Gradient** → natural fit, aurora is dark by default
- **+ Glassmorphism** → dark glass (premium Stripe-at-night feel)
- **+ Bento Grid** → dark bento with neon cell accents
- **+ Cyberpunk** → push accents to neon extreme for web3/gaming
