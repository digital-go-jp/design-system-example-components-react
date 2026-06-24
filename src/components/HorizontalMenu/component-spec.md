# HorizontalMenu 移植計画

## HTML reference

- Source: https://github.com/digital-go-jp/design-system-example-components-html/tree/main/src/components/horizontal-menu
- 関連ファイル:
  - `horizontal-menu.mdx` / `playground.html` / `horizontal-menu.css`
  - `horizontal-menu.stories.ts` (Storybook)

## コンポーネント設計

### 公開コンポーネント（合成パターン）

| コンポーネント | 要素 | 役割 |
|---|---|---|
| `HorizontalMenu` | `<ul>` | コンテナ。水平メニューのリスト |
| `HorizontalMenuItem` | `<li>` | 各メニュー項目のラッパー |
| `HorizontalMenuItemLink` | `<a>` | リンク型メニュー項目 |
| `HorizontalMenuItemButton` | `<button type="button">` | サブメニュー展開ボタン型メニュー項目 |

### Props

- `HorizontalMenu`: `ComponentProps<'ul'>` をそのまま拡張（追加 props なし）
- `HorizontalMenuItem`: `ComponentProps<'li'>` をそのまま拡張（追加 props なし）
- `HorizontalMenuItemLink`: `ComponentProps<'a'>` をそのまま拡張（追加 props なし）
  - `aria-current` は標準 HTML 属性として `ComponentProps<'a'>` に含まれるため、そのまま使用可能
- `HorizontalMenuItemButton`: `Omit<ComponentProps<'button'>, 'type'>` を拡張（`type` は内部で `"button"` に固定）
  - `aria-expanded` は標準 HTML 属性として含まれるため、そのまま使用可能

### スタイル

- Tailwind クラスのみ。`horizontal-menu.css` の BEM クラス名は持ち込まない
- 下線（`border-bottom`）: `border-b border-solid-gray-420`
- フォント: `font-bold text-dns-16B-130`
- 現在地 (`aria-current`): `[aria-current]:bg-white [aria-current]:text-blue-1000`
- フォーカス: `focus-visible:outline focus-visible:outline-4 ...`（既存コンポーネントのパターンに合わせる）
- シェブロン回転: `aria-expanded="true"` のとき、シェブロン SVG に `group-aria-expanded/horizontal-menu-item:rotate-180` クラスを付与（親の `HorizontalMenuItemButton` は `group/horizontal-menu-item` を持つ）

### コンポーネント API に入れないもの

- フロントアイコン・シェブロンのラッパーコンポーネント（`HorizontalMenuFrontIcon` 等）は提供しない
- サブメニューの開閉 state は持たない（Controlled のみ）
- サブメニュー自体の実装はスコープ外

## ファイル構成

```
src/components/HorizontalMenu/
├── HorizontalMenu.tsx       # 全コンポーネント（~100行以内の見込み）
├── HorizontalMenu.stories.tsx
├── component-spec.md
└── index.ts
```

## Story 構成

| Story export 名 | 表示名 | 内容 |
|---|---|---|
| `Playground` | Playground | 全オプション切り替え可能なデモ。items 数、現在地、サブメニューボタンなど |

autodocs ページ（`docs.page`）: HTML 版 MDX の構成に準拠し日本語で記述

## テスト方針

今回はテストを作成しない。理由:
- ロジックなし（hook・util なし）
- 純粋な構造コンポーネント。props の受け渡しのみ
- `write-tests` スキルの skip ルールに該当

## HTML 版との意図的な差異

| 差異 | 理由 |
|---|---|
| BEM クラス名（`dads-horizontal-menu` 等）を持たない | React 版は Tailwind クラスで表現するため |
| フロントアイコン・シェブロンのラッパーコンポーネントなし | consumers が独自 SVG を使う想定。children として自由に渡す |
| サブメニューの state 管理なし | Controlled パターンのみ対応（HTML 版も JS はユーザー責任） |
