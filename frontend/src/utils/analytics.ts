// Privacy-First Analytics - No cookies, RGPD compliant
// Client-side only - uses Cloudflare Analytics (built-in, no config needed)
// No third-party scripts, no tracking pixels, no fingerprinting

// Log event for debugging in development only
const logEvent = (
  eventType: 'pageview' | 'click' | 'scroll',
  eventName: string,
  _eventData?: Record<string, unknown>
) => {
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${eventType}: ${eventName}`);
  }
  // Cloudflare Workers provides built-in analytics automatically
  // No additional tracking code needed - see Cloudflare dashboard for metrics
};

// Initialize analytics (scroll tracking)
export const initAnalytics = () => {
  if (typeof window === 'undefined') return;
  window.addEventListener('scroll', handleScroll, { passive: true });
};

// Track page views
export const trackPageView = (path: string) => {
  logEvent('pageview', path);
};

// Predefined events for common actions
export const Analytics = {
  // Navigation events
  navClick: (page: string) => logEvent('click', `nav:${page}`),
  
  // CTA events
  ctaClick: (ctaName: string) => logEvent('click', `cta:${ctaName}`),
  
  // Contact events
  emailClick: () => logEvent('click', 'contact:email'),
  phoneClick: () => logEvent('click', 'contact:phone'),
  linkedinClick: () => logEvent('click', 'contact:linkedin'),
  githubClick: () => logEvent('click', 'contact:github'),
  
  // Section views
  sectionView: (section: string) => logEvent('click', `section:${section}`),
  
  // Skills page
  skillCategoryView: (category: string) => logEvent('click', `skill:${category}`),
  
  // Scroll depth
  scrollDepth: (percentage: number) => logEvent('scroll', `${percentage}`),
};

// Scroll depth tracking
const scrollThresholds = [25, 50, 75, 90, 100];
const triggeredThresholds = new Set<number>();

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (docHeight <= 0) return;
  
  const scrollPercent = Math.round((scrollTop / docHeight) * 100);
  
  scrollThresholds.forEach((threshold) => {
    if (scrollPercent >= threshold && !triggeredThresholds.has(threshold)) {
      triggeredThresholds.add(threshold);
      Analytics.scrollDepth(threshold);
    }
  });
};

// Reset scroll tracking (call on page change)
export const resetScrollTracking = () => {
  triggeredThresholds.clear();
};
