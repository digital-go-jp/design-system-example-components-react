import { type ComponentProps, type CSSProperties, cloneElement } from 'react';
import { Slot } from '../Slot';

// --- StepNavigation (root) ---

export type StepNavigationProps = {
  orientation?: 'horizontal' | 'vertical';
  size?: 'normal' | 'small';
  className?: string;
  style?: CSSProperties;
} & (({ asChild?: false } & ComponentProps<'div'>) | { asChild: true; children: React.ReactNode });

export const StepNavigation = (props: StepNavigationProps) => {
  const {
    asChild,
    orientation = 'horizontal',
    size = 'normal',
    children,
    className,
    style,
    ...rest
  } = props;

  const Component = asChild ? Slot : 'div';

  const mergedStyle: CSSProperties = {
    ...style,
    ['--step-number-size' as string]: size === 'normal' ? 'calc(44/16*1rem)' : 'calc(32/16*1rem)',
    ['--step-number-margin' as string]: size === 'normal' ? 'calc(4/16*1rem)' : 'calc(3/16*1rem)',
    ['--step-outline-width' as string]: size === 'normal' ? 'calc(2/16*1rem)' : 'calc(1/16*1rem)',
    ['--step-title-margin' as string]: size === 'normal' ? 'calc(24/16*1rem)' : 'calc(16/16*1rem)',
    ['--step-description-margin' as string]:
      size === 'normal' ? 'calc(8/16*1rem)' : 'calc(4/16*1rem)',
  };

  return (
    <Component
      className={`
        group/step-nav
        text-solid-gray-800 text-std-16N-170 [overflow-wrap:anywhere]
        data-[orientation=horizontal]:overflow-x-auto data-[orientation=horizontal]:pt-[calc(6/16*1rem)] data-[orientation=horizontal]:pb-[calc(6/16*1rem)]
        ${className ?? ''}
      `}
      data-orientation={orientation}
      data-size={size}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </Component>
  );
};

// --- StepNavigationList ---

export type StepNavigationListProps = ComponentProps<'ul'>;

export const StepNavigationList = ({ children, className, ...rest }: StepNavigationListProps) => {
  return (
    <ul
      className={`
        flex group-data-[orientation=vertical]/step-nav:flex-col
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </ul>
  );
};

// --- StepNavigationStep ---

export type StepNavigationStepState = 'reached' | 'completed' | 'editing' | 'error' | 'skipped';

export type StepNavigationStepProps = ComponentProps<'li'> & {
  state?: StepNavigationStepState;
  first?: boolean;
  last?: boolean;
};

export const StepNavigationStep = ({
  state,
  first,
  last,
  children,
  className,
  'aria-current': ariaCurrent,
  ...rest
}: StepNavigationStepProps) => {
  return (
    <li
      className={`
        group/step relative
        group-data-[orientation=horizontal]/step-nav:w-[calc(var(--step-width,320)/16*1rem)] group-data-[orientation=horizontal]/step-nav:min-w-[calc(var(--step-min-width,160)/16*1rem)] group-data-[orientation=horizontal]/step-nav:px-4
        group-data-[orientation=vertical]/step-nav:flex-1 group-data-[orientation=vertical]/step-nav:pb-6 group-data-[orientation=vertical]/step-nav:last:pb-0

        ${className ?? ''}
      `}
      data-state={state}
      data-first={first ? '' : undefined}
      data-last={last ? '' : undefined}
      data-current={ariaCurrent != null && ariaCurrent !== false && ariaCurrent !== 'false' ? '' : undefined}
      aria-current={ariaCurrent}
      {...rest}
    >
      {!first && (
        <>
          <span
            aria-hidden='true'
            className='
              hidden absolute -z-10 top-[calc(var(--step-number-size)/2+var(--step-number-margin))] right-1/2 w-1/2 border-b border-current
              group-data-[orientation=horizontal]/step-nav:block
            '
          />
          <span
            aria-hidden='true'
            className='
              hidden absolute -z-10 top-0 left-[calc(var(--step-number-size)/2+var(--step-number-margin))] h-8 border-r border-current
              group-data-[orientation=vertical]/step-nav:block
            '
          />
        </>
      )}
      {!last && (
        <>
          <span
            aria-hidden='true'
            className='
              hidden absolute -z-10 top-[calc(var(--step-number-size)/2+var(--step-number-margin))] left-1/2 w-1/2 border-b border-current
              group-data-[orientation=horizontal]/step-nav:block
            '
          />
          <span
            aria-hidden='true'
            className='
              hidden absolute -z-10 bottom-0 left-[calc(var(--step-number-size)/2+var(--step-number-margin))] h-[calc(100%-32/16*1rem)] border-r border-current
              group-data-[orientation=vertical]/step-nav:block
            '
          />
        </>
      )}
      {children}
    </li>
  );
};

// --- StepNavigationStepHeader ---

export type StepNavigationStepHeaderProps = {
  className?: string;
} & (
  | ({ asChild?: false } & ComponentProps<'span'>)
  | { asChild: true; children: React.ReactElement }
);

export const StepNavigationStepHeader = (props: StepNavigationStepHeaderProps) => {
  const { asChild, children, className, ...rest } = props;

  const classNames = `
    group/step-header block text-pretty
    focus-visible:outline-none focus-visible:shadow-none
    data-[interactive]:underline data-[interactive]:decoration-[calc(1/16*1rem)] data-[interactive]:underline-offset-[calc(3/16*1rem)]
    data-[interactive]:hover:decoration-[calc(3/16*1rem)] data-[interactive]:hover:cursor-pointer
    group-data-[orientation=horizontal]/step-nav:w-full group-data-[orientation=horizontal]/step-nav:text-center
    group-data-[orientation=vertical]/step-nav:relative group-data-[orientation=vertical]/step-nav:flex group-data-[orientation=vertical]/step-nav:items-baseline group-data-[orientation=vertical]/step-nav:gap-x-4 group-data-[orientation=vertical]/step-nav:text-left
    ${className ?? ''}
  `;

  const srOnly = <span className='sr-only'>ステップ</span>;

  if (asChild) {
    const child = children as React.ReactElement<{
      children?: React.ReactNode;
      disabled?: boolean;
    }>;
    const isDisabled = child.props.disabled === true;

    return (
      <Slot className={classNames} data-interactive={isDisabled ? undefined : ''} {...rest}>
        {cloneElement(
          child,
          {},
          <>
            {srOnly}
            {child.props.children}
          </>,
        )}
      </Slot>
    );
  }

  return (
    <span className={classNames} {...rest}>
      {srOnly}
      {children}
    </span>
  );
};

// --- StepNavigationNumber ---

export type StepNavigationNumberProps = ComponentProps<'span'>;

export const StepNavigationNumber = ({
  children,
  className,
  ...rest
}: StepNavigationNumberProps) => {
  return (
    <span
      className={`
        relative grid place-content-center w-fit rounded-full bg-white border-current
        [text-decoration:inherit] [text-decoration-thickness:inherit]
        px-[calc(2/16*1rem)] pb-[calc(2/16*1rem)]

        h-[var(--step-number-size)] min-w-[var(--step-number-size)] m-[var(--step-number-margin)] border-2 text-std-20B-150
        group-data-[size=small]/step-nav:border group-data-[size=small]/step-nav:text-[calc(16/16*1rem)]

        group-data-[orientation=horizontal]/step-nav:mx-auto
        group-data-[orientation=vertical]/step-nav:shrink-0

        group-data-[state=reached]/step:bg-solid-gray-800 group-data-[state=reached]/step:text-white group-data-[state=reached]/step:border-solid-gray-800
        group-data-[state=completed]/step:bg-solid-gray-50
        group-data-[state=error]/step:text-error-1
        group-data-[state=skipped]/step:border-dashed group-data-[state=skipped]/step:border

        forced-colors:group-data-[state=reached]/step:bg-[CanvasText]
        forced-colors:group-data-[state=reached]/step:text-[Canvas]
        forced-colors:group-data-[state=reached]/step:[forced-color-adjust:none]

        group-data-[current]/step:outline group-data-[current]/step:outline-solid-gray-800
        group-data-[current]/step:outline-offset-[calc(2/16*1rem)]
        group-data-[current]/step:shadow-[0_0_0_calc(2/16*1rem)_white]
        group-data-[current]/step:[outline-width:var(--step-outline-width)]

        [[data-interactive]:hover_&]:outline [[data-interactive]:hover_&]:[outline-width:1px]
        group-data-[state=reached]/step:[[data-interactive]:hover_&]:outline-solid-gray-800
        group-data-[state=skipped]/step:[[data-interactive]:hover_&]:outline-none
        group-data-[state=skipped]/step:[[data-interactive]:hover_&]:border-2

        group-focus-visible/step-header:!outline group-focus-visible/step-header:![outline-width:calc(4/16*1rem)]
        group-focus-visible/step-header:!outline-black
        group-focus-visible/step-header:!outline-offset-[calc(2/16*1rem)]
        group-focus-visible/step-header:!ring-[calc(2/16*1rem)] group-focus-visible/step-header:!ring-yellow-300

        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </span>
  );
};

// --- StepNavigationStateIndicator ---

const CompletedIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' aria-hidden={true}>
    <circle cx='12' cy='12' r='12' fill='#666' className='forced-colors:fill-[CanvasText]' />
    <path
      d='M10 17.5 19.8 8l-1.5-1.5-8.1 8-4.1-4L4.5 12l5.6 5.5Z'
      fill='#fff'
      className='forced-colors:fill-[Canvas]'
    />
  </svg>
);

const EditingIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' aria-hidden={true}>
    <path
      d='M5.8 20c-.5 0-1-.2-1.3-.5-.3-.4-.5-.8-.5-1.3V5.6c0-.5.2-.9.5-1.3.4-.3.8-.5 1.3-.5h8L12 5.6H5.8v12.6h12.6V12l1.8-1.8v8c0 .5-.2 1-.5 1.3-.4.3-.8.5-1.3.5H5.8Zm3.6-5.4v-3.8l8.3-8.3a1.8 1.8 0 0 1 2.5 0l1.3 1.3.4.6a1.7 1.7 0 0 1 0 1.3c-.1.3-.2.5-.4.6l-8.3 8.3H9.4Zm1.8-1.8h1.3l5.2-5.2L17 7l-.7-.7-5.2 5.2v1.3Z'
      fill='#333'
      className='forced-colors:fill-[CanvasText]'
    />
  </svg>
);

const ErrorIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' aria-hidden={true}>
    <path
      d='M1 21 12 2l11 19H1Zm3.5-2h15L12 6 4.5 19Zm7.5-1c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7a1 1 0 0 0-.3-.7 1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3 1 1 0 0 0-.3.7c0 .3.1.5.3.7.2.2.4.3.7.3Zm-1-3h2v-5h-2v5Z'
      fill='#ec0000'
      className='forced-colors:fill-[CanvasText]'
    />
  </svg>
);

const stateIconClassName = `
  absolute rounded-full bg-white
  top-[calc(-10/16*1rem)] left-[calc(50%+6/16*1rem)]
  group-data-[size=small]/step-nav:top-[calc(-9/16*1rem)] group-data-[size=small]/step-nav:left-[calc(50%+4/16*1rem)]
  [&>svg]:block [&>svg]:max-w-none
  group-data-[size=small]/step-nav:[&_svg]:w-5 group-data-[size=small]/step-nav:[&_svg]:h-5
`;

const stateLabelClassName = `
  absolute top-[calc(100%+0.5rem)] -inset-x-full bottom-0 mx-auto my-0
  w-[4em] h-[1.2em] bg-white text-dns-14N-120 text-center
`;

export type StepNavigationStateIndicatorProps = ComponentProps<'span'> & {
  state?: StepNavigationStepState;
};

export const StepNavigationStateIndicator = ({
  state,
  className,
  ...rest
}: StepNavigationStateIndicatorProps) => {
  return (
    <span className={className ?? ''} {...rest}>
      {state === 'completed' && (
        <>
          <span className={stateIconClassName}>
            <CompletedIcon />
          </span>
          <span className='sr-only'>完了</span>
        </>
      )}

      {state === 'editing' && (
        <>
          <span className={stateIconClassName}>
            <EditingIcon />
          </span>
          <span className={stateLabelClassName}>編集中</span>
        </>
      )}

      {state === 'error' && (
        <>
          <span className={stateIconClassName}>
            <ErrorIcon />
          </span>
          <span className={stateLabelClassName}>エラー</span>
        </>
      )}

      {state === 'skipped' && <span className='sr-only'>スキップされました</span>}
    </span>
  );
};

// --- StepNavigationTitle ---

export type StepNavigationTitleProps = ComponentProps<'span'>;

export const StepNavigationTitle = ({ children, className, ...rest }: StepNavigationTitleProps) => {
  return (
    <span
      className={`
        block font-bold [text-decoration-thickness:inherit]
        text-std-18B-160
        group-data-[size=small]/step-nav:text-std-16B-170
        group-data-[orientation=horizontal]/step-nav:mt-[var(--step-title-margin)]
        group-data-[orientation=vertical]/step-nav:py-[calc(var(--step-number-size)/2+var(--step-number-margin)-0.875rem)]
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </span>
  );
};

// --- StepNavigationDescription ---

export type StepNavigationDescriptionProps = ComponentProps<'p'>;

export const StepNavigationDescription = ({
  children,
  className,
  ...rest
}: StepNavigationDescriptionProps) => {
  return (
    <p
      className={`
        mt-[var(--step-description-margin)]
        group-data-[orientation=horizontal]/step-nav:text-center
        group-data-[orientation=vertical]/step-nav:mt-[calc(var(--step-description-margin)-(var(--step-number-size)/2+var(--step-number-margin)-0.875rem))]
        group-data-[orientation=vertical]/step-nav:pl-[calc(var(--step-number-size)+var(--step-number-margin)*2+1rem)]
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </p>
  );
};
