<template>
  <section class="py-16 bg-gray-100" id="services">
    <div class="container mx-auto px-4 text-center">
      <h5 class="text-orange-500 font-semibold uppercase mb-2">Our Services</h5>
      <h2 class="text-4xl font-bold mb-12">Explore Our Services</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-orange-500 hover:text-white cursor-pointer"
        >
          <div
            class="text-orange-500 group-hover:text-white text-4xl mb-4 transition-colors duration-300"
          >
            <i :class="service.icon"></i>
          </div>
          <h3 class="text-xl font-bold mb-2 group-hover:text-white">
            {{ service.title }}
          </h3>
          <p class="text-gray-600 group-hover:text-white transition-colors duration-300">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: 'fas fa-user-tie',
    title: 'Master Chefs',
    description:
      'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.',
  },
  {
    icon: 'fas fa-utensils',
    title: 'Quality Food',
    description:
      'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.',
  },
  {
    icon: 'fas fa-cart-plus',
    title: 'Online Order',
    description:
      'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.',
  },
  {
    icon: 'fas fa-headset',
    title: '24/7 Service',
    description:
      'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.',
  },
]
</script>
