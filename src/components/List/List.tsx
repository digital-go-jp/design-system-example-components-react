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
  grid grid-cols-[minmax(2rem,auto)_1fr]
  [&>li]:grid [&>li]:col-span-full [&>li]:grid-cols-[inherit] [&>li]:items-baseline
  [&>li>a]:grid [&>li>a]:col-span-full [&>li>a]:grid-cols-[inherit] [&>li>a]:items-baseline
  [&>li>a>span]:[text-decoration-thickness:inherit]
  [&>li>:not(a):not(span)]:col-start-2
  supports-[grid-template-columns:subgrid]:[&>li]:grid-cols-subgrid
  supports-[grid-template-columns:subgrid]:[&>li>a]:grid-cols-subgrid
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
