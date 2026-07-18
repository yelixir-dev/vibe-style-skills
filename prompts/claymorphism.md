# Claymorphism — Copy-Paste Prompts

> 아래 프롬프트들을 그대로 복사해서 쓰세요.

---

## 🟦 A. UI 코딩용 (한국어)

```
Claymorphism 스타일로 [온보딩 화면 / 대시보드 / 모바일 앱]을 만들어줘.

핵심 스펙:
- 배경: 파스텔 #f3f0ff (라벤더) 또는 흰색
- 카드/버튼: 파스텔 필, border-radius 24px (카드) / 999px (알약)
- 점토 트릭 (핵심) — 모든 clay 요소에 그림자 3개:
  · inset 0 -8px 16px rgba(0,0,0,0.15)  (아래쪽 inner — 두께감)
  · inset 0 8px 16px rgba(255,255,255,0.8) (위쪽 inner — 빛)
  · 0 8px 16px rgba(76,29,149,0.15) (바깥쪽 drop, 컬러, 부드럽게)
- padding: 카드 28px, 통통한 버튼
- 컬러: 파스텔만 — 라벤더, 피치, 민트, 스카이, 크림. 절대 채도 높은 색 금지.
- 타이포: Nunito 700 헤드라인, 400 본문. 얇은 weight/세리프 금지.
- 절대 금지: 뾰족한 모서리, flat 단일 그림자, 검정 drop shadow, hard border, ALL CAPS 라벨.
```

---

## 🟦 B. English

```
Build a [onboarding / dashboard / mobile app] in Claymorphism style.

- Background: pastel #f3f0ff (lavender) or white
- Cards/buttons: pastel fills, border-radius 24px / 999px pills
- THE CLAY TRICK — every clay element needs 3 shadows:
  · inset 0 -8px 16px rgba(0,0,0,0.15)  (bottom inner)
  · inset 0 8px 16px rgba(255,255,255,0.8) (top inner highlight)
  · 0 8px 16px rgba(76,29,149,0.15) (outer colored soft drop)
- Padding: 28px cards, chunky buttons
- Colors: pastels only — lavender, peach, mint, sky, cream. NEVER saturated.
- Typography: Nunito 700 headlines, 400 body. NEVER thin weights/serifs.
- NEVER sharp corners, flat shadows, black drop shadows, hard borders, all-caps.
```

---

## 🟪 C. 이미지 생성용 (Midjourney / DALL·E)

```
claymorphism UI design, soft puffy 3D clay buttons and cards, pastel lavender
and mint palette, rounded chunky shapes, dual shadows, glossy highlights,
playful, friendly, cute, mobile app, dribbble —ar 16:9 —style raw
```

---

## 🟩 D. CSS 점토 카드 (즉시 적용)

```css
.clay-card {
  background: #f3f0ff;
  border-radius: 24px;
  padding: 28px;
  /* 점토 트릭 — 3개 그림자 */
  box-shadow:
    inset 0 -8px 16px rgba(0, 0, 0, 0.15),
    inset 0 8px 16px rgba(255, 255, 255, 0.8),
    0 8px 16px rgba(76, 29, 149, 0.15);
}

.clay-button {
  background: #c4b5fd;  /* pastel violet */
  color: #4c1d95;
  border-radius: 999px;
  padding: 14px 32px;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 16px;
  box-shadow:
    inset 0 -6px 12px rgba(76, 29, 149, 0.25),
    inset 0 6px 12px rgba(255, 255, 255, 0.5),
    0 6px 12px rgba(76, 29, 149, 0.2);
  cursor: pointer;
  transition: transform 150ms ease;
}
.clay-button:active {
  transform: scale(0.96);  /* 눌리는 촉감 */
}
```

---

## 🟨 E. 파스텔 팔레트 변형 5종

```css
/* Lavender (기본) */
.clay-lavender { background:#f3f0ff; accent:#8b5cf6; shadow-color:rgba(76,29,149,.15); }

/* Peach */
.clay-peach { background:#fef3f2; accent:#fb7185; shadow-color:rgba(159,18,57,.15); }

/* Mint */
.clay-mint { background:#f0fdf4; accent:#10b981; shadow-color:rgba(6,78,59,.15); }

/* Sky */
.clay-sky { background:#eff6ff; accent:#3b82f6; shadow-color:rgba(30,58,138,.15); }

/* Cream */
.clay-cream { background:#fffbeb; accent:#f59e0b; shadow-color:rgba(120,53,15,.15); }
```

---

## 💡 프롬프트 팁

- **"점토 느낌으로 만들어줘"만 하면** 평범한 카드가 나옵니다. 반드시 **"3개 그림자 (inner bottom + inner top + outer)"**를 명시하세요.
- 툴이 하드보더를 넣으면 **"hard border 없이, 그림자로만 입체감"**이라고 강조하세요.
- 너무 어둡거나 채도가 높게 나오면 **"pastel only, 채도 낮게"**를 추가하세요.
- 버튼이 너무 얇으면 **"chunky, padding 28px, pill shape"**를 지정하세요.
