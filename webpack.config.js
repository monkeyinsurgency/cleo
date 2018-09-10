var webpack = require("webpack");
var path = require("path");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractPlugin = new ExtractTextPlugin({
  filename: "./assets/css/app.css"
});

var BUILD_DIR = path.resolve(__dirname, "src/client/public");
var APP_DIR = path.resolve(__dirname, "src/client/app");

var config = {
  entry: APP_DIR + "/index.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: "babel-loader"
      }
    ]
  }
};

module.exports = config;
