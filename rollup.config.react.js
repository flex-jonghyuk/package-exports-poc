import swc from "rollup-plugin-swc";
import commonjs from "rollup-plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const extensions = [".js", ".ts", ".tsx"];

export default {
  input: "./index.ts",
  output: {
    dir: "dist",
    format: "es",
    exports: "named",
    preserveModulesRoot: "./",
    preserveModules: true,
  },
  plugins: [
    peerDepsExternal(),
    commonjs(),
    resolve({ extensions, preferBuiltins: false }),
    swc({
      minify: true,
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true,
        },
        target: "es2017",
        sourceMaps: true,
      },
    }),
  ],
};
