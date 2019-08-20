import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'spa',
  devModules: [
      // Simple usage
      '@nuxtjs/vuetify',

      // With options
      ['@nuxtjs/vuetify', { /* module options */ }]
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon\'url-loader', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
        // {
        //   rel: 'stylesheet',
        //     href:
        //         'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css'
        // },
        // {
        //     type: 'text/javascript',
        //     href:
        //         'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'
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
  css: [
      '~/assets/style/app.sass',
      '~/assets/style/common.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
