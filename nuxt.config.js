module.exports = {
  /* Site css */
  css: [
    'fortune.css',
    { src: '~/assets/app.css' }
  ],

  plugins: [
    { src: '~/plugins/vue-scrollactive'},
    { src: '~/plugins/vue-lazy-images'}
  ],

  /* Headers of the page */
  head: {
    title: 'vikram.be',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A portfolio site' }
    ],
    script: [
      // { src: 'https://unpkg.com/animate-css-grid@latest' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Domine|Poppins:300' }
    ]
  },
  /* Customize the progress bar color */
  loading: { color: 'var(--state-primary)' },

  /* Build configuration*/
  build: {
    postcss: {
      plugins: {
      'postcss-cssnext': {
        features: {
          rem: false,
          customProperties: false
          }
        }
      }
    },

    /* Run ESLint on save */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
