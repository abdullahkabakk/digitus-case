<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps(['notifications'])
</script>

<template>
  <!-- Notifications -->
  <div class="flex">
    <button
      v-for="(notification, index) in notifications"
      :key="index"
      class="flex items-center ml-3"
    >
      <Icon :icon="notification.icon" class="w-8 h-8" />

      <!-- Notification Count -->
      <span
        v-if="notification.count > 0"
        class="mb-8 bg-red-400 -ml-1 text-white text-xs px-1 rounded-full"
      >
        {{ notification.count }}
      </span>
    </button>
  </div>
</template>
