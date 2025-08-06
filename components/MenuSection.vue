<!-- components/MenuSection.vue -->
<template>
  <section class="py-20 bg-[#f8f9fa]" id="menu">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-4">Most Popular Items</h2>
      <MenuTabs v-model="activeTab" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <MenuItem
          v-for="(item, index) in filteredItems"
          :key="index"
          :item="item"
        />
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
    { title: 'Grilled Toast', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-1.jpg' },
    { title: 'Veggie Pizza', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-2.jpg' },
    { title: 'Pasta Salad', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-3.jpg' },
    { title: 'Pepperoni Pizza', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-4.jpg' },
    { title: 'Bacon Sandwich', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-5.jpg' },
    { title: 'Noodles Plate', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-6.jpg' },
    { title: 'Salad Platter', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-7.jpg' },
    { title: 'Steak Slices', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-8.jpg' }
  ],
  Lunch: [
    { title: 'Burger Deluxe', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-5.jpg' },
    { title: 'Fries Box', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-6.jpg' },
    { title: 'Mushroom Pasta', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-7.jpg' },
    { title: 'Beef Chunks', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-8.jpg' },
    { title: 'Chicken Wrap', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-1.jpg' },
    { title: 'Club Sandwich', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-2.jpg' },
    { title: 'Veg Noodles', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-3.jpg' },
    { title: 'Fish Curry', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-4.jpg' }
  ],
  Dinner: [
    { title: 'Dinner Platter', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-2.jpg' },
    { title: 'Classic Pizza', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-3.jpg' },
    { title: 'Kebab Plate', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-4.jpg' },
    { title: 'Lamb Steak', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-5.jpg' },
    { title: 'Chicken Grill', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-6.jpg' },
    { title: 'Veg Biryani', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-7.jpg' },
    { title: 'Rice Bowl', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-8.jpg' },
    { title: 'Tandoori Plate', description: 'Ipsum ipsum clita erat amet dolor justo diam', price: 115, image: '/images/menu/menu-1.jpg' }
  ]
}

const filteredItems = computed(() => menuData[activeTab.value])
</script>

<style scoped>
.container {
  max-width: 1140px;
}
</style>