import { type ComponentProps, forwardRef } from 'react';

export type InputBlockSize = 'lg' | 'md' | 'sm';

export type InputProps = Omit<ComponentProps<'input'>, 'placeholder'> & {
  isError?: boolean;
  blockSize?: InputBlockSize;
  placeholder?: never;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, readOnly, isError, blockSize = 'lg', ...rest } = props;

  return (
    <input
      className={`
        max-w-full rounded-8 border bg-white px-4 py-3 border-solid-gray-600 text-oln-16N-100 text-solid-gray-800
        hover:[&:read-write]:border-black
        data-[size=sm]:h-10 data-[size=md]:h-12 data-[size=lg]:h-14
        aria-[invalid=true]:border-error-1 aria-[invalid=true]:[&:read-write]:hover:border-red-1000
        focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
        read-only:border-dashed
        aria-disabled:border-solid-gray-300 aria-disabled:!border-solid aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:pointer-events-none aria-disabled:forced-colors:text-[GrayText] aria-disabled:forced-colors:border-[GrayText]
        ${className ?? ''}
      `}
      aria-invalid={isError || undefined}
      data-size={blockSize}
      readOnly={props['aria-disabled'] ? true : readOnly}
      ref={ref}
      {...rest}
    />
  );
});
