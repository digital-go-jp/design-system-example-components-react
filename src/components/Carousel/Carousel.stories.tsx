import { Description, Subtitle, Title, Unstyled } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useRef, useState } from 'react';
import { Link } from '../Link';
import {
  Carousel,
  CarouselSingle,
  CarouselSingleImage,
  CarouselSingleLink,
  type CarouselSlide,
} from './';
// @ts-expect-error: Ignore import of image files in Storybook
import image1_2x from './carousel-sample-images/image-1@2x.webp';
// @ts-expect-error
import image1 from './carousel-sample-images/image-1.webp';
// @ts-expect-error
import image2_2x from './carousel-sample-images/image-2@2x.webp';
// @ts-expect-error
import image2 from './carousel-sample-images/image-2.webp';
// @ts-expect-error
import image3_2x from './carousel-sample-images/image-3@2x.webp';
// @ts-expect-error
import image3 from './carousel-sample-images/image-3.webp';
// @ts-expect-error
import image4_2x from './carousel-sample-images/image-4@2x.webp';
// @ts-expect-error
import image4 from './carousel-sample-images/image-4.webp';
// @ts-expect-error
import image5_2x from './carousel-sample-images/image-5@2x.webp';
// @ts-expect-error
import image5 from './carousel-sample-images/image-5.webp';
// @ts-expect-error
import image6_2x from './carousel-sample-images/image-6@2x.webp';
// @ts-expect-error
import image6 from './carousel-sample-images/image-6.webp';
// @ts-expect-error
import image7_2x from './carousel-sample-images/image-7@2x.webp';
// @ts-expect-error
import image7 from './carousel-sample-images/image-7.webp';
// @ts-expect-error
import image8_2x from './carousel-sample-images/image-8@2x.webp';
// @ts-expect-error
import image8 from './carousel-sample-images/image-8.webp';
// @ts-expect-error
import image9_2x from './carousel-sample-images/image-9@2x.webp';
// @ts-expect-error
import image9 from './carousel-sample-images/image-9.webp';
// @ts-expect-error
import carousel1024At2x from './docs/carousel-1024@2x.webp';
// @ts-expect-error
import carousel1024 from './docs/carousel-1024.webp';

const meta = {
  id: 'Component/DADS v2/Carousel',
  title: 'Component/カルーセル',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Unstyled>
            <div className='prose'>
              <Title />
              <Subtitle />
              <Description />
              <div className='my-6 ring-1 ring-solid-gray-420'>
                <img
                  className='block mx-auto max-w-full h-auto'
                  src={carousel1024}
                  srcSet={`${carousel1024At2x} 2x`}
                  alt='カルーセル作例のスクリーンショット'
                  width='768'
                  height='320'
                />
              </div>
              <p>
                コンテナ幅が1024pxの地点にブレークポイントを持つカルーセルの作例です。各スライドは横幅696pxです。
              </p>
              <p>
                コードスニペットにおける実際の動作は
                <Link href='./?path=/story/component-dads-v2-carousel--container'>
                  Container (Multi Slides)のStory
                </Link>
                を参照してください。
              </p>

              <h2>使い方</h2>
              <p>
                カルーセルコンポーネントは、マルチ（複数スライド）とシングル（1枚のみ）の2つの構成をサポートしています。
                用途に応じて適切なコンポーネントを選択してください。
              </p>

              <h3>マルチ</h3>
              <p>
                複数のスライドをナビゲーション付きで表示する場合は <code>Carousel</code>{' '}
                コンポーネントを使用します。
              </p>
              <p>
                見出しを使用する場合は、<code>Carousel</code>の<code>children</code>
                に見出し要素を渡し、<code>aria-labelledby</code>
                属性でその見出しのIDを参照します。見出しを使用しない場合は、
                <code>Carousel</code>の<code>aria-label</code>属性で直接ラベルを指定します。
              </p>
              <pre>
                <code>
                  {`// 見出しありの場合
<Carousel aria-labelledby='carousel-heading' ...>
  <h2 id='carousel-heading'>開催中のイベント</h2>
</Carousel>

// 見出しなしの場合
<Carousel aria-label='スライドショー' ...>
</Carousel>`}
                </code>
              </pre>
              <h4>コンポーネント構成</h4>
              <ul>
                <li>
                  <code>Carousel</code>: ナビゲーション付きカルーセルのルートコンテナ
                </li>
              </ul>

              <h3>シングル</h3>
              <p>
                単一のスライドのみを表示する場合は <code>CarouselSingle</code>{' '}
                コンポーネントを使用します。
              </p>
              <h4>コンポーネント構成</h4>
              <ul>
                <li>
                  <code>CarouselSingle</code>: シングル用のルートコンテナ
                </li>
                <li>
                  <code>CarouselSingleLink</code>: スライドのリンク要素（<code>href</code>
                  が省略された場合は<code>&lt;span&gt;</code>として描画）
                </li>
                <li>
                  <code>CarouselSingleImage</code>: スライドの画像要素
                </li>
              </ul>
              <pre>
                <code>
                  {`import {
  CarouselSingle,
  CarouselSingleImage,
  CarouselSingleLink,
} from './Carousel';

const MyKeyVisual = () => (
  <CarouselSingle>
    <CarouselSingleLink href='/campaign'>
      <CarouselSingleImage
        src='/hero.webp'
        srcSet='/hero@2x.webp 2x'
        alt='キャンペーン画像の説明'
        width={1024}
        height={392}
      />
    </CarouselSingleLink>
  </CarouselSingle>
);`}
                </code>
              </pre>

              <h3>Props</h3>
              <h4 id='carousel-props'>
                <code>Carousel</code>（マルチ用）
              </h4>
              <table aria-labelledby='carousel-props'>
                <thead>
                  <tr>
                    <th scope='col'>Props</th>
                    <th scope='col'>型</th>
                    <th scope='col'>デフォルト</th>
                    <th scope='col'>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>slides</code>
                    </td>
                    <td>CarouselSlide[]</td>
                    <td>-</td>
                    <td>スライドデータの配列</td>
                  </tr>
                  <tr>
                    <td>
                      <code>currentIndex</code>
                    </td>
                    <td>number</td>
                    <td>-</td>
                    <td>現在表示中のスライドインデックス</td>
                  </tr>
                  <tr>
                    <td>
                      <code>unit</code>
                    </td>
                    <td>string</td>
                    <td>'スライド'</td>
                    <td>スライドの単位ラベル</td>
                  </tr>
                  <tr>
                    <td>
                      <code>isNormal</code>
                    </td>
                    <td>boolean</td>
                    <td>-</td>
                    <td>通常レイアウト（true）またはコンパクトレイアウト（false）の切り替え</td>
                  </tr>
                  <tr>
                    <td>
                      <code>innerRef</code>
                    </td>
                    <td>Ref&lt;HTMLDivElement&gt;</td>
                    <td>-</td>
                    <td>内側のdiv要素のref（ResizeObserver用）</td>
                  </tr>
                  <tr>
                    <td>
                      <code>onPrev</code>
                    </td>
                    <td>() =&gt; void</td>
                    <td>-</td>
                    <td>前へボタンのコールバック</td>
                  </tr>
                  <tr>
                    <td>
                      <code>onNext</code>
                    </td>
                    <td>() =&gt; void</td>
                    <td>-</td>
                    <td>次へボタンのコールバック</td>
                  </tr>
                  <tr>
                    <td>
                      <code>onStepSelect</code>
                    </td>
                    <td>(index: number) =&gt; void</td>
                    <td>-</td>
                    <td>ステップナビゲーションでのスライド選択コールバック</td>
                  </tr>
                </tbody>
              </table>

              <h4 id='carousel-slide-props'>
                <code>CarouselSlide</code>（スライドデータ）
              </h4>
              <table aria-labelledby='carousel-slide-props'>
                <thead>
                  <tr>
                    <th scope='col'>プロパティ</th>
                    <th scope='col'>型</th>
                    <th scope='col'>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>id</code>
                    </td>
                    <td>string</td>
                    <td>スライドの一意な識別子</td>
                  </tr>
                  <tr>
                    <td>
                      <code>label</code>
                    </td>
                    <td>string</td>
                    <td>スライドの表示ラベル</td>
                  </tr>
                  <tr>
                    <td>
                      <code>href</code>
                    </td>
                    <td>string?</td>
                    <td>スライドのリンクURL（省略時はリンクなし）</td>
                  </tr>
                  <tr>
                    <td>
                      <code>target</code>
                    </td>
                    <td>string?</td>
                    <td>リンクのtarget属性</td>
                  </tr>
                  <tr>
                    <td>
                      <code>image</code>
                    </td>
                    <td>CarouselImage</td>
                    <td>画像情報（src, srcSet, alt, width, height）</td>
                  </tr>
                </tbody>
              </table>

              <h4 id='carousel-single-link-props'>
                <code>CarouselSingleLink</code>（シングル用スライドリンク）
              </h4>
              <table aria-labelledby='carousel-single-link-props'>
                <thead>
                  <tr>
                    <th scope='col'>Props</th>
                    <th scope='col'>型</th>
                    <th scope='col'>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>href</code>
                    </td>
                    <td>string?</td>
                    <td>
                      リンクURL（省略時は<code>&lt;span&gt;</code>として描画）
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3>ブレークポイント</h3>
              <p>
                <code>Carousel</code>
                コンポーネントの規定のブレークポイントはコンテナ幅を基準とした1024pxです。ブレークポイントを変更するには、コンポーネント内に記述されているすべての
                <code>@[64rem]</code>の指定を同一の任意の値に、またはTailwind
                CSSのテーマ設定で定義されたブレークポイントに置き換えてください。
              </p>
              <p>
                ※Tailwind CSS v3系を使用している場合は
                <Link
                  href='https://www.npmjs.com/package/@tailwindcss/container-queries'
                  target='_blank'
                >
                  @tailwindcss/container-queriesプラグイン
                </Link>
                をインストールする必要があります。
              </p>
            </div>
          </Unstyled>
        </>
      ),
    },
  },
} satisfies Meta;

export default meta;

const containerSlides: CarouselSlide[] = [
  {
    id: 'slide-1',
    label: 'スライド1',
    href: '#link1',
    image: {
      src: image1,
      srcSet: `${image1_2x} 2x`,
      alt: '学ぼうSDGs 偶数月の第3土曜日 環境保全の「自分事化」で学べるワークショップ開催',
      width: 696,
      height: 392,
    },
  },
  {
    id: 'slide-2',
    label: 'スライド2',
    href: '#link2',
    image: {
      src: image2,
      srcSet: `${image2_2x} 2x`,
      alt: '地産地消キャンペーン 県の名産品や体験イベントを楽しもう 期間：4月から7月までの毎週末開催！',
      width: 696,
      height: 392,
    },
  },
  {
    id: 'slide-3',
    label: 'スライド3',
    href: '#link3',
    image: {
      src: image3,
      srcSet: `${image3_2x} 2x`,
      alt: '令和 国立公園・歴史名所スタンプラリー まわろうよ 今年の週末 全国を 子どもたちの歴史理解促進と、日本各地の名産品・観光資源に親しむことを目的に、本イベントを全国開催しています！',
      width: 696,
      height: 392,
    },
  },
  {
    id: 'slide-4',
    label: 'スライド4',
    href: '#link4',
    image: {
      src: image4,
      srcSet: `${image4_2x} 2x`,
      alt: '合同健康診断のお知らせ ご自身とご家族の健康維持のため、定期的な健康診断の受診を。皆様の健やかな生活を応援します。 6月1日より受付開始 川海町および森林町にお住いの方が対象です',
      width: 696,
      height: 392,
    },
  },
];

const containerSlidesWithoutLinks: CarouselSlide[] = containerSlides.map((slide) => ({
  ...slide,
  href: undefined,
}));

const keyVisualSlides: CarouselSlide[] = [
  {
    id: 'slide-1',
    label: 'スライド1',
    image: {
      src: image5,
      srcSet: `${image5_2x} 2x`,
      alt: '写真：デジタル公園の大木 - 太い幹があり、そこから伸びる多数の枝が絡み合うように広がっている。枝の間からは青空と緑の葉が見える。',
      width: 696,
      height: 392,
    },
  },
  {
    id: 'slide-2',
    label: 'スライド2',
    image: {
      src: image6,
      srcSet: `${image6_2x} 2x`,
      alt: '写真：デジタル海水浴場 - 透明度が高いターコイズブルーの海と砂浜の風景。海は穏やかで、水面には細かな波紋が広がっている。',
      width: 696,
      height: 392,
    },
  },
  {
    id: 'slide-3',
    label: 'スライド3',
    image: {
      src: image7,
      srcSet: `${image7_2x} 2x`,
      alt: '写真：デジタル中央通り沿いの花壇 - 白、黄色、紫、オレンジのパンジーが咲いている。背景には車のテールランプの赤い光が見える。',
      width: 696,
      height: 392,
    },
  },
  {
    id: 'slide-4',
    label: 'スライド4',
    image: {
      src: image8,
      srcSet: `${image8_2x} 2x`,
      alt: '写真：デジタル県の夕焼け雲 - オレンジのグラデーションの空に、複数の濃い灰色の雲が浮かんでいる。下部には山々のシルエットが黒く連なっている。',
      width: 696,
      height: 392,
    },
  },
];

/**
 * コンテナタイプのカルーセルです。見出しあり、リンクありの複数スライド構成（マルチ）
 *
 * コンテナ幅が1024pxの地点にブレークポイントを持ちます。各スライドは横幅696pxです。
 */
export const Container: StoryObj = {
  name: 'Container (Multi Slides)',
  render: () => {
    const CONTAINER_BREAKPOINT = 64;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isNormal, setIsNormal] = useState(false);
    const carouselInnerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const element = carouselInnerRef.current;
      if (!element) return;

      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
          const widthPx = entry.borderBoxSize?.[0]?.inlineSize ?? entry.contentRect.width;
          setIsNormal(widthPx >= CONTAINER_BREAKPOINT * fontSize);
        }
      });

      observer.observe(element, { box: 'border-box' });
      return () => observer.disconnect();
    }, []);

    const handleNext = () => {
      setCurrentIndex((index) => (index + 1) % containerSlides.length);
    };

    const handlePrev = () => {
      setCurrentIndex((index) => (index + containerSlides.length - 1) % containerSlides.length);
    };

    const handleSelect = (index: number) => {
      setCurrentIndex((index + containerSlides.length) % containerSlides.length);
    };

    return (
      <Carousel
        aria-labelledby='carousel-heading'
        slides={containerSlides}
        currentIndex={currentIndex}
        unit='スライド'
        isNormal={isNormal}
        innerRef={carouselInnerRef}
        onPrev={handlePrev}
        onNext={handleNext}
        onStepSelect={handleSelect}
      >
        <h2
          className='mb-4 text-std-20B-150 [@media(min-width:30rem)]:text-std-24B-150 [@media(min-width:64rem)]:text-std-32B-150'
          id='carousel-heading'
        >
          開催中のイベント
        </h2>
      </Carousel>
    );
  },
};

/**
 * コンテナタイプのカルーセルです。見出しあり、リンクなしの複数スライド構成（マルチ）
 */
export const ContainerWithoutLinks: StoryObj = {
  name: 'Container (Multi Slides without Links)',
  render: () => {
    const CONTAINER_BREAKPOINT = 64;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isNormal, setIsNormal] = useState(false);
    const carouselInnerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const element = carouselInnerRef.current;
      if (!element) return;

      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
          const widthPx = entry.borderBoxSize?.[0]?.inlineSize ?? entry.contentRect.width;
          setIsNormal(widthPx >= CONTAINER_BREAKPOINT * fontSize);
        }
      });

      observer.observe(element, { box: 'border-box' });
      return () => observer.disconnect();
    }, []);

    const handleNext = () => {
      setCurrentIndex((index) => (index + 1) % containerSlidesWithoutLinks.length);
    };

    const handlePrev = () => {
      setCurrentIndex(
        (index) =>
          (index + containerSlidesWithoutLinks.length - 1) % containerSlidesWithoutLinks.length,
      );
    };

    const handleSelect = (index: number) => {
      setCurrentIndex(
        (index + containerSlidesWithoutLinks.length) % containerSlidesWithoutLinks.length,
      );
    };

    return (
      <Carousel
        aria-labelledby='carousel-heading-without-links'
        slides={containerSlidesWithoutLinks}
        currentIndex={currentIndex}
        unit='スライド'
        isNormal={isNormal}
        innerRef={carouselInnerRef}
        onPrev={handlePrev}
        onNext={handleNext}
        onStepSelect={handleSelect}
      >
        <h2
          className='mb-4 text-std-20B-150 [@media(min-width:30rem)]:text-std-24B-150 [@media(min-width:64rem)]:text-std-32B-150'
          id='carousel-heading-without-links'
        >
          開催中のイベント
        </h2>
      </Carousel>
    );
  },
};

/**
 * 打ち出しタイプのカルーセルです。見出しなし、リンクなしの複数スライド構成（マルチ）
 */
export const KeyVisual: StoryObj = {
  name: 'Key Visual (Multi Slides without Link)',
  render: () => {
    const CONTAINER_BREAKPOINT = 64;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isNormal, setIsNormal] = useState(false);
    const carouselInnerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const element = carouselInnerRef.current;
      if (!element) return;

      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
          const widthPx = entry.borderBoxSize?.[0]?.inlineSize ?? entry.contentRect.width;
          setIsNormal(widthPx >= CONTAINER_BREAKPOINT * fontSize);
        }
      });

      observer.observe(element, { box: 'border-box' });
      return () => observer.disconnect();
    }, []);

    const handleNext = () => {
      setCurrentIndex((index) => (index + 1) % keyVisualSlides.length);
    };

    const handlePrev = () => {
      setCurrentIndex((index) => (index + keyVisualSlides.length - 1) % keyVisualSlides.length);
    };

    const handleSelect = (index: number) => {
      setCurrentIndex((index + keyVisualSlides.length) % keyVisualSlides.length);
    };

    return (
      <Carousel
        aria-label='スライドショー'
        slides={keyVisualSlides}
        currentIndex={currentIndex}
        unit='スライド'
        isNormal={isNormal}
        innerRef={carouselInnerRef}
        onPrev={handlePrev}
        onNext={handleNext}
        onStepSelect={handleSelect}
      />
    );
  },
};

/**
 * 打ち出しタイプのカルーセルです。見出しなし、リンクなしの単一スライド構成（シングル）
 */
export const KeyVisualSingle: StoryObj = {
  name: 'Key Visual (Single Slide without Link)',
  render: () => {
    return (
      <CarouselSingle className='text-std-16N-170'>
        <CarouselSingleLink>
          <CarouselSingleImage
            src={image9}
            srcSet={`${image9_2x} 2x`}
            alt='写真：デジタル公園の大木 - 太い幹があり、そこから伸びる多数の枝が絡み合うように広がっている。枝の間からは青空と緑の葉が見える。'
            width={1024}
            height={392}
          />
        </CarouselSingleLink>
      </CarouselSingle>
    );
  },
};
