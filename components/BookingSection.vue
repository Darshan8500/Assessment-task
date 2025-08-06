<template>
  <section class="bg-white py-16" id="booking">
    <div class="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
      <!-- Left Image + Play Button -->
      <div class="relative w-full lg:w-1/2">
        <img src="/images/video.jpg" alt="Booking" class="rounded-lg" />
        <button class="absolute inset-0 flex items-center justify-center">
          <div class="w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center">
            <i class="fa fa-play text-white text-2xl"></i>
          </div>
        </button>
      </div>

      <!-- Right Form -->
      <div class="w-full lg:w-1/2 bg-primary text-white p-8 rounded-lg">
        <h2 class="text-4xl font-bold mb-6">Book A Table Online</h2>
        <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" class="p-3 rounded text-black" />
          <input type="email" placeholder="Your Email" class="p-3 rounded text-black" />
          <input type="datetime-local" class="p-3 rounded text-black md:col-span-1" />
          <select class="p-3 rounded text-black">
            <option>People 1</option>
            <option>People 2</option>
            <option>People 3</option>
            <option>People 4+</option>
          </select>
          <textarea rows="4" placeholder="Special Request" class="p-3 rounded text-black md:col-span-2"></textarea>
          <button type="submit" class="bg-orange-400 hover:bg-orange-500 p-3 rounded-md font-semibold md:col-span-2">
            BOOK NOW
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
// layout
</script>

<style scoped>
.bg-primary {
  background-color: #0F172B;
}
</style>
