export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    baseURL: '/pangasinan-heritage/'
  },

  nitro: {
    preset: 'github-pages',

    prerender: {
      routes: [
        '/',
        '/about',
        '/discoveries',
        '/discoveries/sky-plaza'
      ]
    }
  },

  compatibilityDate: '2024-04-03'
})