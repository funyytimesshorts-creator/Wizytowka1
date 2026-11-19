import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Lang } from '@/data/content';
import { translations, type Translation } from '@/data/translations';

const STORAGE_KEY = 'fuoco-lang';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'pl';
  const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored === 'pl' || stored === 'en' || stored === 'ua') return stored;
  const browser = navigator.language.slice(0, 2).toLowerCase();
  if (browser === 'en') return 'en';
  if (browser === 'uk' || browser === 'ua') return 'ua';
  return 'pl';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pl');

  useEffect(() => {
    setLangState(getInitialLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
