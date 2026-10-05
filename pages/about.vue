<script setup lang="ts">
useSeoMeta({ title: 'About', description: 'Architecture and design principles for the Pangasinan Heritage Digital Showcase.' })
</script>

<template>
  <div class="page-shell">
    <section class="page-intro page-intro--compact"><div class="container"><p class="eyebrow">About the build</p><h1>Designed like a small system, not a one-off page.</h1><p>The implementation follows Nuxt 3 + Vue, Atomic Design, semantic HTML, responsive CSS, and static prerendering.</p></div></section>
    <section class="section"><div class="container narrative-grid">
      <article><p class="eyebrow">Architecture</p><h2>Nuxt 3 + Vue</h2><p>Pages are composed from reusable atoms, molecules, and organisms. Content lives separately in a small typed data module so a future CMS can replace the data source without rewriting the UI.</p></article>
      <article><p class="eyebrow">Accessibility</p><h2>WCAG 2.1 AA mindset</h2><p>The system uses landmark elements, keyboard-visible focus, labeled controls, reasonable touch targets, semantic headings, and reduced-motion support.</p></article>
      <article><p class="eyebrow">Performance</p><h2>Make data the priority</h2><p>There are no external font requests, third-party trackers, or heavy animation libraries. Visual richness is achieved with CSS and lightweight vector art.</p></article>
      <article><p class="eyebrow">Deployment</p><h2>Static/JAMstack-ready</h2><p>The route rules are configured for prerendering, so the site can be hosted on common static platforms while retaining Nuxt’s modular development model.</p></article>
    </div></section>
  </div>
</template>
