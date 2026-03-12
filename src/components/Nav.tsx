import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavProps {
  items: NavItem[];
  logo?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export function Nav({ items, logo, actions, className = '' }: NavProps) {
  return (
    <nav className={`swiss-nav ${className}`} style={{ justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {logo && (
          <div style={{ padding: '0 20px', marginRight: '8px', borderRight: '1px solid var(--color-border)' }}>
            {logo}
          </div>
        )}
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`swiss-nav-item${item.active ? ' active' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </div>
      {actions && (
        <div style={{ display: 'flex', alignItems: 'center', paddingRight: '20px' }}>
          {actions}
        </div>
      )}
    </nav>
  );
}
