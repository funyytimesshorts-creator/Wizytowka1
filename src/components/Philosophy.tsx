import { Flame, Leaf, Award, Hand } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { philosophyValues } from '@/data/content';

const iconMap: Record<string, typeof Flame> = {
  flame: Flame,
  leaf: Leaf,
  award: Award,
  hand: Hand,
};

export function Philosophy() {
  const { t, lang } = useLanguage();

  return (
    <section id="philosophy" className="relative bg-ink-800 bg-noise py-24 sm:py-32">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="reveal mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-xs font-medium tracking-[0.25em] text-gold-500 uppercase">
              {t.philosophy.label}
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="reveal reveal-delay-1 mb-4 font-display text-4xl font-light text-cream-50 sm:text-5xl">
            {t.philosophy.title}
          </h2>
          <p className="reveal reveal-delay-2 text-base text-cream-200/55">
            {t.philosophy.subtitle}
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {philosophyValues.map((value, i) => {
            const Icon = iconMap[value.icon] ?? Flame;
            return (
              <div
                key={value.icon}
                className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-xl border border-cream-200/8 bg-ink-700/40 p-8 text-center transition-all duration-500 hover:border-gold-500/30 hover:bg-ink-700/80`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gold-500/0 to-gold-500/0 opacity-0 transition-opacity duration-500 group-hover:from-gold-500/5 group-hover:opacity-100" />

                <div className="relative mb-6 flex justify-center">
                  <div className="absolute h-20 w-20 rounded-full bg-ember-500/10 blur-xl transition-all duration-500 group-hover:bg-ember-500/20" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/20 bg-ink-900/60 transition-all duration-500 group-hover:border-gold-500/50 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-gold-400" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="relative mb-3 font-display text-xl font-medium text-cream-50">
                  {value.title[lang]}
                </h3>
                <p className="relative text-sm leading-relaxed text-cream-200/55">
                  {value.description[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
