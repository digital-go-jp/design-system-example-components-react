import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '../';
import { List } from './List';

const meta = {
  id: 'Component/DADS v2/List',
  title: 'Component/箇条書きリスト',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    marker: { table: { disable: true } },
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllLists: Story = {
  render: (args) => (
    <>
      <List spacing={args.spacing}>
        <li>短いテキスト</li>
        <li>
          これは少し長めのテキストサンプルです。リストアイテムの中に含まれる文章の例として使用しています。
        </li>
        <li>
          ネストされたリスト
          <List marker='number' spacing={args.spacing}>
            <li>
              <span>1. </span>
              <span>番号付きリストの最初の項目</span>
            </li>
            <li>
              <Link href='#'>
                <span>2. </span>
                <span>
                  二番目の項目で、これは比較的長い説明文を含んでいます。ネストされた構造の例として作成されました。
                </span>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <span>3. </span>
                <span>三番目</span>
              </Link>
            </li>
          </List>
        </li>
        <li>
          複雑な入れ子構造の例
          <List spacing={args.spacing}>
            <li>サブリストA</li>
            <li>
              サブリストBで更にネスト
              <List marker='number' spacing={args.spacing}>
                <li>
                  <span>①　</span>
                  <span>番号付きサブアイテム1</span>
                </li>
                <li>
                  <span>②　</span>
                  <span>
                    <Link href='#'>番号付きサブアイテム2</Link>
                    （長めの説明付き：この項目は複数レベルの入れ子構造を示すために作成されています）
                  </span>
                </li>
              </List>
            </li>
            <li>サブリストC</li>
          </List>
        </li>
      </List>

      <List marker='number' spacing={args.spacing}>
        <li>
          <span>１　</span>
          <span>最初</span>
        </li>
        <li>
          <span>２　</span>
          <span>
            二番目の項目として、長めの文章を含む例です。番号付きリストの中での文章の長さの違いを示しています。
          </span>
        </li>
        <li>
          <span>３　</span>
          <span>三番目（ネスト含む）</span>
          <List spacing={args.spacing}>
            <li>無順序サブリスト項目A</li>
            <li>無順序サブリスト項目B</li>
            <li>
              無順序サブリスト項目C
              <List marker='number' spacing={args.spacing}>
                <li>
                  <span>（１）</span>
                  <span>再び番号付きリスト</span>
                </li>
                <li>
                  <span>（２）</span>
                  <span>
                    非常に長いテキストの例：この項目は
                    <b>複数レベルの入れ子構造</b>
                    における文章の長さの違いを示すために作成されたサンプルテキストです。実際の使用場面では、このような長い説明文が含まれることもあります。
                  </span>
                </li>
              </List>
            </li>
          </List>
        </li>
        <li>
          <span>４　</span>四番目
        </li>
      </List>
    </>
  ),
  argTypes: {
    spacing: {
      control: 'radio',
      options: ['4', '8', '12'],
    },
  },
  args: {
    spacing: '4',
  },
};
