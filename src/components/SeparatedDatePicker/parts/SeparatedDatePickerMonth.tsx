import { type ComponentProps, forwardRef } from 'react';

export type SeparatedDatePickerMonthProps = Omit<ComponentProps<'input'>, 'placeholder'> & {
  placeholder?: never;
};

export const SeparatedDatePickerMonth = forwardRef<HTMLInputElement, SeparatedDatePickerMonthProps>(
  (props, ref) => {
    const { className, 'aria-disabled': disabled, readOnly, ...rest } = props;

    return (
      <label className='relative [&:has([aria-disabled="true"])]:pointer-events-none'>
        <span className='absolute inset-x-0 -top-3 mx-auto w-6 bg-white p-1 text-oln-16N-100 [&:has(+[aria-disabled=true])]:text-solid-gray-420 forced-colors:[&:has(+[aria-disabled=true])]:text-[GrayText]'>
          月
        </span>
        <input
          className={`h-full w-14 rounded-8 border border-solid-gray-600 bg-white text-center read-only:[&:not([aria-disabled="true"])]:border-dashed hover:border-solid-gray-900 hover:read-only:border-solid-gray-600 focus:border-solid-gray-900 focus:outline focus:outline-4 focus:outline-offset-[calc(2/16*1rem)] focus:outline-black focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300 aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:hover:border-solid-gray-600 aria-[invalid=true]:border-error-1 aria-[invalid=true]:hover:border-red-1000 forced-colors:[&:read-write]:aria-disabled:border-[GrayText] ${className ?? ''}`}
          type='text'
          inputMode='numeric'
          pattern='\d+'
          readOnly={disabled ? true : readOnly}
          aria-disabled={disabled}
          ref={ref}
          {...rest}
        />
      </label>
    );
  },
);
