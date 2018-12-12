
const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackbar = require("webpackbar");
const eslintFrienylyFormate = require("eslint-friendly-formatter");
const loader = require("./loader.js");
const vueMarkdownConfig = require('./config.js').vueMarkdown
let resolve = (url) => path.resolve(__dirname, url)
let cssLoader = ['css', 'styl', 'scss'].map(item => {
  let options = process.env.NODE_ENV === 'development' ? {} : { extract: true }
  return {
    test: new RegExp(`\.${item}$`),
    use: loader.createCssLoader(item, options)
  };
});
module.exports = {
  context: resolve('./'),
  entry: {
    index: resolve('../docs/index.js')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|js)$/,
        loader: [
          'cache-loader',
          {
            loader: 'eslint-loader',
            options: {
              formatter: eslintFrienylyFormate
            }
          }
        ],
        include: [resolve('../src/'), resolve('../docs/')]
      },
      {
        test: /\.vue$/,
        loader: [
          'cache-loader',
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                css: loader.createCssLoader('css'),
                stylus: loader.createCssLoader('stylus'),
                styl: loader.createCssLoader('styl')
              },
              cssSourceMap: true,
              transformToRequire: {
                video: ['src', 'poster'],
                source: 'src',
                img: 'src',
                image: 'xlink:href'
              }
            }
          },
        ]
      },
      {
        test: /\.md$/,
        loader: [
          {
            loader: 'vue-markdown-loader',
            options: vueMarkdownConfig
          }
        ]
      },
      {
        test: /\.js$/,
        loader: [
          'cache-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ],
       include: [resolve('../src'), resolve('../docs')]
      },
      {
        test: /\.(png|gif|jpg|jpeg|webp|svg)$/,
        loader: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 / 2,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      ...cssLoader
    ]
  },
  plugins: [
    new htmlPlugin({
      chunksSortMode: 'none',
      template: resolve('../docs/index.html'),
      filename: 'index.html',
      inject: true
    }),
    new webpackbar(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      vue: {
        preserveWhitespace: false
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve("../src"),
      'vue': 'vue/dist/vue.esm.js'
    }
  }
}