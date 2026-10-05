<script setup lang="ts">
defineProps<{ label: string; to: string }>()
</script>

<template><NuxtLink class="nav-link" :to="to" active-class="is-active">{{ label }}</NuxtLink></template>
