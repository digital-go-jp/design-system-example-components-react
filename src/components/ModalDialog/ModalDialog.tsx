import { type ComponentProps, type CSSProperties, forwardRef } from 'react';

export type ModalDialogProps = ComponentProps<'dialog'> & {
  scroll?: 'inner' | 'outer';
  width?: string;
};

export const ModalDialog = forwardRef<HTMLDialogElement, ModalDialogProps>(
  ({ children, className, scroll, width, style, ...rest }, ref) => {
    const mergedStyle: CSSProperties = {
      ...style,
      ['--modal-dialog-width' as string]: width ?? 'fit-content',
    };

    return (
      <dialog
        ref={ref}
        className={`
          group/modal-dialog
          inset-0 w-auto h-auto max-w-none max-h-none border-0 bg-transparent px-4
          [container-type:inline-size] [color-scheme:dark] break-words
          text-std-16N-170
          [&:modal]:flex [&:modal]:flex-col [&:modal]:items-center
          backdrop:bg-opacity-gray-600 forced-colors:backdrop:bg-[#000b]
          [scrollbar-gutter:stable] data-[scroll=inner]:[scrollbar-gutter:auto]
          ${className ?? ''}
        `}
        data-scroll={scroll}
        style={mergedStyle}
        {...rest}
      >
        <div className='shrink-[9999] w-px h-[calc(120/16*1rem)] min-h-4'></div>
        {children}
        <div className='shrink-[9999] w-px h-[calc(120/16*1rem)] min-h-4'></div>
      </dialog>
    );
  },
);

export type ModalDialogContentProps = ComponentProps<'div'>;

export const ModalDialogContent = ({ className, ...rest }: ModalDialogContentProps) => (
  <div
    className={`
      flex flex-col gap-y-3 shrink-0
      w-[var(--modal-dialog-width)] min-w-[min(30rem,calc(100cqw-2rem))] max-w-full min-h-0
      rounded-8 border border-black bg-white shadow-3 text-solid-gray-800 [color-scheme:light]
      md:gap-y-4
      group-data-[scroll=inner]/modal-dialog:shrink group-data-[scroll=inner]/modal-dialog:[scrollbar-width:thin] group-data-[scroll=inner]/modal-dialog:[&:not(:has(.modal-dialog-scroll-area))]:overflow-y-auto
      ${className ?? ''}
    `}
    {...rest}
  />
);

export type ModalDialogHeaderProps = ComponentProps<'div'>;

export const ModalDialogHeader = ({ className, ...rest }: ModalDialogHeaderProps) => (
  <div
    className={`flex items-start shrink-0 gap-x-4 min-w-0 pt-2 px-4 md:pt-6 md:px-6 ${className ?? ''}`}
    {...rest}
  />
);

export type ModalDialogHeadingProps = ComponentProps<'h2'>;

export const ModalDialogHeading = forwardRef<HTMLHeadingElement, ModalDialogHeadingProps>(
  ({ className, tabIndex = -1, ...rest }, ref) => (
    <h2
      ref={ref}
      tabIndex={tabIndex}
      className={`
        grow min-w-0 text-std-24B-150 md:text-std-28B-150
        focus-visible:outline-none focus-visible:rounded-none focus-visible:shadow-none
        ${className ?? ''}
      `}
      {...rest}
    />
  ),
);

export type ModalDialogCloseProps = Omit<ComponentProps<'button'>, 'children'>;

export const ModalDialogClose = ({ className, ...rest }: ModalDialogCloseProps) => (
  <button
    type='button'
    className={`
      flex items-center shrink-0 gap-x-1 w-fit rounded-6 touch-manipulation
      pt-1 px-3 pb-1.5
      text-solid-gray-800 text-oln-16N-100
      hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
      focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
      ${className ?? ''}
    `}
    {...rest}
  >
    <svg
      className='mt-[calc(2/16*1rem)] w-6 h-6 shrink-0 text-black forced-colors:text-current'
      width='24'
      height='24'
      viewBox='0 0 120 120'
      aria-hidden='true'
    >
      <path
        d='M32 95L25 88L53 60L25 32L32 25L60 53L88 25L95 32L67 60L95 88L88 95L60 67L32 95Z'
        fill='currentColor'
      />
    </svg>
    閉じる
  </button>
);

export type ModalDialogBodyProps = ComponentProps<'div'>;

export const ModalDialogBody = ({ className, ...rest }: ModalDialogBodyProps) => (
  <div className={`shrink-0 min-w-0 px-4 pb-8 md:px-6 ${className ?? ''}`} {...rest} />
);

export type ModalDialogActionsProps = ComponentProps<'div'>;

export const ModalDialogActions = ({ className, ...rest }: ModalDialogActionsProps) => (
  <div className={`shrink-0 min-w-0 px-4 pb-4 md:px-6 md:pb-6 ${className ?? ''}`} {...rest} />
);

export type ModalDialogScrollAreaProps = ComponentProps<'div'>;

export const ModalDialogScrollArea = ({ className, ...rest }: ModalDialogScrollAreaProps) => (
  <div
    className={`
      modal-dialog-scroll-area
      flex flex-col gap-y-3 overflow-y-auto [scrollbar-width:thin]
      [&:not(:first-child)]:-mt-1 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-solid-gray-600
      [&:not(:last-child)]:mb-1 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-solid-gray-600
      md:gap-y-4 md:[&:not(:first-child)]:mt-2 md:[&:not(:last-child)]:mb-2
      ${className ?? ''}
    `}
    {...rest}
  />
);
