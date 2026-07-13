import { copyFileSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const tmpDir = join(root, ".tmp-showreel");
const assetsDir = join(root, "assets");
const htmlPath = join(__dirname, "showreel-capture.html");
const webmPath = join(assetsDir, "showreel.webm");
const mp4Path = join(assetsDir, "showreel.mp4");
const posterPath = join(assetsDir, "showreel-poster.jpg");

const requirePlaywright = () => {
  try {
    return require("playwright");
  } catch {
    return require("C:/projects/tower-balance/node_modules/playwright");
  }
};

const findFfmpeg = () => {
  const candidates = [
    process.env.FFMPEG_PATH,
    "C:/projects/tower-balance/node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe",
    "C:/projects/match_3_cats/node_modules/@ffmpeg-installer/win32-x64/ffmpeg.exe",
  ].filter(Boolean);

  return candidates.find((candidate) => existsSync(candidate));
};

const run = (command, args) => {
  const result = spawnSync(command, args, { encoding: "utf8", stdio: "pipe" });

  if (result.status !== 0) {
    throw new Error(`${command} failed:\n${result.stderr || result.stdout}`);
  }
};

rmSync(tmpDir, { recursive: true, force: true });
mkdirSync(tmpDir, { recursive: true });
mkdirSync(assetsDir, { recursive: true });

const { chromium } = requirePlaywright();
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 1,
  recordVideo: {
    dir: tmpDir,
    size: { width: 1280, height: 720 },
  },
});
const page = await context.newPage();
const video = page.video();

await page.goto(pathToFileURL(htmlPath).href);
await page.waitForFunction(() => window.showreelReady === true, null, { timeout: 30000 });
await page.waitForFunction(() => window.showreelDone === true, null, { timeout: 80000 });
await context.close();
await browser.close();

copyFileSync(await video.path(), webmPath);

const ffmpeg = findFfmpeg();

if (!ffmpeg) {
  console.warn("ffmpeg not found; wrote WebM only.");
  process.exit(0);
}

run(ffmpeg, [
  "-y",
  "-i",
  webmPath,
  "-an",
  "-c:v",
  "libx264",
  "-preset",
  "medium",
  "-crf",
  "23",
  "-pix_fmt",
  "yuv420p",
  "-movflags",
  "+faststart",
  mp4Path,
]);

run(ffmpeg, ["-y", "-ss", "00:00:04", "-i", mp4Path, "-frames:v", "1", "-q:v", "3", posterPath]);

console.log(`Wrote ${webmPath}`);
console.log(`Wrote ${mp4Path}`);
console.log(`Wrote ${posterPath}`);
