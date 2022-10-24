const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
        {
            test: /\.svg$/,
            use: "svg-inline-loader"
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(js)$/,
            use: "babel-loader",
        },
        {
          test: /\.(gif|png|jpe?g)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images/'
              },
            },
          ],
        },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html",
    title: "... app",
    filename: "index.html",
  }),
  
],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devServer: {
    port:3900,
    hot: true,
    
    
  },

};
