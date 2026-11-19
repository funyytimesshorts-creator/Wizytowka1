import { useState, useMemo } from 'react';
import { Flame, Leaf, Wheat, MilkOff, Search, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { menuItems, type MenuItem } from '@/data/content';

type Filter = 'all' | MenuItem['category'];

export function Menu() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');
  const [query, setQuery] = useState('');

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: t.menu.all },
    { key: 'classic', label: t.menu.classic },
    { key: 'special', label: t.menu.special },
    { key: 'vegetarian', label: t.menu.vegetarian },
  ];

  const visibleItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      if (filter === 'vegetarian' && !item.vegetarian) return false;
      if (filter !== 'all' && filter !== 'vegetarian' && item.category !== filter) return false;

      if (q) {
        const name = item.name[lang].toLowerCase();
        const desc = item.description[lang].toLowerCase();
        if (!name.includes(q) && !desc.includes(q)) return false;
      }
      return true;
    });
  }, [filter, query, lang]);

  return (
    <section id="menu" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <div className="reveal mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-xs font-medium tracking-[0.25em] text-gold-500 uppercase">
              {t.menu.label}
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="reveal reveal-delay-1 mb-4 font-display text-4xl font-light text-cream-50 sm:text-5xl">
            {t.menu.title}
          </h2>
          <p className="reveal reveal-delay-2 text-base text-cream-200/55">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Search */}
        <div className="reveal reveal-delay-2 mb-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cream-200/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.menu.searchPlaceholder}
              aria-label={t.menu.search}
              className="w-full rounded-full border border-cream-200/15 bg-ink-800/40 py-3 pl-11 pr-10 text-sm text-cream-50 placeholder:text-cream-200/35 transition-colors duration-300 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/30"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-cream-200/40 transition-colors hover:text-cream-50"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="reveal reveal-delay-2 mb-14 flex flex-wrap items-center justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                filter === f.key
                  ? 'bg-gold-500 text-ink-900'
                  : 'border border-cream-200/15 text-cream-200/70 hover:border-gold-500/40 hover:text-gold-400'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Menu list — elegant text-based layout */}
        {visibleItems.length > 0 ? (
          <div className="reveal reveal-delay-2 divide-y divide-cream-200/8 border-y border-cream-200/10">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="group flex items-baseline gap-4 py-6 transition-colors duration-300 hover:bg-ink-800/30 sm:px-4 sm:py-7"
              >
                {/* Name + badges */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="font-display text-xl font-medium text-cream-50 transition-colors group-hover:text-gold-400">
                      {item.name[lang]}
                    </h3>
                    {item.spicy && (
                      <span className="flex items-center gap-0.5 text-ember-400" title={t.menu.spicy}>
                        <Flame className="h-3.5 w-3.5" fill="currentColor" />
                      </span>
                    )}
                    {item.vegetarian && (
                      <span className="flex items-center gap-0.5 text-green-500" title={t.menu.veg}>
                        <Leaf className="h-3.5 w-3.5" fill="currentColor" />
                      </span>
                    )}
                    {item.glutenFree && (
                      <span className="flex items-center gap-0.5 text-amber-400" title={t.menu.glutenFree}>
                        <Wheat className="h-3.5 w-3.5" />
                      </span>
                    )}
                    {item.lactoseFree && (
                      <span className="flex items-center gap-0.5 text-sky-400" title={t.menu.lactoseFree}>
                        <MilkOff className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream-200/45">
                    {item.description[lang]}
                  </p>
                  {(item.glutenFree || item.lactoseFree) && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.glutenFree && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-300">
                          <Wheat className="h-3 w-3" />
                          {t.menu.glutenFree}
                        </span>
                      )}
                      {item.lactoseFree && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-0.5 text-[11px] font-medium text-sky-300">
                          <MilkOff className="h-3 w-3" />
                          {t.menu.lactoseFree}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Dotted leader */}
                <div className="hidden flex-shrink-0 flex-1 border-b border-dotted border-cream-200/15 translate-y-[-6px] sm:block" />

                {/* Price */}
                <div className="flex-shrink-0 text-right">
                  <span className="font-display text-xl font-semibold text-gold-400">
                    {item.price}
                  </span>
                  <span className="ml-1 text-sm text-cream-200/50">{t.menu.currency}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="reveal reveal-delay-2 border-y border-cream-200/10 py-16 text-center">
            <p className="text-sm text-cream-200/45">{t.menu.noResults}</p>
          </div>
        )}

        {/* Legend */}
        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-cream-200/40">
          <span className="flex items-center gap-1.5">
            <Flame className="h-3.5 w-3.5 text-ember-400" fill="currentColor" />
            {t.menu.spicy}
          </span>
          <span className="flex items-center gap-1.5">
            <Leaf className="h-3.5 w-3.5 text-green-500" fill="currentColor" />
            {t.menu.veg}
          </span>
          <span className="flex items-center gap-1.5">
            <Wheat className="h-3.5 w-3.5 text-amber-400" />
            {t.menu.glutenFree}
          </span>
          <span className="flex items-center gap-1.5">
            <MilkOff className="h-3.5 w-3.5 text-sky-400" />
            {t.menu.lactoseFree}
          </span>
        </div>
      </div>
    </section>
  );
}
