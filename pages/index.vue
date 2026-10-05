<script setup lang="ts">
import { heritageSites } from '~/data/heritage'
const featured = heritageSites.slice(0, 3)
useSeoMeta({ title: 'Home', description: 'Discover sample heritage and nature stories from Pangasinan.' })
</script>

<template>
  <div>
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__wash"></div>
      <div class="container hero__content">
        <p class="eyebrow">Pangasinan Provincial Tourism Office</p>
        <h1 id="hero-title">We all love <span>heritage.</span></h1>
        <p class="hero__lede">Discover places, stories, and landscapes worth slowing down for — designed to load quickly even on limited mobile data.</p>
        <div class="hero__actions">
          <BaseButton label="Explore discoveries" to="/discoveries" />
          <NuxtLink class="hero__text-link" to="/about">Why this showcase was built →</NuxtLink>
        </div>
      </div>
      <div class="hero__shape hero__shape--one" aria-hidden="true"></div>
      <div class="hero__shape hero__shape--two" aria-hidden="true"></div>
    </section>

    <section class="section" aria-labelledby="featured-title">
      <div class="container">
        <div class="section-heading">
          <div><p class="eyebrow">Start here</p><h2 id="featured-title">Featured discoveries</h2></div>
          <NuxtLink class="text-link" to="/discoveries">View all →</NuxtLink>
        </div>
        <OrganismsHeritageGrid :sites="featured" />
      </div>
    </section>

    <section class="quote-band" aria-label="Project principle">
      <div class="container quote-band__inner">
        <span class="quote-mark" aria-hidden="true">“</span>
        <blockquote>“A heritage platform should feel as welcoming as the places it introduces.”</blockquote>
        <p>— Pangasinan Heritage Digital Showcase design principle</p>
      </div>
    </section>

    <section class="section section--tight" aria-labelledby="why-title">
      <div class="container split-panel">
        <div><p class="eyebrow">Built for the real web</p><h2 id="why-title">Fast first. Beautiful second. Never the other way around.</h2></div>
        <div class="feature-list">
          <div><strong>3G/4G ready</strong><span>No web fonts, no bulky UI kit, no autoplay video.</span></div>
          <div><strong>Mobile-first</strong><span>Content stacks cleanly from one column to three.</span></div>
          <div><strong>Accessible</strong><span>Visible focus states, semantic landmarks, form labels, and contrast-aware tokens.</span></div>
          <div><strong>Static-ready</strong><span>Nuxt prerendering makes this suitable for JAMstack-style deployment.</span></div>
        </div>
      </div>
    </section>
  </div>
</template>
