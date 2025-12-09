import type { ComponentProps } from 'react';

type Props = ComponentProps<'button'> & {};

export const NotificationBannerMobileClose = (props: Props) => {
  const { className, ...rest } = props;

  return (
    <button
      className={`
        mt-1 self-start touch-manipulation rounded-4 text-solid-gray-900
        hover:bg-solid-gray-50 hover:outline hover:outline-1
        focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        ${className ?? ''}
      `}
      type='button'
      {...rest}
    >
      <svg className='' width='44' height='44' viewBox='0 0 44 44' role='img' aria-label='閉じる'>
        <path
          d='m13 26-2-2 9-9-9-9 2-2 9 9 9-9 2 2-9 9 9 9-2 2-9-9-9 9ZM11.8 30v3.6H9v5.3H8V30h3.8ZM9 32.1v.7h1.7V32H9Zm0-.7h1.7v-.6H9v.6ZM16.4 30v7.6c0 .5 0 1-.5 1.1-.4.2-1 .2-2 .2 0-.3-.1-.7-.3-1h1.5c.2 0 .2-.1.2-.3v-4h-2.8V30h4Zm-2.8 2.1v.7h1.7v-.7h-1.7Zm0-1.3v.6h1.7v-.6h-1.7ZM13.3 34.6h1.4v.9h-1.4v2.2c0 .5 0 .7-.4.8-.3.2-.7.2-1.3.2l-.3-.9h.9l.1-.1v-1.5a8 8 0 0 1-2.3 1.9l-.6-.8c1-.4 1.8-1 2.5-1.8H9.7v-1h2.6v-.7h1v.8ZM23 31l1 1.6-.9.4c-.2-.6-.5-1.1-.9-1.6l.8-.3Zm1.3-.5 1 1.6-.8.4-1-1.6.8-.4Zm-4-.3c-.2 2-.1 4-.2 6 0 .3 0 .6.2.8.3.4.7.5 1.3.5 1.7 0 2.7-1 3.4-2l.9 1a5.3 5.3 0 0 1-4.3 2.2c-1 0-2-.3-2.3-1-.3-.3-.3-.6-.3-1.2v-6.3h1.4ZM28.8 30.5H31a60.3 60.3 0 0 0 2.8-.1l.6.8c-1.1.6-2 1.5-3 2.3l1-.1c1.5 0 3 .9 3 2.4 0 1.1-.6 2-1.6 2.4-.5.3-1.2.4-2 .4-1 0-2.3-.4-2.3-1.6 0-.9.8-1.5 1.7-1.5a2 2 0 0 1 2.1 2l-1 .2c0-.7-.4-1.3-1.1-1.3-.3 0-.7.2-.7.5 0 .6.7.7 1.1.7 1.7 0 2.6-.7 2.6-1.8 0-1-1.2-1.6-2-1.6-.9 0-1.5.2-2 .6-.7.3-1.2.8-1.8 1.5l-.8-.9 2.6-2.1 2.1-1.8c-1.1 0-2.2 0-3.3.2v-1.2Z'
          fill='currentcolor'
        ></path>
      </svg>
    </button>
  );
};
