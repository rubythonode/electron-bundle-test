const webpack = require('webpack');

const baseOption = {
  resolve: {
    extensions: ['.ts', '.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}

module.exports = {
  baseOption
};