import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  accent?: 'red' | 'yellow' | 'none';
  children: React.ReactNode;
}

export function Card({
  elevated = false,
  accent = 'none',
  className = '',
  children,
  ...props
}: CardProps) {
  const classes = [
    'card',
    elevated ? 'card-elevated' : '',
    accent !== 'none' ? `card-accent-${accent}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
