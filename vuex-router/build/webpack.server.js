const path = require('path')
const projectRoot = path.resolve(__dirname, '..')

module.exports = {
  target: 'node', // add this
  entry: path.join(projectRoot, 'src/server-entry.js'),
  output: {
    libraryTarget: 'commonjs2', // add this
    path: path.join(projectRoot, 'dist'),
    filename: 'bundle.server.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      }
    ]
  }
}
