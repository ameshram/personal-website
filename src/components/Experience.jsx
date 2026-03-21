import { experience } from '../data/content';
import SectionHeader from './ui/SectionHeader';
import GlowCard from './ui/GlowCard';
import useReveal from '../hooks/useReveal';

function highlightBulletMetrics(text) {
  return text.split(/(\$?\d+[MBKT%]?\+?(?:\/yr)?)/g).map((part, i) =>
    /\d/.test(part) ? (
      <span key={i} style={{ color: '#00d2be', fontWeight: 600 }}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

function ExperienceCard({ job, index }) {
  const { ref, visible } = useReveal(0.1);
  const isCurrent = index === 0;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms`,
      }}
    >
      <GlowCard accent={isCurrent}>
        <div className="exp-card-inner" style={{ padding: '28px 28px 24px', position: 'relative' }}>
          {isCurrent && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: 2.5,
                borderRadius: 2,
                background: 'linear-gradient(to bottom, #00d2be, transparent)',
              }}
            />
          )}
          <div className="exp-card-left">
            <div
              style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: 12,
                fontWeight: 600,
                color: isCurrent ? '#00d2be' : 'var(--color-text-muted)',
                letterSpacing: '0.04em',
              }}
            >
              {job.dates}
            </div>
            {isCurrent && (
              <div
                style={{
                  marginTop: 10,
                  display: 'inline-flex',
                  padding: '3px 10px',
                  borderRadius: 50,
                  background: 'rgba(0,210,190,0.06)',
                  border: '1px solid rgba(0,210,190,0.15)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: 9,
                    fontWeight: 700,
                    color: '#00d2be',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Current
                </span>
              </div>
            )}
          </div>
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 20,
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: 2,
              }}
            >
              {job.company}
              {job.companyNote && (
                <span
                  style={{
                    fontFamily: 'var(--font-family-body)',
                    fontSize: 12.5,
                    fontWeight: 400,
                    color: 'var(--color-text-muted)',
                    marginLeft: 8,
                  }}
                >
                  ({job.companyNote})
                </span>
              )}
            </h3>
            <div
              style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
                marginBottom: 14,
              }}
            >
              {job.role}
            </div>
            {job.bullets.map((b, j) => (
              <div
                key={j}
                style={{
                  display: 'flex',
                  gap: 10,
                  marginBottom: 7,
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: 'var(--color-text-secondary)',
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: isCurrent ? 'rgba(0,210,190,0.31)' : 'rgba(255,255,255,0.06)',
                    marginTop: 9,
                    flexShrink: 0,
                  }}
                />
                <span>{highlightBulletMetrics(b)}</span>
              </div>
            ))}
          </div>
        </div>
      </GlowCard>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 32px', maxWidth: 1120, margin: '0 auto' }}>
      <SectionHeader title="Experience" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {experience.map((job, i) => (
          <ExperienceCard key={i} job={job} index={i} />
        ))}
      </div>

      <style>{`
        .exp-card-inner {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 28px;
        }
        @media (max-width: 768px) {
          .exp-card-inner {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
