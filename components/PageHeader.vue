<template>
  <header
    class="relative w-full h-[320px] md:h-[380px] flex items-center justify-center"
  >
    <!-- background -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="`background-image:url('${bg}')`"
    />
    <!-- dark overlay -->
    <div class="absolute inset-0 bg-[#0F172B]/80" /> 
    <!-- content -->
    <div class="relative z-10 text-center text-white px-4">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4">{{ title }}</h1>

      <!-- breadcrumb -->
      <nav aria-label="Breadcrumb" class="text-sm md:text-base">
        <ul class="flex items-center justify-center gap-2 md:gap-3 text-white/80">
          <li>
            <NuxtLink to="/" class="hover:text-[#FEA116]">HOME</NuxtLink>
          </li>
          <li>/</li>
          <li class="uppercase">Pages</li>
          <li>/</li>
          <li class="text-[#FEA116] uppercase">{{ crumb }}</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },   // e.g. "About Us"
  crumb: { type: String, required: true },   // e.g. "About"
  // using same hero background used on the home page
  bg: { type: String, default: '/images/bg-hero.jpg' }
})
</script>
