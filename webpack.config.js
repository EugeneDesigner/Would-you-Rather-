const webpack       = require('webpack')
const path          = require('path')
const precss        = require('precss')
const stylelint     = require('stylelint')
const autoprefixer  = require('autoprefixer')



module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'components')
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
    ]
  },
  postcss: () => [precss, stylelint, autoprefixer],
  plugins: [
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)

    })
  ]

}
