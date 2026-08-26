# PageNavigation 移植計画

## HTML reference

- Source: https://github.com/digital-go-jp/design-system-example-components-html/tree/main/src/components/page-navigation
- 関連ファイル:
  - `page-navigation.mdx` / `page-navigation.css`
  - `page-navigation.stories.ts`（Storybook）
  - `text-button.html` / `outlined-button.html` / `arrow-button.html`
  - `page-navigation.vrt.js`（リセット CSS VRT のみ）
  - JS ファイルなし（Custom Element・振る舞いロジックなし）
- 参考（依存スタイルの読み取り用、React 版では import しない）：`../button/button.css`

## コンポーネント設計

HTML 版は3つの見た目バリエーション（テキスト型・アウトライン型・矢印型）を持つが、いずれも「前/次ページへの操作」+「現在ページ表示」という同じ構造。

テキスト型・アウトライン型は既存の `Button` コンポーネントと見た目が完全に共通のため、**例外的に `Button` を import して利用する**（ユーザー承認済み。`SearchBox.tsx` の `SearchBoxSubmit` と同じラップ方式に倣う）。矢印型（円形ボタン）は `Button` にない見た目のため自前で実装する。

### 公開する構成要素

| コンポーネント | 要素 | 備考 |
| --- | --- | --- |
| `PageNavigation` | `nav` | ルート。レイアウト（flex, gap）と文字色/書体のみ |
| `PageNavigationCounter` | `span` | 現在ページ表示（例: `5 / 9`）。children をそのまま表示 |
| `PageNavigationButton` | `Button` を wrap | テキスト型・アウトライン型共用。`asChild` で `a` に切り替え可 |
| `PageNavigationArrowButton` | `button` | 矢印型（円形ボタン）。`asChild` で `a` に切り替え可 |

### props

**`PageNavigation`**
- `...ComponentProps<'nav'>`。`aria-label` は消費者が指定する運用（型では強制しない）

**`PageNavigationCounter`**
- `...ComponentProps<'span'>`。ページ数のフォーマット（`toLocaleString` 等）は消費者側の責務

**`PageNavigationButton`**
- `control: 'prev' | 'next'` — アイコンとは反対側の padding を上書きするための指定（見た目調整専用。表示順序は children の並びで消費者が制御する）
- `...ButtonProps`（`variant`, `size`, `asChild` を含む。`Button` の型をそのまま再利用）

**`PageNavigationArrowButton`**
- `size: 'lg' | 'md' | 'sm' | 'xs'`
- `label: string` — スクリーンリーダー向けテキスト（例: `前のページ`）。内部で `<span className="sr-only">{label}</span>` を自動描画する。`Carousel` の矢印ボタンや `StepNavigation` の状態ラベルと同じ「アクセシビリティテキストを必須 prop で強制」パターン
- `asChild?: boolean`
- `...ComponentProps<'button'>`

### `data-*` 属性

| 属性 | 配置先 | 役割 |
| --- | --- | --- |
| `data-control` | `PageNavigationButton` root（`Button` に渡る） | `prev`/`next`。Tailwind の属性 variant（`data-[control=prev]:pl-2` 等）のセレクターとして使い、片側 padding を上書きする |

グループ名は使用しない（子要素へ状態を伝播する構造がないため `group/...` は不要）。

### コンポーネント API に入れないもの

- **アイコン SVG**：前後の矢印アイコンはコンポーネント化しない。Story が生の `<svg>` に必要なクラスを付与して描画する。必要なクラスは `PageNavigation.mdx` に一覧化する
- **ページ数に応じた表示制御ロジック**（1ページのとき非表示／最初・最後のページでボタンを片方省略）：消費者側の render 分岐であり、コンポーネントの props/ロジックにしない
- **カウンターのページ数フォーマット**（`toLocaleString` 等）：`PageNavigationCounter` は children をそのまま表示するだけ

## ファイル構成

- `PageNavigation.tsx` — 4つのサブコンポーネントを1ファイルに。`PageNavigationButton` は `../Button` から `Button` / `ButtonProps` / `ButtonVariant` を import する（例外的にコンポーネント間 import を許可）
- `PageNavigation.stories.tsx`
- `PageNavigation.mdx`
- `index.ts`
- CSS ファイルなし（`PageNavigationArrowButton` のタップ領域拡張は `Button` の sm/xs パターンと同じ `after:` variant で表現）

## スタイリング方針

- ルート `nav`：`flex items-center gap-4 text-oln-16N-100 text-solid-gray-800`
- `PageNavigationCounter`：`min-w-[3.75rem] text-oln-16N-100 text-solid-gray-900 text-center whitespace-nowrap`（`min-width: 60px` は Tailwind 標準スケールに該当値がないため arbitrary value）
- `PageNavigationButton`：`Button` をそのまま wrap し、`data-control` + Tailwind の属性 variant で片側 padding を上書きする
  - 素の `pl-2` 等のユーティリティは `Button` 自身の `px-4` と同じ詳細度のため、生成順序次第で上書きが効かない懸念がある。`data-[control=prev]:pl-2` は複合セレクタになり詳細度が高くなるため、順序に関係なく確実に優先される
  - `text` + `prev`: `data-[control=prev]:pl-2` / `text` + `next`: `data-[control=next]:pr-2`
  - `outline` + `prev`: `data-[control=prev]:pr-6` / `outline` + `next`: `data-[control=next]:pl-6`
  - `solid-fill` 等、他の `variant` では上書きなし（HTML 版に定義がないため）
- `PageNavigationArrowButton`：円形。共通スタイル（`rounded-full border bg-white text-key-1000 hover:bg-key-200 active:bg-key-300 active:text-key-1200` + 既存コンポーネントと同じ `focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:ring-*` パターン）+ サイズ別の寸法・タップ領域拡張（`after:` 疑似要素、`Button` の sm/xs と同じ考え方）+ ホバー時のボーダー太さ（lg/md は 3px、sm/xs は 2px）
- `prefers-reduced-motion` / `forced-colors`：HTML 版の `page-navigation.css` に記載がないため、React 版でも追加しない

## Story 構成

HTML 版は Controls で `element: button/link` を切り替える構成だが、React 版では `button`/`a` をそれぞれ別 Story に分離する（`Button.stories.tsx` の `AllButtons`/`LinkButtons` に倣う。1つの `render` 内で分岐すると JSX が丸ごと重複するため）。

| export 名 | 表示名 | 対応 HTML |
| --- | --- | --- |
| `Text` | テキスト型（button） | `text-button.html` |
| `TextLink` | テキスト型（a） | `text-button.html` |
| `Outlined` | アウトライン型（button） | `outlined-button.html` |
| `OutlinedLink` | アウトライン型（a） | `outlined-button.html` |
| `Arrow` | 矢印型（button） | `arrow-button.html` |
| `ArrowLink` | 矢印型（a） | `arrow-button.html` |

- `Text`/`Outlined`：`PageNavigationButton` に `variant="text" size="md"`/`variant="outline" size="lg"`（HTML 版と同じ組み合わせ）+ `control="prev"/"next"` + アイコン + ラベルテキストを渡す。`*Link` は同じ組み合わせで `asChild` + `<a>` に切り替えた版
- `Arrow`/`ArrowLink`：`PageNavigationArrowButton` の `size` を Controls で切り替え可能にする
- HTML 版の Controls にある `currentPage`, `totalPages` は各 Story の `args`/`render` で再現し、「1ページ時は非表示」「最初/最後のページでボタン片方省略」の表示制御を行う
- `Playground` は用意しない：3バリエーションで使用するサブコンポーネント自体が異なるため単一 Story での `type` 切り替えは分岐が過度に複雑になる（`Carousel` の前例に倣う）。各バリエーションの Story が個別に Controls を持つため確認の網羅性は損なわれない

`PageNavigation.mdx` に載せる項目：
- コンポーネント概要・構成要素の役割
- `data-control` の仕様表
- アイコン SVG に必要なクラス一覧（矢印型はサイズ別の推奨アイコン寸法）
- ページ数に応じた表示制御のガイド
- アクセシビリティ（`aria-label` の付け方、矢印型の `label` prop 必須運用）

## テスト方針

- テストなし
- HTML 版に Custom Element・`test.js`・`unit.js` が存在せず振る舞いロジックが一切ない。`vrt.js` はリセット CSS の VRT のみ。純粋な CSS/HTML 構造コンポーネントのため `write-tests` スキルの skip 基準に該当する

## HTML 版との意図的な差異

| 差異 | 理由 |
| --- | --- |
| `PageNavigationButton` が `Button` コンポーネントを import して wrap している | `component-rules` は通常「コンポーネント間 import 禁止」だが、テキスト型・アウトライン型は見た目が `Button` と完全一致するためユーザー承認のうえ例外的に許可（`SearchBox.tsx` の `SearchBoxSubmit` と同じ方式） |
| `PageNavigationButton` は `Button` の `size` をそのまま受け取れる（HTML 版の実例は `text`+`md`・`outline`+`lg` のみ） | padding 上書きは `variant`/`control` の組み合わせで決まるため、他サイズを選んでも安全に動作する。`Button` を wrap する以上 `size` を制限する理由がない |
| ページ数に応じた表示制御（1ページ非表示・最初/最後でボタン省略）をコンポーネント外（Story/消費者）に置く | `component-rules` の「コンポーネント本体にロジックを持たせない」に従うため。HTML 版でもこの制御はマークアップ生成側の責務としてドキュメント化されているのみ |
| `PageNavigationArrowButton` に `label: string` 必須 prop を追加し、内部で `sr-only` span を自動描画 | 矢印型は可視テキストを持たず、HTML 版のように都度手書きさせると付け忘れがアクセシビリティ上の重大な欠落になる。`Carousel`/`StepNavigation` の同種パターンに倣い prop 化してヒューマンエラーを防ぐ |
