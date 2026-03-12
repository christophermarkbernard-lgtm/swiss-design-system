import React from 'react';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  className?: string;
}

export function Divider({
  orientation = 'horizontal',
  label,
  className = '',
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        className={className}
        style={{
          width: '1px',
          backgroundColor: 'var(--color-border)',
          alignSelf: 'stretch',
        }}
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  if (label) {
    return (
      <div
        className={`flex items-center gap-4 ${className}`}
        role="separator"
      >
        <hr className="swiss-rule flex-1" />
        <span className="type-label">{label}</span>
        <hr className="swiss-rule flex-1" />
      </div>
    );
  }

  return <hr className={`swiss-rule ${className}`} role="separator" />;
}
