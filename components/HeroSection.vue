<template>
  <section id="hero" class="relative min-h-screen pt-16 md:pt-20 flex items-center justify-center bg-cover bg-center"
    style="background-image: url('/images/bg-hero.jpg');">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-[rgba(15,23,43,0.9)]"></div>

    <!-- Hero Content Wrapper -->
    <div
      class="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center md:text-left">
      <!-- Text -->
      <div class="text-white w-full md:w-1/2 mb-10 md:mb-0">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight font-nunito"
          data-aos="fade-right">
          Enjoy Our <br />
          Delicious Meal
        </h1>

        <p class="text-sm sm:text-base mb-6 leading-relaxed" data-aos="fade-right">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
          amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
          clita duo justo magna dolore erat amet
        </p>

        <a href="#booking"
          class="inline-block bg-primary text-white px-10 py-3 text-sm sm:text-base md:text-lg font-semibold transition hover:bg-[#ffc107]"
          data-aos="fade-right">
          BOOK A TABLE
        </a>
      </div>

      <!-- Image -->
      <div class="w-full md:w-1/2 flex justify-center md:justify-end">
        <img src="/images/hero.png" alt="Grilled food"
          class="w-60 sm:w-80 md:w-[400px] lg:w-[500px] animate-spin-slow" />
      </div>
    </div>
  </section>
</template>
