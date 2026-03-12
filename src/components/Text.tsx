import React from 'react';

type TextVariant = 'display' | 'heading' | 'subheading' | 'body' | 'label' | 'caption';

const variantStyles: Record<TextVariant, React.CSSProperties> = {
  display: {
    fontSize: 'clamp(48px, 8vw, 96px)',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    lineHeight: '0.95',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    lineHeight: '1.1',
  },
  subheading: {
    fontSize: '20px',
    fontWeight: 500,
    letterSpacing: '-0.01em',
    lineHeight: '1.3',
  },
  body: {
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: '0',
    lineHeight: '1.6',
  },
  label: {
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    lineHeight: '1.4',
    textTransform: 'uppercase',
    color: 'var(--color-text-secondary)',
  },
  caption: {
    fontSize: '13px',
    fontWeight: 400,
    letterSpacing: '0',
    lineHeight: '1.5',
    color: 'var(--color-text-secondary)',
  },
};

const variantTags: Record<TextVariant, keyof React.JSX.IntrinsicElements> = {
  display:    'h1',
  heading:    'h2',
  subheading: 'h3',
  body:       'p',
  label:      'span',
  caption:    'span',
};

export interface TextProps {
  variant?: TextVariant;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function Text({
  variant = 'body',
  as,
  className = '',
  style,
  children,
}: TextProps) {
  const Tag = (as ?? variantTags[variant]) as React.ElementType;
  return (
    <Tag
      className={className}
      style={{ ...variantStyles[variant], ...style }}
    >
      {children}
    </Tag>
  );
}
