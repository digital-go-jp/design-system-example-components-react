# MenuListBox 移植計画

## HTML reference

- Source: https://github.com/digital-go-jp/design-system-example-components-html/tree/main/src/components/menu-list-box
- 関連ファイル:
  - `menu-list-box.mdx` / `playground.html` / `menu-list-box.css` / `menu-list-box.js`
  - `menu-list-box.stories.ts` (Storybook)
  - `menu-list-box.test.js`（機能テスト）

## コンポーネント設計

### 公開コンポーネント（合成パターン）

| コンポーネント | 要素 | 役割 |
|---|---|---|
| `MenuListBox` | `<div>` | ルートコンテナ（`relative block w-fit`） |
| `MenuListBoxOpener` | `<button type="button">` | オープナーボタン。内部に固定のシェブロン矢印 SVG を埋め込む |
| `MenuListBoxPopup` | `<div>` | ポップアップラッパー（`hidden` 属性でトグル） |

### Props

- `MenuListBox`: `ComponentProps<'div'>` そのまま（追加 props なし）
- `MenuListBoxOpener`: `Omit<ComponentProps<'button'>, 'type'>` に加えて:
  - `size: 'sm' | 'md'` — ボタンサイズ
  - `buttonStyle: 'text' | 'outlined' | 'filled'` — ボタンスタイル（`style` は `CSSProperties` と衝突するため `buttonStyle` に）
  - `fontWeight: 'normal' | 'bold'` — フォントウェイト
  - これらは `data-size`, `data-style`, `data-text-weight` として DOM に展開し、Tailwind の `data-[...]` バリアントでスタイルを適用
- `MenuListBoxPopup`: `ComponentProps<'div'>` そのまま（追加 props なし）

### `useMenuListBox` フック

フック本体（`useMenuListBox.ts`）が全行動を担う。コンポーネントボディにはロジックを持たない。

```ts
type UseMenuListBoxOptions = {
  onMenuItemSelect?: (detail: { selectedValue: string; selectedIndex: number }) => void;
};

type UseMenuListBoxReturn = {
  rootProps: ComponentProps<'div'>;       // ref + onKeyDown + onBlur + onClick
  openerProps: Partial<ComponentProps<'button'>>;  // ref + aria-expanded + onClick
  popupProps: ComponentProps<'div'>;      // hidden
};

function useMenuListBox(options?: UseMenuListBoxOptions): UseMenuListBoxReturn;
```

- `rootProps`: `{ ref, onKeyDown, onBlur, onClick }` — 全イベントハンドラをルート div に集約
- `openerProps`: `{ ref, 'aria-expanded': isOpen, onClick }`
- `popupProps`: `{ hidden: !isOpen }`

#### 実装する機能

| 機能 | 詳細 |
|---|---|
| クリック開閉 | opener クリックでトグル。開いたとき最初の項目にフォーカス |
| ArrowDown / ArrowUp（opener） | メニューを開き最初 / 最後の項目にフォーカス |
| ArrowDown / ArrowUp（メニュー内） | 次 / 前の項目へフォーカス（端では停止）。 |
| Home / End | 最初 / 最後の項目へフォーカス |
| Escape | メニューを閉じて opener にフォーカスを戻す |
| 外部クリック | コンポーネント外のクリックでメニューを閉じる |
| focusout | フォーカスがコンポーネント外に移ったらメニューを閉じる |
| menuitem 選択 | `[role="menuitem"]` クリックまたは Enter/Space でコールバック発火 → メニューを閉じて opener にフォーカス |
| roving tabindex | 開いているとき、フォーカス中の項目のみ `tabindex="0"`、他は `-1` |

#### コンポーネント API に**入れない**もの

- フロントアイコン（opener の左アイコン）— consumers が `children` として `<svg>` を渡す
- `menuitemselect` DOM CustomEvent — `onMenuItemSelect` コールバックのみ（HTML reference との差異として記録）
- メニュー項目ラッパー（`MenuListBoxItem`）— consumers が既存の `MenuListItem` + `MenuListItemButton` を使用

### オープナー矢印 SVG

`MenuListBoxOpener` 内部に固定の下向きシェブロン SVG を埋め込む。  
`aria-expanded` に連動して 180° 回転: `group-aria-expanded/menu-list-box-opener:rotate-180`。

## ファイル構成

```
src/components/MenuListBox/
├── MenuListBox.tsx          # 全コンポーネント（純粋なマークアップ）
├── useMenuListBox.ts        # 全行動（state, ref, event handlers）
├── MenuListBox.stories.tsx  # Storybook
├── MenuListBox.test.tsx     # Vitest（行動テスト）
├── component-spec.md
└── index.ts
```

## Story 構成

| Story export 名 | 表示名 | 内容 |
|---|---|---|
| `Playground` | Playground | `size`, `buttonStyle`, `fontWeight` コントロール付きデモ |

- HTML 版には `playground.html` のみ存在。Story は `Playground` の1本。
- `docs.page` に仕様表（バリエーション表、Props 表、キーボード操作表）を記載。

## テスト方針

`useMenuListBox` にロジックを分離するためテストを書く。  
`MenuListBox.test.tsx` で `Playground` Story を `composeStories` で使用し、`vitest-browser-react` でインタラクションをテスト。

対象ケース（HTML 版の `menu-list-box.test.js` に準拠）:

- 初期状態: メニューが閉じている / 全 menuitem の tabindex が -1
- クリックでメニューを開閉
- 外部クリックでメニューを閉じる
- Escape でメニューを閉じて opener にフォーカス
- Tab でフォーカスがメニュー外に移ると閉じる
- ArrowDown（opener）→ 最初の項目にフォーカス
- ArrowUp（opener）→ 最後の項目にフォーカス
- Enter / Space（opener）→ 最初の項目にフォーカス
- ArrowDown（メニュー内）→ 次の項目 / 最後の項目で停止
- ArrowUp（メニュー内）→ 前の項目 / 最初の項目で停止
- Home → 最初 / End → 最後
- クリックで項目選択 → onMenuItemSelect 発火・メニューを閉じる・opener にフォーカス
- Enter / Space で項目選択

## HTML 版との意図的な差異

| 差異 | 理由 |
|---|---|
| `menuitemselect` DOM CustomEvent を発火しない | `onMenuItemSelect` コールバックに置き換え。React では props コールバックが慣用的 |
| `style` prop を `buttonStyle` にリネーム | `ComponentProps<'button'>` の `style: CSSProperties` と衝突するため |
| BEM クラス名（`dads-menu-list-box` 等）を持たない | Tailwind クラスで表現するため |
| `data-js-*` 属性を持たない | React では ref + querySelectorAll('[role="menuitem"]') で代替 |
| フロントアイコンのラッパーコンポーネントなし | consumers が `children` として直接 `<svg>` を渡す |
