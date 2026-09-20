# Customization

The intended workflow is:

```text
src/data/site.ts
        ↓
components
        ↓
static HTML
```

For normal content changes, do not edit the `.astro` files.

## Add a project

```ts
{
  title: "My Project",
  eyebrow: "PROJECT 05 / SOFTWARE",
  description: "Short description.",
  visual: "terminal",
  tags: ["Astro", "TypeScript"],
  links: [
    { label: "Live", href: "https://example.com" },
    { label: "Source", href: "https://github.com/example/repo" }
  ]
}
```

## Add technologies

```ts
{
  name: "Rust",
  category: "LANGUAGES",
  level: "INTERMEDIATE"
}
```

The category cards are generated automatically.

## Change the accent

The main accent is controlled in:

```text
src/styles/global.css
```

Search for:

```css
--color-red: #ff343b;
```

Most red UI values intentionally use the same value directly so the visual reference stays consistent; if you want complete theming, move those values to CSS variables in a follow-up contribution.

## Replace the illustrations

Replace the imports:

```ts
import heroImage from "../assets/hero.avif";
import profileImage from "../assets/profile.avif";
```

The images are passed through Astro Assets / Sharp, so the final HTML receives optimized responsive files.
