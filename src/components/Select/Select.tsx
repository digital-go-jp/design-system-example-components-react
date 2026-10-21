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
    <select
      className={`
        inline-block [:where(&)]:w-fit max-w-full align-baseline appearance-none border border-solid-gray-600 rounded-8 bg-white pl-4 pr-10 py-[calc(11/16*1rem)] text-oln-16N-100 text-solid-gray-800
        bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3Cpath%20fill='%231a1a1a'%20d='M12%2017.1%203%208l1-1%208%208%208-8%201%201z'/%3E%3C/svg%3E")] bg-no-repeat bg-[length:1rem_1rem] bg-[position:right_1rem_center]
        aria-disabled:bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3Cpath%20fill='%23949494'%20d='M12%2017.1%203%208l1-1%208%208%208-8%201%201z'/%3E%3C/svg%3E")]
        forced-colors:appearance-auto forced-colors:bg-none aria-disabled:forced-colors:bg-none
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
  );
};
