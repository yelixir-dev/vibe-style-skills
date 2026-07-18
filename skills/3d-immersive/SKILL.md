---
name: 3d-immersive
description: How to design and build 3D / Immersive interfaces (Spline, Three.js, WebGPU, WebGL, interactive 3D in web). Use whenever the user mentions 3D UI, immersive web, Spline, Three.js, WebGPU, WebGL, interactive 3D objects, rotating 3D models, spatial UI, depth/perspective in web design, or asks for a futuristic/Apple-visionOS/spatial-computing aesthetic with floating 3D elements. Also trigger when the user wants a wow-factor hero section with depth and motion and hasn't named a style — propose 3D / Immersive as the default and confirm.
---

# 3D / Immersive

> *"화면 너머의 공간으로."*
> Into the space beyond the screen.

## When to apply this skill

Apply when the user wants any of:
- **Interactive 3D** objects in web (Spline, Three.js, React Three Fiber)
- **Immersive / spatial** UI (Apple visionOS feel)
- **Depth and perspective** — elements floating in 3D space
- **Wow-factor hero sections** with rotating 3D models
- **WebGPU / WebGL** experiences
- **Product configurators** (rotate/zoom 3D products)

Do **not** apply for: content-heavy reading (3D distracts), mobile-only (performance), accessibility-first contexts (motion sickness, 3D can be disorienting), or SEO-critical landing pages (3D is JS-heavy, slow to load).

## Core grammar (the non-negotiables)

### 1. Real depth — Z-axis matters
- Elements exist in **3D space**, not just 2D. Foreground, midground, background layers.
- Perspective transforms: `transform: perspective(1000px) rotateY(15deg)`.
- Parallax scrolling — different layers move at different speeds.

### 2. Lighting and shadows ground the 3D
- 3D objects need **consistent light source** — all shadows point the same way.
- Soft ambient shadows: `filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3))`.
- Light highlights on top edges of 3D objects.

### 3. Smooth, physics-based motion
- 3D objects rotate/drift with **easing curves**, not linear.
- Mouse-driven: object tilts toward cursor (`react-three-fiber` or vanilla JS).
- Spring physics for natural feel.

### 4. Dark or gradient backgrounds for depth
- Dark backgrounds make 3D objects "float" in space.
- Aurora/gradient backgrounds enhance the spatial feel.
- Pure white flattens 3D — avoid.

### 5. Minimal UI around the 3D
- 3D is the star. Surrounding UI should be **minimal, clean, glassy**.
- Floating glass cards with essential info.
- Don't clutter — let the 3D breathe.

## Implementation approaches

### Level 1: CSS-only 3D (lightweight, PDF-safe)
```css
.card-3d {
  transform: perspective(1000px) rotateX(5deg) rotateY(-10deg);
  box-shadow: 0 30px 60px rgba(0,0,0,0.3);
}
```
- Good for: depth hints, floating cards, subtle 3D.
- Pros: zero JS, works in PDF.

### Level 2: Spline embed (no-code 3D)
```html
<script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/xxx/scene.splinecode"></spline-viewer>
```
- Good for: hero sections, product showcases.
- Pros: no 3D modeling skill needed, interactive out of the box.

### Level 3: Three.js / React Three Fiber (full control)
```jsx
import { Canvas } from '@react-three/fiber';
<Canvas>
  <ambientLight />
  <mesh rotation={[0, 0, 0]}>
    <boxGeometry />
    <meshStandardMaterial color="#3b82f6" />
  </mesh>
</Canvas>
```
- Good for: custom interactive 3D experiences.
- Pros: full control. Cons: heaviest, steepest learning curve.

## Color & background

- **Background**: dark `#0a0a1a`, deep navy, or aurora gradient. NEVER flat white.
- **3D objects**: can be any color, but should have gradient/shading (not flat).
- **UI overlay**: glassmorphism (translucent, blur) floats over the 3D.
- Accents glow in the dark space.

## Typography

- **Clean and minimal** — 3D is the visual hero.
- Inter or SF Pro, weight 400-600.
- Floating glass text overlays, not heavy type.
- Generous whitespace around text.

## Forbidden (will break the style)

| Don't | Why |
|---|---|
| Flat white background | Flattens 3D — need depth |
| Inconsistent light sources | Shadows must align — 3D needs physics |
| Linear animations | Use easing — natural motion |
| Cluttered UI around 3D | 3D is the star — minimal overlay |
| Heavy 2D elements competing | 3D loses impact if UI is busy |
| No shadows/highlights | 3D looks flat without lighting |
| Too many 3D objects | One hero 3D element is enough |

## Reference sites

- **spline.design** — no-code 3D tool, their homepage IS a 3D showcase
- **apple.com/apple-vision-pro** — spatial computing, floating glass + 3D
- **loom.com** — uses subtle 3D depth in marketing
- **framer.com/motion** — motion/3D library showcase

## Prompt templates

Full versions in `prompts/3d-immersive.md`. Quick reference:

### UI coding prompt
```
Build a [product hero / landing page] with 3D / Immersive style.

Core spec:
- Hero: ONE interactive 3D object (use Spline embed or CSS perspective transform).
- Background: dark #0a0a1a or aurora gradient — NEVER flat white (flattens 3D).
- Lighting: consistent light source, soft ambient shadows on all 3D elements.
- Motion: physics-based easing, mouse-driven tilt (object follows cursor slightly).
- UI overlay: minimal glassmorphism (translucent cards with backdrop-blur).
- Depth: parallax layers, perspective transforms, Z-axis floating elements.
- Performance: lazy-load 3D, provide static fallback for mobile/slow connections.
- NEVER: flat white bg, inconsistent shadows, linear animations, cluttered UI.
```

### Image generation
```
3D immersive web UI, floating 3D objects in dark space, soft ambient lighting,
depth of field, glass overlay cards, aurora gradient background, Apple visionOS
feel, Spline style, premium futuristic —ar 16:9 —style raw
```

## When the user's request is vague

If they say "make it wow" / "make it futuristic" / "make it spatial" without naming a style, **propose 3D / Immersive** and confirm — but warn about performance:
> "화면을 압도하는 느낌을 원하신다면 3D / Immersive가 잘 맞을 것 같아요 — 3D 객체가 공간에 떠 있는, Apple visionOS 같은 스타일이요. 다만 모바일/저사양에서 무거울 수 있어 fallback이 필요해요. 진행할까요?"

## Common mistakes to watch for

1. **Flat white background** → switch to dark/gradient — 3D needs depth.
2. **Inconsistent shadows** → pick one light source, all shadows align.
3. **Linear animations** → use `cubic-bezier` easing for natural motion.
4. **Too many 3D objects** → one hero 3D is enough; more = chaos.
5. **No fallback** → mobile/slow users get blank screen. Always provide static image.
6. **Cluttered overlay UI** → glass minimalism, not heavy panels.

## Mix-and-match (advanced)

3D / Immersive combines well with:
- **+ Glassmorphism** → glass cards floating in 3D space (Apple visionOS)
- **+ Dark Mode First** → dark base is natural for 3D depth
- **+ Aurora Gradient** → 3D objects float on flowing color
- **+ Y2K** → chrome 3D objects, holographic surfaces
