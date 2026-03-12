import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'outlined';
  label?: string;
  error?: string;
}

export function Input({
  variant = 'default',
  label,
  error,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  const inputClass = variant === 'outlined'
    ? `input input-outlined ${className}`
    : `input ${className}`;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={inputId} className="type-label">
          {label}
        </label>
      )}
      <input id={inputId} className={inputClass} {...props} />
      {error && (
        <span style={{ fontSize: '13px', color: 'var(--color-accent-red)' }}>
          {error}
        </span>
      )}
    </div>
  );
}
