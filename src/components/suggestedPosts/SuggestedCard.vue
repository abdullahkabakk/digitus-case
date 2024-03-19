<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import type { Post } from '@/types/posts'

const modules = [Autoplay]

defineProps<{
  post: Post
}>()
</script>

<template>
  <div>
    <!-- Profile Section -->
    <div class="flex items-center space-x-2 px-2 py-1.5">
      <div
        class="rounded-full"
        :class="{ 'bg-gradient-to-br from-cyan-500 to-yellow-400': post.profile.is_doctor }"
      >
        <img
          :src="post.profile.picture"
          alt="avatar"
          class="w-8 h-8 border border-gray-300 p-0.5 rounded-full"
        />
      </div>
      <div class="font-semibold text-sm hover:underline hover:cursor-pointer whitespace-nowrap">
        <p>{{ post.profile.name }}</p>
      </div>
    </div>

    <!-- Doctor Indicator -->
    <div
      v-if="post.profile.is_doctor"
      class="h-1 w-full bg-gradient-to-r via-yellow-400 from-cyan-500 to-gray-300"
    ></div>

    <!-- Post Images Carousel -->
    <div class="flex flex-wrap">
      <swiper
        class="w-full"
        :slides-per-view="1"
        :space-between="10"
        :pagination="{ clickable: true }"
        :modules="modules"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
      >
        <swiper-slide
          v-for="(image, idx) in post.post_content.images"
          :key="idx"
          class="w-full h-48 lg:h-28"
        >
          <img :src="image" class="w-full h-48 lg:h-28" alt="Post Image" />
        </swiper-slide>
      </swiper>
    </div>

    <!-- Post Content Section -->
    <div class="p-3">
      <p class="text-gray-800 text-sm font-bold">{{ post.post_content.text }}</p>
      <div class="flex mt-4 flex-row justify-between">
        <template v-for="(value, idx) in [post.likes, post.comments]" :key="idx">
          <span class="text-sm"
            >{{ value }}
            <span class="text-gray-400 font-light">{{
              idx === 0 ? 'Likes' : 'Comments'
            }}</span></span
          >
        </template>
      </div>
    </div>
  </div>
</template>
