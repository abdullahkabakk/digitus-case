<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { usePostStore } from '@/stores/post'
import type { Post } from '@/types/posts'
import CardSkeleton from '@/components/postCard/CardSkeleton.vue'
import PostCard from '@/components/PostCard.vue'
import SuggestedPeople from '@/components/SuggestedPeople.vue'

const store = usePostStore()
const loading = ref(true)
const posts = ref([] as Post[])
const INITIAL_INDEX = 0

onMounted(async () => {
  posts.value = await store.fetchPosts()
  loading.value = false
})
</script>

<template>
  <div v-if="loading">
    <CardSkeleton v-for="i in 5" :key="i" class="my-5" />
  </div>
  <div v-else>
    <div v-for="(post, idx) in posts" class="mb-5" :key="idx">
      <PostCard :post="post" />
      <SuggestedPeople v-if="idx === INITIAL_INDEX" />
    </div>
  </div>
</template>
