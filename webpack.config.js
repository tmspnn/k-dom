'use strict';

module.exports = {
  entry: __dirname + '/src/k-dom.ts',
  mode: 'production',
  output: {
    path: __dirname + '/dist',
    filename: 'k-dom.min.js',
    library: 'kDom',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  devtool: '#nosources-source-map'
};
