<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css/pagination'

const modules = [Autoplay, Pagination]
</script>

<template>
  <div class="relative">
    <swiper
      :slides-per-view="1"
      :space-between="10"
      :pagination="{ clickable: true }"
      :modules="modules"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      class="w-full"
    >
      <swiper-slide v-for="i in 4" :key="i" class="py-10">
        <div class="bg-white rounded-lg shadow-lg flex flex-col">
          <div class="p-4 text-center">
            <h2 class="text-xl font-semibold">
              Momsista<br />
              Family Meeting
            </h2>
            <p class="text-gray-500 -mt-1 text-xl">July'19</p>
            <img
              src="https://picsum.photos/seed/picsum/300/300"
              alt="Event"
              class="h-12 w-full mt-3"
            />
            <button class="border border-black w-2/3 text-black px-4 py-1 rounded-full mt-4">
              Join
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
.swiper-pagination-bullet-active {
  background-color: #a29bfe; /* Change this to the desired color */
}
</style>
