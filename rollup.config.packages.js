import swc from "rollup-plugin-swc";
import commonjs from "rollup-plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import fileSize from "rollup-plugin-filesize";
import progress from "rollup-plugin-progress";

const extensions = [".js", ".ts", ".tsx"];

export default {
  input: "./index.ts",
  output: {
    dir: "dist",
    format: "es",
    exports: "named",
    // preserveModulesRoot: "./",
    // preserveModules: false,
  },
  plugins: [
    peerDepsExternal(),
    commonjs(),
    resolve({ extensions, preferBuiltins: false }), // 빌트인 resolve?
    swc({
      minify: true,
      sourceMaps: true,
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: false,
        },
        target: "es2017",
      },
    }),
    progress(),
    fileSize(),
  ],
};
