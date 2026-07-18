/**
 * Neo-Brutalism Tailwind config snippet
 *
 * 사용법: tailwind.config.js의 theme.extend에 아래 객체를 spread/merge 하세요.
 *   module.exports = { theme: { extend: { ...neoBrutalism.tailwind } } }
 */

const neoBrutalism = {
  tailwind: {
    colors: {
      cream: '#FFF9E6',
      brand: {
        yellow: '#FFD803',
        pink: '#FF6B9D',
        cyan: '#00E5FC',
        lime: '#A6FF4D',
      },
      ink: '#0A0A0A',
    },
    borderRadius: {
      // 중간값(4-12px) 의도적 제거
      none: '0px',
      xl: '16px',
    },
    boxShadow: {
      brutal: '4px 4px 0 #0A0A0A',
      'brutal-sm': '2px 2px 0 #0A0A0A',
      'brutal-lg': '8px 8px 0 #0A0A0A',
    },
    fontFamily: {
      display: ['Space Grotesk', 'Pretendard', 'sans-serif'],
      body: ['Inter', 'Pretendard', 'sans-serif'],
      mono: ['Space Mono', 'monospace'],
    },
  },

  /** 버튼 클래스 문자열 — className에 바로 복붙 */
  buttonClass:
    'bg-brand-yellow text-ink border-2 border-ink shadow-brutal ' +
    'rounded-none px-5 py-2.5 font-mono font-bold uppercase tracking-wider text-sm ' +
    'hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg ' +
    'transition-transform cursor-pointer',

  /** 카드 클래스 문자열 */
  cardClass:
    'bg-white border-2 border-ink shadow-brutal p-4',
};

module.exports = neoBrutalism;
