<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue'
</script>

<template>
  <div class="max-w-screen min-h-screen h-full bg-background">
    <div class="bg-white border-b-2 border-blue-300 top-0 sticky z-50">
      <TheNavbar />
    </div>
    <router-view />
  </div>
</template>
