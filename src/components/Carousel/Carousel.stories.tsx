import { Description, Subtitle, Title, Unstyled } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useRef, useState } from 'react';
import { Link } from '../Link';
import { Carousel, type CarouselSlide } from './Carousel';
// @ts-expect-error: Ignore import of image files in Storybook
import image1 from './carousel-sample-images/image-1.webp';
// @ts-expect-error
import image2 from './carousel-sample-images/image-2.webp';
// @ts-expect-error
import image3 from './carousel-sample-images/image-3.webp';
// @ts-expect-error
import image4 from './carousel-sample-images/image-4.webp';
// @ts-expect-error
import carousel1024At2x from './docs/carousel-1024@2x.webp';
// @ts-expect-error
import carousel1024 from './docs/carousel-1024.webp';

const meta = {
  id: 'Component/DADS v2/Carousel',
  title: 'Component/カルーセル',
  component: Carousel,
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
                <Link href='./?path=/story/component-dads-v2-carousel--normal'>NormalのStory</Link>
                を参照してください。
              </p>
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

const slides: CarouselSlide[] = [
  {
    id: 'slide-1',
    label: 'スライド1',
    href: '#link1',
    image: {
      src: image1,
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
      alt: '合同健康診断のお知らせ ご自身とご家族の健康維持のため、定期的な健康診断の受診を。皆様の健やかな生活を応援します。 6月1日より受付開始 川海町および森林町にお住いの方が対象です',
      width: 696,
      height: 392,
    },
  },
];

/**
 * コンテナ幅が1024pxの地点にブレークポイントを持つカルーセルの作例です。各スライドは横幅696pxです。
 *
 * ブレークポイント前後の挙動を確認するには[NormalのStory](?path=/story/component-dads-v2-carousel--normal)を参照してください。
 *
 * `Carousel`コンポーネントの規定のブレークポイントはコンテナ幅を基準とした1024pxです。ブレークポイントを変更するには、コンポーネント内に記述されているすべての`@[64rem]`の指定を同一の任意の値、またはTailwind CSSのテーマ設定で定義されたブレークポイントに置き換えてください。
 */
export const Normal: StoryObj = {
  render: () => {
    const CONTAINER_BREAKPOINT = 64; // rem
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isNormal, setIsNormal] = useState(false);
    const carouselInnerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const element = carouselInnerRef.current;
      if (!element) return;

      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          // Get font size of root element to convert rem to px
          const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
          const widthPx = entry.borderBoxSize?.[0]?.inlineSize ?? entry.contentRect.width;
          setIsNormal(widthPx >= CONTAINER_BREAKPOINT * fontSize);
        }
      });

      observer.observe(element, { box: 'border-box' });
      return () => observer.disconnect();
    }, []);

    const handleNext = () => {
      setCurrentIndex((index) => (index + 1) % slides.length);
    };

    const handlePrev = () => {
      setCurrentIndex((index) => (index + slides.length - 1) % slides.length);
    };

    const handleSelect = (index: number) => {
      setCurrentIndex((index + slides.length) % slides.length);
    };

    return (
      <Carousel
        className='max-w-[calc(1024/16*1rem)]'
        aria-label='スライドショー'
        slides={slides}
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
