import useReveal from '../../hooks/useReveal';

export default function SectionHeader({ title }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 48,
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#00d2be',
          boxShadow: '0 0 12px rgba(0,210,190,0.3)',
          flexShrink: 0,
        }}
      />
      <h2
        style={{
          fontFamily: "var(--font-family-display)",
          fontSize: 'clamp(30px, 4vw, 42px)',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          letterSpacing: '-0.03em',
          margin: 0,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          flex: 1,
          height: 1,
          background: 'linear-gradient(90deg, var(--color-border), transparent)',
        }}
      />
    </div>
  );
}
