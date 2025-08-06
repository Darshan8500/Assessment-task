<template>
  <div class="flex items-center justify-between py-4 border-b border-gray-200">
    <div class="flex items-center gap-4">
      <img :src="item.image" alt="menu" class="w-20 h-20 object-cover rounded" />
      <div>
        <h4 class="text-lg font-bold text-gray-800">{{ item.title }}</h4>
        <p class="text-sm text-gray-500">{{ item.description }}</p>
      </div>
    </div>
    <div class="text-orange-500 font-bold text-xl">${{ item.price }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>