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
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  image: {
    // Options
  },
  tailwindcss: {
    // Options
  },
});
