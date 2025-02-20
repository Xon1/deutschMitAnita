<template>
  <div>
    <SpeedInsights />
    <Analytics/>
    <NuxtLayout>
      <NuxtPage />
      <UNotifications />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { Analytics } from '@vercel/analytics/nuxt'

if (import.meta.client) {
  localStorage.removeItem('nuxt-color-mode');
  document.documentElement.classList.remove('dark-mode');
  document.documentElement.classList.add('light-mode');
}
</script>