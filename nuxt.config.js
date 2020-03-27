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
        content:
          'Cuestionario rápido de COVID-19. Los diagnósticos son basados en información provista por el Departamento de Salud y Medio Ambiente de Kansas'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://www.aaaimx.org/covid-19-assistant/covid19-assistant.png'
      },
      {
        hid: 'og:image:type',
        property: 'og:image:type',
        content: 'image/png'
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '1634'
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '891'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'AAAIMX | COVID-19 Screening Assistant'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Cuestionario rápido de COVID-19. Los diagnósticos son basados en información provista por el Departamento de Salud y Medio Ambiente de Kansas'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'shortcut icon',
        href: '/static/tracker/favicon.ico',
        type: 'image/x-icon'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans'
      },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css'
      // }
    ]
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
  modules: ['nuxt-buefy'],
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
      dark: false,
      themes: {
        light: {
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
