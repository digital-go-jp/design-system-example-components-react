import type { ComponentProps, JSX } from 'react';

export type SeparatedDatePickerSize = 'lg' | 'md' | 'sm';

export type SeparatedDatePickerProps = Omit<ComponentProps<'div'>, 'children'> & {
  size?: SeparatedDatePickerSize;
  isError?: boolean;
  isReadonly?: boolean;
  isDisabled?: boolean;
  children: (props: {
    readOnly?: boolean;
    'aria-disabled'?: boolean;
    'aria-invalid'?: boolean;
  }) => JSX.Element;
};

export const SeparatedDatePicker = (props: SeparatedDatePickerProps) => {
  const { className, size = 'lg', isError, isReadonly, isDisabled, children, ...rest } = props;

  return (
    <div className='pt-3 inline-block'>
      <div
        className={`flex h-14 gap-x-4 text-solid-gray-900 data-[size=md]:h-12 data-[size=sm]:h-10 ${className ?? ''}`}
        data-size={size}
        {...rest}
      >
        {children({ readOnly: isReadonly, 'aria-disabled': isDisabled, 'aria-invalid': isError })}
      </div>
    </div>
  );
};
