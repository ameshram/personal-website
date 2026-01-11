import { education, certifications } from '../data/content';
import { Section, SectionTitle } from './ui/Section';

function GraduationIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function CertificateIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

export default function Education() {
  return (
    <Section id="education">
      <SectionTitle>Education & Certifications</SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Degrees */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <GraduationIcon className="w-5 h-5 text-accent" />
            Degrees
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-surface border border-white/10 rounded-xl p-5"
              >
                <h4 className="text-base font-semibold text-text-primary mb-1">
                  {edu.degree}
                </h4>
                <p className="text-sm text-accent mb-1">{edu.university}</p>
                <p className="text-xs text-text-secondary">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <CertificateIcon className="w-5 h-5 text-accent" />
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-surface border border-white/10 rounded-xl p-5"
              >
                <h4 className="text-base font-semibold text-text-primary mb-1">
                  {cert.name}
                </h4>
                <p className="text-sm text-accent mb-1">{cert.issuer}</p>
                <p className="text-xs text-text-secondary">
                  {cert.date}
                  {cert.expires && <span> · Expires {cert.expires}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
