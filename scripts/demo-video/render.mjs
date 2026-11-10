// Renders scene.html to public/demo.mp4 (wide) and public/demo-m.mp4 (phone cut), plus a poster for each.
// Needs playwright-core (resolved from scrollcraft/lab), Google Chrome and ffmpeg.
//   node scripts/demo-video/render.mjs
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");
const { chromium } = createRequire(path.join(root, "scrollcraft/lab/package.json"))("playwright-core");
const FPS = 30, DUR = 10;
const CUTS = [
  { query: "?render", name: "demo" },
  { query: "?render&portrait", name: "demo-m" },
];
const frames = path.join(here, ".frames");
const ff = (args) => execFileSync("ffmpeg", ["-y", "-loglevel", "error", ...args]);

const browser = await chromium.launch({
  executablePath: process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
for (const cut of CUTS) {
  fs.rmSync(frames, { recursive: true, force: true });
  fs.mkdirSync(frames);
  await page.goto(pathToFileURL(path.join(here, "scene.html")).href + cut.query);
  for (let i = 0; i < FPS * DUR; i++) {
    const data = await page.evaluate((t) => {
      window.draw(t);
      return document.getElementById("c").toDataURL("image/png");
    }, i / FPS);
    fs.writeFileSync(path.join(frames, `f${String(i).padStart(4, "0")}.png`), Buffer.from(data.split(",")[1], "base64"));
  }
  ff(["-framerate", String(FPS), "-i", path.join(frames, "f%04d.png"), "-c:v", "libx264", "-pix_fmt", "yuv420p",
      "-crf", "22", "-preset", "slow", "-movflags", "+faststart", "-an", path.join(root, `public/${cut.name}.mp4`)]);
  ff(["-i", path.join(frames, "f0225.png"), "-q:v", "3", path.join(root, `public/${cut.name}-poster.jpg`)]);
  console.log(`wrote public/${cut.name}.mp4 and public/${cut.name}-poster.jpg`);
}
await browser.close();
fs.rmSync(frames, { recursive: true, force: true });
