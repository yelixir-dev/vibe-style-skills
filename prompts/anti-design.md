# Anti-Design — Copy-Paste Prompts

> ⚠️ 주의: Anti-Design은 **의도적**이어야 합니다. 실수로 안 예쁜 게 아니라, 일부러 규칙을 깨는 것.

---

## 🟦 A. UI 코딩용 (한국어)

```
Anti-Design 스타일로 [포트폴리오 / 잡지 / 아트 프로젝트 페이지]를 만들어줘.

핵심 스펙:
- 레이아웃: 의도적으로 어긋난 정렬, 그리드 무시, 비대칭.
  일부 요소는 1-3도 회전 (transform: rotate(-2deg))
- 타이포: 폰트 3-4개 섞어 쓰기 — 손글씨(Caveat), 세리프(Playfair),
  모노(JetBrains), 스크립트. 일관성 없이.
- 사이즈: 위계 뒤집기 — 본문 28px, 헤드라인 18px. 또는 극단적 사이즈.
- 컬러: 2-3개 채도 높은 충돌 색 (핫핑크 #FF00FF + 라임 #00FF00 + 블랙).
  의도적 불협화음.
- "실수" 가시화: 기본 브라우저 링크 스타일, 무거운 오프셋 그림자,
  테이프/스티커/낙서 요소 추가.
- 배경: 흰색, 베이지 #F5F5DC, 또는 바쁜 패턴.

절대 금지: 일관된 그리드, 조화로운 팔레트, 단일 우아한 폰트,
세련된 그림자/그라데이션, "깔끔/모던" 느낌.
```

---

## 🟦 B. English

```
Build a [portfolio / zine / art project page] in Anti-Design style.

- Layout: deliberately misaligned, off-grid, asymmetric. Rotate some elements 1-3deg.
- Typography: MIX 3-4 different fonts — handwritten (Caveat), serif (Playfair),
  mono (JetBrains), script. NO consistency.
- Sizes: invert hierarchy — body text large (28px), headlines small (18px).
- Colors: 2-3 saturated clashing colors (hot pink #FF00FF + lime #00FF00 + black).
- Add visible "mistakes": default browser link styles, heavy offset shadows,
  tape/sticker/scribble elements.
- Background: plain white, beige #F5F5DC, or busy pattern.
- NEVER: consistent grid, harmonious palette, single elegant font, polished shadows.
```

---

## 🟪 C. 이미지 생성용 (Midjourney / DALL·E)

```
anti-design web page, deliberately ugly, web 1.0, misaligned layout, handwritten
fonts, clashing saturated colors, collage, sticker, tape, punk zine aesthetic,
intentional rule-breaking —ar 16:9 —style raw
```

---

## 🟩 D. CSS 템플릿 — "규칙 깨기" 도구

```css
/* 어긋난 회전 */
.tilt-left  { transform: rotate(-2deg); }
.tilt-right { transform: rotate(1.5deg); }
.tilt-hard  { transform: rotate(-5deg); }

/* "잘못된" 그림자 — 너무 무겁고 오프셋 */
.bad-shadow { box-shadow: 8px 8px 0 #000; }     /* hard, brutal */
.wrong-shadow { box-shadow: 4px 6px 2px #FF00FF; } /* colored, weird offset */

/* 테이프 효과 (washi tape) */
.tape {
  position: absolute;
  background: rgba(255, 255, 0, 0.6);
  width: 80px; height: 24px;
  transform: rotate(-4deg);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

/* 손글씨 폰트 매치 */
.font-hand    { font-family: 'Caveat', cursive; }
.font-marker  { font-family: 'Permanent Marker', cursive; }
.font-sketch  { font-family: 'Indie Flower', cursive; }
.font-mono    { font-family: 'JetBrains Mono', monospace; }
.font-serif   { font-family: 'Playfair Display', serif; }
/* 이 5개를 한 페이지에 섞어 쓴다 */

/* "실수" 링크 — 기본 브라우저 스타일 고의로 유지 */
a.bad-link {
  color: blue;          /* 기본 링크 색 */
  text-decoration: underline;
}
a.bad-link:visited { color: purple; }

/* 충돌 팔레트 3종 */
.clash-1 { background:#FF00FF; color:#00FF00; }   /* 핑크+라임 */
.clash-2 { background:#0000FF; color:#FF6600; }   /* 블루+오렌지 */
.clash-3 { background:#FF0000; color:#FFFF00; }   /* 레드+옐로 (건조 테이프) */
```

---

## 🟨 E. Google Fonts 콤보 (한 페이지에 섞기)

HTML `<head>`에:
```html
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Permanent+Marker&family=Indie+Flower&family=Playfair+Display:wght@400;700;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

사용:
- 헤드라인: Permanent Marker (또는 Playfair Display 900 — 더 위트 있게)
- 본문: Indie Flower (손글씨) — 또는 너무 크게 (32px)
- 강조: Caveat 빨간색
- 라벨: JetBrains Mono, ALL CAPS, letter-spacing -3px (너무 빽빽하게)
- 링크: Times New Roman + 파란색 밑줄 (기본 스타일)

---

## 💡 프롬프트 팁

- **"안티 디자인으로 만들어줘"**만 하면 AI가 "귀엽고 틱톡스러운" 느낌으로 가버립니다. 반드시 **"의도적으로 규칙을 깨는, 어긋난 정렬, 손글씨 폰트 3-4개 섞기, 충돌 색"**을 명시하세요.
- AI가 너무 정리하면 "더 어긋나게, 일부러 회전, 그리드 무시"라고 강조하세요.
- 너무 안 예쁘면 "규칙을 깨되 메시지는 읽히게"라고 제한하세요 — anti-design도 커뮤니케이션이어야 함.
- 웹 1.0 감성을 원하면 "Craigslist나 1999년 웹사이트처럼, 기본 브라우저 스타일 유지"를 추가하세요.
- 손글씨가 안 들어가면 폰트 이름을 직접 지정: "Caveat, Permanent Marker, Indie Flower 중 하나 이상".

---

## ⚠️ 언제 쓰면 안 되는지 (중요)

Anti-Design은 **강한 선언**입니다. 다음엔 피하세요:
- 금융/의료/법률 — 신뢰가 생명
- 이커머스 결제 — 전환율이 무너짐
- 정부/공공 — 접근성 의무
- B2B 엔터프라이즈 — "장난치나?" 평가
- 언론/뉴스 — 신뢰성 훼손

**잘 어울리는 곳**: 아트 포트폴리오, 잡지/진, 인디 밴드, 페스티벌, 펑크 브랜드, 개인 블로그, 학생 프로젝트, 실험적 크리에이티브 에이전시.
