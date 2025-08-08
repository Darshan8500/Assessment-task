import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      once: true,       // Only animate once
      duration: 500     // Animation duration in ms
    })
  }
})
