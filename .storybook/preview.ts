import type { Preview } from '@storybook/react-vite';
import { DocsTemplate } from './DocsTemplate';
import dadsTheme from "./dadsTheme";
import './globals.css';
import "./prose.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    options: {
      storySort: {
        order: [
          'Documents',
          [
            'はじめに'
          ],
          'Component',
          [
            'アコーディオン',
            'パンくずリスト',
            'インプットテキスト',
            '引用ブロック',
            'カレンダー',
            '箇条書きリスト',
            'カルーセル',
            '緊急時バナー',
            '説明リスト',
            'セレクトボックス',
            'チェックボックス',
            'チップラベル',
            'テーブル',
            'ディスクロージャー',
            'ディバイダー',
            'テキストエリア',
            'ドロワー',
            'ノティフィケーションバナー',
            'ハンバーガーメニューボタン',
            '日付ピッカー',
            'ファイルアップロード／ドロップエリア',
            'フォームコントロールラベル',
            'ボタン',
            '見出し',
            'ユーティリティリンク',
            'ラジオボタン',
            'ランゲージセレクター',
            'リンク',
            '*',
            'Parts',
            'DADS v1',
          ],
          'tokens',
        ],
      },
    },

    docs: {
      theme: dadsTheme,
      codePanel: true,
      page: DocsTemplate,
    },
  },
};

export default preview;
