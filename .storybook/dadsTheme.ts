import { create } from 'storybook/theming/create';

export default create({
  base: 'light',

  brandTitle: 'デジタル庁デザインシステム　コードスニペット（React版）',
  brandTarget: '_self',

  fontBase: "var(--font-family-sans), sans-serif",
  fontCode: "var(--font-family-mono), monospace",

  colorPrimary: "#0017c1",
  colorSecondary: "#3460fb",

  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",

  // appBorderColor: "#949494",
  appBorderRadius: 8,

  textColor: "#333333",
  textInverseColor: "#aaaaaa",
  textMutedColor: "#767676",

  barTextColor: "#333333",
  barHoverColor: "#1a1a1a",
  barSelectedColor: "#0017c1",
  barBg: "#ffffff",

  buttonBg: "#ffffff",
  buttonBorder: "#949494",
  booleanBg: "#767676",
  booleanSelectedBg: "#ffffff",

  inputBg: "#ffffff",
  inputBorder: "#767676",
  inputTextColor: "#333333",
});
