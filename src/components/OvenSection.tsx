import { TreePine, Thermometer, Mountain } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { images } from '@/data/content';

export function OvenSection() {
  const { t } = useLanguage();

  const features = [
    { icon: TreePine, title: t.oven.feature1Title, desc: t.oven.feature1Desc },
    { icon: Thermometer, title: t.oven.feature2Title, desc: t.oven.feature2Desc },
    { icon: Mountain, title: t.oven.feature3Title, desc: t.oven.feature3Desc },
  ];

  return (
    <section id="oven" className="relative overflow-hidden bg-ink-800 py-24 sm:py-32">
      {/* Ember glow background */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-ember-600/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="reveal relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={images.ovenFire}
                alt="Wood-fired oven with flames"
                className="aspect-[4/5] w-full object-cover sm:aspect-square"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-ember-400/20" />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-2 rounded-xl border border-ember-500/20 bg-ink-900/90 px-6 py-4 backdrop-blur-md ember-glow sm:right-6">
              <div className="font-display text-4xl font-semibold text-ember-400">90s</div>
              <div className="text-xs tracking-wide text-cream-200/50">{t.about.stat3Label}</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="reveal mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-ember-400" />
              <span className="text-xs font-medium tracking-[0.25em] text-ember-400 uppercase">
                {t.oven.label}
              </span>
            </div>

            <h2 className="reveal reveal-delay-1 mb-8 font-display text-4xl font-light text-cream-50 sm:text-5xl">
              {t.oven.title}
            </h2>

            <div className="reveal reveal-delay-2 space-y-5">
              <p className="text-base leading-relaxed text-cream-200/70">{t.oven.p1}</p>
              <p className="text-base leading-relaxed text-cream-200/60">{t.oven.p2}</p>
              <p className="text-base leading-relaxed text-cream-200/60">{t.oven.p3}</p>
            </div>

            {/* Features */}
            <div className="reveal reveal-delay-3 mt-10 space-y-4">
              {features.map((feat, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-ember-400/20 bg-ink-900/50">
                    <feat.icon className="h-5 w-5 text-ember-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-cream-50">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-cream-200/50">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
