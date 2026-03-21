import { skills } from '../data/content';
import useReveal from '../hooks/useReveal';

const HIGHLIGHTED = ['Agentic AI Systems', 'Generative AI', 'LLM Engineering', 'RAG Systems', 'Enterprise AI Strategy', 'Agentic Systems'];

const allSkills = Object.values(skills).flat();
const mid = Math.ceil(allSkills.length / 2);
const ROW1 = allSkills.slice(0, mid);
const ROW2 = allSkills.slice(mid);

function SkillBadge({ skill }) {
  const hi = HIGHLIGHTED.includes(skill);
  return (
    <span
      style={{
        padding: '9px 20px',
        borderRadius: 50,
        whiteSpace: 'nowrap',
        fontFamily: 'var(--font-family-body)',
        fontSize: 12,
        fontWeight: hi ? 600 : 400,
        color: hi ? '#00d2be' : 'var(--color-text-muted)',
        background: hi ? 'rgba(0,210,190,0.06)' : 'rgba(255,255,255,0.015)',
        border: `1px solid ${hi ? 'rgba(0,210,190,0.15)' : 'rgba(255,255,255,0.03)'}`,
      }}
    >
      {skill}
    </span>
  );
}

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="skills"
      style={{
        padding: '60px 0',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      >
        {[ROW1, ROW2].map((row, ri) => (
          <div
            key={ri}
            style={{
              display: 'flex',
              gap: 10,
              animation: `sk${ri} ${36 + ri * 5}s linear infinite`,
              marginBottom: ri === 0 ? 10 : 0,
            }}
          >
            {[...row, ...row, ...row].map((s, si) => (
              <SkillBadge key={si} skill={s} />
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes sk0 { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        @keyframes sk1 { 0% { transform: translateX(-33.33%); } 100% { transform: translateX(0); } }
      `}</style>
    </section>
  );
}
