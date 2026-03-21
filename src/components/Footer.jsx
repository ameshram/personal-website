export default function Footer() {
  return (
    <footer
      style={{
        padding: '24px 32px',
        maxWidth: 1120,
        margin: '0 auto',
        borderTop: '1px solid var(--color-border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-family-body)',
          fontSize: 11,
          color: 'var(--color-text-muted)',
        }}
      >
        &copy; 2026 Anup Meshram
      </span>
      <span
        style={{
          fontFamily: 'var(--font-family-body)',
          fontSize: 11,
          color: 'var(--color-text-muted)',
        }}
      >
        Designed with intelligence.
      </span>
    </footer>
  );
}
