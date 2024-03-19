<template>
  <div :class="containerClass">
    <div :class="profileClass">
      <img :src="picture" :class="profileImageClass" alt="Profile Picture" />
    </div>
    <div class="ml-2 flex flex-col">
      <p class="font-semibold">{{ name }}</p>
      <p v-if="is_sponsored" class="font-light uppercase text-red-500">Sponsored</p>
      <p v-if="profession && !is_sponsored" class="font-light text-yellow-500">{{ profession }}</p>
    </div>
    <div class="ml-auto">
      <Icon icon="fluent:more-horizontal-28-filled" class="w-8 h-8" />
    </div>
  </div>
  <div
    v-if="is_doctor"
    class="h-1 w-full bg-gradient-to-r via-yellow-400 from-cyan-500 to-gray-300"
  ></div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

const { is_sponsored, is_doctor } = defineProps<{
  is_doctor?: boolean
  picture: string
  name: string
  profession?: string
  is_sponsored: boolean
}>()

const containerClass = computed(() => {
  return {
    'flex items-center p-4': true,
    'bg-gradient-to-r from-cyan-500/30 to-purple-500/20': is_sponsored
  }
})

const profileClass = computed(() => {
  return {
    'rounded-full': true,
    'bg-gradient-to-br from-cyan-500 to-yellow-400': is_doctor
  }
})

const profileImageClass = computed(() => {
  return {
    'w-11 h-11 border-2 rounded-full p-0.5': true,
    'border-gray-300': !is_sponsored,
    'border-red-400': is_sponsored
  }
})
</script>
