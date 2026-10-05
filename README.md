# Pangasinan Heritage Digital Showcase — Nuxt 3

Mobile-first sample for Activity 1.

## Pages
- `/` Home
- `/discoveries` Discoveries + live search filtering
- `/about` About / architecture rationale
- `/components` Atomic Design component library preview

## Run
```bash
npm install
npm run dev
```
Static build:
```bash
npm run generate
```

## Structure
```text
components/atoms       Button, token swatch, icon
components/molecules   Heritage card, search form, nav item
components/organisms   Header navigation, heritage grid
pages                  Home, Discoveries, About, Component Library
data                   Typed heritage content
assets/css              Responsive tokens and layout
docs                   Framework report + Atomic Design manual
```

The attached reference was used as visual inspiration for the hierarchy and palette; the implementation uses original lightweight CSS/vector artwork.
