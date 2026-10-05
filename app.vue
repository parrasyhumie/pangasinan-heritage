<script setup lang="ts">
useHead({
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} | Pangasinan Heritage` : 'Pangasinan Heritage Digital Showcase'
})
</script>

<template>
  <div class="app-shell">
    <OrganismsHeaderNavigation />
    <main id="main-content" tabindex="-1">
      <NuxtPage />
    </main>
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <p class="eyebrow">Pangasinan Heritage</p>
          <p class="footer-copy">A lightweight digital showcase for cultural awareness, local discovery, and responsible tourism.</p>
        </div>
        <div class="footer-links" aria-label="Footer links">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/discoveries">Discoveries</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>
