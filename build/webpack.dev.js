const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');
const friendlyErrorPlugin = require("friendly-errors-webpack-plugin");
const path = require('path');
const errorOverlayWebpackPlugin = require("error-overlay-webpack-plugin");
const utils = require('./utils.js');
const chalk = require("chalk");

process.env.NODE_ENV = 'development';
let resolve = (url) => path.resolve(__dirname, url);

module.exports = webpackMerge(webpackConfig, {
  mode: 'development',
  cache: true,
  output: {
    path: resolve('../server'),
    filename: '[name][hash:6].js',
    chunkFilename: '[name].async.[hash:6].js'
  },
  devServer: {
    host: utils.getIp(),
    port: 9909,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    contentBase: resolve('../server'),
    quiet: true,
    open: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new errorOverlayWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"development"' }
    }),
    new friendlyErrorPlugin({
      compilationSuccessInfo: {
        messages: process.env.NODE_ENV === 'development' ?  [`You application is running here http://${utils.getIp()}:9909`] : 'build success'
      },
      onErrors: function (severity, errors) {
        let [ error ] = (errors || []);
        if (severity === 'error') {
          console.log(chalk.red(`${error.name}:at${error.file}`));;
        } else {
          console.log(chalk.yellow(`${error.name}:at${error.file}`));;
        }
      },
      clearConsole: true,
      additionalFormatters: [],
      additionalTransformers: []
    }),
  ]
})