<script setup lang="ts">
defineProps<{
  label: string
  to?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit'
}>()
</script>

<template>
  <component :is="to ? 'NuxtLink' : 'button'" :to="to" :type="to ? undefined : type" class="btn" :class="`btn--${variant || 'primary'}`">
    {{ label }}
  </component>
</template>
