import { type ComponentProps, forwardRef } from 'react';

export type CheckboxSize = 'sm' | 'md' | 'lg';

export type CheckboxProps = Omit<ComponentProps<'input'>, 'size'> & {
  size?: CheckboxSize;
  isError?: boolean;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { children, isError, onClick, size = 'sm', ...rest } = props;

  const handleDisabled = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
  };

  const checkbox = (
    <span
      className={`
        flex items-center justify-center shrink-0 rounded-[calc(1/8*100%)]
        data-[size=sm]:size-6 data-[size=md]:size-8 data-[size=lg]:size-11
        has-[input:hover:not(:focus):not([aria-disabled="true"])]:bg-solid-gray-420
      `}
      data-size={size}
    >
      <input
        className={`
          appearance-none size-3/4 rounded-[calc(2/18*100%)] border-solid-gray-600 bg-white bg-clip-padding
          hover:border-black
          focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
          checked:border-key-900 checked:bg-key-900 checked:hover:border-key-1100 checked:hover:bg-key-1100
          indeterminate:border-key-900 indeterminate:bg-key-900 indeterminate:hover:border-key-1100 indeterminate:hover:bg-key-1100
          before:hidden before:size-3.5 before:bg-white
          checked:before:block checked:before:[clip-path:path('M5.6,11.2L12.65,4.15L11.25,2.75L5.6,8.4L2.75,5.55L1.35,6.95L5.6,11.2Z')]
          indeterminate:before:block indeterminate:before:[clip-path:path('M3.25,7.75H10.75V6.25H3.25V7.75Z')]
          data-[size=sm]:border-[calc(2/16*1rem)]
          data-[size=md]:border-[calc(2/16*1rem)] data-[size=md]:before:origin-top-left data-[size=md]:before:scale-[calc(20/14)]
          data-[size=lg]:border-[calc(3/16*1rem)] data-[size=lg]:before:origin-top-left data-[size=lg]:before:scale-[calc(27/14)]
          data-[error]:border-error-1 data-[error]:hover:border-red-1000 data-[error]:checked:bg-error-1 data-[error]:checked:hover:bg-red-1000 data-[error]:indeterminate:bg-error-1 data-[error]:indeterminate:hover:bg-red-1000
          aria-disabled:!border-solid-gray-300 aria-disabled:!bg-solid-gray-50 aria-disabled:checked:!bg-solid-gray-300 aria-disabled:indeterminate:!bg-solid-gray-300 aria-disabled:before:border-solid-gray-50
          forced-colors:!border-[ButtonText] forced-colors:checked:!bg-[Highlight] forced-colors:checked:!border-[Highlight] forced-colors:indeterminate:!bg-[Highlight] forced-colors:indeterminate:!border-[Highlight] forced-colors:before:!bg-[HighlightText] forced-colors:aria-disabled:!border-[GrayText] forced-colors:aria-disabled:checked:!bg-[GrayText]
        `}
        onClick={props['aria-disabled'] ? handleDisabled : onClick}
        ref={ref}
        type='checkbox'
        data-size={size}
        data-error={isError || null}
        {...rest}
      />
    </span>
  );

  return children ? (
    <label
      className='flex w-fit items-start py-2 data-[size=sm]:gap-1 data-[size=md]:gap-2 data-[size=lg]:gap-2'
      data-size={size}
    >
      {checkbox}
      <span
        className='text-solid-gray-800 data-[size=sm]:pt-px data-[size=sm]:text-dns-16N-130 data-[size=md]:pt-1 data-[size=md]:text-dns-16N-130 data-[size=lg]:pt-2.5 data-[size=lg]:text-dns-17N-130'
        data-size={size}
      >
        {children}
      </span>
    </label>
  ) : (
    checkbox
  );
});
