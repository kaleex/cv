# alejandroquilez.dev

Portfolio personal - Senior Data Engineer

🌐 **Live**: [alejandroquilez.dev](https://alejandroquilez.dev)

## ✨ Features

- � **Dark/Light mode** - Toggle con persistencia en localStorage
- 🌍 **Internacionalización (i18n)** - Español / English toggle
- 📱 **Responsive design** - Mobile-first con menú hamburguesa
- 📊 **Experience Timeline** - Trayectoria profesional visual
- ⚡ **Animación typing** - Efecto máquina de escribir en hero
- 🎯 **Feature flags** - Activar/desactivar secciones fácilmente
- 🔒 **RGPD compliant** - Sin cookies de terceros
- 🔍 **SEO optimizado** - Open Graph, Twitter Cards, sitemap, robots.txt
- 📊 **Analytics** - Cloudflare Analytics (privacidad)
- 📄 **CV descargable** - PDF disponible para descargar

## 🛠️ Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Hosting**: Cloudflare Workers
- **Domain**: Cloudflare Registrar
- **CI/CD**: Git push → Cloudflare auto-deploy

## 📁 Estructura

```
frontend/
├── src/
│   ├── components/     # Navbar, Footer
│   ├── config/         # Feature flags
│   ├── context/        # ThemeContext (dark/light)
│   ├── data/           # Portfolio data
│   ├── i18n/           # Traducciones EN/ES
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

## 🚀 Desarrollo

```bash
cd frontend
npm install
npm run dev
```

## 📦 Deploy

Push a `main` → Cloudflare Workers auto-deploy

Manual:
```bash
cd frontend
npm run build
npx wrangler deploy
```

## ⚙️ Feature Flags

Edita `src/config/features.ts` para activar/desactivar secciones:

```typescript
export const features = {
  projects: true,        // /repos - Página de proyectos
  certifications: true,  // /badges - Certificaciones
  blog: true,            // /blog - Blog técnico
  experience: true,      // /experience - Timeline profesional
};
```

## 🌓 Tema Dark/Light

El tema se gestiona en `src/context/ThemeContext.tsx` y persiste en localStorage. El toggle está en el Navbar.

## 🌐 i18n

Las traducciones están en `src/i18n/translations.ts`. El idioma se guarda en localStorage.

## 📄 Actualizar CV

1. Reemplaza `public/cv.pdf`
2. Push a main

## 🏆 Añadir Certificación

1. Añade imagen del badge en `public/badges/`
2. Edita `src/i18n/translations.ts` → `badges.certifications`
3. Cambia `status: "earned"` y añade `credentialUrl`
4. Activa feature flag: `certifications: true`

## 📝 Añadir Blog Post

1. Edita `src/i18n/translations.ts` → `blog.posts`
2. Cambia `comingSoon: false`
3. Activa feature flag: `blog: true`

## 📊 Actualizar Experience Timeline

Edita `src/i18n/translations.ts` → `experience.jobs` (EN y ES)

---

Built with ❤️ by [Alejandro Quílez](https://alejandroquilez.dev)
