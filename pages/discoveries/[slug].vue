
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { heritageSites } from '~/data/heritage'

const route = useRoute()

const site = computed(() =>
  heritageSites.find(
    (item) => item.slug === String(route.params.slug)
  )
)

useSeoMeta({
  title: () =>
    site.value
      ? `${site.value.name} | Pangasinan Heritage`
      : 'Discovery Not Found | Pangasinan Heritage',
  description: () =>
    site.value?.shortDescription ??
    'Explore the heritage and natural attractions of Pangasinan.'
})
</script>

<template>
  <main class="page-shell">
    <section v-if="site" class="section">
      <div class="container">
        <NuxtLink
          to="/discoveries"
          class="back-link"
        >
          ← Back to Discoveries
        </NuxtLink>

        <article class="detail-page">
          <div class="detail-page__content">
            <p class="eyebrow">
              {{ site.category }}
            </p>

            <h1>{{ site.name }}</h1>

            <p class="detail-location">
              <span aria-hidden="true">📍</span>
              {{ site.location }}
            </p>

            <p class="detail-description">
              {{ site.shortDescription }}
            </p>

            <div
              v-if="site.tags?.length"
              class="detail-tags"
            >
              <span
                v-for="tag in site.tags"
                :key="tag"
                class="detail-tag"
              >
                {{ tag }}
              </span>
            </div>

            <p v-if="site.description" class="detail-description">
              {{ site.description }}
            </p>

            <NuxtLink
              to="/discoveries"
              class="back-button"
            >
              Explore More Discoveries
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <section v-else class="section">
      <div class="container not-found">
        <p class="eyebrow">404 — Discovery Not Found</p>

        <h1>We couldn't find this destination.</h1>

        <p>
          The page may have moved, or the destination slug
          may not match the heritage data.
        </p>

        <NuxtLink to="/discoveries" class="back-button">
          Return to Discoveries
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.back-link {
  display: inline-block;
  margin-bottom: 2rem;
  text-decoration: none;
  color: inherit;
}

.detail-page {
  max-width: 850px;
  margin: 0 auto;
}

.detail-page__content {
  padding: 2rem 0;
}

.detail-page h1,
.not-found h1 {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.15;
}

.detail-location {
  margin: 1rem 0;
  opacity: 0.8;
}

.detail-description {
  margin: 1.5rem 0;
  line-height: 1.8;
}

.detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0;
}

.detail-tag {
  padding: 0.4rem 0.8rem;
  border: 1px solid currentColor;
  border-radius: 999px;
  font-size: 0.875rem;
}

.back-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  background: #174a44;
  color: white;
  text-decoration: none;
}

.back-button:hover {
  opacity: 0.88;
}

.not-found {
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
}
</style>
