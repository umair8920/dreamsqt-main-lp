import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to initialize IntersectionObserver for elements with scroll-reveal classes.
 * Runs on mount and route location changes.
 */
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll to top on page navigation if needed
    window.scrollTo(0, 0);

    const selector = '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale';
    const elements = document.querySelectorAll(selector);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Unobserve after reveal for optimal performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);
}
