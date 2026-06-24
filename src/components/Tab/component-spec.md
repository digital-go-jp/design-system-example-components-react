# Tab 移植計画

## HTML reference

- Source: https://github.com/digital-go-jp/design-system-example-components-html/tree/main/src/components/tab
- 関連ファイル:
  - `tab.mdx` / `tab.css` / `tab.js` / `tab-aria.js`
  - `tab.stories.ts` (Storybook)
  - `tab.test.js`（機能テスト）

## コンポーネント設計

### 公開コンポーネント（全タイプ共通）

| コンポーネント | 描画要素 | 役割 |
|---|---|---|
| `Tab` | `<div>` | ルートラッパー。`position` prop を受け取り `TabContext` に格納 |
| `TabList` | `<ul>` | タブリスト |
| `TabItem` | `<li><a>`（Tab キー・リンクリスト）/ `<li><button>`（矢印キー） | 個々のタブ。`<li>` は内部で描画し、開発者は意識しない。Props は `<a>` / `<button>` に渡す |
| `TabPanel` | `<div>` | パネル |

### TabContext

`Tab` が `position` を Context 経由で子コンポーネントに伝播する。`TabList` / `TabItem` / `TabPanel` は Context を読んで Tailwind クラスを切り替える。

### フック

| フック | タイプ | 役割 |
|---|---|---|
| `useTab` | Tab キーナビゲーション | クリックでパネル切り替え・`aria-current` 管理・visually-hidden 見出し自動挿入 |
| `useTabAria` | 矢印キーナビゲーション | ARIA Tabs パターン・キーボードナビゲーション・`aria-selected` / `tabindex` 管理 |

リンクリストタイプは JS なし（フック不要）。

### フック API（getters パターン）

```ts
type TabChangeDetail = {
  selectedIndex: number;
  selectedTabLabel: string;
};

// Tab キーナビゲーション
const { getListProps, getTabProps, getPanelProps } = useTab({
  defaultSelectedIndex?: number;  // デフォルト 0
  onTabChange?: (detail: TabChangeDetail) => void;
});

// 矢印キーナビゲーション
const { getListProps, getTabProps, getPanelProps } = useTabAria({
  defaultSelectedIndex?: number;  // デフォルト 0
  activation?: 'auto' | 'manual'; // デフォルト 'auto'
  onTabChange?: (detail: TabChangeDetail) => void;
});
```

### 見出し自動挿入（useTab のみ）

`getListProps()` が返す `ref` 経由で `TabList` の `aria-labelledby` 属性を読み取り、参照先見出し要素のレベル（例: `<h2>` → level 2）を導出する。各パネル先頭に `h{level+1}` の visually-hidden 見出しを `useEffect` 内で挿入する。見出しの `id` は `useId()` で生成。

### 使用例

```tsx
// Tab キーナビゲーション
function MyTabComponent() {
  const { getListProps, getTabProps, getPanelProps } = useTab({
    defaultSelectedIndex: 0,
    onTabChange: ({ selectedIndex }) => console.log(selectedIndex),
  });

  return (
    <>
      <h2 id="heading">タブ見出し</h2>
      <Tab>
        <TabList {...getListProps()} aria-labelledby="heading">
          <TabItem {...getTabProps(0)}>タブ1</TabItem>
          <TabItem {...getTabProps(1)}>タブ2</TabItem>
        </TabList>
        <TabPanel {...getPanelProps(0)}>内容1</TabPanel>
        <TabPanel {...getPanelProps(1)}>内容2</TabPanel>
      </Tab>
    </>
  );
}

// 矢印キーナビゲーション
function MyAriaTabComponent() {
  const { getListProps, getTabProps, getPanelProps } = useTabAria({
    defaultSelectedIndex: 0,
    activation: 'auto',
  });

  return (
    <Tab>
      <TabList {...getListProps()}>
        <TabItem {...getTabProps(0)}>タブ1</TabItem>  {/* <li role="presentation"><a role="tab"> を自動描画 */}
        <TabItem {...getTabProps(1)}>タブ2</TabItem>
      </TabList>
      <TabPanel {...getPanelProps(0)}>内容1</TabPanel>  {/* role="tabpanel" tabIndex={0} を自動付与 */}
      <TabPanel {...getPanelProps(1)}>内容2</TabPanel>
    </Tab>
  );
}

// リンクリスト（フック不要）
function MyStaticTabComponent() {
  return (
    <Tab>
      <TabList>
        <TabItem aria-current="page">現在のページ</TabItem>  {/* <li><a aria-current="page"> */}
        <TabItem href="/other">他のページ</TabItem>
      </TabList>
      <TabPanel>内容</TabPanel>
    </Tab>
  );
}
```

### `position` prop（Tab ルート）

| 値 | 説明 |
|---|---|
| `top`（デフォルト） | タブリストを上部に配置 |
| `bottom` | タブリストを下部に配置（HTML 上もパネルの後に TabList を配置する） |
| `left` | タブリストを左部に配置 |
| `right` | タブリストを右部に配置 |

### コンポーネント API に**入れない**もの

- `tab-change` Custom Event（React では `onTabChange` コールバックで代替）
- `data-activation` 属性（`useTabAria` の `activation` オプションで代替）
- `data-position` 属性（Context ベースの `position` prop で代替）
- `data-js-tab` / `data-js-tab-list` 属性（フックの getter が直接 ARIA を制御）
- `href` 属性（Tab キーナビゲーション・矢印キーナビゲーションタイプ）
- `hidden` 属性の手動指定（`getPanelProps` が自動で管理）

## ファイル構成

```
src/components/Tab/
  Tab.tsx          # コンポーネント（Tab / TabList / TabItem / TabPanel）+ TabContext + 型定義
  useTab.ts        # Tab キーナビゲーション用フック
  useTabAria.ts    # 矢印キーナビゲーション用フック
  Tab.stories.tsx  # Storybook
  Tab.test.tsx     # Vitest
  index.ts
```

型定義はすべて `Tab.tsx` に記述する（`types.ts` は作成しない）。

## テスト方針

`useTab` と `useTabAria` の動作を `Tab.test.tsx` で検証する（`composeStories` + `vitest-browser-react`）。

### useTab 対象ケース

- 初期選択パネルの表示・他パネルの非表示
- クリックでパネル切り替え・`aria-current` 更新
- `onTabChange` コールバックの発火と detail 内容（`selectedIndex`, `selectedTabLabel`）
- 各パネル先頭への visually-hidden 見出し挿入（タグ・テキスト・スタイル）
- 初期化時に `onTabChange` は発火しない

### useTabAria 対象ケース

- 初期選択・`aria-selected` / `tabindex` の初期値
- クリックでパネル切り替え・`aria-selected` 更新
- `onTabChange` コールバックの発火と detail 内容
- 矢印キー / Home / End（auto activation）
- 矢印キーでフォーカスのみ移動・Enter / Space で選択（manual activation）

## useTabAria キー操作ハンドリング

`useTabAria` の `getListProps()` が返す `onKeyDown` ハンドラーで以下のキーを処理する。

| キー | 動作 |
|---|---|
| `ArrowRight` / `ArrowDown` | フォーカスを次のタブへ移動。`auto` モードは同時に選択も更新 |
| `ArrowLeft` / `ArrowUp` | フォーカスを前のタブへ移動。`auto` モードは同時に選択も更新 |
| `Home` | フォーカスを最初のタブへ移動。`auto` モードは同時に選択も更新 |
| `End` | フォーカスを最後のタブへ移動。`auto` モードは同時に選択も更新 |
| `Enter` / `Space` | `manual` モードのみ：フォーカス中のタブを選択（`<button>` が `click` を合成するため、ハンドラーは不要） |

### `position` と有効な矢印キーの対応

`left` / `right` レイアウトでは垂直方向が主軸のため、`ArrowUp` / `ArrowDown` でタブ間を移動する。`top` / `bottom` レイアウトでは水平方向が主軸のため、`ArrowLeft` / `ArrowRight` でタブ間を移動する。どちらのレイアウトでも両軸のキーを受け付け、上記の動作を行う（軸によって無効化はしない）。

### フォーカスのwrapを行わない（意図的な設計）

APG の Tab パターンによると、周回ナビゲーション（末尾→先頭、先頭→末尾の折り返し）を行うことになっている。これは意図的に行わない。周回があると、ユーザーが「端に到達した」というフィードバックを得られず、特にスクリーンリーダー利用者にとってフォーカスの現在位置を見失いやすい。周回しないことで「端まで来た」ことが明確に伝わりやすくなる。

## HTML 版との意図的な差異

| 差異 | 理由 |
|---|---|
| Tab キーナビゲーション・リンクリストタイプで `href` を必須とし、パネル ID はフックが `useId()` で自動生成する | React 版は JS が前提のためプログレッシブエンハンスメント（JS 無効時のフォールバック）は不要。ただし `<a>` の `link` ロールを確保するため `href` 自体は維持する |
| `<dads-tab>` / `<dads-tab-aria>` カスタム要素を使わない | React コンポーネントで代替 |
| `data-position` 属性 → Context ベースの `position` prop | Tailwind で位置切り替えを実装するため |
| `position="bottom"` 時の `TabList` 配置は開発者（Story）が担う | HTML 版と同様に DOM 順序でタブリストをパネルの後に配置する |
| `tab-change` Custom Event → `onTabChange` コールバック | React の慣習に合わせる |
| `data-activation` 属性 → `activation` オプション（フック引数） | React の慣習に合わせる |
| `data-js-tab` / `data-js-tab-list` 属性 → 不要 | フックの getter が直接 ARIA を制御するため |
| `<li>` 要素を `TabItem` が内部で描画 | 開発者が `<li>` を意識しなくて済むよう隠蔽 |
| `role="tab"` / `role="tabpanel"` / `tabIndex` を開発者が書かない | フック（`getTabProps` / `getPanelProps`）が自動で付与 |
| 矢印キーナビゲーションで `<div role="tablist">` → `<ul role="tablist">` + `<li role="presentation">` | `TabList` を単一コンポーネントで対応できるようにするため |
| 矢印キーナビゲーションで先頭・末尾の周回を削除 | HTML 版も同様の方針に追従予定のため先行して適用 |
| 矢印キーナビゲーションのタブ要素を `<a>` から `<button type="button">` に変更 | `<button>` は Enter・Space で click を合成するため、`onKeyDown` でのキー処理が不要になる。`href` のないリンクより意味的に正確 |
| `Example` Story（商品紹介ページの例）を省略 | ユーザー判断により不要 |
