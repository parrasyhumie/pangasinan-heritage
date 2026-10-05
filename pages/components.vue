<script setup lang="ts">
import { heritageSites } from '~/data/heritage'
const sample = heritageSites[0]
useSeoMeta({ title: 'Component Library', description: 'Atomic Design component library for the showcase.' })
</script>

<template>
  <div class="page-shell">
    <section class="page-intro"><div class="container"><p class="eyebrow">Atomic Design System</p><h1>Component Library</h1><p>Rendered previews, usage notes, and responsive rules for the reusable building blocks.</p></div></section>
    <section class="section"><div class="container manual-grid">
      <article class="manual-block"><p class="eyebrow">Atoms</p><h2>Button + Typography + Tokens + Icon + Image</h2><div class="preview-surface"><BaseButton label="Primary action"/><BaseButton label="Secondary action" variant="secondary"/><IconSymbol name="mountain"/></div><p><strong>Usage:</strong> Use actions for navigation and forms; iconography supports short visual cues; tokens centralize color, radius, spacing, and type decisions.</p><p><strong>Responsive:</strong> Buttons remain touch-friendly (minimum 44px target); text wraps rather than clipping; icons scale with the surrounding type.</p></article>
      <article class="manual-block"><p class="eyebrow">Molecules</p><h2>Heritage Card + Search Form + Navigation Item</h2><div class="preview-surface"><MoleculesHeritageCard :site="sample"/></div><p><strong>Usage:</strong> The Heritage Card is used exclusively for previewing tourist/heritage site content in responsive grids.</p><p><strong>Responsive:</strong> The grid is 1 column on small screens, 2 on medium containers, and 3 on wide screens. Card art keeps a fixed visual ratio while text height stays content-driven.</p></article>
      <article class="manual-block manual-block--wide"><p class="eyebrow">Organisms</p><h2>Header Navigation + Heritage Grid</h2><div class="preview-surface"><OrganismsHeritageGrid :sites="heritageSites.slice(0, 3)"/></div><p><strong>Usage:</strong> The header owns global navigation. The Heritage Grid composes reusable cards for editorial collections and landing-page sections.</p><p><strong>Responsive:</strong> Navigation collapses below 760px. Grid columns adapt by available width, with no fixed-height text containers.</p></article>
    </div></section>
  </div>
</template>
