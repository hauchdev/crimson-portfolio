# Contributing

## Branches

- `main`: production
- `develop`: integration
- `feat/*`: features
- `fix/*`: fixes
- `perf/*`: performance
- `docs/*`: documentation

## Conventional commits

Examples:

```text
feat: add project detail pages
fix: correct mobile spacing
perf: reduce animation work
perf: optimize project imagery
a11y: improve focus states
docs: improve customization guide
chore: update dependencies
```

Keep commits small and independently understandable.

## Pull requests

Run:

```bash
npm run check
npm run build
```

Before opening a PR, explain what changed and whether it affects runtime JavaScript, images, accessibility or Core Web Vitals.
