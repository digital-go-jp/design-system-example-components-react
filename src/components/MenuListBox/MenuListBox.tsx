import type { ComponentProps } from 'react';
import { forwardRef } from 'react';

export type MenuListBoxProps = ComponentProps<'div'>;

export const MenuListBox = forwardRef<HTMLDivElement, MenuListBoxProps>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={`relative block w-fit text-solid-gray-900 text-dns-16N-120 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </div>
  );
});

export type MenuListBoxOpenerSize = 'sm' | 'md';
export type MenuListBoxOpenerStyle = 'text' | 'outlined' | 'filled';
export type MenuListBoxOpenerFontWeight = 'normal' | 'bold';

export type MenuListBoxOpenerProps = Omit<ComponentProps<'button'>, 'type'> & {
  size: MenuListBoxOpenerSize;
  buttonStyle: MenuListBoxOpenerStyle;
  fontWeight?: MenuListBoxOpenerFontWeight;
};

export const MenuListBoxOpener = forwardRef<HTMLButtonElement, MenuListBoxOpenerProps>(
  (props, ref) => {
    const { children, className, size, buttonStyle, fontWeight = 'normal', ...rest } = props;

    return (
      <button
        ref={ref}
        type='button'
        aria-haspopup='menu'
        data-size={size}
        data-style={buttonStyle}
        data-text-weight={fontWeight}
        className={`
          group/menu-list-box-opener
          flex items-center rounded-8 py-1
          data-[size=sm]:min-h-[calc(36/16*1rem)] data-[size=sm]:px-1 data-[size=sm]:gap-x-1
          data-[size=md]:min-h-11 data-[size=md]:px-4 data-[size=md]:gap-x-2
          data-[style=outlined]:border data-[style=outlined]:border-solid-gray-420
          data-[style=filled]:bg-solid-gray-50
          data-[text-weight=bold]:font-bold
          hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
          data-[style=outlined]:hover:border-black
          data-[style=filled]:hover:bg-solid-gray-100
          focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
          data-[style=filled]:focus-visible:bg-solid-gray-50
          ${className ?? ''}
        `}
        {...rest}
      >
        {children}
        <svg
          aria-hidden={true}
          className='mt-1 shrink-0 w-4 h-4 group-aria-expanded/menu-list-box-opener:rotate-180'
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='m20.5 6.6-8 8-8-8L3.1 8l9.4 9.4L21.9 8l-1.4-1.4Z' />
        </svg>
      </button>
    );
  },
);

export type MenuListBoxPopupProps = ComponentProps<'div'>;

export const MenuListBoxPopup = (props: MenuListBoxPopupProps) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`
        absolute top-full left-0 z-10
        w-max max-h-[calc((16+44*6.5)/16*1rem)] overflow-y-auto
        rounded-l-8
        border border-solid-gray-420 bg-white
        py-4
        shadow-1
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </div>
  );
};
