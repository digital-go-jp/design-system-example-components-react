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
import { Image, ImageArea, ImageAreaLink, ImageCaption } from './Image';

// @ts-expect-error: Ignore import of image files in Storybook
import sample2x from './sample@2x.png';
// @ts-expect-error: Ignore import of image files in Storybook
import sample from './sample.png';
// @ts-expect-error: Ignore import of image files in Storybook
import sampleMobile2x from './sample-mobile@2x.png';
// @ts-expect-error: Ignore import of image files in Storybook
import sampleMobile from './sample-mobile.png';

const meta = {
  id: 'Component/DADS v2/Image',
  title: 'Component/画像',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <Unstyled>
          <div className='prose'>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Stories includePrimary={false} />

            <h2>仕様</h2>

            <h3>コンポーネント構成</h3>
            <ul>
              <li>
                <code>Image</code> — ルートの <code>{'<figure>'}</code> 要素。
              </li>
              <li>
                <code>ImageArea</code> — <code>{'<div>'}</code> による画像エリア。
              </li>
              <li>
                <code>ImageAreaLink</code> — <code>{'<a>'}</code> による画像エリア（リンク付き）。
              </li>
              <li>
                <code>ImageCaption</code> — <code>{'<figcaption>'}</code> によるキャプション。
              </li>
            </ul>

            <h3>Props</h3>

            <h4 id='image-props'>Image</h4>
            <table aria-labelledby='image-props' className='w-full'>
              <thead>
                <tr>
                  <th scope='col' className='text-nowrap'>
                    Props
                  </th>
                  <th scope='col'>説明</th>
                  <th scope='col' className='text-nowrap'>
                    デフォルト
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='whitespace-nowrap'>
                    <code>fullWidth</code>
                  </td>
                  <td>
                    <div>
                      <code>boolean</code>
                    </div>
                    <code>true</code>{' '}
                    のとき、画像の固有サイズにかかわらずコンテナ幅いっぱいに表示する。
                  </td>
                  <td>
                    <code>false</code>
                  </td>
                </tr>
              </tbody>
            </table>

            <h4 id='image-area-props'>ImageArea</h4>
            <table aria-labelledby='image-area-props' className='w-full'>
              <thead>
                <tr>
                  <th scope='col' className='text-nowrap'>
                    Props
                  </th>
                  <th scope='col'>説明</th>
                  <th scope='col' className='text-nowrap'>
                    デフォルト
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='whitespace-nowrap'>
                    <code>bordered</code>
                  </td>
                  <td>
                    <div>
                      <code>boolean</code>
                    </div>
                    <code>true</code> のとき、画像の周囲にグレーのアウトラインを付与する。
                  </td>
                  <td>
                    <code>false</code>
                  </td>
                </tr>
              </tbody>
            </table>

            <h4 id='image-area-link-props'>ImageAreaLink</h4>
            <p>
              <code>{'<a>'}</code>{' '}
              の全属性を受け取る。常にブルーのアウトライン（1px）が付き、ホバー時に 4px に変化する。
              <code>href</code> の指定が必要。
            </p>

            <h4 id='image-caption-props'>ImageCaption</h4>
            <table aria-labelledby='image-caption-props' className='w-full'>
              <thead>
                <tr>
                  <th scope='col' className='text-nowrap'>
                    Props
                  </th>
                  <th scope='col'>説明</th>
                  <th scope='col' className='text-nowrap'>
                    デフォルト
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='whitespace-nowrap'>
                    <code>captionStyle</code>
                  </td>
                  <td>
                    <div>
                      <code>'dashed' | 'solid'</code>
                    </div>
                    キャプションのボーダースタイル。未指定の場合はボーダーなし。
                  </td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>

            <h2>使い方</h2>

            <h3>基本的な使い方</h3>
            <pre>
              <code>
                {`import { Image, ImageArea, ImageCaption } from './Image';

<Image>
  <ImageArea bordered>
    <img src="sample.png" alt="サンプル画像" width="696" height="392" />
  </ImageArea>
  <ImageCaption captionStyle="dashed">キャプションテキスト</ImageCaption>
</Image>`}
              </code>
            </pre>

            <h3>リンク付き画像にする</h3>
            <p>
              <code>ImageArea</code> の代わりに <code>ImageAreaLink</code> を使用し、
              <code>href</code> を指定します。
            </p>
            <pre>
              <code>
                {`<Image>
  <ImageAreaLink href="/path/to/page">
    <img src="sample.png" alt="サンプル画像" width="696" height="392" />
  </ImageAreaLink>
</Image>`}
              </code>
            </pre>

            <h3>幅100%で表示する</h3>
            <p>
              <code>Image</code> に <code>fullWidth</code> prop を追加します。
            </p>
            <pre>
              <code>
                {`<Image fullWidth>
  <ImageArea bordered>
    <img src="sample.png" alt="サンプル画像" width="696" height="392" />
  </ImageArea>
</Image>`}
              </code>
            </pre>

            <h3>{'<picture>'} 要素を使う</h3>
            <p>
              画面幅に応じて異なる画像を出し分けるには、子要素に {'<picture>'} 要素を使用できます。
            </p>
            <pre>
              <code>
                {`<Image>
  <ImageArea bordered>
    <picture>
      <source srcSet="sample-mobile.png, sample-mobile@2x.png 2x" media="(max-width: 40rem)" />
      <img src="sample.png" srcSet="sample@2x.png 2x" alt="サンプル画像" width="696" height="392" />
    </picture>
  </ImageArea>
</Image>`}
              </code>
            </pre>

            <h3>キャプションを省略する</h3>
            <p>
              キャプションが不要な場合は <code>ImageCaption</code> を省略します。
            </p>

            <h3>アクセシビリティ</h3>
            <ul>
              <li>
                <code>{'<img>'}</code> 要素には適切な <code>alt</code> 属性を必ず設定してください。
                <code>alt</code> に空文字列を設定したり省略したりすることは許容されません。
              </li>
            </ul>
          </div>
        </Unstyled>
      ),
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

type PlaygroundArgs = {
  bordered: boolean;
  fullWidth: boolean;
  showCaption: boolean;
  captionStyle: 'dashed' | 'solid';
  captionText: string;
  alt: string;
};

export const Playground: StoryObj<PlaygroundArgs> = {
  render: (args) => (
    <Image fullWidth={args.fullWidth}>
      <ImageArea bordered={args.bordered}>
        <img src={sample} srcSet={`${sample2x} 2x`} alt={args.alt} width='696' height='392' />
      </ImageArea>
      {args.showCaption && (
        <ImageCaption captionStyle={args.captionStyle}>{args.captionText}</ImageCaption>
      )}
    </Image>
  ),
  argTypes: {
    bordered: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    showCaption: { control: 'boolean' },
    captionStyle: {
      if: { arg: 'showCaption' },
      control: { type: 'radio' },
      options: ['dashed', 'solid'],
    },
    captionText: {
      if: { arg: 'showCaption' },
      control: 'text',
    },
    alt: { control: 'text' },
  },
  args: {
    bordered: true,
    fullWidth: false,
    showCaption: true,
    captionStyle: 'dashed',
    captionText:
      'これはダミーの画像キャプションです。ダミーの画像キャプションは、デザインやレイアウトの作成時に使用される仮の文章です。',
    alt: 'サンプル画像',
  },
};

type WithLinkArgs = {
  fullWidth: boolean;
  showCaption: boolean;
  captionStyle: 'dashed' | 'solid';
  captionText: string;
  alt: string;
};

export const WithLink: StoryObj<WithLinkArgs> = {
  render: (args) => (
    <Image fullWidth={args.fullWidth}>
      <ImageAreaLink href='#'>
        <img src={sample} srcSet={`${sample2x} 2x`} alt={args.alt} width='696' height='392' />
      </ImageAreaLink>
      {args.showCaption && (
        <ImageCaption captionStyle={args.captionStyle}>{args.captionText}</ImageCaption>
      )}
    </Image>
  ),
  argTypes: {
    fullWidth: { control: 'boolean' },
    showCaption: { control: 'boolean' },
    captionStyle: {
      if: { arg: 'showCaption' },
      control: { type: 'radio' },
      options: ['dashed', 'solid'],
    },
    captionText: {
      if: { arg: 'showCaption' },
      control: 'text',
    },
    alt: { control: 'text' },
  },
  args: {
    fullWidth: false,
    showCaption: true,
    captionStyle: 'dashed',
    captionText:
      'これはダミーの画像キャプションです。ダミーの画像キャプションは、デザインやレイアウトの作成時に使用される仮の文章です。',
    alt: 'サンプル画像',
  },
};

export const WithPictureElement: Story = {
  render: (_args) => (
    <Image>
      <ImageArea bordered>
        <picture>
          <source srcSet={`${sampleMobile}, ${sampleMobile2x} 2x`} media='(max-width: 40rem)' />
          <img
            src={sample}
            srcSet={`${sample2x} 2x`}
            alt='山と空のサンプル画像'
            width='696'
            height='392'
          />
        </picture>
      </ImageArea>
      <ImageCaption captionStyle='dashed'>
        これはダミーの画像キャプションです。ダミーの画像キャプションは、デザインやレイアウトの作成時に使用される仮の文章です。
      </ImageCaption>
    </Image>
  ),
  argTypes: {
    fullWidth: { table: { disable: true } },
  },
};
