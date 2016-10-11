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
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },

  externals: {
    forerunnerdb: 'ForerunnerDB'
  },

  plugins: [
      // new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: true}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true)
  ]
};
