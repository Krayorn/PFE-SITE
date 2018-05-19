const path = require('path')
const pkg = require('./package')

module.exports = {
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3001'
  },
  entry: [
    'src/polyfills.js',
    'src/index.js'
  ],
  html: {
    title: pkg.productName,
    description: pkg.description,
    template: path.join(__dirname, 'index.ejs')
  },
  postcss: {
    plugins: [
      // Your postcss plugins
    ]
  },
  presets: [
    require('poi-preset-bundle-report')()
  ]
}
