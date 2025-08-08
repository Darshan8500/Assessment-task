<template>
  <PageHeader title="Contact us" crumb="Contact" />
  <section class="py-20 px-4 md:px-20">
    <!-- Top Title -->
    <div class="text-center mb-10">
      <div class="flex items-center justify-center gap-4 mb-2">
        <span class="block h-[2px] w-10 bg-[#FEA116]"></span>
        <h5 class="text-[#FEA116] text-[20px] font-pacifico">Contact Us</h5>
        <span class="block h-[2px] w-10 bg-[#FEA116]"></span>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold font-nunito">Contact For Any Query</h1>
    </div>

    <!-- Contact Info Cards (Left-aligned fix) -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div class="text-left">
        <div class="flex items-center mb-2">
          <h4 class="text-xl font-bold text-[#FEA116] font-pacifico">Booking</h4>
          <span class="ml-2 block h-[2px] w-10 bg-[#FEA116]"></span>
        </div>
        <div class="flex items-center gap-2 text-gray-600">
          <i class="fas fa-envelope text-[#FEA116] text-xl"></i>
          <p>book@example.com</p>
        </div>
      </div>

      <div class="text-left">
        <div class="flex items-center mb-2">
          <h4 class="text-xl font-bold text-[#FEA116] font-pacifico">General</h4>
          <span class="ml-2 block h-[2px] w-10 bg-[#FEA116]"></span>
        </div>
        <div class="flex items-center gap-2 text-gray-600">
          <i class="fas fa-envelope text-[#FEA116] text-xl"></i>
          <p>info@example.com</p>
        </div>
      </div>

      <div class="text-left">
        <div class="flex items-center mb-2">
          <h4 class="text-xl font-bold text-[#FEA116] font-pacifico">Technical</h4>
          <span class="ml-2 block h-[2px] w-10 bg-[#FEA116]"></span>
        </div>
        <div class="flex items-center gap-2 text-gray-600">
          <i class="fas fa-envelope text-[#FEA116] text-xl"></i>
          <p>tech@example.com</p>
        </div>
      </div>
    </div>

    <!-- Map and Contact Form -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <!-- Google Map -->
      <iframe
        class="w-full h-96 rounded"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24164.204295089955!2d-74.0059414!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b9351e09c3%3A0x1a542541caef3e9f!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1689938548372!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <!-- Contact Form -->
      <form class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" class="input-style" />
          <input type="email" placeholder="Your Email" class="input-style" />
        </div>
        <input type="text" placeholder="Subject" class="input-style" />
        <textarea placeholder="Message" class="input-style h-40 resize-none"></textarea>
        <button
          type="submit"
          class="w-full bg-[#FEA116] text-white px-6 py-3 squared transition hover:bg-[#ffc107]"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  </section>
  <ScrollTop />
</template>

<script setup>
import ScrollTop from '~/components/ScrollTop.vue'
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
