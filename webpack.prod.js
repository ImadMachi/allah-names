const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "bundle"),
    pathinfo: false,
    assetModuleFilename: "assets/[hash][ext][query]",
    publicPath: process.env.ASSET_PATH || "/",
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env", "autoprefixer"],
              },
            },
          },
        ],
      },
    ],
  },
});
