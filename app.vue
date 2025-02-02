<template>
  <NuxtLayout>
    <NuxtPage />
    <UNotifications />
  </NuxtLayout>
</template>

<script setup>
if (import.meta.client) {
  localStorage.removeItem('nuxt-color-mode');
  document.documentElement.classList.remove('dark-mode');
  document.documentElement.classList.add('light-mode');
}
</script>