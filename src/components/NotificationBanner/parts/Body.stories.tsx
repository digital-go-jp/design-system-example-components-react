import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../../Button';
import { NotificationBannerBody } from './Body';

const meta = {
  id: 'Component/DADS v2/NotificationBanner/Parts/Body',
  title: 'Component/ノティフィケーションバナー/Parts/Body',
  component: NotificationBannerBody,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'NotificationBannerBody はノティフィケーションバナーのコンテンツ領域に使用します。',
      },
    },
  },
} satisfies Meta<typeof NotificationBannerBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <NotificationBannerBody>
        <p>年月日</p>
        <p className='mt-2'>バナーデスクリプション</p>
      </NotificationBannerBody>
    );
  },
};

export const WithButton: Story = {
  render: () => {
    return (
      <NotificationBannerBody>
        <p>年月日</p>
        <p className='mt-2'>バナーデスクリプション</p>
        <div className='grid mt-4 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
          <Button type='button' size='md' variant='outline'>
            アクションボタン
          </Button>
          <Button type='button' size='md' variant='solid-fill'>
            アクションボタン
          </Button>
        </div>
      </NotificationBannerBody>
    );
  },
};

export const WithButtonMobileHoriz: Story = {
  render: () => {
    return (
      <NotificationBannerBody>
        <p>年月日</p>
        <p className='mt-2'>バナーデスクリプション</p>
        <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
          <Button className='!px-3 desktop:!px-4' type='button' size='md' variant='outline'>
            アクションボタン
          </Button>
          <Button className='!px-3 desktop:!px-4' type='button' size='md' variant='solid-fill'>
            アクションボタン
          </Button>
        </div>
      </NotificationBannerBody>
    );
  },
};
