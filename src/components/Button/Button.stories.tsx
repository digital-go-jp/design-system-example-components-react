import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Link } from '../Link';
import { Button } from './Button';

const meta = {
  id: 'Component/DADS v2/Button',
  title: 'Component/ボタン',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['solid-fill', 'outline', 'text'],
      control: { type: 'radio' },
      description:
        'ボタンのスタイルを、塗りボタン（`solid-fill`）、アウトラインボタン（`outline`）、テキストボタン（`text`）の3種類から選択します。',
      table: {
        type: { summary: "'solid-fill' | 'outline' | 'text'" },
      },
    },
    size: {
      options: ['lg', 'md', 'sm', 'xs'],
      control: { type: 'radio' },
      description: 'ボタンのサイズを以下から選択します。',
      table: {
        type: { summary: "'lg' | 'md' | 'sm' | 'xs'" },
      },
    },
    'aria-disabled': {
      description:
        '無効化する必要がある場合は `disabled` 属性ではなく `aria-disabled` 属性を使用します。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: 'solid-fill',
    size: 'lg',
    children: 'ボタン',
    onClick: fn(),
    'aria-disabled': false,
  },
};

export const AllButtons = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <div>
          <h2 className='mb-6 text-std-32B-150'>塗りボタン（Solid Fill）</h2>
          <div className='flex items-center gap-4'>
            <Button variant='solid-fill' size='lg'>
              ラベル
            </Button>
            <Button variant='solid-fill' size='md'>
              ラベル
            </Button>
            <Button variant='solid-fill' size='sm'>
              ラベル
            </Button>
            <Button variant='solid-fill' size='xs'>
              ラベル
            </Button>
          </div>
        </div>
        <div>
          <h2 className='mb-6 text-std-32B-150'>アウトラインボタン（Outline）</h2>
          <div className='flex items-center gap-4'>
            <Button variant='outline' size='lg'>
              ラベル
            </Button>
            <Button variant='outline' size='md'>
              ラベル
            </Button>
            <Button variant='outline' size='sm'>
              ラベル
            </Button>
            <Button variant='outline' size='xs'>
              ラベル
            </Button>
          </div>
        </div>
        <div>
          <h2 className='mb-6 text-std-32B-150'>テキストボタン（Text）</h2>
          <div className='flex items-center gap-4'>
            <Button variant='text' size='lg'>
              ラベル
            </Button>
            <Button variant='text' size='md'>
              ラベル
            </Button>
            <Button variant='text' size='sm'>
              ラベル
            </Button>
            <Button variant='text' size='xs'>
              ラベル
            </Button>
          </div>
        </div>
      </div>
    );
  },
};

export const DisabledButtons = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <div>
          <h2 className='mb-4 text-std-32B-150'>Disabledの作例（aria-disabled 属性を使用）</h2>
          <p className='mb-8'>
            ※ ボタンの無効化に<code>disabled</code>
            コンテンツ属性ではなく、キーボード操作のタブフォーカスでもアクセスできる
            <code>aria-disabled</code>
            を使用しています。
            <br />
            詳しくはデジタル庁デザインシステム専用サイトの
            <Link
              href='https://design.digital.go.jp/components/button/?tab=accessibility#h3-%E7%84%A1%E5%8A%B9%E3%83%9C%E3%82%BF%E3%83%B3%EF%BC%88disabled%EF%BC%89%E3%81%AF%E3%82%BF%E3%83%96%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AB%E3%82%B9%E3%81%A7%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84'
              target='_blank'
            >
              ボタン（アクセシビリティ） - 無効ボタン（disabled）はタブフォーカスでアクセスできない
            </Link>
            をお読みください。
          </p>
          <div className='flex items-center gap-4'>
            <Button aria-disabled={true} variant='solid-fill' size='lg'>
              ラベル
            </Button>
            <Button aria-disabled={true} variant='outline' size='lg'>
              ラベル
            </Button>
            <Button aria-disabled={true} variant='text' size='lg'>
              ラベル
            </Button>
          </div>
          <div className='flex items-center gap-4 mt-4'>
            <Button aria-disabled={true} variant='solid-fill' size='md'>
              ラベル
            </Button>
            <Button aria-disabled={true} variant='outline' size='md'>
              ラベル
            </Button>
            <Button aria-disabled={true} variant='text' size='md'>
              ラベル
            </Button>
          </div>
          <div className='flex items-center gap-4 mt-4'>
            <Button aria-disabled={true} variant='solid-fill' size='sm'>
              ラベル
            </Button>
            <Button aria-disabled={true} variant='outline' size='sm'>
              ラベル
            </Button>
            <Button aria-disabled={true} variant='text' size='sm'>
              ラベル
            </Button>
          </div>
          <div className='flex items-center gap-4 mt-4'>
            <Button aria-disabled={true} variant='solid-fill' size='xs'>
              ラベル
            </Button>
            <Button aria-disabled={true} variant='outline' size='xs'>
              ラベル
            </Button>
            <Button aria-disabled={true} variant='text' size='xs'>
              ラベル
            </Button>
          </div>
        </div>
      </div>
    );
  },
};

export const LinkButtons = {
  render: () => {
    const href = location.href;
    return (
      <div className='flex flex-col gap-8'>
        <div>
          <h2 className='mb-6 text-std-32B-150'>ボタンの見た目をしたリンク（Solid Fill）</h2>
          <div className='flex items-center gap-4'>
            <Button asChild variant='solid-fill' size='lg'>
              <a className='inline-flex items-center justify-center' href={href}>
                ラベル
              </a>
            </Button>
          </div>
        </div>
        <div>
          <h2 className='mb-6 text-std-32B-150'>ボタンの見た目をしたリンク（Outline）</h2>
          <div className='flex items-center gap-4'>
            <Button asChild variant='outline' size='lg'>
              <a className='inline-flex items-center justify-center' href={href}>
                ラベル
              </a>
            </Button>
          </div>
        </div>
        <div>
          <h2 className='mb-6 text-std-32B-150'>ボタンの見た目をしたリンク（Text）</h2>
          <div className='flex items-center gap-4'>
            <Button asChild variant='text' size='lg'>
              <a className='inline-flex items-center justify-center' href={href}>
                ラベル
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  },
};

export const SolidFillLG: Story = {
  args: {
    variant: 'solid-fill',
    size: 'lg',
    children: 'ボタン',
    onClick: fn(),
    'aria-disabled': false,
  },
};

export const SolidFillMD: Story = {
  args: {
    variant: 'solid-fill',
    size: 'md',
    children: 'ボタン',
    onClick: fn(),
    'aria-disabled': false,
  },
};

export const SolidFillSM: Story = {
  args: {
    variant: 'solid-fill',
    size: 'sm',
    children: 'ボタン',
    onClick: fn(),
    'aria-disabled': false,
  },
};

export const SolidFillXS: Story = {
  args: {
    variant: 'solid-fill',
    size: 'xs',
    children: 'ボタン',
    onClick: fn(),
    'aria-disabled': false,
  },
};

export const OutlineLG: Story = {
  args: {
    variant: 'outline',
    size: 'lg',
    children: 'ボタン',
    onClick: fn(),
    'aria-disabled': false,
  },
};

export const OutlineMD: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    children: 'ボタン',
    onClick: fn(),
    'aria-disabled': false,
  },
};

export const OutlineSM: Story = {
  args: {
    variant: 'outline',
    size: 'sm',
    children: 'ボタン',
    onClick: fn(),
    'aria-disabled': false,
  },
};

export const OutlineXS: Story = {
  args: {
    variant: 'outline',
    size: 'xs',
    children: 'ボタン',
    onClick: fn(),
    'aria-disabled': false,
  },
};

export const TextLG: Story = {
  args: {
    variant: 'text',
    size: 'lg',
    children: 'ボタン',
    onClick: fn(),
    'aria-disabled': false,
  },
};

export const TextMD: Story = {
  args: {
    variant: 'text',
    size: 'md',
    children: 'ボタン',
    onClick: fn(),
    'aria-disabled': false,
  },
};

export const TextSM: Story = {
  args: {
    variant: 'text',
    size: 'sm',
    children: 'ボタン',
    onClick: fn(),
    'aria-disabled': false,
  },
};

export const TextXS: Story = {
  args: {
    variant: 'text',
    size: 'xs',
    children: 'ボタン',
    onClick: fn(),
    'aria-disabled': false,
  },
};
