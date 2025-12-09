import type { ComponentProps } from 'react';

type Props = ComponentProps<'button'> & {
  label?: string;
};

export const NotificationBannerClose = (props: Props) => {
  const { className, label, ...rest } = props;

  return (
    <button
      className={`
        -mr-3 inline-flex items-center self-start gap-1 rounded-6 px-3 pb-1.5 pt-1 text-solid-gray-900
        hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
        focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        ${className ?? ''}
      `}
      type='button'
      {...rest}
    >
      <svg
        aria-hidden={true}
        className='mt-0.5 size-6'
        fill='none'
        height='24'
        viewBox='0 0 24 24'
        width='24'
      >
        <g>
          <path
            d='m6.4 18.6-1-1 5.5-5.6-5.6-5.6 1.1-1 5.6 5.5 5.6-5.6 1 1.1L13 12l5.6 5.6-1 1L12 13l-5.6 5.6Z'
            fill='currentColor'
          />
        </g>
      </svg>
      <span className='text-oln-16N-100'>{label ?? '閉じる'}</span>
    </button>
  );
};
