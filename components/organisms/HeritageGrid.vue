<script setup lang="ts">
import type { HeritageSite } from '~/data/heritage'

defineProps<{
  sites: HeritageSite[]
}>()
</script>

<template>
  <div class="heritage-grid">
    <MoleculesHeritageCard
      v-for="site in sites"
      :key="site.slug"
      :site="site"
    />
  </div>
</template>

