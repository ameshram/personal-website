import { hero } from '../data/content';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-16">
      <div className="max-w-[800px] text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-3">
          {hero.name}
        </h1>
        <p className="text-xl md:text-2xl text-text-primary font-medium mb-2">
          {hero.title}
        </p>
        <p className="text-sm md:text-base text-text-secondary mb-6">
          $100M+ Business Impact · AWS · Ouro · NBC Universal
        </p>
        <p className="text-base md:text-lg text-text-secondary max-w-[600px] mx-auto mb-10">
          {hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={hero.primaryCTA.href}
            className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto"
          >
            {hero.primaryCTA.text}
          </a>
          <a
            href={hero.secondaryCTA.href}
            className="border border-accent text-accent hover:bg-accent/10 px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto"
          >
            {hero.secondaryCTA.text}
          </a>
        </div>

        {/* Subtle scroll indicator - no animation */}
        <div className="mt-16 opacity-40">
          <svg
            className="w-5 h-5 mx-auto text-text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
