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
import {
  HorizontalMenu,
  HorizontalMenuItem,
  HorizontalMenuItemButton,
  HorizontalMenuItemLink,
} from './HorizontalMenu';

const meta = {
  id: 'Component/DADS v2/HorizontalMenu',
  title: 'Component/水平メニュー',
  component: HorizontalMenu,
  tags: ['autodocs'],
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
                <code>HorizontalMenu</code>: ルートとなる <code>&lt;ul&gt;</code>{' '}
                要素。水平メニューのコンテナ
              </li>
              <li>
                <code>HorizontalMenuItem</code>: <code>&lt;li&gt;</code>{' '}
                要素。各メニュー項目のラッパー
              </li>
              <li>
                <code>HorizontalMenuItemLink</code>: ナビゲーションリンク用の <code>&lt;a&gt;</code>{' '}
                要素
              </li>
              <li>
                <code>HorizontalMenuItemButton</code>: サブメニューの展開など、アクション用の{' '}
                <code>&lt;button&gt;</code> 要素
              </li>
            </ul>

            <h3>機能仕様</h3>
            <ul>
              <li>
                <strong>リンク項目</strong>: <code>HorizontalMenuItemLink</code> を使用し、
                <code>href</code> 属性で遷移先を指定します
              </li>
              <li>
                <strong>サブメニュー付き項目</strong>: <code>HorizontalMenuItemButton</code>{' '}
                を使用し、<code>aria-expanded</code> 属性でサブメニューの開閉状態を示します
              </li>
              <li>
                <strong>現在地表示</strong>: <code>aria-current</code>{' '}
                属性を設定すると、現在のページであることを視覚的に示します
              </li>
            </ul>

            <h2>使い方</h2>

            <h3>項目の要素</h3>
            <p>
              ナビゲーションリンクには <code>HorizontalMenuItemLink</code>
              、サブメニューの展開などのアクションには <code>HorizontalMenuItemButton</code>{' '}
              を使用します。
            </p>

            <h3>フロントアイコンの追加</h3>
            <p>
              メニュー項目の先頭にアイコンを追加できます。アイコン自体はコンポーネントに内蔵せず、
              利用側で <code>&lt;svg&gt;</code> を直接配置します。
            </p>
            <pre>
              <code>
                {`<HorizontalMenuItemLink href="#">
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-hidden className="shrink-0 size-6">
    {/* アイコンのパス */}
  </svg>
  メニュー1
</HorizontalMenuItemLink>`}
              </code>
            </pre>

            <h3>現在のページを示す</h3>
            <p>
              現在表示中のページに対応するメニュー項目には <code>aria-current</code>{' '}
              属性を設定します。
            </p>
            <pre>
              <code>
                {`<HorizontalMenuItemLink href="#" aria-current="true">
  メニュー1
</HorizontalMenuItemLink>`}
              </code>
            </pre>

            <h3>シェブロンアイコンの回転</h3>
            <p>
              <code>HorizontalMenuItemButton</code> に <code>aria-expanded</code>{' '}
              が設定されている場合、 シェブロンアイコンを自動回転させることができます。 シェブロン
              SVG に <code>group-aria-expanded/horizontal-menu-item:rotate-180</code>{' '}
              クラスを付与してください。
            </p>
            <pre>
              <code>
                {`<HorizontalMenuItemButton aria-expanded={isOpen}>
  メニュー1
  <svg
    width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden
    className="mt-1 shrink-0 size-4 group-aria-expanded/horizontal-menu-item:rotate-180"
  >
    <path d="M12 17L3 8L4 7L12 15L20 7L21 8L12 17Z" />
  </svg>
</HorizontalMenuItemButton>`}
              </code>
            </pre>
          </div>
        </Unstyled>
      ),
    },
  },
} satisfies Meta<typeof HorizontalMenu>;

export default meta;

interface PlaygroundProps {
  items: number;
  label: string;
  hasFrontIcon: boolean;
  isCurrent: boolean;
  hasSubmenu: boolean;
  isExpanded: boolean;
}

export const Playground: StoryObj<PlaygroundProps> = {
  render: (args) => (
    <HorizontalMenu>
      <HorizontalMenuItem>
        {args.hasSubmenu ? (
          <HorizontalMenuItemButton
            aria-current={args.isCurrent ? 'true' : undefined}
            aria-expanded={args.isExpanded}
          >
            {args.hasFrontIcon && (
              <svg
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='currentColor'
                aria-hidden={true}
                className='shrink-0 size-6'
              >
                <path d='M4.6 20.5c-.5-.1-1-.6-1.1-1l16-16c.5.1.9.6 1 1l-16 16Zm-1.1-6.4v-2L12 3.4h2.1L3.5 14.1Zm0-7.4V5.3c0-1 .8-1.8 1.8-1.8h1.4L3.5 6.7Zm13.8 13.8 3.2-3.2v1.4c0 1-.8 1.8-1.8 1.8h-1.4Zm-7.4 0L20.5 9.9v2L12 20.6H9.9Z' />
              </svg>
            )}
            {args.label}
            <svg
              width={16}
              height={16}
              viewBox='0 0 24 24'
              fill='currentColor'
              aria-hidden={true}
              className='mt-1 shrink-0 size-4 group-aria-expanded/horizontal-menu-item:rotate-180'
            >
              <path d='M12 17L3 8L4 7L12 15L20 7L21 8L12 17Z' />
            </svg>
          </HorizontalMenuItemButton>
        ) : (
          <HorizontalMenuItemLink href='#' aria-current={args.isCurrent ? 'true' : undefined}>
            {args.hasFrontIcon && (
              <svg
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='currentColor'
                aria-hidden={true}
                className='shrink-0 size-6'
              >
                <path d='M4.6 20.5c-.5-.1-1-.6-1.1-1l16-16c.5.1.9.6 1 1l-16 16Zm-1.1-6.4v-2L12 3.4h2.1L3.5 14.1Zm0-7.4V5.3c0-1 .8-1.8 1.8-1.8h1.4L3.5 6.7Zm13.8 13.8 3.2-3.2v1.4c0 1-.8 1.8-1.8 1.8h-1.4Zm-7.4 0L20.5 9.9v2L12 20.6H9.9Z' />
              </svg>
            )}
            {args.label}
          </HorizontalMenuItemLink>
        )}
      </HorizontalMenuItem>
      {Array.from({ length: args.items - 1 }, (_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: demo-only stable list
        <HorizontalMenuItem key={`menu-${i + 2}`}>
          <HorizontalMenuItemLink href='#'>メニュー{i + 2}</HorizontalMenuItemLink>
        </HorizontalMenuItem>
      ))}
    </HorizontalMenu>
  ),
  argTypes: {
    items: { control: { type: 'number', min: 1 } },
    label: { control: 'text' },
    hasFrontIcon: { control: 'boolean' },
    isCurrent: { control: 'boolean' },
    hasSubmenu: { control: 'boolean' },
    isExpanded: { control: 'boolean', if: { arg: 'hasSubmenu' } },
  },
  args: {
    items: 3,
    label: 'メニュー1',
    hasFrontIcon: false,
    isCurrent: false,
    hasSubmenu: false,
    isExpanded: false,
  },
};
