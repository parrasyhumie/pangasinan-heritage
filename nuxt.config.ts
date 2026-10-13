
export default defineNuxtConfig({
  app: {
    baseURL: '/pangasinan-heritage/'
  },

  css: ['~/assets/css/main.css'],

  experimental: {
    appManifest: false
  },

  devtools: {
    enabled: true
  },

  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: [
        '/',
        '/about',
        '/discoveries',
        '/discoveries/sky-plaza',
        '/discoveries/maranum-falls',
        '/discoveries/malico-viewpoint-inn',
        '/discoveries/heritage-trails',
        '/discoveries/river-stories',
        '/discoveries/highland-cuisine'
      ]
    }
  },

  compatibilityDate: '2024-04-03'
})
