const path = require('path');
const { baseOption } = require('./base.webpack.config');

module.exports = {
  ...baseOption,
  target: 'electron-renderer',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'renderer.js',
  },
  entry: [
    './template/renderer.ts'
  ]
};