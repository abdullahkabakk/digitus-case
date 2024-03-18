<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { User } from '@/types/user'

defineProps<{
  user: User
}>()
</script>

<template>
  <!-- Profile -->
  <div class="flex items-center pl-4">
    <div class="rounded-full border-gray-300 border p-0.5 h-12 w-12">
      <img :src="user.picture" alt="Profile Picture" class="rounded-full h-full w-full" />
    </div>
    <button>
      <Icon icon="material-symbols-light:keyboard-arrow-down-rounded" class="w-8 h-8" />
    </button>
  </div>
</template>
