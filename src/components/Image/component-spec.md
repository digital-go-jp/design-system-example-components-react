# Image 移植計画

## HTML reference

- Source: https://github.com/digital-go-jp/design-system-example-components-html/tree/main/src/components/image
- 関連ファイル:
  - `image.mdx` / `playground.html` / `with-picture-element.html` / `image.css`
  - `image.stories.ts` (Storybook)
  - `image.js` — 存在しない（Custom Element なし、JS 動作なし）
  - `image.test.js` / `image.unit.js` — 存在しない
  - `image.vrt.js` — リセット CSS VRT のみ（機能テストなし）

## コンポーネント設計

### 公開する構成要素

| コンポーネント | 対応要素 | 役割 |
|---|---|---|
| `Image` | `<figure>` | ルートラッパー。`data-full-width` を持つ |
| `ImageArea` | `<div>` | 画像エリア（通常・ボーダーあり）。`data-bordered` を持つ |
| `ImageAreaLink` | `<a>` | 画像エリア（リンク付き）。常にアンカースタイルを適用 |
| `ImageCaption` | `<figcaption>` | キャプション。`data-style="dashed" | "solid"` を持つ |

### 各要素の props

- `Image`: `ComponentProps<'figure'>` + `fullWidth?: boolean`（`data-full-width` 属性にマッピング）
- `ImageArea`: `ComponentProps<'div'>` + `bordered?: boolean`（`data-bordered` 属性にマッピング）
- `ImageAreaLink`: `Omit<ComponentProps<'a'>, 'href'>` + `href: string`（必須）
- `ImageCaption`: `ComponentProps<'figcaption'>` + `captionStyle?: 'dashed' | 'solid'`（`data-style` 属性にマッピング）

### `<img>` スタイリング

`ImageArea` / `ImageAreaLink` に `[&_img]:block [&_img]:max-w-full [&_img]:h-auto` を付与することで、consumers が `<img>` に直接クラスを付けなくても正しくスタイルが当たる。`<picture>` 経由でも有効。

### `data-full-width` 時の `<img>` 幅

`Image` に `group/image` を付与し、`ImageArea` / `ImageAreaLink` から `group-data-[full-width]/image:[&_img]:w-full` で反応。

### コンポーネント API に入れないもの

- `<img>` のラッパーコンポーネント（`ImageImg` 等）— `[&_img]:` 子孫セレクタで不要
- JS 動作（Custom Element なし）

## ファイル構成

- `Image.tsx` — 全サブコンポーネントをここに集約（Tailwind クラスは JSX に直書き）
- `index.ts` — public exports

## Story 構成

| HTML ファイル / ユースケース | React export 名 | 表示名 |
|---|---|---|
| Playground（全バリアント controls） | `Playground` | — |
| リンク付き | `WithLink` | リンク付き |
| `with-picture-element.html` | `WithPictureElement` | `<picture>` 要素を使う |

autodocs には以下を掲載:
- コンポーネントの組み合わせ方（構成例）
- `ImageArea` の `bordered` prop の説明
- `ImageCaption` の `captionStyle` 選択肢
- `data-full-width` の挙動説明

## テスト方針

**テストなし。**

- JS 動作・Custom Element・フック・ユーティリティ関数がない
- インタラクション・ARIA wiring・状態変化もない
- 純粋なマークアップ + Tailwind スタイリングのみ → Storybook での目視確認で十分

## HTML 版との意図的な差異

| 差異 | 理由 |
|---|---|
| `ImageArea`（div）と `ImageAreaLink`（a）を別コンポーネントに分割 | ユーザー決定。div/a の型安全性を確保するため |
| `<img>` に必要なクラスを `[&_img]:` で自動付与 | consumers が `<img>` にクラスを付ける必要をなくすため |
| `margin: 0` を `m-0` として付与しない | Tailwind Preflight が `figure { margin: 0 }` をリセット済み |
