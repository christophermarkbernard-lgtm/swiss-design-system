export const colors = {
  background: '#080808',
  'surface-1': '#111111',
  'surface-2': '#1a1a1a',
  border: '#272727',
  'text-primary': '#f0ede8',
  'text-secondary': '#6b6b6b',
  'accent-red': '#e63946',
  'accent-yellow': '#f0c040',
  'accent-white': '#f5f5f0',
} as const;

export type ColorToken = keyof typeof colors;
