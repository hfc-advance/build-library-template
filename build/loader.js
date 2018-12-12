const miniCssExtractPlugin = require("mini-css-extract-plugin");

let defaultCssLoader = [
  {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production'
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true
    }
  }
]

let createCssLoader = (type = 'css', options = {}) => {
  let { extract, baseStyle } = options;
  let currentLoaders = [];
  if (type === 'stylus' || type === 'styl') {
    currentLoaders = [
      'stylus-loader',
      {
        loader: 'style-resources-loader',
        options: {
          patterns: baseStyle ? [baseStyle] : []
        }
      }
    ]
  } else if (type === 'sass' || type === 'scss') {
    currentLoaders = [
      'scss-loader'
    ]
  }
  let result = extract ? [ miniCssExtractPlugin.loader, ...defaultCssLoader, ...currentLoaders ] : [ 'cache-loader', 'style-loader', ...defaultCssLoader, ...currentLoaders ]
  return result
};

module.exports = {
  createCssLoader
}