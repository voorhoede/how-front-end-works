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
      { rel: 'apple-touch-startup-image', href: '/pwa/ios-launch-1125x2436.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)'}, // iPhone X
      { rel: 'apple-touch-startup-image', href: '/pwa/ios-launch-750x1334.png', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)'}, // iPhone 8, 7, 6s, 6
      { rel: 'apple-touch-startup-image', href: '/pwa/ios-launch-1242x2208.png', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)'}, // iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus
      { rel: 'apple-touch-startup-image', href: '/pwa/ios-launch-640x1136.png', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'}, // iPhone 5
      { rel: 'apple-touch-startup-image', href: '/pwa/ios-launch-1536x2048.png', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)'}, // iPad Mini, Air
      { rel: 'apple-touch-startup-image', href: '/pwa/ios-launch-1668x2224.png', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)'}, // iPad Pro 10.5"
      { rel: 'apple-touch-startup-image', href: '/pwa/ios-launch-2048x2732.png', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)'}, // iPad Pro 12.9"
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#fcbe40' },

  modules: [
    ['@nuxtjs/pwa', {
      workbox: {
        runtimeCaching: [
          {
            urlPattern: 'https://www.datocms-assets.com/.*',
            handler: 'cacheFirst',
            method: 'GET'
          }
        ]
      },
      meta: {
        mobileAppIOS: true,
      },
      manifest: {
        name: 'How Front-End Works',
        short_name: 'How Front-End Works',
        start_url: '/',
        display: 'standalone',
        theme_color: '#13a095',
        background_color: '#c5f3f0',
      },
      icon: {
        iconSrc: 'src/static/pwa/icon.png',
      },
    }],
    ['@nuxtjs/sitemap', { // https://github.com/nuxt-community/sitemap-module
      path: '/sitemap.xml',
      hostname: baseUrl,
      generate: true,
      exclude: ['/styles'],
      routes: fs.readdirSync('./src/static/data/topics').map(file => file.replace('.json', ''))
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-139455504-1',
      set: [
        /**
         * Anonymize tracking
         * @see https://www.themarketingtechnologist.co/setting-up-a-cookie-law-compliant-google-analytics-tracker/
         */
        { field: 'displayFeaturesTask', value: null },
        { field: 'anonymizeIp', value: true },
      ],
    }]
  ],

  plugins: [
    { src: '~/plugins/install-notification.js', ssr: false }
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
    routes: fs.readdirSync('./src/static/data/topics').map(file => file.replace('.json', ''))
  }
}
