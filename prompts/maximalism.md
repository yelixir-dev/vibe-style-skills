# Maximalism — Copy-Paste Prompts

> "더 많이, 더 시끄럽게, 더 기쁘게."

---

## 🟦 A. UI 코딩용 (한국어)

```
Maximalism 스타일로 [패션 브랜드 / 뮤직 페스티벌 / 아트 포트폴리오] 홈페이지를 만들어줘.

핵심 스펙:
- 구도: DENSE — 모든 영역을 채워. 빈 여백 없음. 요소가 겹치고 충돌.
- 배경: 다크 #0a0a1a 또는 컬러풀 — 절대 단순 흰색 금지.
- 컬러: 5-7개 컬러를 자유롭게 (네온 핑크, 일렉트릭 블루, 애시드 옐로우,
  라임, 바이올렛, 시안). 그라데이션 허용.
- 타이포: 거대한 헤드라인 (150-250px), 디스플레이 폰트 2-3개 섞기.
  타이포는 시각 요소 — 회전, 레이어, 컬러.
- 이미지: 여러 장을 한 화면에 콜라주, 겹침. 스티커/배지/패턴으로 빈 곳 채우기.
- z-index 레이어 — foreground, midground, background.

금지: 빈 여백 / 단일 그리드 / 절제 팔레트 / 작은 정중한 타이포 / 단순 배경.
```

---

## 🟦 B. English

```
Build a [fashion brand / music festival / art portfolio] homepage in Maximalism style.

- Composition: DENSE — fill every area, no empty whitespace. Elements overlap, collide, layer.
- Background: dark #0a0a1a or vibrant — NEVER plain white.
- Color: 5-7 vibrant colors (neon pink, electric blue, acid yellow, lime, violet, cyan).
- Typography: oversized headlines (150-250px), mix 2-3 display fonts. Type is a visual
  element — rotate, layer, color it.
- Imagery: many images/illustrations at once, collaged, overlapping. Stickers,
  badges, patterns fill gaps.
- Layered z-index stacking.
- NEVER: empty whitespace, single grid, restrained palette, polite small type, plain bg.
```

---

## 🟪 C. 이미지 생성용 (Midjourney / DALL·E)

```
maximalist design, dense layered composition, overflowing with color and type,
neon pink electric blue acid yellow palette, fashion magazine spread energy,
oversized typography, collaged imagery, stickers patterns gradients, horror
vacui, more is more, awwwards —ar 16:9 —style raw
```

---

## 🟩 D. CSS 템플릿 — 레이어/오버랩 도구

```css
.maximalist {
  position: relative;
  background: #0a0a1a;
  overflow: hidden;
  min-height: 100vh;
  /* 그라데이션 + 패턴 배경 */
  background-image:
    radial-gradient(circle at 20% 30%, rgba(255, 0, 255, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 60%, rgba(0, 255, 255, 0.3) 0%, transparent 50%),
    repeating-linear-gradient(45deg, transparent 0 20px, rgba(255,255,0,0.05) 20px 22px);
}

/* 레이어 — 절대 위치로 겹치게 */
.layer {
  position: absolute;
}
.layer-bg   { z-index: 1; }
.layer-mid  { z-index: 2; }
.layer-fg   { z-index: 3; }

/* 거대한 헤드라인 */
.max-headline {
  font-family: 'Anton', sans-serif;
  font-size: 220px;
  line-height: 0.85;
  color: #FFFF00;
  -webkit-text-stroke: 3px #FF00FF;
  text-shadow: 8px 8px 0 #00FFFF;
  transform: rotate(-3deg);
}

/* 스티커 */
.sticker {
  position: absolute;
  background: #FF00FF;
  color: #00FF00;
  border-radius: 50%;
  padding: 12px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 14px;
  transform: rotate(15deg);
  box-shadow: 4px 4px 0 #000;
}

/* 이미지 콜라주 — 여러 장 겹치기 */
.collage-img {
  position: absolute;
  border: 4px solid #fff;
  box-shadow: 8px 8px 0 #000;
}
```

---

## 🟨 E. Google Fonts 콤보 (Maximalism)

```html
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Archivo+Black&family=Playfair+Display:ital,wght@1,900&family=Space+Mono:wght@700&display=swap" rel="stylesheet">
```

- **거대 헤드라인**: Anton (숫자 200px+)
- **서브 헤드라인**: Archivo Black 또는 Bebas Neue
- **강조/인용**: Playfair Display italic 900
- **라벨/스티커**: Space Mono 700, ALL CAPS

---

## 💡 프롬프트 팁

- **"풍성하게 만들어줘"**만 하면 AI가 절제하러 감. 반드시 **"여백 없이 채워, 겹치게, 5-7 컬러, 거대한 타이포"**를 명시하세요.
- AI가 단일 그리드로 만들면 **"그리드 깨기, 절대 위치로 겹치게"**라고 강조.
- 헤드라인이 작으면 **"타이포를 시각 요소로 — 200px 이상, 회전, 레이어"** 추가.
- 너무 정리되면 **"더 채워, 스티커/패턴/보조 이미지로 빈 곳 없애"** 지시.
- 다크 배경이 안 나오면 **"배경은 다크 #0a0a1a, 요소들이 빛나게"** 명시.

---

## ⚠️ 언제 쓰면 안 되는지

- 데이터 대시보드 — 정보 과부하로 사용성 붕괴
- 엔터프라이즈 B2B — 신뢰/전문성 훼손
- 접근성 최우선 — 인지 부하 위험
- 이커머스 결제 — 전환율 하락
- 뉴스/정보 전달 — 가독성 생명

**잘 어울리는 곳**: 패션 브랜드, 뮤직 페스티벌, 아트 포트폴리오, 크리에이티브 에이전시, 청년 문화(Z세대), 인디 출판, 게임 런칭.
