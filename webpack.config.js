module.exports = {
  mode: "production",
  devtool: "cheap-eval-source-map",
  entry: __dirname + "/src/k-dom.ts",
  output: {
    path: __dirname + "/dist",
    filename: "k-dom.js",
    library: "kDom",
    libraryTarget: "umd",
    globalObject: "this"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  }
};
