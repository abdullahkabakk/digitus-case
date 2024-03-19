<template>
  <div v-for="i in 3" :key="i" class="animate-pulse">
    <div class="bg-white mb-5 shadow-xl w-full rounded-lg">
      <div class="flex items-center space-x-2 px-2 py-1.5">
        <div class="rounded-full bg-gray-300 h-8 w-8" />
        <div class="font-semibold text-sm whitespace-nowrap">
          <p class="bg-gray-300 h-4 w-20" />
        </div>
      </div>
      <div class="h-1 w-full bg-gray-300" />
      <div class="flex flex-wrap">
        <div class="w-full h-48 lg:h-28 bg-gray-300" />
      </div>
      <div class="p-3">
        <p class="text-gray-800 text-sm font-bold bg-gray-300 h-4 w-20" />
        <div class="flex mt-4 flex-row justify-between">
          <span class="text-sm bg-gray-300 h-4 w-20" />
          <span class="text-sm bg-gray-300 h-4 w-20" />
        </div>
      </div>
    </div>
  </div>
</template>
