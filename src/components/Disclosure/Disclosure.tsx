import type { ComponentProps } from 'react';

export type DisclosureProps = ComponentProps<'details'>;

export const Disclosure = (props: DisclosureProps) => {
  const { children, className, ...rest } = props;

  return (
    <details className={`group/disclosure ${className ?? ''}`} {...rest}>
      {children}
    </details>
  );
};

export type DisclosureSummaryProps = ComponentProps<'summary'>;

export const DisclosureSummary = (props: DisclosureSummaryProps) => {
  const { children, className, ...rest } = props;

  return (
    <summary
      className={`
        group/summary flex w-fit cursor-default list-none items-start justify-start gap-2
        hover:underline hover:underline-offset-[calc(3/16*1rem)]
        focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        [&::-webkit-details-marker]:hidden ${className ?? ''}
      `}
      {...rest}
    >
      <svg
        aria-hidden={true}
        className={`
          flex-none text-blue-1000 mt-[calc((1lh-24px)/2)]
          group-open/disclosure:rotate-180
          forced-colors:text-inherit
        `}
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
      >
        <circle className='fill-white forced-colors:fill-[Canvas]' cx='12' cy='12' r='10' />
        <g className='group-hover/summary:hidden'>
          <path
            d='M12 15.525L16.925 10.625H7.07502L12 15.525ZM12 22.85C10.4834 22.85 9.06677 22.566 7.75027 21.998C6.43394 21.4298 5.28886 20.6588 4.31502 19.685C3.34119 18.7112 2.57019 17.5661 2.00202 16.2498C1.43402 14.9333 1.15002 13.5167 1.15002 12C1.15002 10.4833 1.43402 9.06675 2.00202 7.75025C2.57019 6.43392 3.34119 5.28883 4.31502 4.315C5.28886 3.34117 6.43394 2.57017 7.75027 2.002C9.06677 1.434 10.4834 1.15 12 1.15C13.5167 1.15 14.9333 1.434 16.2498 2.002C17.5661 2.57017 18.7112 3.34117 19.685 4.315C20.6589 5.28883 21.4299 6.43392 21.998 7.75025C22.566 9.06675 22.85 10.4833 22.85 12C22.85 13.5167 22.566 14.9333 21.998 16.2498C21.4299 17.5661 20.6589 18.7112 19.685 19.685C18.7112 20.6588 17.5661 21.4298 16.2498 21.998C14.9333 22.566 13.5167 22.85 12 22.85Z'
            fill='currentColor'
          />
        </g>
        <g className='hidden group-hover/summary:inline'>
          <path
            d='M12 15.525L16.925 10.625H7.07502L12 15.525ZM12 22.85C10.4834 22.85 9.06677 22.566 7.75027 21.998C6.43394 21.4298 5.28886 20.6588 4.31502 19.685C3.34119 18.7112 2.57019 17.5661 2.00202 16.2498C1.43402 14.9333 1.15002 13.5167 1.15002 12C1.15002 10.4833 1.43402 9.06675 2.00202 7.75025C2.57019 6.43392 3.34119 5.28883 4.31502 4.315C5.28886 3.34117 6.43394 2.57017 7.75027 2.002C9.06677 1.434 10.4834 1.15 12 1.15C13.5167 1.15 14.9333 1.434 16.2498 2.002C17.5661 2.57017 18.7112 3.34117 19.685 4.315C20.6589 5.28883 21.4299 6.43392 21.998 7.75025C22.566 9.06675 22.85 10.4833 22.85 12C22.85 13.5167 22.566 14.9333 21.998 16.2498C21.4299 17.5661 20.6589 18.7112 19.685 19.685C18.7112 20.6588 17.5661 21.4298 16.2498 21.998C14.9333 22.566 13.5167 22.85 12 22.85ZM12 19.7C14.1667 19.7 15.9917 18.9583 17.475 17.475C18.9584 15.9917 19.7 14.1667 19.7 12C19.7 9.83334 18.9584 8.00833 17.475 6.525C15.9917 5.04167 14.1667 4.3 12 4.3C9.83336 4.3 8.00836 5.04167 6.52502 6.525C5.04169 8.00833 4.30002 9.83334 4.30002 12C4.30002 14.1667 5.04169 15.9917 6.52502 17.475C8.00836 18.9583 9.83336 19.7 12 19.7Z'
            fill='currentColor'
          />
        </g>
      </svg>
      {children}
    </summary>
  );
};

export type DisclosureBackLinkProps = ComponentProps<'a'>;

export const DisclosureBackLink = (props: DisclosureBackLinkProps) => {
  const { className, children, href, ...rest } = props;

  return (
    <a
      className={`
        flex items-start w-fit gap-1.5
        text-blue-1000 underline underline-offset-[calc(3/16*1rem)]
        hover:text-blue-1000 hover:decoration-[calc(3/16*1rem)]
        active:text-orange-800 active:decoration-1
        focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:text-blue-1000 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        ${className ?? ''}
      `}
      href={href}
      {...rest}
    >
      <svg
        aria-hidden={true}
        className='mt-[calc((1lh-24px)/2)] shrink-0'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
      >
        <g>
          <path
            d='M5 7L7 7L7 14.1C7 15.15 7.33333 16.0625 8 16.8375C8.66667 17.6125 9.5 18 10.5 18C11.5 18 12.3333 17.6125 13 16.8375C13.6667 16.0625 14 15.15 14 14.1L14 7.8L11.4 10.4L10 9L15 4L20 9L18.6 10.4L16 7.8V14.1C16 15.7167 15.475 17.1042 14.425 18.2625C13.375 19.4208 12.0667 20 10.5 20C8.93333 20 7.625 19.4208 6.575 18.2625C5.525 17.1042 5 15.7167 5 14.1L5 7Z'
            fill='currentColor'
          />
        </g>
      </svg>
      {children}
    </a>
  );
};
