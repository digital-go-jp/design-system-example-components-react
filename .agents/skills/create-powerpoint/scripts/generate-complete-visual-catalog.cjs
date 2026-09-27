/**
 * Generate output/dads-complete-visual-catalog.pptx: every Storybook story
 * captured at desktop (1440px) and mobile (390px) widths.
 *
 * Dependencies: Node.js, playwright (`npm install` then `npm run test:setup`
 * to install Chromium), and pptxgenjs (`npm install --no-save pptxgenjs`).
 * Prerequisites: run `npm run storybook:build` first so storybook-static/ exists.
 * Usage: node scripts/generate-complete-visual-catalog.cjs
 *        REUSE_CAPTURES=1 node scripts/generate-complete-visual-catalog.cjs
 */
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { chromium } = require("playwright");
const pptxgen = require("pptxgenjs");
let pptx;

const ROOT = path.resolve(__dirname, "..", "..", "..", "..");
const STATIC_DIR = path.join(ROOT, "storybook-static");
const INDEX_FILE = path.join(STATIC_DIR, "index.json");
const OUTPUT_DIR = path.join(ROOT, "output");
const CAPTURE_DIR = path.join(OUTPUT_DIR, "storybook-captures");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "dads-complete-visual-catalog.pptx");

const COLORS = {
  blue800: "0031D8",
  blue1000: "00118F",
  blue50: "E8F1FE",
  gray50: "F2F2F2",
  gray200: "CCCCCC",
  gray600: "666666",
  gray800: "333333",
  black: "000000",
  white: "FFFFFF",
  yellow300: "FFD43D",
};

function createServer(root) {
  const mimeTypes = {
    ".css": "text/css",
    ".gif": "image/gif",
    ".html": "text/html",
    ".ico": "image/x-icon",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".js": "application/javascript",
    ".json": "application/json",
    ".map": "application/json",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
  };
  return http.createServer((request, response) => {
    const requestPath = decodeURIComponent((request.url || "/").split("?")[0]);
    const relativePath = requestPath === "/" ? "index.html" : requestPath.replace(/^[/\\]+/, "");
    const filePath = path.resolve(root, relativePath);
    if (!filePath.startsWith(root) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    fs.createReadStream(filePath).pipe(response);
  });
}

function loadStories() {
  if (!fs.existsSync(INDEX_FILE)) {
    throw new Error("storybook-static/index.json が見つかりません。先に npm run storybook:build を実行してください。");
  }
  const index = JSON.parse(fs.readFileSync(INDEX_FILE, "utf8"));
  return Object.values(index.entries)
    .filter((entry) => entry.type === "story" && entry.title.startsWith("Component/"))
    .sort((left, right) => left.importPath.localeCompare(right.importPath) || left.id.localeCompare(right.id));
}

function addText(slide, text, options) {
  slide.addText(text, {
    fontFace: "Noto Sans JP",
    color: COLORS.gray800,
    margin: 0,
    breakLine: false,
    fit: "shrink",
    ...options,
  });
}

function addFooter(slide, page, total) {
  slide.addShape(pptx.ShapeType.line, {
    x: 0.5,
    y: 7.02,
    w: 12.33,
    h: 0,
    line: { color: COLORS.gray200, width: 0.6 },
  });
  addText(slide, "DADS COMPLETE VISUAL CATALOG  |  STORYBOOK RENDER", {
    x: 0.5,
    y: 7.13,
    w: 7.8,
    h: 0.14,
    fontSize: 7.5,
    bold: true,
    color: COLORS.gray600,
    charSpacing: 1,
  });
  addText(slide, `${page} / ${total}`, {
    x: 11.65,
    y: 7.11,
    w: 1.18,
    h: 0.15,
    fontSize: 8,
    bold: true,
    align: "right",
    color: COLORS.gray600,
  });
}

function addHeader(slide, componentName, storyName, source) {
  addText(slide, "COMPONENT / STORYBOOK VISUAL REFERENCE", {
    x: 0.5,
    y: 0.37,
    w: 12,
    h: 0.17,
    fontSize: 8.5,
    bold: true,
    color: COLORS.blue800,
    charSpacing: 1.2,
  });
  addText(slide, componentName, {
    x: 0.5,
    y: 0.73,
    w: 8.8,
    h: 0.4,
    fontSize: 25,
    bold: true,
    color: COLORS.black,
  });
  addText(slide, storyName, {
    x: 9.4,
    y: 0.84,
    w: 3.4,
    h: 0.17,
    fontSize: 10,
    bold: true,
    align: "right",
    color: COLORS.blue800,
  });
  addText(slide, source, {
    x: 0.5,
    y: 1.28,
    w: 12.3,
    h: 0.16,
    fontSize: 8.5,
    color: COLORS.gray600,
  });
}

function addContainedImage(slide, imagePath, imageWidth, imageHeight, box, altText) {
  const scale = Math.min(box.w / imageWidth, box.h / imageHeight);
  const w = imageWidth * scale;
  const h = imageHeight * scale;
  slide.addImage({
    path: imagePath,
    x: box.x + (box.w - w) / 2,
    y: box.y + (box.h - h) / 2,
    w,
    h,
    altText,
  });
}

function addCover(totalSlides, storyCount, componentCount) {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.blue1000 };
  slide.addShape(pptx.ShapeType.rect, {
    x: 8.55,
    y: 0,
    w: 4.78,
    h: 7.5,
    fill: { color: COLORS.blue800 },
    line: { color: COLORS.blue800 },
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 9.1,
    y: 1.05,
    w: 3.25,
    h: 5.0,
    fill: { color: COLORS.white },
    line: { color: COLORS.white },
  });
  addText(slide, "DADS", { x: 9.48, y: 1.62, w: 2.5, h: 0.32, fontSize: 24, bold: true, align: "center", color: COLORS.blue1000 });
  addText(slide, "VISUAL\nCATALOG", { x: 9.42, y: 2.5, w: 2.6, h: 0.72, fontSize: 20, bold: true, align: "center", valign: "mid", color: COLORS.black });
  slide.addShape(pptx.ShapeType.rect, { x: 9.65, y: 4.03, w: 2.1, h: 0.42, fill: { color: COLORS.blue800 }, line: { color: COLORS.blue800 } });
  addText(slide, "STORYBOOK RENDER", { x: 9.65, y: 4.17, w: 2.1, h: 0.1, fontSize: 7.2, bold: true, align: "center", color: COLORS.white });
  addText(slide, "デジタル庁デザインシステム\nReact版", { x: 0.67, y: 1.18, w: 6.9, h: 0.5, fontSize: 15, color: COLORS.blue50 });
  addText(slide, "完全ビジュアル\nカタログ", { x: 0.62, y: 2.1, w: 7.2, h: 1.1, fontSize: 38, bold: true, color: COLORS.white });
  addText(slide, "各Storybookストーリーをデスクトップとモバイルで実レンダリングして収録", { x: 0.67, y: 3.72, w: 7.25, h: 0.23, fontSize: 12.5, color: COLORS.blue50 });
  addText(slide, `${componentCount} components  |  ${storyCount} stories  |  ${totalSlides} slides`, { x: 0.67, y: 5.84, w: 7.1, h: 0.2, fontSize: 10.5, bold: true, color: COLORS.yellow300 });
  addText(slide, `固定仕様版  |  ${new Date().toISOString().slice(0, 10)}`, { x: 0.67, y: 6.37, w: 4.5, h: 0.16, fontSize: 9, color: COLORS.blue50 });
}

function addGuide(totalSlides) {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.white };
  addText(slide, "READING THE CATALOG", { x: 0.5, y: 0.42, w: 12, h: 0.17, fontSize: 8.5, bold: true, color: COLORS.blue800, charSpacing: 1.2 });
  addText(slide, "実装をそのまま確認する資料", { x: 0.5, y: 0.78, w: 11.8, h: 0.42, fontSize: 26, bold: true, color: COLORS.black });
  const items = [
    ["実レンダリング", "Storybookの各ストーリーを、React・CSS・JavaScriptが実行されるiframeからキャプチャしています。"],
    ["2つの表示幅", "デスクトップは1440px、モバイルは390px。レスポンシブによる見た目の差を同じスライドで確認できます。"],
    ["静的な参照資料", "PowerPoint内では操作できません。ホバー、フォーカス、キーボード操作、アニメーションはStorybookで確認します。"],
  ];
  items.forEach(([heading, body], index) => {
    const x = 0.5 + index * 4.28;
    slide.addShape(pptx.ShapeType.rect, { x, y: 2.0, w: 3.85, h: 3.7, fill: { color: COLORS.gray50 }, line: { color: COLORS.gray200, width: 0.8 } });
    slide.addShape(pptx.ShapeType.rect, { x: x + 0.28, y: 2.31, w: 0.48, h: 0.48, fill: { color: COLORS.blue800 }, line: { color: COLORS.blue800 } });
    addText(slide, String(index + 1), { x: x + 0.28, y: 2.47, w: 0.48, h: 0.1, fontSize: 8.5, bold: true, align: "center", color: COLORS.white });
    addText(slide, heading, { x: x + 0.28, y: 3.1, w: 3.25, h: 0.22, fontSize: 15, bold: true, color: COLORS.black });
    addText(slide, body, { x: x + 0.28, y: 3.72, w: 3.22, h: 1.1, fontSize: 11, color: COLORS.gray800 });
  });
  addFooter(slide, 2, totalSlides);
}

function addIndex(stories, totalSlides) {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.white };
  addText(slide, "INVENTORY", { x: 0.5, y: 0.42, w: 12, h: 0.17, fontSize: 8.5, bold: true, color: COLORS.blue800, charSpacing: 1.2 });
  addText(slide, "Storybookストーリー一覧", { x: 0.5, y: 0.78, w: 11.8, h: 0.42, fontSize: 26, bold: true, color: COLORS.black });
  addText(slide, `${stories.length}件のストーリーを実表示。スライド番号は目次を除くため、資料内の番号で確認します。`, { x: 0.5, y: 1.37, w: 12, h: 0.18, fontSize: 9.5, color: COLORS.gray600 });
  const grouped = stories.reduce((groups, story) => {
    const name = story.title.replace(/^Component\//, "");
    if (!groups.has(name)) groups.set(name, []);
    groups.get(name).push(story.name);
    return groups;
  }, new Map());
  const columns = 3;
  const items = [...grouped.entries()];
  const rowsPerColumn = Math.ceil(items.length / columns);
  items.forEach(([component, names], index) => {
    const column = Math.floor(index / rowsPerColumn);
    const row = index % rowsPerColumn;
    const x = 0.55 + column * 4.2;
    const y = 1.92 + row * 0.34;
    addText(slide, component, { x, y, w: 2.62, h: 0.15, fontSize: 8.7, bold: true, color: COLORS.gray800 });
    addText(slide, `${names.length} stories`, { x: x + 2.78, y, w: 0.75, h: 0.14, fontSize: 7.4, bold: true, align: "right", color: COLORS.blue800 });
  });
  addFooter(slide, 3, totalSlides);
}

function addStorySlide(story, captures, page, totalSlides) {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.white };
  const componentName = story.title.replace(/^Component\//, "");
  addHeader(slide, componentName, story.name, `${story.importPath.replace(/^\.\//, "")}  |  id: ${story.id}`);

  slide.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.7, w: 8.42, h: 5.03, fill: { color: COLORS.gray50 }, line: { color: COLORS.gray200, width: 0.8 } });
  slide.addShape(pptx.ShapeType.rect, { x: 9.17, y: 1.7, w: 3.66, h: 5.03, fill: { color: COLORS.gray50 }, line: { color: COLORS.gray200, width: 0.8 } });
  addText(slide, "DESKTOP / 1440px", { x: 0.75, y: 1.93, w: 4, h: 0.15, fontSize: 7.5, bold: true, color: COLORS.gray600, charSpacing: 1 });
  addText(slide, "MOBILE / 390px", { x: 9.42, y: 1.93, w: 2.8, h: 0.15, fontSize: 7.5, bold: true, color: COLORS.gray600, charSpacing: 1 });
  addContainedImage(
    slide,
    captures.desktop,
    1440,
    900,
    { x: 0.72, y: 2.22, w: 7.98, h: 4.24 },
    `${componentName} ${story.name} desktop rendering`,
  );
  addContainedImage(
    slide,
    captures.mobile,
    390,
    844,
    { x: 9.39, y: 2.22, w: 3.2, h: 4.24 },
    `${componentName} ${story.name} mobile rendering`,
  );
  addFooter(slide, page, totalSlides);
}

async function captureStory(page, baseUrl, story) {
  const url = `${baseUrl}/iframe.html?id=${encodeURIComponent(story.id)}&viewMode=story`;
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(400);
  const desktop = path.join(CAPTURE_DIR, `${story.id}-desktop.png`);
  await page.screenshot({ path: desktop, fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(300);
  const mobile = path.join(CAPTURE_DIR, `${story.id}-mobile.png`);
  await page.screenshot({ path: mobile, fullPage: true });
  return { desktop, mobile };
}

async function main() {
  const stories = loadStories();
  const components = new Set(stories.map((story) => story.title));
  const totalSlides = stories.length + 3;
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const reuseCaptures = process.env.REUSE_CAPTURES === "1";
  if (!reuseCaptures) {
    fs.rmSync(CAPTURE_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(CAPTURE_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const server = createServer(STATIC_DIR);
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const port = server.address().port;
  const baseUrl = `http://127.0.0.1:${port}`;
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const captures = new Map();
  const failures = [];

  try {
    for (const [index, story] of stories.entries()) {
      process.stdout.write(`Capturing ${index + 1}/${stories.length}: ${story.id}\n`);
      try {
        const desktop = path.join(CAPTURE_DIR, `${story.id}-desktop.png`);
        const mobile = path.join(CAPTURE_DIR, `${story.id}-mobile.png`);
        if (reuseCaptures && fs.existsSync(desktop) && fs.existsSync(mobile)) {
          captures.set(story.id, { desktop, mobile });
        } else {
          captures.set(story.id, await captureStory(page, baseUrl, story));
        }
      } catch (error) {
        failures.push(`${story.id}: ${error.message}`);
      }
    }
  } finally {
    await browser.close();
    await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
  }

  if (failures.length) {
    throw new Error(`Storybook capture failed for ${failures.length} story/stories:\n${failures.join("\n")}`);
  }

  pptx = new pptxgen();
  pptx.defineLayout({ name: "DADS_WIDE", width: 13.333, height: 7.5 });
  pptx.layout = "DADS_WIDE";
  pptx.author = "Digital Agency Design System";
  pptx.company = "Digital Agency Design System";
  pptx.subject = "Complete visual component catalog rendered from Storybook";
  pptx.title = "DADS Complete Visual Catalog";
  pptx.lang = "ja-JP";
  pptx.theme = { headFontFace: "Noto Sans JP", bodyFontFace: "Noto Sans JP", lang: "ja-JP" };

  addCover(totalSlides, stories.length, components.size);
  addGuide(totalSlides);
  addIndex(stories, totalSlides);
  stories.forEach((story, index) => addStorySlide(story, captures.get(story.id), index + 4, totalSlides));
  await pptx.writeFile({ fileName: OUTPUT_FILE });
  console.log(`Generated ${OUTPUT_FILE}`);
  console.log(`Components: ${components.size}; Stories: ${stories.length}; Slides: ${totalSlides}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
