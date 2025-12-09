import type { ComponentProps } from 'react';

type Props = ComponentProps<'blockquote'>;

export const Blockquote = (props: Props) => {
  const { children, className, ...rest } = props;
  return (
    <blockquote
      className={`border-l-8 border-solid-gray-536 py-2 pl-6 pr-4 mx-10 [&>*:first-child]:!mt-0 [&>*:last-child]:!mb-0 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </blockquote>
  );
};
