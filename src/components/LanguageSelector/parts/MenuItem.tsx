import { type ComponentProps, forwardRef } from 'react';

export type LanguageSelectorMenuItemProps = ComponentProps<'a'> & {
  isCurrent?: boolean;
  isCondensed?: boolean;
};

export const LanguageSelectorMenuItem = forwardRef<
  HTMLAnchorElement,
  LanguageSelectorMenuItemProps
>((props, ref) => {
  const { children, className, isCurrent, isCondensed, ...rest } = props;

  return (
    <li>
      <a
        aria-current={isCurrent}
        className={`
          group/menu-item relative flex min-h-11 items-center gap-x-2 text-nowrap px-4 py-2.5 text-dns-16N-130 text-solid-gray-800
          hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
          focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-black focus-visible:ring-[calc(6/16*1rem)] focus-visible:ring-inset focus-visible:ring-yellow-300
          data-[condensed]:min-h-9 data-[current]:bg-key-100 data-[condensed]:py-1.5 data-[condensed]:text-dns-16N-120 data-[current]:font-bold data-[current]:text-key-1000 data-[current]:hover:bg-key-50 data-[current]:hover:text-key-900
          ${className ?? ''}
        `}
        data-current={isCurrent || undefined}
        data-condensed={isCondensed || undefined}
        ref={ref}
        {...rest}
      >
        <svg
          aria-hidden={true}
          className='invisible flex-none group-data-[current]/menu-item:visible'
          fill='currentColor'
          height='24'
          viewBox='0 0 24 24'
          width='24'
        >
          <path d='m9.5 18-5.7-5.7 1.5-1.4 4.2 4.3L18.7 6l1.4 1.4L9.5 18Z' />
        </svg>
        {children}
      </a>
    </li>
  );
});
