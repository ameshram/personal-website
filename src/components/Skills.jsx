import { skills, highlightedSkills } from '../data/content';
import { Section, SectionTitle } from './ui/Section';

export default function Skills() {
  return (
    <Section id="skills" dark>
      <SectionTitle>Skills</SectionTitle>

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
    </Section>
  );
}
