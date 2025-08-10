import webpack from "webpack";
import { Configuration } from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
const path = require("path");
const devServer: DevServerConfiguration = {};
type Mods = "development" | "production";

interface ModeEnv {
  mode: Mods;
  port: number;
  analyzer: boolean;
}

module.exports = (env: ModeEnv) => {
  const isDev = env.mode === "development";
  const analyzer = env.analyzer;
  const plugins: Configuration["plugins"] = [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css",
    }),
  ].filter(Boolean);
  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  const config: webpack.Configuration = {
    mode: env.mode ?? "production",
    entry: path.resolve(__dirname, "src", "index-without-react.ts"),
    output: {
      filename: "[name].[fullhash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    plugins: plugins,
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
  };
  return config;
};
