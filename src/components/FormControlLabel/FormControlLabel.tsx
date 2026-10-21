import type { ComponentProps, ElementType } from 'react';

export type FormControlLabelSize = 'sm' | 'md' | 'lg';

export type FormControlLabelProps = (
  | (ComponentProps<'div'> & { as?: 'div' })
  | (ComponentProps<'fieldset'> & { as: 'fieldset' })
) & {
  size?: FormControlLabelSize;
};

export const FormControlLabel = (props: FormControlLabelProps) => {
  const { as: As = 'div', children, className, size = 'md', ...rest } = props;
  const Tag = As as ElementType;

  return (
    <Tag
      className={`
        flex flex-col text-std-16N-170 text-solid-gray-800
        data-[size=sm]:gap-y-1 data-[size=md]:gap-y-2 data-[size=lg]:gap-y-2
        [&>legend]:mb-2
        ${className ?? ''}
      `}
      data-size={size}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export type LabelSize = 'lg' | 'md' | 'sm';

export type LabelProps = ComponentProps<'label'> & {
  size?: LabelSize;
};

export const Label = (props: LabelProps) => {
  const { children, className, size = 'md', ...rest } = props;

  return (
    <label
      className={`
        self-start text-solid-gray-800
        data-[size=sm]:text-std-16B-170 data-[size=md]:text-std-17B-170 data-[size=lg]:text-std-18B-160
        ${className ?? ''}
      `}
      data-size={size}
      {...rest}
    >
      {children}
    </label>
  );
};

export type LegendSize = 'lg' | 'md' | 'sm';

export type LegendProps = ComponentProps<'legend'> & {
  size?: LegendSize;
};

export const Legend = (props: LegendProps) => {
  const { children, className, size = 'md', ...rest } = props;

  return (
    <legend
      className={`
        inline self-start text-solid-gray-800
        data-[size=sm]:text-std-16B-170 data-[size=md]:text-std-17B-170 data-[size=lg]:text-std-18B-160
        ${className ?? ''}
      `}
      data-size={size}
      {...rest}
    >
      {children}
    </legend>
  );
};

export type RequirementBadgeProps = ComponentProps<'span'> & {
  isOptional?: boolean;
};

export const RequirementBadge = (props: RequirementBadgeProps) => {
  const { children, className, isOptional, ...rest } = props;

  return (
    <span
      className={`
        ml-1 text-std-16N-170 text-error-1 before:content-['_']
        data-[is-optional]:text-solid-gray-800
        ${className ?? ''}
      `}
      data-is-optional={isOptional || undefined}
      {...rest}
    >
      {children}
    </span>
  );
};

export const StatusBadge = (props: ComponentProps<'span'>) => {
  const { className, children, ...rest } = props;

  return (
    <span
      className={`ml-1 inline-block rounded-8 bg-solid-gray-536 p-2 text-oln-16N-100 text-white outline outline-1 outline-transparent ${className ?? ''}`}
      {...rest}
    >
      {children}
    </span>
  );
};

export type SupportTextProps = ComponentProps<'p'>;

export const SupportText = (props: SupportTextProps) => {
  const { children, className, ...rest } = props;

  return (
    <p className={`text-std-16N-170 text-solid-gray-600 ${className ?? ''}`} {...rest}>
      {children}
    </p>
  );
};
