/* Build config:
  ========================================================================== */

// Source: https://github.com/survivejs/webpack-merge
const { merge } = require('webpack-merge')
// Base config
const baseWebpackConfig = require('./webpack.baseBuild.conf')

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: []
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
