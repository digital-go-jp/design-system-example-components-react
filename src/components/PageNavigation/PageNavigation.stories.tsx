import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  PageNavigation,
  PageNavigationArrowButton,
  type PageNavigationArrowButtonSize,
  PageNavigationButton,
  PageNavigationCounter,
} from './PageNavigation';

const meta = {
  id: 'Component/DADS v2/PageNavigation',
  title: 'Component/ページナビゲーション',
  component: PageNavigation,
} satisfies Meta<typeof PageNavigation>;

export default meta;

const formatCounter = (currentPage: number, totalPages: number) =>
  `${currentPage.toLocaleString('ja-JP')} / ${totalPages.toLocaleString('ja-JP')}`;

interface ButtonVariantArgs {
  currentPage: number;
  totalPages: number;
}

const pageArgTypes = {
  currentPage: {
    control: { type: 'number' as const, min: 1 },
  },
  totalPages: {
    control: { type: 'number' as const, min: 1 },
  },
};

const pageArgs = {
  currentPage: 5,
  totalPages: 9,
};

const PrevIcon = () => (
  <svg aria-hidden='true' className='shrink-0' height='24' viewBox='0 0 24 24' width='24'>
    <path d='m7.9 12 8-8-1.4-1.4L5.1 12l9.4 9.4 1.4-1.4z' fill='currentcolor' />
  </svg>
);

const NextIcon = () => (
  <svg aria-hidden='true' className='shrink-0' height='24' viewBox='0 0 24 24' width='24'>
    <path d='M9 2.6 7.6 4l8 8-8 8L9 21.4l9.4-9.4z' fill='currentcolor' />
  </svg>
);

export const Text: StoryObj<ButtonVariantArgs> = {
  render: (args) => {
    if (args.totalPages <= 1) return <>{null}</>;

    const isFirst = args.currentPage <= 1;
    const isLast = args.currentPage >= args.totalPages;
    const counter = formatCounter(args.currentPage, args.totalPages);

    return (
      <PageNavigation aria-label='ページ'>
        {!isFirst && (
          <PageNavigationButton control='prev' size='md' type='button' variant='text'>
            <PrevIcon />
            前のページ
          </PageNavigationButton>
        )}
        <PageNavigationCounter>{counter}</PageNavigationCounter>
        {!isLast && (
          <PageNavigationButton control='next' size='md' type='button' variant='text'>
            次のページ
            <NextIcon />
          </PageNavigationButton>
        )}
      </PageNavigation>
    );
  },
  argTypes: pageArgTypes,
  args: pageArgs,
};

export const TextLink: StoryObj<ButtonVariantArgs> = {
  render: (args) => {
    if (args.totalPages <= 1) return <>{null}</>;

    const isFirst = args.currentPage <= 1;
    const isLast = args.currentPage >= args.totalPages;
    const counter = formatCounter(args.currentPage, args.totalPages);

    return (
      <PageNavigation aria-label='ページ'>
        {!isFirst && (
          <PageNavigationButton asChild control='prev' size='md' variant='text'>
            <a href='#'>
              <PrevIcon />
              前のページ
            </a>
          </PageNavigationButton>
        )}
        <PageNavigationCounter>{counter}</PageNavigationCounter>
        {!isLast && (
          <PageNavigationButton asChild control='next' size='md' variant='text'>
            <a href='#'>
              次のページ
              <NextIcon />
            </a>
          </PageNavigationButton>
        )}
      </PageNavigation>
    );
  },
  argTypes: pageArgTypes,
  args: pageArgs,
};

export const Outlined: StoryObj<ButtonVariantArgs> = {
  render: (args) => {
    if (args.totalPages <= 1) return <>{null}</>;

    const isFirst = args.currentPage <= 1;
    const isLast = args.currentPage >= args.totalPages;
    const counter = formatCounter(args.currentPage, args.totalPages);

    return (
      <PageNavigation aria-label='ページ'>
        {!isFirst && (
          <PageNavigationButton control='prev' size='lg' type='button' variant='outline'>
            <PrevIcon />
            前のページ
          </PageNavigationButton>
        )}
        <PageNavigationCounter>{counter}</PageNavigationCounter>
        {!isLast && (
          <PageNavigationButton control='next' size='lg' type='button' variant='outline'>
            次のページ
            <NextIcon />
          </PageNavigationButton>
        )}
      </PageNavigation>
    );
  },
  argTypes: pageArgTypes,
  args: pageArgs,
};

export const OutlinedLink: StoryObj<ButtonVariantArgs> = {
  render: (args) => {
    if (args.totalPages <= 1) return <>{null}</>;

    const isFirst = args.currentPage <= 1;
    const isLast = args.currentPage >= args.totalPages;
    const counter = formatCounter(args.currentPage, args.totalPages);

    return (
      <PageNavigation aria-label='ページ'>
        {!isFirst && (
          <PageNavigationButton asChild control='prev' size='lg' variant='outline'>
            <a href='#'>
              <PrevIcon />
              前のページ
            </a>
          </PageNavigationButton>
        )}
        <PageNavigationCounter>{counter}</PageNavigationCounter>
        {!isLast && (
          <PageNavigationButton asChild control='next' size='lg' variant='outline'>
            <a href='#'>
              次のページ
              <NextIcon />
            </a>
          </PageNavigationButton>
        )}
      </PageNavigation>
    );
  },
  argTypes: pageArgTypes,
  args: pageArgs,
};

interface ArrowVariantArgs extends ButtonVariantArgs {
  size: PageNavigationArrowButtonSize;
}

const arrowArgTypes = {
  ...pageArgTypes,
  size: {
    control: 'radio' as const,
    options: ['lg', 'md', 'sm', 'xs'] as const,
  },
};

const arrowArgs = {
  ...pageArgs,
  size: 'lg' as const,
};

export const Arrow: StoryObj<ArrowVariantArgs> = {
  render: (args) => {
    if (args.totalPages <= 1) return <>{null}</>;

    const isFirst = args.currentPage <= 1;
    const isLast = args.currentPage >= args.totalPages;
    const counter = formatCounter(args.currentPage, args.totalPages);

    return (
      <PageNavigation aria-label='ページ'>
        {!isFirst && (
          <PageNavigationArrowButton label='前のページ' size={args.size}>
            <PrevIcon />
          </PageNavigationArrowButton>
        )}
        <PageNavigationCounter>{counter}</PageNavigationCounter>
        {!isLast && (
          <PageNavigationArrowButton label='次のページ' size={args.size}>
            <NextIcon />
          </PageNavigationArrowButton>
        )}
      </PageNavigation>
    );
  },
  argTypes: arrowArgTypes,
  args: arrowArgs,
};

export const ArrowLink: StoryObj<ArrowVariantArgs> = {
  render: (args) => {
    if (args.totalPages <= 1) return <>{null}</>;

    const isFirst = args.currentPage <= 1;
    const isLast = args.currentPage >= args.totalPages;
    const counter = formatCounter(args.currentPage, args.totalPages);

    return (
      <PageNavigation aria-label='ページ'>
        {!isFirst && (
          <PageNavigationArrowButton asChild size={args.size}>
            <a href='#'>
              <PrevIcon />
              <span className='sr-only'>前のページ</span>
            </a>
          </PageNavigationArrowButton>
        )}
        <PageNavigationCounter>{counter}</PageNavigationCounter>
        {!isLast && (
          <PageNavigationArrowButton asChild size={args.size}>
            <a href='#'>
              <NextIcon />
              <span className='sr-only'>次のページ</span>
            </a>
          </PageNavigationArrowButton>
        )}
      </PageNavigation>
    );
  },
  argTypes: arrowArgTypes,
  args: arrowArgs,
};
