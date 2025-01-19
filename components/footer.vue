<template>
  <footer class="bg-gray-100 py-8">
    <div class="mx-auto max-w-6xl px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0 text-center md:text-start">
          <h3 class="text-xl font-semibold text-gray-800">German Language Teacher</h3>
          <p class="text-gray-600 mt-2">Helping you master the German language</p>
        </div>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-800 transition-colors duration-300">
            <Instagram class="w-9 h-9" />
            <!-- <Facebook class="w-6 h-6" /> -->
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800 transition-colors duration-300">    
            <Youtube class="w-10 h-10" />
          </a>
        </div>
      </div>
      <div class="mt-8 text-center text-gray-600">
        <p>&copy; {{ currentYear }} German Language Teacher. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-vue-next'
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>