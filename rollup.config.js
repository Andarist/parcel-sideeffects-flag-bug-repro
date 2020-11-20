import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/rollup.js",
    format: "esm",
  },
  plugins: [nodeResolve()],
};
