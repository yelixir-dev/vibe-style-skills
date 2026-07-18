# Glassmorphism — Copy-Paste Prompts

> 아래 프롬프트들을 그대로 복사해서 쓰세요. `[...]` 부분만 용도에 맞게 바꾸면 됩니다.

---

## 🟦 A. UI 코딩용 (한국어)

**대상**: v0, Cursor, Lovable, Bolt, Claude, ChatGPT

```
Glassmorphism 스타일로 [대시보드 / 랜딩 페이지]를 만들어줘.

배경 (매우 중요 — 이게 없으면 글래스가 안 보임):
- 오로라 메쉬 그라데이션: 다크 네이비 #1a1a2e 배경 위에
  #FF6B9D (핑크), #00E5FC (시안), #A6FF4D (라임)의 radial-gradient blob들

글래스 카드 스펙:
- 배경: rgba(255,255,255,0.10) (~10% 흰색)
- backdrop-filter: blur(16px) saturate(180%)
- -webkit-backdrop-filter도 반드시 포함 (Safari용)
- 보더: 1px solid rgba(255,255,255,0.20) (얇은 빛 가장자리)
- 그림자: 0 8px 32px rgba(0,0,0,0.10) (부드럽고 확산된 환경 그림자)
- 라디우스: 20px (16px 이하 금지)
- 안쪽 글로우(선택): box-shadow inset 0 1px 0 rgba(255,255,255,0.25)

타이포:
- 헤드라인: Inter 600, 40px (black weight 금지 — 너무 무거움)
- 본문: Inter 400, 17px, 줄간격 1.6
- 라벨: 소문자 또는 sentence case (ALL CAPS 금지 — 너무 공격적)

절대 금지:
- 플랫 화이트 배경 위에 글래스 카드 (흐림이 안 보임)
- 검정 굵은 보더, hard offset 그림자 (브루탈리즘과 정반대)
- 12px 미만 라디우스
- 완전 투명 rgba(...,0) 또는 완전 불투명 카드
- 글래스 위 저대비 텍스트 (가독성 필수 — 필요시 fill opacity 0.18+로 올릴 것)

레이아웃: 헤더(글래스 네비게이션 바, 상단 고정) →
히어로(대형 헤드라인 + 글래스 CTA 버튼) →
피처 카드 3컬럼 (각 글래스 카드) → 푸터
```

---

## 🟦 B. UI coding prompt (English)

**For**: v0, Cursor, Lovable, Bolt, international tools

```
Build a [dashboard / landing page] with Glassmorphism style.

Background (CRITICAL — without this the glass is invisible):
- Aurora mesh gradient: radial-gradient blobs of #FF6B9D (pink), #00E5FC (cyan),
  #A6FF4D (lime) over a dark navy #1a1a2e base.

Glass cards spec:
- Background: rgba(255,255,255,0.10)
- backdrop-filter: blur(16px) saturate(180%)
- ALWAYS include -webkit-backdrop-filter for Safari
- Border: 1px solid rgba(255,255,255,0.20) (thin light edge)
- Shadow: 0 8px 32px rgba(0,0,0,0.10) (soft ambient)
- Border-radius: 20px (never below 12px)
- Optional inner glow: inset 0 1px 0 rgba(255,255,255,0.25)

Typography:
- Headlines: Inter 600, 40px (never black weight — too heavy)
- Body: Inter 400, 17px, line-height 1.6
- Labels: lowercase or sentence case (NO ALL CAPS — too aggressive)

ABSOLUTELY NO:
- Glass cards on flat white background (blur invisible)
- Heavy black borders, hard offset shadows (that's brutalism, opposite style)
- Border-radius below 12px
- Fully transparent rgba(0) or fully opaque cards
- Low-contrast text over glass — verify legibility, bump fill to 0.18+ if needed

Layout: Header (glass nav bar, sticky) →
Hero (large headline + glass CTA button) →
3-column feature cards (each glass) → Footer
```

---

## 🟪 C. 이미지 생성용 — UI 무드보드

**대상**: Midjourney, DALL·E

```
glassmorphism UI design, frosted glass cards, backdrop blur, translucent
panels floating over vibrant aurora gradient background, soft ambient
shadows, thin light edge highlights, Inter typography, modern, sleek,
premium, Apple style, iOS 26, dribbble, awwwards —ar 16:9 —style raw
```

---

## 🟪 D. 이미지 생성용 — Apple "Liquid Glass" 변형 (iOS 26 느낌)

```
Apple Liquid Glass UI, dynamic refractive glass surfaces, floating glass
panels with specular highlights, content bending at edges, soft depth of
field, vibrant gradient background bleeding through, ultra premium, iOS 26,
visionOS, 2026 —ar 16:9 —style raw
```

---

## 🟩 E. CSS 글래스 카드 (즉시 적용)

```css
/* Aurora 배경 (body 또는 컨테이너에 적용) */
.aurora-bg {
  background:
    radial-gradient(circle at 20% 20%, #FF6B9D 0%, transparent 40%),
    radial-gradient(circle at 80% 30%, #00E5FC 0%, transparent 40%),
    radial-gradient(circle at 50% 80%, #A6FF4D 0%, transparent 40%),
    #1a1a2e;
  min-height: 100vh;
}

/* 기본 글래스 카드 */
.glass {
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.20);
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.10),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  padding: 28px;
}

/* 다크 글래스 변형 */
.glass-dark {
  background: rgba(20, 20, 30, 0.40);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 20px;
  color: #f8fafc;
  padding: 28px;
}

/* 글래스 네비게이션 바 (상단 고정) */
.glass-nav {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  z-index: 50;
}
```

---

## 🟥 F. Tailwind CSS 토큰

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        aurora: {
          pink: '#FF6B9D',
          cyan: '#00E5FC',
          lime: '#A6FF4D',
          base: '#1a1a2e',
        },
      },
      backdropBlur: {
        glass: '16px',
        'glass-lg': '24px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.10)',
        'glass-inset': 'inset 0 1px 0 rgba(255,255,255,0.25)',
      },
      borderRadius: {
        glass: '20px',
      },
    },
  },
}
```

글래스 카드 클래스:

```jsx
<div className="bg-white/10 backdrop-blur-[16px] backdrop-saturate-150
                border border-white/20 rounded-glass shadow-glass
                px-7 py-7">
  <h2 className="text-white text-2xl font-semibold">제목</h2>
  <p className="text-white/80 mt-2">본문 내용...</p>
</div>
```

---

## 🟨 G. 다크 모드 / 프리미엄 변형 (추천)

가장 임팩트 있는 글래스는 **다크 모드**입니다:

```
프리미엄 다크 모드 글래스 디자인으로 만들어줘.

- 배경: 다크 네이비 #0f172a, 미세한 컬러 blob (핑크/시안/바이올렛) 추가
- 글래스: rgba(255,255,255,0.06) + blur(20px) saturate(180%)
- 텍스트: #f8fafc (90~100% 불투명도), 절대 회색조 낮추지 말 것
- 포인트: 네온 액센트 (시안/핑크)가 글래스를 통해 은은하게 번짐
- Apple iOS 26 Liquid Glass 느낌 — 환경광이 글래스 가장자리에 반사
```

---

## 💡 프롬프트 팁

- **"글래스 카드를 만들어줘"만 하면 흰 배경 위 회색 박스가 나옵니다** — 반드시 "컬러풀한 배경 위에"를 강조하세요.
- 툴이 브루탈리즘 느낌으로 만들면 `saturate(180%)`와 `border-radius 20px`를 명시하세요.
- 대비가 부족하면 fill opacity를 0.10 → 0.18 → 0.25 순으로 올리세요. 완전 불투명은 금지.
- Safari 사용자가 많다면 `-webkit-backdrop-filter` 절대 빠지지 않게 하세요.
- 애니메이션을 넣으면 "프리미엄"이 됩니다 — hover 시 살짝 위로 뜸 (`translateY(-4px)` + 그림자 확대).
