import * as esbuild from "esbuild";

(async () => {
  await esbuild.build({
    entryPoints: ["src/index.js"],
    bundle: true,
    minify: true,
    outfile: "build/index.js",
  });
  await esbuild.build({
    entryPoints: ["src/index.css"],
    bundle: true,
    minify: true,
    outfile: "build/index.css",
  });
})();
