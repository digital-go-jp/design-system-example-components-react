import type { ComponentProps } from 'react';

type Spacing = '4' | '8' | '12';
type Marker = 'number';

export type ListProps = ComponentProps<'ul'> & {
  spacing: Spacing;
  marker?: Marker;
};

export const listBaseStyle = `
  [&>li]:py-[var(--spacing,0px)]
  data-[spacing='4']:[--spacing:0.25rem] data-[spacing='8']:[--spacing:0.5rem] data-[spacing='12']:[--spacing:0.75rem]
  [&_ul]:mt-[var(--spacing,0px)] [&_ul]:mb-[calc(-1*var(--spacing,0px))]
`;

export const listDefaultStyle = 'pl-8 list-[revert]';

export const listNumberedStyle = `
  [&>li]:pl-8
  [&>li>a:only-child]:-ml-8 [&>li>a:only-child]:pl-8
  [&>li>span:first-child]:-ml-8 [&>li>span:first-child]:inline-block [&>li>span:first-child]:min-w-8 [&>li>span:first-child]:whitespace-nowrap
  [&>li>a:only-child>span:first-child]:-ml-8 [&>li>a:only-child>span:first-child]:inline-block [&>li>a:only-child>span:first-child]:min-w-8 [&>li>a:only-child>span:first-child]:whitespace-nowrap [&>li>a:only-child>span:first-child]:[text-decoration:inherit]
`;

export const List = (props: ListProps) => {
  const { spacing, marker, children, className, ...rest } = props;

  const markerStyle = marker === 'number' ? listNumberedStyle : listDefaultStyle;

  return (
    <ul
      className={`${listBaseStyle} ${markerStyle} ${className ?? ''}`}
      data-spacing={spacing}
      data-marker={marker}
      {...rest}
    >
      {children}
    </ul>
  );
};
