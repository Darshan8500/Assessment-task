<template>
  <div :class="['p-6 rounded shadow transition-all duration-300', active ? 'bg-[#FEA116] text-white' : 'bg-white']">
    <i class="fas fa-quote-left text-3xl mb-4 text-[#FEA116]"></i>
    <p class="mb-6">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
    <div class="flex items-center gap-4">
      <img :src="image" class="w-12 h-12 rounded-full" />
      <div>
        <h4 class="font-bold" :class="active ? 'text-white' : 'text-gray-800'">Client Name</h4>
        <p class="text-sm" :class="active ? 'text-white/80' : 'text-gray-500'">Profession</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  active: Boolean
})
</script>
