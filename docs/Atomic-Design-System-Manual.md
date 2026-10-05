# Deliverable 1.2 — Atomic Design System Manual

## Visual direction

The UI takes visual cues from the supplied reference: scenic editorial hero, generous whitespace, calm greens/earth tones, rounded content cards, serif display type, and a yellow CTA. The sample uses CSS/vector artwork so it stays data-light.

## Atoms

### Button
**Code:** `components/atoms/BaseButton.vue`  
**Usage:** Primary actions, navigation CTAs, and form submission.  
**Responsive:** 44px minimum touch target; action groups wrap and can become full width on narrow screens.  
**Preview:** `/components` under the Atoms preview.

### Typography
**Code:** `assets/css/main.css`  
**Usage:** System-safe serif headings + system sans body copy.  
**Responsive:** `clamp()` fluid type avoids abrupt size jumps and prevents overflow.

### Color Tokens
**Code:** `assets/css/main.css`  
**Core tokens:** `--brand`, `--sun`, `--cream`, `--line`, `--mist`.  
**Usage:** Components consume shared tokens rather than page-specific colors.  
**Responsive:** Tokens stay stable while layout changes at breakpoints.

### Icon
**Code:** `components/atoms/IconSymbol.vue`  
**Usage:** Lightweight inline SVG cues.  
**Responsive:** Scales with its parent; decorative icons are `aria-hidden` where the adjacent text already communicates meaning.

### Image / visual placeholder
**Code:** `components/molecules/HeritageCard.vue`  
**Usage:** CSS scenic art is the low-data placeholder. Production can swap in local WebP/AVIF images without changing the card API.  
**Responsive:** `aspect-ratio` preserves the visual region while text stays content-driven.

## Molecules

### Heritage Card
**Code:** `components/molecules/HeritageCard.vue`  
**Usage:** Site preview inside heritage grids.  
**Responsive:** One column small, two medium, three wide. No fixed-height text clipping.  
**Data contract:** `slug`, `name`, `location`, `category`, `shortDescription`, `accent`, `icon`, `tags`.

### Search Form
**Code:** `components/molecules/SearchForm.vue`  
**Usage:** Discoveries filtering. Emits `update:modelValue` for reuse.  
**Responsive:** Input and button are horizontal by default, stacked below 480px.

### Navigation Item
**Code:** `components/molecules/NavigationItem.vue`  
**Usage:** Single primary navigation link with active route state.  
**Responsive:** The header organism controls menu collapse.

## Organisms

### Header Navigation
**Code:** `components/organisms/HeaderNavigation.vue`  
**Usage:** Global site shell.  
**Responsive:** Inline desktop nav; disclosure menu below 760px; sticky to preserve context.

### Heritage Grid
**Code:** `components/organisms/HeritageGrid.vue`  
**Usage:** Composes cards for landing-page/editorial collections.  
**Responsive:** 1 / 2 / 3 columns through CSS Grid; card height follows content.

## Visual preview page

Open `/components` after starting Nuxt. It renders the reusable components in actual composition and includes the usage/responsive notes next to the previews.

## Accessibility checklist

- Semantic header/nav/main/section/footer landmarks.
- Visible keyboard focus states.
- Labeled search field and `role="search"`.
- Logical heading hierarchy.
- No horizontal overflow at narrow widths.
- Reduced-motion support.
- Decorative SVG icons marked `aria-hidden`.
- Primary interactive targets are at least 44px high.

## Maintainability

Content is stored in `data/heritage.ts`, independent of the presentation components. A future CMS can replace that module while the page/component API remains unchanged.
