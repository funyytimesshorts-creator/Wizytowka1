import { Flame, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { images } from '@/data/content';

export function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Wood-fired pizza oven with flames"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-ink-900/50 to-ink-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 to-transparent" />
      </div>

      {/* Ember glow overlay */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-ember-500/10 blur-3xl animate-glow-pulse" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Tagline badge */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-ink-900/40 px-4 py-2 opacity-0 backdrop-blur-sm"
          style={{ animation: 'fadeUp 0.8s ease-out 0.2s forwards' }}
        >
          <Flame className="h-4 w-4 text-ember-400" fill="currentColor" />
          <span className="text-xs font-medium tracking-[0.2em] text-gold-300 uppercase">
            FUOCO — Wood Fired Pizza
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="font-display text-5xl font-light leading-[1.1] text-cream-50 opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animation: 'fadeUp 0.8s ease-out 0.4s forwards' }}
        >
          {t.hero.title}{' '}
          <span className="text-shimmer italic font-medium">{t.hero.titleAccent}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-cream-200/80 opacity-0 sm:text-lg"
          style={{ animation: 'fadeUp 0.8s ease-out 0.6s forwards' }}
        >
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row"
          style={{ animation: 'fadeUp 0.8s ease-out 0.8s forwards' }}
        >
          <button
            onClick={() => scrollTo('#menu')}
            className="group flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-ink-900 transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
          >
            {t.hero.ctaMenu}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo('#about')}
            className="rounded-full border border-cream-200/25 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-all duration-300 hover:border-gold-500/60 hover:text-gold-400"
          >
            {t.hero.ctaDiscover}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-cream-200/50 transition-colors hover:text-gold-400"
        aria-label={t.hero.scroll}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">{t.hero.scroll}</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
}
