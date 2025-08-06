<template>
  <div
    class="group relative bg-white rounded-lg shadow-lg p-6 text-center transition duration-300 overflow-hidden"
  >
    <!-- Chef Image -->
    <div class="w-40 h-40 mx-auto rounded-full overflow-hidden transition duration-300 transform group-hover:scale-110">
      <img :src="image" :alt="name" class="w-full h-full object-cover" />
    </div>

    <!-- Name & Designation -->
    <h5 class="text-lg font-bold text-gray-800 mt-4">{{ name }}</h5>
    <p class="text-sm text-gray-500">{{ designation }}</p>

    <!-- Social Icons -->
    <div
      class="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition duration-300 bg-primary py-2 flex justify-center space-x-4"
    >
      <a
        v-for="(social, index) in socials"
        :key="index"
        :href="social.href"
        class="text-white hover:text-gray-200 text-lg"
        target="_blank"
      >
        <i :class="social.icon"></i>
      </a>
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
