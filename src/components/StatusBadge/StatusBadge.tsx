import type { ComponentProps } from 'react';

export const StatusBadge = (props: ComponentProps<'span'>) => {
  const { className, children, ...rest } = props;

  return (
    <span
      className={`ml-2 inline-block rounded-8 bg-solid-gray-536 p-2 text-oln-16N-100 text-white outline-1 outline-transparent ${className ?? ''}`}
      {...rest}
    >
      {children}
    </span>
  );
};
