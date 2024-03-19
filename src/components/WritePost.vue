<template>
  <div class="bg-white shadow-2xl rounded-lg py-4 px-2">
    <!-- Loading state -->
    <div v-if="loading" class="flex items-center gap-2">
      <div class="animate-pulse rounded-full bg-gray-300 h-12 w-12" />
      <div class="animate-pulse rounded-lg bg-gray-300 h-12 w-full" />
    </div>
    <!-- Profile content -->
    <div v-else class="flex items-center gap-3">
      <!-- Profile picture -->
      <div class="rounded-full border-purple-100 border-4">
        <img :src="profile.picture" alt="Profile Picture" class="rounded-full w-20 p-0.5" />
      </div>
      <!-- Input field -->
      <div class="w-full h-14 flex items-center">
        <input
          :placeholder="`Write something, ${profile.name}`"
          class="w-full bg-gray-100 h-full text-lg px-6"
        />
      </div>
    </div>
    <!-- Post button -->
    <div class="ml-auto flex mt-2">
      <div class="ml-auto flex gap-4">
        <!-- Emoji icon -->
        <Icon
          icon="ph:smiley-thin"
          class="w-6 h-6 my-auto hover:bg-gray-200 rounded-full hover:cursor-pointer hover:text-gray-600 text-gray-400"
        />
        <!-- Post button -->
        <button
          class="h-fit my-auto text-gray-400 hover:text-gray-600 hover:bg-gray-200 hover:cursor-pointer rounded-full px-3 border-2"
        >
          Post
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useProfileStore } from '@/stores/profile'
import type { User } from '@/types/user'
import { Icon } from '@iconify/vue'

const store = useProfileStore()
const profile = ref({} as User)
const loading = ref(true)

onMounted(async () => {
  // Fetch profile data
  profile.value = await store.fetchProfile()
  loading.value = false
})
</script>
