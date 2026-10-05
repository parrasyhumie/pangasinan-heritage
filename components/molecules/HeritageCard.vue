<script setup lang="ts">
import type { HeritageSite } from '~/data/heritage'

defineProps<{ site: HeritageSite; featured?: boolean }>()
</script>

<template>
  <article class="heritage-card" :class="`heritage-card--${site.accent}`">
    <div class="heritage-card__art" aria-hidden="true">
      <span class="sun-disc"></span>
      <span class="ridge ridge--back"></span>
      <span class="ridge ridge--front"></span>
      <span class="water-strip" v-if="site.category === 'Waterfall' || site.accent === 'river'"></span>
      <IconSymbol :name="site.icon" />
    </div>
    <div class="heritage-card__body">
      <div class="meta-row"><span class="badge">{{ site.category }}</span><span>{{ site.location }}</span></div>
      <h3>{{ site.name }}</h3>
      <p>{{ site.shortDescription }}</p>
      <NuxtLink class="text-link" :to="`/discoveries#${site.slug}`" :aria-label="`Explore ${site.name}`">Explore site <span aria-hidden="true">→</span></NuxtLink>
    </div>
  </article>
</template>
