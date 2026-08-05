import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Link } from '../Link';
import card2Image from './assets/card-2.jpg';
import card31Image from './assets/card-3-1.png';
import card32Image from './assets/card-3-2.png';
import card4Image from './assets/card-4.jpg';
import card5Image from './assets/card-5.jpg';
import card6Image from './assets/card-6.jpg';

const meta = {
  id: 'Component/DADS v2/Card',
  title: 'Component/カード',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Example1: Story = {
  render: (_args) => (
    <ul className='flex flex-wrap gap-6'>
      {[
        {
          title: '機内サービス',
          description: '快適なシートや機内食で空の旅をより快適にお過ごしいただけます',
          icon: (
            <path
              d='M29.9 8C31.2 6.1 33 6.1 34 8c1.1 1.9 2.2 5 2.2 8.8v6.1l20.5 12.3c1 .8 1.9 2.1 1.9 3.5v4l-23-7.5-.9 12.1-3 2.6h.7l-.5.3-.3-.2-1.7 1.4 2-1.2 6.1 3.7Q39.7 55 40 57l-16 .2q.1-2 1.9-3.4l3.7-2.3L28.3 35l-23 7.8v-4q.1-2.2 1.9-3.5l20.5-12.3v-6.1c0-3.7 1.1-7 2.2-8.8'
              fill='white'
            />
          ),
        },
        {
          title: '乗り継ぎサポート',
          description: 'お乗り継ぎ時の際に日本人のガイドがご案内いたします',
          icon: (
            <path
              d='M32 31.6q2 0 3.4-1.4 1.5-1.4 1.4-3.4 0-2-1.4-3.4Q34 22 32 22q-2 0-3.4 1.4-1.4 1.5-1.4 3.4 0 2 1.4 3.4 1.4 1.5 3.4 1.4m0 25.8A85 85 0 0 1 16.9 41q-5-7.5-5-13.8 0-9.1 6-15 6-5.6 14.1-5.6t14.2 5.7q6 5.7 6 15 0 6.2-5.1 13.7T32 57.4'
              fill='white'
            />
          ),
        },
        {
          title: '機内持ち込み手荷物検査',
          description: '機内にお持ち込みいただける手荷物について係員が検査いたします',
          icon: (
            <path
              d='M40 5.3H24v8H13.3v40h7q-.4.7-.3 1.4c0 2.1 1.9 4 4 4s4-1.9 4-4q0-.7-.3-1.4h8.6q-.4.7-.3 1.4c0 2.1 1.9 4 4 4s4-1.9 4-4q0-.7-.3-1.4h7v-40H40zM25.3 44h-2.6V24h2.6zm8 0h-2.6V24h2.6zM36 13.3h-8v-4h8zM41.3 24v20h-2.6V24z'
              fill='white'
            />
          ),
        },
      ].map(({ title, description, icon }) => (
        <li key={title} className='flex min-w-0'>
          <a
            className='group/card1 relative z-0 flex min-w-0 max-w-full w-[352px] flex-col font-sans no-underline [overflow-wrap:anywhere] focus-visible:rounded-16 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300'
            href='#'
          >
            <div
              className='relative box-content aspect-[3/2] rounded-t-2xl border border-solid-gray-420'
              style={{
                background:
                  'linear-gradient(0deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%), linear-gradient(114deg, var(--color-primitive-cyan-400) 0%, var(--color-primitive-purple-500) 100%)',
              }}
            >
              <svg
                aria-hidden='true'
                className='absolute inset-0 z-0 m-auto -translate-y-3'
                fill='none'
                height='64'
                viewBox='0 0 64 64'
                width='64'
              >
                {icon}
              </svg>
            </div>
            <div className='-mt-6 relative flex-grow grid content-start gap-y-4 rounded-16 border border-solid-gray-420 bg-white px-6 py-4'>
              <h2 className='min-w-0 text-solid-gray-900 text-std-20B-150 underline decoration-[calc(1/16*1rem)] underline-offset-[calc(3/16*1rem)] group-hover/card1:decoration-[calc(3/16*1rem)]'>
                {title}
              </h2>
              <p className='my-0 text-solid-gray-800 text-std-16N-170'>{description}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  ),
};

export const Example2: Story = {
  render: (_args) => (
    <ul className='grid gap-6'>
      {[
        {
          title: '地域緑化事業',
          description:
            '住民の皆さまが参加できる地域緑化事業を行っています。地域交流を促進するとともに、地域の景観美化を目的としています。',
        },
        {
          title: '子育て支援プログラム',
          description:
            '子育て世代の皆さまを応援する包括的なサポートプログラムです。育児相談から保育サービスまで幅広い支援を提供しています。',
        },
        {
          title: 'デジタル化推進事業',
          description:
            '市民サービスのデジタル化を推進し、より便利で効率的な行政サービスの提供を目指しています。オンライン申請やAI相談など最新技術を活用しています。',
        },
      ].map(({ title, description }) => (
        <li key={title} className='min-w-0'>
          <div className='relative z-0 grid max-w-5xl border border-solid-gray-420 bg-white text-solid-gray-800 text-std-16N-170 [grid-template-areas:"image_main"] grid-cols-[minmax(auto,min(50%,22rem))_1fr] [overflow-wrap:anywhere]'>
            <div className='relative grid min-w-0 gap-y-4 px-6 py-4 [grid-area:main]'>
              <div className='flex min-w-0 justify-between gap-x-4'>
                <h2 className='min-w-0 pt-1 text-solid-gray-900 text-std-20B-150'>{title}</h2>
                <div className='-mr-6 shrink-0'>
                  <button
                    className='flex h-11 w-11 items-center justify-center rounded-6 border border-transparent bg-white p-0 text-solid-gray-800 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 hover:border-black hover:bg-solid-gray-50'
                    type='button'
                  >
                    <svg
                      aria-label='メニュー'
                      fill='currentcolor'
                      height='24'
                      role='img'
                      viewBox='0 0 24 24'
                      width='24'
                    >
                      <circle cx='12' cy='4.5' r='1.5' />
                      <circle cx='12' cy='12' r='1.5' />
                      <circle cx='12' cy='19.5' r='1.5' />
                    </svg>
                  </button>
                </div>
              </div>
              <p className='my-0 min-w-0'>{description}</p>
              <div className='my-2 border-t border-solid-gray-536' />
              <div className='flex justify-end gap-x-4'>
                <a
                  className='flex border-4 border-double border-transparent bg-light-blue-900 px-2 py-[calc(6/16*1rem)] text-white text-oln-16N-100 no-underline focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 hover:bg-light-blue-1000 hover:underline hover:decoration-[calc(1/16*1rem)] hover:underline-offset-[calc(3/16*1rem)]'
                  href='#'
                >
                  詳しくみる
                </a>
              </div>
            </div>
            <div className='relative z-0 min-w-0 border-r border-solid-gray-420 [grid-area:image]'>
              <img
                alt='満開の桜の枝が青い水面を背景に咲き誇る春の風景写真'
                className='absolute inset-0 h-full w-full object-cover'
                height='235'
                src={card2Image}
                width='352'
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  ),
};

export const Example3: Story = {
  render: (_args) => (
    <ul className='grid gap-x-6 gap-y-8 grid-cols-[repeat(auto-fill,minmax(auto,354px))]'>
      {[
        {
          title: '郵送する際のポイント',
          label: 'お役立ち情報',
          description: '重要な書類を郵送する際に注意すべきポイントをご紹介します',
        },
        {
          title: 'オンライン申請の手順',
          label: '手続きガイド',
          description:
            'マイナンバーカードを使った各種オンライン申請の基本的な手順を分かりやすく解説します',
        },
        {
          title: 'よくある質問と回答',
          label: 'FAQ',
          description: 'お客様からよくお寄せいただくご質問とその回答をまとめました',
        },
      ].map(({ title, label, description }) => (
        <li key={title} className='grid row-span-2 grid-rows-subgrid min-w-0'>
          <div className='relative z-0 grid row-span-2 grid-rows-subgrid min-w-0 gap-y-0 rounded-16 border border-solid-gray-420 text-solid-gray-800 text-std-16N-170 [overflow-wrap:anywhere]'>
            <div className='grid content-start min-w-0 gap-y-4 px-6 pb-0 pt-4'>
              <div className='flex min-w-0 items-start gap-x-4'>
                <div className='flex min-w-0 flex-col gap-y-2 text-std-16N-170'>
                  <h2 className='min-w-0 text-solid-gray-900 text-std-20B-150'>
                    <Link href='#'>{title}</Link>
                  </h2>
                  <span className='-order-1'>{label}</span>
                </div>
                <img
                  alt='著者のアイコン'
                  className='-order-1 shrink-0'
                  height='64'
                  src={card31Image}
                  width='64'
                />
              </div>
              <div className='flex min-w-0 flex-col gap-y-4'>
                <p className='my-0'>{description}</p>
              </div>
            </div>
            <div className='grid min-w-0 gap-4 px-6 py-4'>
              <div className='flex min-w-0 flex-col gap-y-4'>
                <p className='my-0'>
                  <img
                    alt='ポストに書類を投函する人物のイラスト'
                    className='block h-auto max-w-full'
                    height='235'
                    src={card32Image}
                    width='304'
                  />
                </p>
              </div>
              <ul className='flex flex-wrap items-center justify-end gap-4'>
                <li>
                  <Button size='sm' variant='outline'>
                    <svg
                      aria-hidden='true'
                      className='mr-1'
                      height='20'
                      viewBox='0 0 24 24'
                      width='20'
                    >
                      <path
                        d='m12 21-1.4-1.3a113 113 0 0 1-6.8-6.9 9 9 0 0 1-1.4-2.4Q2 9.3 2 8.2q0-2.4 1.6-4Q5 2.7 7.5 2.7a6 6 0 0 1 4.5 2 6 6 0 0 1 4.5-2q2.4 0 4 1.5 1.5 1.5 1.5 4 0 1.1-.4 2.2-.3 1-1.4 2.4t-2.6 3l-4.2 3.9zm0-2.7 6.4-6.4q.9-1 1.3-2l.3-1.7a3.4 3.4 0 0 0-3.5-3.5A4 4 0 0 0 12.9 7h-1.8q-.5-1-1.4-1.7-1-.6-2.2-.6A3.4 3.4 0 0 0 4 8.2l.3 1.7q.4 1 1.3 2 .9 1.2 2.5 2.7z'
                        fill='currentcolor'
                      />
                    </svg>
                    お気に入り
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>
  ),
};

export const Example4: Story = {
  render: (_args) => (
    <ul className='flex flex-wrap items-start gap-6'>
      {[
        {
          title: 'アジア地域における交通問題',
          alt: '中国の都市部の通りを多くの人々が自転車やバイクで行き交う様子',
        },
        {
          title: '持続可能な都市開発の最新動向',
          alt: '中国の都市部の通りを多くの人々が自転車やバイクで行き交う様子',
        },
        {
          title: 'デジタル変革時代の教育改革',
          alt: '中国の都市部の通りを多くの人々が自転車やバイクで行き交う様子',
        },
      ].map(({ title, alt }) => (
        <li key={title} className='min-w-0'>
          <div className='relative z-0 grid max-w-full w-[465px] gap-y-4 border border-solid-gray-420 px-6 py-4 text-solid-gray-800 text-std-16N-170 grid-cols-[1fr_auto] [overflow-wrap:anywhere]'>
            <h2 className='min-w-0 pt-1 text-solid-gray-900 text-std-20B-150'>{title}</h2>
            <div className='shrink-0'>
              <button
                className='flex h-11 w-11 items-center justify-center rounded-6 border border-transparent bg-white p-0 text-solid-gray-800 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 hover:border-black hover:bg-solid-gray-50'
                type='button'
              >
                <svg
                  aria-label='メニュー'
                  fill='currentcolor'
                  height='24'
                  role='img'
                  viewBox='0 0 24 24'
                  width='24'
                >
                  <circle cx='12' cy='4.5' r='1.5' />
                  <circle cx='12' cy='12' r='1.5' />
                  <circle cx='12' cy='19.5' r='1.5' />
                </svg>
              </button>
            </div>
            <div className='col-span-full min-w-0'>
              <img alt={alt} className='block' height='235' src={card4Image} width='415' />
            </div>
            <ul className='col-span-full flex min-w-0 flex-wrap items-center justify-end gap-4'>
              <li>
                <Button
                  asChild
                  className='rounded-none focus-visible:rounded'
                  size='sm'
                  variant='outline'
                >
                  <a href='#'>関連情報</a>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  className='rounded-none focus-visible:rounded'
                  size='sm'
                  variant='solid-fill'
                >
                  <a href='#'>詳しくみる</a>
                </Button>
              </li>
            </ul>
          </div>
        </li>
      ))}
    </ul>
  ),
};

export const Example5: Story = {
  render: (_args) => (
    <ul className='flex flex-wrap gap-6'>
      {[
        {
          month: '12月',
          date: '27',
          label: 'トラベル情報',
          title: '鳥の野鳥観察ツアー',
          description: '大自然の中で野鳥を観察できます。ガイド付きで安心してご参加いただけます。',
        },
        {
          month: '1月',
          date: '15',
          label: '宿泊情報',
          title: '温泉リゾート滞在プラン',
          description:
            '美しい山間の温泉で心身ともにリフレッシュ。地元の食材を使った料理もお楽しみいただけます。',
        },
        {
          month: '2月',
          date: '3',
          label: '文化体験',
          title: '古都散策ウォーキング',
          description:
            '歴史ある街並みをゆっくりと歩きながら、伝統文化と建築美を堪能できるコースです。',
        },
      ].map(({ month, date, label, title, description }) => (
        <li key={title} className='flex min-w-0'>
          <div className='relative z-0 flex max-w-full w-[400px] flex-col rounded-16 border border-solid-gray-420 bg-white text-solid-gray-800 text-std-16N-170 [overflow-wrap:anywhere]'>
            <a
              className='block rounded-t-[calc(15/16*1rem)] pb-4 text-inherit no-underline focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300'
              href='#'
            >
              <h2 className='group relative'>
                <img
                  alt=''
                  className='block h-auto w-full rounded-t-[calc(15/16*1rem)]'
                  height='235'
                  src={card5Image}
                  width='398'
                />
                <span className='absolute left-4 top-4 flex w-[calc(58/16*1rem)] flex-col items-center gap-y-1 rounded-8 bg-white p-2'>
                  <span className='text-cyan-900 text-oln-14B-100'>{month}</span>
                  <span className='text-std-24B-150 leading-100'>
                    {date}
                    <span className='sr-only'>日</span>
                  </span>
                </span>
                <span className='mx-6 mt-4 block'>{label}</span>
                <b className='mx-6 my-0 block text-solid-gray-900 text-std-20B-150 underline decoration-[calc(1/16*1rem)] underline-offset-[calc(3/16*1rem)] group-hover:decoration-[calc(3/16*1rem)]'>
                  {title}
                </b>
              </h2>
            </a>
            <div className='grid flex-grow gap-8 px-6 pb-4 pt-0 grid-rows-[1fr_auto]'>
              <div className='min-w-0'>{description}</div>
              <ul className='flex flex-wrap items-center justify-end gap-4'>
                <li>
                  <button
                    className='relative min-h-9 min-w-20 rounded-6 border border-current px-3 py-0.5 text-cyan-900 text-oln-16B-100 underline-offset-[calc(3/16*1rem)] after:absolute after:inset-x-0 after:-inset-y-full after:m-auto after:h-[44px] hover:bg-cyan-50 hover:text-cyan-1000 hover:underline active:bg-cyan-100 active:text-cyan-1200 active:underline focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300'
                    type='button'
                  >
                    共有する
                  </button>
                </li>
                <li>
                  <button
                    className='relative min-h-9 min-w-20 rounded-6 border-4 border-double border-transparent bg-cyan-900 px-3 py-0.5 text-white text-oln-16B-100 underline-offset-[calc(3/16*1rem)] after:absolute after:inset-x-0 after:-inset-y-full after:m-auto after:h-[44px] hover:bg-cyan-1000 hover:underline active:bg-cyan-1200 active:underline focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300'
                    type='button'
                  >
                    あとで読む
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>
  ),
};

export const Example6: Story = {
  render: (_args) => (
    <ul className='flex flex-wrap gap-6'>
      {[
        {
          id: 'card-6-checkbox-1',
          title: '新卒採用向けセミナー',
          description: '人事から業務内容やキャリアパスについてご説明します',
        },
        {
          id: 'card-6-checkbox-2',
          title: '中途採用者向け研修',
          description: '経験者向けのスキルアップ研修とチーム連携について学習します',
        },
        {
          id: 'card-6-checkbox-3',
          title: 'マネジメント講座',
          description: 'リーダーシップとプロジェクト管理の基礎を学ぶ実践的な講座です',
        },
      ].map(({ id, title, description }) => (
        <li key={id} className='flex min-w-0'>
          <div className='relative z-0 grid max-w-full w-[354px] rounded-16 border border-solid-gray-420 text-solid-gray-800 text-std-16N-170 [grid-template-areas:_"image"_"main"] grid-rows-[auto_1fr] [overflow-wrap:anywhere] has-[:checked]:bg-blue-50'>
            <div className='px-6 py-4 [grid-area:main]'>
              <h2 className='text-solid-gray-900 text-std-20B-150'>
                <label htmlFor={id}>
                  {title}
                  <span aria-hidden='true' className='absolute inset-0 z-10' />
                </label>
              </h2>
              <p className='my-0 mt-4'>{description}</p>
            </div>
            <div className='relative min-w-0 border-b border-solid-gray-420 [grid-area:image]'>
              <span className='absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-6 border border-solid-gray-420 bg-white'>
                <Checkbox id={id} size='sm' />
              </span>
              <img
                alt=''
                className='block h-auto w-full rounded-t-[calc(15/16*1rem)]'
                height='235'
                src={card6Image}
                width='352'
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  ),
};
