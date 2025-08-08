<template>
  <div
    class="group bg-white rounded-lg shadow-lg p-6 pt-8 text-center transition-all duration-500 ease-in-out overflow-hidden relative">
    <!-- Chef Image -->
    <div class="w-40 h-40 mx-auto rounded-full overflow-hidden transition duration-300 transform group-hover:scale-105">
      <img :src="image" :alt="name" class="w-full h-full object-cover" />
    </div>

    <!-- Name & Designation -->
    <h5 class="text-lg font-bold text-gray-800 mt-4">{{ name }}</h5>
    <p class="text-sm text-gray-500">{{ designation }}</p>

    <!-- Hidden space for social pills -->
    <div class="mt-4 max-h-0 group-hover:max-h-16 transition-all duration-500 ease-in-out overflow-hidden">
      <div class="flex justify-center items-end gap-4 mt-2">
        <a v-for="(social, index) in socials" :key="index" :href="social.href" target="_blank" class="w-10 h-14 bg-[#FEA116] rounded-full flex items-center justify-center
                 hover:bg-[#fdb147] transition duration-300 shadow-md" :style="{
                  marginBottom: '-10px'  // simulate 25% pill hidden
                }">
          <i :class="social.icon" class="text-white text-lg"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  name: String,
  designation: String,
  socials: Array,
})
</script>
