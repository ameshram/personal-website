import { education, certifications } from '../data/content';
import { Section, SectionTitle } from './ui/Section';

function GraduationIcon({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function BadgeCheckIcon({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  );
}

function EducationCard({ edu }) {
  return (
    <div className="bg-surface border border-white/10 rounded-xl p-6 md:p-5 text-center hover:border-accent/30 transition-colors min-w-[200px] flex-1">
      <GraduationIcon className="w-8 h-8 text-text-primary mx-auto mb-3" />
      <h3 className="text-lg font-semibold text-text-primary mb-1">
        {edu.degree}
      </h3>
      <p className="text-sm text-accent mb-1">{edu.university}</p>
      <p className="text-xs text-text-secondary">{edu.location}</p>
    </div>
  );
}

function CertificationCard({ cert }) {
  return (
    <div className="bg-surface border border-white/10 rounded-xl p-6 md:p-5 text-center hover:border-accent/30 transition-colors min-w-[200px] flex-1">
      <BadgeCheckIcon className="w-8 h-8 text-accent mx-auto mb-3" />
      <h3 className="text-lg font-semibold text-text-primary mb-1">
        {cert.name}
      </h3>
      <p className="text-sm text-accent mb-1">{cert.issuer}</p>
      <p className="text-xs text-text-secondary">{cert.year}</p>
    </div>
  );
}

export default function Education() {
  return (
    <Section id="education">
      <SectionTitle>Education & Certifications</SectionTitle>

      <div className="max-w-[900px] mx-auto space-y-8">
        {/* Education Row */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </div>

        {/* Certifications Row */}
        <div className="flex flex-col md:flex-row gap-6 justify-center md:max-w-[600px] md:mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </Section>
  );
}
