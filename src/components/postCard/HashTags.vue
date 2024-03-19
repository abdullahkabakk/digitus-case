<script setup lang="ts">
defineProps<{
  hashtags: string[]
}>()
</script>

<template>
  <!-- Hashtags -->
  <div class="mt-2">
    <span
      v-for="tag in hashtags"
      :key="tag"
      class="inline-block hash-tag hover:underline hover:cursor-pointer font-light text-sm text-gray-700 mr-2"
      >#{{ tag }}</span
    >
  </div>
</template>
