export const fontSizes = {
  '2xs': ['11px', { lineHeight: '16px', letterSpacing: '0' }],
  xs:   ['13px', { lineHeight: '20px', letterSpacing: '0' }],
  sm:   ['16px', { lineHeight: '24px', letterSpacing: '0' }],
  md:   ['20px', { lineHeight: '28px', letterSpacing: '-0.01em' }],
  lg:   ['24px', { lineHeight: '32px', letterSpacing: '-0.01em' }],
  xl:   ['32px', { lineHeight: '40px', letterSpacing: '-0.02em' }],
  '2xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.03em' }],
  '3xl': ['64px', { lineHeight: '72px', letterSpacing: '-0.04em' }],
  '4xl': ['96px', { lineHeight: '104px', letterSpacing: '-0.05em' }],
} as const;

export const fontWeights = {
  normal: '400',
  medium: '500',
  bold: '700',
  black: '900',
} as const;

export const fontFamily = {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
} as const;

export const letterSpacing = {
  label: '0.1em',
  tight: '-0.02em',
  normal: '0',
} as const;
