<script setup lang="ts">
import { usePostStore } from '@/stores/post'
import { onMounted, ref } from 'vue'
import type { Post } from '@/types/posts'
import SuggestedCard from '@/components/suggestedPosts/SuggestedCard.vue'
import SuggestedSkeleton from '@/components/suggestedPosts/SuggestedSkeleton.vue'

const store = usePostStore()
const posts = ref<Post[]>([])
const loading = ref(true)

onMounted(async () => {
  posts.value = await store.fetchSuggestedPosts()
  loading.value = false
})
</script>

<template>
  <SuggestedSkeleton v-if="loading" />
  <div v-else>
    <div v-for="post in posts" :key="post.id" class="bg-white mb-5 shadow-xl w-full rounded-lg">
      <SuggestedCard :post="post" />
    </div>
  </div>
</template>
