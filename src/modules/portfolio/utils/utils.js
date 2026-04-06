const THEME_BG = '#f5f4ef';

export function applyDocumentShell() {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.style.backgroundColor = THEME_BG;
  document.documentElement.style.margin = '0';
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.backgroundColor = THEME_BG;
  document.body.style.overflowX = 'hidden';
}

export function setDocumentTitle(title) {
  if (typeof document !== 'undefined') {
    document.title = title;
  }
}

/**
 * Fade-in when elements enter the viewport (respect reduced motion).
 * @param {Element[]} elements
 */
export function initRevealElements(elements) {
  if (typeof window === 'undefined' || !elements?.length) {
    return () => {};
  }
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  if (reduce) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return () => {};
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    },
    { root: null, threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
  );
  elements.forEach((n) => io.observe(n));
  return () => io.disconnect();
}
