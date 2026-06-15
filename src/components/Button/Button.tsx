import { type ComponentProps, forwardRef } from 'react';
import { Slot } from '../Slot';

export type ButtonVariant = 'solid-fill' | 'outline' | 'text';
export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';

export const buttonBaseStyle = `
  underline-offset-[calc(3/16*1rem)]
  focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
  aria-disabled:pointer-events-none aria-disabled:forced-colors:border-[GrayText] aria-disabled:forced-colors:text-[GrayText]
`;

export const buttonVariantStyle: { [key in ButtonVariant]: string } = {
  'solid-fill': `
    border-4
    border-double
    border-transparent
    bg-key-900
    text-white
    hover:bg-key-1000
    hover:underline
    active:bg-key-1200
    active:underline
    aria-disabled:bg-solid-gray-300
    aria-disabled:text-solid-gray-50
  `,
  outline: `
    border
    border-current
    bg-white
    text-key-900
    hover:bg-key-200
    hover:text-key-1000
    hover:underline
    active:bg-key-300
    active:text-key-1200
    active:underline
    aria-disabled:bg-white
    aria-disabled:text-solid-gray-300
  `,
  text: `
    text-key-900
    underline
    hover:bg-key-50
    hover:text-key-1000
    hover:decoration-[calc(3/16*1rem)]
    active:bg-key-100
    active:text-key-1200
    focus-visible:bg-yellow-300
    aria-disabled:bg-transparent
    aria-disabled:focus-visible:bg-yellow-300
    aria-disabled:text-solid-gray-300
  `,
};

export const buttonSizeStyle: { [key in ButtonSize]: string } = {
  lg: 'min-w-[calc(136/16*1rem)] min-h-14 rounded-8 px-4 py-3 text-oln-16B-100',
  md: 'min-w-24 min-h-12 rounded-8 px-4 py-2 text-oln-16B-100',
  sm: 'relative min-w-20 min-h-9 rounded-6 px-3 py-0.5 text-oln-16B-100 after:absolute after:inset-x-0 after:-inset-y-full after:m-auto after:h-[44px]',
  xs: 'relative min-w-18 min-h-7 rounded-4 px-2 py-0.5 text-oln-14B-100 after:absolute after:inset-x-0 after:-inset-y-full after:m-auto after:h-[44px]',
};

export type ButtonProps = {
  className?: string;
  variant?: ButtonVariant;
  size: ButtonSize;
} & (
  | ({ asChild?: false } & ComponentProps<'button'>)
  | { asChild: true; children: React.ReactNode }
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { asChild, children, className, variant, size, ...rest } = props;

  const classNames = `${buttonBaseStyle} ${buttonSizeStyle[size]} ${
    variant ? buttonVariantStyle[variant] : ''
  } ${className ?? ''}`;

  if (asChild) {
    return (
      <Slot className={classNames} {...rest}>
        {children}
      </Slot>
    );
  }

  const handleDisabled = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <button
      className={classNames}
      onClick={props['aria-disabled'] ? handleDisabled : props.onClick}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});
