<template>
  <header class="relative w-full h-[320px] md:h-[380px] flex items-center justify-center">
    <!-- background -->
    <div class="absolute inset-0 bg-cover bg-center" :style="`background-image:url('${bg}')`" />
    <!-- dark overlay -->
    <div class="absolute inset-0 bg-[rgba(15,23,43,0.9)] bg-opacity-90"></div>

    <!-- content -->
    <div class="relative z-10 text-center text-white px-4">
      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4 font-nunito animate-slideInDown">
        {{ title }}
      </h1>

      <!-- breadcrumb -->
      <nav aria-label="Breadcrumb" class="text-sm md:text-base">
        <ul class="flex items-center justify-center gap-2 md:gap-3">
          <li>
            <NuxtLink to="/" class="text-[#FEA116]">HOME</NuxtLink>
          </li>
          <li class="text-white">/</li>
          <li class="text-[#FEA116] uppercase">Pages</li>
          <li class="text-white">/</li>
          <li class="text-white uppercase">{{ crumb }}</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  crumb: { type: String, required: true },
  bg: { type: String, default: '/images/bg-hero.jpg' }
})
</script>

<style scoped>
@keyframes slideInDown {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slideInDown {
  animation: slideInDown 0.8s ease-out both;
}
</style>
