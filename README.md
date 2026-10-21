# alejandroquilez.dev

Personal Portfolio - Senior Data Engineer

🌐 **Live**: [alejandroquilez.dev](https://alejandroquilez.dev)

## ✨ Features

- 🌓 **Dark/Light mode** - Toggle with localStorage persistence
- 🌍 **Internationalization (i18n)** - Spanish / English toggle
- 📱 **Responsive design** - Mobile-first with hamburger menu
- 📊 **Experience Timeline** - Visual career path
- ⚡ **Typing animation** - Typewriter effect in hero section
- 🎯 **Feature flags** - Easily enable/disable sections
- 🔒 **GDPR compliant** - No third-party cookies
- 🔍 **SEO optimized** - Open Graph, Twitter Cards, sitemap, robots.txt
- 📊 **Analytics** - Cloudflare Analytics (privacy-first)
- 📄 **Downloadable CV** - PDF available for download

## 🛠️ Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Hosting**: Cloudflare Workers
- **Domain**: Cloudflare Registrar
- **CI/CD**: Git push → Cloudflare auto-deploy

## 📁 Structure

```
frontend/
├── src/
│   ├── components/     # Navbar, Footer
│   ├── config/         # Feature flags
│   ├── context/        # ThemeContext (dark/light)
│   ├── data/           # Portfolio data
│   ├── i18n/           # Translations EN/ES
│   ├── pages/          # Skills, Experience, Contact, Repos, Blog, Badges
│   └── utils/          # Analytics
├── public/
│   ├── badges/         # Certification images
│   ├── cv.pdf
│   ├── og-image.svg    # Open Graph image
│   ├── robots.txt
│   └── sitemap.xml
└── wrangler.jsonc      # Cloudflare config
```

## 🚀 Development

```bash
cd frontend
npm install
npm run dev
```

The development server listens on `127.0.0.1:5173` and does not proxy local APIs.
Use an SSH tunnel when developing remotely on Atenea:

```bash
ssh -L 5173:127.0.0.1:5173 kaleex@atenea
```

`frontend_old/` is an archived frontend, not the production deployment directory.

## 📦 Deploy

Push to `main` → Cloudflare Workers auto-deploy

Manual:
```bash
cd frontend
npm run build
npx wrangler deploy
```

## ⚙️ Feature Flags

Edit `src/config/features.ts` to enable/disable sections:

```typescript
export const features = {
  projects: true,        // /repos - Projects page
  certifications: true,  // /badges - Certifications
  blog: true,            // /blog - Tech blog
  experience: true,      // /experience - Career timeline
};
```

## 🌓 Dark/Light Theme

Theme is managed in `src/context/ThemeContext.tsx` and persists in localStorage. Toggle is in the Navbar.

## 🌐 i18n

Translations are in `src/i18n/translations.ts`. Language is saved in localStorage.

## 📄 Update CV

1. Replace `public/cv.pdf`
2. Push to main

Only the current CV belongs in `frontend/public/`. The retired `/cv_old.pdf`
returns HTTP 410 through the production Worker. After deploying this change,
purge any existing Cloudflare cache entry for that URL and verify the response.
Previously published copies may remain in Git history or third-party caches.

## 🏆 Add Certification

1. Add badge image to `public/badges/`
2. Edit `src/i18n/translations.ts` → `badges.certifications`
3. Set `status: "earned"` and add `credentialUrl`
4. Enable feature flag: `certifications: true`

## 📝 Add Blog Post

1. Edit `src/i18n/translations.ts` → `blog.posts`
2. Set `comingSoon: false`
3. Enable feature flag: `blog: true`

## 📊 Update Experience Timeline

Edit `src/i18n/translations.ts` → `experience.jobs` (EN and ES)

---

Built with ❤️ by [Alejandro Quílez](https://alejandroquilez.dev)
