```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { heritageSites } from '~/data/heritage'

const route = useRoute()

const site = computed(() => {
  return heritageSites.find(
    item => item.slug === route.params.slug
  )
})

useSeoMeta({
  title: () =>
    site.value
      ? site.value.name
      : 'Discovery',

  description: () =>
    site.value
      ? site.value.shortDescription
      : 'Explore a heritage discovery in Pangasinan.'
})
</script>

<template>
  <div class="page-shell">

    <!-- Site Found -->
    <section
      v-if="site"
      class="section"
    >
      <div class="container">

        <!-- Back Button -->
        <NuxtLink
          to="/discoveries"
          class="text-link"
        >
          ← Back to Discoveries
        </NuxtLink>

        <!-- Detail -->
        <div class="detail-page">

          <!-- Image -->
          <div class="detail-page__image">

            <img
              :src="site.image"
              :alt="site.name"
            />

          </div>

          <!-- Information -->
          <div class="detail-page__content">

            <span class="badge">
              {{ site.category }}
            </span>

            <p class="eyebrow">
              {{ site.location }}
            </p>

            <h1>
              {{ site.name }}
            </h1>

            <p class="detail-page__description">
              {{ site.shortDescription }}
            </p>

            <!-- Tags -->
            <div class="detail-page__tags">

              <span
                v-for="tag in site.tags"
                :key="tag"
                class="badge"
              >
                #{{ tag }}
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- Site Not Found -->
    <section
      v-else
      class="section"
    >
      <div class="container">

        <h1>
          Discovery not found
        </h1>

        <p>
          Sorry, the heritage site you are looking for
          does not exist.
        </p>

        <NuxtLink
          to="/discoveries"
          class="text-link"
        >
          ← Back to Discoveries
        </NuxtLink>

      </div>
    </section>

  </div>
</template>
```
