# Bento Grid — Copy-Paste Prompts

> 아래 프롬프트들을 그대로 복사해서 쓰세요. `[...]` 부분만 용도에 맞게 바꾸면 됩니다.

---

## 🟦 A. UI 코딩용 (한국어)

**대상**: v0, Cursor, Lovable, Bolt, Claude, ChatGPT

```
Bento Grid 레이아웃으로 [피처 쇼케이스 / 제품 페이지 섹션]을 만들어줘.

핵심 스펙:
- CSS Grid, 데스크톱 3컬럼, 태블릿 2컬럼, 모바일 1컬럼 (반응형 필수)
- 셀 크기는 불규칙해야 함 — 이게 벤토의 핵심:
  · 히어로 셀 1개: 2×2 (grid-column span 2, grid-row span 2)
  · 와이드 셀 2-3개: 2×1 (grid-column span 2)
  · 나머지: 1×1 기본
- 셀 간 gap: 16px (일관되게 — 셀마다 다르면 안 됨)
- 모든 셀 border-radius: 20px
- 셀 내부 padding: 28px
- 히어로 셀: 대형 헤드라인(48px) + 제품 비주얼
- 다른 셀: 아이콘 + 제목(24px) + 1줄 설명
- 컬러: Apple 스타일 — 라이트 그레이 #f5f5f7 셀 + 흰 배경, 또는 다크 모드

절대 금지:
- 모든 셀이 같은 크기 (비대칭이 핵심)
- 셀 간 gap이 다름
- 셀 안에 긴 텍스트 (2-3줄 이하)
- 뾰족한 모서리 (12px 미만 라디우스)
- 셀 간 콘텐츠가 섞임 (각 셀은 독립적)

반응형: 작은 화면에서 컬럼 수 줄어들 때 셀 span도 자동 조정
```

---

## 🟦 B. UI coding prompt (English)

```
Build a [feature showcase / product page section] using Bento Grid layout.

Core spec:
- CSS Grid, 3 columns desktop, 2 tablet, 1 mobile (responsive required)
- Cells must be UNEQUAL sizes — this is the essence of bento:
  · 1 hero cell: 2×2 (grid-column span 2, grid-row span 2)
  · 2-3 wide cells: 2×1 (grid-column span 2)
  · Rest: 1×1 default
- Gap: 16px between cells (consistent — never per-cell margins)
- All cells border-radius: 20px
- Cell internal padding: 28px
- Hero cell: large headline (48px) + product visual
- Other cells: icon + title (24px) + 1-line description
- Color: Apple-style — light grey #f5f5f7 cells on white, OR dark mode

ABSOLUTELY NO:
- All cells same size (asymmetry is the whole point)
- Inconsistent gaps
- Long text in cells (max 2-3 lines)
- Sharp corners (under 12px radius)
- Content bleeding across cells

Responsive: when columns reduce, cell spans auto-adjust
```

---

## 🟪 C. 이미지 생성용 — UI 무드보드

```
bento grid UI layout, modular card-based design, unequal-sized rectangular
cells in a grid, Apple style, clean, rounded corners, feature showcase,
modern, premium, dribbble, awwwards —ar 16:9 —style raw
```

---

## 🟪 D. 다크 모드 변형 (프리미엄 SaaS)

```
Build a dark-mode Bento Grid for a SaaS feature showcase.

- Background: #0a0e1a (deep navy)
- Cells: #1a1f2e with subtle border 1px solid rgba(255,255,255,0.08)
- Each cell glows with a different neon accent (cyan, pink, violet, lime)
- Hero cell: 2×2 with animated gradient or product screenshot
- Border-radius: 24px, gap: 16px, padding: 32px
- Typography: Inter 600 headlines, white text
- Hover: cell lifts slightly (translateY(-4px)) + glow intensifies
```

---

## 🟩 E. CSS 템플릿 (즉시 적용)

```css
.bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
}

.bento-cell {
  border-radius: 20px;
  padding: 28px;
  background: #f5f5f7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 180px;
  transition: transform 200ms ease;
}
.bento-cell:hover {
  transform: translateY(-4px);
}

/* 셀 크기 변형 */
.cell-hero  { grid-column: span 2; grid-row: span 2; min-height: 376px; }
.cell-wide  { grid-column: span 2; }
.cell-tall  { grid-row: span 2; }

/* 히어로 셀 스타일 */
.cell-hero {
  background: #000;
  color: #fff;
  padding: 40px;
}
.cell-hero h2 { font-size: 48px; line-height: 1.05; }

/* 반응형 */
@media (max-width: 768px) {
  .bento { grid-template-columns: repeat(2, 1fr); }
  .cell-hero, .cell-wide { grid-column: span 2; }
}
@media (max-width: 480px) {
  .bento { grid-template-columns: 1fr; }
  .bento-cell { grid-column: auto !important; grid-row: auto !important; min-height: 160px; }
}
```

HTML 구조:
```html
<div class="bento">
  <div class="bento-cell cell-hero">
    <h2>메인 메시지</h2>
    <p>히어로 셀은 가장 크고 시선을 사로잡는다</p>
  </div>
  <div class="bento-cell">
    <h3>피처 1</h3>
    <p>짧은 설명</p>
  </div>
  <div class="bento-cell cell-wide">
    <h3>와이드 피처</h3>
    <p>2컬럼을 차지하는 셀</p>
  </div>
  <!-- 더 많은 셀... -->
</div>
```

---

## 💡 프롬프트 팁

- **"그리드로 만들어줘"만 하면 같은 크기 카드가 나옵니다** — 반드시 "불규칙한 크기"와 "히어로 셀"을 명시하세요.
- 툴이 너무 많은 셀을 만들면 "최대 6-8개 셀, 그 중 1개는 2×2 히어로"라고 제한하세요.
- Apple 스타일이 안 나오면 `border-radius: 20px`, `background: #f5f5f7`, `gap: 16px`를 구체적으로 지정하세요.
- 다크 모드가 필요하면 배경 `#0a0e1a`, 셀마다 다른 네온 액센트를 넣으라고 명시하세요.
- 모바일에서 깨지면 반응형 break point(`768px`, `480px`)에서 컬럼 수와 span을 자동 조정하라고 추가하세요.
