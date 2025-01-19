<template>
    <header class="bg-white border-b border-gray-300">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center">
            <!-- <Car class="h-8 w-8 text-blue-500 mr-2" /> -->
            <!-- <div class="h-10 w-10 mr-2">
              <img src="/images/image1.png" alt="Logo">
            </div> -->
            <h1 class="text-lg md:text-xl font-bold text-gray-900">Deutsch Mit Anita</h1>
          </div>
          <nav>
            <ul class="flex space-x-3">
              <li>
                <NuxtLink to="/" class="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </NuxtLink>
              </li>
              <!-- <li>
                <NuxtLink to="/about" class="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </NuxtLink>
              </li> -->
              <li>
                <NuxtLink to="/uber-mich" class="text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">
                  Über mich
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
//   import { Car } from 'lucide-vue-next'
  </script>