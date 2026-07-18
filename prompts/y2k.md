# Y2K Aesthetic — Copy-Paste Prompts

> "1999년의 미래를 다시."

---

## 🟦 A. UI 코딩용 (한국어)

```
Y2K Aesthetic 스타일로 [뷰티 브랜드 / Z세대 앱 / 패션 랜딩]을 만들어줘.

핵심 스펙:
- 표면: 크롬/메탈릭 (linear-gradient 가운데 빛 줄), 홀로그램 (135도 iridescent gradient)
- 형태: blob — 비대칭 border-radius "50% 30% 70% 40%". 뾰족 모서리 X.
- 버튼: jelly/gel — 반투명 파스텔, 강한 위쪽 하이라이트, 아래 inner shadow, 통통함
- 컬러: 파스텔 핑크/블루/민트 + 크롬 실버 (클래식 Y2K)
        또는 딥 퍼플 + 네온 핑크/시안 (사이버 Y2K)
- 타이포: 미래지향 기하 (Eurostile/Orbitron) 헤드라인,
          픽셀 폰트 (Press Start 2P) 액센트
- 추가: 별 스파클 ✦, blob 모양, 홀로그램 그라데이션

금지: flat matte, 뾰족 모서리, 미니멀리즘, 단일 그림자, 순흑/순백 배경.
```

---

## 🟦 B. English

```
Build a [beauty brand / Gen-Z app / fashion landing] in Y2K Aesthetic style.

- Surfaces: chrome/metallic (linear-gradient light stripe), holographic (iridescent 135deg).
- Shapes: blob forms — asymmetric border-radius like "50% 30% 70% 40%". NO sharp corners.
- Buttons: jelly/gel — translucent pastel, strong top highlight, inner shadow bottom, puffy.
- Colors: pastel pink/blue/mint + chrome silver (classic Y2K),
          OR deep purple + neon pink/cyan (cyber-Y2K).
- Typography: futuristic geometric (Eurostile/Orbitron) headlines,
              pixel fonts (Press Start 2P) accents.
- Add: star sparkles ✦, blob shapes, holographic gradients.
- NEVER: flat matte, sharp corners, minimalism, single shadow, pure black/white.
```

---

## 🟪 C. 이미지 생성용 (Midjourney / DALL·E)

```
Y2K aesthetic, year 2000, chrome metallic surfaces, holographic iridescent,
blob shapes, jelly translucent buttons, pastel pink and baby blue, pixel art
accents, futuristic optimism, iMac G3 candy colors —ar 16:9 —style raw
```

---

## 🟩 D. CSS 템플릿 — 크롬/젤리/홀로그램

```css
/* 크롬 표면 */
.chrome {
  background: linear-gradient(180deg,
    #c0c0c0 0%, #ffffff 30%, #e8e8f0 50%,
    #ffffff 70%, #a8a8b0 100%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.9),
    inset 0 -1px 0 rgba(0,0,0,0.2),
    0 2px 4px rgba(0,0,0,0.2);
  border: 1px solid rgba(255,255,255,0.5);
}

/* 홀로그램 (iridescent) */
.holo {
  background: linear-gradient(135deg, #FF00FF 0%, #00FFFF 33%, #FFFF00 66%, #FF00FF 100%);
  background-size: 200% 200%;
  animation: holo-shift 6s ease infinite;
}
@keyframes holo-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* 젤리 버튼 — blob + 통통한 */
.jelly-btn {
  background: linear-gradient(180deg, #FFB3D9 0%, #FF6FA5 100%);
  border-radius: 30px 25px 35px 20px;   /* 비대칭 blob */
  padding: 14px 32px;
  border: 1px solid rgba(255,255,255,0.5);
  box-shadow:
    inset 0 2px 4px rgba(255,255,255,0.7),     /* 위쪽 빛 */
    inset 0 -4px 8px rgba(255,0,100,0.3),      /* 아래쪽 inner */
    0 4px 8px rgba(0,0,0,0.2);                 /* 바깥 drop */
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

/* blob 모양 컨테이너 */
.blob {
  border-radius: 50% 30% 70% 40% / 40% 50% 60% 50%;
  background: linear-gradient(135deg, #B3D9FF, #FFB3D9);
  padding: 28px;
  box-shadow:
    inset 0 2px 4px rgba(255,255,255,0.6),
    0 6px 16px rgba(100,150,255,0.3);
}

/* 별 스파클 (Unicode 또는 SVG) */
.sparkle::before {
  content: '✦';
  color: #FFD700;
  text-shadow: 0 0 8px rgba(255,215,0,0.7);
}
```

---

## 🟨 E. 두 가지 팔레트 변형

### 클래식 Y2K (candy chrome)
```css
.y2k-classic {
  --pink: #FFB3D9;
  --blue: #B3D9FF;
  --mint: #B3FFD9;
  --chrome: #C0C0C0;
  --bg: #F5F5FF;
}
```

### 사이버 Y2K (dark techno)
```css
.y2k-cyber {
  --purple: #2D1B69;
  --hot-pink: #FF00FF;
  --electric: #00FFFF;
  --bg: #0D0221;
}
```

---

## 🟦 F. Google Fonts 콤보

```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Audiowide&family=Press+Start+2P&family=Baloo+2:wght@600;800&family=VT323&display=swap" rel="stylesheet">
```

- **헤드라인**: Orbitron 900 또는 Audiowide (미래지향)
- **강조**: Press Start 2P (픽셀 — 8비트 콜백)
- **모노/터미널**: VT323 (레트로 PC)
- **둥근**: Baloo 2 (통통한, 친근한)

---

## 💡 프롬프트 팁

- **"Y2K로 만들어줘"**만 하면 AI가 90년대 텍사스 사이트로 가버림. 반드시 **"크롬 메탈릭, 젤리 버튼, 홀로그램, blob 모양"**을 명시.
- "현대적"으로 나오면 **"미니멀 X, 장식적, 옵티미스틱, 1999년 미래 상상"** 추가.
- 너무 어두우면 클래식 Y2K로 전환 — **"밝은 파스텔, 크롬, iMac G3 캔디"**.
- 사이버 느낌 원하면 **"딥 퍼플 배경, 네온 핑크/시안, 클럽/레이브"**.
- blob 모양이 안 나오면 **"비대칭 border-radius 50% 30% 70% 40%"** 직접 지정.
