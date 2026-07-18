# Dark Mode First — Copy-Paste Prompts

> "어둠이 기본 — 빛은 포인트로."

---

## 🟦 A. UI 코딩용 (한국어)

```
Dark Mode First 스타일로 [개발자 툴 대시보드 / SaaS 랜딩]을 만들어줘.

핵심 스펙:
- 배경: #0a0a0a (딥 네어블랙, 절대 #333 회색 금지)
- 표면 레이어: #141414 (카드), #1a1a1a (모달), #222222 (hover)
- 보더: 1px solid rgba(255,255,255,0.08) — 거의 안 보이게
- 텍스트: #fafafa 주, #a1a1aa 부, #71717a muted
- 액센트: 한 가족만 — 블루 #3b82f6 (또는 바이올렛 #8b5cf6, 에메랄드 #10b981)
- 액센트 글로우: box-shadow 0 0 20px rgba(액센트, 0.4)
- 입체감: 밝은 표면 색으로 (heavy shadow X)
- 타이포: Inter 400/600, JetBrains Mono (코드)

금지: 회색 배경, heavy drop shadow, 순백 텍스트, 액센트 여러 가족.
```

---

## 🟦 B. English

```
Build a [developer tool dashboard / SaaS landing] in Dark Mode First style.

- Base: #0a0a0a (deep near-black, NEVER #333 grey)
- Surface layers: #141414 (cards), #1a1a1a (elevated), #222222 (hover)
- Borders: 1px solid rgba(255,255,255,0.08) — barely visible
- Text: #fafafa primary, #a1a1aa secondary, #71717a muted
- Accent: ONE family — blue #3b82f6 (or violet, emerald)
- Accent glow: box-shadow 0 0 20px rgba(accent, 0.4)
- Elevation: lighter surface color, NOT heavy shadows
- Typography: Inter 400/600, JetBrains Mono for code
- NEVER: grey base, heavy shadows, pure white text, multiple accent families
```

---

## 🟪 C. 이미지 생성용

```
dark mode UI, deep near-black background #0a0a0a, electric blue accents,
subtle borders, glowing interactive elements, developer tool aesthetic,
Vercel Linear style, sleek, premium —ar 16:9 —style raw
```

---

## 🟩 D. CSS 템플릿

```css
:root {
  /* 다크 레이어 */
  --bg-base: #0a0a0a;
  --bg-surface: #141414;
  --bg-elevated: #1a1a1a;
  --bg-hover: #222222;

  /* 텍스트 */
  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;

  /* 액센트 (블루 패밀리 예시) */
  --accent: #3b82f6;
  --accent-hover: #60a5fa;
  --accent-glow: rgba(59, 130, 246, 0.4);

  /* 보더 */
  --border: 1px solid rgba(255, 255, 255, 0.08);
}

body {
  background: var(--bg-base);
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
}

/* 카드 — 표면으로 입체감 */
.card-dark {
  background: var(--bg-surface);
  border: var(--border);
  border-radius: 12px;
  padding: 24px;
}

/* 글로우 버튼 */
.btn-glow {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 600;
  box-shadow: 0 0 20px var(--accent-glow);
  transition: all 200ms ease;
}
.btn-glow:hover {
  background: var(--accent-hover);
  box-shadow: 0 0 30px var(--accent-glow);
  transform: translateY(-1px);
}
```

---

## 💡 프롬프트 팁

- **"다크 모드로 만들어줘"**만 하면 회색 배경(#333)이 나옵니다. 반드시 **"#0a0a0a 딥 네어블랙"**을 명시.
- heavy shadow가 들어가면 **"그림자 대신 밝은 표면으로 입체감"** 지시.
- 액센트가 너무 많으면 **"액센트 한 가족만, 나머지는 무채색"** 강조.
- Vercel/Linear 느낌이 안 나면 폰트 **"Inter + JetBrains Mono"** 명시.
- 텍스트가 안 읽히면 **"대비 4.5:1 이상, #fafafa 주 텍스트"** 추가.
