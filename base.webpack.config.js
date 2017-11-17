const webpack = require('webpack');

const baseOption = {
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = {
  baseOption
};