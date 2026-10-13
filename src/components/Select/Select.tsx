import type { ComponentProps } from 'react';

export type SelectBlockSize = 'lg' | 'md' | 'sm';

export type SelectProps = ComponentProps<'select'> & {
  isError?: boolean;
  blockSize?: SelectBlockSize;
};

export const Select = (props: SelectProps) => {
  const { children, className, isError, blockSize = 'lg', onKeyDown, onMouseDown, ...rest } = props;

  const handleDisabledKeyDown = (e: React.KeyboardEvent<HTMLSelectElement>) => {
    if (e.code !== 'Tab') {
      e.preventDefault();
    }
  };

  const handleDisabledMouseDown = (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <span className='relative'>
      <select
        className={`
          w-full appearance-none border border-solid-gray-600 rounded-8 bg-white pl-4 pr-10 py-[calc(11/16*1rem)] text-oln-16N-100 text-solid-gray-800
          hover:border-black
          data-[size=sm]:h-10 data-[size=md]:h-12 data-[size=lg]:h-14
          aria-[invalid=true]:border-error-1 aria-[invalid=true]:hover:border-red-1000
          focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
          aria-disabled:border-solid-gray-300 aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:pointer-events-none aria-disabled:forced-colors:text-[GrayText] aria-disabled:forced-colors:border-[GrayText]
          ${className ?? ''}
        `}
        aria-invalid={isError || undefined}
        data-size={blockSize}
        onMouseDown={props['aria-disabled'] ? handleDisabledMouseDown : onMouseDown}
        onKeyDown={props['aria-disabled'] ? handleDisabledKeyDown : onKeyDown}
        {...rest}
      >
        {children}
      </select>
      <svg
        aria-hidden={true}
        className={`
          pointer-events-none absolute right-4 top-1/2 -translate-y-1/2
          ${props['aria-disabled'] ? 'text-solid-gray-420 forced-colors:text-[GrayText]' : 'text-solid-gray-900 forced-colors:text-[CanvasText]'}
        `}
        fill='none'
        height='16'
        viewBox='0 0 16 16'
        width='16'
      >
        <path
          d='M13.3344 4.40002L8.00104 9.73336L2.66771 4.40002L1.73438 5.33336L8.00104 11.6L14.2677 5.33336L13.3344 4.40002Z'
          fill='currentColor'
        />
      </svg>
    </span>
  );
};
