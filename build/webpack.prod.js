const webpackMerge = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');
const webpack = require('webpack');
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const resolve = url => path.resolve(__dirname, url);

process.env.NODE_ENV = 'production';

module.exports = webpackMerge(webpackConfig, {
  mode: 'production',
  output: {
    path: resolve('../server'),
    filename: '[name][chunkhash:6].js',
    chunkFilename: '[name].async.[chunkhash:6].js'
  },
  optimization: {
    'minimizer': [
      new uglifyjsWebpackPlugin({
        parallel: true,
        sourceMap: false
      }),
     /*  new OptimizeCSSAssetsPlugin({}) */
    ],
    'noEmitOnErrors': true,
    'runtimeChunk': {
      name: 'runtime'
    },
    'splitChunks': {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial'
        },
        asynccommons: {
          name: 'asynccommons',
          chunks: 'async',
          minChunks: 2,
          minSize: 1024 * 10
        },
        styles: {
          name: 'styles',
          test: /\.(css|styl|stylus|sass|scss|less)$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      /* chunkFilename: "css/[name].[chunkhash:8].async.css", */
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"production"' }
    })
  ]
})