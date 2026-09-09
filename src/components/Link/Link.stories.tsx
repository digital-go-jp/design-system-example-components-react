import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link, LinkExternalLinkIcon } from './Link';

const meta = {
  id: 'Component/DADS v2/Link',
  title: 'Component/リンク',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col items-start gap-8'>
        <Link href='#'>リンク</Link>

        <Link href='https://www.digital.go.jp' target='_blank'>
          外部リンク
        </Link>

        <p>
          これは<Link href='#'>文中のリンク</Link>です。
        </p>
        <p className='w-[calc(160/16*1rem)]'>
          これは
          <Link href='https://www.digital.go.jp' target='_blank'>
            複数行にまたがる文中のインラインリンク
          </Link>
          です。
        </p>

        <Link asChild>
          <a href='https://www.digital.go.jp' target='_blank' rel='noreferrer'>
            Slotを使ったリンク
            <LinkExternalLinkIcon />
          </a>
        </Link>
      </div>
    );
  },
};
