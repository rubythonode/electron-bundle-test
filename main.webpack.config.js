const path = require('path');
const { baseOption } = require('./base.webpack.config');

module.exports = {
  ...baseOption,
  target: 'electron-main',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  node: {
    __dirname: false,
    __filename: false
  },
  entry: [
    './template/main.ts'
  ]
};