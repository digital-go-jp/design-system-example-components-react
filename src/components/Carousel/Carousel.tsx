import type { ComponentProps, KeyboardEvent, Ref } from 'react';
import { Disclosure, DisclosureSummary } from '../Disclosure';

// Common Types
// ==============================

type CarouselImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type CarouselImageSource = {
  srcSet: string;
  width?: number;
  height?: number;
  media: string;
};

export type CarouselSlide = {
  id: string;
  label: string;
  href: string;
  target?: string;
  image: CarouselImage;
  imageSources?: CarouselImageSource[];
};

// Carousel Sub Components
// ==============================

type CarouselStepNavProps = {
  slides: CarouselSlide[];
  selectedIndex: number;
  unit: string;
  onStepSelect: (index: number) => void;
};

const CarouselStepNav = (props: CarouselStepNavProps) => {
  const { slides, selectedIndex, unit, onStepSelect } = props;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const isNext = event.key === 'ArrowRight' || event.key === 'ArrowDown';
    const isPrev = event.key === 'ArrowLeft' || event.key === 'ArrowUp';

    if (!isNext && !isPrev) return;

    event.preventDefault();

    const direction = isNext ? 1 : -1;
    const nextIndex = (index + direction + slides.length) % slides.length;

    onStepSelect(nextIndex);

    const list = event.currentTarget.closest('[role="tablist"]');
    const tabs = list?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    const target = tabs?.[nextIndex];
    target?.focus();
  };

  return (
    <ul
      className='relative flex justify-end gap-4'
      // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: Correct tablist usage
      role='tablist'
      aria-label={`${unit}選択`}
    >
      {slides.map((slide, index) => {
        const isSelected = index === selectedIndex;
        const tabAttributes = {
          role: 'tab' as const,
          'aria-selected': isSelected,
          tabIndex: isSelected ? 0 : -1,
        };

        return (
          <li
            key={slide.id}
            className={`
              relative shrink-0
              before:absolute before:left-full before:top-1/2 before:w-4 before:border-b before:border-solid-gray-800 last:before:hidden
            `}
            role='presentation'
          >
            <button
              {...tabAttributes}
              type='button'
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`
                relative flex size-8 rounded-full cursor-default justify-center items-center border border-solid-gray-800 bg-white pb-0.5 text-solid-gray-800 font-inherit text-oln-16B-100
                after:absolute after:-inset-[calc(7/16*1rem)]
                aria-[selected=false]:underline aria-[selected=false]:decoration-1 aria-[selected=false]:underline-offset-[calc(3/16*1rem)]
                aria-[selected=false]:hover:decoration-[calc(3/16*1rem)] aria-[selected=false]:hover:cursor-pointer
                aria-[selected=true]:bg-solid-gray-800 aria-[selected=true]:text-white aria-[selected=true]:outline aria-[selected=true]:outline-1 aria-[selected=true]:outline-offset-[calc(2/16*1rem)] aria-[selected=true]:outline-solid-gray-800 aria-[selected=true]:ring-[calc(2/16*1rem)] aria-[selected=true]:ring-white
                focus-visible:outline focus-visible:!outline-4 focus-visible:!outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:!ring-yellow-300
              `}
              onClick={() => onStepSelect(index)}
            >
              <span className='sr-only'>{unit}</span>
              {index + 1}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

type CarouselPageNavProps = {
  currentIndex: number;
  total: number;
  unit: string;
  onPrev: () => void;
  onNext: () => void;
};

const CarouselPageNav = (props: CarouselPageNavProps) => {
  const { currentIndex, total, unit, onPrev, onNext } = props;
  return (
    <p className='relative m-0 flex items-center justify-end gap-3 p-0'>
      <button
        type='button'
        onClick={onPrev}
        className='
          relative flex h-6 w-6 items-center justify-center rounded-full border border-blue-1000 bg-white p-0 text-blue-1000
          after:absolute after:-inset-full after:m-auto after:h-11 after:w-11
          focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:shadow-[0_0_0_calc(2/16*1rem)_#fce16b]
        '
      >
        <svg width='16' height='16' viewBox='0 0 16 16' aria-hidden='true'>
          <path
            d='m5.27 8 5.33-5.33-.93-.94L3.4 8l6.27 6.27.93-.94L5.27 8Z'
            fill='currentColor'
          ></path>
        </svg>
        <span className='sr-only'>前の{unit}</span>
      </button>
      <span className='[text-box-edge:cap_alphabetic] [text-box-trim:trim-both]'>
        {currentIndex + 1} / {total}
      </span>
      <button
        type='button'
        onClick={onNext}
        className={`
          relative flex h-6 w-6 items-center justify-center rounded-full border border-blue-1000 bg-white p-0 text-blue-1000
          after:absolute after:-inset-full after:m-auto after:h-11 after:w-11
          focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        `}
      >
        <svg width='16' height='16' viewBox='0 0 16 16' aria-hidden='true'>
          <path
            d='m6 1.73-.93.94L10.4 8l-5.33 5.33.93.94L12.27 8 6 1.73Z'
            fill='currentColor'
          ></path>
        </svg>
        <span className='sr-only'>次の{unit}</span>
      </button>
    </p>
  );
};

type CarouselBackgroundLayerProps = {
  className?: string;
  image: CarouselImage;
  imageSources?: CarouselImageSource[];
};

const CarouselBackgroundLayer = (props: CarouselBackgroundLayerProps) => {
  const { className, image, imageSources } = props;
  return (
    <div
      aria-hidden={true}
      className={`absolute -inset-1/2 blur-[25px] transform-gpu pointer-events-none ${className ?? ''}`}
    >
      <picture>
        {imageSources?.map((source) => (
          <source
            key={source.media}
            srcSet={source.srcSet}
            media={source.media}
            width={source.width}
            height={source.height}
          />
        ))}
        <img
          className='h-full w-full object-cover'
          src={image.src}
          alt=''
          width={image.width}
          height={image.height}
        />
      </picture>
      <div className='absolute inset-0 bg-white mix-blend-soft-light' />
    </div>
  );
};

type CarouselExpandListProps = {
  className?: string;
  slides: CarouselSlide[];
  otherSlides: CarouselSlide[];
  unit: string;
};

const CarouselExpandList = (props: CarouselExpandListProps) => {
  const { className, slides, otherSlides, unit } = props;
  return (
    <Disclosure className={`${className ?? ''}`}>
      <DisclosureSummary className='cursor-pointer rounded-8 border border-solid-gray-600 !bg-white px-3 py-2'>
        すべての{unit}
      </DisclosureSummary>
      <div className='mt-3 pl-0'>
        <ul className='grid list-none gap-y-6 p-0'>
          {otherSlides.map((slide) => {
            const slideIndex = slides.findIndex((item) => item.id === slide.id);

            return (
              <li
                className={`
                  relative grid [grid-template-areas:'main'] [grid-template-rows:auto] grid-cols-[auto]
                  @[64rem]:-mx-12 @[64rem]:[grid-template-areas:'number_main_next_.'] @[64rem]:[grid-template-rows:auto] @[64rem]:grid-cols-[calc(48/16*1rem)_3fr_1fr_calc(48/16*1rem)]
                  before:hidden before:[grid-area:number] before:justify-self-center before:border-r before:border-black before:h-full
                  @[64rem]:group-has-[[open]]/carousel:before:block
                `}
                key={slide.id}
              >
                <p
                  className={`
                    hidden [grid-area:number] items-center justify-center justify-self-center size-8 pb-0.5 border border-solid-gray-800 bg-white rounded-full text-solid-gray-800 text-oln-16B-100
                    @[64rem]:group-has-[[open]]/carousel:flex
                    aria-[current=true]:bg-solid-gray-800 aria-[current=true]:text-white aria-[current=true]:ring-[calc(2/16*1rem)] aria-[current=true]:ring-white aria-[current=true]:outline aria-[current=true]:outline-1 aria-[current=true]:outline-offset-2 aria-[current=true]:outline-solid-gray-800
                    aria-[selected=true]:bg-solid-gray-800 aria-[selected=true]:text-white aria-[selected=true]:ring-[calc(2/16*1rem)] aria-[selected=true]:ring-white aria-[selected=true]:outline aria-[selected=true]:outline-1 aria-[selected=true]:outline-offset-2 aria-[selected=true]:outline-solid-gray-800
                  `}
                  aria-hidden='true'
                >
                  {slideIndex + 1}
                </p>
                <div className='[grid-area:main] relative min-w-0'>
                  <a
                    className={`
                      block relative
                      hover:outline hover:outline-4 hover:outline-blue-900 hover:-outline-offset-1
                      focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:rounded-4 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
                      hover:after:absolute hover:after:inset-[1px] hover:after:ring-[calc(2/16*1rem)] hover:after:ring-inset hover:after:ring-white hover:after:pointer-events-none
                    `}
                    href={slide.href}
                    target={slide.target}
                  >
                    <span className='sr-only'>{slide.label}</span>
                    <div className='grid place-content-center h-full rounded-[inherit] outline outline-2 outline-black -outline-offset-2'>
                      <picture>
                        {slide.imageSources?.map((source) => (
                          <source
                            key={source.media}
                            srcSet={source.srcSet}
                            media={source.media}
                            width={source.width}
                            height={source.height}
                          />
                        ))}
                        <img
                          className='block max-w-full size-auto'
                          src={slide.image.src}
                          alt={slide.image.alt}
                          width={slide.image.width}
                          height={slide.image.height}
                        />
                      </picture>
                    </div>
                  </a>
                </div>
                <div className='[grid-area:main] relative -z-10 overflow-clip'>
                  <CarouselBackgroundLayer image={slide.image} imageSources={slide.imageSources} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Disclosure>
  );
};

type CarouselPanelAreaProps = {
  currentSlide: CarouselSlide;
  nextSlide: CarouselSlide;
  currentIndex: number;
  unit: string;
  isNormal: boolean;
  onNext: () => void;
};

const CarouselPanelArea = (props: CarouselPanelAreaProps) => {
  const { currentSlide, nextSlide, currentIndex, unit, isNormal, onNext } = props;

  const mainLabel = currentSlide.label || `${unit}${currentIndex + 1}`;
  const mainPanelAttributes = isNormal ? { role: 'tabpanel', 'aria-label': mainLabel } : {};

  return (
    <div
      className={`
        relative grid [grid-template-areas:'main'] [grid-template-rows:auto] grid-cols-[auto]
        @[64rem]:-mx-12 @[64rem]:[grid-template-areas:'number_main_next_.'] @[64rem]:[grid-template-rows:auto] @[64rem]:grid-cols-[calc(48/16*1rem)_3fr_1fr_calc(48/16*1rem)]
        before:hidden before:[grid-area:number] before:justify-self-center before:border-r before:border-black before:h-full
        @[64rem]:group-has-[[open]]/carousel:before:block
      `}
    >
      <p
        className={`
          hidden [grid-area:number] items-center justify-center justify-self-center size-8 pb-0.5 border border-solid-gray-800 bg-white rounded-full text-solid-gray-800 text-oln-16B-100
          @[64rem]:group-has-[[open]]/carousel:flex
          aria-[current=true]:bg-solid-gray-800 aria-[current=true]:text-white aria-[current=true]:ring-[calc(2/16*1rem)] aria-[current=true]:ring-white aria-[current=true]:outline aria-[current=true]:outline-1 aria-[current=true]:outline-offset-2 aria-[current=true]:outline-solid-gray-800
          aria-[selected=true]:bg-solid-gray-800 aria-[selected=true]:text-white aria-[selected=true]:ring-[calc(2/16*1rem)] aria-[selected=true]:ring-white aria-[selected=true]:outline aria-[selected=true]:outline-1 aria-[selected=true]:outline-offset-2 aria-[selected=true]:outline-solid-gray-800
        `}
        aria-current={true}
        aria-hidden={true}
      >
        {currentIndex + 1}
      </p>

      <div className='[grid-area:main] relative min-w-0' aria-live='polite' aria-atomic={true}>
        <div key={currentSlide.id} {...mainPanelAttributes}>
          <a
            className={`
              block relative
              after:absolute after:pointer-events-none
              hover:outline hover:outline-4 hover:outline-blue-900 hover:-outline-offset-2
              focus-visible:overflow-hidden focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:-outline-offset-[calc(2/16*1rem)] focus-visible:rounded-8 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
              hover:after:inset-[2px] hover:after:ring-[calc(2/16*1rem)] hover:after:ring-inset hover:after:ring-white
              focus-visible:after:inset-[2px] focus-visible:after:ring-[calc(2/16*1rem)] focus-visible:after:ring-inset focus-visible:after:ring-yellow-300 focus-visible:after:rounded-6
            `}
            href={currentSlide.href}
            target={currentSlide.target}
          >
            <span className='sr-only'>{mainLabel}</span>
            <div className='grid place-content-center h-full rounded-[inherit] outline outline-2 outline-black -outline-offset-2'>
              <picture>
                {currentSlide.imageSources?.map((source) => (
                  <source
                    key={source.media}
                    srcSet={source.srcSet}
                    media={source.media}
                    width={source?.width}
                    height={source?.height}
                  />
                ))}
                <img
                  className='block max-w-full size-auto'
                  src={currentSlide.image.src}
                  alt={currentSlide.image.alt}
                  width={currentSlide.image.width}
                  height={currentSlide.image.height}
                />
              </picture>
            </div>
          </a>
        </div>
      </div>

      <p
        className={`
            hidden [grid-area:next] min-w-0 p-6 border border-solid-gray-420 border-l-0
            group-has-[[open]]/carousel:!hidden @[64rem]:block
          `}
      >
        <button
          type='button'
          onClick={onNext}
          className={`
            relative border border-solid-gray-420 bg-white p-0 text-left underline underline-offset-[calc(3/16*1rem)] decoration-[calc(1/16*1rem)] cursor-pointer touch-manipulation
            hover:outline hover:outline-4 hover:outline-blue-900 hover:-outline-offset-1 hover:decoration-[calc(3/16*1rem)]
            hover:after:absolute hover:after:inset-0 hover:after:ring-[calc(2/16*1rem)] hover:after:ring-inset hover:after:ring-white hover:after:pointer-events-none
            focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:rounded-[calc(4/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
          `}
        >
          <picture>
            {nextSlide.imageSources?.map((source) => (
              <source
                key={source.media}
                srcSet={source.srcSet}
                media={source.media}
                width={source?.width}
                height={source?.height}
              />
            ))}
            <img
              className='block max-w-full size-auto'
              src={nextSlide.image.src}
              alt=''
              width={nextSlide.image.width}
              height={nextSlide.image.height}
            />
          </picture>

          <span className='block border-t border-solid-gray-420 p-4 text-std-16B-170 decoration-inherit'>
            次の{unit}
          </span>
        </button>
      </p>

      <div className='[grid-area:main] relative -z-10 overflow-clip'>
        <CarouselBackgroundLayer
          image={currentSlide.image}
          imageSources={currentSlide.imageSources}
        />
      </div>

      <div
        className={`
          hidden [grid-area:next] relative -z-10 overflow-clip
          group-has-[[open]]/carousel:!hidden @[64rem]:block
        `}
      >
        <CarouselBackgroundLayer image={nextSlide.image} imageSources={nextSlide.imageSources} />
      </div>
    </div>
  );
};

// Carousel Main Component
// ==============================

export type CarouselProps = ComponentProps<'section'> & {
  slides: CarouselSlide[];
  currentIndex: number;
  unit?: string;
  isNormal: boolean;
  innerRef: Ref<HTMLDivElement>;
  onPrev: () => void;
  onNext: () => void;
  onStepSelect: (index: number) => void;
};

export const Carousel = (props: CarouselProps) => {
  const {
    className,
    slides,
    currentIndex,
    unit = 'スライド',
    isNormal,
    innerRef,
    onPrev,
    onNext,
    onStepSelect,
    ...rest
  } = props;

  if (slides.length === 0) {
    return null;
  }

  const total = slides.length;
  const normalizedIndex = ((currentIndex % total) + total) % total;
  const currentSlide = slides[normalizedIndex];
  const nextSlide = slides[(normalizedIndex + 1) % total];
  const otherSlides =
    total > 1 ? [...slides.slice(normalizedIndex + 1), ...slides.slice(0, normalizedIndex)] : [];

  return (
    <section className={`@container group/carousel block ${className ?? ''}`} {...rest}>
      <div
        className={`
          relative z-0 max-w-[calc(1440/16*1rem)] text-solid-gray-800 text-std-16N-170
          @[64rem]:px-12
        `}
        ref={innerRef}
      >
        <CarouselPanelArea
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          currentIndex={normalizedIndex}
          unit={unit}
          isNormal={isNormal}
          onNext={onNext}
        />

        <div className='flex items-center gap-5 py-3 group-has-[[open]]/carousel:pb-14 @[64rem]:gap-8'>
          <div className='shrink-0 group-has-[[open]]/carousel:!hidden @[64rem]:hidden'>
            <CarouselPageNav
              currentIndex={normalizedIndex}
              total={total}
              unit={unit}
              onPrev={onPrev}
              onNext={onNext}
            />
          </div>

          <div className='hidden group-has-[[open]]/carousel:!hidden @[64rem]:flex'>
            <CarouselStepNav
              slides={slides}
              selectedIndex={normalizedIndex}
              unit={unit}
              onStepSelect={onStepSelect}
            />
          </div>

          <CarouselExpandList
            className='-order-1 open:flex-1'
            slides={slides}
            otherSlides={otherSlides}
            unit={unit}
          />
        </div>
      </div>
    </section>
  );
};
