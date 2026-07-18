# vibe-style-skills

> **이름만 알면 AI가 그린다.**
> A dictionary of 30 named design concepts — as copy-pasteable prompts & Claude/GPT skills for vibe coders.

[English](#-english) · [한국어](#-한국어)

---

## 🇬🇧 English

### What is this?

`vibe-style-skills` is an open-source library of **named design styles** — each packaged as:

1. A **Claude/GPT Skill** (`SKILL.md`) that teaches an AI assistant the grammar of a style, and
2. A **copy-pasteable prompt** you can drop into v0, Cursor, Lovable, Bolt, Midjourney, or DALL·E to reproduce that style.

Because modern AI coding assistants understand *named* styles ("Neo-Brutalism", "Glassmorphism", "Bauhaus") far better than vague adjectives ("clean", "modern", "sleek"), **knowing the name is the highest-leverage design skill of the vibe-coding era.**

### The problem it solves

When you tell an AI:

> "Make me a clean, modern landing page"

…you get the same default mediocre output everyone gets. But when you say:

> "Make me a **Neo-Brutalism** landing page — cream `#FFF9E6` background, 2px solid black borders, 4px offset shadows, Space Grotesk headlines"

…the AI locks onto a *specific visual grammar* and the output jumps in quality. This repo hands you those grammars, 30 of them.

### Structure

```
vibe-style-skills/
├── skills/                     ← Claude/GPT Skills (load into your assistant)
│   └── neo-brutalism/
│       └── SKILL.md
├── prompts/                    ← Copy-pasteable prompts (UI + image generation)
│   └── neo-brutalism.md
├── tokens/                     ← Color/type/shape tokens (JSON, CSS, Tailwind)
│   └── neo-brutalism.{json,css,js}
└── ebook/                      ← Free preview PDF + companion ebook info
    └── FREE-PREVIEW.pdf
```

### The 30 styles (3 volumes)

#### Vol. 1 — **TREND** (what's hot in 2026)
`neo-brutalism` · `glassmorphism` · `bento-grid` · `claymorphism` · `aurora-gradient` · `anti-design` · `maximalism` · `y2k` · `dark-mode-first` · `3d-immersive`

#### Vol. 2 — **HERITAGE** (art/print movements reinterpreted)
`swiss` · `bauhaus` · `memphis` · `art-deco` · `editorial` · `skeuomorphism` · `neumorphism` · `hand-drawn` · `isometric` · `pixel-art`

#### Vol. 3 — **SYSTEM** (enterprise design systems)
`ibm-carbon` · `material-3` · `apple-hig` · `fluent-2` · `shopify-polaris` · `atlassian-ds` · `salesforce-lightning` · `vaporwave` · `cyberpunk` · `minimalism`

### How to use

#### As a Claude/GPT Skill
Copy the desired `skills/<style>/SKILL.md` into your assistant's skills directory (e.g. `~/.zcode/skills/` or `~/.claude/skills/`), then just ask:

> "Build me a portfolio site in **neo-brutalism** style."

The skill loads the grammar and the assistant applies it.

#### As a prompt library
Open `prompts/<style>.md`, copy the UI-coding or image-generation prompt, paste into your tool. Done.

#### As design tokens
Import `tokens/<style>.css` or `.js` directly into your project for instant theming.

### Companion ebook

This repo accompanies the Korean ebook **"일단 봐봐, '깔끔하게'는 그만"** (Look — Stop Saying "Clean"): a 3-volume visual dictionary of all 30 styles with reference screenshots, observation points, and brand-matching guidance.

- **Free preview**: 2 styles (Neo-Brutalism + Glassmorphism) — [`ebook/FREE-PREVIEW.pdf`](./ebook/FREE-PREVIEW.pdf)
- **Full ebook**: 3 volumes × 10 styles. (link TBD)

### Contributing

Contributions welcome — especially:
- New named styles that AI tools recognize
- Improved prompts (please test on v0/Cursor/Midjourney and share what worked)
- Translations of prompts into other languages
- Reference site additions

See [CONTRIBUTING.md](./CONTRIBUTING.md) (TBD).

### License

MIT — use freely, including commercially. Attribution appreciated but not required.

---

## 🇰🇷 한국어

### 이게 뭔가요?

`vibe-style-skills`는 **이름 붙인 디자인 스타일 30종**을 오픈소스로 모은 라이브러리입니다. 각 스타일은:

1. AI 어시스턴트(Claude/GPT)에 스타일 문법을 가르치는 **Skill**(`SKILL.md`)과
2. v0, Cursor, Lovable, Bolt, Midjourney, DALL·E에 바로 복붙할 수 있는 **프롬프트**

형태로 제공됩니다.

"깔끔하게", "모던하게" 같은 애매한 형용사보다 **"Neo-Brutalism", "Glassmorphism", "Bauhaus" 같은 스타일 이름**을 쓸 때 AI가 훨씬 정확한 결과를 냅니다. vibe coding 시대에 **스타일 이름을 아는 것**이 가장 레버리지가 큰 디자인 능력입니다.

### 해결하는 문제

AI에게 이렇게 말하면:

> "깔끔하고 모던한 랜딩 페이지 만들어줘"

→ 남들 다 하는 똑같은 무난한 결과가 나옵니다. 하지만 이렇게 말하면:

> "**Neo-Brutalism** 스타일 랜딩 페이지 만들어줘 — 크림 `#FFF9E6` 배경, 검정 2px 보더, 4px 오프셋 그림자, Space Grotesk 헤드라인"

→ AI가 **정확한 시각 문법**에 lock-on해서 결과 품질이 확 뜁니다. 이 레포가 그 문법 30종을 줍니다.

### 사용법

#### Claude/GPT Skill로 쓸 때
원하는 `skills/<스타일>/SKILL.md`를 어시스턴트의 skills 폴더(`~/.zcode/skills/` 또는 `~/.claude/skills/`)에 복사한 뒤, 그냥 물어보세요:

> "**네오브루탈리즘** 스타일로 포트폴리오 사이트 만들어줘"

#### 프롬프트 라이브러리로 쓸 때
`prompts/<스타일>.md`를 열고, UI 코딩용 또는 이미지 생성용 프롬프트를 복사해서 도구에 붙여넣으세요.

#### 토큰으로 쓸 때
`tokens/<스타일>.css` 또는 `.js`를 프로젝트에 직접 임포트해서 즉시 테마 적용.

### 함께 읽기

이 레포는 전자책 **"일단 봐봐, '깔끔하게'는 그만 — Vibe Coder를 위한 30가지 디자인 컨셉 × 복붙 프롬프트 사전"**의 부속 자료입니다.

- **무료 맛보기**: 2종 (Neo-Brutalism + Glassmorphism) — [`ebook/FREE-PREVIEW.pdf`](./ebook/FREE-PREVIEW.pdf)
- **전자책 전체**: 3권 × 10종 (링크 추후 공개)

### 라이선스

MIT — 상업적 이용 포함 자유롭게 사용 가능. 저작자 표시는 환영하지만 필수는 아닙니다.
