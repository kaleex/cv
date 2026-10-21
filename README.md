# Alejandro Quílez · Personal portfolio

The source code for [alejandroquilez.dev](https://alejandroquilez.dev), my professional portfolio as a Data Platform Architect focused on Azure, Databricks, and production data platforms.

The website brings together my experience across the public sector, banking, insurance, and telecom, my approach to platform architecture, and ways to get in touch.

[Visit the website](https://alejandroquilez.dev) · [Download my CV](https://alejandroquilez.dev/cv.pdf) · [LinkedIn](https://www.linkedin.com/in/alejandro-quílez-asensio-2799a5121)

## About the website

- **Recent architecture work:** a geospatial platform for a public agency handling data at petabyte scale, with Azure Batch HPC and infrastructure designed for ENS High requirements.
- **Professional experience:** career timeline, responsibilities, and delivery outcomes.
- **Platform architecture:** reference architecture covering ingestion, storage, governance, security, and operations.
- **Technical expertise:** data engineering, cloud infrastructure, software design, and learning roadmap.
- **Contact:** direct links to email, LinkedIn, GitHub, and a downloadable CV.
- **Reading preferences:** English and Spanish, light and dark themes, and responsive layouts. Language and theme preferences are stored locally in the browser.

Experience, skills, and contact are currently enabled. Projects, certifications, and blog pages are available in the source but disabled through feature flags. Some technical content is shared between languages.

## Technology

| Area | Implementation |
| --- | --- |
| Interface | React 18 and TypeScript |
| Build tooling | Vite |
| Navigation | React Router |
| Styling | CSS with theme variables and responsive layouts |
| Content | Local TypeScript data and translation files |
| Hosting | Cloudflare Worker serving static assets |

The application has no backend API or database. A small Worker handles HTTPS redirects, response security headers, and the retired CV URL.

## Run locally

Use Node.js **22.12 or newer** and npm.

```bash
git clone https://github.com/kaleex/cv.git
cd cv/frontend
npm ci
npm run dev
```

Open [localhost:5173](http://localhost:5173). The development server binds to `127.0.0.1`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint with no warnings allowed |
| `npm run build` | Check TypeScript and create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |

Run these commands from `frontend/`. Vite preview serves the frontend; it does not exercise the production Worker.

## Project structure

```text
frontend/
├── public/                 # CV, logos, badges, and crawler assets
├── src/
│   ├── components/         # Navigation, footer, icons, and swipe wrapper
│   ├── config/             # Feature flags and palette selection
│   ├── context/            # Theme preferences
│   ├── data/               # Profile, skills, and learning roadmap
│   ├── hooks/              # Animation and navigation hooks
│   ├── i18n/               # English and Spanish content
│   ├── pages/              # Portfolio pages
│   └── utils/              # Analytics helpers
├── worker/                 # Production request handling
└── wrangler.jsonc          # Cloudflare Worker and asset configuration
```

`frontend/` is the active application. `frontend_old/` contains an archived version.

## Update the portfolio

| Change | File |
| --- | --- |
| Profile and contact details, skills, learning roadmap | [`frontend/src/data/portfolio.ts`](frontend/src/data/portfolio.ts) |
| Homepage copy and experience in both languages | [`frontend/src/i18n/translations.ts`](frontend/src/i18n/translations.ts) |
| Enabled sections and palette | [`frontend/src/config/features.ts`](frontend/src/config/features.ts) |
| Downloadable CV | [`frontend/public/cv.pdf`](frontend/public/cv.pdf) |
| Page metadata and sharing links | [`frontend/index.html`](frontend/index.html) |

See the [maintenance guide](docs/maintenance.md) for content updates, remote development, and deployment details.

## Deployment

Production is configured in [`frontend/wrangler.jsonc`](frontend/wrangler.jsonc). It serves `frontend/dist/` through a Cloudflare Worker, with a single page application fallback for client routes.

From `frontend/`, after authenticating Wrangler with the appropriate Cloudflare account:

```bash
npm ci
npm run lint
npm run build
npx wrangler deploy
```

Automatic deployment on pushes to `main` depends on the repository integration configured in Cloudflare; that integration is managed outside this repository.
