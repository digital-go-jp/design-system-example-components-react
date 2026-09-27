/**
 * Generate the editable DADS PowerPoint template (6 standard layouts).
 *
 * Dependencies: Node.js and pptxgenjs (`npm install --no-save pptxgenjs`).
 * Usage: node scripts/generate-dads-powerpoint-template.cjs
 * Output: <skill>/assets/dads-powerpoint-template.pptx
 *
 * Color values are resolved DADS tokens (see references/dads-color-palette.md).
 * Re-resolve them from `@digital-go-jp/design-tokens` if the tokens package changes.
 */
const fs = require("node:fs");
const path = require("node:path");
const pptxgen = require("pptxgenjs");

const OUTPUT_FILE = path.join(__dirname, "..", "assets", "dads-powerpoint-template.pptx");
const COLORS = {
  blue50: "E8F1FE",
  blue800: "0031D8",
  blue1000: "00118F",
  gray50: "F2F2F2",
  gray200: "CCCCCC",
  gray600: "666666",
  gray800: "333333",
  black: "000000",
  white: "FFFFFF",
  yellow300: "FFD43D",
};

const pptx = new pptxgen();
pptx.defineLayout({ name: "DADS_WIDE", width: 13.333, height: 7.5 });
pptx.layout = "DADS_WIDE";
pptx.author = "Digital Agency Design System";
pptx.company = "Digital Agency Design System";
pptx.subject = "DADS editable PowerPoint template";
pptx.title = "DADS PowerPoint Template";
pptx.lang = "ja-JP";
pptx.theme = { headFontFace: "Noto Sans JP", bodyFontFace: "Noto Sans JP", lang: "ja-JP" };

function text(slide, value, options) {
  slide.addText(value, {
    fontFace: "Noto Sans JP",
    margin: 0,
    color: COLORS.gray800,
    fit: "shrink",
    ...options,
  });
}

function footer(slide, pageLabel = "DADS TEMPLATE") {
  slide.addShape(pptx.ShapeType.line, {
    x: 0.5,
    y: 7.02,
    w: 12.33,
    h: 0,
    line: { color: COLORS.gray200, width: 0.6 },
  });
  text(slide, pageLabel, {
    x: 0.5,
    y: 7.13,
    w: 5.2,
    h: 0.13,
    fontSize: 7.5,
    bold: true,
    charSpacing: 1,
    color: COLORS.gray600,
  });
  text(slide, "スライド番号", {
    x: 11.4,
    y: 7.12,
    w: 1.43,
    h: 0.13,
    fontSize: 7.5,
    align: "right",
    color: COLORS.gray600,
  });
}

function header(slide, section, title, subtitle = "") {
  text(slide, section, {
    x: 0.5,
    y: 0.4,
    w: 12.2,
    h: 0.17,
    fontSize: 8.5,
    bold: true,
    charSpacing: 1.2,
    color: COLORS.blue800,
  });
  text(slide, title, {
    x: 0.5,
    y: 0.75,
    w: 12.1,
    h: 0.44,
    fontSize: 27,
    bold: true,
    color: COLORS.black,
  });
  if (subtitle) {
    text(slide, subtitle, {
      x: 0.5,
      y: 1.32,
      w: 12.1,
      h: 0.17,
      fontSize: 9.5,
      color: COLORS.gray600,
    });
  }
}

function card(slide, x, y, w, h, title, body) {
  slide.addShape(pptx.ShapeType.rect, {
    x,
    y,
    w,
    h,
    fill: { color: COLORS.gray50 },
    line: { color: COLORS.gray200, width: 0.8 },
  });
  text(slide, title, {
    x: x + 0.25,
    y: y + 0.26,
    w: w - 0.5,
    h: 0.22,
    fontSize: 14,
    bold: true,
    color: COLORS.black,
  });
  text(slide, body, {
    x: x + 0.25,
    y: y + 0.75,
    w: w - 0.5,
    h: h - 1.0,
    fontSize: 10.5,
    breakLine: false,
    color: COLORS.gray800,
  });
}

function addCover() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.blue1000 };
  slide.addShape(pptx.ShapeType.rect, {
    x: 8.6,
    y: 0,
    w: 4.73,
    h: 7.5,
    fill: { color: COLORS.blue800 },
    line: { color: COLORS.blue800 },
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: 9.14,
    y: 1.04,
    w: 3.22,
    h: 5.02,
    fill: { color: COLORS.white },
    line: { color: COLORS.white },
  });
  text(slide, "DADS", { x: 9.52, y: 1.65, w: 2.45, h: 0.3, fontSize: 23, bold: true, align: "center", color: COLORS.blue1000 });
  text(slide, "PRESENTATION\nTEMPLATE", { x: 9.45, y: 2.55, w: 2.6, h: 0.7, fontSize: 17, bold: true, align: "center", valign: "mid", color: COLORS.black });
  slide.addShape(pptx.ShapeType.rect, { x: 9.68, y: 4.03, w: 2.12, h: 0.43, fill: { color: COLORS.blue800 }, line: { color: COLORS.blue800 } });
  text(slide, "EDITABLE MASTER", { x: 9.68, y: 4.17, w: 2.12, h: 0.1, fontSize: 7.2, bold: true, align: "center", color: COLORS.white });
  text(slide, "資料タイトルを入力", { x: 0.65, y: 2.02, w: 7.05, h: 0.62, fontSize: 35, bold: true, color: COLORS.white });
  text(slide, "サブタイトルまたは資料の要約を入力", { x: 0.68, y: 3.15, w: 6.7, h: 0.22, fontSize: 13, color: COLORS.blue50 });
  text(slide, "作成者  |  YYYY-MM-DD", { x: 0.68, y: 6.23, w: 4.7, h: 0.18, fontSize: 9, color: COLORS.blue50 });
}

function addSection() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.blue800 };
  text(slide, "SECTION 01", { x: 0.68, y: 1.38, w: 4, h: 0.18, fontSize: 9, bold: true, charSpacing: 1.3, color: COLORS.blue50 });
  text(slide, "セクションタイトル", { x: 0.65, y: 2.1, w: 8, h: 0.55, fontSize: 33, bold: true, color: COLORS.white });
  text(slide, "このセクションで伝える要点を一文で入力", { x: 0.68, y: 3.13, w: 6.6, h: 0.2, fontSize: 12, color: COLORS.blue50 });
  slide.addShape(pptx.ShapeType.rect, { x: 9.22, y: 1.68, w: 2.9, h: 2.9, fill: { color: COLORS.white }, line: { color: COLORS.white } });
  text(slide, "01", { x: 9.22, y: 2.56, w: 2.9, h: 0.5, fontSize: 32, bold: true, align: "center", color: COLORS.blue1000 });
}

function addTwoColumn() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.white };
  header(slide, "KEY MESSAGE", "スライドタイトルを入力", "結論または補足を短く入力");
  text(slide, "説明テキスト", { x: 0.5, y: 2.0, w: 5.6, h: 0.22, fontSize: 14, bold: true, color: COLORS.blue1000 });
  text(slide, "主張を支える本文を入力します。重要な文章は短くし、読み手が一目で理解できる構造にします。", { x: 0.5, y: 2.52, w: 5.25, h: 1.55, fontSize: 15, color: COLORS.gray800 });
  slide.addShape(pptx.ShapeType.rect, { x: 6.62, y: 1.85, w: 6.21, h: 4.75, fill: { color: COLORS.gray50 }, line: { color: COLORS.gray200, width: 0.8 } });
  text(slide, "図表・画面キャプチャ・コンポーネント見本", { x: 6.94, y: 3.88, w: 5.55, h: 0.23, fontSize: 12, bold: true, align: "center", color: COLORS.gray600 });
  footer(slide);
}

function addThreeCards() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.white };
  header(slide, "OPTIONS", "3つの要点を比較する", "カードごとに同じ粒度のメッセージを置く");
  card(slide, 0.5, 2.0, 3.85, 3.95, "要点 01", "説明を入力\n\n根拠・対象・期待する効果を簡潔に記載");
  card(slide, 4.74, 2.0, 3.85, 3.95, "要点 02", "説明を入力\n\n根拠・対象・期待する効果を簡潔に記載");
  card(slide, 8.98, 2.0, 3.85, 3.95, "要点 03", "説明を入力\n\n根拠・対象・期待する効果を簡潔に記載");
  footer(slide);
}

function addProcess() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.white };
  header(slide, "PROCESS", "進め方・利用フローを示す", "手順を最大4段階に整理する");
  const steps = ["開始", "確認", "実行", "完了"];
  steps.forEach((step, index) => {
    const x = 0.7 + index * 3.12;
    slide.addShape(pptx.ShapeType.rect, { x, y: 3.0, w: 1.0, h: 1.0, fill: { color: COLORS.blue800 }, line: { color: COLORS.blue800 } });
    text(slide, String(index + 1), { x, y: 3.3, w: 1.0, h: 0.16, fontSize: 12, bold: true, align: "center", color: COLORS.white });
    text(slide, step, { x: x + 1.28, y: 3.13, w: 1.45, h: 0.2, fontSize: 14, bold: true, color: COLORS.black });
    text(slide, "説明を入力", { x: x + 1.28, y: 3.6, w: 1.45, h: 0.16, fontSize: 9, color: COLORS.gray600 });
    if (index < steps.length - 1) {
      slide.addShape(pptx.ShapeType.line, { x: x + 2.75, y: 3.5, w: 0.62, h: 0, line: { color: COLORS.gray600, width: 1.2, endArrowType: "triangle" } });
    }
  });
  footer(slide);
}

function addClosing() {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.blue1000 };
  text(slide, "NEXT ACTION", { x: 0.68, y: 1.42, w: 4, h: 0.18, fontSize: 9, bold: true, charSpacing: 1.3, color: COLORS.blue50 });
  text(slide, "次のアクションを\n入力", { x: 0.65, y: 2.08, w: 7.25, h: 1.1, fontSize: 34, bold: true, color: COLORS.white });
  text(slide, "責任者、期限、連絡先などを記載", { x: 0.68, y: 4.2, w: 6.4, h: 0.2, fontSize: 12, color: COLORS.blue50 });
  slide.addShape(pptx.ShapeType.rect, { x: 9.22, y: 1.75, w: 2.9, h: 2.9, fill: { color: COLORS.yellow300 }, line: { color: COLORS.yellow300 } });
  text(slide, "THANK\nYOU", { x: 9.22, y: 2.45, w: 2.9, h: 0.68, fontSize: 22, bold: true, align: "center", color: COLORS.black });
}

addCover();
addSection();
addTwoColumn();
addThreeCards();
addProcess();
addClosing();

async function main() {
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  await pptx.writeFile({ fileName: OUTPUT_FILE });
  console.log(`Generated ${OUTPUT_FILE}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
