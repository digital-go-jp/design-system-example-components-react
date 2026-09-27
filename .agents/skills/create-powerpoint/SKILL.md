---
name: create-powerpoint
description: DADSデザイントークンを使用し、デザインスタイル手順書とテンプレート生成スクリプトからアクセシブルなPowerPoint（.pptx）資料を作成・更新する。
compatibility: Requires Node.js and pptxgenjs to generate the optional PowerPoint template. Playwright is required only for the full visual catalog. MarkItDown and LibreOffice or PowerPoint are optional for validation.
metadata:
  author: atchyxx (unofficial DADS reference skill)
  version: "1.0"
---

# PowerPoint資料作成スキル（React版）

デジタル庁デザインシステム（React版、DADS）を、PowerPointで静的に再現する。
コンポーネントの説明資料と、DADSのデザイン言語を採用した一般資料の両方を対象とする。
これはデジタル庁が配布する公式PowerPointテンプレートではない。

## 再現性の原則

このスキルの唯一の仕様は、資料作成時点のリポジトリ実装である。スキル本文の例示や記憶した値で代用しない。

- すべてのカラー、文字スタイル、余白、罫線、角丸、影、アイコン、図形、状態、バリエーションは、該当するソースから取得する。
- このリポジトリでは、コンポーネントの見た目は `.tsx` 内のTailwindクラス（`@digital-go-jp/tailwind-theme-plugin` のトークンクラス）として定義される。色・サイズの解決値は `node_modules/@digital-go-jp/design-tokens/dist/tokens.css` とプラグイン定義から取得する（`npm install` 済みであること）。
- コンポーネントを扱う資料では、対象コンポーネントの全バリエーションと視覚状態を省略しない。
- PowerPointで動作を再現できない要素は、操作可能に見せかけない。通常・フォーカス・ホバー・無効・エラーなどを、明示した静的な状態見本として別々に示す。
- 実装の内容を「DADSらしい」任意の見た目に置換しない。PowerPointで同じ見た目を作れない場合は、差異と理由を資料の注記または作成報告に記載する。

## 公式DADS・PowerPoint適合の表記

DADSはWebサービス向けの公式デザインアセットである。DADSの公開トークンやコンポーネントを参照したPowerPointは、比較対象となる公式`.pptx`またはPowerPoint向けブランドガイドを確認していない限り、**「DADSを参照して作成」**と表記する。

- 「デジタル庁公式PowerPointテンプレート準拠」「デジタル庁公式テンプレートそのもの」「完全準拠」と表記してはならない。
- これらの表記には、公式配布元、版、利用条件を確認できる比較対象と、対象資料のフォント、配色、レイアウト、スライドマスター、アクセシビリティの照合記録が必要である。
- DADSの採用書体は`Noto Sans JP`と`Noto Sans Mono`である。既存のシステムフォントを使うことはDADSの公式ガイダンスで禁止されていないが、Notoを使った、または公式テンプレート準拠であるとは表記しない。
- 本文テキストは少なくとも14 CSS px、通常の読み物本文は16 CSS px以上を基準にする。投影・研修資料では14–16pt以上を基本とし、11–12ptの本文を使わない。
- テキストは背景に対して4.5:1以上、非テキスト要素は隣接背景に対して3:1以上のコントラスト比を満たす。
- 判断の根拠は、[DADSの基本デザイン](https://design.digital.go.jp/dads/foundations/)、[タイポグラフィ](https://design.digital.go.jp/dads/foundations/typography/)、[カラー](https://design.digital.go.jp/dads/foundations/color/)を優先する。作成時に公式資料または実装と矛盾する場合は、より新しい公式資料・実装を採用し、差異を記録する。

## 発火条件

以下の依頼でこのスキルを使用する。

- `.pptx`、PowerPoint、スライド、プレゼンテーションを作成または更新する
- DADSのコンポーネント、デザイントークン、利用方法を資料にまとめる
- 既存のPowerPointテンプレートを用いて資料を作成する

## 完全なデザインインベントリ

資料の生成前に、目的、対象読者、必要なスライド数または構成、出力先を確認する。不明な場合は質問する。次に、必ず現行のリポジトリからデザインインベントリを作る。

### 基盤トークン

以下を読み、PowerPointで使う値をトークン名・解決済み値・用途の組で記録する。

1. `node_modules/@digital-go-jp/design-tokens/dist/tokens.css`
   - すべてのCSS Custom Properties
   - カラーのエイリアスを解決した16進値または透明度
   - タイポグラフィ、スペーシング、角丸、エレベーションのトークン
2. `node_modules/@digital-go-jp/tailwind-theme-plugin/` のプラグイン定義
   - Tailwindクラス（`bg-key-900`、`text-std-17N-170`、`rounded-8` 等）とトークンの対応
3. `tailwind.config.js` と `.storybook/globals.css`
   - フォーカスリング、本文の既定スタイル、フォント読み込みの視覚ルール
4. `src/foundations/Colors.mdx`、`src/foundations/Typography.mdx`、`src/foundations/Elevation.mdx`
5. `AGENTS.md`
6. `src/docs/development-policy.mdx`

色の利用可能な全階調、ニュートラル、不透明度、セマンティックカラー、Keyカラー、全エレベーションを対象にする。資料内で未使用のトークンを削除してはならない。カラーパレット・トークン一覧を求められた場合は、すべてを欠けなく掲載する。解決済みカラーの一覧表は [references/dads-color-palette.md](references/dads-color-palette.md) にある。トークン更新後はこの表を `tokens.css` で検証し直す。

### コンポーネント仕様

コンポーネントを説明・再現する資料では、`src/components/<Name>/` 内の以下をすべて読む。複数コンポーネントが対象なら、対象ごとに同じ手順を実施する。

1. `<Name>.tsx`（および分割されたサブコンポーネント、hooks、types）。スタイルはここに定義される
2. `<Name>.stories.tsx`（全ストーリーと `argTypes` の選択肢）
3. `<Name>.mdx`（存在する場合）
4. `component-spec.md`（存在する場合。HTML版からの移植仕様）
5. `<Name>.test.tsx`（存在する場合。状態・挙動の根拠になる）
6. コンポーネントが直接依存するアセット（`assets/` の画像、インラインSVGアイコン）

各コンポーネントについて、次を漏れなく抽出する。

- 要素構造、表示文言、アイコン、画像、代替テキスト
- すべてのTailwindバリアント（`hover:`、`active:`、`focus-visible:`、`aria-disabled:`、`aria-[invalid=true]:`、`read-only:`、`data-[...]:`、`group-...:`、`forced-colors:` 等）、`data-*` 属性、ARIA、レスポンシブ接頭辞（`desktop:`、`desktop-admin:`）とコンテナクエリ（`@md:` 等）による見た目の差
- 寸法、余白、間隔、罫線、角丸、塗り、透明度、影、アイコンサイズ、テキスト整列
- 利用するトークンクラスとその解決値
- 通常、ホバー、アクティブ、フォーカス、無効、エラー、選択済み、展開済みなどの全状態
- 読み上げ・キーボード・動的動作に関する説明（多くは `react-aria-components` が担う）。PowerPointでは静的な注記として扱う

## 生成方式の選択

1. ユーザーがテンプレートを指定した場合は、テンプレート編集方式を使用する。
2. 指定がない場合は、[DADS PowerPointデザインスタイル手順書](references/dads-design-style.md) を基に作成する。
3. 編集可能なベーステンプレートが必要な場合は、`scripts/generate-dads-powerpoint-template.cjs` で生成する（要 `npm install --no-save pptxgenjs`）。
4. テンプレートの有無にかかわらず、出力はユーザー指定の場所へ保存する。指定がなければ、`output/` 配下に内容を表すケバブケースのファイル名で保存する。

## 同梱リソース

```text
create-powerpoint/
├── SKILL.md
├── scripts/
│   ├── generate-component-inventory.cjs
│   ├── embed-component-specifications.cjs
│   ├── generate-dads-powerpoint-template.cjs
│   ├── generate-component-spec-catalog.cjs
│   ├── generate-complete-visual-catalog.cjs
│   └── extract-pptx-text.py
└── references/
    ├── dads-design-style.md
    ├── dads-color-palette.md
    ├── dads-powerpoint-template.md
    ├── dads-component-inventory.md        （生成物）
    └── dads-component-spec-snapshot.md    （生成物）
```

| ファイル | 用途 |
| --- | --- |
| [dads-design-style.md](references/dads-design-style.md) | DADSトークン、6レイアウト、アクセシビリティ、品質確認を定めたデザインスタイル手順書 |
| [dads-color-palette.md](references/dads-color-palette.md) | 全カラー階調・ニュートラル・セマンティックカラーの解決済み値 |
| [dads-powerpoint-template.md](references/dads-powerpoint-template.md) | 6レイアウトのテキスト構成とプレースホルダー |
| [dads-component-inventory.md](references/dads-component-inventory.md) | 全コンポーネントのStories、`data-*`修飾子、状態、レスポンシブ接頭辞、アクセシビリティシグナルを網羅した生成仕様 |
| [dads-component-spec-snapshot.md](references/dads-component-spec-snapshot.md) | 全コンポーネントのソース（スタイル定義を含む）とトークン・動作注記の固定スナップショット |

通常の資料作成では、デザインスタイル手順書の「スライドスタイルの必須規則」と「リポジトリ実装から導く変換規則」を必ず読む。コンポーネント資料では、加えて全コンポーネント網羅表の対象節を必ず読む。レイアウトの文言構成を確認するときはテンプレート参照資料を読む。対象カタログを読み、対象コンポーネントの実装値で見た目を調整する。

全コンポーネントを扱う資料では、`references/dads-component-inventory.md`の各コンポーネントにある「Required PowerPoint coverage」を全て完了させる。コンポーネントの実装が変わった場合は、次を順に実行して参照資料を更新してから資料を作成する。

```text
node scripts/generate-component-inventory.cjs
node scripts/embed-component-specifications.cjs
```

PowerPointをMarkdownへ変換する必要がある場合は、`scripts/extract-pptx-text.py <source.pptx> <destination.md>` を使用する（要Python 3。標準ライブラリのみ）。このスクリプトはOffice Open XMLをUTF-8で直接読むため、日本語の文字化けを避けられる。

## 実装からPowerPointへの変換規則

### カラー

トークンの解決値を使用する。PptxGenJSでは16進数の先頭の `#` を除いて指定する。

- 色、透明度、罫線色、影色を含め、トークンの解決値と同一にする。
- 情報を色だけで区別しない。状態はラベル、アイコン、テキストでも示す。
- 実装に定義のない装飾色、グラデーション、アクセント線を追加しない。
- 透明な色（`opacity-gray-*`）は、元の背景と合成した場合の見た目とPowerPointの透明度が一致することを確認する。

### タイポグラフィ

- フォントファミリー、サイズ、ウェイト、行高、字間、配置は、対象のタイポグラフィクラス（`text-std-17N-170`、`text-oln-16B-100` 等）の定義から取得する。定義は tailwind-theme-plugin と `src/foundations/Typography.mdx` で確認する。
- CSSのピクセル値は `1 CSS px = 0.75 pt` としてPowerPointポイントへ変換する。インチ指定は `1 inch = 96 CSS px` として変換する。`rem` は16px基準で解決する。
- DADSのすべての文字ユーティリティを資料化する場合は、Display、Standard、Dense、One Line、Monoの全クラスを、スタイル値と共に掲載する。
- 指定フォントがPowerPoint環境にない場合は代替フォントを勝手に選ばず、利用可能なフォントを確認して差異を記録する。
- 長文は文字を縮小して収めず、ソース上の情報階層を保ったまま複数のスライドへ分割する。

### レイアウト

- ボックスモデルを基準に、幅、高さ、padding、margin、gap、border、border-radius、position、z-indexを変換する。このリポジトリのスペーシングは1単位4px（`px-4` = 16px、`min-h-14` = 56px）で、`rounded-8` = 8px のように数値そのままのクラスも使われる。任意値（`min-w-[calc(136/16*1rem)]` 等）はcalc式を解決してから換算する。
- 角丸はPowerPointの最も近い図形だけで近似せず、元の半径に見合う値を指定する。再現できない形状はSVGまたはPNGで保持する。
- 影は、色、透明度、ぼかし、距離、角度をPowerPointの影へ対応付ける。PowerPointで対応しない影は、元の見た目を画像化して使用する。
- SVG、複雑な背景、CSSで描かれるアイコンは、品質を落とさずにSVGまたはPNGとして取り込む。単純な図形へ勝手に置換しない。
- レスポンシブレイアウトは、資料の想定サイズを明記したうえで、その幅のレイアウトを再現する。`desktop:`（48em = 768px）以降で見た目が変わるコンポーネントは、モバイルとデスクトップを別の状態見本として示す。
- コンポーネント説明では、実際のストーリー、全バリエーション、全状態、アクセシビリティ上の要点を対応付ける。

### UI要素と図形

- ボタン、入力欄、選択肢、表、通知、ナビゲーション、モーダルなどは、コンポーネントの `.tsx` の構造とクラスに従ってグループ化して描画する。
- アイコンは、リポジトリ内の元アセット（インラインSVG、`assets/`）を優先する。代替する場合は、意味・線幅・塗り・サイズが一致するものだけを使う。
- 状態を持つ要素は、状態ごとに独立した図形グループを作る。単一図形の色だけを変えて状態を省略しない。
- 文書や一般資料のために新しい図形を作る場合も、基盤トークンと既存コンポーネントの図形規則を参照する。

## テンプレート編集方式

テンプレートを使用する場合は、次の順序を守る。

1. `python -m markitdown "<template.pptx>"` でテキストとプレースホルダーを確認する。スライドの見た目は、PowerPointまたはPATH上で利用できるLibreOfficeでPDF／画像へレンダリングして確認する。ユーザー固有のローカルパスやスキルディレクトリをコマンドに含めない。
2. 内容ごとに最適なテンプレートスライドを対応付ける。繰り返しの多い箇条書きレイアウトを避ける。
3. pptxスキルの `unpack.py` で展開し、構造変更、内容編集、`clean.py`、`pack.py` の順に処理する。
4. 不要な項目はテキストだけでなく、関連する画像、図形、キャプションを含むグループ全体を削除する。
5. テンプレートのフォント、余白、既存のデザイン規則を優先する。ただし、本文の判読性とコントラストは必ず確保する。

## PptxGenJSによる新規作成

- 生成用スクリプトは、出力先の近くに一時的に置かず、必要に応じて `scripts/` 配下へ内容を表す名前で保存する。
- プレゼンテーションの `author`、`title`、`subject` を設定する。
- テキストボックスを図形に揃える場合は、`margin: 0` を明示する。
- 箇条書きはUnicode文字を直接挿入せず、PptxGenJSの `bullet: true` を使用する。
- 画像には内容を表す `altText` を設定する。
- 図表は元データと単位を明記する。外部情報を使う場合は、出典をスライド内または巻末に記載する。
- 生成スクリプトには、抽出したトークンを名前付き定数として定義する。色や寸法のリテラル値を分散させない。
- コンポーネントを再現する場合は、各バリエーション・状態・ブレークポイントを列挙した配列からスライドまたは状態見本を生成し、漏れを防ぐ。

## 品質確認

生成後、完了を報告する前に必ず次を行う。

1. 抽出したトークン、コンポーネント、バリエーション、状態をチェックリスト化する。
2. 各項目が少なくとも1つのスライドまたは状態見本に対応していることを照合する。未対応項目があれば、資料を完成扱いにしない。
3. `python -m markitdown <output.pptx>` で、内容、順序、文字化け、プレースホルダーの残存を確認する。
4. pptxスキルの `soffice.py` と `pdftoppm` を使って各スライドを画像化し、視覚確認する。
5. ソース側のStorybook（`npm run storybook` で起動）の対象状態と、PowerPointのレンダリングを並べて比較する。色、文字、余白、罫線、角丸、影、アイコン、状態表示の相違を修正する。
6. テキストの切れ・重なり・はみ出し、余白不足、整列ずれ、低コントラスト、表やフッターの衝突を確認する。
7. 1回以上の修正と再確認を行い、チェックリストがすべて完了するまで繰り返す。

PPTX内のテキストが長すぎて収まらない場合は、文字サイズを過度に下げず、内容を短縮するかスライドを分割する。

## 利用例

以下のような依頼で、このスキルを使用する。

```text
このデザインシステムを使い、事業説明用のPowerPointを作成して。
出力先: output/service-overview.pptx
対象読者: 行政サービスの企画担当者
構成: 表紙、課題、提案、導入効果、次のアクション
```

```text
Button、Input、NotificationBannerを使ったフォーム画面の
PowerPointモックを作成して。通常、エラー、フォーカスの状態をすべて示して。
```

```text
このテンプレートを使い、DADSのトークンとコンポーネントで資料を更新して。
既存のレイアウトを保持し、結果をoutput/updated-deck.pptxに保存して。
```

## 完了報告

完了時は、次を簡潔に報告する。

- 作成または更新した `.pptx` のパス
- 使用したDADSの主要トークンとコンポーネント
- 静的資料として注記した非再現要素（ある場合）
- 実施した内容・視覚確認の結果

## 全コンポーネントの完全ビジュアルカタログ

全コンポーネント、全Storybookストーリー、デスクトップとモバイルの表示幅を資料化する場合は、実装を図形へ推測変換しない。Storybookをビルドし、各ストーリーを実行してキャプチャした画像をPowerPointへ配置する。

1. `npm run storybook:build` を実行する。
2. `storybook-static/index.json` から `Component/` 配下の全ストーリーIDを取得する。
3. 各 `iframe.html?id=<story-id>&viewMode=story` を、少なくとも1440pxと390pxの幅でキャプチャする。
4. 各ストーリーのデスクトップ／モバイル画像、ストーリー名、ソースファイル、IDを同じスライドへ配置する。
5. キャプチャ数がストーリー数の2倍であること、コンポーネント数と目次の件数が一致することを確認する。

`scripts/generate-complete-visual-catalog.cjs` が上記を実装し、`output/dads-complete-visual-catalog.pptx` を生成する（要: リポジトリの依存インストール、`npm run test:setup` でのChromium導入、`npm install --no-save pptxgenjs`）。コンポーネントごとの仕様一覧だけが必要な場合は `scripts/generate-component-spec-catalog.cjs` が `output/dads-component-spec-catalog.pptx` を生成する。PowerPoint内で操作を再現できないため、ホバー、フォーカス、キーボード操作、アニメーションはStorybookで確認するよう明記する。

## 関連スキルとの分担

- `.pptx` の低水準な操作（unpack / pack / レンダリング確認）は、利用可能なら汎用の `pptx` スキルのツールを使う。
- コンポーネントの実装ルール自体は `component-rules` スキル、HTML版からの移植は `port-html-to-react` スキルを参照する。このスキルは資料作成の手順と変換規則だけを定める。
