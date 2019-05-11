var webpack = require('webpack')
var merge = require('webpack-merge')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var base = require('./webpack.config.base')
var path = require('path')

var outputFile = 'functional-button'
var globalName = 'FunctionalButton'

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outputFile + '.browser.js',
    library: globalName,
    libraryTarget: 'umd',
  },
  externals: {
    // Put external libraries like lodash here
    // With their global name
    // Example: 'lodash': '_'
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
        },
        sourceMap: true,
      }),
    ],
  },
})
