<template>
  <div class="bg-white rounded-lg shadow-lg">
    <!-- Profile Section -->
    <CardHeader
      :profession="post.profile.profession"
      :name="post.profile.name"
      :is_doctor="post.profile.is_doctor"
      :picture="post.profile.picture"
      :is_sponsored="post.is_sponsored"
    />
    <CardImages :images="post.post_content.images" />

    <!-- Content Section -->
    <div class="p-4">
      <div class="flex gap-5">
        <!-- Like Button -->
        <div class="w-fit text-center cursor-pointer" @click="toggleLike">
          <Icon
            :icon="
              isLiked
                ? 'material-symbols-light:favorite'
                : 'material-symbols-light:favorite-outline'
            "
            class="w-8 h-8"
            :class="isLiked ? 'text-red-500' : 'text-black'"
          />
          <span class="text-gray-600 mx-auto">{{ isLiked ? post.likes + 1 : post.likes }}</span>
        </div>
        <!-- Share Button -->
        <div class="w-fit text-center">
          <Icon icon="ph:share-fat-light" class="w-8 h-8" />
          <span class="text-gray-600 mx-auto">{{ post.shares }}</span>
        </div>
        <div class="ml-auto hover:cursor-pointer" @click="toggleSave">
          <Icon
            :icon="isSaved ? 'fluent:bookmark-24-filled' : 'fluent:bookmark-24-regular'"
            class="w-8 h-8"
            :class="isSaved ? 'text-[#00CEC9]' : 'text-black'"
          />
        </div>
      </div>
      <div class="text-sm mt-2 mb-1">
        <span v-for="(statistic, label) in postStatistics" :key="label">
          {{ statistic }} <span class="font-light text-gray-400">{{ label }}</span>
          <span class="text-gray-400" v-if="shouldDisplayBullet(label)"> &bull; </span>
        </span>
      </div>
      <p class="text-gray-800 font-bold">{{ post.post_content.text }}</p>

      <HashTags :hashtags="post.post_content.hashtags" />
    </div>
    <PostMessage />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { Icon } from '@iconify/vue'
import type { Post } from '@/types/posts'
import HashTags from '@/components/postCard/HashTags.vue'
import CardHeader from '@/components/postCard/CardHeader.vue'
import CardImages from '@/components/postCard/CardImages.vue'
import PostMessage from '@/components/postCard/PostMessage.vue'

const toggleLike = () => (isLiked.value = !isLiked.value)

const { post } = defineProps<{
  post: Post
}>()

const isLiked = ref(post.is_liked)
const isSaved = ref(post.is_saved)

const toggleSave = () => (isSaved.value = !isSaved.value)

const postStatistics = computed(() => {
  return {
    Min: post.length,
    Views: post.views,
    Comments: post.comments
  }
})

const shouldDisplayBullet = (label: string) => label !== 'Comments'
</script>
