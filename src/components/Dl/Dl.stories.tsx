import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dd, Dl, Dt } from './Dl';

const meta = {
  id: 'Component/DADS v2/説明リスト',
  title: 'Component/説明リスト',
  component: Dl,
  tags: ['autodocs'],
  argTypes: {
    marker: {
      options: ['none', 'bullet'],
      control: { type: 'radio' },
      description: '説明リストのマーカーの種類を指定します。',
    },
  },
} satisfies Meta<typeof Dl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    return (
      <Dl {...args}>
        <div>
          <Dt>項目名1</Dt>
          <Dd>
            これは項目1の説明文です。説明リストは用語とその説明をセットで表示するのに適しています。
          </Dd>
        </div>
        <div>
          <Dt>項目名2</Dt>
          <Dd>
            これは項目2の説明文です。説明リストは用語とその説明をセットで表示するのに適しています。
          </Dd>
        </div>
        <div>
          <Dt>項目名3</Dt>
          <Dd>
            これは項目3の説明文です。説明リストは用語とその説明をセットで表示するのに適しています。
          </Dd>
        </div>
      </Dl>
    );
  },
  args: {
    marker: 'none',
  },
};

export const Default: Story = {
  render: (args) => {
    return (
      <Dl {...args}>
        <div>
          <Dt>項目名1</Dt>
          <Dd>
            これは項目1の説明文です。説明リストは用語とその説明をセットで表示するのに適しています。
          </Dd>
        </div>
        <div>
          <Dt>項目名2</Dt>
          <Dd>
            これは項目2の説明文です。説明リストは用語とその説明をセットで表示するのに適しています。
          </Dd>
        </div>
        <div>
          <Dt>項目名3</Dt>
          <Dd>
            これは項目3の説明文です。説明リストは用語とその説明をセットで表示するのに適しています。
          </Dd>
        </div>
      </Dl>
    );
  },
  args: {
    marker: 'none',
  },
};

/**
 * マーカーとしてブレットを表示する場合は、`marker="bullet"`を指定します。
 */
export const Bullet: Story = {
  render: (args) => {
    return (
      <Dl {...args}>
        <div>
          <Dt>項目名1</Dt>
          <Dd>
            これは項目1の説明文です。説明リストは用語とその説明をセットで表示するのに適しています。
          </Dd>
        </div>
        <div>
          <Dt>項目名2</Dt>
          <Dd>
            これは項目2の説明文です。説明リストは用語とその説明をセットで表示するのに適しています。
          </Dd>
        </div>
        <div>
          <Dt>項目名3</Dt>
          <Dd>
            これは項目3の説明文です。説明リストは用語とその説明をセットで表示するのに適しています。
          </Dd>
        </div>
      </Dl>
    );
  },
  args: {
    marker: 'bullet',
  },
};

/**
 * 独自のマーカーを使用する場合は、カスタムマーカーを`Dt`コンポーネントの最初の`<span>`要素で指定します。
 */
export const Custom: Story = {
  render: (args) => {
    return (
      <Dl {...args}>
        <div>
          <Dt>
            <span className='inline-block min-w-8'>
              <svg
                className='relative block -bottom-[calc(5/16*1rem)] -mt-[calc(5/16*1rem)]'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                role='img'
                aria-label='①'
              >
                <path
                  fill='#0017C1'
                  d='M12 22a9.7 9.7 0 0 1-7-3A10.1 10.1 0 0 1 2.7 8.2 10.1 10.1 0 0 1 12 2a9.7 9.7 0 0 1 7 3 10.1 10.1 0 0 1 2.2 10.9A10.1 10.1 0 0 1 12 22Zm-.5-5h2V7h-4v2h2v8Z'
                />
              </svg>
            </span>
            項目名1
          </Dt>
          <Dd>
            これは項目1の説明文です。説明リストは用語とその説明をセットで表示するのに適しています。
          </Dd>
        </div>
        <div>
          <Dt>
            <span className='inline-block min-w-8'>
              <svg
                className='relative block -bottom-[calc(5/16*1rem)] -mt-[calc(5/16*1rem)]'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                role='img'
                aria-label='②'
              >
                <path
                  fill='#0017C1'
                  d='M12 22a9.7 9.7 0 0 1-7-3A10.1 10.1 0 0 1 2.7 8.2 10.1 10.1 0 0 1 12 2a9.7 9.7 0 0 1 7 3 10.1 10.1 0 0 1 2.2 10.9A10.1 10.1 0 0 1 12 22Zm-3-5h6v-2h-4v-2h2c.6 0 1-.2 1.4-.6.4-.4.6-.8.6-1.4V9c0-.6-.2-1-.6-1.4A2 2 0 0 0 13 7H9v2h4v2h-2a2 2 0 0 0-1.4.6A2 2 0 0 0 9 13v4Z'
                />
              </svg>
            </span>
            項目名2
          </Dt>
          <Dd>
            これは項目2の説明文です。説明リストは用語とその説明をセットで表示するのに適しています。
          </Dd>
        </div>
        <div>
          <Dt>
            <span className='inline-block min-w-8'>
              <svg
                className='relative block -bottom-[calc(5/16*1rem)] -mt-[calc(5/16*1rem)]'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                role='img'
                aria-label='③'
              >
                <path
                  fill='#0017C1'
                  d='M12 22a9.7 9.7 0 0 1-7-3A10.1 10.1 0 0 1 2.7 8.2 10.1 10.1 0 0 1 12 2a9.7 9.7 0 0 1 7 3 10.1 10.1 0 0 1 2.2 10.9A10.1 10.1 0 0 1 12 22Zm-3-5h4c.6 0 1-.2 1.4-.6.4-.4.6-.8.6-1.4v-1.5a1.5 1.5 0 0 0-1.5-1.5 1.5 1.5 0 0 0 1.5-1.5V9c0-.6-.2-1-.6-1.4A2 2 0 0 0 13 7H9v2h4v2h-2v2h2v2H9v2Z'
                />
              </svg>
            </span>
            項目名3
          </Dt>
          <Dd>
            これは項目3の説明文です。説明リストは用語とその説明をセットで表示するのに適しています。
          </Dd>
        </div>
      </Dl>
    );
  },
  argTypes: {
    marker: { table: { disable: true } },
  },
  args: {
    marker: 'none',
  },
};
