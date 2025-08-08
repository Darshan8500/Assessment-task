<template>
  <nav :class="[
    'fixed top-0 left-0 w-full z-[999] transition duration-300',
    isScrolled ? 'bg-[#0F172B] shadow-md' : 'bg-transparent'
  ]">
    <div class="max-w-[1320px] mx-auto px-4 md:px-[60px]">
      <div class="flex items-center justify-between h-20 text-white">
        <!-- Logo -->
        <NuxtLink to="/"
          class="flex items-center space-x-2 text-[#FEA116] font-bold w-[186.22px] h-[40.21px] text-[40.21px] leading-none font-nunito">
          <i class="fas fa-utensils"></i>
          <span>Restoran</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8 font-semibold relative">
          <NuxtLink to="/" class="uppercase text-base tracking-wide hover:text-[#FEA116] transition"
            :class="{ 'text-[#FEA116]': route.path === '/' }">Home</NuxtLink>

          <NuxtLink to="/about" class="uppercase text-base tracking-wide hover:text-[#FEA116] transition"
            :class="{ 'text-[#FEA116]': route.path === '/about' }">About</NuxtLink>

          <NuxtLink to="/service" class="uppercase text-base tracking-wide hover:text-[#FEA116] transition"
            :class="{ 'text-[#FEA116]': route.path === '/service' }">Service</NuxtLink>

          <NuxtLink to="/menu" class="uppercase text-base tracking-wide hover:text-[#FEA116] transition"
            :class="{ 'text-[#FEA116]': route.path === '/menu' }">Menu</NuxtLink>

          <!-- Dropdown -->
          <div class="relative uppercase text-base" @mouseenter="showDropdown = true"
            @mouseleave="showDropdown = false">
            <button class="flex items-center space-x-1 hover:text-[#FEA116] transition focus:outline-none"
              @click="showDropdown = !showDropdown">
              <span>PAGES</span>
              <i class="fa-solid fa-caret-down"></i>
            </button>

            <transition name="fade" appear>
              <div v-show="showDropdown"
                class="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg ring-1 ring-black/5 z-[1000]">
                <NuxtLink to="/booking" class="block px-4 py-2 hover:bg-gray-100 capitalize">Booking</NuxtLink>
                <NuxtLink to="/team" class="block px-4 py-2 hover:bg-gray-100 capitalize">Our Team</NuxtLink>
                <NuxtLink to="/testimonial" class="block px-4 py-2 hover:bg-gray-100 capitalize">Testimonial</NuxtLink>
              </div>
            </transition>
          </div>

          <NuxtLink to="/contact" class="uppercase text-base tracking-wide hover:text-[#FEA116] transition"
            :class="{ 'text-[#FEA116]': route.path === '/contact' }">Contact</NuxtLink>

          <NuxtLink to="/booking"
            class="bg-[#FEA116] hover:bg-[#ffc107] text-white font-semibold w-[160.09px] h-[37.38px] flex items-center justify-center transition">
            Book A Table
          </NuxtLink>
        </div>

        <!-- Hamburger Button -->
        <button class="md:hidden text-white text-2xl ml-4" @click="isOpen = !isOpen" aria-label="Toggle menu">
          <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-[#0F172B] px-6 py-4 space-y-3 text-white">
        <NuxtLink to="/" class="block uppercase text-base hover:text-[#FEA116]" @click="closeMenu">Home</NuxtLink>
        <NuxtLink to="/about" class="block uppercase text-base hover:text-[#FEA116]" @click="closeMenu">About</NuxtLink>
        <NuxtLink to="/service" class="block uppercase text-base hover:text-[#FEA116]" @click="closeMenu">Service
        </NuxtLink>
        <NuxtLink to="/menu" class="block uppercase text-base hover:text-[#FEA116]" @click="closeMenu">Menu</NuxtLink>
        <NuxtLink to="/booking" class="block uppercase text-base hover:text-[#FEA116]" @click="closeMenu">Booking
        </NuxtLink>
        <NuxtLink to="/team" class="block uppercase text-base hover:text-[#FEA116]" @click="closeMenu">Our Team
        </NuxtLink>
        <NuxtLink to="/testimonial" class="block uppercase text-base hover:text-[#FEA116]" @click="closeMenu">
          Testimonial</NuxtLink>
        <NuxtLink to="/contact" class="block uppercase text-base hover:text-[#FEA116]" @click="closeMenu">Contact
        </NuxtLink>

        <NuxtLink to="/booking"
          class="block bg-[#FEA116] text-white px-5 py-3 text-center uppercase text-base font-semibold"
          @click="closeMenu">
          Book A Table
        </NuxtLink>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const isScrolled = ref(false)
const showDropdown = ref(false)
const route = useRoute()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const closeMenu = () => {
  isOpen.value = false
  showDropdown.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
