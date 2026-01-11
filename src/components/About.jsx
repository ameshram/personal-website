import { about } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-20">
      <div className="max-w-content mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-12 text-center">
          About
        </h2>

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
      </div>
    </section>
  );
}
