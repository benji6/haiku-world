const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'src'),
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  watch: true,
}
