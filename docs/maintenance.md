# Portfolio maintenance

The active application is in `frontend/`. All paths below are relative to that directory unless stated otherwise.

## Content and language

Edit `src/i18n/translations.ts` for homepage copy, experience, and page labels. Update both `en` and `es` entries together.

Edit `src/data/portfolio.ts` for contact details, skills, the learning roadmap, and shared content. Some of this data is displayed in both languages without translation. The homepage certification badge is also defined there.

The homepage experience counter uses a start date in `src/App.tsx`. Keep it consistent with the career timeline and the descriptions in `index.html`.

## Feature flags

Edit `src/config/features.ts` to enable or disable optional sections. The current values in that file are the source of truth.

- `experience`: career timeline.
- `projects`: projects page at `/repos`.
- `certifications`: certifications page at `/badges`.
- `blog`: blog page.

Other settings control swipe navigation, the construction banner, footer copyright, and palette selection. The `card` flag is declared but the `/card` route is currently registered unconditionally in `src/App.tsx`.

Before enabling a section, review its content in both languages and replace placeholders.

## Update the CV

1. Replace `public/cv.pdf` with the current document.
2. Run the production build and deploy.
3. Check the download links on the homepage and contact page.

The production Worker returns HTTP 410 for `/cv_old.pdf`. When retiring a previously cached document, purge its existing Cloudflare cache entry and verify the response after deployment. Previously published copies may remain in Git history or third-party caches.

## Add a certification

1. Add its badge image to `public/badges/`.
2. Update `badges.certifications` in both languages in `src/i18n/translations.ts`.
3. Set `status: "earned"` and add the credential URL when applicable.
4. Enable the `certifications` feature flag when the page is ready.

## Add a blog post

1. Update `blog.posts` in both languages in `src/i18n/translations.ts`.
2. Check how `src/pages/Blog.tsx` renders the entry and supply the required content or link.
3. Set `comingSoon: false` only once the entry is ready.
4. Enable the `blog` feature flag when the page is ready.

## Remote development

The Vite development server listens on `127.0.0.1:5173` and does not proxy local APIs. When developing remotely on Atenea, run this from your local machine:

```bash
ssh -L 5173:127.0.0.1:5173 kaleex@atenea
```

Start `npm run dev` from the remote `frontend/` directory, then open `http://localhost:5173` locally.

## Deployment and verification

See the root [README](../README.md#deployment) for build and manual deployment commands. Pushes to `main` trigger deployment only when the corresponding Cloudflare repository integration is configured.

After deployment, check:

- Direct navigation and refresh on `/skills`, `/experience`, and `/contact`.
- English and Spanish content, theme switching, and navigation on mobile.
- The `/cv.pdf` download and HTTP 410 response for `/cv_old.pdf`.
- The HTTPS redirect and response headers implemented in `worker/index.js`.

The analytics helpers in `src/utils/analytics.ts` currently log interactions during development. They do not themselves send those events to an analytics service. Verify the Cloudflare account configuration separately before relying on production interaction metrics.
