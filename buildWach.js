
//import { build } from "esbuild";
import * as esbuild from 'esbuild'
import path from "path";
import fs from "fs";

//
let ctx = await esbuild.context({
  entryPoints: [path.resolve("./src/index.ts")],
  minify: true,
  bundle: true,
  target: "es2020",
  platform: "node",
  format: 'esm',
  outdir: "./dist",
  tsconfig: path.resolve("./tsconfig.json"),
  external: fs.readdirSync("./node_modules"),
});
await ctx.watch();
console.log('watching...');
