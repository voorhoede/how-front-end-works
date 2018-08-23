const fs = require('fs')
const baseUrl = ''
const isProduction = (process.env.NODE_ENV === 'production')

module.exports = {
  srcDir: 'src/',

  env: {
    baseUrl,
  },

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:author', content: '@devoorhoede' },
      { name: 'twitter:site', content: '@devoorhoede' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#fcbe40' },

  router: {
    middleware: 'meta-canonical'
  },

  modules: [
    ['@nuxtjs/sitemap', { // https://github.com/nuxt-community/sitemap-module
      path: '/sitemap.xml',
      hostname: baseUrl,
      generate: true,
      exclude: ['/styles'],
    }],
  ],

  css: [
    'normalize.css'
  ],

  build: {
    postcss: [
      require('postcss-import')(),
      require('postcss-custom-properties')()
    ],
    vendor: [
      'axios',
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      // remove SVG from URL loader, so vue-svg-loader can be used for SVGs instead
      // based on https://github.com/nuxt/nuxt.js/issues/1332#issuecomment-321694185
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        exclude: /(node_modules)/
      })

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  generate: {
    dir: 'dist/app/',
    routes: fs.readdirSync('./src/static/data/lemmas').map(file => file.replace('.json', ''))
  }
}
