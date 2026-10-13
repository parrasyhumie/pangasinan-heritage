
<script setup lang="ts">
defineProps<{
  site: {
    slug: string
    name: string
    location: string
    category: string
    shortDescription: string
    image?: string
    tags: string[]
  }
}>()
</script>

<template>
  <article class="heritage-card">
    <NuxtLink
      :to="`/discoveries/${site.slug}`"
      class="heritage-card__link"
      :aria-label="`Explore ${site.name}`"
    >
      <img
        v-if="site.image"
        :src="site.image"
        :alt="site.name"
        class="heritage-card__image"
      />

      <div class="heritage-card__content">
        <p class="eyebrow">{{ site.category }}</p>

        <h3>{{ site.name }}</h3>

        <p class="heritage-card__location">
          {{ site.location }}
        </p>

        <p>{{ site.shortDescription }}</p>

        <span class="explore-link">
          Explore Site <span aria-hidden="true">→</span>
        </span>
      </div>
    </NuxtLink>
  </article>
</template>

<style scoped>
.heritage-card {
  height: 100%;
  overflow: hidden;
  border: 1px solid #e1e8e2;
  border-radius: 16px;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.heritage-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgb(23 74 68 / 10%);
}

.heritage-card__link {
  display: block;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.heritage-card__image {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.heritage-card__content {
  padding: 22px;
}

.heritage-card h3 {
  margin: 8px 0;
  color: #174a44;
  font-size: 1.35rem;
}

.heritage-card__location {
  color: #66756e;
  font-size: 0.9rem;
}

.heritage-card__content > p:not(.eyebrow) {
  line-height: 1.7;
}

.explore-link {
  display: inline-block;
  margin-top: 12px;
  color: #174a44;
  font-weight: 700;
}

@media (max-width: 600px) {
  .heritage-card__image {
    height: 190px;
  }

  .heritage-card__content {
    padding: 18px;
  }
}
</style>
