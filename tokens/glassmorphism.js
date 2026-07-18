/**
 * Glassmorphism Tailwind config snippet
 *
 * 사용법: tailwind.config.js의 theme.extend에 spread 하세요.
 *   module.exports = { theme: { extend: { ...glassmorphism.tailwind } } }
 *
 * 주의: Tailwind의 arbitrary value 문법(`bg-white/10 backdrop-blur-md`)으로도
 * 충분히 표현 가능합니다. 아래는 일관된 네이밍을 위한 프리셋입니다.
 */

const glassmorphism = {
  tailwind: {
    colors: {
      aurora: {
        pink: '#FF6B9D',
        cyan: '#00E5FC',
        lime: '#A6FF4D',
        violet: '#A855F7',
        base: '#1a1a2e',
      },
    },
    // backdrop-filter — Tailwind 기본엔 saturate가 없어 확장
    backdropBlur: {
      glass: '16px',
      'glass-lg': '24px',
    },
    backdropSaturate: {
      glass: '1.8',
    },
    boxShadow: {
      glass: '0 8px 32px rgba(0,0,0,0.10)',
      'glass-hover': '0 16px 48px rgba(0,0,0,0.18)',
      'glass-inset': 'inset 0 1px 0 rgba(255,255,255,0.25)',
    },
    borderRadius: {
      glass: '20px',
      'glass-pill': '999px',
    },
  },

  /** Aurora 배경 — body 또는 최상위 컨테이너에 적용 */
  auroraBgClass:
    'bg-[radial-gradient(circle_at_20%_20%,#FF6B9D_0%,transparent_40%),radial-gradient(circle_at_80%_30%,#00E5FC_0%,transparent_40%),radial-gradient(circle_at_50%_80%,#A6FF4D_0%,transparent_40%)] bg-[#1a1a2e] min-h-screen text-slate-50',

  /** 기본 글래스 카드 클래스 */
  glassCardClass:
    'bg-white/10 backdrop-blur-[16px] backdrop-saturate-150 ' +
    'border border-white/20 rounded-glass ' +
    'shadow-[0_8px_32px_rgba(0,0,0,0.10)] shadow-glass-inset ' +
    'p-7 transition-transform duration-250 hover:-translate-y-1.5',

  /** 글래스 네비게이션 바 */
  glassNavClass:
    'sticky top-0 z-50 bg-white/[0.08] backdrop-blur-[24px] backdrop-saturate-150 ' +
    'border-b border-white/15',

  /** 글래스 CTA 버튼 (pill 형) */
  glassButtonClass:
    'inline-block bg-white/15 backdrop-blur-[16px] backdrop-saturate-150 ' +
    'border border-white/20 rounded-glass-pill px-7 py-3 ' +
    'text-slate-50 font-semibold text-base cursor-pointer ' +
    'transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/25 ' +
    'hover:shadow-[0_12px_40px_rgba(0,0,0,0.20)]',
};

module.exports = glassmorphism;
