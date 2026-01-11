import { experience } from '../data/content';

// Helper function to highlight metrics in bullet text
function highlightMetrics(text) {
  // Regex to match metrics like: $28M, 95%, <10 min, $5M+/yr, 350M, 1.5B, 97.96%, 100Bn, 1.2T
  const metricPattern = /(<?\$?\d+\.?\d*[MBKT]?(?:Bn)?\+?(?:\/yr|\/mo|%| pts| min)?)/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = metricPattern.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    // Add the highlighted match
    parts.push(
      <span key={match.index} className="text-accent font-semibold">
        {match[0]}
      </span>
    );
    lastIndex = metricPattern.lastIndex;
  }

  // Add remaining text after last match
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

// Company logo paths
const companyLogos = {
  'Amazon Web Services (AWS)': '/logos/aws.svg',
  'Ouro Inc.': '/logos/ouro.svg',
  'NBC Universal': '/logos/nbc.svg',
  'SS&C GlobeOp': null, // Text fallback
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-6 md:px-20 bg-surface">
      <div className="max-w-content mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-12">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline Line (Desktop) */}
          <div className="hidden md:block absolute left-4 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12">
            {experience.map((job, index) => {
              const logoSrc = companyLogos[job.company];
              return (
                <div key={index} className="relative md:pl-12">
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden md:block absolute left-2 top-2 w-5 h-5 rounded-full bg-accent border-4 border-surface" />

                  <div className="bg-surface-light rounded-xl p-6 border border-white/10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        {/* Company Logo */}
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
      </div>
    </section>
  );
}
