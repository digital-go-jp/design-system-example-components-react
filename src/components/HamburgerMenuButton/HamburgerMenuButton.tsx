import type { ComponentProps } from 'react';

type HamburgerMenuButtonProps = ComponentProps<'button'>;

export const HamburgerMenuButton = (props: HamburgerMenuButtonProps) => {
  const { children, className, ...rest } = props;

  return (
    <button
      className={`
        flex w-fit touch-manipulation items-center gap-x-1 rounded-6 px-3 pb-1.5 pt-1 text-oln-16N-100
        hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
        focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        ${className ?? ''}
      `}
      type='button'
      {...rest}
    >
      {children}
    </button>
  );
};
