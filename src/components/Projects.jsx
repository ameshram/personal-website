import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/content';
import SectionHeader from './ui/SectionHeader';
import GlowCard from './ui/GlowCard';
import Counter from './ui/Counter';
import useReveal from '../hooks/useReveal';

const independentProjects = [
  {
    title: 'Nimbus',
    tag: 'Independent · 2025',
    description:
      'AWS Certification Quiz & Flashcard Engine — AI-powered exam prep system generating scenario-based questions with detailed explanations across all certification domains. Features multi-domain coverage with 40+ topics and 100+ subtopics.',
    tech: ['AI Agents', 'React', 'Node.js', 'MongoDB', 'AWS LightSail'],
    demoUrl: 'http://54.83.78.220:3001/',
    githubUrl: null,
  },
  {
    title: 'Project Coming Soon',
    tag: 'Exploration · 2025',
    description: 'Details coming soon.',
    tech: ['LangGraph', 'GPT-4', 'React'],
    demoUrl: null,
    githubUrl: null,
  },
  {
    title: 'Project Coming Soon',
    tag: 'Independent · 2025',
    description: 'Details coming soon.',
    tech: ['Python', 'AWS', 'Streamlit'],
    demoUrl: null,
    githubUrl: null,
  },
];

function parseMetricValue(value) {
  const match = value.match(/^([<$]?)(\d+\.?\d*)([MBKT%+]*\+?)$/);
  if (!match) return null;
  const [, prefix, num, suffix] = match;
  return { prefix, num: parseFloat(num), suffix };
}

function ProfessionalCard({ project, index }) {
  const { ref, visible } = useReveal(0.1);

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
        <div style={{ padding: '24px 24px 20px' }}>
          <div style={{ marginBottom: 16 }}>
            <h3
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 18,
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: 4,
              }}
            >
              {project.title}
            </h3>
            <span
              style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: 12,
                color: 'var(--color-text-muted)',
              }}
            >
              {project.company}
            </span>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ marginBottom: 8 }}>
              <span
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#00d2be',
                }}
              >
                Problem:{' '}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 13,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {project.problem}
              </span>
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#00d2be',
                }}
              >
                Approach:{' '}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 13,
                  color: 'var(--color-text-secondary)',
                }}
              >
                {project.approach}
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              paddingTop: 16,
              borderTop: '1px solid var(--color-border)',
            }}
          >
            {project.metrics.map((metric, mi) => {
              const parsed = parseMetricValue(metric.value);
              return (
                <div
                  key={mi}
                  style={{
                    background: 'rgba(0,210,190,0.06)',
                    border: '1px solid rgba(0,210,190,0.12)',
                    borderRadius: 10,
                    padding: '12px 16px',
                    textAlign: 'center',
                    minWidth: 90,
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-family-display)',
                      fontSize: 22,
                      fontWeight: 700,
                      color: '#00d2be',
                      marginBottom: 2,
                    }}
                  >
                    {parsed ? (
                      <Counter end={parsed.num} prefix={parsed.prefix} suffix={parsed.suffix} />
                    ) : (
                      metric.value
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-family-body)',
                      fontSize: 10,
                      color: 'var(--color-text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </GlowCard>
    </div>
  );
}

function IndependentCard({ project, index }) {
  const { ref, visible } = useReveal(0.1);
  const hasDemoUrl = project.demoUrl && project.demoUrl !== '#';
  const hasGithubUrl = project.githubUrl && project.githubUrl !== '#';

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
        <div style={{ padding: '24px 24px 20px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-family-display)',
              fontSize: 18,
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: 4,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: 12,
              color: 'var(--color-text-muted)',
              marginBottom: 12,
            }}
          >
            {project.tag}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: 13.5,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            {project.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
            {project.tech.map((tech, i) => (
              <span
                key={i}
                style={{
                  padding: '4px 12px',
                  borderRadius: 50,
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 11,
                  color: 'var(--color-text-muted)',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              gap: 16,
              paddingTop: 16,
              borderTop: '1px solid var(--color-border)',
            }}
          >
            {hasDemoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#00d2be',
                  textDecoration: 'none',
                }}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            ) : (
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'var(--color-text-muted)',
                  opacity: 0.5,
                }}
              >
                <ExternalLink size={14} />
                Live Demo
              </span>
            )}
            {hasGithubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#00d2be',
                  textDecoration: 'none',
                }}
              >
                <Github size={14} />
                GitHub
              </a>
            ) : (
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-family-body)',
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'var(--color-text-muted)',
                  opacity: 0.5,
                }}
              >
                <Github size={14} />
                GitHub
              </span>
            )}
          </div>
        </div>
      </GlowCard>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('professional');

  const tabs = [
    { id: 'professional', label: 'Professional' },
    { id: 'independent', label: 'Independent Work & Explorations' },
  ];

  return (
    <section id="projects" style={{ padding: '100px 32px', maxWidth: 1120, margin: '0 auto' }}>
      <SectionHeader title="Projects & Impact" />

      {/* Pill-style tabs */}
      <div
        style={{
          display: 'inline-flex',
          gap: 4,
          padding: 4,
          borderRadius: 50,
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid var(--color-border)',
          marginBottom: 32,
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '8px 20px',
              borderRadius: 50,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-family-body)',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.02em',
              transition: 'all 0.25s ease',
              color: activeTab === tab.id ? '#00d2be' : 'var(--color-text-muted)',
              background:
                activeTab === tab.id ? 'rgba(0,210,190,0.06)' : 'transparent',
              ...(activeTab === tab.id
                ? { border: '1px solid rgba(0,210,190,0.15)' }
                : { border: '1px solid transparent' }),
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'professional' && (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProfessionalCard key={index} project={project} index={index} />
          ))}
        </div>
      )}

      {activeTab === 'independent' && (
        <div className="projects-grid">
          {independentProjects.map((project, index) => (
            <IndependentCard key={index} project={project} index={index} />
          ))}
        </div>
      )}

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
