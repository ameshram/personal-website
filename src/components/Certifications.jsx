import { certifications } from '../data/content';
import { Section, SectionTitle } from './ui/Section';

function CertificateIcon({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionTitle>Certifications</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-surface border border-white/10 rounded-xl p-5 hover:border-accent/50 transition-colors flex gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <CertificateIcon className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-text-primary leading-tight mb-1">
                {cert.name}
              </h3>
              <p className="text-sm text-text-secondary mb-1">{cert.issuer}</p>
              <p className="text-xs text-text-secondary">
                {cert.date}
                {cert.expires && <span> · Expires {cert.expires}</span>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
