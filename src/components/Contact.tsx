import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { restaurant } from '@/data/content';

export function Contact() {
  const { t, lang } = useLanguage();

  const contactItems = [
    { icon: MapPin, label: t.contact.address, value: `${restaurant.address.street}, ${restaurant.address.city}` },
    { icon: Phone, label: t.contact.phone, value: restaurant.phone, href: `tel:${restaurant.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: t.contact.email, value: restaurant.email, href: `mailto:${restaurant.email}` },
  ];

  return (
    <section id="contact" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="reveal mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-xs font-medium tracking-[0.25em] text-gold-500 uppercase">
              {t.contact.label}
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="reveal reveal-delay-1 mb-4 font-display text-4xl font-light text-cream-50 sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="reveal reveal-delay-2 text-base text-cream-200/55">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="reveal mx-auto max-w-2xl space-y-6">
          {/* Contact items */}
          <div className="space-y-4">
            {contactItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-gold-500/20 bg-ink-800/60">
                  <item.icon className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs tracking-wide text-cream-200/40 uppercase">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-base text-cream-100 transition-colors hover:text-gold-400">
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-base text-cream-100">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Hours */}
          <div className="rounded-xl border border-cream-200/8 bg-ink-800/40 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
              <span className="font-display text-lg font-medium text-cream-50">{t.contact.hours}</span>
            </div>
            <div className="space-y-2">
              {restaurant.hours.map((h, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-cream-200/55">{h.days[lang]}</span>
                  <span className="text-cream-100">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Directions button */}
          <a
            href={restaurant.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-5 py-2.5 text-sm font-semibold text-gold-400 transition-all hover:bg-gold-500/10"
          >
            <Navigation className="h-4 w-4" />
            {t.contact.directions}
          </a>

          {/* Map placeholder — click to open Google Maps */}
          <a
            href={restaurant.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-72 w-full items-center justify-center overflow-hidden rounded-xl border border-cream-200/8 bg-ink-800/40 transition-all hover:border-gold-500/40"
            aria-label={t.contact.openMap}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ink-800/60 to-ink-900/80" />
            <div
              className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 30% 40%, rgba(212,165,100,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(212,165,100,0.1) 0%, transparent 40%)',
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/30 bg-ink-900/80 transition-all group-hover:scale-110 group-hover:border-gold-500/60">
                <MapPin className="h-7 w-7 text-gold-400" strokeWidth={1.5} />
              </div>
              <div className="text-sm font-medium text-cream-100 transition-colors group-hover:text-gold-400">
                {t.contact.openMap}
              </div>
              <div className="text-xs text-cream-200/40">
                {restaurant.address.street}, {restaurant.address.city}
              </div>
            </div>
          </a>

          {/* Disclaimer */}
          <p className="text-xs italic text-cream-200/30">{t.contact.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
