import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ErrorText } from '../ErrorText';
import { Label } from '../Label';
import { RequirementBadge } from '../RequirementBadge';
import { StatusBadge } from '../StatusBadge';
import { SupportText } from '../SupportText';
import { Textarea } from './Textarea';

const meta = {
  id: 'Component/DADS v2/Textarea',
  title: 'Component/テキストエリア',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    isError: {
      description: 'エラー状態であるかどうかを指定します。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof Textarea>;

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
        <Textarea
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
        <Textarea aria-describedby={describedBy} id={formId} name='error' {...args} />
        <ErrorText id={errorTextId}>＊エラーテキスト</ErrorText>
      </div>
    );
  },
  argTypes: {
    isError: { table: { disable: true } },
  },
  args: {
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
        <Textarea
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
        <Textarea
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
};

export const WithFieldSizing: Story = {
  render: (args) => {
    const formId = React.useId();
    const supportTextId = React.useId();

    return (
      <div className='flex flex-col items-start gap-2'>
        <Label htmlFor={formId}>field-sizing を使用したテキストエリア</Label>
        <SupportText id={supportTextId}>
          field-sizing: content を使用し、内容に応じて高さが3行〜10行まで可変するテキストエリアの例
        </SupportText>
        <Textarea
          aria-describedby={supportTextId}
          className='[field-sizing:content] w-96 min-h-[calc(3lh+2rem+2px)] max-h-[calc(10lh+2rem+2px)]'
          id={formId}
          name='field-sizing'
          {...args}
        />
      </div>
    );
  },
  argTypes: {
    isError: { table: { disable: true } },
  },
};

export const WithColsAndRowsAttribute: Story = {
  render: (args) => {
    const formId = React.useId();
    const supportTextId = React.useId();

    return (
      <div className='flex flex-col items-start gap-2'>
        <Label htmlFor={formId}>cols, rows 属性を使用したテキストエリア</Label>
        <SupportText id={supportTextId}>
          cols 属性の値に30、rows 属性の値に4を指定したテキストエリアの例
        </SupportText>
        <Textarea
          aria-describedby={supportTextId}
          id={formId}
          name='rows'
          rows={4}
          cols={30}
          {...args}
        />
      </div>
    );
  },
  argTypes: {
    isError: { table: { disable: true } },
  },
};
