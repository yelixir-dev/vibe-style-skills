# 3D / Immersive — Copy-Paste Prompts

> "화면 너머의 공간으로."

---

## 🟦 A. UI 코딩용 (한국어)

```
3D / Immersive 스타일로 [제품 히어로 / 랜딩 페이지]를 만들어줘.

핵심 스펙:
- 히어로: 인터랙티브 3D 객체 1개 (Spline embed 또는 CSS perspective transform)
- 배경: 다크 #0a0a1a 또는 오로라 그라데이션 — 절대 플랫 화이트 (3D가 평면해짐)
- 조명: 일관된 광원, 모든 3D 요소에 부드러운 ambient shadow
- 모션: 물리 기반 easing, 마우스 추적 tilt (객체가 커서를 살짝 따라감)
- UI 오버레이: 최소한의 글래스모피즘 (반투명 카드 + backdrop-blur)
- 깊이: 패럴랙스 레이어, perspective transform, Z축 부유 요소
- 성능: 3D는 lazy-load, 모바일/저사양용 정적 fallback 필수

금지: 플랫 화이트 배경, 불일치 그림자, linear 애니메이션, 복잡한 UI.
```

---

## 🟦 B. English

```
Build a [product hero / landing page] with 3D / Immersive style.

- Hero: ONE interactive 3D object (Spline embed or CSS perspective).
- Background: dark #0a0a1a or aurora gradient — NEVER flat white.
- Lighting: consistent light source, soft ambient shadows.
- Motion: physics-based easing, mouse-driven tilt.
- UI overlay: minimal glassmorphism (translucent + backdrop-blur).
- Depth: parallax, perspective transforms, Z-axis floating.
- Performance: lazy-load 3D, static fallback for mobile.
- NEVER: flat white bg, inconsistent shadows, linear animations, clutter.
```

---

## 🟪 C. 이미지 생성용

```
3D immersive web UI, floating 3D objects in dark space, soft ambient lighting,
depth of field, glass overlay cards, aurora gradient background, Apple visionOS
feel, Spline style, premium futuristic —ar 16:9 —style raw
```

---

## 🟩 D. 3단계 구현 가이드

### Level 1 — CSS만 (가벼움, PDF 안전)
```css
.float-3d {
  transform: perspective(1000px) rotateX(5deg) rotateY(-10deg);
  box-shadow:
    0 30px 60px rgba(0,0,0,0.4),
    0 10px 20px rgba(0,0,0,0.2);
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.float-3d:hover {
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
}
```

### Level 2 — Spline embed (노코드 3D)
```html
<script type="module" src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/YOUR_SCENE/scene.splinecode"></spline-viewer>
```

### Level 3 — React Three Fiber (풀 컨트롤)
```bash
npm install three @react-three/fiber @react-three/drei
```
```jsx
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

<Canvas camera={{ position: [0, 0, 5] }}>
  <ambientLight intensity={0.5} />
  <directionalLight position={[5, 5, 5]} />
  <Float speed={2} rotationIntensity={1} floatIntensity={1}>
    <mesh>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#8b5cf6" roughness={0.3} metalness={0.8} />
    </mesh>
  </Float>
</Canvas>
```

---

## 💡 프롬프트 팁

- **"3D로 만들어줘"**만 하면 입체 card 정도만 나옵니다. **"인터랙티브 3D 객체, 마우스 추적, perspective, 깊이감"**을 명시.
- 어느 수준이 필요한지 명시: **CSS only / Spline / Three.js**.
- 성능 문제 대비: **"모바일용 정적 이미지 fallback 포함"** 추가.
- Apple visionOS 느낌 원하면 **"글래스 카드가 3D 공간에 떠 있는, spatial computing"**.
- 다크 배경이 안 나오면 **"배경 다크, 3D가 공간에 떠 있게"** 강조.
