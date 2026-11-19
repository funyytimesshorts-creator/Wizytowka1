import { useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { restaurant } from '@/data/content';

const metaTitles: Record<string, string> = {
  pl: 'FUOCO — Wood Fired Pizza | Autentyczna pizza z pieca opalanego drewnem',
  en: 'FUOCO — Wood Fired Pizza | Authentic Neapolitan Pizza',
  ua: 'FUOCO — Wood Fired Pizza | Автентична піца з печі на дровах',
};

const metaDescriptions: Record<string, string> = {
  pl: 'FUOCO — ekskluzywna pizzeria oferująca autentyczną pizzę neapolitańską wypiekaną w tradycyjnym piecu opalanym drewnem. Prawdziwy smak ognia.',
  en: 'FUOCO — an exclusive pizzeria offering authentic Neapolitan pizza baked in a traditional wood-fired oven. The true taste of fire.',
  ua: 'FUOCO — ексклюзивна піцерія, що пропонує автентичну неаполітанську піцу з печі на дровах. Справжній смак вогню.',
};

export function SEO() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = metaTitles[lang];
    document.documentElement.lang = lang;

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', metaDescriptions[lang]);

    // Schema.org structured data for restaurant
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'FUOCO — Wood Fired Pizza',
      servesCuisine: ['Italian', 'Pizza', 'Neapolitan'],
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: restaurant.address.street,
        addressLocality: restaurant.address.city,
        addressCountry: 'PL',
      },
      telephone: restaurant.phone,
      email: restaurant.email,
      openingHours: ['Mo-Th 12:00-22:00', 'Fr-Sa 12:00-24:00', 'Su 13:00-22:00'],
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    let scriptTag = document.querySelector('#schema-restaurant') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-restaurant';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);
  }, [lang]);

  return null;
}
