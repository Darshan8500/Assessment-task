<template>
  <div class="flex items-start gap-4 py-2">
    <!-- Left: Image -->
    <img :src="item.image" alt="menu" class="w-20 h-20 object-cover squared-full border-2 border-[#FEA116] shrink-0" />

    <!-- Right: Text + price + border bottom -->
    <!-- Each Menu Item Row -->
    <div class="w-full">
      <!-- Title + Price with bottom border -->
      <div class="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
        <h4 class="text-lg font-extrabold text-[#0F172B] font-nunito">
          {{ item.title }}
        </h4>
        <div class="text-[#FEA116] font-extrabold text-xl font-nunito">
          ${{ item.price }}
        </div>
      </div>

      <!-- Description below border -->
      <p class="text-sm text-gray-500 font-nunito">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
