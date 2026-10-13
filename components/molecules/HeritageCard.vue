<script setup lang="ts">
import type { HeritageSite } from '~/data/heritage'

const props = defineProps<{
  site: HeritageSite
  featured?: boolean
}>()

const detailLinks: Record<string, string> = {
  'sky-plaza': '/discoveries/sky-plaza',
  'maranum-falls': '/discoveries/maranum-falls',
  'malico-viewpoint-inn': '/discoveries/malico-viewpoint-inn',
  'heritage-trails': '/discoveries/heritage-trails',
  'river-stories': '/discoveries/river-stories',
  'highland-cuisine': '/discoveries/highland-cuisine'
}
</script>

<template>
  <article
    class="heritage-card"
    :class="`heritage-card--${site.accent}`"
  >

    <!-- Image -->
    <div class="heritage-card__art">
      <img
        :src="site.image"
        :alt="site.name"
        class="heritage-card__image"
      />
    </div>

    <!-- Content -->
    <div class="heritage-card__body">

      <div class="meta-row">
        <span class="badge">
          {{ site.category }}
        </span>

        <span>
          {{ site.location }}
        </span>
      </div>

      <h3>
        {{ site.name }}
      </h3>

      <p>
        {{ site.shortDescription }}
      </p>

      <!-- Explore Button -->
      <NuxtLink
        class="text-link"
        :to="detailLinks[site.slug]"
      >
        Explore site
        <span aria-hidden="true">→</span>
      </NuxtLink>

    </div>

  </article>
</template>