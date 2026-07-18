# Neo-Brutalism — Copy-Paste Prompts

> 아래 프롬프트들을 그대로 복사해서 쓰세요. `[...]` 부분만 용도에 맞게 바꾸면 됩니다.

---

## 🟦 A. UI 코딩용 (한국어)

**대상**: v0, Cursor, Lovable, Bolt, Claude, ChatGPT 등 코드 생성 툴

```
Neo-Brutalism 스타일로 [랜딩 페이지 / 대시보드 / 포트폴리오]를 만들어줘.

핵심 스펙:
- 배경: #FFF9E6 (따뜻한 크림 옐로우), 절대 순백(#FFFFFF) 금지
- 모든 보더: 2px solid #0A0A0A
- 모든 박스 그림자: 4px 4px 0 #0A0A0A (blur 0, 그림자 색은 검정)
- 라디우스: 직각(0px) 또는 16px 중 택일. 4~8px 같은 중간값 금지
- 시그니처 컬러: #FFD803 (옐로우), 강조에 #FF6B9D (핑크), #00E5FC (시안)
- 타이포: 헤드라인은 Space Grotesk 700, 56px. 본문은 Inter 400, 17px
- 모든 라벨/버튼 텍스트: 대문자, letter-spacing 0.05em
- 그라데이션, 글래스 블러, 부드러운 그림자 절대 사용 금지
- 버튼 hover: transform translate(-2px,-2px), 그림자 6px 6px 0

레이아웃: 헤더(로고+네비) → 히어로(대형 헤드라인+CTA 버튼 2개) →
피처 카드 3컬럼 그리드(각 카드마다 보더+오프셋 그림자) → 푸터

간격: 섹션 간 80px, 카드 간 24px. 충분한 여백 필수.
```

---

## 🟦 B. UI coding prompt (English)

**For**: v0, Cursor, Lovable, Bolt, international tools

```
Build a [landing page / dashboard / portfolio] in Neo-Brutalism style.

Core spec:
- Background: #FFF9E6 (warm cream yellow). NEVER pure white #FFFFFF.
- All borders: 2px solid #0A0A0A
- All box shadows: 4px 4px 0 #0A0A0A (zero blur, black offset shadow)
- Border-radius: either 0px (sharp) OR 16px (large round). Never mid values like 4-8px.
- Signature palette: #FFD803 (yellow primary), accents #FF6B9D (pink), #00E5FC (cyan)
- Typography: Space Grotesk 700 for headlines (56px), Inter 400 for body (17px)
- All labels/buttons: UPPERCASE, letter-spacing 0.05em
- ABSOLUTELY NO gradients, glass blur, or soft drop shadows
- Button hover: transform translate(-2px,-2px), shadow becomes 6px 6px 0

Layout: Header (logo + nav) → Hero (huge headline + 2 CTA buttons) →
3-column feature card grid (each card has border + offset shadow) → Footer

Spacing: 80px between sections, 24px between cards. Generous whitespace required.
```

---

## 🟪 C. 이미지 생성용 — UI 무드보드

**대상**: Midjourney, DALL·E, Stable Diffusion

```
neo-brutalism web UI design, bold black 2px borders, hard offset shadows,
fluorescent yellow #FFD803 and hot pink, cream background, Space Grotesk
typography, playful geometric cards, high contrast, flat — no gradients,
no glass, dribbble, awwwards, ui/ux —ar 16:9 —style raw
```

---

## 🟪 D. 이미지 생성용 — 일러스트/그래픽

```
neo-brutalism illustration, thick black outlines, flat saturated colors,
chunky shapes, no shading, no gradients, sticker style, graphic heavy,
bold —ar 1:1 —style raw
```

---

## 🟩 E. Tailwind CSS 토큰 (즉시 적용)

`tailwind.config.js`에 아래 내용을 extend로 추가하세요:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        cream: '#FFF9E6',
        brand: {
          yellow: '#FFD803',
          pink: '#FF6B9D',
          cyan: '#00E5FC',
          lime: '#A6FF4D',
        },
        ink: '#0A0A0A',
      },
      borderRadius: {
        // 중간값 제거 — 0 아니면 16 이상
        none: '0px',
        xl: '16px',
      },
      boxShadow: {
        brutal: '4px 4px 0 #0A0A0A',
        'brutal-sm': '2px 2px 0 #0A0A0A',
        'brutal-lg': '8px 8px 0 #0A0A0A',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
}
```

그리고 버튼 컴포넌트:

```jsx
// Neo-Brutalism button
<button className="bg-brand-yellow text-ink border-2 border-ink shadow-brutal
                   rounded-none px-5 py-2.5 font-mono font-bold uppercase
                   tracking-wider text-sm
                   hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg
                   transition-transform">
  Click me
</button>
```

---

## 🟥 F. 다크 모드 변형 (Cyberpunk 느낌)

어두운 배경 + 네온 보더/그림자를 원할 때:

```
Neo-Brutalism 다크 모드 변형으로 만들어줘.

- 배경: #0A0A0A (제트 블랙)
- 모든 보더: 2px solid, 색상은 네온 — #00E5FC (시안) 또는 #FF6B9D (핑크)
- 그림자: 4px 4px 0 동일 네온 색상 (글로우 느낌)
- 텍스트: #FFF9E6 (크림) — 순백 말고
- 포인트 컬러: 형광 네온 1~2종만
- 그라데이션/부드러운 그림자 금지
```

---

## 💡 프롬프트 팁

- 툴이 스타일을 무시하고 "깔끔하게" 만들면 **절대 금지어**(`no gradients / no glass / flat only`)를 강하게 넣으세요.
- 라디우스가 어중간하게 나오면 `"sharp corners OR 16px radius, never between"`을 명시하세요.
- 결과가 너무 "시끄러우면" 강조 색을 1개로 줄이고(옐로우만), 나머지는 흑백으로 가세요.
