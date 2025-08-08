<template>
  <footer class="bg-[#0F172B] text-white font-nunito py-16 px-4 lg:px-24">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10" data-aos="fade-up">

        <!-- Company -->
        <div>
          <div class="flex items-center mb-6">
            <h4 class="text-2xl font-[Pacifico] text-[#FEA116]">Company</h4>
            <div class="w-12 border-t-2 border-[#FEA116] ml-3"></div>
          </div>
          <ul class="space-y-4 text-white/90">
            <li>
              <NuxtLink to="/about" class="flex items-center transition-transform duration-300 hover:translate-x-1">
                <i class="fas fa-angle-right text-white mr-2"></i>About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="flex items-center transition-transform duration-300 hover:translate-x-1">
                <i class="fas fa-angle-right text-white mr-2"></i>Contact Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/booking" class="flex items-center transition-transform duration-300 hover:translate-x-1">
                <i class="fas fa-angle-right text-white mr-2"></i>Reservation
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#index" class="flex items-center transition-transform duration-300 hover:translate-x-1">
                <i class="fas fa-angle-right text-white mr-2"></i>Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#index" class="flex items-center transition-transform duration-300 hover:translate-x-1">
                <i class="fas fa-angle-right text-white mr-2"></i>Terms & Condition
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <div class="flex items-center mb-6">
            <h4 class="text-2xl font-[Pacifico] text-[#FEA116]">Contact</h4>
            <div class="w-12 border-t-2 border-[#FEA116] ml-3"></div>
          </div>
          <p class="mb-3"><i class="fas fa-map-marker-alt text-white mr-2"></i>123 Street, New York, USA</p>
          <p class="mb-3"><i class="fas fa-phone-alt text-white mr-2"></i>+012 345 67890</p>
          <p class="mb-6"><i class="fas fa-envelope text-white mr-2"></i>info@example.com</p>
          <div class="flex space-x-3">
            <a href="#"
              class="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-[#FEA116] transition"><i
                class="fab fa-twitter"></i></a>
            <a href="#"
              class="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-[#FEA116] transition"><i
                class="fab fa-facebook-f"></i></a>
            <a href="#"
              class="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-[#FEA116] transition"><i
                class="fab fa-youtube"></i></a>
            <a href="#"
              class="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-[#FEA116] transition"><i
                class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <!-- Opening -->
        <div>
          <div class="flex items-center mb-6">
            <h4 class="text-2xl font-[Pacifico] text-[#FEA116]">Opening</h4>
            <div class="w-12 border-t-2 border-[#FEA116] ml-3"></div>
          </div>
          <p class="mb-2">Monday - Saturday:</p>
          <p class="mb-4 text-white/90">09AM - 09PM</p>
          <p class="mb-2">Sunday:</p>
          <p class="text-white/90">10AM - 08PM</p>
        </div>

        <!-- Newsletter -->
        <div>
          <div class="flex items-center mb-6">
            <h4 class="text-2xl font-[Pacifico] text-[#FEA116]">Newsletter</h4>
            <div class="w-12 border-t-2 border-[#FEA116] ml-3"></div>
          </div>
          <p class="mb-6 text-white/90">
            Dolor amet sit justo amet elitr clita ipsum elitr est.
          </p>
          <div class="flex">
            <input type="text" class="w-full px-4 py-2 rounded-l bg-white text-black" placeholder="Your email" />
            <button class="bg-[#FEA116] hover:bg-[#ffc107] text-white px-6 rounded-r transition">SIGNUP</button>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div
        class="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-white/70 text-sm">
        <div>
          <p>© Your Site Name, All Right Reserved. Designed By <a href="#" class="underline text-white">HTML Codex</a>
          </p>
          <p>Distributed By <a href="#" class="underline text-white">ThemeWagon</a></p>
        </div>
        <div class="flex gap-6">
          <NuxtLink to="#" class="hover:text-white">Home</NuxtLink>
          <NuxtLink to="#" class="hover:text-white">Cookies</NuxtLink>
          <NuxtLink to="#" class="hover:text-white">Help</NuxtLink>
          <NuxtLink to="#" class="hover:text-white">FAQs</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
