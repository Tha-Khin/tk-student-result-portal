// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  runtimeConfig: {
    gasUrl: import.meta.env.GAS_URL,
  },
  app: {
    head: {
      link: [
        {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"},
        {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900"},
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ]
    }
  },
})