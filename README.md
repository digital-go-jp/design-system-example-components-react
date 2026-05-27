# デジタル庁デザインシステム コードスニペット（React版）

[デジタル庁デザインシステム](https://design.digital.go.jp/dads/)をReact/Tailwind CSSで実装したサンプル集です。

各コンポーネントの動作やスタイル、使用方法や実装上の注意点等は[コードスニペット（React版）Storybook](https://design.digital.go.jp/dads/react/)でもご確認いただけます。

## 特長

- デジタル庁デザインシステムに準拠
- 最小限の依存関係
- カスタマイズ可能
- シンプルな実装

## 技術スタック

本コードスニペットは以下の技術をベースに実装しています。

- React（v18）
- Tailwind CSS（v3）
- TypeScript

### デザイントークンについて

本コードスニペットは、デジタル庁デザインシステムのデザイントークンをベースにしたTailwind CSSのプラグインを使用しています。コードスニペット使用の際は、下記のパッケージをプロジェクトにインストールしてください。

- [@digital-go-jp/tailwind-theme-plugin](https://www.npmjs.com/package/@digital-go-jp/tailwind-theme-plugin)

### React v19 での利用について

本コードスニペットは React v18 上に実装しています。React v19 のプロジェクトに取り込む場合は軽微な型エラーが表示されることがあります。必要に応じて修正を行なってください。

なお、コードスニペットの React v19 へのアップデートも検討しています。

## ローカルでコンポーネントを確認する

各コンポーネントの動作やスタイルは、リポジトリをクローンしてローカルで Storybook を起動することでも確認できます。

### 1. リポジトリのクローン

任意の方法でリポジトリをクローンしてください。

<https://github.com/digital-go-jp/design-system-example-components-react>

### 2. 依存関係のインストール

```bash
npm install
```

### 3. Storybookを起動

```bash
npm run storybook
```

ブラウザで `http://localhost:6006` にアクセスすると、すべてのコンポーネントを確認できます。

## ディレクトリ構成

```
src/
├── components/         # 各コンポーネント
│   ├── Accordion/
│   ├── Blockquote/
│   └── ...
├── docs/               # ドキュメント
├── tokens/             # デザイントークン
└── index.ts            # 全コンポーネントのexport
```

各コンポーネントディレクトリには以下のファイルが含まれています：

- `*.tsx` - コンポーネント本体
- `*.stories.ts` - Storybookストーリー
- `index.ts` - コンポーネントのexport

## スクリプト

```bash
# Storybookを起動（開発用）
npm run storybook

# Storybookをビルド
npm run storybook:build

# テストを実行
npm test

# コードフォーマット
npm run format
```

## ライセンス

本コードスニペットはMITライセンスの下で公開されています。

## 不具合報告・機能要望について

本コードスニペットに関する不具合や機能要望は、Issueを作成して報告してください。Pull Requestは現時点では受け付けておりません。
