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
  MenuList,
  MenuListItem,
  MenuListItemButton,
  type MenuListSize,
  type MenuListType,
} from './MenuList';

const meta = {
  id: 'Component/DADS v2/MenuList',
  title: 'Component/メニューリスト',
  component: MenuList,
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
                <code>MenuList</code>: ルートとなる<code>&lt;ul&gt;</code>要素
              </li>
              <li>
                <code>MenuListItem</code>: <code>&lt;li&gt;</code>要素
              </li>
              <li>
                <code>MenuListItemButton</code>: 項目本体。アクション用の<code>&lt;button&gt;</code>
                要素
              </li>
              <li>
                <code>MenuListItemLink</code>: 項目本体。ナビゲーションリンク用の
                <code>&lt;a&gt;</code>要素
              </li>
            </ul>

            <h3>Props</h3>

            <h4 id='menu-list-props'>
              <code>MenuList</code>
            </h4>
            <table aria-labelledby='menu-list-props' className='w-full'>
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
                    <code>indent</code>
                  </td>
                  <td>
                    <div>
                      <code>number</code>
                    </div>
                    子メニューのインデントレベル。<code>1</code>で1段、<code>2</code>で2段下げる
                  </td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>

            <h4 id='menu-list-item-props'>
              <code>MenuListItemButton</code> / <code>MenuListItemLink</code>
            </h4>
            <table aria-labelledby='menu-list-item-props' className='w-full'>
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
                    <code>type</code>
                  </td>
                  <td>
                    <div>
                      <code>'standard' | 'box'</code>
                    </div>
                    項目のスタイル。<code>standard</code>は角丸、<code>box</code>は矩形
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>
                    <code>size</code>
                  </td>
                  <td>
                    <div>
                      <code>'regular' | 'small'</code>
                    </div>
                    項目のサイズ
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>
                    <code>current</code>
                  </td>
                  <td>
                    <div>
                      <code>boolean</code>
                    </div>
                    <code>true</code>のとき、現在選択中の項目として表示する
                  </td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>

            <h2>使い方</h2>

            <h3>項目の要素</h3>
            <p>
              ナビゲーションリンクには<code>MenuListItemLink</code>、アクションには
              <code>MenuListItemButton</code>を使用します。
            </p>

            <h3>アイコンの追加</h3>
            <p>
              メニュー項目には3種類のアイコンを配置できます。アイコン自体はコンポーネントに内蔵せず、利用側で
              <code>&lt;svg&gt;</code>を直接配置します。
            </p>
            <p>
              配置位置に応じて必要なクラス（右寄せ、回転、縮小防止など）が異なります。具体的な指定は
              Storybook の各サンプルコードを参照してください。
            </p>

            <h3>現在位置の表示</h3>
            <p>
              現在選択中・表示中の項目を示すには、<code>current</code>プロパティに
              <code>true</code>
              を指定します。注意点として、後述するARIA属性も併用する必要があります。
            </p>
            <p>
              <code>current</code>が設定された項目の親メニュー項目は自動的に薄いハイライトが
              適用されます。
            </p>

            <h4 id='menu-list-current-aria'>アクセシビリティ属性の併用</h4>
            <p>
              <code>current</code>プロパティは視覚的なスタイルのみを制御し、
              スクリーンリーダーには状態が伝わりません。支援技術に現在の状態を伝えるため、
              用途に応じて適切なARIA属性を併用してください。
            </p>
            <table aria-labelledby='menu-list-current-aria' className='w-full'>
              <thead>
                <tr>
                  <th scope='col'>用途</th>
                  <th scope='col' className='text-nowrap'>
                    使用する属性
                  </th>
                  <th scope='col'>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>現在のページ/位置</td>
                  <td className='whitespace-nowrap'>
                    <code>aria-current="page"</code>
                  </td>
                  <td>ナビゲーション内で現在表示中のページを示す</td>
                </tr>
                <tr>
                  <td>現在のステップ</td>
                  <td className='whitespace-nowrap'>
                    <code>aria-current="step"</code>
                  </td>
                  <td>ウィザードやプロセス内の現在のステップを示す</td>
                </tr>
                <tr>
                  <td>選択状態</td>
                  <td className='whitespace-nowrap'>
                    <code>aria-selected="true"</code>
                  </td>
                  <td>リストボックスで選択中の項目を示す</td>
                </tr>
                <tr>
                  <td>チェック状態</td>
                  <td className='whitespace-nowrap'>
                    <code>aria-checked="true"</code>
                  </td>
                  <td>メニュー内のチェック可能な項目の状態を示す</td>
                </tr>
              </tbody>
            </table>

            <h3>展開状態の表示</h3>
            <p>
              子メニューを持つ項目には、<code>MenuListItemButton</code>に<code>aria-expanded</code>
              属性を指定して展開状態を表します。
              <code>aria-expanded='true'</code>のとき末尾の展開アイコンを180度回転させるには、
              <code>group-aria-expanded/menu-list-item:rotate-180</code>
              クラスをアイコンに指定します。
            </p>

            <h3>子メニューのインデント</h3>
            <p>
              子メニューには<code>MenuList</code>の<code>indent</code>プロパティで
              インデントレベルを設定します。<code>1</code>で1段、<code>2</code>で2段下がります。
            </p>
            <ul>
              <li>
                <code>type='standard'</code>: 項目全体が左にインデントされる
              </li>
              <li>
                <code>type='box'</code>: <code>padding-left</code>が増加してインデントされる
              </li>
            </ul>
          </div>
        </Unstyled>
      ),
    },
  },
} satisfies Meta<typeof MenuList>;

export default meta;

interface PlaygroundProps {
  type: MenuListType;
  size: MenuListSize;
  current: boolean;
  hasFrontIcon: boolean;
  hasTailIcon: boolean;
  hasEndIcon: boolean;
  label: string;
  indent: number;
}

export const Playground: StoryObj<PlaygroundProps> = {
  render: (args) => (
    <MenuList indent={args.indent}>
      <MenuListItem>
        <MenuListItemButton type={args.type} size={args.size} current={args.current}>
          {args.hasFrontIcon && (
            <svg
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='currentColor'
              aria-hidden={true}
              className='shrink-0'
            >
              <path d='M4.6 20.5c-.5-.1-1-.6-1.1-1l16-16c.5.1.9.6 1 1l-16 16Zm-1.1-6.4v-2L12 3.4h2.1L3.5 14.1Zm0-7.4V5.3c0-1 .8-1.8 1.8-1.8h1.4L3.5 6.7Zm13.8 13.8 3.2-3.2v1.4c0 1-.8 1.8-1.8 1.8h-1.4Zm-7.4 0L20.5 9.9v2L12 20.6H9.9Z' />
            </svg>
          )}
          <span>
            {args.label}
            {args.hasTailIcon && (
              <svg
                width={16}
                height={16}
                viewBox='0 0 48 48'
                role='img'
                aria-label='新規タブで開きます'
                className='inline-block ml-[calc(3/16*1rem)] align-[-0.15em]'
              >
                <path
                  d='M22 6V9H9V39H39V26H42V42H6V6H22ZM42 6V20H39V11.2L21 29L19 27L36.8 9H28V6H42Z'
                  fill='currentColor'
                />
              </svg>
            )}
          </span>
          {args.hasEndIcon && (
            <svg
              width={16}
              height={16}
              viewBox='0 0 24 24'
              fill='currentColor'
              aria-hidden={true}
              className='mt-0.5 -mr-1 ml-auto shrink-0 group-aria-expanded/menu-list-item:rotate-180'
            >
              <path d='M4.6 20.5c-.5-.1-1-.6-1.1-1l16-16c.5.1.9.6 1 1l-16 16Zm-1.1-6.4v-2L12 3.4h2.1L3.5 14.1Zm0-7.4V5.3c0-1 .8-1.8 1.8-1.8h1.4L3.5 6.7Zm13.8 13.8 3.2-3.2v1.4c0 1-.8 1.8-1.8 1.8h-1.4Zm-7.4 0L20.5 9.9v2L12 20.6H9.9Z' />
            </svg>
          )}
        </MenuListItemButton>
      </MenuListItem>
    </MenuList>
  ),
  argTypes: {
    type: { control: 'radio', options: ['standard', 'box'] },
    size: { control: 'radio', options: ['regular', 'small'] },
    current: { control: 'boolean' },
    hasFrontIcon: { control: 'boolean' },
    hasTailIcon: { control: 'boolean' },
    hasEndIcon: { control: 'boolean' },
    label: { control: 'text' },
    indent: { control: { type: 'number', min: 0 } },
  },
  args: {
    type: 'standard',
    size: 'regular',
    current: false,
    hasFrontIcon: true,
    hasTailIcon: true,
    hasEndIcon: true,
    label: 'メニュー項目',
    indent: 0,
  },
};

export const HasChildren: StoryObj = {
  render: () => (
    <MenuList>
      <MenuListItem>
        <MenuListItemButton type='standard' size='regular'>
          <span>メニュー項目1</span>
        </MenuListItemButton>
      </MenuListItem>
      <MenuListItem>
        <MenuListItemButton type='standard' size='regular' aria-expanded={true}>
          <span>メニュー項目2</span>
          <svg
            width={16}
            height={16}
            viewBox='0 0 24 24'
            fill='currentColor'
            aria-hidden={true}
            className='mt-0.5 -mr-1 ml-auto shrink-0 group-aria-expanded/menu-list-item:rotate-180'
          >
            <path d='M12.5 17.1 3.5 8l1-1 8 8 8-8 1 1-9 9.1Z' />
          </svg>
        </MenuListItemButton>
        <MenuList indent={1}>
          <MenuListItem>
            <MenuListItemButton type='standard' size='regular'>
              <span>メニュー項目2-1</span>
            </MenuListItemButton>
          </MenuListItem>
          <MenuListItem>
            <MenuListItemButton type='standard' size='regular' current>
              <span>メニュー項目2-2</span>
            </MenuListItemButton>
          </MenuListItem>
          <MenuListItem>
            <MenuListItemButton type='standard' size='regular'>
              <span>メニュー項目2-3</span>
            </MenuListItemButton>
          </MenuListItem>
        </MenuList>
      </MenuListItem>
      <MenuListItem>
        <MenuListItemButton type='standard' size='regular' aria-expanded={true}>
          <span>メニュー項目3</span>
          <svg
            width={16}
            height={16}
            viewBox='0 0 24 24'
            fill='currentColor'
            aria-hidden={true}
            className='mt-0.5 -mr-1 ml-auto shrink-0 group-aria-expanded/menu-list-item:rotate-180'
          >
            <path d='M12.5 17.1 3.5 8l1-1 8 8 8-8 1 1-9 9.1Z' />
          </svg>
        </MenuListItemButton>
        <MenuList indent={1}>
          <MenuListItem>
            <MenuListItemButton type='standard' size='regular'>
              <span>メニュー項目3-1</span>
            </MenuListItemButton>
          </MenuListItem>
          <MenuListItem>
            <MenuListItemButton type='standard' size='regular'>
              <span>メニュー項目3-2</span>
            </MenuListItemButton>
          </MenuListItem>
          <MenuListItem>
            <MenuListItemButton type='standard' size='regular'>
              <span>メニュー項目3-3</span>
            </MenuListItemButton>
          </MenuListItem>
        </MenuList>
      </MenuListItem>
    </MenuList>
  ),
};
