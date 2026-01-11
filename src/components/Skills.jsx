import { skills } from '../data/content';

// Skills that should be highlighted (core differentiators)
const highlightedSkills = [
  'Generative AI',
  'Agentic AI Systems',
  'AI/ML Strategy & Roadmap',
  'Team Leadership & Mentorship',
  'LLMs',
  'RAG',
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 px-6 md:px-20 bg-surface">
      <div className="max-w-content mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm ${
                      highlightedSkills.includes(skill)
                        ? 'bg-accent/20 text-accent border border-accent/30'
                        : 'bg-surface-light text-text-secondary'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
