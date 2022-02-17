export default {

  // googleAnalytics: {
  //   id: process.env.GOOGLE_ANALYTICS_ID,
  // },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ver.3 Blog',
    htmlAttrs: {
      lang: 'ja',
    },
    titleTemplate: '%s | ' + '趣味に全力を尽くす男のブログ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'descripion', name: 'description', content: 'サイトの説明' || 'スマブラメモ・ゲームネタについて作曲・編曲・VOCALOID・良いと思った曲などについてプログラミングの自学自習のネタについて雑多に書いていきます。' },
      { hid: 'keywords', name: 'keywords', content: 'スマブラSP,DTM,音楽,プログラミング,開発,SSBU,music,programing' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'サイト名' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://smashbros-info.com/' },
      { hid: 'og:title', property: 'og:title', content: '趣味に全力を尽くす男のブログ' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'ばーさんちゃんねる' },
      { hid: 'og:description', property: 'og:description', content: 'スマブラメモ・ゲームネタについて作曲・編曲・VOCALOID・良いと思った曲などについてプログラミングの自学自習のネタについて雑多に書いていきます。' },
      { hid: 'og:image', property: 'og:image', content: '/assets/dtm_musician.png' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@ver3_ocharake' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // 'nuxt-vite',
    'nuxt-microcms-module',
  ],
  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  fontawesome: {
    component: 'fa',
  },
  'google-gtag': {
    id: process.env.GOOGLE_ANALYTICS_ID,
    debug: true, // Enable to track in dev mode.
  },
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // 'nuxt-fontawesome',
    // 'bootstrap-vue/nuxt',
    // '@nuxtjs/google-analytics',
    '@nuxtjs/google-gtag',
    ['@nuxtjs/google-adsense', 
    {
      id: process.env.GOOGLE_ADSENSE_ID,
      pageLevelAds: true,
      analyticsUacct: process.env.GOOGLE_ANALYTICS_ID,
      analyticsDomainName: 'smashbros-info.com'
    },
  ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extend(config, { isDev, isClient }) {
      config.resolve.alias["vue"] = "vue/dist/vue.common"
    },
  },
}
