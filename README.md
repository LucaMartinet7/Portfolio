# Luca Martinet, portfolio

Personal site, live at [lucamartinet.dev](https://lucamartinet.dev).

React and Tailwind CSS, prerendered to static HTML at build time and deployed
to GitHub Pages. The page works without JavaScript; React only adds the theme
switch, the photo viewer and the active-section highlight.

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
```

Requires Node 22.12 or newer (see `.nvmrc`).

## Edit content

Everything you read on the site is in [`src/content.ts`](src/content.ts):
bio, skills, experience, projects and links. Design rules are in
[`DESIGN.md`](DESIGN.md).

To add photos, strip their metadata first (phone photos embed GPS
coordinates). For example with [sharp](https://sharp.pixelplumbing.com/),
which drops EXIF by default, or `exiftool -all= photo.jpg`. Put a full-size
file (max 1600px) and a 320x320 `-thumb` file in `public/images/`.

## Build and check

```bash
npm run check     # lint + format check + build
npm run build     # type-check, bundle, prerender (output in dist/)
npm run preview   # serve dist/ locally
```

The build:

1. fetches the last year of GitHub contributions for the activity graph
   (`scripts/fetch-contributions.js`, falls back gracefully when offline),
2. type-checks and bundles the app,
3. prerenders `index.html` and `404.html`, adds the Content Security Policy,
   writes `sitemap.xml` and `/.well-known/security.txt`, and fails on broken
   links or anything the CSP would block (`scripts/prerender.js`).

## Deploy

Pushing to `main` deploys through GitHub Actions
(`.github/workflows/deploy.yml`). The site also rebuilds every Monday to
refresh the activity graph.

One-time setup: in the repository settings, under **Pages > Build and
deployment > Source**, choose **GitHub Actions**. The custom domain and
**Enforce HTTPS** settings stay as they are. The old `gh-pages` branch is no
longer used and can be deleted once the first Actions deploy is live.

## Security

See [`SECURITY.md`](SECURITY.md) for how the site is hardened and how to
report a problem.

## Project layout

```
src/
  content.ts          all copy and data
  index.css           design tokens and base styles
  App.tsx             page structure
  sections/           Hero, About, Experience, Projects, Resume, Contact
  components/         header, footer, viewer, icons, shared UI
  lib/                theme and scroll-spy helpers
  main.tsx            browser entry (hydrates the prerendered HTML)
  entry-server.tsx    build-time renderer
scripts/              build steps (contributions fetch, prerender)
public/               static files served as-is
```
