import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { galleryImages } from '@/data/content';

export function Gallery() {
  const { t, lang } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length)),
    []
  );
  const showNext = useCallback(
    () => setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <section id="gallery" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="reveal mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-xs font-medium tracking-[0.25em] text-gold-500 uppercase">
              {t.gallery.label}
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="reveal reveal-delay-1 mb-4 font-display text-4xl font-light text-cream-50 sm:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="reveal reveal-delay-2 text-base text-cream-200/55">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => {
            return (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="reveal group relative aspect-square overflow-hidden rounded-lg"
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
              >
                <img
                  src={img.src}
                  alt={img.alt[lang]}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink-900/0 transition-colors duration-300 group-hover:bg-ink-900/30" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-md border border-gold-500/20 bg-ink-900/80 px-3 py-1.5 text-xs text-cream-200/80 backdrop-blur-sm">
                    {img.alt[lang]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/95 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-cream-200/15 text-cream-100 transition-colors hover:border-gold-500/50 hover:text-gold-400"
            aria-label={t.gallery.close}
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-cream-200/15 text-cream-100 transition-colors hover:border-gold-500/50 hover:text-gold-400 sm:left-8"
            aria-label={t.gallery.prev}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt[lang]}
            className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-cream-200/15 text-cream-100 transition-colors hover:border-gold-500/50 hover:text-gold-400 sm:right-8"
            aria-label={t.gallery.next}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-ink-800/80 px-4 py-2 text-xs tracking-wider text-cream-200/60 backdrop-blur-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
