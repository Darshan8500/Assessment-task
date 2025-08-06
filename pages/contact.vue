<template>
  <PageHeader title="Contact us" crumb="Contact" />
  <section class="py-20 px-4 md:px-20">
    <div class="text-center mb-10">
      <h5 class="text-orange-500 text-xl font-semibold">Contact Us</h5>
      <h1 class="text-4xl md:text-5xl font-bold">Contact For Any Query</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
      <div>
        <i class="fas fa-envelope text-orange-500 text-3xl mb-2"></i>
        <h4 class="text-xl font-bold text-orange-500">Booking</h4>
        <p>book@example.com</p>
      </div>
      <div>
        <i class="fas fa-envelope text-orange-500 text-3xl mb-2"></i>
        <h4 class="text-xl font-bold text-orange-500">General</h4>
        <p>info@example.com</p>
      </div>
      <div>
        <i class="fas fa-envelope text-orange-500 text-3xl mb-2"></i>
        <h4 class="text-xl font-bold text-orange-500">Technical</h4>
        <p>tech@example.com</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <!-- Google Map  -->
      <iframe
        class="w-full h-96 rounded"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24164.204295089955!2d-74.0059414!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b9351e09c3%3A0x1a542541caef3e9f!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1689938548372!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>

      <!-- Contact Form -->
      <form class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" class="input-style" />
          <input type="email" placeholder="Your Email" class="input-style" />
        </div>
        <input type="text" placeholder="Subject" class="input-style" />
        <textarea placeholder="Message" class="input-style h-40 resize-none"></textarea>
        <button type="submit" class="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition">SEND MESSAGE</button>
      </form>
    </div>
  </section>

  <!-- Scroll to top -->
  <button @click="scrollToTop" class="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg">
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script setup>
import PageHeader from '~/components/PageHeader.vue'
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.input-style {
  @apply w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400;
}
</style>
