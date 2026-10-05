<script setup lang="ts">
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <form class="search-form" role="search" @submit.prevent>
    <label for="site-search">Search discoveries</label>
    <div class="search-form__row">
      <input id="site-search" :value="props.modelValue" type="search" placeholder="Try “waterfall” or “heritage”" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
      <BaseButton label="Search" type="submit" variant="secondary" />
    </div>
  </form>
</template>
