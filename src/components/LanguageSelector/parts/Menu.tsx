import type { ComponentProps } from 'react';

export type LanguageSelectorMenuProps = ComponentProps<'ul'> & {
  isCondensed?: boolean;
};

export const LanguageSelectorMenu = (props: LanguageSelectorMenuProps) => {
  const { children, className, isCondensed, ...rest } = props;

  return (
    <ul
      className={`
        min-w-fit w-auto py-2 border border-solid-gray-420 bg-white shadow-1 rounded-8
        has-[>:nth-child(7)]:rounded-r-none
        ${isCondensed ? 'max-h-[calc((36*6.5+16)/16*1rem)]' : 'max-h-[calc((44*6.5+16)/16*1rem)]'}
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </ul>
  );
};
