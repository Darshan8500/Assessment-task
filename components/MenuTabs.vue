<!-- components/MenuTabs.vue -->
<template>
  <div class="flex justify-center gap-10 my-8 border-b border-orange-400">
    <button
      v-for="tab in tabs"
      :key="tab.name"
      @click="$emit('update:modelValue', tab.name)"
      :class="[tab.name === modelValue ? 'text-orange-500 border-b-4 border-orange-500 font-bold' : 'text-gray-500', 'pb-2']"
    >
      <div class="flex items-center justify-center gap-2">
        <i :class="tab.icon"></i>
        <span>{{ tab.label }}</span>
      </div>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String
})

const tabs = [
  { name: 'Breakfast', label: 'Popular Breakfast', icon: 'fa-solid fa-mug-hot' },
  { name: 'Lunch', label: 'Special Launch', icon: 'fa-solid fa-burger' },
  { name: 'Dinner', label: 'Lovely Dinner', icon: 'fa-solid fa-utensils' }
]
</script>