export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Vivian Plasencia",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://<domain>/",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Vivian Plasencia",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Vivian Plasencia website",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://<domain>/socialMedia.jpg",
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Vivian Plasencia",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://<domain>/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Vivian Plasencia",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Vivian Plasencia website",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://<domain>/socialMedia.jpg",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "https://<domain>/socialMedia.jpg",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "Vivian Plasencia",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8", "@nuxtjs/google-fonts"],

  googleFonts: {
    download: true,
    base64: true,
    overwriting: false,
    families: {
      Montserrat: [400, 500, 600, 700, 800, 900],
    },
    useStylesheet: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "vue-plausible",
    "@nuxtjs/pwa",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],

  plausible: {
    domain: "<domain>",
  },

  sitemap: {
    hostname: "https://<domain>",
    gzip: true,
    trailingSlash: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
      name: "Vivian Plasencia",
      short_name: "Vivian Plasencia",
      description: "Vivian Plasencia website",
      theme_color: "#6366f1",
    },
    icon: {
      fileName: "appIcon.jpg",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
