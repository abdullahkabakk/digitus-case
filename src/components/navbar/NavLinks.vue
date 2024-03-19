<script setup lang="ts">
defineProps(['routes'])
</script>

<template>
  <!-- Navigation Links -->
  <ul class="flex flex-col md:flex-row gap-5 xl:space-x-7 my-auto">
    <li v-for="route in routes" :key="route.name">
      <router-link :to="route.path" class="text-gray-500 hover:underline font-bold">{{
        route.name
      }}</router-link>
    </li>
  </ul>
</template>
