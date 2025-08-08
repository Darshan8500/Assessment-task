<template>
  <section class="py-20 bg-[#f8f9fa]" id="menu" data-aos="fade-up">
    <div class="container mx-auto px-4">
      <!-- Animated section title -->
      <div class="flex items-center justify-center gap-3 mb-4" data-aos="fade-up" data-aos-delay="100">
        <span class="block h-[2px] w-10 bg-[#FEA116]"></span>
        <h5 class="text-[#FEA116] text-[20px] font-pacifico">Food Menu</h5>
        <span class="block h-[2px] w-10 bg-[#FEA116]"></span>
      </div>

      <h2 class="text-4xl font-bold text-center text-gray-800 mb-4 font-nunito" data-aos="fade-up" data-aos-delay="150">
        Most Popular Items
      </h2>

      <!-- Menu Tabs with fade -->
      <div data-aos="fade-up" data-aos-delay="200">
        <MenuTabs v-model="activeTab" />
      </div>

      <!-- Grid of items with fade-up on each -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div v-for="(item, index) in filteredItems" :key="index" data-aos="fade-up" :data-aos-delay="(index + 1) * 100">
          <MenuItem :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import MenuTabs from './MenuTabs.vue'
import MenuItem from './MenuItem.vue'

const activeTab = ref('Breakfast')

const menuData = {
  Breakfast: [
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-1.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-2.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-3.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-4.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-5.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-6.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-7.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-8.jpg' }
  ],
  Lunch: [
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-5.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-6.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-7.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-8.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-1.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-2.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-3.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-4.jpg' }
  ],
  Dinner: [
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-2.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-3.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-4.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-5.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-6.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-7.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-8.jpg' },
    { title: 'Chicken Burger', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-1.jpg' }
  ]
}

const filteredItems = computed(() => menuData[activeTab.value])
</script>

<style scoped>
.container {
  max-width: 1140px;
}
</style>
