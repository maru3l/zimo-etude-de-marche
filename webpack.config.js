const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

module.exports = {
  entry: {
    app: './src/main.js',
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          // Inline files smaller than 10 kB (10240 bytes)
          limit: 10 * 1024,
          // Remove the quotes from the url
          // (they’re unnecessary in most cases)
          // noquotes: true,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Zimo App - Étude de marché',
      template: './src/index.html',
    }),
    new HtmlWebpackInlineSVGPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context &&
        module.context.includes('node_modules'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
      minChunks: Infinity,
    }),
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
