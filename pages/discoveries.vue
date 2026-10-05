<script setup lang="ts">
import { computed, ref } from 'vue'
import { heritageSites } from '~/data/heritage'

const query = ref('')

const filteredSites = computed(() => {
  const q = query.value.trim().toLowerCase()

  if (!q) {
    return heritageSites
  }

  return heritageSites.filter(site =>
    [
      site.name,
      site.location,
      site.category,
      site.shortDescription,
      ...site.tags
    ]
      .join(' ')
      .toLowerCase()
      .includes(q)
  )
})

useSeoMeta({
  title: 'Discoveries',
  description:
    'Browse featured heritage and nature discoveries from Pangasinan.'
})
</script>

<template>
  <div class="page-shell">

    <!-- Page Header -->
    <section class="page-intro">
      <div class="container page-intro__inner">

        <div>
          <p class="eyebrow">
            Discoveries
          </p>

          <h1>
            Places, stories, and paths.
          </h1>

          <p>
            Browse the showcase collection and use the search field
            to filter by theme, site, or story.
          </p>
        </div>

        <MoleculesSearchForm v-model="query" />

      </div>
    </section>

    <!-- Discoveries -->
    <section
      class="section"
      aria-labelledby="all-discoveries"
    >
      <div class="container">

        <div class="section-heading">

          <div>
            <p class="eyebrow">
              Curated collection
            </p>

            <h2 id="all-discoveries">
              {{ filteredSites.length }} discoveries
            </h2>
          </div>

          <span class="result-note">
            Static content • easy to update
          </span>

        </div>

        <!-- Cards -->
        <OrganismsHeritageGrid
          v-if="filteredSites.length > 0"
          :sites="filteredSites"
        />

        <!-- No Results -->
        <p
          v-else
          class="empty-state"
        >
          No discoveries match “{{ query }}”.
          Try a broader keyword.
        </p>

      </div>
    </section>

  </div>
</template>

