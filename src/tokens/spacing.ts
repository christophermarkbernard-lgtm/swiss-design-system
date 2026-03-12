// Base unit: 4px. All values are multiples of the base unit.
export const spacing = {
  0:    '0px',
  px:   '1px',
  0.5:  '2px',
  1:    '4px',
  1.5:  '6px',
  2:    '8px',
  2.5:  '10px',
  3:    '12px',
  4:    '16px',
  5:    '20px',
  6:    '24px',
  7:    '28px',
  8:    '32px',
  10:   '40px',
  12:   '48px',
  14:   '56px',
  16:   '64px',
  20:   '80px',
  24:   '96px',
  32:   '128px',
  40:   '160px',
  48:   '192px',
  64:   '256px',
} as const;

// Grid config: 12 columns, 24px gutters
export const grid = {
  columns: 12,
  gutter: '24px',
  margin: '24px',
} as const;
