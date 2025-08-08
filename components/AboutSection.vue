<template>
  <section class="py-16 lg:py-20 bg-white font-nunito">
    <div class="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">

      <!-- Left: Image Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
        <div class="w-full aspect-square">
          <img src="/images/about/about-1.jpg" alt="About 1"
            class="w-full h-full object-cover Squared-lg animate-fadein delay-100" />
        </div>
        <div class="w-full aspect-square sm:w-3/4 mt-[20%] sm:mt-10">
          <img src="/images/about/about-2.jpg" alt="About 2"
            class="w-full h-full object-cover Squared-lg animate-fadein delay-300" />
        </div>
        <div class="w-full aspect-square sm:w-3/4 ml-auto">
          <img src="/images/about/about-3.jpg" alt="About 3"
            class="w-full h-full object-cover Squared-lg animate-fadein delay-500" />
        </div>
        <div class="w-full aspect-square">
          <img src="/images/about/about-4.jpg" alt="About 4"
            class="w-full h-full object-cover Squared-lg animate-fadein delay-700" />
        </div>
      </div>

      <!-- Right: Text Content -->
      <div class="w-full lg:w-1/2 text-left">
        <!-- Section Title -->
        <h5 class="text-[#FEA116] text-[20px] font-pacifico mb-4 flex items-center gap-3">
          About Us
          <span class="block h-[2px] w-16 bg-[#FEA116]"></span>
        </h5>

        <!-- Main Title -->
        <h2 class="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-900">
          Welcome to
          <i class="fa fa-utensils text-[#FEA116] mx-1"></i>
          Restoran
        </h2>

        <!-- Description -->
        <p class="mb-4 text-gray-600 leading-relaxed text-sm sm:text-base">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
          <br class="hidden sm:block" />
          amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>
        <p class="mb-8 text-gray-600 leading-relaxed text-sm sm:text-base">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
          <br class="hidden sm:block" />
          amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita
          <br class="hidden sm:block" />
          duo justo magna dolore erat amet.
        </p>

        <!-- Stats with animated counters -->
        <div class="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-8">
          <div class="flex items-center border-l-4 border-[#FEA116] pl-4">
            <h3 class="text-3xl sm:text-4xl font-extrabold text-[#FEA116] mr-3">{{ experienceCount }}</h3>
            <p class="text-gray-700 leading-snug text-sm sm:text-base">
              Years of<br />
              <span class="font-bold">EXPERIENCE</span>
            </p>
          </div>
          <div class="flex items-center border-l-4 border-[#FEA116] pl-4">
            <h3 class="text-3xl sm:text-4xl font-extrabold text-[#FEA116] mr-3">{{ chefsCount }}</h3>
            <p class="text-gray-700 leading-snug text-sm sm:text-base">
              Popular<br />
              <span class="font-bold">MASTER CHEFS</span>
            </p>
          </div>
        </div>

        <!-- Button -->
        <NuxtLink to="/about"
          class="inline-block bg-[#FEA116] text-white px-6 py-3 rounded hover:bg-[#ffc107] transition text-sm sm:text-base">
          READ MORE
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const experienceCount = ref(0)
const chefsCount = ref(0)

onMounted(() => {
  const duration = 2000
  const frameDuration = 1000 / 60
  const totalFrames = Math.round(duration / frameDuration)

  let frame = 0
  const easeOutQuad = t => t * (2 - t)

  const animate = () => {
    frame++
    const progress = easeOutQuad(frame / totalFrames)
    experienceCount.value = Math.round(1 + (15 - 1) * progress)
    chefsCount.value = Math.round(1 + (50 - 1) * progress)

    if (frame < totalFrames) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadein {
  animation: fadein 1s ease-out forwards;
  opacity: 0;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-700 {
  animation-delay: 0.7s;
}
</style>
