import { useEffect, useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrolled } from '@/hooks/useScrolled';
import { LANGS, LANG_LABELS } from '@/data/content';
import type { Lang } from '@/data/content';

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const scrolled = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#menu', label: t.nav.menu },
    { href: '#philosophy', label: t.nav.philosophy },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#contact', label: t.nav.contact },
  ];

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectLang = (l: Lang) => {
    setLang(l);
    setLangOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-900/95 backdrop-blur-md py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2"
        >
          <Flame
            className={`transition-all duration-300 ${
              scrolled ? 'h-7 w-7 text-ember-400' : 'h-8 w-8 text-ember-400'
            } group-hover:scale-110`}
            fill="currentColor"
          />
          <span className="font-display text-2xl font-semibold tracking-wider text-cream-50 sm:text-3xl">
            FUOCO
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="group relative text-sm font-medium text-cream-200/80 transition-colors hover:text-gold-400"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 rounded-full border border-cream-200/15 px-3 py-1.5 text-xs font-semibold tracking-wider text-cream-200 transition-colors hover:border-gold-500/50 hover:text-gold-400"
              aria-label="Select language"
            >
              {LANG_LABELS[lang]}
              <span className={`text-[8px] transition-transform ${langOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 top-full z-20 mt-2 w-24 overflow-hidden rounded-lg border border-cream-200/10 bg-ink-800 shadow-xl shadow-black/50">
                  {LANGS.map((l) => (
                    <button
                      key={l}
                      onClick={() => selectLang(l)}
                      className={`flex w-full items-center justify-center px-3 py-2 text-xs font-semibold tracking-wider transition-colors ${
                        lang === l
                          ? 'bg-gold-500/15 text-gold-400'
                          : 'text-cream-200/70 hover:bg-ink-700 hover:text-cream-50'
                      }`}
                    >
                      {LANG_LABELS[l]}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* View menu button */}
          <button
            onClick={() => handleNavClick('#menu')}
            className="hidden rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-ink-900 transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20 sm:block"
          >
            {t.nav.viewMenu}
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-cream-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          mobileOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 bg-ink-800/98 backdrop-blur-lg px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="border-b border-cream-200/5 py-3 text-lg font-medium text-cream-200 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => handleNavClick('#menu')}
            className="mt-4 rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-semibold text-ink-900 transition-colors hover:bg-gold-400"
          >
            {t.nav.viewMenu}
          </button>
        </nav>
      </div>
    </header>
  );
}
