<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-[999] transition duration-300',
      isScrolled ? 'bg-[#0F172B] shadow-md' : 'bg-transparent'
    ]"
  >
    <div class="max-w-[1320px] mx-auto px-[60px]">

      <div class="flex items-center justify-between h-20 text-white">
        <!-- Logo -->
        <NuxtLink
          to="/"
         class="flex items-center space-x-2 text-[#FEA116] font-bold w-[186.22px] h-[40.21px] text-[40.21px] leading-none"
        >
          <i class="fas fa-utensils"></i>
          <span>Restoran</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8 font-semibold relative">
          <NuxtLink
            to="/"
            class="uppercase text-base tracking-wide hover:text-[#FEA116] transition"
            :class="{ 'text-[#FEA116]': route.path === '/' }"
          >Home</NuxtLink>

          <NuxtLink
            to="/about"
            class="uppercase text-base tracking-wide hover:text-[#FEA116] transition"
            :class="{ 'text-[#FEA116]': route.path === '/about' }"
          >About</NuxtLink>

          <NuxtLink
            to="/service"
            class="uppercase text-base tracking-wide hover:text-[#FEA116] transition"
            :class="{ 'text-[#FEA116]': route.path === '/service' }"
          >Service</NuxtLink>

          <NuxtLink
            to="/menu"
            class="uppercase text-base tracking-wide hover:text-[#FEA116] transition"
            :class="{ 'text-[#FEA116]': route.path === '/menu' }"
          >Menu</NuxtLink>

          <!-- Pages Dropdown -->
          <div
            class="relative uppercase text-base"
            @mouseenter="showDropdown = true"
            @mouseleave="showDropdown = false"
            @focusin="showDropdown = true"
            @focusout="showDropdown = false"
          >
            <button
              class="flex items-center space-x-1 hover:text-[#FEA116] focus:outline-none transition"
              @click="showDropdown = !showDropdown"
              aria-haspopup="true"
              :aria-expanded="showDropdown ? 'true' : 'false'"
            >
              <span>PAGES</span>
              <i class="fas fa-chevron-down text-xs"></i>
            </button>

            <transition name="fade" appear>
              <div
                v-show="showDropdown"
                class="absolute top-full left-0 mt-2 w-48 rounded-md bg-white text-black shadow-lg ring-1 ring-black/5 z-[1000] pointer-events-auto overflow-hidden"
              >
                <NuxtLink to="/booking" class="block px-4 py-2 hover:bg-gray-100">Booking</NuxtLink>
                <NuxtLink to="/team" class="block px-4 py-2 hover:bg-gray-100">Our Team</NuxtLink>
                <NuxtLink to="/testimonial" class="block px-4 py-2 hover:bg-gray-100">Testimonial</NuxtLink>
              </div>
            </transition>
          </div>

          <!-- Contact -->
          <NuxtLink
            to="/contact"
            class="uppercase text-base tracking-wide hover:text-[#FEA116] transition"
            :class="{ 'text-[#FEA116]': route.path === '/contact' }"
          >Contact</NuxtLink>

          <!-- CTA -->
          <NuxtLink
            to="/booking"
            class="bg-[#FEA116] hover:bg-[#e08e10] text-white font-semibold w-[160.09px] h-[37.38px] flex items-center justify-center transition"
          >
            BOOK A TABLE
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-white text-2xl ml-4"
          @click="isOpen = !isOpen"
          aria-label="Toggle menu"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div v-if="isOpen" class="md:hidden bg-[#0F172B] px-4 py-4 space-y-3 text-white">
      <NuxtLink to="/" class="block uppercase text-base tracking-wide hover:text-[#FEA116]" @click="isOpen=false">Home</NuxtLink>
      <NuxtLink to="/about" class="block uppercase text-base tracking-wide hover:text-[#FEA116]" @click="isOpen=false">About</NuxtLink>
      <NuxtLink to="/service" class="block uppercase text-base tracking-wide hover:text-[#FEA116]" @click="isOpen=false">Service</NuxtLink>
      <NuxtLink to="/menu" class="block uppercase text-base tracking-wide hover:text-[#FEA116]" @click="isOpen=false">Menu</NuxtLink>

      <NuxtLink to="/booking" class="block uppercase text-base tracking-wide hover:text-[#FEA116]" @click="isOpen=false">Booking</NuxtLink>
      <NuxtLink to="/team" class="block uppercase text-base tracking-wide hover:text-[#FEA116]" @click="isOpen=false">Our Team</NuxtLink>
      <NuxtLink to="/testimonial" class="block uppercase text-base tracking-wide hover:text-[#FEA116]" @click="isOpen=false">Testimonial</NuxtLink>
      <NuxtLink to="/contact" class="block uppercase text-base tracking-wide hover:text-[#FEA116]" @click="isOpen=false">Contact</NuxtLink>

      <NuxtLink
        to="/booking"
        class="block bg-[#FEA116] text-white px-5 py-3 text-center uppercase text-base font-semibold"
        @click="isOpen=false"
      >
        Book A Table
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)
const isScrolled = ref(false)
const showDropdown = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
