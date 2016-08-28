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
    loaders: [{
      test: /\.jsx?/,
      exclude: /(node_modules|bower_components)/,
      include: ['./source/js/'],
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015', 'webpack-module-hot-accept'],
    }]
  },
  output: {
    filename: 'main.js'
  }
};

module.exports = webpackSettings;
