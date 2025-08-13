import webpack from "webpack";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import HTMLWebpackPlugin from "html-webpack-plugin";
const path = require("path");
module.exports = () => {
  const config: webpack.Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.ts"),
    devtool: "inline-source-map",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[fullhash].js",
      clean: true,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src'), 
      },
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    devServer: {
      static: path.resolve(__dirname, 'src', 'index.ts'),
      port: 3000,
      open: true,
    },
    plugins: [new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
  })]
  };
  return config;
};
