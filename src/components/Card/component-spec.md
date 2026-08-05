# Card 移植計画

## HTML reference

- Source: https://github.com/digital-go-jp/design-system-example-components-html/tree/main/src/components/card
- 関連ファイル:
  - `card.mdx` / `card.stories.ts`（Storybook）
  - `card.vrt.js`（リセット CSS VRT）
  - `example-1.html` ～ `example-6.html`（作例マークアップ）
  - `card-example-1.css` ～ `card-example-6.css`（作例スタイル）
  - JS ファイルなし（CSS のみで動作）

## コンポーネント設計

- 共通の `Card` プリミティブは**作らない**
- 各 Story が完結した JSX を返す「作例集」として移植する
- `Card.stories.tsx` のみが成果物。`Card.tsx` は存在しない
- HTML 版の各作例の構造・マークアップを忠実に再現する

### コンポーネント API に入れないもの

- 再利用可能な Card primitives（`Card`, `CardImage`, `CardMain` など）
- 汎用カードレイアウトの抽象化

## ファイル構成

```
src/components/Card/
├── Card.stories.tsx          # 6つの作例 Story（唯一の成果物）
├── assets/                   # HTML参照リポジトリから取得した写真
│   ├── card-2.jpg
│   ├── card-3-1.png
│   ├── card-3-2.png
│   ├── card-4.jpg
│   ├── card-5.jpg
│   └── card-6.jpg
├── component-spec.md
└── index.ts                  # 空 or re-export（公開 API なし）
```

## Story 構成

| HTML ファイル | export 名 | 表示名 |
|---|---|---|
| `example-1.html` | `Example1` | カード作例 1 |
| `example-2.html` | `Example2` | カード作例 2 |
| `example-3.html` | `Example3` | カード作例 3 |
| `example-4.html` | `Example4` | カード作例 4 |
| `example-5.html` | `Example5` | カード作例 5 |
| `example-6.html` | `Example6` | カード作例 6 |

- `Playground` Story なし（作例が Story そのもの）
- autodocs ページに各作例の説明を記載（HTML 版の `.mdx` に対応）

### Story 内のコンポーネント使用方針

- Ex 1: `<a>` 要素をラッパーとして使用（全体リンク）
- Ex 2: `Button` コンポーネントは使用せず。縦三点リーダーは生 `<button>`
- Ex 3: プロジェクトの `Button` コンポーネントを使用（outline/sm）
- Ex 4: プロジェクトの `Button` コンポーネントを使用（outline/sm, solid-fill/sm）
- Ex 5: 生 `<button>` + Tailwind 直書き（シアン系カラーのため）
- Ex 6: プロジェクトの `Checkbox` コンポーネントを使用（size="sm"）

### 技術的な考慮事項

- **subgrid**（Ex 3）: Tailwind 任意値 `[grid-template-rows:subgrid]` で表現
- **`label::before` クリック拡張**（Ex 6）: Real DOM `<span aria-hidden="true" className="absolute inset-0 z-[1]">` に置換
- **画像**: HTML 参照リポジトリからダウンロードし `assets/` に配置

## テスト方針

- テストなし
- JS ロジックなし・カスタム要素なし・CSS のみで動作するため `write-tests` スキルの skip 条件に該当

## HTML 版との意図的な差異

| 差異 | 理由 |
|---|---|
| `label::before` を `<span aria-hidden="true">` に置換（Ex 6） | Tailwind の `before:` よりも実 DOM の方が明示的で可読性が高い |
| Ex 5 のボタンを生 `<button>` + Tailwind 直書きに変更 | `Button` コンポーネントが CSS 変数によるカラーオーバーライドをサポートしていないため |
| Ex 2/4 の縦三点リーダーボタンはスタイルを Tailwind で再現 | BEM クラス名を使わず Tailwind トークンで同等のスタイルを適用 |
