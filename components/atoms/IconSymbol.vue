<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <svg v-if="name === 'mountain'" viewBox="0 0 48 48" aria-hidden="true" class="icon"><path d="M5 39 20 14l7 12 5-7 11 20H5Z" fill="currentColor" opacity=".85"/><path d="m20 14 4 7-4 3-4-3 4-7Zm12 5 4 5-4 3-3-3 3-5Z" fill="white" opacity=".7"/></svg>
  <svg v-else-if="name === 'waterfall'" viewBox="0 0 48 48" aria-hidden="true" class="icon"><path d="M6 9h36v8H6zM10 17c0 8 6 8 6 16s-4 8-4 11h7c0-5 3-6 3-12s-4-9-4-15h-8Zm15 0c0 7 4 9 4 15s-3 7-3 12h7c0-6 3-8 3-13s-3-9-3-14h-8Z" fill="currentColor"/><path d="M7 39h34" stroke="white" stroke-width="2" opacity=".6"/></svg>
  <svg v-else-if="name === 'cabins'" viewBox="0 0 48 48" aria-hidden="true" class="icon"><path d="m6 23 15-12 15 12v15H6V23Zm27 0 8-7 5 4v18h-8V23Z" fill="currentColor"/><path d="M15 31h8v7h-8z" fill="white" opacity=".6"/></svg>
  <svg v-else-if="name === 'path'" viewBox="0 0 48 48" aria-hidden="true" class="icon"><path d="M8 40c5-10 15-11 15-21 0-5-3-7-3-10 0-3 2-6 7-6 5 0 8 3 8 7 0 7-8 10-8 19 0 5 2 8 4 11H8Z" fill="currentColor" opacity=".85"/><circle cx="29" cy="10" r="2" fill="white"/></svg>
  <svg v-else-if="name === 'river'" viewBox="0 0 48 48" aria-hidden="true" class="icon"><path d="M7 8c8 4 12 4 17 0 4-3 8-3 17 1v9c-8-4-12-4-17 0-4 3-8 3-17-1V8Zm0 15c8 4 12 4 17 0 4-3 8-3 17 1v9c-8-4-12-4-17 0-4 3-8 3-17-1v-9Z" fill="currentColor"/></svg>
  <svg v-else-if="name === 'basket'" viewBox="0 0 48 48" aria-hidden="true" class="icon"><path d="M8 20h32l-3 21H11L8 20Zm6-2 4-8 5 8h-9Zm10 0 4-8 5 8h-9Z" fill="currentColor"/><path d="M14 26h20M16 32h16" stroke="white" stroke-width="2" opacity=".6"/></svg>
  <svg v-else viewBox="0 0 48 48" aria-hidden="true" class="icon"><circle cx="24" cy="24" r="17" fill="currentColor"/></svg>
</template>
