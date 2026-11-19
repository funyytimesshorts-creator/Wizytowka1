import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { reviews } from '@/data/content';

export function Reviews() {
  const { t, lang } = useLanguage();

  return (
    <section id="reviews" className="relative bg-ink-800 bg-noise py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="reveal mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-xs font-medium tracking-[0.25em] text-gold-500 uppercase">
              {t.reviews.label}
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="reveal reveal-delay-1 mb-4 font-display text-4xl font-light text-cream-50 sm:text-5xl">
            {t.reviews.title}
          </h2>
          <p className="reveal reveal-delay-2 text-base text-cream-200/55">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group relative flex flex-col rounded-xl border border-cream-200/8 bg-ink-700/30 p-7 transition-all duration-500 hover:border-gold-500/20 hover:bg-ink-700/60`}
            >
              {/* Quote icon */}
              <Quote className="mb-4 h-8 w-8 text-gold-500/20" fill="currentColor" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`h-4 w-4 ${
                      j < review.rating ? 'text-gold-400' : 'text-cream-200/15'
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="mb-6 flex-1 text-sm italic leading-relaxed text-cream-200/70">
                "{review.text[lang]}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-cream-200/8 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/20 bg-ink-900/60 font-display text-lg font-semibold text-gold-400">
                  {review.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-cream-100">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
