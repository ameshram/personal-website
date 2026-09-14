import { useState, useEffect } from 'react';
import { hero } from '../data/content';
import DottedWaveSurface from './ui/DottedWaveSurface';
import Spotlight from './ui/Spotlight';
import GlowCard from './ui/GlowCard';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  const a = (i) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(28px)',
    transition: `all 0.85s cubic-bezier(0.16,1,0.3,1) ${250 + i * 130}ms`,
  });

  return (
    <section
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 32px 80px',
      }}
    >
      <DottedWaveSurface />
      <Spotlight />
      <div
        style={{
          position: 'absolute',
          top: '0%',
          right: '5%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,210,190,0.05) 0%, transparent 55%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="hero-grid" style={{ maxWidth: 1120, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        {/* Left column */}
        <div>
          <div style={a(0)}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px 6px 10px',
                borderRadius: 50,
                background: 'rgba(8,12,20,0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0,210,190,0.15)',
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#00d2be',
                  boxShadow: '0 0 12px rgba(0,210,190,0.37)',
                  animation: 'pulse 2.5s ease-in-out infinite',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#00d2be',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Building Intelligent Systems
              </span>
            </span>
          </div>

          <div
            style={{
              ...a(1),
              fontFamily: 'var(--font-family-body)',
              fontSize: 12,
              fontWeight: 500,
              color: 'var(--color-text-muted)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            AI & Data Science Leader
          </div>

          <h1
            style={{
              ...a(2),
              fontFamily: 'var(--font-family-display)',
              fontWeight: 700,
              fontSize: 'clamp(46px, 5.5vw, 70px)',
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.045em',
              lineHeight: 1,
              marginBottom: 6,
            }}
          >
            Anup
          </h1>
          <h1
            style={{
              ...a(3),
              fontFamily: 'var(--font-family-display)',
              fontWeight: 300,
              fontSize: 'clamp(46px, 5.5vw, 70px)',
              letterSpacing: '-0.045em',
              lineHeight: 1,
              marginBottom: 28,
              background: 'linear-gradient(135deg, #00d2be 0%, #00b4d8 60%, #7dd3fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Meshram
          </h1>

          <p
            style={{
              ...a(4),
              fontFamily: 'var(--font-family-body)',
              fontSize: 15,
              fontWeight: 400,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
              maxWidth: 430,
              marginBottom: 36,
            }}
          >
            {hero.subheadline}
          </p>

          <div style={{ ...a(5), display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href={hero.primaryCTA.href}
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
              {hero.primaryCTA.text}
            </a>
            <a
              href={hero.secondaryCTA.href}
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
              {hero.secondaryCTA.text}
            </a>
          </div>
        </div>

        {/* Right column — Impact Dashboard */}
        <div style={{ ...a(3), position: 'relative' }}>
          <GlowCard>
            <div style={{ padding: '32px 28px', position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 28,
                  right: 28,
                  height: 1,
                  background: 'linear-gradient(90deg, transparent, rgba(0,210,190,0.21), transparent)',
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 22 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#00d2be',
                    boxShadow: '0 0 8px rgba(0,210,190,0.37)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: 10.5,
                    fontWeight: 600,
                    color: 'var(--color-text-muted)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Impact Dashboard
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: 'clamp(48px, 5.5vw, 64px)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.9,
                  marginBottom: 6,
                  background: 'linear-gradient(135deg, var(--color-text-primary) 20%, #00d2be 80%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                8-figure+
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 13,
                  color: 'var(--color-text-muted)',
                  marginBottom: 24,
                }}
              >
                cumulative business value through AI/ML
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: 1,
                  background: 'var(--color-border)',
                  borderRadius: 14,
                  overflow: 'hidden',
                }}
              >
                {[
                  { v: 'Millions', l: 'Users Profiled' },
                  { v: 'Most', l: 'AML Automated' },
                  { v: '8-figure', l: 'Spend Averted' },
                ].map((m, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'rgba(6,8,14,0.9)',
                      padding: '18px 10px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-family-display)',
                        fontSize: 24,
                        fontWeight: 700,
                        color: 'var(--color-text-primary)',
                        letterSpacing: '-0.02em',
                        marginBottom: 3,
                      }}
                    >
                      {m.v}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-family-body)',
                        fontSize: 9,
                        fontWeight: 500,
                        color: 'var(--color-text-muted)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {m.l}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </GlowCard>

          {/* Floating chips */}
          <div
            style={{
              ...a(6),
              position: 'absolute',
              top: -14,
              right: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div
              style={{
                background: 'rgba(8,12,20,0.88)',
                backdropFilter: 'blur(12px)',
                borderRadius: 12,
                padding: '9px 14px',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#34d399',
                  boxShadow: '0 0 8px rgba(52,211,153,0.5)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 11,
                  fontWeight: 500,
                  color: 'var(--color-text-secondary)',
                }}
              >
                Currently at Netspend
              </span>
            </div>
            <div
              style={{
                background: 'rgba(8,12,20,0.88)',
                backdropFilter: 'blur(12px)',
                borderRadius: 12,
                padding: '9px 14px',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#34d399',
                  boxShadow: '0 0 8px rgba(52,211,153,0.5)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 11,
                  fontWeight: 500,
                  color: 'var(--color-text-secondary)',
                }}
              >
                Ex-AWS
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(0.8)}}
        @keyframes spotIn{to{opacity:1}}
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
