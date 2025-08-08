<template>
  <section class="py-16 bg-gray-100" id="services">
    <div class="max-w-[1320px] mx-auto px-6 md:px-[60px]">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div v-for="(service, index) in services" :key="index" class="group bg-white rounded-md p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] 
                 transition-all duration-300 cursor-pointer hover:bg-[#FEA116] 
                 opacity-0 translate-y-6 animate-on-scroll" :style="{ animationDelay: `${index * 0.1}s` }">
          <!-- Icon -->
          <div
            class="text-[#FEA116] text-[48px] leading-none mb-4 transition-colors duration-300 group-hover:text-white">
            <i :class="service.icon"></i>
          </div>

          <!-- Title -->
          <h3
            class="font-nunito text-[20px] font-extrabold text-[#0F172B] mb-2 transition-colors duration-300 group-hover:text-white">
            {{ service.title }}
          </h3>

          <!-- Text -->
          <p v-html="service.description"
            class="text-[15px] leading-6 text-gray-500 transition-colors duration-300 group-hover:text-white"></p>


        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const services = [
  {
    icon: 'fas fa-user-tie', title: 'Master Chefs',
    description: 'Diam elitr kasd sed at elitr <br> sed ipsum justo dolor sed <br> clita amet diam.'
  },
  {
    icon: 'fas fa-utensils', title: 'Quality Food',
    description: 'Diam elitr kasd sed at elitr <br> sed ipsum justo dolor sed <br>clita amet diam.'
  },
  {
    icon: 'fas fa-cart-plus', title: 'Online Order',
    description: 'Diam elitr kasd sed at elitr <br> sed ipsum justo dolor sed<br> clita amet diam.'
  },
  {
    icon: 'fas fa-headset', title: '24/7 Service',
    description: 'Diam elitr kasd sed at elitr <br> sed ipsum justo dolor sed<br> clita amet diam.'
  },
]

// Simple scroll observer
onMounted(() => {
  const elements = document.querySelectorAll('.animate-on-scroll')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.2 })

  elements.forEach(el => observer.observe(el))
})
</script>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(24px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>
