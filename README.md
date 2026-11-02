# OneLeaf Salon

Website for OneLeaf Salon Hair by Kazuyo, a hair salon in Sierra Madre, CA — <https://www.oneleafsalon.com>.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS and [shadcn/ui](https://ui.shadcn.com) components. Every page is statically prerendered; there is no backend or database, and no environment variables are required.

## Getting started

Requires Node.js 26.x.

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script          | What it does                                                                    |
| --------------- | ------------------------------------------------------------------------------- |
| `npm run dev`   | Start the development server                                                    |
| `npm run build` | Production build, then regenerate `public/sitemap*.xml` and `robots.txt` (`next-sitemap`) |
| `npm run start` | Serve the production build                                                      |
| `npm run lint`  | Run ESLint                                                                      |

Both `package-lock.json` and `pnpm-lock.yaml` are committed. When you add or remove a dependency, update both (`npm install …` and `pnpm install --lockfile-only`).

## Project structure

```
app/                  Routes (one folder per URL)
  layout.tsx          Root layout: fonts, site-wide metadata, schema.org data, header and footer
  page.tsx            Home page
  about/ team/ services/ contact/
  cancellation-policy/ privacy-policy/
  new-prices/         Price list announced for November 2026 (not linked from the navigation)
  agreement/          Head spa agreement form (not linked from the navigation)
  conditions/         Hair condition checker (not linked from the navigation)
  retail/             Placeholder page
components/           Site components (header, footer, booklet, price list, …)
  ui/                 shadcn/ui primitives
hooks/                React hooks
lib/
  prices.ts           Service menu and prices shown on the site
  utils.ts            `cn()` class-name helper
public/               Images, videos, icons and the generated sitemap
```

Conventions: file names are kebab-case; page components are named after their route (`ServicesPage`); imports use the `@/` alias for the project root.

## Common edits

- **Prices and services** — edit `priceList` in `lib/prices.ts`. The home page, `/services` and `/new-prices` all render it through `components/price-accordion.tsx`.
- **Business hours, policies, page copy** — the text lives directly in the page files under `app/`.
- **Navigation links** — `components/header.tsx` (desktop) and `components/mobile-header.tsx` (mobile); footer links are in `components/footer.tsx`.
- **Booking link** — appointments go to Setmore (`https://oneleafsalon.setmore.com/oneleaf`), linked from the header and most pages.

## Deployment

The site is hosted on Vercel. Every push to `main` deploys to production, and pull requests get preview deployments.
