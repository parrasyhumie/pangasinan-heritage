<script setup lang="ts">
defineProps<{ name: string; token: string; value: string }>()
</script>

<template>
  <div class="token-swatch">
    <span class="token-swatch__color" :style="{ background: value }" aria-hidden="true"></span>
    <div><strong>{{ name }}</strong><small>{{ token }}</small></div>
  </div>
</template>
