import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
  Unstyled,
} from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useId } from 'react';
import { MenuList, MenuListItem, MenuListItemButton } from '../MenuList';
import {
  MenuListBox,
  MenuListBoxOpener,
  type MenuListBoxOpenerFontWeight,
  type MenuListBoxOpenerSize,
  type MenuListBoxOpenerStyle,
  MenuListBoxPopup,
} from './MenuListBox';
import type { MenuItemSelectDetail } from './useMenuListBox';
import { useMenuListBox } from './useMenuListBox';

const meta = {
  id: 'Component/DADS v2/MenuListBox',
  title: 'Component/メニューリストボックス',
  component: MenuListBox,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='h-80'>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      page: () => (
        <Unstyled>
          <div className='prose'>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Stories includePrimary={false} />

            <h2>仕様</h2>

            <h3>コンポーネント構成</h3>
            <ul>
              <li>
                <code>MenuListBox</code>: ルートコンテナ。<code>&lt;div&gt;</code>要素
              </li>
              <li>
                <code>MenuListBoxOpener</code>: メニューを開閉するボタン。
                <code>&lt;button&gt;</code>
                要素。下向きシェブロン矢印を内蔵し、開閉状態に応じて自動回転
              </li>
              <li>
                <code>MenuListBoxPopup</code>: ポップアップコンテナ。<code>&lt;div&gt;</code>要素。
                <code>useMenuListBox</code>が返す<code>isOpen</code>で条件レンダーする
              </li>
              <li>
                <code>useMenuListBox</code>:
                開閉・キーボードナビゲーション・フォーカス管理を担うフック。
                コンポーネントボディにはロジックを持たせず、このフックを使用して
                <code>isOpen</code> / <code>rootProps</code> / <code>openerProps</code> /{' '}
                <code>popupProps</code>を各コンポーネントに展開する
              </li>
            </ul>

            <h3>Props</h3>

            <h4 id='menu-list-box-props'>
              <code>MenuListBox</code>
            </h4>
            <p>
              <code>ComponentProps&lt;'div'&gt;</code>をそのまま拡張。追加 props なし。
            </p>

            <h4 id='menu-list-box-opener-props'>
              <code>MenuListBoxOpener</code>
            </h4>
            <table aria-labelledby='menu-list-box-opener-props' className='w-full'>
              <thead>
                <tr>
                  <th scope='col' className='text-nowrap'>
                    Props
                  </th>
                  <th scope='col'>説明</th>
                  <th scope='col' className='text-nowrap'>
                    デフォルト
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='whitespace-nowrap'>
                    <code>size</code>
                  </td>
                  <td>
                    <div>
                      <code>'sm' | 'md'</code>
                    </div>
                    ボタンのサイズ。<code>sm</code>は最小高36px・横余白4px、
                    <code>md</code>は最小高44px・横余白16px
                  </td>
                  <td>-（必須）</td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>
                    <code>buttonStyle</code>
                  </td>
                  <td>
                    <div>
                      <code>'text' | 'outlined' | 'filled'</code>
                    </div>
                    ボタンのスタイル。<code>text</code>は背景なし、<code>outlined</code>
                    は枠線あり、<code>filled</code>はグレー背景
                  </td>
                  <td>-（必須）</td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>
                    <code>fontWeight</code>
                  </td>
                  <td>
                    <div>
                      <code>'normal' | 'bold'</code>
                    </div>
                    ボタンテキストのフォントウェイト
                  </td>
                  <td>
                    <code>'normal'</code>
                  </td>
                </tr>
              </tbody>
            </table>

            <h4 id='menu-list-box-popup-props'>
              <code>MenuListBoxPopup</code>
            </h4>
            <p>
              <code>ComponentProps&lt;'div'&gt;</code>をそのまま拡張。追加 props なし。
              <code>useMenuListBox</code>が返す<code>isOpen</code>を使って条件レンダーする。
            </p>

            <h4 id='use-menu-list-box-options'>
              <code>useMenuListBox</code> オプション
            </h4>
            <table aria-labelledby='use-menu-list-box-options' className='w-full'>
              <thead>
                <tr>
                  <th scope='col' className='text-nowrap'>
                    オプション
                  </th>
                  <th scope='col'>説明</th>
                  <th scope='col' className='text-nowrap'>
                    デフォルト
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='whitespace-nowrap'>
                    <code>isOpen</code>
                  </td>
                  <td>
                    <div>
                      <code>boolean</code>
                    </div>
                    メニューの開閉状態。<code>MenuListBoxPopup</code>の条件レンダーに使用する
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>
                    <code>onMenuItemSelect</code>
                  </td>
                  <td>
                    <div>
                      <code>
                        {'(detail: { selectedValue: string; selectedIndex: number }) => void'}
                      </code>
                    </div>
                    メニュー項目が選択されたときに呼び出されるコールバック。選択されたテキスト（
                    <code>selectedValue</code>）とインデックス（<code>selectedIndex</code>
                    ）を受け取る
                  </td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>

            <h3>機能仕様</h3>

            <h4 id='keyboard-ops'>キーボード操作</h4>
            <table aria-labelledby='keyboard-ops' className='w-full'>
              <thead>
                <tr>
                  <th scope='col' className='text-nowrap'>
                    キー
                  </th>
                  <th scope='col'>オープナーにフォーカス時</th>
                  <th scope='col'>メニュー項目にフォーカス時</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>Enter</code> / <code>Space</code>
                  </td>
                  <td>メニューを開閉。開いたとき最初の項目にフォーカス</td>
                  <td>項目を選択してメニューを閉じる</td>
                </tr>
                <tr>
                  <td>
                    <code>↓</code>
                  </td>
                  <td>メニューを開き最初の項目にフォーカス</td>
                  <td>次の項目にフォーカス</td>
                </tr>
                <tr>
                  <td>
                    <code>↑</code>
                  </td>
                  <td>メニューを開き最後の項目にフォーカス</td>
                  <td>前の項目にフォーカス</td>
                </tr>
                <tr>
                  <td>
                    <code>Home</code>
                  </td>
                  <td>—</td>
                  <td>最初の項目にフォーカス</td>
                </tr>
                <tr>
                  <td>
                    <code>End</code>
                  </td>
                  <td>—</td>
                  <td>最後の項目にフォーカス</td>
                </tr>
                <tr>
                  <td>
                    <code>Escape</code>
                  </td>
                  <td>—</td>
                  <td>メニューを閉じてオープナーにフォーカスを戻す</td>
                </tr>
                <tr>
                  <td>
                    <code>Tab</code>
                  </td>
                  <td>—</td>
                  <td>フォーカスがコンポーネント外に移るとメニューを閉じる</td>
                </tr>
              </tbody>
            </table>

            <h4>必須のARIA属性</h4>
            <p>
              アクセシビリティを確保するために、以下の属性を正しく設定してください。
              <code>aria-expanded</code>は<code>useMenuListBox</code>の<code>openerProps</code>
              から自動で設定されます。
            </p>
            <ul>
              <li>
                オープナーボタン: <code>id</code>（メニューの<code>aria-labelledby</code>
                から参照）、
                <code>aria-controls</code>（ポップアップメニューのIDを指定）。
                <code>aria-haspopup="menu"</code>と<code>aria-expanded</code>は
                <code>MenuListBoxOpener</code>と<code>useMenuListBox</code>が自動で付与する
              </li>
              <li>
                ポップアップメニュー: <code>role="menu"</code>、<code>aria-labelledby</code>（
                オープナーボタンのIDを参照）
              </li>
              <li>
                メニュー項目: <code>role="menuitem"</code>、<code>tabIndex={-1}</code>（初期値）
              </li>
              <li>
                項目の<code>&lt;li&gt;</code>ラッパー: <code>role="presentation"</code>
              </li>
            </ul>

            <h4>フロントアイコン</h4>
            <p>
              オープナーボタンにフロントアイコンを追加する場合は、<code>children</code>として
              <code>&lt;svg&gt;</code>を直接配置してください。必要なクラスを適用して
              サイズや縮小防止を制御します（例: <code>className='shrink-0 w-5 h-5'</code>）。
            </p>

            <h2>使い方</h2>

            <h3>基本的な使い方</h3>
            <pre>
              <code>
                {`import { useId } from 'react';
import { MenuList, MenuListItem, MenuListItemButton } from '@digital-go-jp/dads';
import {
  MenuListBox, MenuListBoxOpener, MenuListBoxPopup, useMenuListBox,
} from '@digital-go-jp/dads';

const MyMenu = () => {
  const openerId = useId();
  const menuId = useId();
   const { isOpen, rootProps, openerProps, popupProps } = useMenuListBox({
    onMenuItemSelect: ({ selectedValue, selectedIndex }) => {
      console.log(selectedValue, selectedIndex);
    },
  });

  return (
    <MenuListBox {...rootProps}>
      <MenuListBoxOpener
        {...openerProps}
        id={openerId}
        aria-controls={menuId}
        size="sm"
        buttonStyle="text"
      >
        メニュー
      </MenuListBoxOpener>
      {isOpen && (
        <MenuListBoxPopup {...popupProps}>
          <MenuList id={menuId} role="menu" aria-labelledby={openerId}>
            <MenuListItem role="presentation">
              <MenuListItemButton type="box" size="regular" role="menuitem" tabIndex={-1}>
                <span>メニュー項目1</span>
              </MenuListItemButton>
            </MenuListItem>
          </MenuList>
        </MenuListBoxPopup>
      )}
    </MenuListBox>
  );
};`}
              </code>
            </pre>

            <h2>参考情報</h2>
            <ul>
              <li>
                <a href='https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/'>
                  WAI-ARIA Authoring Practices - Menu Button
                </a>
              </li>
            </ul>
          </div>
        </Unstyled>
      ),
    },
  },
} satisfies Meta<typeof MenuListBox>;

export default meta;

interface PlaygroundArgs {
  size: MenuListBoxOpenerSize;
  buttonStyle: MenuListBoxOpenerStyle;
  fontWeight: MenuListBoxOpenerFontWeight;
  onMenuItemSelect: (detail: MenuItemSelectDetail) => void;
}

export const Playground: StoryObj<PlaygroundArgs> = {
  render: (args) => {
    const openerId = useId();
    const menuId = useId();
    const { isOpen, rootProps, openerProps, popupProps } = useMenuListBox({
      onMenuItemSelect: args.onMenuItemSelect,
    });

    return (
      <MenuListBox {...rootProps}>
        <MenuListBoxOpener
          {...openerProps}
          id={openerId}
          aria-controls={menuId}
          size={args.size}
          buttonStyle={args.buttonStyle}
          fontWeight={args.fontWeight}
        >
          <svg
            aria-hidden={true}
            className='shrink-0 w-5 h-5'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
          >
            <path d='M4.6 20.5c-.5-.1-1-.6-1.1-1l16-16c.5.1.9.6 1 1l-16 16Zm-1.1-6.4v-2L12 3.4h2.1L3.5 14.1Zm0-7.4V5.3c0-1 .8-1.8 1.8-1.8h1.4L3.5 6.7Zm13.8 13.8 3.2-3.2v1.4c0 1-.8 1.8-1.8 1.8h-1.4Zm-7.4 0L20.5 9.9v2L12 20.6H9.9Z' />
          </svg>
          メニュー
        </MenuListBoxOpener>
        {isOpen && (
          <MenuListBoxPopup {...popupProps}>
            <MenuList id={menuId} role='menu' aria-labelledby={openerId}>
              {[
                'メニュー項目1',
                'メニュー項目2',
                'メニュー項目3',
                'メニュー項目4',
                'メニュー項目5',
                'メニュー項目6',
                'メニュー項目7',
              ].map((label) => (
                <MenuListItem key={label} role='presentation'>
                  <MenuListItemButton type='box' size='regular' role='menuitem' tabIndex={-1}>
                    <svg
                      aria-hidden={true}
                      className='shrink-0 w-6 h-6'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d='M4.6 20.5c-.5-.1-1-.6-1.1-1l16-16c.5.1.9.6 1 1l-16 16Zm-1.1-6.4v-2L12 3.4h2.1L3.5 14.1Zm0-7.4V5.3c0-1 .8-1.8 1.8-1.8h1.4L3.5 6.7Zm13.8 13.8 3.2-3.2v1.4c0 1-.8 1.8-1.8 1.8h-1.4Zm-7.4 0L20.5 9.9v2L12 20.6H9.9Z' />
                    </svg>
                    <span>{label}</span>
                  </MenuListItemButton>
                </MenuListItem>
              ))}
            </MenuList>
          </MenuListBoxPopup>
        )}
      </MenuListBox>
    );
  },
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md'] },
    buttonStyle: { control: 'radio', options: ['text', 'outlined', 'filled'] },
    fontWeight: { control: 'radio', options: ['normal', 'bold'] },
    onMenuItemSelect: { action: 'onMenuItemSelect' },
  },
  args: {
    size: 'sm',
    buttonStyle: 'text',
    fontWeight: 'normal',
  },
};
