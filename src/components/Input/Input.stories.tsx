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
import {
  FormControlLabel,
  Label,
  RequirementBadge,
  StatusBadge,
  SupportText,
} from '../FormControlLabel';
import { Link } from '../Link';
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
      <FormControlLabel>
        <Label htmlFor={formId}>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Label>
        <SupportText id={supportTextId}>サポートテキスト</SupportText>
        <div>
          <Input
            aria-describedby={describedBy}
            defaultValue='入力テキスト'
            id={formId}
            name='playground'
            {...args}
          />
        </div>
        {isError && <ErrorText id={errorTextId}>＊エラーテキスト</ErrorText>}
      </FormControlLabel>
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
      <FormControlLabel>
        <Label htmlFor={formId}>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Label>
        <SupportText id={supportTextId}>サポートテキスト</SupportText>
        <div>
          <Input aria-describedby={describedBy} id={formId} name='error' {...args} />
        </div>
        <ErrorText id={errorTextId}>＊エラーテキスト</ErrorText>
      </FormControlLabel>
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
      <FormControlLabel>
        <Label htmlFor={formId}>
          ラベル
          <StatusBadge>無効</StatusBadge>
        </Label>
        <SupportText id={supportTextId}>〜の理由により、この項目は無効化されています。</SupportText>
        <div>
          <Input
            aria-describedby={supportTextId}
            aria-disabled={true}
            defaultValue='入力テキスト'
            id={formId}
            name='disabled'
            {...args}
          />
        </div>
      </FormControlLabel>
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
      <FormControlLabel>
        <Label htmlFor={controlId}>
          ラベル
          <StatusBadge>編集不可</StatusBadge>
        </Label>
        <SupportText id={supportTextId}>〜の理由により、この項目は編集できません。</SupportText>
        <div>
          <Input
            aria-describedby={supportTextId}
            defaultValue='入力テキスト'
            id={controlId}
            name='readonly'
            readOnly
            {...args}
          />
        </div>
      </FormControlLabel>
    );
  },
  argTypes: {
    isError: { table: { disable: true } },
  },
  args: {
    blockSize: 'lg',
  },
};
