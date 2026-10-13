# React v18 で使用する場合

本コードスニペットは React v19 を前提に実装しています。React v18 のプロジェクトに取り込む場合は、以下の修正を行ってください。

## 1. `ref` を受け取るコンポーネントを `forwardRef` で包む

React v19 では、関数コンポーネントが `ref` を通常の props として受け取れます。React v18 では `ref` が props として渡らないため、`forwardRef` で包む必要があります。

```tsx
// React v19（本コードスニペットの実装）
import type { ComponentProps } from 'react';

export type InputProps = ComponentProps<'input'> & { /* ... */ };

export const Input = (props: InputProps) => {
  const { className, ...rest } = props;
  return <input className={...} {...rest} />;
};
```

```tsx
// React v18 向けの修正例
import { type ComponentProps, forwardRef } from 'react';

export type InputProps = ComponentProps<'input'> & { /* ... */ };

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...rest } = props;
  return <input ref={ref} className={...} {...rest} />;
});
```

React v18 の型定義では `ComponentProps<'input'>` に `ref` が含まれるため、`forwardRef` で包まなくても**型エラーにはなりません**。ただし実行時に `ref` が渡らず、コンソールに警告が表示されます。

付属の hooks やサンプルコードには、`ref` を使ってダイアログの開閉やフォーカス移動などのふるまいを実現しているものがあります。`ref` を渡して使うコンポーネントは、必ず `forwardRef` で包んでください。

## 2. hooks の戻り値の型を変更する

付属の hooks が返す `ref` の型は、React v19 の型定義にあわせて `RefObject<T | null>` としています。React v18 の型定義では `forwardRef` で包んだコンポーネントに渡せないため、`RefObject<T>` に変更してください。

`useModalDialog` の場合は以下のようになります。

```diff
 export type UseModalDialogResult = {
   dialogProps: {
-    ref: RefObject<HTMLDialogElement | null>;
+    ref: RefObject<HTMLDialogElement>;
     'aria-labelledby': string;
   };
```

## 3. Popover API の属性名（サンプルコードのみ）

LanguageSelector の Popover API を使ったサンプルでは `popoverTarget` を使用しています。React v18 では `popovertarget`（小文字）と記述してください。なお、React v18 の型定義には `popover` / `popovertarget` がないため、型エラーへの対処が必要です。
