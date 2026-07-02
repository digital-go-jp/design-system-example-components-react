import { type ComponentProps, forwardRef } from 'react';

export type DatePickerDateProps = Omit<ComponentProps<'input'>, 'placeholder'> & {
  placeholder?: never;
};

export const DatePickerDate = forwardRef<HTMLInputElement, DatePickerDateProps>((props, ref) => {
  const { className, 'aria-disabled': ariaDisabled, readOnly, ...rest } = props;

  return (
    <label className='relative z-0 inline-flex flex-row-reverse last:pe-4 [&:has([aria-disabled="true"])]:pointer-events-none'>
      <span className='relative z-10 self-center bg-[--bg] p-1 text-oln-16N-100'>日</span>
      <input
        className={`-me-1 w-11 rounded-8 border border-transparent bg-transparent pe-3 text-right focus:border-solid-gray-600 focus:outline focus:outline-4 focus:outline-offset-[calc(2/16*1rem)] focus:outline-black focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300 aria-disabled:pointer-events-none forced-colors:border-[Canvas] forced-colors:aria-disabled:focus:border-[GrayText] ${className ?? ''}`}
        type='text'
        inputMode='numeric'
        pattern='\d+'
        readOnly={ariaDisabled === 'true' || ariaDisabled === true || readOnly}
        aria-disabled={ariaDisabled}
        ref={ref}
        {...rest}
      />
    </label>
  );
});
