// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: false,

  // ✅ Load Nuxt Tailwind module
  modules: ['@nuxtjs/tailwindcss'],

  // ✅ Global CSS files
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css', // Optional: Only if using <i class="fa ...">
    '~/assets/css/tailwind.css',                     // Your custom Tailwind styles
    'swiper/css',
    'swiper/css/pagination',
    'swiper/css/navigation'
  ],

  app: {
    head: {
      title: 'Restoran',
      meta: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ]
    }
  }
})
