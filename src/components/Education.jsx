import { GraduationCap, Award } from 'lucide-react';
import { education, certifications } from '../data/content';
import SectionHeader from './ui/SectionHeader';
import GlowCard from './ui/GlowCard';
import useReveal from '../hooks/useReveal';

function EducationCard({ edu, index }) {
  const { ref, visible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms`,
        flex: 1,
        minWidth: 200,
      }}
    >
      <GlowCard>
        <div style={{ padding: '24px 20px', textAlign: 'center' }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'rgba(0,210,190,0.06)',
              border: '1px solid rgba(0,210,190,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text-primary)',
              margin: '0 auto 12px',
            }}
          >
            <GraduationCap size={20} />
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-family-display)',
              fontSize: 16,
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: 4,
            }}
          >
            {edu.degree}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: 13,
              color: '#00d2be',
              marginBottom: 4,
            }}
          >
            {edu.university}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: 11,
              color: 'var(--color-text-muted)',
              margin: 0,
            }}
          >
            {edu.location}
          </p>
        </div>
      </GlowCard>
    </div>
  );
}

function CertificationCard({ cert, index }) {
  const { ref, visible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${(index + 3) * 100}ms`,
        flex: 1,
        minWidth: 200,
      }}
    >
      <GlowCard>
        <div style={{ padding: '24px 20px', textAlign: 'center' }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'rgba(0,210,190,0.06)',
              border: '1px solid rgba(0,210,190,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00d2be',
              margin: '0 auto 12px',
            }}
          >
            <Award size={20} />
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-family-display)',
              fontSize: 16,
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: 4,
            }}
          >
            {cert.name}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: 13,
              color: '#00d2be',
              marginBottom: 4,
            }}
          >
            {cert.issuer}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: 11,
              color: 'var(--color-text-muted)',
              margin: 0,
            }}
          >
            {cert.year}
          </p>
        </div>
      </GlowCard>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" style={{ padding: '100px 32px', maxWidth: 1120, margin: '0 auto' }}>
      <SectionHeader title="Education & Certifications" />

      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="edu-row" style={{ marginBottom: 16 }}>
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>

        <div className="edu-row" style={{ maxWidth: 600, margin: '0 auto' }}>
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .edu-row {
          display: flex;
          gap: 16px;
        }
        @media (max-width: 768px) {
          .edu-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
