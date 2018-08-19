const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: ['./src/app/Index.tsx'],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      react: path.resolve(path.join(__dirname, './node_modules/react')),
      'babel-core': path.resolve(
        path.join(__dirname, './node_modules/@babel/core'),
      )
    }
  },
  module: {
    rules: [{
        test: /\.(ts|tsx)$/,
        use: ['babel-loader', {
          loader: 'awesome-typescript-loader',
          options: {
            silent: true,
            useBabel: true,
            babelOptions: {
              compact: true,
              highlightCode: true,
            },
            babelCore: '@babel/core',
            useCache: true
          }
        }],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'app', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    })
  ],
  mode: 'production'
}