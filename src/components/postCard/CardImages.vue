<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const modules = [Autoplay]

defineProps<{
  images: string[]
}>()
</script>

<template>
  <!-- Images -->
  <div class="flex flex-wrap">
    <swiper
      class="w-full"
      :slides-per-view="1"
      :modules="modules"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
    >
      <swiper-slide
        v-for="(image, idx) in images"
        :key="idx"
        class="w-full h-60 sm:h-80 md:h-96 lg:h-80 xl:h-96 2xl:h-96"
      >
        <img
          :src="image"
          class="w-full object-fill h-60 sm:h-80 md:h-96 lg:h-80 xl:h-96"
          alt="Post Image"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
