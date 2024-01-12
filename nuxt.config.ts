export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  
  tailwindcss: {
    cssPath: '~/assets/css/input.css'
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASEURL,
    },
  },
})