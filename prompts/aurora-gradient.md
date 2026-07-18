# Aurora Gradient — Copy-Paste Prompts

> 아래 프롬프트들을 그대로 복사해서 쓰세요.

---

## 🟦 A. UI 코딩용 (한국어)

```
Aurora Gradient 배경으로 [랜딩 페이지 히어로 / SaaS 홈페이지]를 만들어줘.

핵심 스펙:
- 배경: 다크 네이비 #0f172a (절대 흰색 금지)
- radial-gradient blob 4개 (각각 다른 위치):
  · 핑크 #FF6B9D at 20% 20%
  · 시안 #00E5FC at 80% 30%
  · 바이올렛 #A855F7 at 50% 80%
  · 앰버 #FBBF24 at 70% 70%
  각각: "circle at X% Y%, 색 0%, transparent 40%"
- (선택) float 애니메이션 (8s ease-in-out) — 살아있는 느낌
- 텍스트: 흰색 #f8fafc, 본문은 90% 불투명도
- 카드: 글래스모피즘 (rgba(255,255,255,0.10) + backdrop-blur)

절대 금지: 흰 배경, 단일 linear-gradient, 충돌하는 색, blob 7개 이상
```

---

## 🟦 B. English

```
Build a [landing page hero / SaaS homepage] with Aurora Gradient background.

- Base: dark navy #0f172a (NEVER white)
- 4 radial-gradient blobs at different positions:
  · pink #FF6B9D at 20% 20%
  · cyan #00E5FC at 80% 30%
  · violet #A855F7 at 50% 80%
  · amber #FBBF24 at 70% 70%
  Each: "circle at X% Y%, COLOR 0%, transparent 40%"
- Optional: float animation (8s ease-in-out) for alive feel
- Text: white #f8fafc, 90% opacity body
- Cards: glassmorphism (rgba(255,255,255,0.10) + backdrop-blur)
- NEVER: white base, single linear gradient, clashing colors, 7+ blobs
```

---

## 🟪 C. 이미지 생성용 (Midjourney / DALL·E)

```
aurora gradient background, mesh gradient, multiple blurred color blobs flowing
on dark navy base, pink cyan violet palette, dreamy, ethereal, cosmic,
premium tech, stripe style, dribbble —ar 16:9 —style raw
```

---

## 🟩 D. CSS 템플릿 (즉시 적용)

```css
/* 다크 베이스 오로라 (Cosmic 팔레트) */
.aurora-cosmic {
  background:
    radial-gradient(circle at 20% 20%, #FF6B9D 0%, transparent 40%),
    radial-gradient(circle at 80% 30%, #00E5FC 0%, transparent 40%),
    radial-gradient(circle at 50% 80%, #A855F7 0%, transparent 40%),
    #0f172a;
  min-height: 100vh;
  color: #f8fafc;
}

/* Sunset 팔레트 */
.aurora-sunset {
  background:
    radial-gradient(circle at 20% 30%, #FB923C 0%, transparent 40%),
    radial-gradient(circle at 80% 20%, #EC4899 0%, transparent 40%),
    radial-gradient(circle at 50% 80%, #FBBF24 0%, transparent 40%),
    #1a0a0a;
}

/* Ocean 팔레트 */
.aurora-ocean {
  background:
    radial-gradient(circle at 25% 25%, #06B6D4 0%, transparent 40%),
    radial-gradient(circle at 75% 30%, #3B82F6 0%, transparent 40%),
    radial-gradient(circle at 50% 80%, #14B8A6 0%, transparent 40%),
    #04141a;
}

/* 살아있는 애니메이션 — blob을 별도 div로 */
.aurora-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
  animation: float 10s ease-in-out infinite;
}
.aurora-blob:nth-child(1) { background:#FF6B9D; width:400px; height:400px; top:10%; left:10%; }
.aurora-blob:nth-child(2) { background:#00E5FC; width:350px; height:350px; top:20%; right:10%; animation-delay:-3s; }
.aurora-blob:nth-child(3) { background:#A855F7; width:450px; height:450px; bottom:10%; left:40%; animation-delay:-6s; }

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}
```

HTML 구조:
```html
<div class="aurora-cosmic" style="position:relative;overflow:hidden">
  <!-- 정적 그라데이션 방식 -->
  <h1>Hello, Aurora</h1>
</div>

<!-- 또는 살아있는 애니메이션 방식 -->
<div style="position:relative;overflow:hidden;background:#0f172a;min-height:100vh">
  <div class="aurora-blob"></div>
  <div class="aurora-blob"></div>
  <div class="aurora-blob"></div>
  <div style="position:relative;z-index:1">
    <h1>Living Aurora</h1>
  </div>
</div>
```

---

## 🟨 E. 팔레트 변형 4종

| 팔레트 | 색 조합 | 분위기 |
|---|---|---|
| **Cosmic** | 핑크 + 시안 + 바이올렛 | 우주적, 몽환 (Stripe 느낌) |
| **Sunset** | 오렌지 + 핑크 + 앰버 | 따뜻한 노을 |
| **Ocean** | 시안 + 블루 + 틸 | 시원한 바다 |
| **Forest** | 그린 + 라임 + 에메랄드 | 자연, 신선 |

---

## 💡 프롬프트 팁

- **"그라데이션 배경 만들어줘"만 하면** 단순 linear-gradient가 나옵니다. 반드시 **"여러 개의 radial-gradient blob"**과 **"어두운 베이스"**를 명시하세요.
- 툴이 흰 배경으로 만들면 **"절대 흰색 금지, 다크 네이비 베이스"**를 강조하세요.
- 너무 튀면 blob 수를 3개로 줄이고 색을 analogous(인접색)로 맞추세요.
- 살아있는 느낌을 원하면 **"각 blob이 다른 속도로 천천히 이동하는 애니메이션"**을 추가하세요.
- 글래스모피즘과 결합하면 **"각 글래스 카드가 오로라 위에 떠 있는"** Stripe 효과가 납니다.
