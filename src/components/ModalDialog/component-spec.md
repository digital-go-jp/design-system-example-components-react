# ModalDialog 移植計画

## HTML reference

- Source: https://github.com/digital-go-jp/design-system-example-components-html-internal/tree/modal-dialog/src/components/modal-dialog
- PR: digital-go-jp/design-system-example-components-html-internal#140
- 関連ファイル:
  - `modal-dialog.mdx` / `playground.html` / `modal-dialog.css` / `modal-dialog.stories.ts`
  - `inner-scroll.html` / `inner-scroll-with-fixed-header.html` / `inner-scroll-with-fixed-actions.html` / `inner-scroll-with-fixed-both.html` / `fixed-width.html`
  - `modal-dialog.vrt.js`（VRT） / テストファイルなし

## コンポーネント設計

### 公開する構成要素

| コンポーネント | 対応要素 | 備考 |
|---|---|---|
| `ModalDialog` | `<dialog>` | `scroll`, `width` prop を持つ |
| `ModalDialogContent` | `<div>` (`__dialog`) | 内側コンテナ |
| `ModalDialogHeader` | `<div>` (`__header`) | |
| `ModalDialogHeading` | `<h2>` (`__heading`) | `tabindex="-1"` 固定、hook が `showModal()` 後に `headingRef.current.focus()` で見出しへ初期フォーカスを移す |
| `ModalDialogClose` | `<button>` (`__close`) | SVG＋「閉じる」テキストを内部に固定、`children` なし |
| `ModalDialogBody` | `<div>` (`__body`) | |
| `ModalDialogActions` | `<div>` (`__actions`) | |
| `ModalDialogScrollArea` | `<div>` (`__scroll-area`) | |

### Props

**`ModalDialog`**
- `scroll?: 'inner' | 'outer'` — スクロールモード（省略時は外側スクロール）
- `width?: string` — `--modal-dialog-width` CSS変数に渡す（例: `"800px"`, `"100%"`）
- `ref?: Ref<HTMLDialogElement>` — `useModalDialog` hookが内部で使う（公開もする）
- 残りは `ComponentProps<'dialog'>` をそのまま拡張

**`useModalDialog` hook**
- 入力: `{ open: boolean; onOpenChange: (open: boolean) => void; onRequestClose?: (event: ModalDialogRequestCloseEvent) => void; }`
  - `ModalDialogRequestCloseEvent`: `{ defaultPrevented: boolean; preventDefault: () => void; }` — `preventDefault()` を呼ぶとダイアログを閉じない
- 出力: `{ dialogProps: { ref: RefObject<HTMLDialogElement>; 'aria-labelledby': string; }; headingProps: { ref: RefObject<HTMLHeadingElement>; id: string; }; closeButtonProps: { onClick: () => void; } }`
  - `dialogProps` を `ModalDialog` に、`headingProps` を `ModalDialogHeading` に、`closeButtonProps` を `ModalDialogClose` にスプレッドする
- 内部で `useEffect` を使い `open` → `showModal()`/`close()` を同期
- `showModal()` 後、`headingRef.current?.focus()` で見出しへ初期フォーカスを移す
- 内部で `cancel` イベント（ESCキー）を `addEventListener` で監視し `e.preventDefault()` + `onRequestClose?.(event)` + `onOpenChange?.(false)` を呼ぶ（`onRequestClose` 内で `event.preventDefault()` を呼ぶと `onOpenChange?.(false)` はスキップされる）
- コンポーネント本体には hooks を置かない（component-rules 準拠）

**`ModalDialogClose`**
- `ComponentProps<'button'>` を拡張（`children` なし、固定内容）
- 消費者は `useModalDialog` が返す `closeButtonProps` を `{...closeButtonProps}` でスプレッドする

その他の構成要素はすべて対応するHTML要素の `ComponentProps` を拡張するだけ。

### `data-*` 属性とスコープ

- `ModalDialog` に `group/modal-dialog` を付与
- `ModalDialogContent` は `group-data-[scroll=inner]/modal-dialog:` バリアントでinner scrollスタイルを適用

### コンポーネント API に入れないもの

- ダイアログの開閉制御（消費者が `ref.current.showModal()` / `ref.current.close()` を呼ぶ）
- グローバルCSS（`html:has(:modal)` によるスクロール抑制）の実装
- Invoker Commands APIポリフィルの読み込み

## ファイル構成

- `ModalDialog.tsx` — 全構成要素を1ファイルに（hook なし、ロジックなし）
- `useModalDialog.ts` — `open` prop と `showModal()`/`close()` を同期する hook
- `ModalDialog.stories.tsx` — Storybook
- `index.ts` — エクスポート

## Story 構成

| HTML ファイル | export 名 | 表示名（日本語） |
|---|---|---|
| `playground.html` | `Playground` | プレイグラウンド |
| `inner-scroll.html` | `InnerScroll` | 内側スクロール |
| `inner-scroll-with-fixed-header.html` | `InnerScrollWithFixedHeader` | ヘッダー固定 |
| `inner-scroll-with-fixed-actions.html` | `InnerScrollWithFixedActions` | アクション固定 |
| `inner-scroll-with-fixed-both.html` | `InnerScrollWithFixedBoth` | ヘッダー＆アクション固定 |
| `fixed-width.html` | `FixedWidth` | 幅指定 |

各Storyは「開くボタン」と`<dialog>`要素をセットでレンダリング。`play()` でダイアログを自動的に開く。

## テスト方針

テストを書く。`useModalDialog` hookのインタラクションを以下のケースで検証する:

- `Playground` Story から開くボタンをクリックするとダイアログが開くこと (`dialog.open === true`)
- 閉じるボタンをクリックするとダイアログが閉じること (`dialog.open === false`)
- ESCキーで `cancel` イベントが発火し、`onRequestClose` が呼ばれること

## HTML 版との意図的な差異

- **Invoker Commands API 非使用**: HTMLの `command="show-modal"` / `command="close"` の代わりに、`useModalDialog` hook 経由で `showModal()` / `close()` を呼ぶ
- **開閉制御の一元化**: `open` + `onOpenChange` の controlled pattern を主手段とする。`ref.current.showModal()` の直接呼び出しも可能
- **ESCキー制御**: hook が `cancel` イベントを `preventDefault` + `onRequestClose`/`onOpenChange` 経由で処理
- **グローバルCSSは提供しない**: `html:has(:modal) { overflow: clip; ... }` はdocに記載のみ（Storybookのdecorator内で対応）
- **スタイリング**: BEMクラス名を使わずTailwindユーティリティに変換
