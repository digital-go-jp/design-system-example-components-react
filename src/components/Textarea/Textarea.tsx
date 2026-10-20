import type { ComponentProps } from 'react';

export type TextareaProps = Omit<ComponentProps<'textarea'>, 'placeholder'> & {
  isError?: boolean;
  placeholder?: never;
};

export const Textarea = (props: TextareaProps) => {
  const { className, isError, readOnly, ...rest } = props;

  return (
    // The zero-width space exposes the first-line baseline in Safari.
    <span
      className={String.raw`block text-std-16N-170 before:block before:h-0 before:pt-4 before:-mb-4 before:content-['\200B']`}
    >
      <textarea
        className={`
        block max-w-full rounded-8 border bg-white p-4 border-solid-gray-600 text-std-16N-170 text-solid-gray-800
        hover:[&:read-write]:border-black
        aria-[invalid=true]:border-error-1 aria-[invalid=true]:[&:read-write]:hover:border-red-1000
        focus:outline focus:outline-4 focus:outline-black focus:outline-offset-[calc(2/16*1rem)] focus:ring-[calc(2/16*1rem)] focus:ring-yellow-300
        read-only:border-dashed
        aria-disabled:border-solid-gray-300 read-only:aria-disabled:border-solid aria-disabled:bg-solid-gray-50 aria-disabled:text-solid-gray-420 aria-disabled:pointer-events-none aria-disabled:forced-colors:text-[GrayText] aria-disabled:forced-colors:border-[GrayText]
        ${className ?? ''}
      `}
        aria-invalid={isError || undefined}
        readOnly={props['aria-disabled'] ? true : readOnly}
        {...rest}
      />
    </span>
  );
};
