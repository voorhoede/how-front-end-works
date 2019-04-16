const fs = require('fs')
const baseUrl = process.env.URL

module.exports = {
  srcDir: 'src/',

  env: {
    baseUrl,
  },

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#fcbe40' },

  modules: [
    ['@nuxtjs/sitemap', { // https://github.com/nuxt-community/sitemap-module
      path: '/sitemap.xml',
      hostname: baseUrl,
      generate: true,
      exclude: ['/styles'],
      routes: fs.readdirSync('./src/static/data/lemmas').map(file => file.replace('.json', ''))
    }],
  ],

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      let position = false

      // if no children detected
      if (to.matched.length < 2) {
        // scroll to the top of the page
        position = { x: 0, y: 0 }
      } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
        // if one of the children has scrollToTop option set to true
        position = { x: 0, y: 0 }
      }

      // savedPosition is only available for popstate navigations (back button)
      if (savedPosition) {
        position = savedPosition
      }

      return new Promise(resolve => {
        // wait for the out transition to complete (if necessary)
        window.$nuxt.$once('triggerScroll', () => {
          // coords will be used if no selector is provided,
          // or if the selector didn't match any element.
          if (to.hash && document.querySelector(to.hash)) {
            // scroll to anchor by returning the selector
            position = { selector: to.hash }
            document.querySelector(to.hash).focus()
          }
          resolve(position)
        })
      })
    }
  },

  css: [
    'normalize.css'
  ],

  build: {
    postcss: {
      'postcss-import': {},
      'postcss-custom-properties': {
        preserve: false
      },
      'autoprefixer': {}
    },
    vendor: [
      'axios',
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      // remove SVG from URL loader, so vue-svg-loader can be used for SVGs instead
      // based on https://github.com/nuxt/nuxt.js/issues/1332#issuecomment-321694185
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i') {
          rule.test = /\\.(png|jpe?g|gif|webp)$/i
        }
      })

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [
              { removeViewBox: false }
            ]
          }
        },
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
