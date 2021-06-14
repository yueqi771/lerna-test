import typescript from "rollup-plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";

export default {
    input: './src/index.ts',
    output: [
        {
            format: "cjs",
            file: "dist/bundle.cjs.js",
            sourcemap: true
        },
        {
            format: "es",
            file: "dist/index.js",
            sourcemap: true
        }
    ],
    plugins: [
        typescript({
            exclude: "node_modules/**",
            typescript: require("typescript"),
        }),
        sourceMaps()
    ]
}