import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './FormControlLabel';

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
  args: {
    size: 'md',
    children: 'ラベル',
  },
};
