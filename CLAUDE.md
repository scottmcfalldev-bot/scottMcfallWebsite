# scottMcfallWebsite

Personal website for Scott McFall.

## Stack

- **Astro 5** with **Tailwind CSS 4** (via `@tailwindcss/vite`) and
  `@astrojs/sitemap`.
- `src/pages/index.astro` (the page), `src/layouts/Layout.astro` (shared shell),
  `src/styles/global.css`. Static assets in `public/`.

## Commands

```bash
npm install
npm run dev              # astro dev server
npm run build            # static build -> dist/
npm run preview          # preview the build
npm run optimize-images  # regenerate optimized profile image from public/profile-source.jpg
```

## Notes

- Config in `astro.config.mjs`. Sitemap is generated at build time — keep the
  `site` URL there correct so sitemap/canonical URLs are right.
- Image optimization is a manual step (`scripts/optimize-images.js`); rerun it
  when the source profile image changes.
