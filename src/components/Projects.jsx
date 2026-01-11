import { projects } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-20">
      <div className="max-w-content mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-12">
          Projects & Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-surface border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-colors"
            >
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-1">
                  {project.title}
                </h3>
                <span className="text-sm text-text-secondary">
                  {project.company}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-sm font-medium text-accent">Problem: </span>
                  <span className="text-text-secondary text-sm">{project.problem}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-accent">Approach: </span>
                  <span className="text-text-secondary text-sm">{project.approach}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                {project.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="bg-accent/10 border border-accent/20 rounded-lg px-4 py-3 text-center min-w-[100px]">
                    <div className="text-2xl md:text-3xl font-bold text-accent">
                      {metric.value}
                    </div>
                    <div className="text-xs text-text-secondary mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
