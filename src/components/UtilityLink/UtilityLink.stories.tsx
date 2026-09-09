import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
  Unstyled,
} from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '../Link';
import { UtilityLink, UtilityLinkExternalLinkIcon } from './UtilityLink';

const meta = {
  id: 'Component/DADS v2/UtilityLink',
  title: 'Component/ユーティリティリンク',
  component: UtilityLink,
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

          <Unstyled>
            <div className='prose'>
              <h2>コンポーネントのガイドライン</h2>
              <p>
                <Link
                  href='https://design.digital.go.jp/dads/components/utility-link/'
                  target='_blank'
                >
                  ユーティリティリンク（概要）｜デジタル庁デザインシステムβ版
                </Link>
              </p>
            </div>
          </Unstyled>
        </>
      ),
    },
  },
} satisfies Meta<typeof UtilityLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col items-start gap-8'>
        <UtilityLink href='#'>リンク</UtilityLink>

        <UtilityLink href='https://www.digital.go.jp' target='_blank'>
          外部リンク
        </UtilityLink>

        <UtilityLink asChild>
          <a href='https://www.digital.go.jp' target='_blank' rel='noreferrer'>
            <svg
              className='inline-block size-4 mr-1 align-[-0.15em]'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='currentcolor'
              aria-hidden='true'
            >
              <path d='M4.6 20.5c-.5-.1-1-.6-1.1-1l16-16c.5.1.9.6 1 1l-16 16Zm-1.1-6.4v-2L12 3.4h2.1L3.5 14.1Zm0-7.4V5.3c0-1 .8-1.8 1.8-1.8h1.4L3.5 6.7Zm13.8 13.8 3.2-3.2v1.4c0 1-.8 1.8-1.8 1.8h-1.4Zm-7.4 0L20.5 9.9v2L12 20.6H9.9Z' />
            </svg>
            Slotを使ったリンク
            <UtilityLinkExternalLinkIcon />
          </a>
        </UtilityLink>
      </div>
    );
  },
};
