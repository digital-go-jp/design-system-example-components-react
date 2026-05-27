import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ErrorText } from '../ErrorText';
import { Label } from '../Label';
import { Legend } from '../Legend';
import { RequirementBadge } from '../RequirementBadge';
import { SupportText } from '../SupportText';
import { Select } from './Select';

const meta = {
  id: 'Component/DADS v2/Select',
  title: 'Component/セレクトボックス',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    blockSize: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'radio' },
      description: 'セレクトボックスの垂直方向のサイズ（高さ）を以下から選択します。',
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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  decorators: [
    (Story, context) => (
      <div className='flex flex-col items-start gap-2'>
        <Label htmlFor={context.args.id}>
          ラベル{context.args.required && <RequirementBadge>※必須</RequirementBadge>}
        </Label>
        <SupportText id={context.args['aria-describedby']}>サポートテキスト</SupportText>
        <Story />
      </div>
    ),
  ],
  args: {
    blockSize: 'lg',
    isError: false,
    id: 'test-playground',
    'aria-describedby': 'test-playground-support-text',
    'aria-disabled': false,
    required: true,
    children: (
      <>
        <option value=''>選択してください</option>
        <option value='1'>選択肢1</option>
        <option value='2'>選択肢2</option>
        <option value='3'>選択肢3</option>
      </>
    ),
  },
};

export const InlineWithGrouping: Story = {
  render: () => {
    const formId = React.useId();

    return (
      <div className='flex flex-col gap-8'>
        <fieldset className='flex flex-col gap-2'>
          <Legend size='lg'>フォームコントロールグループ</Legend>
          <SupportText id='inline-group-support-text'>サポートテキスト</SupportText>
          <div className='flex gap-4'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor={`${formId}-inline-group-1`}>ラベル1</Label>
              <Select
                aria-describedby='inline-group-support-text'
                id={`${formId}-inline-group-1`}
                name='inline-group-1'
              >
                <option value=''>選択してください</option>
                <option value='1'>選択肢1</option>
                <option value='2'>選択肢2</option>
                <option value='3'>選択肢3</option>
              </Select>
            </div>

            <div className='flex flex-col gap-2'>
              <Label htmlFor={`${formId}-inline-group-2`}>ラベル2</Label>
              <Select
                aria-describedby='inline-group-support-text'
                id={`${formId}-inline-group-2`}
                name='inline-group-2'
              >
                <option value=''>選択してください</option>
                <option value='1'>選択肢1</option>
                <option value='2'>選択肢2</option>
                <option value='3'>選択肢3</option>
              </Select>
            </div>

            <div className='flex flex-col gap-2'>
              <Label htmlFor={`${formId}-inline-group-3`}>ラベル3</Label>
              <Select
                aria-describedby='inline-group-support-text'
                id={`${formId}-inline-group-3`}
                name='inline-group-3'
              >
                <option value=''>選択してください</option>
                <option value='1'>選択肢1</option>
                <option value='2'>選択肢2</option>
                <option value='3'>選択肢3</option>
              </Select>
            </div>
          </div>
        </fieldset>
      </div>
    );
  },
};

export const Errored: Story = {
  render: () => {
    const formId = React.useId();

    return (
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-error`}>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id='error-support-text'>サポートテキスト</SupportText>
          <Select
            aria-describedby='error-support-text error-text'
            aria-invalid={true}
            id={`${formId}-error`}
            isError={true}
            name='error'
            required
          >
            <option value=''>選択してください</option>
            <option value='1'>選択肢1</option>
            <option value='2'>選択肢2</option>
            <option value='3'>選択肢3</option>
          </Select>
          <ErrorText id='error-text'>＊エラーテキスト</ErrorText>
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const formId = React.useId();

    return (
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-disabled`}>ラベル</Label>
          <SupportText id='disabled-support-text'>
            〜の理由により、この項目は無効化されています。
          </SupportText>
          <Select
            aria-describedby='disabled-support-text'
            aria-disabled={true}
            id={`${formId}-disabled`}
            name='disabled'
          >
            <option value=''>選択してください</option>
            <option value='1'>選択肢1</option>
            <option value='2'>選択肢2</option>
            <option value='3'>選択肢3</option>
          </Select>
        </div>
      </div>
    );
  },
};

export const WidthExamples: Story = {
  render: () => {
    const formId = React.useId();

    return (
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-full-width`}>100%幅のセレクトボックス</Label>
          <SupportText id='full-width-support-text'>サポートテキスト</SupportText>
          <Select
            aria-describedby='full-width-support-text'
            id={`${formId}-full-width`}
            name='full-width'
          >
            <option hidden value=''>
              選択してください
            </option>
            <option value='1'>選択肢1</option>
            <option value='2'>選択肢2</option>
            <option value='3'>選択肢3</option>
          </Select>
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-specific-width`}>
            特定の幅（256 CSS px）を指定したセレクトボックス
          </Label>
          <SupportText id='specific-width-support-text'>サポートテキスト</SupportText>
          <div className='w-64'>
            <Select
              aria-describedby='specific-width-support-text'
              id={`${formId}-specific-width`}
              name='specific-width'
            >
              <option hidden value=''>
                選択してください
              </option>
              <option value='1'>選択肢1</option>
              <option value='2'>選択肢2</option>
              <option value='3'>選択肢3</option>
            </Select>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={`${formId}-fit-width`}>内容にフィットしたセレクトボックス</Label>
          <SupportText id='fit-width-support-text'>サポートテキスト</SupportText>
          <div className='w-fit'>
            <Select
              aria-describedby='fit-width-support-text'
              id={`${formId}-fit-width`}
              name='fit-width'
            >
              <option hidden value=''>
                選択してください
              </option>
              <option value='1'>選択肢1</option>
              <option value='2'>選択肢2</option>
              <option value='3'>選択肢3</option>
            </Select>
          </div>
        </div>
      </div>
    );
  },
};
