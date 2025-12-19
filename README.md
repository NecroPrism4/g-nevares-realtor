# G. Nevarez Realtor

This is a website I'm building for my dad, Gilberto Nevarez, a realtor based in Rocky Point, MX. It’s a simple, fast marketing site to highlight services, featured listings, and provide a clear “Let’s Talk” contact path.

## Tech

- Astro v5
- Tailwind CSS v4
- Custom accent palette defined in `src/styles/global.css` (`@theme` smoking-50…900)

## Local development

Prereqs: Node 18+ and pnpm

```bash
pnpm install
pnpm dev
```

Then open the printed localhost URL.

## Where things live

- Branding, nav links, and hero copy: `src/site.config.ts`
- Global styles and color palette: `src/styles/global.css` (see `@theme` lines 24–38)
- Home sections (all Astro components):
  - `src/components/Hero.astro`
  - `src/components/AboutIntro.astro`
  - `src/components/Services.astro`
  - `src/components/FeaturedListings.astro`
  - `src/components/ContactCta.astro`
- Images: `src/assets/images/`

## Customize

- Update copy in `src/site.config.ts` and component files above.
- Replace images under `src/assets/images/` with real listings and photos.
- Adjust colors by changing the `smoking-*` tokens in `global.css`.

## Deploy

Follow Astro’s deployment guide for your host of choice:
`https://docs.astro.build/en/guides/deploy/`

---

Made with ❤️ for my dad.
