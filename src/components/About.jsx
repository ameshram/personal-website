import { about } from '../data/content';
import { Section, SectionTitle } from './ui/Section';

export default function About() {
  return (
    <Section id="about">
      <SectionTitle centered>About</SectionTitle>
      <div className="max-w-3xl mx-auto">
        <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 text-center">
          {about.paragraph}
        </p>
        <ul className="space-y-4 max-w-2xl mx-auto">
          {about.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 bg-accent rounded-full flex-shrink-0" />
              <span className="text-text-primary">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
