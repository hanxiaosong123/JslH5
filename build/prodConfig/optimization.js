const UglifyJsPlugin = require('uglifyjs-webpack-plugin')//压缩es6语法
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const optimizationConfig = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
}

module.exports = optimizationConfig
