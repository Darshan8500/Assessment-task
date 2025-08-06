<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
      
      <!-- Left: Image Grid -->
      <div class="grid grid-cols-2 gap-4 w-full lg:w-1/2">
        <img src="/images/about/about-1.jpg" alt="About 1" class="w-full rounded-lg animate-fadein delay-100" />
        <img src="/images/about/about-2.jpg" alt="About 2" class="w-3/4 rounded-lg animate-fadein delay-300 mt-6" />
        <img src="/images/about/about-3.jpg" alt="About 3" class="w-full rounded-lg animate-fadein delay-500" />
        <img src="/images/about/about-4.jpg" alt="About 4" class="w-full rounded-lg animate-fadein delay-700 mt-6" />
      </div>

      <!-- Right: Text Content -->
      <div class="lg:w-1/2 text-left">
        <h5 class="text-orange-500 text-lg font-semibold uppercase mb-2">About Us</h5>
        <h2 class="text-4xl font-bold mb-6 text-gray-800">Welcome to Restoran</h2>

        <p class="mb-4 text-gray-600">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>
        <p class="mb-6 text-gray-600">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
        </p>

        <!-- Experience & Chefs -->
        <div class="flex gap-8 mb-6">
          <div>
            <h3 class="text-4xl font-bold text-orange-500">15</h3>
            <p class="text-gray-700 leading-snug">
              Years of<br />
              Experience
            </p>
          </div>
          <div>
            <h3 class="text-4xl font-bold text-orange-500">50</h3>
            <p class="text-gray-700 leading-snug">
              Popular<br />
              Master Chefs
            </p>
          </div>
        </div>

        <NuxtLink
          to="/about"
          class="inline-block bg-orange-500 text-white px-5 py-3 rounded hover:bg-orange-600 transition"
        >
          Read More
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
delay-500 {
  animation-delay: 0.5s;
}
.delay-700 {
  animation-delay: 0.7s;
}
</style>
