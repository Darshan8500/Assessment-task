<template>
  <footer class="bg-[#0F172B] text-white pt-16 pb-10 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- Company -->
      <div>
        <h3 class="text-xl text-orange-500 font-bold mb-4 flex items-center gap-2">
          Company <span class="block h-0.5 bg-orange-500 w-6 ml-2"></span>
        </h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><i class="fas fa-angle-right mr-2"></i>About Us</li>
          <li><i class="fas fa-angle-right mr-2"></i>Contact Us</li>
          <li><i class="fas fa-angle-right mr-2"></i>Reservation</li>
          <li><i class="fas fa-angle-right mr-2"></i>Privacy Policy</li>
          <li><i class="fas fa-angle-right mr-2"></i>Terms & Condition</li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-xl text-orange-500 font-bold mb-4 flex items-center gap-2">
          Contact <span class="block h-0.5 bg-orange-500 w-6 ml-2"></span>
        </h3>
        <ul class="space-y-3 text-sm text-gray-300">
          <li><i class="fas fa-map-marker-alt mr-2"></i>123 Street, New York, USA</li>
          <li><i class="fas fa-phone-alt mr-2"></i>+012 345 67890</li>
          <li><i class="fas fa-envelope mr-2"></i>info@example.com</li>
        </ul>
        <div class="flex gap-2 mt-4">
          <a href="#" class="w-9 h-9 rounded-full border border-gray-400 text-center leading-9 hover:bg-orange-500 hover:border-orange-500">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="w-9 h-9 rounded-full border border-gray-400 text-center leading-9 hover:bg-orange-500 hover:border-orange-500">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="w-9 h-9 rounded-full border border-gray-400 text-center leading-9 hover:bg-orange-500 hover:border-orange-500">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="#" class="w-9 h-9 rounded-full border border-gray-400 text-center leading-9 hover:bg-orange-500 hover:border-orange-500">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <!-- Opening Hours -->
      <div>
        <h3 class="text-xl text-orange-500 font-bold mb-4 flex items-center gap-2">
          Opening <span class="block h-0.5 bg-orange-500 w-6 ml-2"></span>
        </h3>
        <ul class="text-sm text-gray-300 space-y-2">
          <li>
            <strong>Monday - Saturday:</strong>
            <br />
            09AM - 09PM
          </li>
          <li>
            <strong>Sunday:</strong>
            <br />
            10AM - 08PM
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="text-xl text-orange-500 font-bold mb-4 flex items-center gap-2">
          Newsletter <span class="block h-0.5 bg-orange-500 w-6 ml-2"></span>
        </h3>
        <p class="text-sm text-gray-300 mb-4">
          Dolor amet sit justo amet elitr clita ipsum elitr est.
        </p>
        <div class="flex">
          <input
            type="email"
            placeholder="Your email"
            class="px-3 py-2 text-black rounded-l focus:outline-none"
          />
          <button class="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
            SIGNUP
          </button>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="border-t border-gray-600 mt-12 pt-6 text-sm text-gray-400 text-center">
      <p>
        © Your Site Name, All Right Reserved. Designed By
        <a href="https://htmlcodex.com" target="_blank" class="text-white underline">HTML Codex</a><br />
        Distributed By <a href="https://themewagon.com" target="_blank" class="text-white underline">ThemeWagon</a>
      </p>
      <div class="mt-4 flex justify-center gap-6">
        <a href="#">Home</a>
        <a href="#">Cookies</a>
        <a href="#">Help</a>
        <a href="#">FAQs</a>
      </div>
    </div>
  </footer>
</template>
