import { useRef, useEffect, useCallback } from 'react';

export default function GlowCard({ children, accent = true, className = '' }) {
  const ref = useRef(null);

  const handleMouse = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI) + 90;
    const isNear =
      e.clientX > r.left - 80 &&
      e.clientX < r.right + 80 &&
      e.clientY > r.top - 80 &&
      e.clientY < r.bottom + 80;
    el.style.setProperty('--angle', `${angle}deg`);
    el.style.setProperty('--active', isNear ? '1' : '0');
    el.style.setProperty('--gx', `${e.clientX - r.left}px`);
    el.style.setProperty('--gy', `${e.clientY - r.top}px`);
  }, []);

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--active', '0');
  }, []);

  useEffect(() => {
    const fn = (e) => handleMouse(e);
    document.addEventListener('pointermove', fn, { passive: true });
    return () => document.removeEventListener('pointermove', fn);
  }, [handleMouse]);

  const borderColor = accent ? '0, 210, 190' : '120, 140, 150';

  return (
    <div
      ref={ref}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        '--angle': '0deg',
        '--active': '0',
        '--gx': '50%',
        '--gy': '50%',
        position: 'relative',
        borderRadius: 20,
        padding: 1.5,
        background: `conic-gradient(from var(--angle), transparent 40%, rgba(${borderColor}, calc(0.5 * var(--active))) 50%, transparent 60%)`,
        transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = `0 12px 40px rgba(${borderColor}, 0.06)`;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div
        style={{
          borderRadius: 19,
          overflow: 'hidden',
          position: 'relative',
          background: 'rgba(8, 12, 20, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: `radial-gradient(500px circle at var(--gx) var(--gy), rgba(${borderColor}, 0.06), transparent 45%)`,
            opacity: 'var(--active)',
            transition: 'opacity 0.4s ease',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
      </div>
    </div>
  );
}
