import type { ComponentProps } from 'react';

export type AccordionProps = ComponentProps<'details'>;

export const Accordion = (props: AccordionProps) => {
  const { children, className, ...rest } = props;

  return (
    <details
      className={`
        group/accordion border-b border-solid-gray-420
        [--icon-size:calc(20/16*1rem)] desktop:[--icon-size:calc(32/16*1rem)]
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </details>
  );
};

export type AccordionSummaryProps = ComponentProps<'summary'>;

export const AccordionSummary = (props: AccordionSummaryProps) => {
  const { children, className, ...rest } = props;

  return (
    <summary
      className={`
        group/summary relative block cursor-default py-2 pl-[calc(var(--icon-size)+(12/16*1rem))] pr-2
        marker:[content:'']
        hover:bg-solid-gray-50 focus-visible:rounded-4 focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        desktop:py-3.5 desktop:pl-[calc(var(--icon-size)+(20/16*1rem))] desktop:pr-4
        [&::-webkit-details-marker]:hidden ${className ?? ''}
      `}
      {...rest}
    >
      <span
        className={`
          absolute top-2 left-0.5 inline-flex items-center justify-center size-[var(--icon-size)] mt-[calc((1lh-var(--icon-size))/2)] border border-current bg-white text-blue-1000 rounded-full
          desktop:top-3.5 desktop:left-1.5
          group-hover/summary:outline group-hover/summary:outline-2 group-hover/summary:outline-current
          group-open/accordion:rotate-180
        `}
      >
        <svg
          aria-hidden={true}
          className='pointer-events-none mt-0.5 size-4 desktop:size-auto'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
        >
          <g>
            <path
              d='M16.668 5.5L10.0013 12.1667L3.33464 5.5L2.16797 6.66667L10.0013 14.5L17.8346 6.66667L16.668 5.5Z'
              fill='currentColor'
            />
          </g>
        </svg>
      </span>
      {children}
    </summary>
  );
};

export type AccordionContentProps = ComponentProps<'div'>;

export const AccordionContent = (props: AccordionContentProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={`
        pl-[calc(var(--icon-size)+(12/16*1rem))] pr-2 py-4
        desktop:pl-[calc(var(--icon-size)+(20/16*1rem))] desktop:pr-4 desktop:py-6
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </div>
  );
};

export type AccordionBackLinkProps = ComponentProps<'a'>;

export const AccordionBackLink = (props: AccordionBackLinkProps) => {
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
