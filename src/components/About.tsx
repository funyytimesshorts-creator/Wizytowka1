import { useLanguage } from '@/hooks/useLanguage';
import { images, restaurant } from '@/data/content';

export function About() {
  const { t } = useLanguage();

  const stats = [
    { value: t.about.stat1Value, label: t.about.stat1Label },
    { value: t.about.stat2Value, label: t.about.stat2Label },
    { value: t.about.stat3Value, label: t.about.stat3Label },
  ];

  return (
    <section id="about" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Label */}
        <div className="reveal mb-4 flex items-center gap-3">
          <div className="h-px w-12 bg-gold-500" />
          <span className="text-xs font-medium tracking-[0.25em] text-gold-500 uppercase">
            {t.about.label}
          </span>
        </div>

        <h2 className="reveal reveal-delay-1 mb-16 max-w-2xl font-display text-4xl font-light text-cream-50 sm:text-5xl">
          {t.about.title}
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <div className="reveal reveal-delay-1 space-y-6">
              <p className="text-lg leading-relaxed text-cream-200/75">{t.about.p1}</p>
              <p className="text-base leading-relaxed text-cream-200/60">{t.about.p2}</p>
              <p className="text-base leading-relaxed text-cream-200/60">{t.about.p3}</p>
            </div>

            {/* Stats */}
            <div className="reveal reveal-delay-2 mt-12 grid grid-cols-3 gap-4 border-t border-cream-200/10 pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-display text-3xl font-semibold text-gold-400 sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs tracking-wide text-cream-200/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="reveal reveal-delay-1 mt-8 overflow-hidden rounded-lg">
              <img
                src={images.aboutOven}
                alt="Wood-fired oven interior"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="reveal reveal-delay-2 space-y-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={images.aboutChef}
                  alt="Chef preparing pizza dough"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={images.aboutInterior}
                  alt="Restaurant interior"
                  className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Founded badge */}
            <div className="absolute -bottom-4 -left-4 rounded-lg border border-gold-500/20 bg-ink-800/90 px-5 py-3 backdrop-blur-sm gold-glow">
              <div className="text-xs tracking-wider text-cream-200/50">EST.</div>
              <div className="font-display text-2xl font-semibold text-gold-400">
                {restaurant.foundedYear}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
