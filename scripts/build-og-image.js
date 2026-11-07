#!/usr/bin/env node
/* Render public/og-image.svg -> public/og-image.png at 1200x630 (2x density). */
const fs = require("fs");
const path = require("path");
const { Resvg } = require("@resvg/resvg-js");

const svgPath = path.resolve(__dirname, "..", "public", "og-image.svg");
const outPath = path.resolve(__dirname, "..", "public", "og-image.png");

const svg = fs.readFileSync(svgPath);

const resvg = new Resvg(svg, {
  background: "#f6f8f7",
  fitTo: { mode: "width", value: 1200 },
  font: {
    loadSystemFonts: true,
    defaultFontFamily: "Helvetica Neue",
  },
  textRendering: 2,
  shapeRendering: 2,
  imageRendering: 0,
});

const pngData = resvg.render().asPng();
fs.writeFileSync(outPath, pngData);
console.log(`Wrote ${outPath} (${(pngData.length / 1024).toFixed(1)} KB)`);
