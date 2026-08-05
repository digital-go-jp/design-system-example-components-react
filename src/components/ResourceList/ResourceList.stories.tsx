import type { Meta, StoryObj } from '@storybook/react-vite';
import { useId } from 'react';
import { Checkbox } from '../Checkbox';
import { Radio } from '../Radio';
import {
  ResourceList,
  ResourceListAction,
  ResourceListActionButton,
  ResourceListBody,
  ResourceListContents,
  ResourceListControl,
  ResourceListLabel,
  ResourceListSub,
  ResourceListSupport,
  ResourceListTitle,
  type ResourceListTitleAs,
  type ResourceListVariant,
} from './ResourceList';

const meta = {
  id: 'Component/DADS v2/ResourceList',
  title: 'Component/リソースリスト',
  component: ResourceList,
} satisfies Meta<typeof ResourceList>;

export default meta;

interface PlaygroundArgs {
  variant: ResourceListVariant;
  link: boolean;
  interactionType: 'inline' | 'whole';
  headingLevel: ResourceListTitleAs;
  hasFrontIcon: boolean;
  hasLabel: boolean;
  hasSupportText: boolean;
  hasSubLabel: boolean;
  hasAction: boolean;
}

const frontIconPath =
  'M4.6 20.5c-.5-.1-1-.6-1.1-1l16-16c.5.1.9.6 1 1l-16 16Zm-1.1-6.4v-2L12 3.4h2.1L3.5 14.1Zm0-7.4V5.3c0-1 .8-1.8 1.8-1.8h1.4L3.5 6.7Zm13.8 13.8 3.2-3.2v1.4c0 1-.8 1.8-1.8 1.8h-1.4Zm-7.4 0L20.5 9.9v2L12 20.6H9.9Z';

const menuIconCircles = (
  <>
    <circle cx='12' cy='4.5' r='1.5' />
    <circle cx='12' cy='12' r='1.5' />
    <circle cx='12' cy='19.5' r='1.5' />
  </>
);

export const Playground: StoryObj<PlaygroundArgs> = {
  name: 'Playground (Plain)',
  render: (args) => {
    const isWholeLink = args.link && args.interactionType === 'whole';

    const contents = (
      <>
        {args.hasFrontIcon && (
          <svg
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='currentcolor'
            aria-hidden={true}
            className='shrink-0'
          >
            <path d={frontIconPath} />
          </svg>
        )}
        <ResourceListContents>
          <ResourceListTitle as={args.headingLevel}>
            {args.link && args.interactionType === 'inline' ? (
              <a href='#'>リストタイトル</a>
            ) : (
              'リストタイトル'
            )}
          </ResourceListTitle>
          {args.hasLabel && (
            <ResourceListLabel>
              <p>ラベル</p>
            </ResourceListLabel>
          )}
          {args.hasSupportText && (
            <ResourceListSupport>
              <p>サポートテキスト</p>
            </ResourceListSupport>
          )}
        </ResourceListContents>
        {args.hasSubLabel && (
          <ResourceListSub>
            <p>サブラベル</p>
          </ResourceListSub>
        )}
      </>
    );

    return (
      <ul className='grid gap-4'>
        <li>
          <ResourceList variant={args.variant}>
            {isWholeLink ? (
              <ResourceListBody asChild>
                <a href='#'>{contents}</a>
              </ResourceListBody>
            ) : (
              <ResourceListBody>{contents}</ResourceListBody>
            )}
            {args.hasAction && (
              <ResourceListAction>
                <ResourceListActionButton>
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='currentcolor'
                    role='img'
                    aria-label='メニュー'
                  >
                    {menuIconCircles}
                  </svg>
                </ResourceListActionButton>
              </ResourceListAction>
            )}
          </ResourceList>
        </li>
      </ul>
    );
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['list', 'frame'] },
    link: { control: 'boolean' },
    interactionType: {
      control: 'inline-radio',
      options: ['inline', 'whole'],
      if: { arg: 'link' },
    },
    headingLevel: {
      control: 'inline-radio',
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
    },
    hasFrontIcon: { control: 'boolean' },
    hasLabel: { control: 'boolean' },
    hasSupportText: { control: 'boolean' },
    hasSubLabel: { control: 'boolean' },
    hasAction: { control: 'boolean' },
  },
  args: {
    variant: 'list',
    link: false,
    interactionType: 'inline',
    headingLevel: 'h2',
    hasFrontIcon: true,
    hasLabel: true,
    hasSupportText: true,
    hasSubLabel: true,
    hasAction: true,
  },
};

interface WithControlArgs {
  variant: ResourceListVariant;
  control: 'checkbox' | 'radio';
  interactionType: 'inline' | 'whole';
  disabled: boolean;
  hasFrontIcon: boolean;
  hasLabel: boolean;
  hasSupportText: boolean;
  hasSubLabel: boolean;
  hasAction: boolean;
}

export const WithControl: StoryObj<WithControlArgs> = {
  name: 'Playground (with Control)',
  render: (args) => {
    const controlId = useId();
    const isWhole = args.interactionType === 'whole';

    const controlEl =
      args.control === 'checkbox' ? (
        <Checkbox id={controlId} size='md' disabled={args.disabled} />
      ) : (
        <Radio id={controlId} size='md' name='resource-list-radio' disabled={args.disabled} />
      );

    return (
      <ul className='grid gap-4'>
        <li>
          <ResourceList variant={args.variant} interaction={isWhole ? 'whole' : undefined}>
            <ResourceListBody>
              <ResourceListControl>{controlEl}</ResourceListControl>
              {args.hasFrontIcon && (
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='currentcolor'
                  aria-hidden={true}
                  className='shrink-0'
                >
                  <path d={frontIconPath} />
                </svg>
              )}
              <ResourceListContents>
                <ResourceListTitle as='p'>
                  <label htmlFor={controlId}>リストタイトル</label>
                </ResourceListTitle>
                {args.hasLabel && (
                  <ResourceListLabel>
                    <p>ラベル</p>
                  </ResourceListLabel>
                )}
                {args.hasSupportText && (
                  <ResourceListSupport>
                    <p>サポートテキスト</p>
                  </ResourceListSupport>
                )}
              </ResourceListContents>
              {args.hasSubLabel && (
                <ResourceListSub>
                  <p>サブラベル</p>
                </ResourceListSub>
              )}
            </ResourceListBody>
            {args.hasAction && (
              <ResourceListAction>
                <ResourceListActionButton disabled={isWhole && args.disabled}>
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='currentcolor'
                    role='img'
                    aria-label='メニュー'
                  >
                    {menuIconCircles}
                  </svg>
                </ResourceListActionButton>
              </ResourceListAction>
            )}
          </ResourceList>
        </li>
      </ul>
    );
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['list', 'frame'] },
    control: { control: 'inline-radio', options: ['checkbox', 'radio'] },
    interactionType: { control: 'inline-radio', options: ['inline', 'whole'] },
    disabled: { control: 'boolean' },
    hasFrontIcon: { control: 'boolean' },
    hasLabel: { control: 'boolean' },
    hasSupportText: { control: 'boolean' },
    hasSubLabel: { control: 'boolean' },
    hasAction: { control: 'boolean' },
  },
  args: {
    variant: 'list',
    control: 'checkbox',
    interactionType: 'inline',
    disabled: false,
    hasFrontIcon: true,
    hasLabel: true,
    hasSupportText: true,
    hasSubLabel: true,
    hasAction: true,
  },
};

const downloadIconPath =
  'm12 15.8-4.3-4.3 1-1 2.6 2.4V4.5h1.4v8.4l2.5-2.5 1 1.1-4.2 4.3Zm-5.7 3.7c-.5 0-1-.2-1.3-.5-.3-.4-.5-.8-.5-1.3V15H6v2.7l.1.2.2.1h11.4l.2-.1.1-.2V15h1.5v2.7c0 .5-.2 1-.5 1.3-.4.3-.8.5-1.3.5H6.3Z';

export const MultipleItems: StoryObj = {
  name: 'Multiple Items',
  render: (_args) => (
    <div className='grid gap-16'>
      {/* frame: 角丸あり */}
      <ul className='grid gap-4'>
        <li>
          <ResourceList variant='frame'>
            <ResourceListBody>
              <ResourceListContents>
                <ResourceListTitle as='h2'>健康診断</ResourceListTitle>
                <ResourceListSupport>
                  <p>2025年度</p>
                </ResourceListSupport>
              </ResourceListContents>
              <ResourceListSub>
                <p>受診日：2025/04/30</p>
              </ResourceListSub>
            </ResourceListBody>
          </ResourceList>
        </li>
        <li>
          <ResourceList variant='frame'>
            <ResourceListBody>
              <ResourceListContents>
                <ResourceListTitle as='h2'>健康診断</ResourceListTitle>
                <ResourceListSupport>
                  <p>2024年度</p>
                </ResourceListSupport>
              </ResourceListContents>
              <ResourceListSub>
                <p>受診日：2024/11/24</p>
              </ResourceListSub>
            </ResourceListBody>
          </ResourceList>
        </li>
        <li>
          <ResourceList variant='frame'>
            <ResourceListBody>
              <ResourceListContents>
                <ResourceListTitle as='h2'>健康診断</ResourceListTitle>
                <ResourceListSupport>
                  <p>2023年度</p>
                </ResourceListSupport>
              </ResourceListContents>
              <ResourceListSub>
                <p>受診日：2023/10/13</p>
              </ResourceListSub>
            </ResourceListBody>
          </ResourceList>
        </li>
      </ul>

      {/* frame: 角丸なし + ダウンロードボタン */}
      <ul className='grid gap-4'>
        <li>
          <ResourceList variant='frame' style={{ borderRadius: 0 }}>
            <ResourceListBody>
              <ResourceListContents>
                <ResourceListTitle as='h2'>給与明細</ResourceListTitle>
                <ResourceListSupport>
                  <p>2025年10月分</p>
                </ResourceListSupport>
              </ResourceListContents>
              <ResourceListSub>
                <p>支給日：2025/11/14</p>
              </ResourceListSub>
            </ResourceListBody>
            <ResourceListAction>
              <ResourceListActionButton>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='currentcolor'
                  role='img'
                  aria-label='ダウンロード'
                >
                  <path d={downloadIconPath} />
                </svg>
              </ResourceListActionButton>
            </ResourceListAction>
          </ResourceList>
        </li>
        <li>
          <ResourceList variant='frame' style={{ borderRadius: 0 }}>
            <ResourceListBody>
              <ResourceListContents>
                <ResourceListTitle as='h2'>給与明細</ResourceListTitle>
                <ResourceListSupport>
                  <p>2025年9月分</p>
                </ResourceListSupport>
              </ResourceListContents>
              <ResourceListSub>
                <p>支給日：2025/10/15</p>
              </ResourceListSub>
            </ResourceListBody>
            <ResourceListAction>
              <ResourceListActionButton>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='currentcolor'
                  role='img'
                  aria-label='ダウンロード'
                >
                  <path d={downloadIconPath} />
                </svg>
              </ResourceListActionButton>
            </ResourceListAction>
          </ResourceList>
        </li>
        <li>
          <ResourceList variant='frame' style={{ borderRadius: 0 }}>
            <ResourceListBody>
              <ResourceListContents>
                <ResourceListTitle as='h2'>給与明細</ResourceListTitle>
                <ResourceListSupport>
                  <p>2025年8月分</p>
                </ResourceListSupport>
              </ResourceListContents>
              <ResourceListSub>
                <p>支給日：2025/9/15</p>
              </ResourceListSub>
            </ResourceListBody>
            <ResourceListAction>
              <ResourceListActionButton>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='currentcolor'
                  role='img'
                  aria-label='ダウンロード'
                >
                  <path d={downloadIconPath} />
                </svg>
              </ResourceListActionButton>
            </ResourceListAction>
          </ResourceList>
        </li>
      </ul>

      {/* list: タイトルリンク + アクションメニュー */}
      <ul>
        <li>
          <ResourceList variant='list'>
            <ResourceListBody>
              <ResourceListContents>
                <ResourceListTitle as='h2'>
                  <a href='#'>デジ田 太郎</a>
                </ResourceListTitle>
                <ResourceListSupport>
                  <p>taro-dejita@example.com</p>
                </ResourceListSupport>
              </ResourceListContents>
              <ResourceListSub>
                <p>招待中</p>
              </ResourceListSub>
            </ResourceListBody>
            <ResourceListAction>
              <ResourceListActionButton>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='currentcolor'
                  role='img'
                  aria-label='メニュー'
                >
                  {menuIconCircles}
                </svg>
              </ResourceListActionButton>
            </ResourceListAction>
          </ResourceList>
        </li>
        <li>
          <ResourceList variant='list'>
            <ResourceListBody>
              <ResourceListContents>
                <ResourceListTitle as='h2'>
                  <a href='#'>デジ山 ひかり</a>
                </ResourceListTitle>
                <ResourceListSupport>
                  <p>hikari-dejiyama@example.com</p>
                </ResourceListSupport>
              </ResourceListContents>
            </ResourceListBody>
            <ResourceListAction>
              <ResourceListActionButton>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='currentcolor'
                  role='img'
                  aria-label='メニュー'
                >
                  {menuIconCircles}
                </svg>
              </ResourceListActionButton>
            </ResourceListAction>
          </ResourceList>
        </li>
        <li>
          <ResourceList variant='list'>
            <ResourceListBody>
              <ResourceListContents>
                <ResourceListTitle as='h2'>
                  <a href='#'>出而足 長一郎</a>
                </ResourceListTitle>
                <ResourceListSupport>
                  <p>choichiro-dejitaru@example.com</p>
                </ResourceListSupport>
              </ResourceListContents>
            </ResourceListBody>
            <ResourceListAction>
              <ResourceListActionButton>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='currentcolor'
                  role='img'
                  aria-label='メニュー'
                >
                  {menuIconCircles}
                </svg>
              </ResourceListActionButton>
            </ResourceListAction>
          </ResourceList>
        </li>
      </ul>

      {/* frame: ラジオ + interaction=whole */}
      <ul className='grid gap-4'>
        <li>
          <ResourceList variant='frame' interaction='whole'>
            <ResourceListBody>
              <ResourceListControl>
                <Radio
                  id='payment-method-1'
                  size='md'
                  name='payment-method'
                  defaultChecked={true}
                />
              </ResourceListControl>
              <ResourceListContents>
                <ResourceListTitle as='p'>
                  <label htmlFor='payment-method-1'>クレジットカード払い</label>
                </ResourceListTitle>
                <ResourceListLabel>
                  <p>おすすめ</p>
                </ResourceListLabel>
                <ResourceListSupport>
                  <p>Visa、Master、JCB対応</p>
                </ResourceListSupport>
              </ResourceListContents>
            </ResourceListBody>
          </ResourceList>
        </li>
        <li>
          <ResourceList variant='frame' interaction='whole'>
            <ResourceListBody>
              <ResourceListControl>
                <Radio id='payment-method-2' size='md' name='payment-method' />
              </ResourceListControl>
              <ResourceListContents>
                <ResourceListTitle as='p'>
                  <label htmlFor='payment-method-2'>銀行振込</label>
                </ResourceListTitle>
                <ResourceListSupport>
                  <p>
                    入金確認後の商品発送となります。
                    <br />
                    振り込み手数料はお客様負担となります。
                  </p>
                </ResourceListSupport>
              </ResourceListContents>
            </ResourceListBody>
          </ResourceList>
        </li>
        <li>
          <ResourceList variant='frame' interaction='whole'>
            <ResourceListBody>
              <ResourceListControl>
                <Radio id='payment-method-3' size='md' name='payment-method' />
              </ResourceListControl>
              <ResourceListContents>
                <ResourceListTitle as='p'>
                  <label htmlFor='payment-method-3'>コンビニ決済</label>
                </ResourceListTitle>
                <ResourceListSupport>
                  <p>
                    入金確認後の商品発送となります。
                    <br />
                    全国のコンビニで利用可能です。
                  </p>
                </ResourceListSupport>
              </ResourceListContents>
            </ResourceListBody>
          </ResourceList>
        </li>
      </ul>
    </div>
  ),
};
