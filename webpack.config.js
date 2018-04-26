const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/home.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '.'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kidon Son',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/home.html',
      filename: 'home.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: './src/about_me.html',
      filename: 'about_me.html',
      chunks: ['about_me']
    }),
    new HtmlWebpackPlugin({
      template: './src/resume.html',
      filename: 'resume.html',
      chunks: ['resume']
    }),
    new webpack.ProvidePlugin({
        'window.jQuery'    : 'jquery',
        'window.$'         : 'jquery',
        'jQuery'           : 'jquery',
        '$'                : 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  externals: {
    jquery: 'jQuery',
  }
};

