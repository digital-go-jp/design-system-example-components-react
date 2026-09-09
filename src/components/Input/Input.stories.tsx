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
import React from 'react';
import { ErrorText } from '../ErrorText';
import { Label } from '../Label';
import { Link } from '../Link';
import { RequirementBadge } from '../RequirementBadge';
import { StatusBadge } from '../StatusBadge';
import { SupportText } from '../SupportText';
import { Input } from './Input';

const meta = {
  id: 'Component/DADS v2/Input',
  title: 'Component/インプットテキスト',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    blockSize: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'radio' },
      description: 'インプットテキストの垂直方向のサイズ（高さ）を以下から選択します。',
      table: {
        defaultValue: { summary: 'lg' },
        type: { summary: "'lg', 'md', 'sm'" },
      },
    },
    isError: {
      description: 'エラー状態であるかどうかを指定します。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />

          <Unstyled>
            <div className='prose'>
              <h2>コンポーネントのガイドライン</h2>
              <p>
                <Link
                  href='https://design.digital.go.jp/dads/components/input-text/'
                  target='_blank'
                >
                  インプットテキスト（概要）｜デジタル庁デザインシステムβ版
                </Link>
              </p>
            </div>
          </Unstyled>
        </>
      ),
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const { isError } = args;

    const formId = React.useId();
    const supportTextId = React.useId();
    const errorTextId = React.useId();

    const describedBy = isError ? `${errorTextId} ${supportTextId}` : supportTextId;

    return (
      <div className='flex flex-col items-start gap-2'>
        <Label htmlFor={formId}>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Label>
        <SupportText id={supportTextId}>サポートテキスト</SupportText>
        <Input
          aria-describedby={describedBy}
          defaultValue='入力テキスト'
          id={formId}
          name='playground'
          {...args}
        />
        {isError && <ErrorText id={errorTextId}>＊エラーテキスト</ErrorText>}
      </div>
    );
  },
  args: {
    blockSize: 'lg',
    isError: false,
  },
};

export const Errored: Story = {
  render: (args) => {
    const formId = React.useId();
    const supportTextId = React.useId();
    const errorTextId = React.useId();

    const describedBy = `${errorTextId} ${supportTextId}`;

    return (
      <div className='flex flex-col items-start gap-2'>
        <Label htmlFor={formId}>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Label>
        <SupportText id={supportTextId}>サポートテキスト</SupportText>
        <Input aria-describedby={describedBy} id={formId} name='error' {...args} />
        <ErrorText id={errorTextId}>＊エラーテキスト</ErrorText>
      </div>
    );
  },
  argTypes: {
    isError: { table: { disable: true } },
  },
  args: {
    blockSize: 'lg',
    isError: true,
  },
};

export const Disabled: Story = {
  render: (args) => {
    const formId = React.useId();
    const supportTextId = React.useId();

    return (
      <div className='flex flex-col items-start gap-2'>
        <Label htmlFor={formId}>
          ラベル
          <StatusBadge>無効</StatusBadge>
        </Label>
        <SupportText id={supportTextId}>〜の理由により、この項目は無効化されています。</SupportText>
        <Input
          aria-describedby={supportTextId}
          aria-disabled={true}
          defaultValue='入力テキスト'
          id={formId}
          name='disabled'
          {...args}
        />
      </div>
    );
  },
  argTypes: {
    isError: { table: { disable: true } },
  },
  args: {
    blockSize: 'lg',
  },
};

export const Readonly: Story = {
  render: (args) => {
    const controlId = React.useId();
    const supportTextId = React.useId();

    return (
      <div className='flex flex-col items-start gap-2'>
        <Label htmlFor={controlId}>
          ラベル
          <StatusBadge>編集不可</StatusBadge>
        </Label>
        <SupportText id={supportTextId}>〜の理由により、この項目は編集できません。</SupportText>
        <Input
          aria-describedby={supportTextId}
          defaultValue='入力テキスト'
          id={controlId}
          name='readonly'
          readOnly
          {...args}
        />
      </div>
    );
  },
  argTypes: {
    isError: { table: { disable: true } },
  },
  args: {
    blockSize: 'lg',
  },
};
