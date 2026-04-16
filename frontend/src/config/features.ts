// Feature flags to enable/disable sections
// Set to true to show, false to hide

// Color palette options: 'blue' | 'orange' | 'green' | 'purple'
export type ColorPalette = 'blue' | 'orange' | 'green' | 'purple';

export const features = {
  experience: true,    // /experience - Career timeline
  projects: false,      // /repos - Databricks E2E project
  certifications: false, // /badges - Certifications page
  blog: false,          // /blog - Tech blog
  card: false,          // /card - Business card page

  // 🐉 Here be dragons
  swipeNavigation: true,      // Swipe entre páginas en móvil
  showConstructionBanner: false, // Banner "UNDER CONSTRUCTION"
  showCopyright: false,        // Footer copyright

  // Color palette: 'blue' (default) | 'orange' | 'green' | 'purple'
  colorPalette: 'purple' as ColorPalette,
};
