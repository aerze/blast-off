var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/src/main.jsx`,
  output: { path: `${__dirname}/dist/scripts`, filename: 'bundle.js' },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  }
};
