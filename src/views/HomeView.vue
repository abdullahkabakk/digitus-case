<script setup lang="ts">
import AsideCard from '@/components/AsideCard.vue'
import WritePost from '@/components/WritePost.vue'
import AsideEvents from '@/components/AsideEvents.vue'
import PostCards from '@/components/PostCards.vue'
</script>

<template>
  <main class="max-w-screen-md px-4 lg:px-0 py-10 mx-auto gap-10 grid grid-cols-1 lg:grid-cols-3">
    <div class="lg:col-span-2 space-y-10">
      <WritePost />
      <PostCards />
    </div>
    <div>
      <AsideCard />
      <AsideEvents />
    </div>
  </main>
</template>
