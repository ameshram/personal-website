import { contact } from '../data/content';
import useReveal from '../hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" style={{ padding: '100px 32px', maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            width: 48,
            height: 48,
            borderRadius: 14,
            background: 'rgba(8,12,20,0.7)',
            backdropFilter: 'blur(12px)',
            border: '1px solid var(--color-border)',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 24,
            boxShadow: '0 0 24px rgba(0,210,190,0.06)',
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#00d2be',
              boxShadow: '0 0 16px rgba(0,210,190,0.37)',
              animation: 'contactPulse 2.5s ease-in-out infinite',
            }}
          />
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-family-display)',
            fontSize: 'clamp(30px, 4.5vw, 44px)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.03em',
            marginBottom: 12,
            lineHeight: 1.1,
          }}
        >
          Let's build the{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #00d2be, #00b4d8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            future
          </span>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-family-body)',
            fontSize: 14,
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: 36,
          }}
        >
          {contact.context}
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '13px 28px',
              borderRadius: 10,
              textDecoration: 'none',
              fontFamily: 'var(--font-family-body)',
              fontSize: 13,
              fontWeight: 600,
              color: '#060810',
              background: 'linear-gradient(135deg, #00d2be, #00b4d8)',
              boxShadow: '0 2px 20px rgba(0,210,190,0.2)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 30px rgba(0,210,190,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 20px rgba(0,210,190,0.2)';
            }}
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${contact.email}`}
            style={{
              padding: '13px 28px',
              borderRadius: 10,
              textDecoration: 'none',
              fontFamily: 'var(--font-family-body)',
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--color-text-secondary)',
              background: 'rgba(8,12,20,0.6)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--color-border)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'rgba(0,210,190,0.25)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'var(--color-border)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Email
          </a>
        </div>
      </div>

      <style>{`
        @keyframes contactPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
      `}</style>
    </section>
  );
}
