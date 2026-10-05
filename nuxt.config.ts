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

