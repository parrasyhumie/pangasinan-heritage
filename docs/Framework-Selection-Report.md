# Deliverable 1.1 — Framework Selection Report

## Recommendation
**Selected:** Vue + Nuxt 3 (static prerendering / JAMstack-style deployment)  
**Alternative:** React + Next.js

This is a weighted, project-fit rubric rather than a universal benchmark.

| Criterion | Weight | Vue + Nuxt 3 | React + Next.js |
|---|---:|---:|---:|
| Bundle size & perceived performance | 25 | 23 | 21 |
| Developer velocity | 20 | 18 | 17 |
| Ecosystem maturity | 15 | 12 | 14 |
| Learning curve | 10 | 9 | 7 |
| Component architecture | 10 | 10 | 10 |
| Documentation & community | 10 | 9 | 10 |
| Suitability for requirements | 10 | 10 | 8 |
| **Total** | **100** | **91** | **87** |

## Why Nuxt 3 fits the brief

**Performance:** Nuxt supports prerendering for the public pages. This sample also avoids external fonts, tracking scripts, autoplay media, and heavy UI libraries.

**Developer velocity:** Vue Single-File Components pair cleanly with Atomic Design: atoms → molecules → organisms → pages.

**Learning curve:** Vue templates remain close to HTML and are straightforward to teach and reuse.

**Component architecture:** Props, emits, and SFCs support reusable components. Content is separated in `data/heritage.ts` so the visual layer can later connect to a CMS or API.

**Deployment fit:** The project includes route rules for prerendering, making the public pages suitable for static/CDN hosting.

## Performance budget
These are **targets for the project**, not measured benchmark results:

- Zero third-party font requests on first load.
- Prefer local SVG/CSS artwork over large raster assets.
- Keep critical content in the initial HTML.
- Load only JavaScript needed for interaction.
- Test with throttled 3G/4G before final submission.

## Decision
Vue + Nuxt 3 scores higher for this educational brief because it balances maintainability, accessible component composition, and static deployment with a relatively gentle learning curve.
