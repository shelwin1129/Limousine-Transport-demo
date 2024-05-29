// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET_KEY,
  },

  components: [
    {
      path: '~/components', // will get any nested components in components too
      pathPrefix: false,
    },
  ],
  
  modules: [
    'nuxt-icon',
    '@sidebase/nuxt-auth',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    "@nuxtjs/google-fonts"
  ],

  auth: {
    globalAppMiddleware: true,  //enables the authentication middleware globally across the application.
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs',
    },    
  },
})