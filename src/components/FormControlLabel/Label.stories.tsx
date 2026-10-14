import type { Meta, StoryObj } from '@storybook/react-vite';
import { useId } from 'react';
import { Input } from '../Input';
import { FormControlLabel, Label } from './FormControlLabel';

const meta = {
  id: 'Component/DADS v2/Label',
  title: 'Component/フォームコントロールラベル/Label',
  component: Label,
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
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const id = useId();

    return (
      <FormControlLabel>
        <Label {...args} htmlFor={id} />
        <div>
          <Input id={id} blockSize='md' />
        </div>
      </FormControlLabel>
    );
  },
  args: {
    size: 'md',
    children: 'ラベル',
  },
};
