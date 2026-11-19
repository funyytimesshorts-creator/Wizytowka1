import { Flame, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { restaurant } from '@/data/content';

export function Footer() {
  const { t, lang } = useLanguage();

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#menu', label: t.nav.menu },
    { href: '#philosophy', label: t.nav.philosophy },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-cream-200/8 bg-ink-800 bg-noise">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <Flame className="h-7 w-7 text-ember-400" fill="currentColor" />
              <span className="font-display text-2xl font-semibold tracking-wider text-cream-50">
                FUOCO
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream-200/45">
              {t.footer.description}
            </p>
            {/* Social */}
            <div className="mt-6">
              <div className="mb-3 text-xs tracking-wider text-cream-200/40 uppercase">
                {t.footer.follow}
              </div>
              <div className="flex gap-3">
                <a
                  href={restaurant.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-cream-200/10 text-cream-200/60 transition-all hover:border-gold-500/40 hover:text-gold-400"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={restaurant.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-cream-200/10 text-cream-200/60 transition-all hover:border-gold-500/40 hover:text-gold-400"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-display text-lg font-medium text-cream-50">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-cream-200/50 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-lg font-medium text-cream-50">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-cream-200/50">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500/60" />
                <span>{restaurant.address.street}, {restaurant.address.city}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-cream-200/50">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500/60" />
                <a href={`tel:${restaurant.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-gold-400">
                  {restaurant.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-cream-200/50">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500/60" />
                <a href={`mailto:${restaurant.email}`} className="transition-colors hover:text-gold-400">
                  {restaurant.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 font-display text-lg font-medium text-cream-50">
              {t.footer.hoursTitle}
            </h4>
            <ul className="space-y-2.5">
              {restaurant.hours.map((h, i) => (
                <li key={i} className="flex justify-between text-sm">
                  <span className="text-cream-200/50">{h.days[lang]}</span>
                  <span className="text-cream-200/70">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream-200/8 pt-8 sm:flex-row">
          <p className="text-xs text-cream-200/35">
            &copy; {new Date().getFullYear()} FUOCO — Wood Fired Pizza. {t.footer.rights}
          </p>
          <p className="text-xs text-cream-200/35">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
