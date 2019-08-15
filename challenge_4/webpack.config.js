const path = require('path');

module.exports = {
  mode: "development",
  entry: './client/app.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /(\.m?js$|\.m?jsx$)/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        } 
      }
    ]
  }

}