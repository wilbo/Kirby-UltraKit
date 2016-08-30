var webpack = require('webpack');
var environments = require('gulp-environments');

var webpackSettings = {
  plugins: environments.production() ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', ]
  },
  debug: environments.development(),
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'jshint-loader'
    }],
    loaders: [{
      test: /\.js?/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel?presets[]=es2015'
    }]
  },
  output: {
    filename: 'main.js'
  }
};

module.exports = webpackSettings;
