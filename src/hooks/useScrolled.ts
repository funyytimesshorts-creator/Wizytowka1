import { useEffect, useState } from 'react';

/**
 * Returns true when the page has scrolled past the threshold.
 */
export function useScrolled(threshold: number = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return scrolled;
}
