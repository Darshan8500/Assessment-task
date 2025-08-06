<template>
  <section
    id="hero"
    class="relative min-h-screen pt-16 md:pt-20 flex items-center justify-center bg-cover bg-center"
    style="background-image: url('/images/bg-hero.jpg');"
  >
 
    <!-- Overlay -->
    <div class="absolute inset-0 bg-[rgba(15,23,43,0.9)] bg-opacity-90"></div>

    <!-- Hero Content Wrapper -->
    <div
      class="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6 py-12 text-center md:text-left"
    >
      <!-- Text -->
      <div class="text-white max-w-xl md:pr-12">
        <h1 class="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight">
          Enjoy Our <br />
          Delicious Meal
        </h1>
        <p class="text-lg sm:text-xl mb-6">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
          Clita erat ipsum et lorem et sit.
        </p>
        <a
          href="#booking"
          class="inline-block bg-primary hover:bg-primaryHover text-white px-6 py-3 text-lg rounded font-semibold transition"
        >
          Book A Table
        </a>
      </div>

      <!-- Image -->
      <div class="mt-10 md:mt-0 flex justify-center md:justify-start w-full md:w-auto">
        <img
          src="/images/hero.png"
          alt="Grilled food"
          class="w-72 sm:w-96 md:w-[450px] lg:w-[500px] animate-spin-slow"
        />
      </div>
    </div>
  </section>
</template>
