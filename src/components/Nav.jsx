import { useState, useEffect } from 'react';
import { navLinks } from '../data/content';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        padding: scrolled ? '8px 0' : '16px 0',
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', justifyContent: 'center', padding: '0 16px', overflow: 'hidden' }}>
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            background: scrolled ? 'rgba(8,12,20,0.88)' : 'rgba(8,12,20,0.5)',
            backdropFilter: 'blur(24px) saturate(1.5)',
            WebkitBackdropFilter: 'blur(24px) saturate(1.5)',
            borderRadius: 60,
            padding: '5px 6px',
            border: `1px solid rgba(0,210,190,${scrolled ? 0.1 : 0.04})`,
            boxShadow: scrolled ? '0 4px 40px rgba(0,210,190,0.04)' : 'none',
            transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <a
            href="#"
            style={{
              padding: '8px 18px',
              borderRadius: 50,
              textDecoration: 'none',
              fontFamily: 'var(--font-family-display)',
              fontSize: 15,
              fontWeight: 700,
              color: '#00d2be',
            }}
          >
            AM
          </a>
          <div
            style={{
              width: 1,
              height: 14,
              background: 'var(--color-border)',
              margin: '0 4px',
            }}
          />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                padding: '8px 16px',
                borderRadius: 50,
                textDecoration: 'none',
                fontFamily: 'var(--font-family-body)',
                fontSize: 11.5,
                fontWeight: 500,
                color: 'var(--color-text-muted)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#00d2be';
                e.target.style.background = 'rgba(0,210,190,0.06)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--color-text-muted)';
                e.target.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
