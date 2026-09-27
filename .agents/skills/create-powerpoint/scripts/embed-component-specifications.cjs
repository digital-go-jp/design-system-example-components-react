/**
 * Generate references/dads-component-spec-snapshot.md, a frozen snapshot of
 * the component implementations for PowerPoint reproduction work.
 *
 * Dependencies: Node.js only (no packages).
 * Usage: node scripts/generate-component-inventory.cjs
 *        node scripts/embed-component-specifications.cjs
 *
 * Unlike the HTML-version skill (which embeds the snapshot into SKILL.md),
 * this script writes a standalone reference file so SKILL.md stays compact.
 * The snapshot embeds each component's .tsx/.ts sources (styles live in
 * Tailwind class strings there), the design tokens CSS, and tailwind.config.js.
 */
const fs = require("node:fs");
const path = require("node:path");

const SKILL_ROOT = path.resolve(__dirname, "..");
const PROJECT_ROOT = path.resolve(SKILL_ROOT, "..", "..", "..");
const COMPONENTS_DIR = path.join(PROJECT_ROOT, "src", "components");
const SOURCE_DIR = path.join(PROJECT_ROOT, "src");
const TOKENS_CSS_FILE = path.join(
  PROJECT_ROOT,
  "node_modules",
  "@digital-go-jp",
  "design-tokens",
  "dist",
  "tokens.css",
);
const TAILWIND_CONFIG_FILE = path.join(PROJECT_ROOT, "tailwind.config.js");
const INVENTORY_FILE = path.join(SKILL_ROOT, "references", "dads-component-inventory.md");
const OUTPUT_FILE = path.join(SKILL_ROOT, "references", "dads-component-spec-snapshot.md");

function fence(content) {
  return content.includes("```") ? "````" : "```";
}

function listFiles(directory, predicate) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFiles(entryPath, predicate));
    } else if (predicate(entryPath)) {
      files.push(entryPath);
    }
  }
  return files;
}

function renderSourceFile(file, language) {
  const content = fs.readFileSync(file, "utf8").trim();
  const delimiter = fence(content);
  const relativePath = path.relative(PROJECT_ROOT, file).replaceAll(path.sep, "/");
  return `#### \`${relativePath}\`\n\n${delimiter}${language}\n${content}\n${delimiter}`;
}

function renderComponentSources() {
  const components = fs
    .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== "deprecated")
    .sort((left, right) => left.name.localeCompare(right.name));

  return components
    .map((component) => {
      const directory = path.join(COMPONENTS_DIR, component.name);
      const sources = listFiles(
        directory,
        (file) => /\.(?:tsx|ts)$/.test(file) && !/\.(?:stories|test)\.tsx?$/.test(file),
      ).sort();
      const body = sources.length
        ? sources.map((file) => renderSourceFile(file, "tsx")).join("\n\n")
        : "Component source files are not present for this component.";
      return `### ${component.name} sources\n\n${body}`;
    })
    .join("\n\n");
}

function renderFoundationSpecification() {
  const sections = [];
  if (fs.existsSync(TOKENS_CSS_FILE)) {
    sections.push(
      "デザイントークンの一次情報は `@digital-go-jp/design-tokens` パッケージの `tokens.css` である。`tailwind-theme-plugin` がこれらをTailwindクラス（例: `bg-key-900`、`text-solid-gray-800`）へ対応付ける。\n\n" +
        renderSourceFile(TOKENS_CSS_FILE, "css"),
    );
  } else {
    sections.push(
      "`node_modules/@digital-go-jp/design-tokens/dist/tokens.css` が見つからない。`npm install` 実行後にこのスクリプトを再実行すること。",
    );
  }
  if (fs.existsSync(TAILWIND_CONFIG_FILE)) {
    sections.push(renderSourceFile(TAILWIND_CONFIG_FILE, "js"));
  }
  return sections.join("\n\n");
}

function renderBehaviorNotes() {
  const components = fs
    .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== "deprecated")
    .sort((left, right) => left.name.localeCompare(right.name));

  const rows = components
    .map((component) => {
      const directory = path.join(COMPONENTS_DIR, component.name);
      const sources = listFiles(directory, (file) => /\.tsx$/.test(file) && !/\.(?:stories|test)\.tsx$/.test(file));
      const usesReactAria = sources.some((file) =>
        fs.readFileSync(file, "utf8").includes("react-aria-components"),
      );
      return `| ${component.name} | ${usesReactAria ? "react-aria-components" : "ネイティブ要素"} |`;
    })
    .join("\n");

  return `PowerPointでは次の動作を実装したように見せかけない。キーボード操作、フォーカス遷移、ARIA更新、ライブリージョン、開閉、選択、入力補助は、資料内で状態名と注記として扱う。動作の一次情報は各コンポーネントのソースと \`react-aria-components\` のドキュメントである。

| Component | Behavior provider |
| --- | --- |
${rows}`;
}

function renderAssetInventory() {
  const assetExtensions = new Set([".svg", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif"]);
  const assets = listFiles(SOURCE_DIR, (file) => assetExtensions.has(path.extname(file).toLowerCase())).sort();

  if (!assets.length) {
    return "No image or SVG assets are stored under `src/`; use each component's inline SVG or its `assets/` directory.";
  }

  const rows = assets
    .map((file) => {
      const relativePath = path.relative(PROJECT_ROOT, file).replaceAll(path.sep, "/");
      return `| \`${relativePath}\` | \`${path.extname(file).slice(1).toUpperCase()}\` | ${fs.statSync(file).size} |`;
    })
    .join("\n");

  return `| Source asset | Type | Bytes |\n| --- | --- | ---: |\n${rows}\n\nUse an asset without changing its aspect ratio. Give meaningful assets descriptive PowerPoint alt text; decorative assets receive empty alt text.`;
}

function main() {
  if (!fs.existsSync(INVENTORY_FILE)) {
    throw new Error(
      "references/dads-component-inventory.md が見つかりません。先に node scripts/generate-component-inventory.cjs を実行してください。",
    );
  }
  const inventory = fs.readFileSync(INVENTORY_FILE, "utf8").trim();
  const generatedAt = new Date().toISOString().slice(0, 10);

  const snapshot = `# 固定コンポーネント仕様スナップショット（React版）

この資料は、生成時点（${generatedAt}）の \`src/components/\` とデザイントークンを固定した参照データである。全コンポーネントのStorybookストーリー、公開バリエーション、状態、レスポンシブ接頭辞、アクセシビリティシグナル、およびコンポーネントソース（スタイルはTailwindクラスとしてTSX内に定義される）を含む。

コンポーネントが変更された場合は、次を順に実行してこの資料を更新する。

\`\`\`text
node scripts/generate-component-inventory.cjs
node scripts/embed-component-specifications.cjs
\`\`\`

## 全コンポーネントのバリエーション・状態

${inventory.replace(/^# DADS Component Inventory \(React\)\s*/, "")}

## 全コンポーネントのソース（スタイル定義を含む）

${renderComponentSources()}

## Foundation（トークンとTailwind設定）

${renderFoundationSpecification()}

## コンポーネントの動作仕様

${renderBehaviorNotes()}

## アセット利用規則

${renderAssetInventory()}
`;

  fs.writeFileSync(OUTPUT_FILE, snapshot);
  console.log(`Generated ${OUTPUT_FILE}`);
}

main();
