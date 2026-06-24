import { composeStories } from '@storybook/react-vite';
import { describe, expect, test, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import { Tab, TabItem, TabList, TabPanel } from './Tab';
import * as stories from './Tab.stories';
import { useTab } from './useTab';
import { useTabAria } from './useTabAria';

const { Playground, PlaygroundAria } = composeStories(stories);

describe('useTab', () => {
  describe('初期化', () => {
    test('最初のタブに aria-current="true" が設定されるべき', async () => {
      render(<Playground />);

      const links = page.getByRole('link', { name: 'タブラベル' });
      await expect.element(links.nth(0)).toHaveAttribute('aria-current', 'true');
      await expect.element(links.nth(1)).not.toHaveAttribute('aria-current');
    });

    test('最初のパネルが表示され他は非表示であるべき', async () => {
      render(<Playground />);

      await expect.element(page.getByRole('link', { name: 'タブラベル' }).nth(0)).toBeVisible();
      const hiddenPanels = document.querySelectorAll<HTMLDivElement>('div[hidden]');
      expect(hiddenPanels.length).toBeGreaterThan(0);
    });

    test('初期化時に onTabChange は発火しないべき', async () => {
      const handler = vi.fn();

      const TestComponent = () => {
        const { getListProps, getTabProps, getPanelProps } = useTab({ onTabChange: handler });
        return (
          <Tab>
            <TabList {...getListProps()}>
              <TabItem {...getTabProps(0)}>タブ1</TabItem>
              <TabItem {...getTabProps(1)}>タブ2</TabItem>
            </TabList>
            <TabPanel {...getPanelProps(0)}>パネル1</TabPanel>
            <TabPanel {...getPanelProps(1)}>パネル2</TabPanel>
          </Tab>
        );
      };

      render(<TestComponent />);
      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe('タブ選択', () => {
    test('クリックで aria-current が更新されるべき', async () => {
      render(<Playground />);

      await page.getByRole('link', { name: 'タブラベル' }).nth(1).click();

      const links = page.getByRole('link', { name: 'タブラベル' });
      await expect.element(links.nth(1)).toHaveAttribute('aria-current', 'true');
      await expect.element(links.nth(0)).not.toHaveAttribute('aria-current');
    });

    test('クリック後に選択パネル以外が非表示になるべき', async () => {
      render(<Playground />);

      await page.getByRole('link', { name: 'タブラベル' }).nth(2).click();

      await expect
        .element(page.getByRole('link', { name: 'タブラベル' }).nth(2))
        .toHaveAttribute('aria-current', 'true');
      await expect
        .element(page.getByRole('link', { name: 'タブラベル' }).nth(0))
        .not.toHaveAttribute('aria-current');
    });

    test('クリックで onTabChange が発火し detail が正しいべき', async () => {
      const handler = vi.fn();

      const TestComponent = () => {
        const { getListProps, getTabProps, getPanelProps } = useTab({ onTabChange: handler });
        return (
          <>
            <h2 id='onchange-heading'>見出し</h2>
            <Tab>
              <TabList {...getListProps()} aria-labelledby='onchange-heading'>
                <TabItem {...getTabProps(0)}>タブ1</TabItem>
                <TabItem {...getTabProps(1)}>タブ2</TabItem>
              </TabList>
              <TabPanel {...getPanelProps(0)}>パネル1</TabPanel>
              <TabPanel {...getPanelProps(1)}>パネル2</TabPanel>
            </Tab>
          </>
        );
      };

      render(<TestComponent />);
      await page.getByRole('link', { name: 'タブ2' }).click();

      expect(handler).toHaveBeenCalledOnce();
      expect(handler).toHaveBeenCalledWith({ selectedIndex: 1, selectedTabLabel: 'タブ2' });
    });
  });

  describe('visually-hidden 見出し挿入', () => {
    test('各パネル先頭に visually-hidden 見出しが挿入されるべき', async () => {
      render(<Playground />);

      const headings = page.getByRole('heading', { name: 'タブラベル', includeHidden: true });
      for (let i = 0; i < 5; i++) {
        await expect.element(headings.nth(i)).toBeInTheDocument();
      }
    });

    test('挿入された見出しのテキストはタブラベルと一致するべき', async () => {
      render(<Playground />);

      const headings = page.getByRole('heading', { name: 'タブラベル', includeHidden: true });
      for (let i = 0; i < 5; i++) {
        await expect.element(headings.nth(i)).toHaveTextContent('タブラベル');
      }
    });
  });
});

describe('useTabAria', () => {
  describe('初期化', () => {
    test('最初のタブの aria-selected が true、他は false であるべき', async () => {
      render(<PlaygroundAria />);

      const tabs = page.getByRole('tab', { name: 'タブラベル' });
      await expect.element(tabs.nth(0)).toHaveAttribute('aria-selected', 'true');
      await expect.element(tabs.nth(1)).toHaveAttribute('aria-selected', 'false');
      await expect.element(tabs.nth(2)).toHaveAttribute('aria-selected', 'false');
    });

    test('最初のタブの tabIndex が 0、他は -1 であるべき', async () => {
      render(<PlaygroundAria />);

      const tabs = page.getByRole('tab', { name: 'タブラベル' });
      await expect.element(tabs.nth(0)).toHaveAttribute('tabindex', '0');
      await expect.element(tabs.nth(1)).toHaveAttribute('tabindex', '-1');
    });

    test('最初のパネルのみ表示されるべき', async () => {
      render(<PlaygroundAria />);

      const panels = page.getByRole('tabpanel', { includeHidden: true });
      await expect.element(panels.nth(0)).toBeVisible();
      await expect.element(panels.nth(1)).not.toBeVisible();
    });

    test('タブとパネルに aria-controls / aria-labelledby が設定されるべき', async () => {
      render(<PlaygroundAria />);

      await expect.element(page.getByRole('tab', { name: 'タブラベル' }).nth(0)).toBeVisible();

      const tab0 = page.getByRole('tab', { name: 'タブラベル' }).nth(0).element();
      const panel0 = page.getByRole('tabpanel', { includeHidden: true }).nth(0).element();

      expect(tab0.getAttribute('aria-controls')).toBe(panel0.id);
      expect(panel0.getAttribute('aria-labelledby')).toBe(tab0.id);
    });
  });

  describe('タブ選択（クリック）', () => {
    test('クリックで対応するパネルが表示されるべき', async () => {
      render(<PlaygroundAria />);

      await page.getByRole('tab', { name: 'タブラベル' }).nth(1).click();

      const panels = page.getByRole('tabpanel', { includeHidden: true });
      await expect.element(panels.nth(1)).toBeVisible();
      await expect.element(panels.nth(0)).not.toBeVisible();
    });

    test('クリックで aria-selected が更新されるべき', async () => {
      render(<PlaygroundAria />);

      await page.getByRole('tab', { name: 'タブラベル' }).nth(1).click();

      const tabs = page.getByRole('tab', { name: 'タブラベル' });
      await expect.element(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
      await expect.element(tabs.nth(0)).toHaveAttribute('aria-selected', 'false');
    });

    test('クリックで tabIndex が更新されるべき', async () => {
      render(<PlaygroundAria />);

      await page.getByRole('tab', { name: 'タブラベル' }).nth(1).click();

      const tabs = page.getByRole('tab', { name: 'タブラベル' });
      await expect.element(tabs.nth(1)).toHaveAttribute('tabindex', '0');
      await expect.element(tabs.nth(0)).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('キーボードナビゲーション（auto activation）', () => {
    test('右矢印キーで次のタブが選択されるべき', async () => {
      render(<PlaygroundAria />);

      await page.getByRole('tab', { name: 'タブラベル' }).nth(0).click();
      await userEvent.keyboard('{ArrowRight}');

      await expect
        .element(page.getByRole('tab', { name: 'タブラベル' }).nth(1))
        .toHaveAttribute('aria-selected', 'true');
    });

    test('左矢印キーで前のタブが選択されるべき', async () => {
      render(<PlaygroundAria />);

      await page.getByRole('tab', { name: 'タブラベル' }).nth(2).click();
      await userEvent.keyboard('{ArrowLeft}');

      await expect
        .element(page.getByRole('tab', { name: 'タブラベル' }).nth(1))
        .toHaveAttribute('aria-selected', 'true');
    });

    test('最後のタブで右矢印キーを押しても選択は変わらないべき', async () => {
      render(<PlaygroundAria />);

      await page.getByRole('tab', { name: 'タブラベル' }).nth(4).click();
      await userEvent.keyboard('{ArrowRight}');

      await expect
        .element(page.getByRole('tab', { name: 'タブラベル' }).nth(4))
        .toHaveAttribute('aria-selected', 'true');
    });

    test('最初のタブで左矢印キーを押しても選択は変わらないべき', async () => {
      render(<PlaygroundAria />);

      await page.getByRole('tab', { name: 'タブラベル' }).nth(0).click();
      await userEvent.keyboard('{ArrowLeft}');

      await expect
        .element(page.getByRole('tab', { name: 'タブラベル' }).nth(0))
        .toHaveAttribute('aria-selected', 'true');
    });

    test('Home キーで最初のタブが選択されるべき', async () => {
      render(<PlaygroundAria />);

      await page.getByRole('tab', { name: 'タブラベル' }).nth(2).click();
      await userEvent.keyboard('{Home}');

      await expect
        .element(page.getByRole('tab', { name: 'タブラベル' }).nth(0))
        .toHaveAttribute('aria-selected', 'true');
    });

    test('End キーで最後のタブが選択されるべき', async () => {
      render(<PlaygroundAria />);

      await page.getByRole('tab', { name: 'タブラベル' }).nth(0).click();
      await userEvent.keyboard('{End}');

      await expect
        .element(page.getByRole('tab', { name: 'タブラベル' }).nth(4))
        .toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('キーボードナビゲーション（manual activation）', () => {
    test('矢印キーでフォーカスのみ移動し aria-selected は変わらないべき', async () => {
      render(<PlaygroundAria activation='manual' />);

      await page.getByRole('tab', { name: 'タブラベル' }).nth(0).click();
      await userEvent.keyboard('{ArrowRight}');

      await expect.element(page.getByRole('tab', { name: 'タブラベル' }).nth(1)).toHaveFocus();
      await expect
        .element(page.getByRole('tab', { name: 'タブラベル' }).nth(0))
        .toHaveAttribute('aria-selected', 'true');
    });

    test('Space キーでフォーカス中のタブが選択されるべき', async () => {
      render(<PlaygroundAria activation='manual' />);

      await page.getByRole('tab', { name: 'タブラベル' }).nth(0).click();
      await userEvent.keyboard('{ArrowRight}');
      await userEvent.keyboard('{ }');

      await expect
        .element(page.getByRole('tab', { name: 'タブラベル' }).nth(1))
        .toHaveAttribute('aria-selected', 'true');
    });

    test('Enter キーでフォーカス中のタブが選択されるべき', async () => {
      render(<PlaygroundAria activation='manual' />);

      await page.getByRole('tab', { name: 'タブラベル' }).nth(0).click();
      await userEvent.keyboard('{ArrowRight}');
      await userEvent.keyboard('{Enter}');

      await expect
        .element(page.getByRole('tab', { name: 'タブラベル' }).nth(1))
        .toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('onTabChange コールバック', () => {
    test('クリックで onTabChange が発火し detail が正しいべき', async () => {
      const handler = vi.fn();

      const TestComponent = () => {
        const { getListProps, getTabProps, getPanelProps } = useTabAria({ onTabChange: handler });
        return (
          <Tab>
            <TabList {...getListProps()}>
              <TabItem {...getTabProps(0)}>タブA</TabItem>
              <TabItem {...getTabProps(1)}>タブB</TabItem>
            </TabList>
            <TabPanel {...getPanelProps(0)}>パネル1</TabPanel>
            <TabPanel {...getPanelProps(1)}>パネル2</TabPanel>
          </Tab>
        );
      };

      render(<TestComponent />);
      await page.getByRole('tab', { name: 'タブB' }).click();

      expect(handler).toHaveBeenCalledOnce();
      expect(handler).toHaveBeenCalledWith({ selectedIndex: 1, selectedTabLabel: 'タブB' });
    });

    test('初期化時に onTabChange は発火しないべき', async () => {
      const handler = vi.fn();

      const TestComponent = () => {
        const { getListProps, getTabProps, getPanelProps } = useTabAria({ onTabChange: handler });
        return (
          <Tab>
            <TabList {...getListProps()}>
              <TabItem {...getTabProps(0)}>タブA</TabItem>
              <TabItem {...getTabProps(1)}>タブB</TabItem>
            </TabList>
            <TabPanel {...getPanelProps(0)}>パネル1</TabPanel>
            <TabPanel {...getPanelProps(1)}>パネル2</TabPanel>
          </Tab>
        );
      };

      render(<TestComponent />);
      await expect.element(page.getByRole('tab', { name: 'タブA' })).toBeVisible();

      expect(handler).not.toHaveBeenCalled();
    });
  });
});
