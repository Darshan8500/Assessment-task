<template>
  <div class="w-full">
    <!-- Tab container -->
    <div class="relative w-full sm:w-fit mx-auto flex flex-wrap justify-center gap-6 sm:gap-10 pb-4 px-4">
      <!-- Tab buttons -->
      <button v-for="tab in tabs" :key="tab.name" @click="$emit('update:modelValue', tab.name)"
        class="relative flex items-center gap-3 px-1">
        <!-- Icon (orange) -->
        <i :class="[tab.icon, 'text-[#FEA116] text-xl sm:text-2xl']"></i>

        <!-- Labels -->
        <div class="flex flex-col text-left leading-tight">
          <span class="text-xs sm:text-sm text-gray-500">{{ tab.labelTop }}</span>
          <span class="text-sm sm:text-base font-extrabold text-[#0F172B]">
            {{ tab.labelBottom }}
          </span>
        </div>

        <!-- Orange underline if active -->
        <span v-if="modelValue === tab.name" class="absolute bottom-0 left-0 w-full h-[2px] bg-[#FEA116] z-20"></span>
      </button>

      <!-- Gray line behind all tabs -->
      <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300 z-10"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
})

const tabs = [
  {
    name: 'Breakfast',
    labelTop: 'Popular',
    labelBottom: 'Breakfast',
    icon: 'fa-solid fa-mug-saucer',
  },
  {
    name: 'Lunch',
    labelTop: 'Special',
    labelBottom: 'Lunch',
    icon: 'fa-solid fa-burger',
  },
  {
    name: 'Dinner',
    labelTop: 'Lovely',
    labelBottom: 'Dinner',
    icon: 'fa-solid fa-utensils',
  },
]
</script>
