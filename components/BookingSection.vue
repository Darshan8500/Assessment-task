<template>
  <section class="bg-white" id="booking" data-aos="fade-up">
    <div class="w-full flex flex-col lg:flex-row items-stretch px-0">
      <!-- Left Image + Play Button -->
      <div class="relative w-full lg:w-1/2">
        <img src="/images/video.jpg" alt="Booking" class="w-full h-full object-cover" />
        <button @click="isModalOpen = true" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group">
          <!-- Fixed Pulsing ring (centered with same size as button) -->
          <span
            class="absolute w-20 h-20 rounded-full border-4 border-[#FEA116] opacity-60 animate-ping top-0 left-0"></span>

          <!-- Centered icon button -->
          <span
            class="relative z-10 flex items-center justify-center w-20 h-20 bg-[#FEA116] rounded-full shadow-lg transition-transform duration-300 group-hover:scale-125">
            <svg class="w-10 h-10 text-black ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>

      </div>

      <!-- Right Form -->
      <div class="w-full lg:w-1/2 bg-primary text-white p-8">
        <h5 class="text-[#FEA116] text-[20px] font-pacifico mb-4 flex items-center gap-3">
          Reservation
          <span class="block h-[2px] w-16 bg-[#FEA116]"></span>
        </h5>
        <h2 class="text-4xl font-bold mb-6 font-nunito">Book A Table Online</h2>
        <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" class="p-3 squared text-black" />
          <input type="email" placeholder="Your Email" class="p-3 squared  text-black" />
          <input type="datetime-local" class="p-3 squared  text-black md:col-span-1" />
          <select class="p-3 squared  text-black">
            <option value="" disabled selected hidden>No of People</option>
            <option>People 1</option>
            <option>People 2</option>
            <option>People 3</option>
          </select>
          <textarea rows="4" placeholder="Special Request" class="p-3 squared  text-black md:col-span-2"></textarea>
          <button type="submit" class="bg-[#FEA116]  hover:bg-[#ffc107] p-3 squared -md font-semibold md:col-span-2">
            BOOK NOW
          </button>
        </form>
      </div>
    </div>

    <!-- Video Modal -->
    <Teleport to="body">
      <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div class="relative w-full max-w-3xl px-4">
          <button class="absolute top-2 right-2 text-white text-3xl font-bold" @click="isModalOpen = false">
            &times;
          </button>
          <div class="aspect-w-16 aspect-h-9">
            <iframe src="https://www.youtube.com/embed/DWRcNpR6Kdc" frameborder="0" allow="autoplay; encrypted-media"
              allowfullscreen class="w-full h-full rounded"></iframe>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const isModalOpen = ref(false)
</script>

<style scoped>
.bg-primary {
  background-color: #0F172B;
}
</style>
