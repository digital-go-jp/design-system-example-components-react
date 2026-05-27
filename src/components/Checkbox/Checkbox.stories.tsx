import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ChangeEvent, useEffect, useRef, useState } from 'react';
import { ErrorText } from '../ErrorText';
import { Legend } from '../Legend';
import { RequirementBadge } from '../RequirementBadge';
import { SupportText } from '../SupportText';
import { Checkbox } from './Checkbox';

const meta = {
  id: 'Component/DADS v2/Checkbox',
  title: 'Component/チェックボックス',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: 'string',
      description: 'チェックボックスのサイズを以下から選択します。',
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
} satisfies Meta<typeof Checkbox>;

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
      <div className='mt-2 flex flex-col gap-2'>
        <Checkbox aria-describedby='stacked-support-text' {...args}>
          選択肢1
        </Checkbox>
        <Checkbox aria-describedby='stacked-support-text' defaultChecked {...args}>
          選択肢2
        </Checkbox>
        <Checkbox aria-describedby='stacked-support-text' {...args}>
          選択肢3
        </Checkbox>
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
        <Checkbox aria-describedby='inline-support-text' {...args}>
          選択肢1
        </Checkbox>
        <Checkbox aria-describedby='inline-support-text' defaultChecked {...args}>
          選択肢2
        </Checkbox>
        <Checkbox aria-describedby='inline-support-text' {...args}>
          選択肢3
        </Checkbox>
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
            <Checkbox aria-describedby='error-1-support-text error-1-text' {...args}>
              選択肢1
            </Checkbox>
            <Checkbox aria-describedby='error-1-support-text error-1-text' defaultChecked {...args}>
              選択肢2
            </Checkbox>
            <Checkbox aria-describedby='error-1-support-text error-1-text' {...args}>
              選択肢3
            </Checkbox>
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
            <Checkbox aria-describedby='error-2-support-text error-2-text' {...args}>
              選択肢1
            </Checkbox>
            <Checkbox aria-describedby='error-2-support-text error-2-text' defaultChecked {...args}>
              選択肢2
            </Checkbox>
            <Checkbox aria-describedby='error-2-support-text error-2-text' {...args}>
              選択肢3
            </Checkbox>
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
            <Checkbox aria-describedby='disabled-1-support-text' {...args}>
              選択肢1
            </Checkbox>
            <Checkbox aria-describedby='disabled-1-support-text' defaultChecked {...args}>
              選択肢2
            </Checkbox>
            <Checkbox aria-describedby='disabled-1-support-text' {...args}>
              選択肢3
            </Checkbox>
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
            <Checkbox aria-describedby='disabled-2-support-text' {...args}>
              選択肢1
            </Checkbox>
            <Checkbox aria-describedby='disabled-2-support-text' defaultChecked {...args}>
              選択肢2
            </Checkbox>
            <Checkbox aria-describedby='disabled-2-support-text' {...args}>
              選択肢3
            </Checkbox>
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

export const Indeterminate: Story = {
  render: ({ ...args }) => {
    const checkAll = useRef<HTMLInputElement>(null);
    const [checks, setChecks] = useState([false, true, false, false, true]);
    const options = ['サッカー', 'バスケットボール', 'テニス', 'スイミング', 'ヨガ'];

    useEffect(() => {
      if (!checkAll.current) return;
      const allChecked = checks.every(Boolean);
      const noneChecked = checks.every((v) => !v);
      checkAll.current.checked = allChecked;
      checkAll.current.indeterminate = !allChecked && !noneChecked;
    }, [checks]);

    const handleCheckAllChange = () => {
      if (!checkAll.current) return;
      const checked = checkAll.current.indeterminate || checkAll.current.checked;
      checkAll.current.checked = checked;
      setChecks(checks.map(() => checked));
    };

    const handleIndividualChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newChecks = [...checks];
      newChecks[index] = e.target.checked;
      setChecks(newChecks);
    };

    return (
      <>
        <Checkbox ref={checkAll} onChange={handleCheckAllChange} {...args}>
          すべてのスポーツ
        </Checkbox>
        <div className='mt-6 flex flex-col gap-2'>
          {options.map((option, index) => (
            <Checkbox
              key={option}
              checked={checks[index]}
              onChange={handleIndividualChange(index)}
              {...args}
            >
              {option}
            </Checkbox>
          ))}
        </div>
      </>
    );
  },
  args: {
    size: 'sm',
    isError: false,
    'aria-disabled': false,
  },
};
