<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { navbarRoutes } from '@/utils/navbarRoutes'
import { onMounted, ref } from 'vue'
import NavLinks from '@/components/navbar/NavLinks.vue'
import UserNotifications from '@/components/navbar/UserNotifications.vue'
import type { Notification } from '@/types/notification'
import UserProfile from '@/components/navbar/UserProfile.vue'
import type { User } from '@/types/user'
import { useProfileStore } from '@/stores/profile'

const showSections = ref(false)
const notifications = ref([] as Notification[])
const loadingNotifications = ref(false)
const loadingUsers = ref(false)
const user = ref({} as User)
const store = useProfileStore()

onMounted(async () => {
  loadingNotifications.value = true
  loadingUsers.value = true
  try {
    // Fetch user data
    user.value = await store.fetchProfile()
    // Fetch notifications
    notifications.value = await store.fetchNotifications()
  } catch (error) {
    console.error('[FETCHING DATA] An error occurred while fetching data:', error)
  } finally {
    loadingNotifications.value = false
    loadingUsers.value = false
  }
})

const toggleSections = () => (showSections.value = !showSections.value)
</script>

<template>
  <nav
    class="w-full max-w-screen-2xl mx-auto py-2 flex flex-col md:flex-row md:justify-between md:items-center"
  >
    <div class="flex">
      <!-- Logo -->
      <img src="@/assets/logo.svg" alt="Logo" class="h-10 py-1 my-auto md:mx-0" />
      <!-- Hamburger Menu Button (for mobile) -->
      <button class="flex md:hidden ml-auto" @click="toggleSections">
        <Icon
          :icon="showSections ? 'material-symbols:close-rounded' : 'material-symbols:menu'"
          class="w-8 h-8"
        />
      </button>
    </div>

    <!-- Middle Section: Navigation Links -->
    <div
      class="flex flex-col md:flex-row md:gap-10 my-3 md:my-auto md:w-auto"
      :class="{ hidden: !showSections, 'md:flex': true }"
    >
      <!-- Add Button -->
      <button
        class="text-white bg-gradient-to-b from-pink-500/90 via-purple-500/80 to-indigo-500/80 rounded-full h-fit my-auto hidden md:inline-block"
      >
        <Icon icon="material-symbols:add" class="w-10 h-10" />
      </button>

      <NavLinks :routes="navbarRoutes" />
    </div>

    <!-- Right Section: Search, Notifications, Profile -->
    <div
      class="md:flex items-center flex-row divide-x-2 space-x-5 my-3 md:my-auto"
      :class="{ hidden: !showSections, 'md:flex': true }"
    >
      <!-- Search Button -->
      <button>
        <Icon icon="material-symbols:search" class="w-8 h-8" />
      </button>

      <!-- Loading state for notifications -->
      <div v-if="loadingNotifications" class="pl-3 gap-2 flex">
        <div class="animate-pulse rounded-full bg-gray-300 h-12 w-12" />
        <div class="animate-pulse rounded-full bg-gray-300 h-12 w-12" />
      </div>
      <div v-else>
        <UserNotifications :notifications="notifications" />
      </div>

      <div v-if="loadingNotifications" class="pl-3 gap-2 flex pr-2">
        <div class="animate-pulse rounded-full bg-gray-300 h-12 w-12" />
      </div>
      <div v-else>
        <UserProfile :user="user" />
      </div>
    </div>
  </nav>
</template>
