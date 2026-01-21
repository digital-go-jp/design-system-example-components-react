import {
  Children,
  type ComponentProps,
  forwardRef,
  type HTMLAttributes,
  isValidElement,
  type RefObject,
} from 'react';

export type HeadingSize = '64' | '57' | '45' | '36' | '32' | '28' | '24' | '20' | '18' | '16';
export type RuleSize = '8' | '6' | '4' | '2';
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const sizeClasses: Record<HeadingSize, string> = {
  '64': 'text-dsp-64B-140 [--shoulder-size:calc(28/16*1rem)] [--shoulder-line-height:1.5] [--shoulder-letter-spacing:0.01em]',
  '57': 'text-dsp-57B-140 [--shoulder-size:calc(24/16*1rem)] [--shoulder-line-height:1.5] [--shoulder-letter-spacing:0.02em]',
  '45': 'text-std-45B-140 [--shoulder-size:calc(22/16*1rem)] [--shoulder-line-height:1.5] [--shoulder-letter-spacing:0.02em]',
  '36': 'text-std-36B-140 [--shoulder-size:calc(20/16*1rem)] [--shoulder-line-height:1.5] [--shoulder-letter-spacing:0.02em]',
  '32': 'text-std-32B-150 [--shoulder-size:calc(18/16*1rem)] [--shoulder-line-height:1.6] [--shoulder-letter-spacing:0.02em]',
  '28': 'text-std-28B-150 [--shoulder-size:calc(16/16*1rem)] [--shoulder-line-height:1.7] [--shoulder-letter-spacing:0.01em]',
  '24': 'text-std-24B-150 [--shoulder-size:calc(16/16*1rem)] [--shoulder-line-height:1.7] [--shoulder-letter-spacing:0.02em]',
  '20': 'text-std-20B-150 [--shoulder-size:calc(16/16*1rem)] [--shoulder-line-height:1.7] [--shoulder-letter-spacing:0.02em]',
  '18': 'text-std-18B-160 [--shoulder-size:calc(16/16*1rem)] [--shoulder-line-height:1.7] [--shoulder-letter-spacing:0.02em]',
  '16': 'text-std-16B-170 [--shoulder-size:calc(16/16*1rem)] [--shoulder-line-height:1.7] [--shoulder-letter-spacing:0.02em]',
};

const ruleClasses: Record<RuleSize, string> = {
  '8': 'border-b-[calc(8/16*1rem)] pb-8',
  '6': 'border-b-[calc(6/16*1rem)] pb-6',
  '4': 'border-b-[calc(4/16*1rem)] pb-4',
  '2': 'border-b-[calc(2/16*1rem)] pb-2',
};

const chipClasses = `
  relative pl-[calc(1em/3+0.5em)]
  before:content-[''] before:absolute before:left-0 before:w-[calc(1em/3)] before:bg-blue-900 before:top-[0.2em] before:bottom-[0.1em]
  supports-[top:1lh]:before:top-[calc(0.5lh-0.45em)] supports-[top:1lh]:before:bottom-[calc(0.5lh-0.55em)]
  forced-colors:before:bg-[CanvasText]
`;

const chipShoulderClasses =
  'before:!top-[calc((var(--shoulder-size)*(var(--shoulder-line-height)-1))/2)]';

export type HeadingShoulderProps = ComponentProps<'p'>;

export const HeadingShoulder = (props: HeadingShoulderProps) => {
  const { className, children, ...rest } = props;
  return (
    <p
      className={`
        font-bold text-[length:var(--shoulder-size)] leading-[var(--shoulder-line-height)] tracking-[var(--shoulder-letter-spacing)]
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </p>
  );
};

export type HeadingTitleProps = ComponentProps<'h2'> & {
  level: HeadingLevel;
};

export const HeadingTitle = forwardRef<HTMLHeadingElement, HeadingTitleProps>((props, ref) => {
  const { level: Component, className, children, ...rest } = props;
  return (
    <Component ref={ref} className={`${className ?? ''}`} {...rest}>
      {children}
    </Component>
  );
});

export type HeadingProps = HTMLAttributes<HTMLElement> & {
  size: HeadingSize;
  hasChip?: boolean;
  rule?: RuleSize;
};

export const Heading = forwardRef<HTMLElement, HeadingProps>((props, ref) => {
  const { size, hasChip, rule, className, children, ...rest } = props;

  const hasShoulder = Children.toArray(children).some(
    (child) => isValidElement(child) && child.type === HeadingShoulder,
  );

  const Component = hasShoulder ? 'hgroup' : 'div';

  return (
    <Component
      ref={ref as RefObject<HTMLDivElement>}
      className={`
        text-solid-gray-800
        ${sizeClasses[size]}
        ${hasChip ? chipClasses : ''}
        ${hasChip && hasShoulder ? chipShoulderClasses : ''}
        ${rule ? `border-solid border-blue-900 ${ruleClasses[rule]}` : ''}
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </Component>
  );
});
