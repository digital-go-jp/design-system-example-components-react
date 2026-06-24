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
          [ 'はじめに', 'React版の開発方針' ],
          'Foundations',
          ['カラー', 'タイポグラフィ', 'エレベーション'],
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
            '水平メニュー',
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
            'プログレスインジケーター',
            'ボタン',
            'メニューリスト',
            '見出し',
            'ユーティリティリンク',
            'ラジオボタン',
            'ランゲージセレクター',
            'リンク',
            '*',
            'Parts',
            'DADS v1',
          ],
        ],
      },
    },

    docs: {
      theme: dadsTheme,
      codePanel: true,
      page: DocsTemplate,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
