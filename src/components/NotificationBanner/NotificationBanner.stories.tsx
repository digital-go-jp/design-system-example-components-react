import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../';
import { NotificationBanner } from './NotificationBanner';
import { NotificationBannerBody } from './parts/Body';
import { NotificationBannerClose } from './parts/Close';
import { NotificationBannerMobileClose } from './parts/MobileClose';

const meta = {
  id: 'Component/DADS v2/NotificationBanner',
  title: 'Component/ノティフィケーションバナー',
  component: NotificationBanner,
  tags: ['autodocs'],
  argTypes: {
    bannerStyle: {
      options: ['standard', 'color-chip'],
      control: { type: 'radio' },
      description: 'ノティフィケーションバナーのスタイルを選択します。',
      table: {
        type: { summary: "'standard' | 'color-chip'" },
      },
    },
    type: {
      options: ['info1', 'info2', 'warning', 'error', 'success'],
      control: { type: 'radio' },
      description: 'ノティフィケーションバナーで通知する情報属性の種類を選択します。',
      table: {
        type: { summary: "'info1' | 'info2' | 'warning' | 'error' | 'success'" },
      },
    },
  },
} satisfies Meta<typeof NotificationBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    bannerStyle: 'standard',
    type: 'info2',
    headingLevel: 'h2',
    title: 'バナータイトル',
    children: (
      <NotificationBannerBody>
        <p>
          <time dateTime='2024-07-01'>2024年7月1日</time>
        </p>
        <p className='mt-2'>
          ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
        </p>
      </NotificationBannerBody>
    ),
  },
};

export const StandardWithClose = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <NotificationBanner
          bannerStyle='standard'
          type='info1'
          headingLevel='h2'
          title='登録期間が延長されました'
        >
          <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='standard'
          type='info2'
          headingLevel='h2'
          title='登録期間が延長されました'
        >
          <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='standard'
          type='warning'
          headingLevel='h2'
          title='偽SNSアカウントにご注意ください'
        >
          <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='standard'
          type='error'
          headingLevel='h2'
          title='操作を完了できませんでした'
        >
          <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='standard'
          type='success'
          headingLevel='h2'
          title='登録手続きは全て完了しました'
        >
          <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
      </div>
    );
  },
};

export const ColorChipWithClose = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <NotificationBanner
          bannerStyle='color-chip'
          type='info1'
          headingLevel='h2'
          title='登録期間が延長されました'
        >
          <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='color-chip'
          type='info2'
          headingLevel='h2'
          title='登録期間が延長されました'
        >
          <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='color-chip'
          type='warning'
          headingLevel='h2'
          title='偽SNSアカウントにご注意ください'
        >
          <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='color-chip'
          type='error'
          headingLevel='h2'
          title='操作を完了できませんでした'
        >
          <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='color-chip'
          type='success'
          headingLevel='h2'
          title='登録手続きは全て完了しました'
        >
          <NotificationBannerClose onClick={() => console.log('Clicked close')} />
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
          </NotificationBannerBody>
        </NotificationBanner>
      </div>
    );
  },
};

export const StandardWithButton = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <NotificationBanner
          bannerStyle='standard'
          type='info1'
          headingLevel='h2'
          title='登録期間が延長されました'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button type='button' size='md' variant='outline'>
                アクションボタン
              </Button>
              <Button type='button' size='md' variant='solid-fill'>
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='standard'
          type='info2'
          headingLevel='h2'
          title='登録期間が延長されました'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-solid-gray-800 hover:text-solid-gray-900 hover:bg-solid-gray-200 active:!text-black active:bg-solid-gray-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-solid-gray-800 hover:bg-solid-gray-900 active:!bg-black'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='standard'
          type='warning'
          headingLevel='h2'
          title='偽SNSアカウントにご注意ください'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-warning-yellow-2 hover:text-yellow-1000 hover:bg-yellow-200 active:text-yellow-1200 active:bg-yellow-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-warning-yellow-2 hover:bg-yellow-1100 active:bg-yellow-1200'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='standard'
          type='error'
          headingLevel='h2'
          title='操作を完了できませんでした'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-error-1 hover:text-red-1000 hover:bg-red-200 active:text-red-1200 active:bg-red-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-error-1 hover:bg-red-1000 active:bg-red-1200'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='standard'
          type='success'
          headingLevel='h2'
          title='登録手続きは全て完了しました'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-success-2 hover:text-green-1000 hover:bg-green-200 active:text-green-1200 active:bg-green-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-success-2 hover:bg-green-1000 active:bg-green-1200'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
      </div>
    );
  },
};

export const ColorChipWithButton = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <NotificationBanner
          bannerStyle='color-chip'
          type='info1'
          headingLevel='h2'
          title='登録期間が延長されました'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button type='button' size='md' variant='outline'>
                アクションボタン
              </Button>
              <Button type='button' size='md' variant='solid-fill'>
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='color-chip'
          type='info2'
          headingLevel='h2'
          title='登録期間が延長されました'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-solid-gray-800 hover:text-solid-gray-900 hover:bg-solid-gray-200 active:text-black active:bg-solid-gray-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-solid-gray-800 hover:bg-solid-gray-900 active:bg-black'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='color-chip'
          type='warning'
          headingLevel='h2'
          title='偽SNSアカウントにご注意ください'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-warning-yellow-2 hover:text-yellow-1000 hover:bg-yellow-200 active:text-yellow-1200 active:bg-yellow-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-warning-yellow-2 hover:bg-yellow-1100 active:bg-yellow-1200'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='color-chip'
          type='error'
          headingLevel='h2'
          title='操作を完了できませんでした'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-error-1 hover:text-red-1000 hover:bg-red-200 active:text-red-1200 active:bg-red-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-error-1 hover:bg-red-1000 active:bg-red-1200'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='color-chip'
          type='success'
          headingLevel='h2'
          title='登録手続きは全て完了しました'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
              <Button
                className='text-success-2 hover:text-green-1000 hover:bg-green-200 active:text-green-1200 active:bg-green-300'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='bg-success-2 hover:bg-green-1000 active:bg-green-1200'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
      </div>
    );
  },
};

export const StandardWithButtonMobileHoriz = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <NotificationBanner
          bannerStyle='standard'
          type='info1'
          headingLevel='h2'
          title='登録期間が延長されました'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button className='!px-3 desktop:!px-4' type='button' size='md' variant='outline'>
                アクションボタン
              </Button>
              <Button className='!px-3 desktop:!px-4' type='button' size='md' variant='solid-fill'>
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='standard'
          type='info2'
          headingLevel='h2'
          title='登録期間が延長されました'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-solid-gray-800 hover:text-solid-gray-900 hover:bg-solid-gray-200 active:text-black active:bg-solid-gray-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-solid-gray-800 hover:bg-solid-gray-900 active:bg-black desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='standard'
          type='warning'
          headingLevel='h2'
          title='偽SNSアカウントにご注意ください'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-warning-yellow-2 hover:text-yellow-1000 hover:bg-yellow-200 active:text-yellow-1200 active:bg-yellow-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-warning-yellow-2 hover:bg-yellow-1100 active:bg-yellow-1200 desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='standard'
          type='error'
          headingLevel='h2'
          title='操作を完了できませんでした'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-error-1 hover:text-red-1000 hover:bg-red-200 active:text-red-1200 active:bg-red-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-error-1 hover:bg-red-1000 active:bg-red-1200 desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='standard'
          type='success'
          headingLevel='h2'
          title='登録手続きは全て完了しました'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-success-2 hover:text-green-1000 hover:bg-green-200 active:text-green-1200 active:bg-green-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-success-2 hover:bg-green-1000 active:bg-green-1200 desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
      </div>
    );
  },
};

export const ColorChipWithButtonMobileHoriz = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <NotificationBanner
          bannerStyle='color-chip'
          type='info1'
          headingLevel='h2'
          title='登録期間が延長されました'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button className='!px-3 desktop:!px-4' type='button' size='md' variant='outline'>
                アクションボタン
              </Button>
              <Button className='!px-3 desktop:!px-4' type='button' size='md' variant='solid-fill'>
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='color-chip'
          type='info2'
          headingLevel='h2'
          title='登録期間が延長されました'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-solid-gray-800 hover:text-solid-gray-900 hover:bg-solid-gray-200 active:text-black active:bg-solid-gray-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-solid-gray-800 hover:bg-solid-gray-900 active:bg-black desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='color-chip'
          type='warning'
          headingLevel='h2'
          title='偽SNSアカウントにご注意ください'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-warning-yellow-2 hover:text-yellow-1000 hover:bg-yellow-200 active:text-yellow-1200 active:bg-yellow-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-warning-yellow-2 hover:bg-yellow-1100 active:bg-yellow-1200 desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='color-chip'
          type='error'
          headingLevel='h2'
          title='操作を完了できませんでした'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-error-1 hover:text-red-1000 hover:bg-red-200 active:text-red-1200 active:bg-red-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-error-1 hover:bg-red-1000 active:bg-red-1200 desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
        <NotificationBanner
          bannerStyle='color-chip'
          type='success'
          headingLevel='h2'
          title='登録手続きは全て完了しました'
        >
          <NotificationBannerBody>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-2 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button
                className='!px-3 text-success-2 hover:text-green-1000 hover:bg-green-200 active:text-green-1200 active:bg-green-300 desktop:!px-4'
                size='md'
                type='button'
                variant='outline'
              >
                アクションボタン
              </Button>
              <Button
                className='!px-3 bg-success-2 hover:bg-green-1000 active:bg-green-1200 desktop:!px-4'
                size='md'
                type='button'
                variant='solid-fill'
              >
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
      </div>
    );
  },
};

/** 改行が多くなる場合に備えてモバイルでコンパクトタイプの閉じるボタンを使用している例 */
export const MobileCompact: StoryObj = {
  render: () => (
    <NotificationBanner
      bannerStyle='standard'
      type='info1'
      headingLevel='h2'
      title='iPhoneのマイナンバーカードは利用準備中です'
    >
      <NotificationBannerMobileClose onClick={() => console.log('Clicked close')} />
      <NotificationBannerBody>
        <p>
          <time dateTime='2024-07-01'>2024年7月1日</time>
        </p>
        <p>ダミーテキストは、デザインの作成時に使用される仮の文章です。</p>
        <div className='grid mt-2 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end'>
          <Button type='button' size='md' variant='outline'>
            アクションボタン
          </Button>
          <Button type='button' size='md' variant='solid-fill'>
            アクションボタン
          </Button>
        </div>
      </NotificationBannerBody>
    </NotificationBanner>
  ),
};
