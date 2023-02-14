// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: {
    enabled: false,
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no',
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  imports: {
    dirs: ['./stores'],
  },
  colorMode: {
    preference: 'dark',
    classSuffix: '',
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  image: {
    // Options
  },
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },
  tailwindcss: {
    config: {
      content: [],
      darkMode: 'class',
    },
  },
});
