/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FEA116',
        primaryHover: '#f28c04',
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
      },
      fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      pacifico: ['Pacifico', 'cursive'],
    },
    
    },
  },
  plugins: [],
}
