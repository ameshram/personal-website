import { BookOpen, Activity, Users, Zap } from 'lucide-react';
import { about } from '../data/content';
import SectionHeader from './ui/SectionHeader';
import GlowCard from './ui/GlowCard';
import useReveal from '../hooks/useReveal';

const items = [
  {
    icon: BookOpen,
    title: 'AI Systems Architect',
    desc: 'Designed and shipped production AI platforms at enterprise scale — agentic reasoning engines, GenAI remediation systems, and deep learning recommendation systems.',
  },
  {
    icon: Activity,
    title: '$100M+ Business Impact',
    desc: 'Impact measured by what ships: revenue generated, costs eliminated, risks mitigated. Cumulative value exceeds $100M across three industries.',
  },
  {
    icon: Users,
    title: 'Team & Org Builder',
    desc: 'Scaled AI and data science organizations from the ground up, establishing MLOps pipelines that cut model-to-production time by 60%.',
  },
  {
    icon: Zap,
    title: 'Enterprise AI Strategist',
    desc: 'Partner with C-suite leadership to define multi-year AI roadmaps — translating frontier research into production systems that transform operations.',
  },
];

function AboutCard({ item, index }) {
  const { ref, visible } = useReveal(0.1);
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms`,
      }}
    >
      <GlowCard>
        <div
          style={{
            padding: '28px 26px',
            minHeight: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'rgba(0, 210, 190, 0.06)',
              border: '1px solid rgba(0, 210, 190, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00d2be',
              marginBottom: 20,
            }}
          >
            <Icon size={20} />
          </div>
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 18,
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: 10,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: 13.5,
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {item.desc}
            </p>
          </div>
        </div>
      </GlowCard>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 32px', maxWidth: 1120, margin: '0 auto' }}>
      <SectionHeader title="About" />
      <p
        style={{
          fontFamily: 'var(--font-family-body)',
          fontSize: 15,
          color: 'var(--color-text-secondary)',
          lineHeight: 1.8,
          maxWidth: 700,
          marginBottom: 44,
        }}
      >
        {about.paragraph}
      </p>

      <div className="about-grid">
        {items.map((item, i) => (
          <AboutCard key={i} item={item} index={i} />
        ))}
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
