# Dark Developer Portfolio

A production-ready personal portfolio built with React, Vite, JavaScript, React Router DOM, Tailwind CSS, and Lucide React. The design uses a dark two-column editorial layout inspired by modern developer portfolios, with a sticky profile sidebar, active section navigation, project archive, dynamic project pages, local screenshots, and an accessible lightbox.

## Tech Stack

- React.js with Vite
- JavaScript
- React Router DOM
- Tailwind CSS
- Lucide React icons
- IntersectionObserver
- CSS custom properties
- Local SVG image assets

## Install and Run

```bash
npm install
npm run dev
npm run build
```

## Project Structure

```text
src/
  components/
  data/
  hooks/
  pages/
  styles/
public/
  images/
```

## Editing Content

Profile information and social links live in `src/data/profile.js`. Update `name`, `role`, `tagline`, `email`, `resumeUrl`, `sourceUrl`, and `socialLinks` there.

Experience entries live in `src/data/experience.js`. Add a new object with `period`, `role`, `company`, `description`, `technologies`, and optional `url` or `previousPositions`.

Projects live in `src/data/projects.js`. Each project controls its homepage card, archive listing, and detail page from the same object. To add a project, create a unique `slug`, add metadata, stack tags, images, screenshots, highlights, challenges, and outcomes. Set `featured: true` to include it in the homepage featured list.

Writing links live in `src/data/articles.js`. Add a title, year, description, URL, and local thumbnail path.

## Images and Screenshots

Placeholder assets are stored in `public/images`. Replace them with local SVG, WebP, AVIF, or PNG files and update paths in the data files. Project detail galleries support multiple screenshots, captions, alt text, featured full-width screenshots, and missing-image fallbacks.

## Routes

- `/` is the homepage.
- `/projects` is the filterable project archive.
- `/projects/:slug` renders a dynamic project detail page from `src/data/projects.js`.
- `/404` renders the not-found page.

Unknown project slugs show a useful project-not-found state with a link back to the archive.

## SPA Fallback Routing

Production static hosts should redirect unknown routes to `index.html` so direct URLs like `/projects/analytics-dashboard` work after refresh.

- Vercel: `vercel.json` is included.
- Netlify: `public/_redirects` is included.
- Cloudflare Pages: configure a single-page app fallback to `/index.html`.
- GitHub Pages: direct nested routes require extra fallback handling or hash routing because server rewrites are limited.

## Accessibility Notes

The app includes semantic landmarks, one logical page heading per route, skip link, visible focus states, keyboard-accessible controls, accessible filter buttons, descriptive image alt text, reduced-motion support, and a lightbox with dialog semantics, Escape key support, arrow navigation, focus trap, focus restoration, and background scroll locking.

## Deployment

Run `npm run build` and deploy the generated `dist` directory. Use a host that supports SPA fallback routing for nested project URLs.
