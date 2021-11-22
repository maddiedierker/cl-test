const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production", // TODO: make this configurable
  output: {
    library: {
      type: "commonjs", // TODO: change target
    },
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
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  // below needed to exclude node_modules from packages' dist/
  target: "node",
  externals: [nodeExternals()],
};
