import { type ComponentProps, forwardRef } from 'react';

export type RadioSize = 'sm' | 'md' | 'lg';

export type RadioProps = Omit<ComponentProps<'input'>, 'size'> & {
  size?: RadioSize;
  isError?: boolean;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { children, isError, onClick, size = 'sm', ...rest } = props;

  const handleDisabled = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
  };

  const radio = (
    <span
      className={`
        flex items-center justify-center shrink-0 rounded-full
        data-[size=sm]:size-6 data-[size=md]:size-8 data-[size=lg]:size-11
        has-[input:hover:not(:focus):not([aria-disabled="true"])]:bg-solid-gray-420
      `}
      data-size={size}
    >
      <input
        className={`
          appearance-none size-[calc(5/6*100%)] rounded-full border-solid-gray-600 bg-white
          hover:border-black
          focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
          checked:border-key-900 checked:before:bg-key-900 checked:hover:border-key-1100 checked:hover:before:bg-key-1100
          before:hidden before:size-full before:bg-white before:[clip-path:circle(calc(5/16*100%))]
          checked:before:block
          data-[size=sm]:border-[calc(2/16*1rem)]
          data-[size=md]:border-[calc(2/16*1rem)]
          data-[size=lg]:border-[calc(3/16*1rem)]
          data-[error]:border-error-1 data-[error]:hover:border-red-1000 data-[error]:checked:before:bg-error-1 data-[error]:checked:hover:before:bg-red-1000
          aria-disabled:!border-solid-gray-300 aria-disabled:!bg-solid-gray-50 aria-disabled:checked:before:!bg-solid-gray-300
          forced-colors:!border-[ButtonText] forced-colors:checked:!border-[Highlight] forced-colors:checked:before:!bg-[Highlight] forced-colors:aria-disabled:!border-[GrayText] forced-colors:aria-disabled:checked:before:!bg-[GrayText]
        `}
        ref={ref}
        type='radio'
        onClick={props['aria-disabled'] ? handleDisabled : onClick}
        data-size={size}
        data-error={isError || null}
        {...rest}
      />
    </span>
  );

  return children ? (
    <label
      className='flex w-fit items-start py-2 data-[size=sm]:gap-1 data-[size=md]:gap-2 data-[size=lg]:gap-3'
      data-size={size}
    >
      {radio}
      <span
        className='text-solid-gray-800 data-[size=sm]:pt-px data-[size=sm]:text-dns-16N-130 data-[size=md]:pt-1 data-[size=md]:text-dns-16N-130 data-[size=lg]:pt-2.5 data-[size=lg]:text-dns-17N-130'
        data-size={size}
      >
        {children}
      </span>
    </label>
  ) : (
    radio
  );
});
