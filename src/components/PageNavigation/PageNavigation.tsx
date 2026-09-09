import { type ComponentProps, forwardRef } from 'react';
import { Button, type ButtonProps, type ButtonVariant } from '../Button';
import { Slot } from '../Slot';

export type PageNavigationProps = ComponentProps<'nav'>;

export const PageNavigation = forwardRef<HTMLElement, PageNavigationProps>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <nav
      className={`flex items-center gap-4 text-oln-16N-100 text-solid-gray-800 ${className ?? ''}`}
      ref={ref}
      {...rest}
    >
      {children}
    </nav>
  );
});

export type PageNavigationCounterProps = ComponentProps<'span'>;

export const PageNavigationCounter = forwardRef<HTMLSpanElement, PageNavigationCounterProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <span
        className={`min-w-[3.75rem] whitespace-nowrap text-center text-oln-16N-100 text-solid-gray-900 ${className ?? ''}`}
        ref={ref}
        {...rest}
      >
        {children}
      </span>
    );
  },
);

export type PageNavigationControl = 'prev' | 'next';

const pageNavigationButtonControlStyle: Partial<
  Record<ButtonVariant, Record<PageNavigationControl, string>>
> = {
  text: {
    prev: 'data-[control=prev]:pl-2',
    next: 'data-[control=next]:pr-2',
  },
  outline: {
    prev: 'data-[control=prev]:pr-6',
    next: 'data-[control=next]:pl-6',
  },
};

export type PageNavigationButtonProps = ButtonProps & {
  control: PageNavigationControl;
};

export const PageNavigationButton = forwardRef<HTMLButtonElement, PageNavigationButtonProps>(
  (props, ref) => {
    const { className, control, variant, ...rest } = props;

    const controlStyle = variant ? pageNavigationButtonControlStyle[variant]?.[control] : undefined;

    return (
      <Button
        className={`${controlStyle ?? ''} ${className ?? ''}`}
        data-control={control}
        ref={ref}
        variant={variant}
        {...(rest as ButtonProps)}
      />
    );
  },
);

export type PageNavigationArrowButtonSize = 'lg' | 'md' | 'sm' | 'xs';

const pageNavigationArrowButtonSizeStyle: Record<PageNavigationArrowButtonSize, string> = {
  lg: 'size-11',
  md: 'relative size-8 after:absolute after:-inset-full after:m-auto after:size-11',
  sm: 'relative size-6 after:absolute after:-inset-full after:m-auto after:size-11',
  xs: 'relative size-5 after:absolute after:-inset-full after:m-auto after:size-11',
};

const pageNavigationArrowButtonHoverBorderStyle: Record<PageNavigationArrowButtonSize, string> = {
  lg: 'hover:border-[3px]',
  md: 'hover:border-[3px]',
  sm: 'hover:border-2',
  xs: 'hover:border-2',
};

const pageNavigationArrowButtonBaseStyle = `
  flex shrink-0 items-center justify-center
  rounded-full border border-current bg-white text-key-1000
  hover:bg-key-200
  active:bg-key-300 active:text-key-1200
  focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
`;

export type PageNavigationArrowButtonProps = {
  className?: string;
  size: PageNavigationArrowButtonSize;
} & (
  | ({ asChild?: false; label: string } & ComponentProps<'button'>)
  | { asChild: true; children: React.ReactNode }
);

export const PageNavigationArrowButton = forwardRef<
  HTMLButtonElement,
  PageNavigationArrowButtonProps
>((props, ref) => {
  const { size, className } = props;

  const classNames = `
    ${pageNavigationArrowButtonBaseStyle}
    ${pageNavigationArrowButtonSizeStyle[size]}
    ${pageNavigationArrowButtonHoverBorderStyle[size]}
    ${className ?? ''}
  `;

  if (props.asChild) {
    const { asChild: _asChild, children, className: _className, size: _size, ...rest } = props;

    return (
      <Slot className={classNames} {...rest}>
        {children}
      </Slot>
    );
  }

  const { asChild: _asChild, children, className: _className, label, size: _size, ...rest } = props;

  return (
    <button className={classNames} type='button' {...rest} ref={ref}>
      {children}
      <span className='sr-only'>{label}</span>
    </button>
  );
});
