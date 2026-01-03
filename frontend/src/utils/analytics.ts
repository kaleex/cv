// Privacy-First Analytics - No cookies, RGPD compliant
// All data is anonymized and stored on your own server
// No third-party scripts, no tracking pixels, no fingerprinting

const API_URL = import.meta.env.VITE_API_URL || '';

// Track an event to our own backend
const trackToServer = async (
  eventType: 'pageview' | 'click' | 'scroll',
  eventName: string,
  eventData?: Record<string, unknown>
) => {
  try {
    await fetch(`${API_URL}/api/analytics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type: eventType,
        event_name: eventName,
        event_data: eventData,
        timestamp: new Date().toISOString()
      })
    });
  } catch {
    // Silently fail - analytics should never break the app
  }
};

// Initialize analytics (scroll tracking)
export const initAnalytics = () => {
  if (typeof window === 'undefined') return;
  window.addEventListener('scroll', handleScroll, { passive: true });
};

// Track page views
export const trackPageView = (path: string) => {
  trackToServer('pageview', path);
};

// Predefined events for common actions
export const Analytics = {
  // Navigation events
  navClick: (page: string) => trackToServer('click', `nav:${page}`),
  
  // CTA events
  ctaClick: (ctaName: string) => trackToServer('click', `cta:${ctaName}`),
  
  // Contact events
  emailClick: () => trackToServer('click', 'contact:email'),
  phoneClick: () => trackToServer('click', 'contact:phone'),
  linkedinClick: () => trackToServer('click', 'contact:linkedin'),
  githubClick: () => trackToServer('click', 'contact:github'),
  
  // Section views
  sectionView: (section: string) => trackToServer('click', `section:${section}`),
  
  // Skills page
  skillCategoryView: (category: string) => trackToServer('click', `skill:${category}`),
  
  // Scroll depth
  scrollDepth: (percentage: number) => trackToServer('scroll', `${percentage}`),
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

// Get analytics stats (for admin dashboard)
export const getAnalyticsStats = async () => {
  try {
    const res = await fetch(`${API_URL}/api/analytics/stats`);
    return await res.json();
  } catch {
    return null;
  }
};

// Vite env types
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
