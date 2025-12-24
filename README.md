# デジタル庁デザインシステム コードスニペット（React版）

[デジタル庁デザインシステム](https://design.digital.go.jp/dads/)をReact/Tailwind CSSで実装したサンプル集です。

各コンポーネントの動作やスタイル、使用方法や実装上の注意点等は[コードスニペット（React版）Storybook](https://design.digital.go.jp/dads/react/)でもご確認いただけます。

## 未実装コンポーネント

このリポジトリでは全てのコンポーネントは実装していません。  
（定期的にサンプルは追加予定です。）  
未実装のコンポーネントについてはスクラッチで書かずに、ヘッドレスUIライブラリの利用を推奨します。

スクラッチで書く必要がある場合は、[ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)の[Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)を参考にして実装を進める事を推奨します。

## サンプルコード

### 動作確認

以下のコマンドでStorybookを実行してください。

```sh
npm install
npm run storybook
```

### スタイリング

- [Tailwind CSS](https://www.npmjs.com/package/tailwindcss)
- [@digital-go-jp/tailwind-theme-plugin](https://www.npmjs.com/package/@digital-go-jp/tailwind-theme-plugin)

[@digital-go-jp/tailwind-theme-plugin](https://www.npmjs.com/package/@digital-go-jp/tailwind-theme-plugin) は、デジタル庁デザインシステムのデザイントークンをベースにしたTailwind CSSのプラグインです。

プラグインで定義されるトークン一覧は、[トークン一覧](https://github.com/digital-go-jp/design-system-example-components-react/tree/main/src/tokens) をご確認ください。

プロジェクト固有のトークン等については `tailwind.config.js` の extend で拡張してください。

### 注意事項

- サンプルコードは Google Chrome / Microsoft Edge / Safari / Firefox の最新版で動作を確認しています。
- サンプルコードはプロジェクトの特性に合わせて自由に拡張してください。

## 不具合報告・機能要望について

本コードスニペットに関する不具合や機能要望は、Issueを作成して報告してください。Pull Requestは現時点では受け付けておりません。
