import type { Meta, StoryObj } from '@storybook/react-vite';
import { useId } from 'react';
import { Radio } from '../Radio';
import { FormControlLabel, Legend } from './FormControlLabel';

const meta = {
  id: 'Component/DADS v2/Legend',
  title: 'Component/フォームコントロールラベル/Legend',
  component: Legend,
  argTypes: {
    size: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'radio' },
      description: 'ラベルのフォントサイズの大きさを以下から選択します。',
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: "'lg', 'md', 'sm'" },
      },
    },
  },
} satisfies Meta<typeof Legend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const name = useId();

    return (
      <FormControlLabel as='fieldset'>
        <Legend {...args} />
        <div>
          <Radio name={name} value='email' size='md'>
            メール
          </Radio>
          <Radio name={name} value='phone' size='md'>
            電話
          </Radio>
        </div>
      </FormControlLabel>
    );
  },
  args: {
    size: 'md',
    children: '凡例',
  },
};
