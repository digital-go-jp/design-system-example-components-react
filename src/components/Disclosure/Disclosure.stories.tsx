import type { Meta, StoryObj } from '@storybook/react-vite';
import { List } from '../';
import { Disclosure, DisclosureBackLink, DisclosureSummary } from './Disclosure';

const meta = {
  id: 'Component/DADS v2/Disclosure',
  title: 'Component/ディスクロージャー',
  component: Disclosure,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <Disclosure>
        <DisclosureSummary id='disclosure-example'>ディスクロージャータイトル</DisclosureSummary>
        <div className='pl-8 my-4'>
          これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
          <DisclosureBackLink
            className='mt-4 [text-spacing-trim:trim-start]'
            href='#disclosure-example'
          >
            「ディスクロージャータイトル」の先頭に戻る
          </DisclosureBackLink>
        </div>
      </Disclosure>
    );
  },
};

export const WithLongContent: Story = {
  render: () => {
    return (
      <Disclosure>
        <DisclosureSummary id='disclosure-with-long-content'>
          ディスクロージャータイトル
        </DisclosureSummary>
        <div className='pl-8 my-4 space-y-4'>
          <p>
            これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。
          </p>
          <List spacing='4'>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
          </List>
          <p>
            これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。
          </p>
          <List spacing='4'>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
          </List>
          <DisclosureBackLink
            className='mt-4 [text-spacing-trim:trim-start]'
            href='#disclosure-with-long-content'
          >
            「ディスクロージャータイトル」の先頭に戻る
          </DisclosureBackLink>
        </div>
      </Disclosure>
    );
  },
};

export const MultipleLineTitle: Story = {
  render: () => {
    return (
      <Disclosure className='w-64'>
        <DisclosureSummary id='disclosure-multiple-line-title'>
          複数行にまたがるディスクロージャータイトル
        </DisclosureSummary>
        <div className='pl-8 my-4'>
          <List spacing='4'>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
            <li>リストアイテム</li>
          </List>
          <DisclosureBackLink
            className='mt-4 [text-spacing-trim:trim-start]'
            href='#disclosure-multiple-line-title'
          >
            「複数行にまたがるディスクロージャータイトル」の先頭に戻る
          </DisclosureBackLink>
        </div>
      </Disclosure>
    );
  },
};
