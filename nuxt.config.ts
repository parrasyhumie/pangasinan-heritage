export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'theme-color', content: '#174a44' },
        { name: 'description', content: 'Pangasinan Heritage Digital Showcase — a fast, accessible guide to cultural and natural heritage sites.' }
      ]
    }
  },
  compatibilityDate: '2025-04-01',
  routeRules: {
    '/': { prerender: true },
    '/discoveries': { prerender: true },
    '/about': { prerender: true },
    '/components': { prerender: true }
  }
})
