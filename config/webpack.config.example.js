const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './examples/src/main.js',
  output: {
    path: path.join(__dirname, 'examples'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract('css-loader'),
            sass: ExtractTextPlugin.extract('css-loader!sass-loader'),
            scss: ExtractTextPlugin.extract('css-loader!sass-loader'),
          },
        },
      },
      {
        test: /\.scss|css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.svg(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    // new CopyWebpackPlugin([{
    //   from: path.resolve(__dirname, '../static'),
    //   to: 'static',
    //   ignore: ['.*']
    // }]),
    new webpack.DefinePlugin({
      'VERSION': JSON.stringify(require('../package.json').version),
    }),
    new HtmlWebpackPlugin({
      template: './examples/index.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('functional-button.css')
  ]
}
