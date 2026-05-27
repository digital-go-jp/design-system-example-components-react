import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorText } from '../ErrorText';
import { Legend } from '../Legend';
import { RequirementBadge } from '../RequirementBadge';
import { SupportText } from '../SupportText';
import { Radio } from './Radio';

const meta = {
  id: 'Component/DADS v2/Radio',
  title: 'Component/ラジオボタン',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: 'string',
      description: 'ラジオボタンのサイズを以下から選択します。',
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      table: {
        defaultValue: { summary: 'sm' },
        type: { summary: "'sm' | 'md' | 'lg'" },
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: 'sm',
    'aria-disabled': false,
    isError: false,
    children: '選択肢',
  },
};

export const Standalone: Story = {
  args: {
    size: 'sm',
    'aria-disabled': false,
    isError: false,
    'aria-label': '名前を指定してください',
  },
};

export const Stacked: Story = {
  render: ({ ...args }) => (
    <fieldset>
      <Legend>
        ラベル<RequirementBadge>※必須</RequirementBadge>
      </Legend>
      <SupportText className='mt-2' id='stacked-support-text'>
        サポートテキスト
      </SupportText>
      <div className='mt-1 flex flex-col'>
        <Radio aria-describedby='stacked-support-text' name='a' {...args}>
          選択肢1
        </Radio>
        <Radio aria-describedby='stacked-support-text' name='a' defaultChecked {...args}>
          選択肢2
        </Radio>
        <Radio aria-describedby='stacked-support-text' name='a' {...args}>
          選択肢3
        </Radio>
      </div>
    </fieldset>
  ),
  args: {
    size: 'sm',
    isError: false,
    'aria-disabled': false,
  },
};

export const Inline: Story = {
  render: ({ ...args }) => (
    <fieldset>
      <Legend>
        ラベル<RequirementBadge>※必須</RequirementBadge>
      </Legend>
      <SupportText className='mt-2' id='inline-support-text'>
        サポートテキスト
      </SupportText>
      <div className='mt-1 flex flex-wrap gap-x-4'>
        <Radio aria-describedby='inline-support-text' name='d' {...args}>
          選択肢1
        </Radio>
        <Radio aria-describedby='inline-support-text' name='d' defaultChecked {...args}>
          選択肢2
        </Radio>
        <Radio aria-describedby='inline-support-text' name='d' {...args}>
          選択肢3
        </Radio>
      </div>
    </fieldset>
  ),
  args: {
    size: 'sm',
    isError: false,
    'aria-disabled': false,
  },
};

export const Errored: Story = {
  render: ({ ...args }) => {
    return (
      <div className='flex flex-col gap-16'>
        <fieldset>
          <Legend>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='error-1-support-text'>
            サポートテキスト
          </SupportText>
          <div className='mt-1 flex flex-col'>
            <Radio aria-describedby='error-1-support-text error-1-text' name='g' {...args}>
              選択肢1
            </Radio>
            <Radio
              aria-describedby='error-1-support-text error-1-text'
              name='g'
              defaultChecked
              {...args}
            >
              選択肢2
            </Radio>
            <Radio aria-describedby='error-1-support-text error-1-text' name='g' {...args}>
              選択肢3
            </Radio>
          </div>
          <ErrorText className='mt-2' id='error-1-text'>
            ＊エラーテキストが入ります。
          </ErrorText>
        </fieldset>
        <fieldset>
          <Legend>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='error-2-support-text'>
            サポートテキスト
          </SupportText>
          <div className='mt-1 flex flex-wrap gap-x-4'>
            <Radio aria-describedby='error-2-support-text error-2-text' name='h' {...args}>
              選択肢1
            </Radio>
            <Radio
              aria-describedby='error-2-support-text error-2-text'
              name='h'
              defaultChecked
              {...args}
            >
              選択肢2
            </Radio>
            <Radio aria-describedby='error-2-support-text error-2-text' name='h' {...args}>
              選択肢3
            </Radio>
          </div>
          <ErrorText className='mt-2' id='error-2-text'>
            ＊エラーテキストが入ります。
          </ErrorText>
        </fieldset>
      </div>
    );
  },
  args: {
    size: 'sm',
    isError: true,
    'aria-disabled': false,
  },
  argTypes: {
    isError: {
      table: {
        disable: true,
      },
    },
  },
};

export const Disabled: Story = {
  render: ({ ...args }) => {
    return (
      <div className='flex flex-col gap-16'>
        <fieldset>
          <Legend>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='disabled-1-support-text'>
            〜の理由により、この項目は無効化されています。
          </SupportText>
          <div className='mt-1 flex flex-col'>
            <Radio aria-describedby='disabled-1-support-text' name='i' {...args}>
              選択肢1
            </Radio>
            <Radio aria-describedby='disabled-1-support-text' name='i' defaultChecked {...args}>
              選択肢2
            </Radio>
            <Radio aria-describedby='disabled-1-support-text' name='i' {...args}>
              選択肢3
            </Radio>
          </div>
        </fieldset>
        <fieldset>
          <Legend>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Legend>
          <SupportText className='mt-2' id='disabled-2-support-text'>
            〜の理由により、この項目は無効化されています。
          </SupportText>
          <div className='mt-1 flex flex-wrap gap-x-4'>
            <Radio aria-describedby='disabled-2-support-text' name='j' {...args}>
              選択肢1
            </Radio>
            <Radio aria-describedby='disabled-2-support-text' name='j' defaultChecked {...args}>
              選択肢2
            </Radio>
            <Radio aria-describedby='disabled-2-support-text' name='j' {...args}>
              選択肢3
            </Radio>
          </div>
        </fieldset>
      </div>
    );
  },
  args: {
    size: 'sm',
    isError: false,
    'aria-disabled': 'true',
  },
  argTypes: {
    'aria-disabled': {
      table: {
        disable: true,
      },
    },
  },
};
