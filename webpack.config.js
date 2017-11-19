/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

const root = path.join(process.cwd(), 'src');

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    modules: [root, 'node_modules']
  }
};
