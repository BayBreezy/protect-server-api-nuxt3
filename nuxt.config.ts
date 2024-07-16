// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@pinia/nuxt",
    "nuxt-auth-utils",
  ],

  tailwindcss: { exposeConfig: true },
  colorMode: { classSuffix: "" },
  typescript: { shim: false },

  imports: {
    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
      },
      {
        from: "tailwind-variants",
        name: "VariantProps",
        type: true,
      },
    ],
  },

  app: {
    head: {
      title: "Protect Server Endpoints",
      titleTemplate: "%s - Protect Server Endpoints",
    },
  },

  compatibilityDate: "2024-07-15",
});