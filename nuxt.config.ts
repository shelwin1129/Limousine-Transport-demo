// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET_KEY,
  },
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components too
      pathPrefix: false,
    },
  ],
  modules: ["@sidebase/nuxt-auth"],

  auth: {
    globalAppMiddleware: true,  //enables the authentication middleware globally across the application.
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs',
    },    
  },
})