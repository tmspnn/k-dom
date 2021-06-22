module.exports = {
  mode: "production",
  devtool: false,
  context: __dirname + "/src",
  entry: "./k-dom.js",
  output: {
    path: __dirname + "/dist",
    filename: "k-dom.js",
    library: {
      name: "kdom",
      type: "umd2",
      export: "default"
    },
    globalObject: "this"
  },
  module: { rules: [] }
};
