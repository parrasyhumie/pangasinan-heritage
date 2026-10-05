<script setup lang="ts">
const menuOpen = ref(false)
const toggleMenu = () => { menuOpen.value = !menuOpen.value }
</script>

<template>
  <header class="site-header">
    <div class="container nav-shell">
      <NuxtLink class="brand" to="/" aria-label="Pangasinan Heritage home">
        <span class="brand-mark" aria-hidden="true">N</span>
        <span><strong>Pangasinan</strong><small>Heritage Showcase</small></span>
      </NuxtLink>
      <button class="menu-toggle" :aria-expanded="menuOpen" aria-controls="primary-navigation" @click="toggleMenu">Menu</button>
      <nav id="primary-navigation" class="primary-nav" :class="{ 'is-open': menuOpen }" aria-label="Primary navigation">
        <MoleculesNavigationItem label="Home" to="/" />
        <MoleculesNavigationItem label="Discoveries" to="/discoveries" />
        <MoleculesNavigationItem label="About" to="/about" />
        <BaseButton label="Start exploring" to="/discoveries" />
      </nav>
    </div>
  </header>
</template>
