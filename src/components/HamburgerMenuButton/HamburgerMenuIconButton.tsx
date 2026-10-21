import type { ComponentProps } from 'react';

type HamburgerMenuIconButtonProps = ComponentProps<'button'>;

export const HamburgerMenuIconButton = (props: HamburgerMenuIconButtonProps) => {
  const { children, className, ...rest } = props;

  return (
    <button
      className={`
        block w-fit rounded-4 p-0 text-black touch-manipulation
        hover:outline-1 hover:bg-solid-gray-50
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
