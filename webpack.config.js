const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: process.env.NODE_ENV,
  output: {
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader", // Creates `style` nodes from JS strings
          // Translates CSS into CommonJS
          // TODO: this is shared with storybook
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
              },
            },
          },
          "sass-loader", // Compiles Sass to CSS
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".scss"],
  },
  // below needed to exclude node_modules from packages' dist/
  target: "node",
  externals: [nodeExternals()],
};
