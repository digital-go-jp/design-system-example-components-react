import type { Meta, StoryObj } from '@storybook/react-vite';
import { RequirementBadge } from './FormControlLabel';

const meta = {
  id: 'Component/DADS v2/RequirementBadge',
  title: 'Component/フォームコントロールラベル/RequirementBadge',
  component: RequirementBadge,
  argTypes: {
    isOptional: {
      description: '任意項目の場合に `true` を指定します。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    children: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof RequirementBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    isOptional: false,
  },
  render: (args) => {
    return <RequirementBadge {...args}>{args.isOptional ? '※任意' : '※必須'}</RequirementBadge>;
  },
};
