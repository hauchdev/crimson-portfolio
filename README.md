# Example — Performance-first Astro Portfolio

A highly reusable, open-source developer portfolio based on the supplied visual reference.

## Stack

- Astro 5
- Tailwind CSS 4
- TypeScript
- GSAP (loaded dynamically only when reveal animations are needed)
- Sharp / Astro Assets for build-time image optimization

## Performance architecture

This template deliberately avoids React/Vue/Svelte and avoids external fonts.

- Static HTML output.
- Zero UI-framework runtime.
- No client-side router.
- No global animation library loaded on first paint.
- GSAP is dynamically imported only when `.reveal` elements enter the viewport.
- `prefers-reduced-motion` disables GSAP entirely.
- Images live in `src/assets` and are processed by Astro/Sharp.
- Responsive image widths and `sizes` are declared.
- Below-the-fold sections use `content-visibility: auto`.
- Mobile navigation uses normal links instead of a JavaScript menu.
- Decorative graphics are CSS, not canvas/WebGL.
- HTML is compressed at build time.

## Customize

Nearly everything is in:

```text
src/data/site.ts
```

Change:

- `name`
- `role`
- `navItems`
- `hero`
- `stats`
- `build`
- `projects`
- `technologies`
- `timeline`
- `repositories`
- `code`
- `services`
- `socials`
- `cta`

You should not need to edit components for normal customization.

## Images

The supplied two illustrations are included as:

```text
src/assets/hero.avif
src/assets/profile.avif
```

They were re-encoded from the uploaded WebP files to AVIF quality 75. The originals were ~0.8 MB each; the optimized source assets are roughly ~0.12 MB each before Astro generates the final responsive variants.

To replace them, drop a new image into `src/assets` and change the import in `Hero.astro` / `BuildSection.astro`.

## Development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run check
npm run build
npm run preview
```
