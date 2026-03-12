const plugin = require('tailwindcss/plugin');

const colors = {
  background:       '#080808',
  'surface-1':      '#111111',
  'surface-2':      '#1a1a1a',
  border:           '#272727',
  'text-primary':   '#f0ede8',
  'text-secondary': '#6b6b6b',
  'accent-red':     '#e63946',
  'accent-yellow':  '#f0c040',
  'accent-white':   '#f5f5f0',
};

const swissPlugin = plugin(
  function ({ addBase, addComponents, addUtilities, theme }) {
    // CSS custom properties on :root
    addBase({
      ':root': {
        '--color-background':       colors['background'],
        '--color-surface-1':        colors['surface-1'],
        '--color-surface-2':        colors['surface-2'],
        '--color-border':           colors['border'],
        '--color-text-primary':     colors['text-primary'],
        '--color-text-secondary':   colors['text-secondary'],
        '--color-accent-red':       colors['accent-red'],
        '--color-accent-yellow':    colors['accent-yellow'],
        '--color-accent-white':     colors['accent-white'],
        '--font-sans': "'Inter Variable', Inter, system-ui, -apple-system, sans-serif",
      },
      'html': {
        backgroundColor: colors['background'],
        color:           colors['text-primary'],
        fontFamily:      "var(--font-sans)",
        fontSize:        '16px',
        lineHeight:      '1.5',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      },
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },
      'h1, h2, h3, h4, h5, h6': {
        fontWeight: '700',
        letterSpacing: '-0.02em',
        lineHeight: '1.1',
      },
    });

    // Component classes
    addComponents({
      // Swiss 12-column grid
      '.swiss-grid': {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        gap: '24px',
        width: '100%',
      },
      // Uppercase tracked label utility
      '.type-label': {
        fontSize:      '11px',
        fontWeight:    '700',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        lineHeight:    '16px',
        color:         colors['text-secondary'],
      },
      // Display / hero type
      '.type-display': {
        fontSize:      'clamp(48px, 8vw, 96px)',
        fontWeight:    '900',
        letterSpacing: '-0.05em',
        lineHeight:    '0.95',
        color:         colors['text-primary'],
      },
      // Swiss horizontal rule
      '.swiss-rule': {
        border:     'none',
        borderTop:  `1px solid ${colors['border']}`,
        margin:     '0',
      },
      // Accent left-border stripe
      '.accent-stripe-red': {
        borderLeft: `3px solid ${colors['accent-red']}`,
        paddingLeft: '16px',
      },
      '.accent-stripe-yellow': {
        borderLeft: `3px solid ${colors['accent-yellow']}`,
        paddingLeft: '16px',
      },
    });

    // Utilities
    addUtilities({
      '.tracking-label': { letterSpacing: '0.1em' },
      '.tracking-tight':  { letterSpacing: '-0.02em' },
      '.text-balance':    { textWrap: 'balance' },
      '.no-scrollbar': {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      },
    });
  },
  {
    theme: {
      extend: {
        colors: {
          swiss: colors,
        },
        fontFamily: {
          sans: ["'Inter Variable'", 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
          mono: ["'JetBrains Mono'", "'Fira Code'", 'monospace'],
        },
        fontSize: {
          '2xs': ['11px', { lineHeight: '16px' }],
          xs:    ['13px', { lineHeight: '20px' }],
          sm:    ['16px', { lineHeight: '24px' }],
          md:    ['20px', { lineHeight: '28px', letterSpacing: '-0.01em' }],
          lg:    ['24px', { lineHeight: '32px', letterSpacing: '-0.01em' }],
          xl:    ['32px', { lineHeight: '40px', letterSpacing: '-0.02em' }],
          '2xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.03em' }],
          '3xl': ['64px', { lineHeight: '72px', letterSpacing: '-0.04em' }],
          '4xl': ['96px', { lineHeight: '104px', letterSpacing: '-0.05em' }],
        },
        borderRadius: {
          none: '0px',
          sm:   '1px',
          DEFAULT: '2px',
          md:   '2px',
          lg:   '2px',
          full: '9999px',
        },
        boxShadow: {
          none: 'none',
        },
        spacing: {
          '18': '72px',
          '22': '88px',
        },
        gridTemplateColumns: {
          '12': 'repeat(12, minmax(0, 1fr))',
        },
      },
    },
  }
);

module.exports = swissPlugin;
