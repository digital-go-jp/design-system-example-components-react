import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ScrollToTopButton } from './ScrollToTopButton';

const meta = {
  id: 'Component/Deprecated/ScrollToTopButton',
  title: 'Component/Deprecated/スクロールトップボタン',
  component: ScrollToTopButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollToTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    onClick: fn(),
  },
};
