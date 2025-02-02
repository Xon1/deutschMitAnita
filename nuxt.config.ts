// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  // colorMode: {
  //   preference: 'light', // Gjithmonë prefero "light"
  //   fallback: 'light',   // Nëse preferenca mungon, përdor "light"
  //   classSuffix: '',     // Pa shtesa në klasat CSS
  //   storage: undefined,      // Mos ruaj preferencat
  //   // detectSystemColorScheme: false,
  //   storageKey: 'nuxt-color-mode',
  // },

  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    // storage: false, // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },
})