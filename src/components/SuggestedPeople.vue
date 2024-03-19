<template>
  <!-- Container -->
  <div class="bg-[#DFE6E9] w-full mt-5 flex flex-col rounded-lg p-4 relative shadow-2xl">
    <!-- Navigation Buttons -->
    <div v-for="(val, key) in ['prev', 'next']" :key="key">
      <ChangeButton :type="val as ChangeType" @change="changeUser" />
    </div>

    <!-- Header -->
    <TheHeader />

    <!-- Member Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
      <div
        v-for="(person, idx) in visiblePeople"
        :key="idx"
        class="bg-white rounded-lg p-4 items-center flex flex-col shadow-sm transition-transform transform hover:scale-105 cursor-pointer"
      >
        <MemberCard :person="person" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { mockSuggestedPeople } from '@/utils/suggestedPeople'
import TheHeader from '@/components/suggestedPeople/TheHeader.vue'
import MemberCard from '@/components/suggestedPeople/MemberCard.vue'
import ChangeButton from '@/components/suggestedPeople/ChangeButton.vue'
type ChangeType = 'next' | 'prev'

// Reactive variables
const currentIndex = ref(0)
const innerWidth = ref(window.innerWidth)
const LAPTOP_WIDTH = 1024
const TABLET_WIDTH = 768

// Computed property for items per page based on window width
const perPage = computed(() => {
  if (innerWidth.value >= LAPTOP_WIDTH) return 3
  if (innerWidth.value >= TABLET_WIDTH) return 2
  return 1
})

// Computed property for visible people based on current index and items per page
const visiblePeople = computed(() => {
  const startIndex = currentIndex.value
  const endIndex = startIndex + perPage.value
  return mockSuggestedPeople.slice(startIndex, endIndex)
})

// Function to move to the previous user
const prevUser = () => {
  if (currentIndex.value > 0) currentIndex.value -= 1
}

// Function to move to the next user
const nextUser = () => {
  const maxIndex = mockSuggestedPeople.length - perPage.value
  if (currentIndex.value < maxIndex) currentIndex.value += 1
}

// Function to handle navigation button click
const changeUser = (type: string): void => (type === 'prev' ? prevUser() : nextUser())

// Event listener for window resize
onMounted(() => {
  window.addEventListener('resize', handleResize)
})

// Function to handle window resize
function handleResize(): void {
  innerWidth.value = window.innerWidth
}
</script>
