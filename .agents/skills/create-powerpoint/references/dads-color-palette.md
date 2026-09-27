# DADS 全カラーパレット（React版）

一次情報は `node_modules/@digital-go-jp/design-tokens/dist/tokens.css`（`npm install` 後に存在）である。`@digital-go-jp/tailwind-theme-plugin` がこれらのトークンをTailwindクラスへ対応付ける（例: `--color-key-900` → `bg-key-900` / `text-key-900`、`--color-neutral-solid-gray-800` → `bg-solid-gray-800` / `text-solid-gray-800`）。クラス名の対応はプラグインの実装で確認する。

PowerPointでは次の解決済み値を使う。PptxGenJSでは先頭の`#`を除いて指定する。キー色はBlueのエイリアスであり、`--color-key-50`から`--color-key-1200`は、それぞれ同じ階調の`--color-primitive-blue-*`を参照する。

トークンが更新された場合は、記憶や本資料の値で代用せず、`tokens.css` から解決し直す。

## Blue / Light Blue / Cyan / Green / Lime

| 階調 | `blue` | `light-blue` | `cyan` | `green` | `lime` |
| --- | --- | --- | --- | --- | --- |
| 50 | `#E8F1FE` | `#F0F9FF` | `#E9F7F9` | `#E6F5EC` | `#EBFAD9` |
| 100 | `#D9E6FF` | `#DCF0FF` | `#C8F8FF` | `#C2E5D1` | `#D0F5A2` |
| 200 | `#C5D7FB` | `#C0E4FF` | `#99F2FF` | `#9BD4B5` | `#C0F354` |
| 300 | `#9DB7F9` | `#97D3FF` | `#79E2F2` | `#71C598` | `#ADE830` |
| 400 | `#7096F8` | `#57B8FF` | `#2BC8E4` | `#51B883` | `#9DDD15` |
| 500 | `#4979F5` | `#39ABFF` | `#01B7D6` | `#2CAC6E` | `#8CC80C` |
| 600 | `#3460FB` | `#008BF2` | `#00A3BF` | `#259D63` | `#7EB40D` |
| 700 | `#264AF4` | `#0877D7` | `#008DA6` | `#1D8B56` | `#6FA104` |
| 800 | `#0031D8` | `#0066BE` | `#008299` | `#197A4B` | `#618E00` |
| 900 | `#0017C1` | `#0055AD` | `#006F83` | `#115A36` | `#507500` |
| 1000 | `#00118F` | `#00428C` | `#006173` | `#0C472A` | `#3E5A00` |
| 1100 | `#000071` | `#00316A` | `#004C59` | `#08351F` | `#2C4100` |
| 1200 | `#000060` | `#00234B` | `#003741` | `#032213` | `#1E2D00` |

## Yellow / Orange / Red / Magenta / Purple

| 階調 | `yellow` | `orange` | `red` | `magenta` | `purple` |
| --- | --- | --- | --- | --- | --- |
| 50 | `#FBF5E0` | `#FFEEE2` | `#FDEEEE` | `#F3E5F4` | `#F1EAFA` |
| 100 | `#FFF0B3` | `#FFDFCA` | `#FFDADA` | `#FFD0FF` | `#ECDDFF` |
| 200 | `#FFE380` | `#FFC199` | `#FFBBBB` | `#FFAEFF` | `#DDC2FF` |
| 300 | `#FFD43D` | `#FFA66D` | `#FF9696` | `#FF8EFF` | `#CDA6FF` |
| 400 | `#FFC700` | `#FF8D44` | `#FF7171` | `#F661F6` | `#BB87FF` |
| 500 | `#EBB700` | `#FF7628` | `#FF5454` | `#F137F1` | `#A565F8` |
| 600 | `#D2A400` | `#FB5B01` | `#FE3939` | `#DB00DB` | `#8843E1` |
| 700 | `#B78F00` | `#E25100` | `#FA0000` | `#C000C0` | `#6F23D0` |
| 800 | `#A58000` | `#C74700` | `#EC0000` | `#AA00AA` | `#5C10BE` |
| 900 | `#927200` | `#AC3E00` | `#CE0000` | `#8B008B` | `#5109AD` |
| 1000 | `#806300` | `#8B3200` | `#A90000` | `#6C006C` | `#41048E` |
| 1100 | `#6E5600` | `#6D2700` | `#850000` | `#500050` | `#30016C` |
| 1200 | `#604B00` | `#541E00` | `#620000` | `#3B003B` | `#21004B` |

## ニュートラル（不透明）

| トークン | 値 |
| --- | --- |
| `--color-neutral-white` | `#FFFFFF` |
| `--color-neutral-black` | `#000000` |
| `--color-neutral-solid-gray-50` | `#F2F2F2` |
| `--color-neutral-solid-gray-100` | `#E6E6E6` |
| `--color-neutral-solid-gray-200` | `#CCCCCC` |
| `--color-neutral-solid-gray-300` | `#B3B3B3` |
| `--color-neutral-solid-gray-400` | `#999999` |
| `--color-neutral-solid-gray-420` | `#949494` |
| `--color-neutral-solid-gray-500` | `#7F7F7F` |
| `--color-neutral-solid-gray-536` | `#767676` |
| `--color-neutral-solid-gray-600` | `#666666` |
| `--color-neutral-solid-gray-700` | `#4D4D4D` |
| `--color-neutral-solid-gray-800` | `#333333` |
| `--color-neutral-solid-gray-900` | `#1A1A1A` |

## ニュートラル（透明）

透明色はPowerPoint上の背景色との合成結果を確認する。

| トークン | 値 |
| --- | --- |
| `--color-neutral-opacity-gray-50` | `rgba(0, 0, 0, 0.05)` |
| `--color-neutral-opacity-gray-100` | `rgba(0, 0, 0, 0.1)` |
| `--color-neutral-opacity-gray-200` | `rgba(0, 0, 0, 0.2)` |
| `--color-neutral-opacity-gray-300` | `rgba(0, 0, 0, 0.3)` |
| `--color-neutral-opacity-gray-400` | `rgba(0, 0, 0, 0.4)` |
| `--color-neutral-opacity-gray-420` | `rgba(0, 0, 0, 0.42)` |
| `--color-neutral-opacity-gray-500` | `rgba(0, 0, 0, 0.5)` |
| `--color-neutral-opacity-gray-536` | `rgba(0, 0, 0, 0.54)` |
| `--color-neutral-opacity-gray-600` | `rgba(0, 0, 0, 0.6)` |
| `--color-neutral-opacity-gray-700` | `rgba(0, 0, 0, 0.7)` |
| `--color-neutral-opacity-gray-800` | `rgba(0, 0, 0, 0.8)` |
| `--color-neutral-opacity-gray-900` | `rgba(0, 0, 0, 0.9)` |

## セマンティックカラー

| トークン | 参照先 | 解決値 |
| --- | --- | --- |
| `--color-semantic-success-1` | `--color-primitive-green-600` | `#259D63` |
| `--color-semantic-success-2` | `--color-primitive-green-800` | `#197A4B` |
| `--color-semantic-error-1` | `--color-primitive-red-800` | `#EC0000` |
| `--color-semantic-error-2` | `--color-primitive-red-900` | `#CE0000` |
| `--color-semantic-warning-yellow-1` | `--color-primitive-yellow-700` | `#B78F00` |
| `--color-semantic-warning-yellow-2` | `--color-primitive-yellow-900` | `#927200` |
| `--color-semantic-warning-orange-1` | `--color-primitive-orange-600` | `#FB5B01` |
| `--color-semantic-warning-orange-2` | `--color-primitive-orange-800` | `#C74700` |
