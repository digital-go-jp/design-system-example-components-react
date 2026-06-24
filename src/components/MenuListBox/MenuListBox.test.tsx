import { composeStories } from '@storybook/react-vite';
import { describe, expect, test, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import * as stories from './MenuListBox.stories';

const { Playground } = composeStories(stories);

describe('MenuListBox', () => {
  describe('初期状態', () => {
    test('メニューが閉じている', async () => {
      render(<Playground />);
      const opener = page.getByRole('button', { name: /メニュー/ });
      await expect.element(opener).toHaveAttribute('aria-expanded', 'false');
    });

    test('全メニュー項目の tabindex が -1', async () => {
      render(<Playground />);
      const items = page.getByRole('menuitem');
      const count = items.elements().length;
      for (let i = 0; i < count; i++) {
        await expect.element(items.nth(i)).toHaveAttribute('tabindex', '-1');
      }
    });
  });

  describe('メニューの開閉', () => {
    test('クリックでメニューを開閉する', async () => {
      render(<Playground />);
      const opener = page.getByRole('button', { name: /メニュー/ });

      await opener.click();
      await expect.element(opener).toHaveAttribute('aria-expanded', 'true');

      await opener.click();
      await expect.element(opener).toHaveAttribute('aria-expanded', 'false');
    });

    test('外部クリックでメニューを閉じる', async () => {
      render(
        <div>
          <Playground />
          <button id='outside' type='button'>
            外部ボタン
          </button>
        </div>,
      );

      const opener = page.getByRole('button', { name: /メニュー/ });
      await opener.click();
      await expect.element(opener).toHaveAttribute('aria-expanded', 'true');

      await page.getByRole('button', { name: '外部ボタン' }).click();
      await expect.element(opener).toHaveAttribute('aria-expanded', 'false');
    });

    test('Escapeキーでメニューを閉じ、オープナーにフォーカスが戻る', async () => {
      render(<Playground />);
      const opener = page.getByRole('button', { name: /メニュー/ });

      await opener.click();
      await expect.element(opener).toHaveAttribute('aria-expanded', 'true');

      await userEvent.keyboard('{Escape}');
      await expect.element(opener).toHaveAttribute('aria-expanded', 'false');
      await expect.element(opener).toHaveFocus();
    });

    test('Tab キーでフォーカスがメニュー外に移動するとメニューが閉じる', async () => {
      render(
        <div>
          <Playground />
          <button type='button'>外部ボタン</button>
        </div>,
      );

      const opener = page.getByRole('button', { name: /メニュー/ });
      await opener.click();
      await expect.element(opener).toHaveAttribute('aria-expanded', 'true');

      await userEvent.tab();
      await expect.element(opener).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('キーボードナビゲーション: オープナー', () => {
    test('ArrowDown でメニューを開き最初の項目にフォーカス', async () => {
      render(<Playground />);
      await userEvent.tab();
      await userEvent.keyboard('{ArrowDown}');
      const opener = page.getByRole('button', { name: /メニュー/ });
      await expect.element(opener).toHaveAttribute('aria-expanded', 'true');
      await expect.element(page.getByRole('menuitem').first()).toHaveFocus();
    });

    test('ArrowUp でメニューを開き最後の項目にフォーカス', async () => {
      render(<Playground />);
      await userEvent.tab();
      await userEvent.keyboard('{ArrowUp}');
      const opener = page.getByRole('button', { name: /メニュー/ });
      await expect.element(opener).toHaveAttribute('aria-expanded', 'true');
      await expect.element(page.getByRole('menuitem').last()).toHaveFocus();
    });

    test('Enter でメニューを開き最初の項目にフォーカス', async () => {
      render(<Playground />);
      await userEvent.tab();
      await userEvent.keyboard('{Enter}');
      const opener = page.getByRole('button', { name: /メニュー/ });
      await expect.element(opener).toHaveAttribute('aria-expanded', 'true');
      await expect.element(page.getByRole('menuitem').first()).toHaveFocus();
    });

    test('Space でメニューを開き最初の項目にフォーカス', async () => {
      render(<Playground />);
      await userEvent.tab();
      await userEvent.keyboard('{ }');
      const opener = page.getByRole('button', { name: /メニュー/ });
      await expect.element(opener).toHaveAttribute('aria-expanded', 'true');
      await expect.element(page.getByRole('menuitem').first()).toHaveFocus();
    });
  });

  describe('キーボードナビゲーション: メニュー内', () => {
    test('ArrowDown で次の項目にフォーカスし tabindex を更新', async () => {
      render(<Playground />);
      await page.getByRole('button', { name: /メニュー/ }).click();
      const items = page.getByRole('menuitem');
      await expect.element(items.nth(0)).toHaveFocus();

      await userEvent.keyboard('{ArrowDown}');
      await expect.element(items.nth(1)).toHaveFocus();
      await expect.element(items.nth(1)).toHaveAttribute('tabindex', '0');
      await expect.element(items.nth(0)).toHaveAttribute('tabindex', '-1');
    });

    test('ArrowUp で前の項目にフォーカスし tabindex を更新', async () => {
      render(<Playground />);
      const items = page.getByRole('menuitem');

      await page.getByRole('button', { name: /メニュー/ }).click();
      await userEvent.keyboard('{ArrowDown}');
      await userEvent.keyboard('{ArrowUp}');
      await expect.element(items.nth(0)).toHaveFocus();
      await expect.element(items.nth(0)).toHaveAttribute('tabindex', '0');
      await expect.element(items.nth(1)).toHaveAttribute('tabindex', '-1');
    });

    test('Home で最初の項目、End で最後の項目にフォーカス', async () => {
      render(<Playground />);
      const items = page.getByRole('menuitem');

      await page.getByRole('button', { name: /メニュー/ }).click();
      await userEvent.keyboard('{End}');
      await expect.element(items.last()).toHaveFocus();
      await userEvent.keyboard('{Home}');
      await expect.element(items.nth(0)).toHaveFocus();
    });

    test('先頭項目で ArrowUp してもフォーカスが循環しない', async () => {
      render(<Playground />);
      const items = page.getByRole('menuitem');

      await page.getByRole('button', { name: /メニュー/ }).click();
      await userEvent.keyboard('{ArrowUp}');
      await expect.element(items.nth(0)).toHaveFocus();
    });

    test('末尾項目で ArrowDown してもフォーカスが循環しない', async () => {
      render(<Playground />);
      const items = page.getByRole('menuitem');

      await page.getByRole('button', { name: /メニュー/ }).click();
      await userEvent.keyboard('{End}');
      await userEvent.keyboard('{ArrowDown}');
      await expect.element(items.last()).toHaveFocus();
    });
  });

  describe('メニューアイテム選択', () => {
    test('クリックでアイテムを選択しメニューを閉じコールバックを発火する', async () => {
      const handler = vi.fn();
      render(<Playground onMenuItemSelect={handler} />);
      const opener = page.getByRole('button', { name: /メニュー/ });

      await opener.click();
      await page.getByRole('menuitem', { name: /メニュー項目2/ }).click();

      await expect.element(opener).toHaveAttribute('aria-expanded', 'false');
      await expect.element(opener).toHaveFocus();

      expect(handler).toHaveBeenCalledOnce();
      const detail = handler.mock.calls[0][0];
      expect(detail.selectedValue).toBe('メニュー項目2');
      expect(detail.selectedIndex).toBe(1);
    });

    test('Enter でアイテムを選択しメニューを閉じコールバックを発火する', async () => {
      const handler = vi.fn();
      render(<Playground onMenuItemSelect={handler} />);
      const opener = page.getByRole('button', { name: /メニュー/ });

      await opener.click();
      await userEvent.keyboard('{ArrowDown}');
      await userEvent.keyboard('{Enter}');

      await expect.element(opener).toHaveAttribute('aria-expanded', 'false');
      await expect.element(opener).toHaveFocus();

      expect(handler).toHaveBeenCalledOnce();
      expect(handler.mock.calls[0][0].selectedValue).toBe('メニュー項目2');
      expect(handler.mock.calls[0][0].selectedIndex).toBe(1);
    });

    test('Space でアイテムを選択しメニューを閉じる', async () => {
      const handler = vi.fn();
      render(<Playground onMenuItemSelect={handler} />);
      const opener = page.getByRole('button', { name: /メニュー/ });

      await opener.click();
      await expect.element(page.getByRole('menuitem').nth(0)).toHaveFocus();
      await userEvent.keyboard('{ }');

      await expect.element(opener).toHaveAttribute('aria-expanded', 'false');
      await expect.element(opener).toHaveFocus();

      expect(handler).toHaveBeenCalledOnce();
      expect(handler.mock.calls[0][0].selectedValue).toBe('メニュー項目1');
      expect(handler.mock.calls[0][0].selectedIndex).toBe(0);
    });
  });
});
