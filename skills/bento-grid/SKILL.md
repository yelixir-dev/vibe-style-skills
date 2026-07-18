---
name: bento-grid
description: How to design and build layouts in Bento Grid style (also called bento box layout, Apple-style modular grid). Use whenever the user mentions bento grid, bento box, bento layout, modular card grid, Apple-style feature grid, "Apple-style section", or asks for a layout with unequal-sized rectangular cards/tiles arranged in a grid. Also trigger when the user wants to showcase multiple features/products in a scannable, modular way and hasn't named a specific style — propose Bento Grid as the default and confirm.
---

# Bento Grid (Bento Box Layout)

> *"일본 도시락처럼, 각기 다른 크기의 방이 모여 하나의 완성된 공간을 만든다."*
> Like a Japanese bento box — rooms of different sizes compose a complete space.

## When to apply this skill

Apply when the user wants any of:
- A **modular / card-based / boxy** layout with unequal-sized cells
- An **Apple-style** feature or product showcase section
- A **scannable feature grid** for SaaS marketing pages
- A **dashboard** with mixed-size widgets
- Showing **many capabilities at once** without overwhelming

Do **not** apply for: long-form article reading (needs flow, not grid), single hero message (overkill), or data tables (use real tables). Bento is for *showcasing*, not *reading*.

## Core grammar (the non-negotiables)

### 1. The bento principle: unequal cells, one grid
- All cells live in **one CSS Grid** (usually 3–4 columns on desktop).
- Cells span **different numbers of rows and columns** — that's the whole point.
- Some cells are 1×1, some are 2×1, some 1×2, some 2×2. The asymmetry creates rhythm.

### 2. The hierarchy: one hero cell
- Designate **one large cell** (usually 2×2 or spans full width) as the visual anchor.
- The hero cell carries the main message or hero image.
- Other cells support it — smaller, secondary content.

### 3. Gap is part of the design
- Use a **consistent gap** between cells (16–24px on desktop, 12–16px mobile).
- The gaps create the "bento box divider" feel. Inconsistent gaps = broken.

### 4. Each cell is self-contained
- Every cell should make sense **on its own** — a complete mini-card.
- Cell content: icon/illustration + title + short description (or just visual).
- Don't let content bleed across cells.

### 5. Rounded corners, generous padding
- Border-radius: **16–24px** on cells. Sharp corners feel wrong for bento.
- Internal padding: 24–32px. Cells need to breathe.
- Backgrounds can be flat color, subtle gradient, or contain imagery.

## Layout patterns

### Pattern A: Classic Apple feature grid (3 columns)
```
┌────────────┬────────────┐
│            │   small     │
│   HERO     ├────────────┤
│   (2×2)    │   small     │
│            ├──────┬─────┤
│            │ med  │ med │
├─────┬──────┴──────┴─────┤
│smol │      wide         │
└─────┴───────────────────┘
```

### Pattern B: SaaS feature showcase (4 columns)
```
┌────┬────┬────────────┐
│ 1  │ 2  │            │
├────┴────┤   HERO     │
│   3     │   (2×2)    │
├────┬────┤            │
│ 4  │ 5  │            │
└────┴────┴────────────┘
```

### Pattern C: Dashboard widgets (mixed)
- Each widget is a cell. Chart widgets span wider, KPI widgets are 1×1.
- Bento works beautifully for dashboards because data naturally has hierarchy.

## CSS implementation

```css
.bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* or 4 */
  gap: 16px;
}

.bento-cell {
  border-radius: 20px;
  padding: 28px;
  background: #f5f5f7;  /* Apple grey, or any color */
}

/* Cell size variants */
.cell-hero    { grid-column: span 2; grid-row: span 2; }
.cell-wide    { grid-column: span 2; }
.cell-tall    { grid-row: span 2; }
.cell-square  { /* default 1×1 */ }

/* Responsive: collapse to fewer columns */
@media (max-width: 768px) {
  .bento { grid-template-columns: repeat(2, 1fr); }
  .cell-hero, .cell-wide { grid-column: span 2; }
}
@media (max-width: 480px) {
  .bento { grid-template-columns: 1fr; }
  .bento-cell { grid-column: auto !important; grid-row: auto !important; }
}
```

## Color & content strategy

Unlike brutalism/glassmorphism, **bento grid is layout-first** — the color/content style is flexible:

- **Apple style**: light grey `#f5f5f7` cells on white, product imagery in hero cell, bold black headlines. Clean, premium.
- **Dark mode bento**: dark cells `#1a1a2e` with neon accents. Each cell glows.
- **Colorful bento**: each cell a different brand color (yellow, pink, cyan, lime) — playful, trendy.
- **Glass bento**: combine with Glassmorphism — each cell is a glass card over aurora background.

## Typography

- **Headlines inside cells**: 20–32px, weight 600–700. Each cell has its own mini-headline.
- **Hero cell headline**: 40–56px, the biggest text on the page.
- **Body**: 14–16px, line-height 1.5. Keep it short — cells aren't for reading.
- **Labels/eyebrows**: 11–12px, uppercase, letter-spacing — small category tags above cell titles.

## Forbidden (will break the style)

| Don't | Why |
|---|---|
| Equal-sized cells only | That's just a regular grid, not bento. Asymmetry is the point. |
| Inconsistent gaps | Destroys the "bento box" structure |
| Content bleeding across cells | Each cell must be self-contained |
| Sharp corners (<12px) | Bento cells are soft, rounded objects |
| Too much text per cell | Cells are showcases, not articles — 2–3 lines max |
| No hero cell | Without a visual anchor, bento feels random |
| More than 5 columns | Gets chaotic; 3–4 is the sweet spot |

## Reference sites

- **apple.com/iphone** (or any Apple product page) — canonical bento grid reference
- **linear.app/features** — SaaS feature bento, dark mode variant
- **notion.so** (homepage) — playful colorful bento
- **stripe.com** — premium bento with subtle gradients

## Prompt templates

Full versions in `prompts/bento-grid.md`. Quick reference:

### UI coding prompt
```
Build a [feature showcase / product page section] using Bento Grid layout.

Core spec:
- CSS Grid, 3 columns on desktop, 2 on tablet, 1 on mobile
- Unequal cells: one hero cell (2×2), 2-3 wide cells (2×1), rest 1×1
- Gap: 16px between cells (consistent!)
- Border-radius: 20px on all cells
- Cell padding: 28px internal
- Hero cell: large headline (48px) + product visual
- Other cells: icon + title (24px) + 1-line description
- Color: Apple-style — light grey #f5f5f7 cells on white, OR dark mode
- ABSOLUTELY NO equal-sized cells — asymmetry is the whole point
- NO content bleeding across cells — each is self-contained
- Responsive: collapse columns on smaller screens
```

### Image generation
```
bento grid UI layout, modular card-based design, unequal-sized rectangular
cells in a grid, Apple style, clean, rounded corners, feature showcase,
modern, dribbble, awwwards —ar 16:9 —style raw
```

## When the user's request is vague

If they say "make it scannable" / "showcase our features" / "Apple-style section" without naming a style, **propose Bento Grid** and confirm:
> "여러 기능을 한눈에 보여주고 싶으시다면 Bento Grid가 잘 맞을 것 같아요 — 크기가 다른 카드들이 모듈식으로 배열되는 Apple 스타일 레이아웃이요. 진행할까요?"

## Common mistakes to watch for

1. **All cells same size** → introduce a hero cell (2×2) and varied spans.
2. **Inconsistent gap** → set one `gap` value on the grid, never per-cell margins.
3. **Too much text in a cell** → cut to headline + 1 line. Cells are posters, not paragraphs.
4. **No visual hierarchy** → make the hero cell visibly bigger and more visually rich.
5. **Sharp corners** → minimum 16px, prefer 20px.
6. **Not responsive** → bento must collapse gracefully (3→2→1 columns).

## Mix-and-match (advanced)

Bento Grid combines well with:
- **+ Glassmorphism** → each cell is a glass card (Stripe premium feel)
- **+ Neo-Brutalism** → each cell is a brutal card with offset shadow (trendy)
- **+ Aurora gradient background** → cells float over colorful backdrop
- **+ Dark mode** → neon-accented cells, each glows independently
