<script setup lang="ts">
import type { User } from '@/types/user'

defineProps<{
  person: User
}>()
</script>

<template>
  <!-- Profile Image -->
  <div
    class="rounded-full"
    :class="{ 'bg-gradient-to-br from-cyan-500 to-yellow-400': person.is_doctor }"
  >
    <img :src="person.picture" alt="avatar" class="w-20 h-18 rounded-full p-1 border-2" />
  </div>

  <!-- Name and Profession -->
  <div class="mt-4 whitespace-nowrap text-center">
    <p class="2xl:text-base text-lg hover:underline font-semibold text-gray-800">
      {{ person.name }}
    </p>
    <p class="2xl:text-base text-lg font-light -mt-1 text-yellow-500">{{ person.profession }}</p>
  </div>

  <!-- Location and Follow Button -->
  <div class="mt-auto w-full mx-auto text-center">
    <p class="text-sm text-gray-600 py-4">{{ person.location }}</p>
    <button
      :class="{
        'bg-orange-300 hover:bg-orange-400': person.is_doctor,
        'bg-purple-300 hover:bg-purple-400': !person.is_doctor
      }"
      class="w-full rounded-full text-white py-1 focus:outline-none hover:shadow-md"
    >
      Follow
    </button>
  </div>
</template>
