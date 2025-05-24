// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",      // ← your JS entry
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devtool: false,

  //  added this entire module.rules block: 
  module: {
    rules: [
      {
        test: /\.css$/i,        
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",  
      filename: "index.html",           
      inject: "body",                   
      scriptLoading: "defer",           
    }),
  ],
};
