# StepNavigation 移植計画

## HTML reference

- Source: https://github.com/digital-go-jp/design-system-example-components-html/tree/main/src/components/step-navigation
- 関連ファイル:
  - `step-navigation.mdx` / `step-navigation.css`
  - `step-navigation.stories.ts` (Storybook)
  - `playground-single.html` / `playground-full.html`
  - `step-navigation.vrt.js`（リセット CSS VRT のみ）
  - `step-navigation.test.js` / `step-navigation.unit.js` — 存在しない

## コンポーネント設計

### 公開する構成要素

| コンポーネント | 要素 | 備考 |
| --- | --- | --- |
| `StepNavigation` | `div`（`asChild` で `nav` に切り替え可） | `data-orientation`, `data-size` を持つ root。`nav` として使う場合は `asChild` + `aria-label` |
| `StepNavigationList` | `ul` | ステップ一覧のラッパー |
| `StepNavigationStep` | `li` | `data-state`, `data-first`, `data-last`, `aria-current` を持つ |
| `StepNavigationStepHeader` | `span`（`asChild` で `a`/`button` に切り替え可） | sr-only「ステップ」テキストを自動挿入。`asChild={true}` のとき `data-interactive` を自動付与 |
| `StepNavigationNumber` | `span` | 番号の丸。状態・サイズに応じたスタイルを持つ |
| `StepNavigationStateIndicator` | `span` | 完了/編集中/エラーの状態アイコン+ラベル。`state` props（`StepNavigationStep` と同じ値）に応じて表示内容を条件分岐する（アイコン・ラベルはコンポーネント内蔵で固定） |
| `StepNavigationTitle` | `span` | ステップタイトル。向き・サイズ依存のスタイルを持つ |
| `StepNavigationDescription` | `p` | ステップ説明文。向き・サイズ依存のスタイルを持つ |

### props 詳細

**`StepNavigation`**
- `orientation?: 'horizontal' | 'vertical'` — デフォルト `'horizontal'`（`data-orientation` に渡す）
- `size?: 'normal' | 'small'` — デフォルト `'normal'`（`data-size` に渡す）
- `asChild?: boolean` — `true` で `nav` 等に切り替え
- `...ComponentProps<'div'>`

**`StepNavigationStep`**
- `state?: 'reached' | 'completed' | 'editing' | 'error' | 'skipped'` — `data-state` に渡す
- `first?: boolean` — `data-first` 付与
- `last?: boolean` — `data-last` 付与
- `...ComponentProps<'li'>`（`aria-current` は消費者が直接渡す）

**`StepNavigationStepHeader`**
- `asChild?: boolean`
- `...ComponentProps<'span'>`

**その他**
- `StepNavigationList`, `StepNavigationNumber`, `StepNavigationTitle`, `StepNavigationDescription` は `ComponentProps<各要素>` のみ
- `StepNavigationStateIndicator` は `state?: StepNavigationStepState` （`StepNavigationStep` と同じ型）+ `ComponentProps<'span'>`

### `data-*` 属性と役割

| 属性 | 配置先 | 役割 |
| --- | --- | --- |
| `data-orientation` | `StepNavigation` root | `horizontal`/`vertical` の向き切り替え |
| `data-size` | `StepNavigation` root | `normal`/`small` のサイズ切り替え |
| `data-state` | `StepNavigationStep` | ステップ状態（`reached`, `completed`, `editing`, `error`, `skipped`） |
| `data-first` | `StepNavigationStep` | 最初のステップ（上/左コネクターを非表示） |
| `data-last` | `StepNavigationStep` | 最後のステップ（下/右コネクターを非表示） |
| `data-interactive` | `StepNavigationStepHeader` | `asChild={true}` のとき自動付与。underline とホバー効果の CSS トリガー |

### グループ名

- `StepNavigation` root: `group/step-nav`
- `StepNavigationStep`: `group/step`
- `StepNavigationStepHeader`: `group/step-header`

### コンポーネント API に入れないもの

- **ステップ幅の計算**：`--step-width` / `--step-min-width` は消費者が `style` prop で直接設定
- `StepNavigationStateLabel`（「編集中」「エラー」のラベルテキスト）：コンポーネント化せず。消費者が sr-only または visible `<span>` を渡す

## ファイル構成

- `StepNavigation.tsx` — 全サブコンポーネントを一ファイルに。Tailwind クラスは JSX に直書き
- `StepNavigation.stories.tsx`
- `index.ts`
- CSS ファイルなし（擬似要素・サイズ計算はすべて Tailwind の `before:`/`after:` variant と `[[attr]_&]` arbitrary variant で表現）

## スタイリング方針(Tailwind-only + CSS カスタムプロパティ)

HTML 版は `data-size` に応じて `--_number-size` / `--_number-margin` / `--_outline-width` / `--_title-margin` / `--_description-margin` を root で定義し、子要素はそれらの `var()` を参照して位置・余白を計算していた。React 版でも同じ構造を踏襲し、`StepNavigation` root の `style` に以下のカスタムプロパティを `size` に応じて設定する:

| カスタムプロパティ | normal | small | 用途 |
| --- | --- | --- | --- |
| `--step-number-size` | `calc(44/16*1rem)` | `calc(32/16*1rem)` | `StepNavigationNumber` の `height`/`min-width`、コネクター位置、タイトル/説明文の計算に使用 |
| `--step-number-margin` | `calc(4/16*1rem)` | `calc(3/16*1rem)` | `StepNavigationNumber` の `margin`、同上の計算に使用 |
| `--step-outline-width` | `calc(2/16*1rem)` | `calc(1/16*1rem)` | 現在ステップの outline 幅 |
| `--step-title-margin` | `calc(24/16*1rem)` | `calc(16/16*1rem)` | 横向きレイアウトでの `StepNavigationTitle` の `margin-top` |
| `--step-description-margin` | `calc(8/16*1rem)` | `calc(4/16*1rem)` | `StepNavigationDescription` の基準 `margin-top` |

コネクターライン(疑似要素の代わりに `span`)・`StepNavigationNumber`・`StepNavigationTitle`・`StepNavigationDescription` はこれらの `var()` を Tailwind の arbitrary value 内で参照し、`[[data-size=...]_&]` による重複した固定値の出し分けを行わない。border-width や font-size など、HTML 版でもカスタムプロパティ化されていない値は従来通り `[[data-size=small]_&]:` variant で出し分ける。

計算式の対応(HTML 版 CSS と同一):
- connector `top`/`left`: `calc(var(--step-number-size)/2 + var(--step-number-margin))`
- title `py`(vertical): `calc(var(--step-number-size)/2 + var(--step-number-margin) - 0.875rem)`
- description `pl`(vertical): `calc(var(--step-number-size) + var(--step-number-margin)*2 + 1rem)`
- description `mt`(vertical, 基準値からの補正): `calc(var(--step-description-margin) - (var(--step-number-size)/2 + var(--step-number-margin) - 0.875rem))`

## Story 構成

| export 名 | 表示名 | 対応 HTML |
| --- | --- | --- |
| `PlaygroundSingle` | `Playground (Single)` | `playground-single.html` |
| `PlaygroundFull` | `Playground (Full)` | `playground-full.html` |

`PlaygroundSingle`：単一ステップを表示。Controls で `state`, `first`, `last`, `current`, `interaction`（none/link/button）, `title`, `description` を切り替えられる。

`PlaygroundFull`：複数ステップを表示。Controls で `orientation`, `size`, `steps`, `numberOnly`, `stepWidth`, `stepMinWidth` を切り替えられる。

autodocs ページに記載する項目：
- コンポーネント概要・`data-*` 仕様表
- ステップ状態一覧表
- 状態アイコン・`StepNavigationStateIndicator` の表示内容と使い方
- アクセシビリティ（`aria-current`, sr-only 進捗テキスト）

## テスト方針

- **テストなし**
- 理由: HTML 版に `test.js` も `unit.js` も存在しない。JS Custom Element なし（振る舞いロジックがない）。`vrt.js` はリセット CSS の VRT のみで React 版には該当しない。純粋な CSS/HTML 構造コンポーネントのため、`write-tests` スキルの skip 基準に該当する

## HTML 版との意図的な差異

| 差異 | 理由 |
| --- | --- |
| `data-interactive` 属性でホバー・underline 効果を制御 | HTML 版の `:any-link` / `:enabled` セレクターを React で再現するため。`asChild` を使うと実際の要素型が不明になるため、`asChild={true}` を proxy として使用 |
| ステップ幅カスタム変数を `--step-width` / `--step-min-width` に改名 | HTML 版は `--_step-width` / `--_step-min-width`(`_` プレフィックス)だが、Tailwind の arbitrary value 内でアンダースコアが空白に変換されるため、アンダースコアなしの名前に変更 |
| その他のカスタムプロパティ(`--_number-size` 等)も同様に `_` プレフィックスを外し `--step-number-size` 等に改名 | 同上の理由。値・用途は HTML 版と同一 |
| 状態アイコン・ラベル(完了チェックマーク、編集中鉛筆、エラー三角、「編集中」「エラー」ラベル)をコンポーネント内蔵の `StepNavigationStateIndicator` として提供 | 状態は `reached`/`completed`/`editing`/`error`/`skipped` の固定5種類で、アイコン・ラベルも常に同じものしか使わないため、消費者が都度アイコンを用意・出し分けする必要がない。`state` props(`StepNavigationStep` と同じ値)に応じてコンポーネント内部で条件分岐し、該当する状態のときだけアイコン・ラベル・sr-onlyテキストを描画する |
| コネクターライン(接続線)を CSS 疑似要素(`::before`/`::after`)ではなく、実体の `<span>`(装飾用途のため `aria-hidden="true"` 付与)で表現 | HTML 版は `::before`/`::after` で1本ずつ(水平/垂直で位置指定を出し分け)実装しているが、React 版で同じ構成を Tailwind の `before:`/`after:` variant + `group-data-[orientation=...]` の組み合わせで再現すると、1つの疑似要素に対して水平・垂直それぞれの位置指定クラスを大量に付与する必要があり、クラス名が膨らみ可読性が下がる。`<span>` を向きごとに用意し `hidden`/`block` で出し分けることで、各 `span` のクラス名をシンプルに保てるため、意図的にこの実装を採用している |
| `aria-current="false"` のときは `data-current` を付与しない(HTML 版 CSS の `[aria-current]` は値を問わず属性の存在のみで判定) | 実運用では `aria-current` は現在のステップにのみ `"true"` を設定する想定であり(本コンポーネントのドキュメント・Story も同様)、`"false"` を明示的に current 表示するのは意味的に不適切なため、値を判定してから `data-current` を付与するようにしている |
| `StepNavigationStepHeader` の `asChild` で、子要素が `disabled` な `<button>` の場合は `data-interactive` を付与しない | HTML 版 CSS は `:enabled` セレクターで無効化されたフォームコントロールにはホバー・下線効果を適用しない。React 版でも同じ挙動を再現するため、`asChild` の子要素の `disabled` プロパティを見て `data-interactive` の付与を制御している |
