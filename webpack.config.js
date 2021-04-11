const { watch } = require('fs');
const path = require('path');
module.exports = {
  //***model必须得写***
  mode: "development", // "production" | "development" | "none"
  entry: "./app/main", // string | object | array
  output: {
    // options related to how webpack emits results
    path:path.resolve(__dirname, "dist"),
    filename: "all.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/react'] // ***注意这个地方的写法***
          }
        } 
      }
    ]
  },
  watch:true
}