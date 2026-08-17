import { type ComponentProps, forwardRef } from 'react';

export type SwitchOnOffProps = Omit<ComponentProps<'button'>, 'aria-disabled'>;

export const SwitchOnOff = forwardRef<HTMLButtonElement, SwitchOnOffProps>((props, ref) => {
  const { className, 'aria-checked': ariaChecked = false, ...rest } = props;

  return (
    <button
      ref={ref}
      {...rest}
      type='button'
      role='switch'
      aria-checked={ariaChecked}
      className={`
        group/switch-on-off relative shrink-0 select-none [-webkit-tap-highlight-color:transparent]
        before:absolute before:-inset-y-1 before:inset-x-0
        focus-visible:rounded-full focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-yellow-300
        ${className ?? ''}
      `}
    >
      <span
        className={`
          relative block w-14 rounded-full border-2 border-solid-gray-600 bg-white p-1
          group-aria-checked/switch-on-off:border-key-900 group-aria-checked/switch-on-off:bg-key-50
          group-hover/switch-on-off:border-black group-hover/switch-on-off:ring-4 group-hover/switch-on-off:ring-solid-gray-420
          group-aria-checked/switch-on-off:group-hover/switch-on-off:border-key-1100
          group-active/switch-on-off:ring-[calc(6/16*1rem)] group-active/switch-on-off:ring-solid-gray-600
          group-disabled/switch-on-off:!border-solid-gray-300 group-disabled/switch-on-off:!bg-solid-gray-50 group-disabled/switch-on-off:!ring-0
          forced-colors:!border-[ButtonText]
          group-aria-checked/switch-on-off:forced-colors:!border-[Highlight]
          group-disabled/switch-on-off:forced-colors:!border-[GrayText]
          group-disabled/switch-on-off:group-aria-checked/switch-on-off:forced-colors:!border-[GrayText]
        `}
        aria-hidden='true'
      >
        <span
          className={`
            block size-6 rounded-full bg-solid-gray-800
            group-aria-checked/switch-on-off:ml-auto group-aria-checked/switch-on-off:bg-key-900
            group-hover/switch-on-off:bg-black
            group-aria-checked/switch-on-off:group-hover/switch-on-off:bg-key-1100
            group-disabled/switch-on-off:!bg-solid-gray-300
            forced-colors:!bg-[ButtonText]
            group-aria-checked/switch-on-off:forced-colors:!bg-[Highlight]
            group-disabled/switch-on-off:forced-colors:!bg-[GrayText]
            group-disabled/switch-on-off:group-aria-checked/switch-on-off:forced-colors:!bg-[GrayText]
          `}
        >
          <svg
            className={`
              hidden size-6 shrink-0 text-white
              group-aria-checked/switch-on-off:block
              forced-colors:text-[Canvas]
            `}
            viewBox='0 0 24 24'
            width='24'
            height='24'
            aria-hidden='true'
          >
            <path
              d='m10.4 16.3-4.1-4.1 1.2-1.3 2.9 2.9 6-6.1 1.3 1.2z'
              fill='currentcolor'
            />
          </svg>
        </span>
      </span>
    </button>
  );
});

export type SwitchModeProps = Omit<ComponentProps<'div'>, 'onChange' | 'aria-describedby'> & {
  leftLabel: string;
  rightLabel: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  'aria-describedby'?: string;
};

export const SwitchMode = (props: SwitchModeProps) => {
  const {
    className,
    leftLabel,
    rightLabel,
    value,
    onChange,
    disabled,
    'aria-describedby': ariaDescribedby,
    ...rest
  } = props;

  const toggledValue = value === leftLabel ? rightLabel : leftLabel;

  const optionClassName = `
    relative flex self-stretch items-center select-none [-webkit-tap-highlight-color:transparent]
    aria-checked:-z-10
    before:absolute before:-inset-y-2 before:inset-x-0
    after:absolute after:inset-0
    first:before:-right-[calc((60+16)/16*1rem)] first:after:-right-[calc((60+16)/16*1rem)]
    last:before:-left-[calc((60+16)/16*1rem)] last:after:-left-[calc((60+16)/16*1rem)]
    focus-visible:outline-none
    focus-visible:after:rounded-full focus-visible:after:outline focus-visible:after:outline-4 focus-visible:after:outline-black focus-visible:after:outline-offset-2 focus-visible:after:ring-2 focus-visible:after:ring-yellow-300
    forced-colors:focus-visible:after:outline-[Highlight]
  `;

  return (
    <div
      className={`
        group/switch-mode isolate inline-flex items-center gap-4
        text-solid-gray-800 text-oln-16N-100
        has-[:disabled]:text-solid-gray-300
        forced-colors:has-[:disabled]:text-[GrayText]
        ${className ?? ''}
      `}
      {...rest}
    >
      <button
        type='button'
        role='switch'
        aria-checked={value === leftLabel}
        aria-describedby={ariaDescribedby}
        disabled={disabled}
        onClick={() => onChange(toggledValue)}
        className={optionClassName}
      >
        {leftLabel}
      </button>
      <span
        className={`
          relative box-border shrink-0 w-[calc(60/16*1rem)] rounded-full p-1.5 pointer-events-none
          group-hover/switch-mode:ring-4 group-hover/switch-mode:ring-solid-gray-420
          group-active/switch-mode:ring-[calc(6/16*1rem)] group-active/switch-mode:ring-solid-gray-600
          group-has-[:disabled]/switch-mode:!ring-0
        `}
        aria-hidden='true'
      >
        <span
          className={`
            box-border block h-4 rounded-8 border-2 border-blue-900 bg-blue-100
            group-hover/switch-mode:border-blue-1100
            group-has-[:disabled]/switch-mode:!border-solid-gray-300 group-has-[:disabled]/switch-mode:!bg-solid-gray-50
            forced-colors:border-[ButtonText] forced-colors:group-hover/switch-mode:border-[ButtonText]
          `}
        />
        <span
          className={`
            absolute inset-x-0 -inset-y-full my-auto box-content size-6 rounded-full border-2 border-white bg-blue-900
            group-hover/switch-mode:bg-blue-1100
            group-has-[button:last-of-type[aria-checked=true]]/switch-mode:left-8
            group-has-[:disabled]/switch-mode:!bg-solid-gray-300
            forced-colors:bg-[ButtonText] forced-colors:border-[Canvas] forced-colors:group-hover/switch-mode:bg-[ButtonText]
            forced-colors:group-has-[:disabled]/switch-mode:!bg-[GrayText]
          `}
        />
      </span>
      <button
        type='button'
        role='switch'
        aria-checked={value === rightLabel}
        aria-describedby={ariaDescribedby}
        disabled={disabled}
        onClick={() => onChange(toggledValue)}
        className={optionClassName}
      >
        {rightLabel}
      </button>
    </div>
  );
};
