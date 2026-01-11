import { experience, companyLogos } from '../data/content';
import { Section, SectionTitle } from './ui/Section';
import { highlightMetrics } from '../utils/highlightMetrics';

export default function Experience() {
  return (
    <Section id="experience" dark>
      <SectionTitle>Experience</SectionTitle>

      <div className="relative">
        <div className="hidden md:block absolute left-4 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-12">
          {experience.map((job, index) => {
            const logoSrc = companyLogos[job.company];
            return (
              <div key={index} className="relative md:pl-12">
                <div className="hidden md:block absolute left-2 top-2 w-5 h-5 rounded-full bg-accent border-4 border-surface" />

                <div className="bg-surface-light rounded-xl p-6 border border-white/10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                        {logoSrc ? (
                          <img
                            src={logoSrc}
                            alt={`${job.company} logo`}
                            className="w-10 h-10 object-contain"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-white/20">
                            <span className="text-text-primary font-bold text-xs">SS&C</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-text-primary">
                          {job.company}
                          {job.companyNote && (
                            <span className="text-sm text-text-secondary font-normal ml-2">
                              ({job.companyNote})
                            </span>
                          )}
                        </h3>
                        <p className="text-text-primary font-medium">{job.role}</p>
                      </div>
                    </div>
                    <div className="text-sm text-text-secondary md:text-right flex-shrink-0">
                      <div>{job.dates}</div>
                      {job.location && <div>{job.location}</div>}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {job.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 mt-2 bg-accent/60 rounded-full flex-shrink-0" />
                        <span className="text-text-secondary">{highlightMetrics(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
