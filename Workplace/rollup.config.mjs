import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };
import { nodeResolve } from "@rollup/plugin-node-resolve";
import image from "rollup-plugin-image"
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      image(),
      resolve(
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.png', '.jpg', '.gif'],
        }
      ),
      nodeResolve(),
      commonjs(),

      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/node_modules/**"],
        // exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      postcss({ extensions: [".css"], inject: true, extract: false }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],

    external: [/\.css$/, "react", "react-dom"],
  },
];
