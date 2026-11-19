import { useEffect, useRef } from 'react';

/**
 * Adds the `is-visible` class to elements with the `reveal` class
 * when they enter the viewport. Supports staggered delays via
 * `reveal-delay-1` through `reveal-delay-4`.
 */
export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    observerRef.current = observer;

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/**
 * Tracks the window scroll position and returns a ref to attach.
 * Used for header background change and scroll-to-top behavior.
 */
export function useScrollPosition() {
  const scrollY = useRef(0);

  useEffect(() => {
    const handler = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return scrollY;
}
