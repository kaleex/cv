# alejandroquilez.dev

Portfolio personal - Senior Data Engineer

🌐 **Live**: [alejandroquilez.dev](https://alejandroquilez.dev)

## ✨ Features

- 🌍 **Internacionalización (i18n)** - Español / English toggle
- 📱 **Responsive design** - Mobile-first
- ⚡ **Animación typing** - Efecto máquina de escribir en hero
- 🎯 **Feature flags** - Activar/desactivar secciones fácilmente
- 🔒 **RGPD compliant** - Sin cookies de terceros
- 🔍 **SEO optimizado** - Open Graph, sitemap, robots.txt
- 📊 **Analytics** - Cloudflare Analytics (privacidad)

## 🛠️ Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Hosting**: Cloudflare Workers
- **Domain**: Cloudflare Registrar
- **CI/CD**: Git push → Cloudflare auto-deploy

## 📁 Estructura

```
frontend/
├── src/
│   ├── components/     # Navbar
│   ├── config/         # Feature flags
│   ├── data/           # Portfolio data
│   ├── i18n/           # Traducciones EN/ES
│   ├── pages/          # Skills, Contact, Repos, Blog, Badges
│   └── utils/          # Analytics
├── public/
│   ├── badges/         # Certification images
│   ├── cv-alejandro-quilez.pdf
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
  projects: false,       // /repos - Página de proyectos
  certifications: false, // /badges - Certificaciones
  blog: false,           // /blog - Blog técnico
};
```

## 🌐 i18n

Las traducciones están en `src/i18n/translations.ts`. El idioma se guarda en localStorage.

## 📄 Actualizar CV

1. Reemplaza `public/cv-alejandro-quilez.pdf`
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

---

Built with ❤️ by [Alejandro Quílez](https://alejandroquilez.dev)
