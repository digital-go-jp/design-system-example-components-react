/**
 * Generate references/dads-component-inventory.md from src/components/ (React).
 *
 * Dependencies: Node.js only (no packages).
 * Usage: node scripts/generate-component-inventory.cjs
 *
 * Scans each component directory's .tsx / .ts / .mdx sources and extracts
 * Storybook stories, data-* attributes (including Tailwind `data-[...]`
 * variants), static states from Tailwind variant prefixes and ARIA
 * attributes, responsive prefixes, and accessibility signals.
 * The extraction is heuristic; the generated file is a coverage checklist,
 * not a substitute for reading the component source.
 */
const fs = require("node:fs");
const path = require("node:path");

const SKILL_ROOT = path.resolve(__dirname, "..");
const PROJECT_ROOT = path.resolve(SKILL_ROOT, "..", "..", "..");
const COMPONENTS_DIR = path.join(PROJECT_ROOT, "src", "components");
const OUTPUT_FILE = path.join(SKILL_ROOT, "references", "dads-component-inventory.md");

const STATE_PATTERNS = [
  [/(?:^|[^\w/-])(?:group-[\w/-]+\/)?hover:/m, "hover"],
  [/(?:^|[^\w/-])(?:group-[\w/-]+\/)?active:|data-\[pressed\]|aria-pressed/m, "active / pressed"],
  [/focus-visible:|data-\[focus(?:-visible)?\]|(?:^|[^\w/-])focus:/m, "focus"],
  [/aria-disabled|data-\[disabled\]|(?:^|[^\w/-])(?:group-[\w/-]+\/)?disabled:/m, "disabled"],
  [/aria-invalid|data-\[invalid\]|\berror\b/im, "error"],
  [/aria-checked|data-\[checked\]|data-\[selected\]|\bchecked\b/m, "checked"],
  [/aria-selected|data-\[selected\]/m, "selected"],
  [/aria-expanded|data-\[expanded\]/m, "expanded"],
  [/read-only|aria-readonly|data-\[readonly\]/m, "readonly"],
  [/aria-modal|:modal\b|data-\[open\]/m, "open"],
];

const INTERNAL_DATA_PREFIXES = [
  "data-testid",
  "data-story-",
  "data-slot",
];

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function markdownList(values, fallback) {
  return values.length ? values.map((value) => `- \`${value}\``).join("\n") : `- ${fallback}`;
}

function collectDataModifiers(content) {
  const modifiers = [];
  for (const match of content.matchAll(/data-([\w-]+)(?:\s*=\s*["']([^"']+)["'])?/g)) {
    const name = `data-${match[1]}`;
    const value = match[2];
    if (INTERNAL_DATA_PREFIXES.some((prefix) => name.startsWith(prefix)) || value?.includes("${")) {
      continue;
    }
    modifiers.push(value ? `${name}=${value}` : name);
  }
  // Tailwind arbitrary-attribute variants such as data-[size=sm]: or data-[selected]:
  for (const match of content.matchAll(/data-\[([\w-]+)(?:=([\w-]+))?\]/g)) {
    modifiers.push(match[2] ? `data-[${match[1]}=${match[2]}]` : `data-[${match[1]}]`);
  }
  const uniqueModifiers = unique(modifiers);
  const namesWithValues = new Set(
    uniqueModifiers.filter((modifier) => /=/.test(modifier)).map((modifier) => modifier.split(/[=\]]/)[0]),
  );
  return uniqueModifiers.filter((modifier) => /=/.test(modifier) || !namesWithValues.has(modifier));
}

function collectAria(content) {
  const attributes = [];
  for (const match of content.matchAll(/\b(aria-[\w-]+)\b/gi)) {
    attributes.push(match[1].toLowerCase());
  }
  if (/\brole\s*=/i.test(content)) attributes.push("role");
  if (/<label\b|<Label\b/i.test(content)) attributes.push("label");
  if (/\balt\s*=/i.test(content)) attributes.push("alt");
  return unique(attributes);
}

function collectResponsivePrefixes(content) {
  const prefixes = [];
  for (const match of content.matchAll(/(?<![\w/@-])(@?)(sm|md|lg|xl):[a-z[]/g)) {
    prefixes.push(`${match[1]}${match[2]}:`);
  }
  return unique(prefixes);
}

function collectStates(content) {
  return unique(STATE_PATTERNS.filter(([pattern]) => pattern.test(content)).map(([, state]) => state));
}

function collectStories(storyContent) {
  const names = [];
  for (const match of storyContent.matchAll(/export const (\w+)\s*[:=]/g)) {
    if (match[1] !== "default") names.push(match[1]);
  }
  return unique(names);
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

function readComponent(directory) {
  const sourcePaths = listFilesRecursive(directory, (name) => /\.(?:tsx|ts|mdx)$/.test(name));
  const source = sourcePaths.map((file) => fs.readFileSync(file, "utf8")).join("\n");
  const relative = (file) => path.relative(directory, file).replaceAll(path.sep, "/");
  const storyFiles = sourcePaths.filter((file) => /\.stories\.tsx$/.test(file)).map(relative);
  const stories = unique(
    sourcePaths
      .filter((file) => /\.stories\.tsx$/.test(file))
      .flatMap((file) => collectStories(fs.readFileSync(file, "utf8"))),
  );
  const specFile = sourcePaths.some((file) => path.basename(file) === "component-spec.md");

  return {
    id: path.basename(directory),
    storyFiles,
    stories,
    hasSpec: specFile,
    modifiers: collectDataModifiers(source),
    states: collectStates(source),
    responsive: collectResponsivePrefixes(source),
    accessibility: collectAria(source),
  };
}

function renderComponent(component) {
  const requiredStates = component.states.length ? component.states : ["normal"];
  const responsive = component.responsive.length
    ? component.responsive.map((prefix) => `\`${prefix}\``).join(" / ")
    : "基本表示のみ（対象ソースを確認）";

  return `## ${component.id}

**Source:** \`src/components/${component.id}/\`

### Stories

${markdownList(component.stories, "No exported story found; inspect the component source and MDX docs.")}

### Story files

${markdownList(component.storyFiles, "No Storybook story file in this directory.")}

### Component spec

- ${component.hasSpec ? "`component-spec.md` present — read it for the fixed port specification." : "No `component-spec.md` in this directory."}

### Data modifiers and Tailwind attribute variants

${markdownList(component.modifiers, "No data-* modifier found.")}

### Static states to include

${markdownList(requiredStates, "normal")}

### Responsive and container query prefixes

- ${responsive}

### Accessibility signals to preserve

${markdownList(component.accessibility, "Use native semantics and inspect source markup.")}

### Required PowerPoint coverage

- [ ] Include every Storybook story listed above (or the documented variation set in the MDX / component-spec.md).
- [ ] Include every data modifier listed above.
- [ ] Show every listed state as an individually labeled static specimen.
- [ ] ${component.responsive.length ? "Show mobile and desktop specimens with their viewport widths (mobile-first; `md:` = 768px)." : "Do not imply a responsive layout change unless the source adds a responsive variant."}
- [ ] Note interactive or assistive-technology behavior (react-aria-components) that PowerPoint cannot reproduce.
`;
}

function main() {
  const components = fs
    .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== "deprecated")
    .map((entry) => readComponent(path.join(COMPONENTS_DIR, entry.name)))
    .sort((left, right) => left.id.localeCompare(right.id));

  const summary = components
    .map(
      (component) =>
        `| ${component.id} | ${component.stories.length || "—"} | ${component.modifiers.join(", ") || "—"} | ${component.states.join(", ") || "normal"} |`,
    )
    .join("\n");

  const markdown = `# DADS Component Inventory (React)

This generated reference covers every component directory in \`src/components/\`. It is the required coverage checklist for component-oriented PowerPoint decks. Regenerate it after component changes with:

\`\`\`text
node scripts/generate-component-inventory.cjs
\`\`\`

States and modifiers are extracted heuristically from Tailwind variant prefixes, ARIA attributes, and data attributes in the component sources. Always confirm details against the component's \`.tsx\`, \`.stories.tsx\`, \`.mdx\`, and \`component-spec.md\`.

## Coverage summary

| Component | Stories | Data modifiers | Static states |
| --- | ---: | --- | --- |
${summary}

${components.map(renderComponent).join("\n")}
`;

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, markdown);
  console.log(`Generated ${OUTPUT_FILE} for ${components.length} components.`);
}

main();
