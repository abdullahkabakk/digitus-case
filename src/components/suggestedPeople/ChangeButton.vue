<script setup lang="ts">
import { Icon } from '@iconify/vue'

type ChangeType = 'next' | 'prev'

const { type } = defineProps<{
  type: ChangeType
}>()

const emits = defineEmits(['change'])

const changeUser = () => emits('change', type)

const isNext = () => type === 'next'
</script>

<template>
  <button
    :class="isNext() ? 'right-0 lg:-right-4' : 'left-0 lg:-left-4'"
    class="absolute rounded-full p-0.5 top-1/2 bg-white h-fit text-gray-400 hover:text-gray-600 focus:outline-none"
    @click="changeUser"
  >
    <Icon
      :icon="
        isNext() ? 'material-symbols-light:chevron-right' : 'material-symbols-light:chevron-left'
      "
      class="text-xl h-8 w-8"
    />
  </button>
</template>
