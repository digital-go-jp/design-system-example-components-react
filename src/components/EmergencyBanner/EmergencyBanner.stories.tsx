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
import { EmergencyBanner } from './EmergencyBanner';
import { EmergencyBannerBody } from './parts/Body';
import { EmergencyBannerButton } from './parts/Button';
import { EmergencyBannerHeading } from './parts/Heading';

const meta = {
  id: 'Component/DADS v2/EmergencyBanner',
  title: 'Component/緊急時バナー',
  component: EmergencyBanner,
  tags: ['autodocs'],
  argTypes: {},
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
                  href='https://design.digital.go.jp/dads/components/emergency-banner/'
                  target='_blank'
                >
                  緊急時バナー（概要）｜デジタル庁デザインシステムβ版
                </Link>
              </p>
            </div>
          </Unstyled>
        </>
      ),
      description: {
        component:
          '緊急時バナーは緊急性の高い通知のため、すべてのユーザーが確実に認知できる必要があります。そのため`body`要素や`main`要素内の先頭など、できるだけページの先頭に近い場所に配置してください。\n\nリンク先がある場合は`EmergencyBannerButton`コンポーネントを使ってバナー内にアクションボタンを配置してください。',
      },
    },
  },
} satisfies Meta<typeof EmergencyBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutLink: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <EmergencyBanner>
          <EmergencyBannerHeading level='h2'>
            〇〇地区に避難準備情報が発令されました
          </EmergencyBannerHeading>
          <EmergencyBannerBody>
            <div className='flex flex-col gap-2 desktop:gap-4'>
              <p className='text-std-16N-170'>
                <time dateTime='2024-01-01T06:00'>2024年1月1日 06:00更新</time>
              </p>
              <p className='text-std-16N-170 desktop:text-std-20N-150'>
                1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。
              </p>
            </div>
          </EmergencyBannerBody>
        </EmergencyBanner>
      </div>
    );
  },
};

export const WithLink: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <EmergencyBanner>
          <EmergencyBannerHeading level='h2'>
            〇〇地区に避難準備情報が発令されました
          </EmergencyBannerHeading>
          <EmergencyBannerBody>
            <div className='flex flex-col gap-2 desktop:gap-4'>
              <p className='text-std-16N-170'>
                <time dateTime='2024-01-01T06:00'>2024年1月1日 06:00更新</time>
              </p>
              <p className='text-std-16N-170 desktop:text-std-20N-150'>
                1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。
              </p>
              <EmergencyBannerButton className='mt-4 mb-2' href='#'>
                指定避難所を確認する
              </EmergencyBannerButton>
            </div>
          </EmergencyBannerBody>
        </EmergencyBanner>
      </div>
    );
  },
};

export const WithLinkInNewWindow: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-8'>
        <EmergencyBanner>
          <EmergencyBannerHeading level='h2'>
            〇〇地区に避難準備情報が発令されました
          </EmergencyBannerHeading>
          <EmergencyBannerBody>
            <div className='flex flex-col gap-2 desktop:gap-4'>
              <p className='text-std-16N-170'>
                <time dateTime='2024-01-01T06:00'>2024年1月1日 06:00更新</time>
              </p>
              <p className='text-std-16N-170 desktop:text-std-20N-150'>
                1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。
              </p>
              <EmergencyBannerButton className='mt-4 mb-2' href='#' target='_blank'>
                指定避難所を確認する
              </EmergencyBannerButton>
            </div>
          </EmergencyBannerBody>
        </EmergencyBanner>
      </div>
    );
  },
};
