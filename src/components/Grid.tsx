import React from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: number;
  gap?: number;
  children: React.ReactNode;
}

export function Grid({
  cols = 12,
  gap = 24,
  className = '',
  style,
  children,
  ...props
}: GridProps) {
  return (
    <div
      className={`swiss-grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: `${gap}px`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number;
  start?: number;
  children: React.ReactNode;
}

export function Col({
  span = 12,
  start,
  className = '',
  style,
  children,
  ...props
}: ColProps) {
  return (
    <div
      className={className}
      style={{
        gridColumn: start
          ? `${start} / span ${span}`
          : `span ${span}`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
