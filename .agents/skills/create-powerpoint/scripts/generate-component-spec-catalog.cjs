/**
 * Generate output/dads-component-spec-catalog.pptx: a fixed specification
 * catalog with one slide per component in src/components/ (React).
 *
 * Dependencies: Node.js and pptxgenjs (`npm install --no-save pptxgenjs`).
 * Usage: node scripts/generate-component-spec-catalog.cjs
 *
 * Variants and states are extracted heuristically from the component's
 * .tsx / .stories.tsx / .mdx / component-spec.md sources.
 */
const fs = require("node:fs");
const path = require("node:path");
const pptxgen = require("pptxgenjs");

const ROOT = path.resolve(__dirname, "..", "..", "..", "..");
const COMPONENTS_DIR = path.join(ROOT, "src", "components");
const OUTPUT_DIR = path.join(ROOT, "output");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "dads-component-spec-catalog.pptx");

const TOKENS = {
  blue50: "E8F1FE",
  blue800: "0031D8",
  blue1000: "00118F",
  yellow300: "FFD43D",
  gray50: "F2F2F2",
  gray200: "CCCCCC",
  gray600: "666666",
  gray800: "333333",
  black: "000000",
  white: "FFFFFF",
  green600: "259D63",
  red800: "EC0000",
  orange600: "FB5B01",
};

const pptx = new pptxgen();
pptx.defineLayout({ name: "DADS_WIDE", width: 13.333, height: 7.5 });
pptx.layout = "DADS_WIDE";
pptx.author = "Digital Agency Design System";
pptx.company = "Digital Agency Design System";
pptx.subject = "Fixed component specification catalog";
pptx.title = "DADS Component Specification Catalog";
pptx.lang = "ja-JP";
pptx.theme = {
  headFontFace: "Noto Sans JP",
  bodyFontFace: "Noto Sans JP",
  lang: "ja-JP",
};

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function listFilesRecursive(directory, predicate) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFilesRecursive(entryPath, predicate));
    } else if (predicate(entry.name)) {
      files.push(entryPath);
    }
  }
  return files;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function compact(values, fallback) {
  const text = unique(values).join(" / ");
  return text || fallback;
}

function truncate(text, length = 210) {
  return text.length > length ? `${text.slice(0, length - 1)}…` : text;
}

function extractAttributeValues(content) {
  const result = [];
  const regex = /data-([a-z0-9-]+)\s*=\s*["']([^"']+)["']/gi;
  for (const match of content.matchAll(regex)) {
    result.push(`data-${match[1]}: ${match[2]}`);
  }
  for (const match of content.matchAll(/data-\[([\w-]+)(?:=([\w-]+))?\]/g)) {
    result.push(match[2] ? `data-[${match[1]}=${match[2]}]` : `data-[${match[1]}]`);
  }
  return unique(result);
}

function extractStates(content) {
  const patterns = [
    [/(?:^|[^\w/-])hover:/m, "hover"],
    [/(?:^|[^\w/-])active:|data-\[pressed\]/m, "active"],
    [/focus-visible:|data-\[focus/m, "focus"],
    [/aria-disabled|data-\[disabled\]|(?:^|[^\w/-])disabled:/m, "disabled"],
    [/aria-invalid|error/i, "error"],
    [/aria-selected|data-\[selected\]/i, "selected"],
    [/aria-expanded|data-\[expanded\]/i, "expanded"],
    [/aria-checked|data-\[checked\]/i, "checked"],
    [/read-only|aria-readonly/i, "readonly"],
    [/aria-modal|:modal|data-\[open\]/i, "open"],
  ];
  return unique(patterns.filter(([pattern]) => pattern.test(content)).map(([, state]) => state));
}

function extractA11y(mdx, spec, tsx) {
  const all = `${mdx}\n${spec}\n${tsx}`;
  const matches = [];
  if (/aria-[a-z-]+/i.test(all)) matches.push("ARIA属性");
  if (/role\s*=/i.test(all)) matches.push("role");
  if (/aria-label|alt\s*=|<label|<Label/i.test(all)) matches.push("ラベル／代替テキスト");
  if (/keyboard|キーボード|Enter|Escape|Space/i.test(all)) matches.push("キーボード操作");
  if (/focus|フォーカス/i.test(all)) matches.push("フォーカス");
  if (/screen reader|スクリーンリーダー/i.test(all)) matches.push("スクリーンリーダー");
  return compact(matches, "ネイティブ要素・文脈に応じて確認");
}

function extractPurpose(spec, mdx) {
  const source = spec || mdx;
  const lines = source
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(
      (line) =>
        line.startsWith("- ") &&
        !line.includes("`") &&
        !line.includes("http") &&
        line.length >= 12 &&
        line.length <= 120,
    );
  return truncate(lines[0]?.replace(/^- /, "") || "詳細は同梱MDX・component-spec.mdおよび実装ソースを参照", 108);
}

function getComponents() {
  return fs
    .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== "deprecated")
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((entry) => {
      const directory = path.join(COMPONENTS_DIR, entry.name);
      const sourcePaths = listFilesRecursive(directory, (name) => /\.(?:tsx|ts|mdx)$/.test(name));
      const mdxFile = sourcePaths.map((file) => path.basename(file)).find((file) => file.endsWith(".mdx") && file !== "component-spec.md");
      const specPath = sourcePaths.find((file) => path.basename(file) === "component-spec.md");
      const storyCount = sourcePaths.filter((file) => /\.stories\.tsx$/.test(file)).length;
      const tsxPaths = sourcePaths.filter((file) => /\.tsx$/.test(file) && !/\.stories\.tsx$/.test(file));
      const mdx = mdxFile ? read(path.join(directory, mdxFile)) : "";
      const spec = specPath ? read(specPath) : "";
      const tsx = tsxPaths.map((file) => read(file)).join("\n");
      const storiesContent = sourcePaths
        .filter((file) => /\.stories\.tsx$/.test(file))
        .map((file) => read(file))
        .join("\n");
      return {
        id: entry.name,
        name: entry.name,
        mdxFile: mdxFile || "—",
        hasSpec: Boolean(specPath),
        storyCount,
        tsxCount: tsxPaths.length,
        variants: compact(
          [...extractAttributeValues(mdx), ...extractAttributeValues(spec), ...extractAttributeValues(tsx), ...extractAttributeValues(storiesContent)],
          "属性バリエーションなし／実装参照",
        ),
        states: compact(extractStates(`${tsx}\n${storiesContent}\n${spec}`), "通常"),
        a11y: extractA11y(mdx, spec, tsx),
        purpose: extractPurpose(spec, mdx),
      };
    });
}

function addText(slide, text, options) {
  slide.addText(text, {
    fontFace: "Noto Sans JP",
    color: TOKENS.gray800,
    margin: 0,
    breakLine: false,
    fit: "shrink",
    ...options,
  });
}

function addFooter(slide, page, total, section = "COMPONENT SPECIFICATION CATALOG") {
  slide.addShape(pptx.ShapeType.line, {
    x: 0.5,
    y: 7.0,
    w: 12.333,
    h: 0,
    line: { color: TOKENS.gray200, width: 0.6 },
  });
  addText(slide, section, {
    x: 0.5,
    y: 7.13,
    w: 7.5,
    h: 0.16,
    fontSize: 7.5,
    bold: true,
    color: TOKENS.gray600,
    charSpacing: 1.2,
  });
  addText(slide, `${page} / ${total}`, {
    x: 11.7,
    y: 7.1,
    w: 1.13,
    h: 0.18,
    fontSize: 8,
    bold: true,
    align: "right",
    color: TOKENS.gray600,
  });
}

function addTitle(slide, kicker, title, subtitle) {
  addText(slide, kicker, {
    x: 0.5,
    y: 0.4,
    w: 12.2,
    h: 0.22,
    fontSize: 9,
    bold: true,
    color: TOKENS.blue800,
    charSpacing: 1.4,
  });
  addText(slide, title, {
    x: 0.5,
    y: 0.78,
    w: 12.1,
    h: 0.52,
    fontSize: 26,
    bold: true,
    color: TOKENS.black,
  });
  if (subtitle) {
    addText(slide, subtitle, {
      x: 0.5,
      y: 1.36,
      w: 12.1,
      h: 0.28,
      fontSize: 10,
      color: TOKENS.gray600,
    });
  }
}

function addLabeledValue(slide, label, value, x, y, w, h = 0.62) {
  addText(slide, label.toUpperCase(), {
    x,
    y,
    w,
    h: 0.14,
    fontSize: 7.2,
    bold: true,
    color: TOKENS.gray600,
    charSpacing: 0.7,
  });
  addText(slide, value, {
    x,
    y: y + 0.19,
    w,
    h: h - 0.19,
    fontSize: 10,
    color: TOKENS.gray800,
    valign: "mid",
  });
}

function addTag(slide, label, x, y, width, color) {
  slide.addShape(pptx.ShapeType.rect, {
    x,
    y,
    w: width,
    h: 0.26,
    fill: { color },
    line: { color, transparency: 100 },
  });
  addText(slide, label, {
    x,
    y: y + 0.055,
    w: width,
    h: 0.11,
    fontSize: 6.8,
    bold: true,
    align: "center",
    color: TOKENS.white,
  });
}

function addComponentSpecSlide(component, index, total) {
  const slide = pptx.addSlide();
  slide.background = { color: TOKENS.white };
  addTitle(slide, `COMPONENT ${String(index).padStart(2, "0")}  /  ${component.id}`, component.name, "実装ソースを基準とした固定仕様。PowerPoint上の見本は静的表示です。");

  slide.addShape(pptx.ShapeType.rect, {
    x: 0.5,
    y: 1.9,
    w: 4.18,
    h: 4.7,
    fill: { color: TOKENS.gray50 },
    line: { color: TOKENS.gray200, width: 0.8 },
  });
  addText(slide, "STATIC SPECIMEN", {
    x: 0.78,
    y: 2.18,
    w: 2.4,
    h: 0.15,
    fontSize: 7.5,
    bold: true,
    color: TOKENS.gray600,
    charSpacing: 1,
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.78,
    y: 2.53,
    w: 3.62,
    h: 2.3,
    fill: { color: TOKENS.white },
    line: { color: TOKENS.gray200, width: 1 },
    shadow: { type: "outer", color: TOKENS.black, opacity: 0.12, blur: 1.5, offset: 1, angle: 45 },
  });
  addText(slide, component.name, {
    x: 1.02,
    y: 2.86,
    w: 3.05,
    h: 0.28,
    fontSize: 17,
    bold: true,
    color: TOKENS.blue1000,
    align: "center",
  });
  addText(slide, "静的仕様見本", {
    x: 1.02,
    y: 3.29,
    w: 3.05,
    h: 0.2,
    fontSize: 9.5,
    color: TOKENS.gray600,
    align: "center",
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 1.34,
    y: 3.78,
    w: 2.4,
    h: 0.46,
    fill: { color: TOKENS.blue800 },
    line: { color: TOKENS.blue800 },
  });
  addText(slide, "代表状態を確認", {
    x: 1.34,
    y: 3.93,
    w: 2.4,
    h: 0.12,
    fontSize: 8.5,
    bold: true,
    align: "center",
    color: TOKENS.white,
  });
  addText(slide, "動作・遷移・フォーカスは\n実装／Storybookで検証", {
    x: 0.9,
    y: 5.26,
    w: 3.38,
    h: 0.55,
    fontSize: 10,
    color: TOKENS.gray600,
    align: "center",
    valign: "mid",
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: 5.05,
    y: 1.9,
    w: 7.78,
    h: 4.7,
    fill: { color: TOKENS.white },
    line: { color: TOKENS.gray200, width: 0.8 },
  });
  addLabeledValue(slide, "仕様概要", component.purpose, 5.37, 2.23, 7.1, 0.69);
  addLabeledValue(slide, "バリエーション／属性", component.variants, 5.37, 3.13, 7.1, 0.86);
  addLabeledValue(slide, "静的に記載する状態", component.states, 5.37, 4.19, 3.3, 0.64);
  addLabeledValue(slide, "アクセシビリティ確認点", component.a11y, 9.1, 4.19, 3.1, 0.64);
  addLabeledValue(slide, "根拠ファイル", `src/components/${component.id}/${component.mdxFile}  |  spec ${component.hasSpec ? "あり" : "なし"}  |  TSX ${component.tsxCount}件  |  Stories ${component.storyCount}件`, 5.37, 5.04, 7.1, 0.65);

  const stateTags = component.states === "通常" ? ["normal"] : component.states.split(" / ").slice(0, 5);
  stateTags.forEach((state, tagIndex) => {
    const colors = [TOKENS.blue800, TOKENS.gray600, TOKENS.green600, TOKENS.orange600, TOKENS.red800];
    addTag(slide, state, 5.37 + tagIndex * 1.18, 5.89, 1.02, colors[tagIndex]);
  });
  addFooter(slide, index + 4, total);
}

function addCover(totalSlides, componentCount) {
  const slide = pptx.addSlide();
  slide.background = { color: TOKENS.blue1000 };
  slide.addShape(pptx.ShapeType.rect, {
    x: 8.35,
    y: 0,
    w: 4.98,
    h: 7.5,
    fill: { color: TOKENS.blue800 },
    line: { color: TOKENS.blue800 },
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 8.92,
    y: 1.05,
    w: 3.35,
    h: 4.85,
    fill: { color: TOKENS.white },
    line: { color: TOKENS.white },
  });
  addText(slide, "DADS", { x: 9.36, y: 1.5, w: 2.5, h: 0.38, fontSize: 23, bold: true, color: TOKENS.blue1000, align: "center" });
  addText(slide, "COMPONENT\nCATALOG", { x: 9.36, y: 2.18, w: 2.5, h: 0.9, fontSize: 20, bold: true, color: TOKENS.black, align: "center", valign: "mid" });
  slide.addShape(pptx.ShapeType.rect, { x: 9.66, y: 3.62, w: 1.9, h: 0.48, fill: { color: TOKENS.blue800 }, line: { color: TOKENS.blue800 } });
  addText(slide, "FIXED SPEC", { x: 9.66, y: 3.78, w: 1.9, h: 0.1, fontSize: 8, bold: true, color: TOKENS.white, align: "center" });
  addText(slide, "デジタル庁デザインシステム\nReact版", { x: 0.68, y: 1.12, w: 6.8, h: 0.66, fontSize: 15, color: TOKENS.blue50 });
  addText(slide, "コンポーネント\n仕様カタログ", { x: 0.62, y: 2.02, w: 7.15, h: 1.28, fontSize: 38, bold: true, color: TOKENS.white, breakLine: false });
  addText(slide, "リポジトリ実装を唯一の基準とする、静的PowerPoint仕様書", { x: 0.68, y: 3.62, w: 6.65, h: 0.28, fontSize: 13, color: TOKENS.blue50 });
  addText(slide, `${componentCount} components  |  ${totalSlides} slides  |  Source: src/components/`, { x: 0.68, y: 5.78, w: 6.9, h: 0.25, fontSize: 10, bold: true, color: TOKENS.yellow300 });
  addText(slide, `固定仕様版  |  ${new Date().toISOString().slice(0, 10)}`, { x: 0.68, y: 6.3, w: 5.2, h: 0.22, fontSize: 9, color: TOKENS.blue50 });
}

function addCatalogGuide(components, totalSlides) {
  const slide = pptx.addSlide();
  slide.background = { color: TOKENS.white };
  addTitle(slide, "CATALOG GOVERNANCE", "カタログの読み方", "実装との差異を避けるため、各ページは変化しない仕様項目と根拠を併記します。");
  const cards = [
    ["固定仕様", "属性、状態、支援技術上の要点を実装から抽出。PPT上の要素は操作不能な静的見本です。"],
    ["一次根拠", "コンポーネントごとにMDX、component-spec.md、TSX、Storiesの所在と件数を明記します。"],
    ["確認方法", "視覚状態・キーボード操作・レスポンシブ挙動はStorybookで確認します。"],
  ];
  cards.forEach(([heading, body], index) => {
    const x = 0.5 + index * 4.28;
    slide.addShape(pptx.ShapeType.rect, { x, y: 2.05, w: 3.85, h: 3.65, fill: { color: TOKENS.gray50 }, line: { color: TOKENS.gray200, width: 0.8 } });
    slide.addShape(pptx.ShapeType.rect, { x: x + 0.27, y: 2.35, w: 0.46, h: 0.46, fill: { color: TOKENS.blue800 }, line: { color: TOKENS.blue800 } });
    addText(slide, String(index + 1), { x: x + 0.27, y: 2.5, w: 0.46, h: 0.11, fontSize: 8.5, bold: true, color: TOKENS.white, align: "center" });
    addText(slide, heading, { x: x + 0.27, y: 3.12, w: 3.2, h: 0.28, fontSize: 16, bold: true, color: TOKENS.black });
    addText(slide, body, { x: x + 0.27, y: 3.75, w: 3.2, h: 1.25, fontSize: 11.2, color: TOKENS.gray800, breakLine: false });
  });
  addText(slide, `対象：${components.length}コンポーネント。UIの動的挙動・支援技術での読み上げは静的資料では再現せず、注記として扱います。`, { x: 0.5, y: 6.15, w: 12, h: 0.3, fontSize: 10, color: TOKENS.gray600 });
  addFooter(slide, 2, totalSlides);
}

function addFoundationSlide(totalSlides) {
  const slide = pptx.addSlide();
  slide.background = { color: TOKENS.white };
  addTitle(slide, "FOUNDATIONS", "共通トークンと実装原則", "@digital-go-jp/design-tokens と tailwind-theme-plugin、および src/docs/development-policy.mdx を基準とする固定値。");
  const tokenRows = [
    ["フォント", "Noto Sans JP / Noto Sans Mono"],
    ["キーカラー", "--color-key-50 〜 --color-key-1200（Blue階調）"],
    ["フォーカス", "4px black outline + 2px yellow-300 outer ring"],
    ["エレベーション", "--elevation-1 〜 --elevation-8"],
    ["基準ブレークポイント", "md: 768px、モバイルファースト"],
    ["アクセシビリティ", "WCAG 2.2 A/AA、強制カラー・視覚効果低減に配慮"],
  ];
  tokenRows.forEach(([label, value], index) => {
    const row = Math.floor(index / 2);
    const column = index % 2;
    const x = 0.5 + column * 6.35;
    const y = 2.0 + row * 1.25;
    slide.addShape(pptx.ShapeType.rect, { x, y, w: 5.88, h: 0.92, fill: { color: TOKENS.gray50 }, line: { color: TOKENS.gray200, width: 0.6 } });
    addText(slide, label, { x: x + 0.22, y: y + 0.19, w: 1.68, h: 0.18, fontSize: 9, bold: true, color: TOKENS.blue800 });
    addText(slide, value, { x: x + 1.95, y: y + 0.18, w: 3.65, h: 0.4, fontSize: 11, color: TOKENS.gray800 });
  });
  slide.addShape(pptx.ShapeType.rect, { x: 0.75, y: 5.95, w: 11.85, h: 0.44, fill: { color: TOKENS.yellow300 }, line: { color: TOKENS.black, width: 1.2 } });
  addText(slide, "フォーカス見本：視覚的な状態だけでなく、フォーカス順・キーボード操作・ARIAの整合を実装側で確認する。", { x: 1.0, y: 6.1, w: 11.35, h: 0.12, fontSize: 9.5, bold: true, color: TOKENS.black });
  addFooter(slide, 3, totalSlides);
}

function addIndexSlide(components, totalSlides) {
  const slide = pptx.addSlide();
  slide.background = { color: TOKENS.white };
  addTitle(slide, "INVENTORY", "全コンポーネント一覧", `${components.length}件をアルファベット順で固定収録。各コンポーネントは次ページ以降に1件ずつ掲載します。`);
  const rowsPerColumn = 14;
  components.forEach((component, index) => {
    const column = Math.floor(index / rowsPerColumn);
    const row = index % rowsPerColumn;
    const x = 0.65 + column * 4.15;
    const y = 1.95 + row * 0.33;
    addText(slide, `${String(index + 1).padStart(2, "0")}`, { x, y, w: 0.28, h: 0.14, fontSize: 7.3, bold: true, color: TOKENS.blue800 });
    addText(slide, component.name, { x: x + 0.52, y, w: 3.18, h: 0.15, fontSize: 8.5, color: TOKENS.gray800 });
  });
  addFooter(slide, 4, totalSlides);
}

async function main() {
  const components = getComponents();
  const totalSlides = components.length + 4;
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  addCover(totalSlides, components.length);
  addCatalogGuide(components, totalSlides);
  addFoundationSlide(totalSlides);
  addIndexSlide(components, totalSlides);
  components.forEach((component, index) => addComponentSpecSlide(component, index + 1, totalSlides));
  await pptx.writeFile({ fileName: OUTPUT_FILE });
  console.log(`Generated ${OUTPUT_FILE}`);
  console.log(`Slides: ${totalSlides}; Components: ${components.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
