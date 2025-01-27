// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  colorMode: {
    preference: 'light', // Gjithmonë prefero "light"
    fallback: 'light',   // Nëse preferenca mungon, përdor "light"
    classSuffix: '',     // Pa shtesa në klasat CSS
    storage: undefined,      // Mos ruaj preferencat
    // detectSystemColorScheme: false,
    storageKey: 'nuxt-color-mode',
  },
})