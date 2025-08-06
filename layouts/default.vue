<template>
  <div class="pt-16 min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/NavbarSection.vue'
import Footer from '~/components/FooterSection.vue'
</script>
