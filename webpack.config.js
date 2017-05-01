module.exports = {
  entry: './client/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader'
    },
    {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx']
  },
  devtool: 'source-map'
}
