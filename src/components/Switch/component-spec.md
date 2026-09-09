# Switch 移植計画

## HTML reference

- Source: https://github.com/digital-go-jp/design-system-example-components-html/tree/8953d144840b834752f2f7b0029eb31b8711565d/src/components/switch
- 関連ファイル:
  - `switch.mdx`
  - オン／オフ: `switch-on-off.css` / `switch-on-off.js` / `playground-on-off.html` / `with-form-control-label-on-off.html`
  - モード: `switch-mode.css` / `switch-mode.js` / `playground-mode.html` / `with-form-control-label-mode.html`
  - `switch.stories.ts`（Storybook） / `switch.test.js`（機能テスト） / `switch.vrt.js`（リセット CSS VRT）
  - `switch.unit.js` は存在しない

HTML 版には「オン／オフスイッチ」（`dads-switch-on-off`、単一の `<button role="switch">`）と「モードスイッチ」（`dads-switch-mode`、左右2つの `<button role="switch">` を持つ二択切替）の2タイプがある。両方とも Custom Element の `click` ハンドラーが `aria-checked` を書き換え、`input`/`change` イベントを発火させる。

## コンポーネント設計

### 状態管理の方針（重要な設計判断）

このプロジェクトのルール（コンポーネント本体に `useState`/`useEffect` 等のロジックを持たせない）に従い、Switch は **完全に見た目のみを担当する非制御コンポーネント群** として実装する。

- `aria-checked` の値と、それを反転させる `onClick` はすべて呼び出し側（Story／実装側）が管理する。
- これは `MenuListBox`（`aria-expanded` を呼び出し側が管理）や `Tab`（`aria-selected` を呼び出し側が管理）と同じパターン。
- スタイリングは `aria-checked:` / `disabled:` という Tailwind の組み込み aria バリアントで表現する（`group-aria-checked/switch-on-off:` のように子要素に伝播させる場合も含む）。`aria-disabled` はサポートしない（下記参照）。
- HTML 版が `click` ハンドラー内で発火させている独自の `input`/`change` イベント（カスタム要素ゆえの実装）は、React 版では移植しない。React の世界では呼び出し側が渡す `onClick` がその役割を果たすため、独自イベントの再現は不要と判断（差異として明記）。

### `SwitchOnOff`

- 単一の `<button type="button" role="switch">`。
- props: `Omit<ComponentProps<'button'>, 'aria-disabled'>`（`aria-checked`, `disabled`, `aria-describedby` などはすべて素通し。`aria-disabled` は除外する。理由は下記「HTML 版との意図的な差異」参照）。
- 内部に固定で以下を描画（呼び出し側が差し替える必要のない、デザインシステム固定のトラック・つまみ・チェックアイコン）:
  - `track`（`aria-hidden`）→ `thumb` → チェックマーク SVG（`aria-checked` 時のみ表示、`group-aria-checked/switch-on-off:block` で切替）
- ラベルは持たない。呼び出し側が `<label>` で囲む、または `Label htmlFor` で関連付ける（後述 Story 参照）。
- クリック領域拡張用の `::before` 疑似要素は `before:absolute before:-inset-y-1 before:inset-x-0 before:content-['']` 等で再現。

### `SwitchMode`（単体コンポーネント）

`SwitchMode` は「2つの選択肢からどちらか一方を選ぶ」という単一のインターフェースであり、`SwitchOnOff` と同様にコンポジションを必要としない。呼び出し側が `SwitchModeOption` / `SwitchModeControl` を組み立てる現行 API はやめ、`SwitchMode` 単体で完結させる。

- ルートは `<div>`（`isolate inline-flex items-center gap-4` 等、現行の `SwitchMode` のスタイルを踏襲）。`group/switch-mode` を持つ。
- 内部に左右2つの `<button type="button" role="switch">` と、見た目のみの `rail` + `thumb`（`aria-hidden`、現行の `SwitchModeControl` のマークアップ）を固定で描画する。DOM 順は HTML 版と同じ「左ボタン → rail/thumb → 右ボタン」。
- props（`ComponentProps<'div'>` をベースに、`onChange`・`aria-describedby` を上書き）:
  - `leftLabel: string` / `rightLabel: string`：左右のボタンの children としてそのまま描画するラベル（HTML 版の `dads-switch-mode__label` はスタイル定義の無いパススルーのため、個別コンポーネント化しない。`value`/`onChange` の値としてもそのまま使うため `ReactNode` ではなく `string` に限定する）。
  - `value: string`：現在選択中のラベル文字列（`leftLabel` か `rightLabel` のいずれかと一致する値）。左ボタンの `aria-checked` は `value === leftLabel`、右ボタンは `value === rightLabel` として内部で算出する（呼び出し側が `aria-checked` を個別に組み立てる必要はない）。
  - `onChange: (value: string) => void`：どちらのボタンを押しても選択状態がトグルする、という HTML 版の挙動に合わせ、左右どちらのボタンをクリックしても「反転後に選択されている側の `leftLabel`/`rightLabel` の値」を引数にして呼ばれる（クリックされた側のラベルではなく、反転結果のラベルを渡す）。
  - `disabled?: boolean`：両方のボタンに適用する（片方だけ無効化する運用は想定しない。disabled 状態自体が非推奨であることは HTML 版と同じ）。
  - `aria-describedby?: string`：両方のボタンに適用する（`ComponentProps<'div'>` にも存在するプロパティ名だが、ルートの `div` ではなく内部の2つの `button` に渡す点に注意。型定義でも `Omit` して用途を限定する）。
  - それ以外の `ComponentProps<'div'>`（`className`, `id` など）はルートの `div` にそのまま素通しする。
- つまみの位置は `group-has-[button:last-of-type[aria-checked=true]]/switch-mode:left-8` のように内部の `group-has-*` で表現する（現行実装を踏襲、`Carousel` `group-has-[[open]]/carousel:` に前例あり）。
- disabled 時の文字色変更は `has-[:disabled]:` をルート自身に適用する（現行実装を踏襲）。`aria-disabled` はサポートしないため対応するセレクターは持たない。
- `leftLabel` と `rightLabel` に同じ文字列を渡すと `value` との一致判定が曖昧になるため、呼び出し側は異なる文字列を渡す前提とする（バリデーションは行わない）。

### コンポーネント API に**入れない**もの

- `dads-switch-on-off__track` / `__thumb` / アイコン、`dads-switch-mode__rail` / `__thumb` の個別コンポーネント化（差し替え不要な固定パーツのため）。
- `dads-switch-mode__label` のラッパー化（スタイル定義が無いパススルーのため）。
- `SwitchModeOption` / `SwitchModeControl` の個別 export（`SwitchMode` 単体に統合するため、公開 API から削除する）。
- 独自の `input`/`change` カスタムイベントの再現（上記参照）。
- `FormControlLabel`（HTML 版が依存する `form-control-label.css`）の移植。本プロジェクトでは `Label` / `Legend` / `SupportText` / `RequirementBadge` を使った Story 側の組み立てで代替する（`Checkbox`/`Input` の Story と同じパターン）。

### 例外的にコンポジションから外れる理由（`component-rules` との整合）

このプロジェクトの原則は「コンポジションパターンを優先し、構造を props に閉じ込めない」だが、`SwitchMode` は構造が「固定の2択」以外に取り得ないため、コンポジションによる柔軟性が実質的に活かされない。`SwitchOnOff` が単一の `<button>` として最初から単体コンポーネントであるのと同じ考え方で、`SwitchMode` も単体コンポーネント化する。

## ファイル構成

- `Switch.tsx` に `SwitchOnOff` / `SwitchMode` をすべて記述（2つとも小さく、分割不要）。
- `Switch.stories.tsx`
- `Switch.mdx`
- `index.ts`

## Story 構成

HTML 版の Story（`switch.stories.ts`）に対応させる：

| HTML 版 | React 版 export | 表示名 |
|---|---|---|
| `PlaygroundOnOff` | `PlaygroundOnOff` | Playground（オン／オフ） |
| `WithFormControlLabelOnOff` | `WithFormControlLabelOnOff` | ラベル付き（オン／オフ） |
| `PlaygroundMode` | `PlaygroundMode` | Playground（モード） |
| `WithFormControlLabelMode` | `WithFormControlLabelMode` | ラベル付き（モード） |

- `PlaygroundOnOff`：`useState` で checked を管理し、`<label>` で `SwitchOnOff` とラベルテキストを直接囲む最小構成（HTML 版の「使い方」の2番目の例）。`disabled` を argType で切替可能に。
- `WithFormControlLabelOnOff`：`Label htmlFor` + `RequirementBadge` + `SupportText` + `SwitchOnOff id/aria-describedby` の組み合わせ（`Input` の Story と同じ構成）。
- `PlaygroundMode`：「左右どちらが選択されているか」を表す `useState<'left' | 'right'>` を管理し、`value` はそこから毎レンダー導出する（Storybook の Controls は既存の Story インスタンスを再レンダーするだけで再マウントはしないため、`useState(leftLabel)` の初期値だけでは `leftLabel` の編集に追従できない。選択中の側を状態として持つことで、編集後の `leftLabel` / `rightLabel` にも追従する）。`leftLabel` / `rightLabel` を argType で編集可能にする。
- `WithFormControlLabelMode`：`<fieldset><Legend>...</Legend><SupportText/></fieldset>` の中に `SwitchMode` を配置し、`aria-describedby` に `SupportText` の `id` を渡す。

`Switch.mdx` には、両タイプの仕様表（オン／オフ vs モード）、disabled 状態が非推奨である旨、ラベル関連付けの2パターンを記載する（HTML 版 mdx の該当セクションを翻案）。

## テスト方針

**テストは書かない**（ユーザーの判断による）。挙動の確認は Storybook 上での手動確認（各 Story を HTML 版と目視比較）で代替する。

## HTML 版との意図的な差異

- Custom Element の `click` ハンドラーが行っていた `aria-checked` の書き換えと `input`/`change` イベント発火を、React 版では呼び出し側の `onClick`（`SwitchOnOff`）／`onChange`（`SwitchMode`）に委譲する（コンポーネント本体に状態・ロジックを持たせないという本プロジェクトの方針のため）。
- `SwitchMode` は HTML 版の「2つの `<button role="switch">` を個別に組み立てる」構造をそのまま持ち込まず、`leftLabel` / `rightLabel` / `value` / `onChange` を受け取る単体コンポーネントとして再設計する（`component-rules` のコンポジション優先方針からの意図的な例外。理由は上記「例外的にコンポジションから外れる理由」を参照）。
- `form-control-label.css` に依存する「ラベル付き」構成は、既存の `Label` / `Legend` / `SupportText` / `RequirementBadge` コンポーネントを組み合わせて再現する（`FormControlLabel` 自体は移植しない）。
- `aria-disabled` による無効化はサポートしない。HTML 版はカスタム要素の `click` ハンドラー内で `disabled` と `aria-disabled="true"` の両方をチェックしてトグルをブロックしているが、React 版は `onClick` を呼び出し側に委譲する非制御コンポーネントであり、コンポーネント側でクリックをブロックする仕組みを持たない。`Button`/`Checkbox`/`Radio` のように `aria-disabled`時は `onClick` を `preventDefault` に差し替えるガードを導入する選択肢もあったが、Switch では採用しないと判断し、`SwitchOnOff` の props からも `aria-disabled` を `Omit` する。無効化が必要な場合はネイティブの `disabled` のみを使う。
