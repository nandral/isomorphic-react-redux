const path = require("path");
const merge = require("webpack-merge");
const webpackNodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base.js");
const config = {
  //Build a bundle for NodeJS not for browser
  target: "node",

  //Root file of server app
  entry: "./src/index.js",

  //Path for output generated file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
