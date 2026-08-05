# ResourceList 移植計画

## HTML reference

- Source: https://github.com/digital-go-jp/design-system-example-components-html/tree/main/src/components/resource-list
- 関連ファイル:
  - `resource-list.mdx` / `resource-list.css`
  - `resource-list.stories.ts` (Storybook)
  - `playground.html` / `with-control.html` / `multiple-items.html`
  - `resource-list.vrt.js`（リセット CSS VRT）
  - `resource-list.html` / `resource-list.js` — 存在しない（404）。カスタム要素なし、純 CSS コンポーネント

## コンポーネント設計

### 公開する構成要素

| コンポーネント | 要素 | 役割 |
|---|---|---|
| `ResourceList` | `div` | ルート。`data-style` / `data-interaction` を保持 |
| `ResourceListBody` | `div` / 任意 | ボディ。`asChild` prop で任意要素（`<a>` 等）に差し替え可能 |
| `ResourceListControl` | `label` | Checkbox/Radio のレイアウト調整ラッパー。`label` 化により、パディング領域を含めたクリック/タップ範囲を拡大する |
| `ResourceListContents` | `div` | タイトル・ラベル・サポートテキストのコンテナ |
| `ResourceListTitle` | `h2`–`h6` / `p` | タイトル。`as` prop（必須）で要素変更 |
| `ResourceListLabel` | `div` | ラベルエリア（`order: -1` で視覚的に先頭） |
| `ResourceListSupport` | `div` | サポートテキストコンテナ |
| `ResourceListSub` | `div` | サブラベル（右端、`flex-shrink: 0`） |
| `ResourceListAction` | `div` | アクションエリア（`align-self: stretch`） |
| `ResourceListActionButton` | `button` | アクションボタン（幅44px、高さ100%） |

### props

#### `ResourceList`
- `variant: 'list' | 'frame'` — 必須。`data-style` にバインド
- `interaction?: 'whole'` — 任意。`data-interaction` にバインド
- `+ ComponentProps<'div'>`

#### `ResourceListBody`
- `asChild?: boolean` — `true` のとき唯一の子要素の型でレンダリング（Slot パターン）。行全体リンク化に使用
- `+ ComponentProps<'div'>`（`asChild=false` 時）

#### `ResourceListControl`
- `+ ComponentProps<'label'>`
- `htmlFor` は指定せず、内側にネストされた `Checkbox`/`Radio` の `<input>` との暗黙的なラベル関連付けに任せる（クリック範囲拡大が目的）

#### `ResourceListContents`
- `+ ComponentProps<'div'>`

#### `ResourceListTitle`
- `as: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'` — 必須（デフォルトなし）
- `+ ComponentProps<'h2'>`（as に関わらず `h2` の props ベース）

#### `ResourceListLabel` / `ResourceListSupport` / `ResourceListSub`
- `+ ComponentProps<'div'>`

#### `ResourceListAction`
- `+ ComponentProps<'div'>`

#### `ResourceListActionButton`
- `+ ComponentProps<'button'>`

### `data-*` 属性とその役割

- `data-style="list"` — 下ボーダーのみ
- `data-style="frame"` — 全ボーダー + border-radius
- `data-interaction="whole"` — チェックボックス/ラジオ付きで行全体をクリック可能にする（タイトル `<label>` に `::before` 擬似要素を展開）

### CSS 制御の挙動（`data-*` + `:has()`）

- `:has(:checked:enabled)` → 選択時の背景色（`key-50`）
- `[data-interaction="whole"]:has(:disabled)` → 無効時の背景色・文字色
- ボーダー色は `--_border-color` カスタムプロパティで一元管理する
  - 初期値: `solid-gray-420`
  - `:has(:checked:enabled)` → `solid-gray-500`
  - `:has(:disabled)` → `solid-gray-300`
  - `:checked` と `:disabled` は排他的にしか発生しないため、list/frame 個別の直接指定は不要
- `ResourceList` の `:has(:disabled)` はネイティブ `disabled` 属性を前提とする。`ResourceListControl` 内の `Checkbox`/`Radio` を無効化する場合はネイティブ `disabled` 属性を使用する（`Checkbox`/`Radio` は `disabled` / `aria-disabled` の両方に対応している）

### `ResourceListControl` のレイアウト

HTML 参照の CSS が `.dads-resource-list__body .dads-checkbox` に適用する:
```css
align-self: stretch;
margin: -1rem -1rem; margin-right: 0;
padding: 1rem 1rem; padding-right: 0;
align-items: center;
```
React 版では BEM クラス名が存在しないため、`ResourceListControl` ラッパーがこれらのクラスを保有する。

`ResourceListControl` は `label` 要素として実装し、パディング領域を含めた範囲をクリック／タップ可能にする。`htmlFor` は指定せず、内側にネストされた `Checkbox`/`Radio` の `<input>` との暗黙的なラベル関連付けに任せる。

### コンポーネント API に**入れない**もの

- プレースホルダーアイコン（フロントアイコン、アクションボタンアイコン）— Story が raw `<svg>` を直接配置
- `<ul>` / `<li>` ラッパー — ResourceList は1アイテム単位のコンポーネント。リストとしての `<ul>` 構造は消費者が構築する
- `<span>` body バリアント — `multiple-items.html` の一部例で使われているが HTML 的に無効（div inside span）のため省略

## ファイル構成

- `ResourceList.tsx` — 全サブコンポーネントをこの1ファイルに収める（Tailwind クラスは JSX に直書き）
- `index.ts` — 公開エクスポート

## Story 構成

| HTML ファイル | export 名 | 表示名 |
|---|---|---|
| `playground.html` | `Playground` | `Playground (プレーン)` |
| `with-control.html` | `WithControl` | `Playground (コントロール付き)` |
| `multiple-items.html` | `MultipleItems` | `複数アイテム` |

- autodocs ページ: 仕様表（`data-style`/`data-interaction`）、コンポーネント構成表、`ResourceListBody asChild` の使い方、`ResourceListControl` の使い方

## テスト方針

- **テストなし** — カスタム要素 JS が存在せず、全挙動が CSS（`:has()`・`data-*`）で完結。ロジック分離なし。

## HTML 版との意図的な差異

- `<span>` body バリアントは省略（HTML 的に div-in-span が無効であるため）
- `ResourceListBodyLink` を廃止し `ResourceListBody` の `asChild` prop に統合。Button / UtilityLink / Link と同一の Slot パターン
- `ResourceListTitle` の `as` を必須化。コントロール付きでは `as='p'` への変更を型レベルで強制
- Root に `group/resource-list` を付与し、`ResourceListTitle` の label `::before` 擬似要素スタイルを `group-data-[interaction=whole]/resource-list:` パターンへ移行（skill 準拠）
- `multiple-items.html` の支払い例における `data-interaction="whole"` の `<label>` への付与は HTML 参照のミスと判断（CSS セレクターはルート要素を対象とする）— React 版では `data-interaction` はルートの `ResourceList` にのみ設定する
- `<ul>`/`<li>` ラッパーはコンポーネントに含めない — 消費者が自由にリスト構造を構築できるよう
- `ResourceListControl` は HTML 参照の BEM クラス（`div`）ではなく `label` 要素として実装し、パディング領域を含めたクリック範囲を確保する

## チェックリスト照合

- `data-style` の list/frame バリエーション: CSS で制御（Tailwind `data-[style=list]:*` / `data-[style=frame]:*`）
- `:has(:checked:enabled)` 選択状態: Tailwind `has-[:checked:enabled]:*`
- `:has(:disabled)` 無効状態: Tailwind `has-[:disabled]:*`
- focus-visible スタイル: 既存コンポーネント（MenuList）のパターンに合わせる
- `prefers-reduced-motion` / `forced-colors`: なし（HTML 参照の CSS にも記述なし）
