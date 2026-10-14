import type { Meta, StoryObj } from '@storybook/react-vite';
import { Legend } from './FormControlLabel';

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
  args: {
    size: 'md',
    children: '凡例',
  },
};
