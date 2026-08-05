# SearchBox 移植計画

## HTML reference

- Source: https://github.com/digital-go-jp/design-system-example-components-html/tree/main/src/components/search-box
- 関連ファイル:
  - `search-box.mdx` / `search-box.css` / `playground.html` / `with-detail.html`
  - `search-box.stories.ts` (Storybook)
  - `search-box.vrt.js`（リセット CSS VRT）
  - `search-box.test.js` / `search-box.js` — 存在しない（動的ふるまいなし）

## コンポーネント設計

### 公開サブコンポーネントと props

| コンポーネント | 要素 | props |
|---|---|---|
| `SearchBox` | `div` | `size?: 'lg' \| 'md' \| 'sm'`（default: `'lg'`）、`...ComponentProps<'div'>` |
| `SearchBoxFields` | `div` | `...ComponentProps<'div'>` |
| `SearchBoxSelect` | `label` (wrapper) | `label: string`、`children`（`<option>`）、`<select>` が受け付けるすべての props |
| `SearchBoxInput` | `label` (wrapper) | `label: string` と `aria-labelledby: string` が排他的必須、`<input>` が受け付けるすべての props |
| `SearchBoxSubmit` | `Button`（`button`） | `Button` が受け付けるすべての props。`variant` 省略時は `'solid-fill'` |
| `SearchBoxDetail` | `details` | `summary: string`、`children`、`...ComponentProps<'details'>` |
| `SearchBoxDetailActions` | `div` | `...ComponentProps<'div'>` |

### `data-*` 属性

- `SearchBox` に `data-size` を付与（`lg` / `md` / `sm`）
- `sm` サイズ時: `SearchBoxSelect` のラベル `<span>` を visually-hidden にする（CSS で制御）
- `md` / `sm` サイズ時: select・input の padding を縮小（CSS で制御）

### 使用例

```tsx
<SearchBox size="lg">
  <SearchBoxFields>
    <SearchBoxSelect label="検索対象" name="scope">
      <option value="">すべて</option>
    </SearchBoxSelect>
    <SearchBoxInput label="検索" type="search" name="q" />
  </SearchBoxFields>
  <SearchBoxDetail summary="詳細検索">
    {/* 消費者のフィルタ内容 */}
    <SearchBoxDetailActions>
      <Button variant="solid-fill" size="lg" className="w-full md:w-fit md:min-w-[50%]">検索</Button>
      <Button variant="text" size="sm">検索条件をクリア</Button>
    </SearchBoxDetailActions>
  </SearchBoxDetail>
  <SearchBoxSubmit size="lg">検索</SearchBoxSubmit>
</SearchBox>
```

### コンポーネント API に入れないもの

- chevron アイコン（`SearchBoxSelect` 内部に bake in）
- 検索アイコン（`SearchBoxInput` 内部に bake in）
- `SearchBoxDetailSummary` / `SearchBoxDetailContent` — `SearchBoxDetail` の `summary` prop と `children` で代替
- `SearchBoxDetailActions` 内の submit ボタン幅 — コンシューマーが `w-full md:w-fit md:min-w-[50%]` を Button に渡す

### `SearchBoxSubmit` について（HTML版との意図的な差異）

- HTML版では `.dads-search-box > .dads-button` というクラスセレクタで直接の子である submit ボタンを特定し、`grid-area: submit` / `cursor: pointer` / 詳細パネルが開いているときの非表示化を CSS で行っている。
- React 版で `<Button>` を `SearchBox` の直接の子として素朴に配置し、`[&>button]` のようなタグセレクタでスタイルを当てる実装は、`SearchBox` の直接の子に別の `<button>`（クリアボタン等）が置かれた場合に誤って `grid-area: submit` や非表示化が適用されてしまう問題があった。
- そのため `SearchBoxSubmit` という専用コンポーネントを用意し、`Button` をラップして `[grid-area:submit]` 等のレイアウト用クラスをコンポーネント自身に閉じ込める設計にした。これにより「`SearchBox` の直接の子である `<button>` すべて」ではなく「`SearchBoxSubmit` として明示的に配置された1つのボタン」だけが対象になる。
- **例外的にコンポーネント間参照ルールを緩和**: `component-rules` の「コンポーネント間の相互参照禁止」に対する意図的な例外。`SearchBoxSubmit` は `Button` を直接 import して使役する。理由は次の2点：
  1. 常に `<button>` 要素であることを型・実装レベルで保証できる（任意の要素を子に取る素通しラッパーにはできない）
  2. `Button` の `variant` / `size` など既存の props と `className` によるスタイル上書きをそのまま利用者に提供できる
- `variant` を省略した場合のデフォルトは `'solid-fill'`（HTML版の `data-type="solid-fill"` に対応）

## ファイル構成

- `SearchBox.tsx` — 全サブコンポーネントをここに実装。Tailwind クラスは JSX に直書き
- `search-box.css` — `appearance: base-select` 対応スタイル（オプション。`SearchBox.tsx` からは自動インポートせず、必要な利用者側 or Story から明示的に import する）
- `index.ts` — 公開 exports

## Story 構成

| export 名 | 内容 |
|---|---|
| `Playground` | `size`（radio: `lg` / `md` / `sm`）+ `hasOption`（boolean）の args |
| `WithDetail` | `with-detail.html` 相当 |

- autodocs ページに記載する項目:
  - コンポーネント概要・使い方
  - `data-size` バリエーション仕様表
  - `search-box.css` のオプションインポートについて（`appearance: base-select` 対応ブラウザでのセレクト外観カスタマイズ）
  - `SearchBoxDetailActions` 内ボタンへの幅クラス適用例
  - アクセシビリティガイド（`label` prop / `aria-labelledby` の使い分け）

## テスト方針

- テストなし
- 理由: Custom Element JS なし、動的ふるまいなし、分離した hook / util なし

## HTML 版との意図的な差異

- **`search-box.css` は任意インポート**: `appearance: base-select`・`::picker-icon`・`::picker(select)`・`option::checkmark` 等のスタイルは Tailwind で表現できないため CSS ファイルに分離。ただしなくても動作する（プログレッシブエンハンスメント）
- **`SearchBoxDetailActions` の submit ボタン幅はコンシューマー責務**: React の `Button` は `data-type` をDOMに持たないため、CSS の親セレクタ（`.dads-search-box__detail-actions .dads-button[data-type="solid-fill"]`）を再現できない。コンシューマーが `w-full md:w-fit md:min-w-[50%]` を Button に渡す
- **`SearchBoxDetailSummary` / `SearchBoxDetailContent` を省略**: pass-through ラッパー排除。`SearchBoxDetail` の `summary` prop と `children` で代替
- **`SearchBoxInput` の `label` / `aria-labelledby` は排他的必須**: 画面上の見出し等を `aria-labelledby` で参照するパターンと、visually-hidden な `label` を使うパターンのどちらか一方を型レベルで強制するため
- **`SearchBoxSubmit` は `Button` をラップした専用コンポーネント**: 詳細は上記「`SearchBoxSubmit` について」を参照
