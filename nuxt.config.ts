// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: {
    enabled: false,
  },
  app: {
    head: {
      title: 'Netgineers',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ]
    },
  },
  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    // Options
  },
  image: {
    // Options
  },
});
