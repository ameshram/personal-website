import { hero } from '../data/content';
import Button from './ui/Button';
import { ChevronDownIcon } from './ui/Icons';

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
          <Button href={hero.primaryCTA.href} className="w-full sm:w-auto">
            {hero.primaryCTA.text}
          </Button>
          <Button href={hero.secondaryCTA.href} variant="secondary" className="w-full sm:w-auto">
            {hero.secondaryCTA.text}
          </Button>
        </div>

        <div className="mt-16 opacity-40">
          <ChevronDownIcon className="w-5 h-5 mx-auto text-text-secondary" />
        </div>
      </div>
    </section>
  );
}
