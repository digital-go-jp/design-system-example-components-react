import type { Meta, StoryObj } from '@storybook/react-vite';
import { Ul } from '../';
import { Blockquote } from './Blockquote';

const meta = {
  id: 'Component/DADS v2/Blockquote',
  title: 'Component/引用ブロック',
  component: Blockquote,
  tags: ['autodocs'],
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children:
      'これは引用文の例です。デジタル庁デザインシステムでは、アクセシビリティファーストの原則に基づいて、すべてのユーザーが利用しやすいサービスの提供を目指しています。',
  },
};

export const MultipleParagraphs: Story = {
  render: () => {
    return (
      <Blockquote>
        <p className='my-4'>
          これは引用文の例です。デジタル庁デザインシステムでは、アクセシビリティファーストの原則に基づいて、すべてのユーザーが利用しやすいサービスの提供を目指しています。
        </p>
        <p className='my-4'>これは複数の段落を含めている例です。</p>
        <p className='my-4'>最初と最後の段落のマージンは自動的に調整されます。</p>
      </Blockquote>
    );
  },
};

export const WithList: Story = {
  render: () => {
    return (
      <Blockquote>
        <p className='my-4'>デジタル庁デザインシステムは、以下の理念を追求して作成されています。</p>
        <Ul>
          <li>アクセシビリティファースト</li>
          <li>行政機関にとって高い汎用性と利便性</li>
          <li>継続的かつ持続可能な改善活動および研究と実践</li>
        </Ul>
        <p className='my-4'>
          これにより、デジタル化の恩恵をすべての人に届けられる日本のデジタル化社会の構築に寄与します。
        </p>
      </Blockquote>
    );
  },
};
