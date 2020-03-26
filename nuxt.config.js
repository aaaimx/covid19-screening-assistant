const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'AAAIMX | COVID-19 Screening Assistant',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vuetify.js', '~/plugins/base.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /**
   * Axios configuration
   */
  // axios: {
  //   // proxyHeaders: false
  //   mode: 'cors',
  //   withCrdentials: true,
  //   credentials: 'same-origin',
  //   baseURL:
  //     process.env.NODE_ENV === 'development'
  //       ? 'http://127.0.0.1:5000'
  //       : 'https://covid19-assistant.herokuapp.com',
  //   headers: {
  //     delete: {},
  //     get: {},
  //     head: {},
  //     post: {
  //       'Content-Type': 'application/json'
  //     },
  //     put: {},
  //     patch: {}
  //   }
  // },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          // primary: colors.yellow.lighten3,
          primary: '#d9ad26',
          secondary: colors.shades.black,
          error: colors.orange.darken3
        }
      }
    }
  },
  router: {
    base: '/covid19-screening-assistant/'
    // base:
    //   process.env.NODE_ENV === 'development'
    //     ? ''
    //     : '/covid19-screening-assistant/'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
