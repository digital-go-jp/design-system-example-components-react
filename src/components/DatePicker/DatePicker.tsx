'use client';

import { type ComponentProps, type JSX, type KeyboardEvent, type Ref, useRef } from 'react';

export type DatePickerSize = 'lg' | 'md' | 'sm';

export type DatePickerProps = Omit<ComponentProps<'div'>, 'children'> & {
  size?: DatePickerSize;
  isError?: boolean;
  isReadonly?: boolean;
  isDisabled?: boolean;
  children: (props: {
    yearRef: Ref<HTMLInputElement>;
    monthRef: Ref<HTMLInputElement>;
    dateRef: Ref<HTMLInputElement>;
    readOnly?: boolean;
    'aria-disabled'?: boolean;
    'aria-invalid'?: boolean;
  }) => JSX.Element;
};

export const DatePicker = (props: DatePickerProps) => {
  const { className, size = 'lg', isError, isReadonly, isDisabled, children, ...rest } = props;

  const yearRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowRight') {
      moveRight(event);
    } else if (event.key === 'ArrowLeft') {
      moveLeft(event);
    } else if (event.key.match(/^[^0-9]$/)) {
      if (!event.ctrlKey && !event.metaKey) {
        event.preventDefault();
      }
    }
  }

  function moveRight(event: KeyboardEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    if (input.selectionStart !== input.selectionEnd) {
      return;
    }
    if (input.selectionEnd === input.value.length) {
      event.preventDefault();
      if (input === yearRef.current) {
        monthRef.current?.focus();
      } else if (input === monthRef.current) {
        dateRef.current?.focus();
      }
    }
  }

  function moveLeft(event: KeyboardEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;
    if (input.selectionStart !== input.selectionEnd) {
      return;
    }
    if (input.selectionStart === 0) {
      event.preventDefault();
      if (input === monthRef.current) {
        yearRef.current?.focus();
      } else if (input === dateRef.current) {
        monthRef.current?.focus();
      }
    }
  }

  return (
    // The zero-width space exposes the first-line baseline in Safari.
    // biome-ignore lint/a11y/noStaticElementInteractions: For date input navigation
    <div
      className={String.raw`inline-flex h-14 -space-x-1 rounded-8 border border-solid-gray-600 bg-[--bg] p-0.5 pe-0 text-solid-gray-900 [--bg:theme(colors.white)] before:self-center before:content-['\200B'] focus-within:border-black hover:border-solid-gray-900 data-[size=md]:h-12 data-[size=sm]:h-10 data-[readonly]:border-dashed data-[disabled]:border-solid-gray-300 data-[error]:border-error-1 data-[disabled]:text-solid-gray-420 data-[disabled]:[--bg:theme(colors.solid-gray.50)] data-[error]:focus-within:border-red-1000 data-[error]:hover:border-red-1000 data-[error]:hover:data-[readonly]:border-error-1 hover:data-[readonly]:border-solid-gray-600 forced-colors:data-[disabled]:border-[GrayText] forced-colors:data-[disabled]:text-[GrayText] ${className ?? ''}`}
      data-size={size}
      data-error={isError || null}
      data-readonly={isReadonly || null}
      data-disabled={isDisabled || null}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children({
        yearRef,
        monthRef,
        dateRef,
        readOnly: isReadonly,
        'aria-disabled': isDisabled,
        'aria-invalid': isError,
      })}
    </div>
  );
};
