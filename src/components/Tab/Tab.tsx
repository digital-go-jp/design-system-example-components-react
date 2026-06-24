import { type ComponentProps, forwardRef } from 'react';

// Types

export type TabPosition = 'top' | 'bottom' | 'left' | 'right';

export type TabChangeDetail = {
  selectedIndex: number;
  selectedTabLabel: string;
};

// Tab (root wrapper)

export type TabProps = ComponentProps<'div'> & {
  position?: TabPosition;
};

export const Tab = ({ position = 'top', className, children, ...rest }: TabProps) => (
  <div
    className={`
      group/tab
      relative z-0 flex text-solid-gray-800 text-std-16N-170 [overflow-wrap:anywhere]
      data-[position=top]:flex-col data-[position=bottom]:flex-col
      data-[position=left]:flex-row data-[position=right]:flex-row-reverse
      ${className ?? ''}
    `}
    data-position={position}
    {...rest}
  >
    {children}
  </div>
);

// TabList

export type TabListProps = ComponentProps<'ul'>;

export const TabList = forwardRef<HTMLUListElement, TabListProps>(
  ({ className, children, ...rest }, ref) => (
    <ul
      ref={ref}
      className={`
        relative z-0 -m-1.5 overflow-hidden flex
        pt-[calc(7/16*1rem)] pr-1.5 pb-1.5 pl-[calc(7/16*1rem)]
        after:relative after:flex-grow after:border-0 after:border-solid after:border-solid-gray-420 after:content-['']
        group-data-[position=top]/tab:flex-wrap group-data-[position=top]/tab:after:-ml-px group-data-[position=top]/tab:after:w-px group-data-[position=top]/tab:after:border-b
        group-data-[position=bottom]/tab:flex-wrap-reverse group-data-[position=bottom]/tab:after:-mt-px group-data-[position=bottom]/tab:after:-ml-px group-data-[position=bottom]/tab:after:w-px group-data-[position=bottom]/tab:after:border-t
        group-data-[position=left]/tab:flex-col group-data-[position=left]/tab:shrink-0 group-data-[position=left]/tab:after:-mt-px group-data-[position=left]/tab:after:h-px group-data-[position=left]/tab:after:border-r
        group-data-[position=right]/tab:flex-col group-data-[position=right]/tab:shrink-0 group-data-[position=right]/tab:after:-mt-px group-data-[position=right]/tab:after:-ml-px group-data-[position=right]/tab:after:h-px group-data-[position=right]/tab:after:border-l
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </ul>
  ),
);

// TabItem

export type TabItemProps = ComponentProps<'a'> & {
  /**
   * @internal provided by useTabAria's getTabProps.
   * Applied to the inner <li> wrapper as role="presentation".
   */
  _internalListItemRole?: 'presentation';
  /**
   * @internal provided by useTabAria's getTabProps.
   * Renders the inner interactive element as <button> instead of <a>.
   */
  _internalElementType?: 'button';
};

export const TabItem = ({
  _internalListItemRole,
  _internalElementType,
  href,
  className,
  children,
  ...rest
}: TabItemProps) => {
  const computedClassName = `
    group/tab-item
    isolate -mt-px -ml-px flex border border-solid-gray-420 bg-white text-left no-underline
    [&[role=tab]]:cursor-default
    focus-visible:overflow-hidden focus-visible:z-[1]
    focus-visible:outline focus-visible:outline-4 focus-visible:outline-black
    focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:rounded-[calc(4/16*1rem)]
    focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
    [&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:absolute
    [&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-0
    [&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-solid
    [&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-white
    [&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:content-['']
    forced-colors:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-[Canvas]
    [&:not([aria-selected=true]):not([aria-current]:not([aria-current='false']))]:hover:bg-solid-gray-50
    group-data-[position=top]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:bottom-1.5
    group-data-[position=top]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:w-full
    group-data-[position=top]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-b
    group-data-[position=bottom]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:top-1.5
    group-data-[position=bottom]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:w-full
    group-data-[position=bottom]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-b
    group-data-[position=left]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:right-1.5
    group-data-[position=left]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:h-full
    group-data-[position=left]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-r
    group-data-[position=right]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:left-1.5
    group-data-[position=right]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:h-full
    group-data-[position=right]/tab:[&:is([aria-selected=true],[aria-current]:not([aria-current='false'])):not(:focus-visible)]:before:border-l
    ${className ?? ''}
  `;

  const inner = (
    <span
      className={`
        relative flex flex-grow items-center border-0 border-solid border-solid-gray-50
        p-4 font-normal text-dns-16N-120 [letter-spacing:0]
        group-aria-selected/tab-item:font-bold
        group-[&[aria-current]:not([aria-current='false'])]/tab-item:font-bold
        before:absolute before:content-['']
        group-aria-selected/tab-item:before:bg-key-900
        group-[&[aria-current]:not([aria-current='false'])]/tab-item:before:bg-key-900
        forced-colors:border-[Canvas]
        forced-colors:group-aria-selected/tab-item:before:bg-[ButtonText]
        forced-colors:group-[&[aria-current]:not([aria-current='false'])]/tab-item:before:bg-[ButtonText]
        group-[&:not([aria-selected=true]):not([aria-current]:not([aria-current='false'])):hover]/tab-item:underline
        group-[&:not([aria-selected=true]):not([aria-current]:not([aria-current='false'])):hover]/tab-item:underline-offset-[calc(3/16*1rem)]
        group-[&:not([aria-selected=true]):not([aria-current]:not([aria-current='false'])):hover]/tab-item:decoration-[calc(1/16*1rem)]
        group-[&:not([aria-selected=true]):not([aria-current]:not([aria-current='false'])):hover]/tab-item:before:bg-solid-gray-420
        group-data-[position=top]/tab:border-t-[5px] group-data-[position=top]/tab:before:-top-1.5 group-data-[position=top]/tab:before:left-0 group-data-[position=top]/tab:before:right-0 group-data-[position=top]/tab:before:h-1.5
        group-data-[position=bottom]/tab:border-b-[5px] group-data-[position=bottom]/tab:before:left-0 group-data-[position=bottom]/tab:before:-bottom-1.5 group-data-[position=bottom]/tab:before:right-0 group-data-[position=bottom]/tab:before:h-1.5
        group-data-[position=left]/tab:border-l-[5px] group-data-[position=left]/tab:before:top-0 group-data-[position=left]/tab:before:bottom-0 group-data-[position=left]/tab:before:-left-1.5 group-data-[position=left]/tab:before:w-1.5
        group-data-[position=right]/tab:border-r-[5px] group-data-[position=right]/tab:before:top-0 group-data-[position=right]/tab:before:-right-1.5 group-data-[position=right]/tab:before:bottom-0 group-data-[position=right]/tab:before:w-1.5
      `}
    >
      {children}
    </span>
  );

  return (
    <li role={_internalListItemRole} className='contents'>
      {_internalElementType === 'button' ? (
        <button type='button' className={computedClassName} {...(rest as ComponentProps<'button'>)}>
          {inner}
        </button>
      ) : (
        <a href={href} className={computedClassName} {...rest}>
          {inner}
        </a>
      )}
    </li>
  );
};

// TabPanel

export type TabPanelProps = ComponentProps<'div'>;

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ className, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={`
        border border-solid-gray-420 bg-white p-4
        focus-visible:z-[1] focus-visible:outline focus-visible:outline-4 focus-visible:outline-black
        focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:rounded-[calc(4/16*1rem)]
        focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
        group-data-[position=top]/tab:border-t-0
        group-data-[position=bottom]/tab:border-b-0
        group-data-[position=left]/tab:flex-grow group-data-[position=left]/tab:min-w-0 group-data-[position=left]/tab:border-l-0
        group-data-[position=right]/tab:flex-grow group-data-[position=right]/tab:min-w-0 group-data-[position=right]/tab:border-r-0
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </div>
  ),
);
