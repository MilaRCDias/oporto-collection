import colors from "vuetify/es5/util/colors";


export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "Oporto Collection",
    title: "Oporto Collection",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/jpeg", href: "/favicon.jpg" },
      { rel: "apple-touch-icon", type: "image/png", href: "/apple-touch.icon.png" }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/components.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/firebase.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-i18n", '@nuxtjs/cloudinary', '@nuxtjs/gtm', '@nuxtjs/recaptcha'],

  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    //language: String,   // Recaptcha language (v2)
    siteKey: "6LcR2J0bAAAAAKmBG8KhRlx4A1PO7q0Y5tIqHl8H", // Site key for requests
    version: 2, // Version
    size: "normal"
  },

  gtm: {
    id: 'GTM-TWVZLND',
    // Set to false to disable module in development mode
    enabled: true,

    layer: "dataLayer",
    variables: {},

    pageTracking: true,
    pageViewEventName: "nuxtRoute",

    autoInit: true,
    respectDoNotTrack: true,

    scriptId: "gtm-script",
    scriptDefer: false,
    scriptURL: "https://www.googletagmanager.com/gtm.js",

    noscript: true,
    noscriptId: "gtm-noscript",
    noscriptURL: "https://www.googletagmanager.com/ns.html"
  },


  cloudinary: {
    cloudName: process.env.CLOUDNAME,
  },

  i18n: {
    locales: [
      {
        name: "EN",
        code: "en",
        iso: "en-US",
        file: "en.js"
      },
      {
        name: "PT",
        code: "pt",
        iso: "pt-PT",
        file: "pt.js"
      }
    ],
    strategy: "prefix_except_default",
    defaultLocale: "en",
    lazy: true,
    langDir: "lang/",
    vueI18n: {
      fallbackLocale: "en",
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#083C6A",
          accent: "#216cdf",
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
