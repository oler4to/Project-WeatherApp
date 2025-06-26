const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
    })
    ],
    
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        
        {
          test: /\.(jpg|png|svg)$/i,
          type: 'asset/resource', 
        },
      ]
    }
};
