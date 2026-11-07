#!/usr/bin/env node
/* Render the vector brand icons to browser and mobile PNG assets. */
const fs = require("fs");
const path = require("path");
const { Resvg } = require("@resvg/resvg-js");

const publicDir = path.resolve(__dirname, "..", "public");
const icons = [
  ["favicon.svg", "favicon-32.png", 32],
  ["apple-touch-icon.svg", "apple-touch-icon.png", 192],
];

for (const [source, output, width] of icons) {
  const svg = fs.readFileSync(path.join(publicDir, source));
  const png = new Resvg(svg, {
    fitTo: { mode: "width", value: width },
    font: { loadSystemFonts: true, defaultFontFamily: "Helvetica" },
  }).render().asPng();
  fs.writeFileSync(path.join(publicDir, output), png);
  console.log(`Wrote ${output} (${width}x${width})`);
}
