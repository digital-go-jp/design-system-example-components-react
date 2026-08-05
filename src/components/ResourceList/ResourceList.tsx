import type { ComponentProps, ElementType } from 'react';
import { Slot } from '../Slot';

// ======================== ResourceList ========================

export type ResourceListVariant = 'list' | 'frame';

export type ResourceListProps = ComponentProps<'div'> & {
  variant: ResourceListVariant;
  interaction?: 'whole';
};

export const ResourceList = ({
  children,
  className,
  variant,
  interaction,
  ...rest
}: ResourceListProps) => (
  <div
    className={`
      group/resource-list
      flex items-center bg-white text-solid-gray-800 [overflow-wrap:anywhere]
      [--border-color:theme(colors.solid-gray.420)]
      data-[style=list]:border data-[style=list]:border-transparent data-[style=list]:border-b-[color:var(--border-color)]
      data-[style=frame]:rounded-16 data-[style=frame]:border data-[style=frame]:border-[color:var(--border-color)]
      has-[:checked:enabled]:bg-key-50 has-[:checked:enabled]:[--border-color:theme(colors.solid-gray.500)]
      has-[:disabled]:[--border-color:theme(colors.solid-gray.300)]
      data-[interaction=whole]:has-[:disabled]:bg-solid-gray-50 data-[interaction=whole]:has-[:disabled]:text-solid-gray-420
      ${className ?? ''}
    `}
    data-style={variant}
    data-interaction={interaction}
    {...rest}
  >
    {children}
  </div>
);

// ======================== ResourceListBody ========================

const bodyClass = `
  relative z-0 flex grow items-center gap-4 rounded-[inherit] outline-offset-[calc(-1/16*1rem)] p-4
  [&:not(:last-child)]:rounded-r-none
  [&:any-link:hover]:outline [&:any-link:hover]:outline-2 [&:any-link:hover]:outline-black [&:any-link:hover]:bg-solid-gray-50
  [&:any-link:focus-visible]:outline [&:any-link:focus-visible]:outline-4 [&:any-link:focus-visible]:outline-black [&:any-link:focus-visible]:outline-offset-[calc(2/16*1rem)] [&:any-link:focus-visible]:ring-[calc(2/16*1rem)] [&:any-link:focus-visible]:ring-yellow-300
  group-data-[interaction=whole]/resource-list:has-[:enabled]:hover:outline group-data-[interaction=whole]/resource-list:has-[:enabled]:hover:outline-2 group-data-[interaction=whole]/resource-list:has-[:enabled]:hover:outline-black group-data-[interaction=whole]/resource-list:has-[:enabled]:hover:bg-solid-gray-50
`;

export type ResourceListBodyProps = { className?: string } & (
  | ({ asChild?: false } & ComponentProps<'div'>)
  | { asChild: true; children: React.ReactNode }
);

export const ResourceListBody = (props: ResourceListBodyProps) => {
  const { asChild, children, className, ...rest } = props;
  const classNames = `${bodyClass} ${className ?? ''}`;

  if (asChild) {
    return (
      <Slot className={classNames} {...rest}>
        {children}
      </Slot>
    );
  }

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

// ======================== ResourceListControl ========================

export type ResourceListControlProps = ComponentProps<'label'>;

export const ResourceListControl = ({ children, className, ...rest }: ResourceListControlProps) => (
  <label
    className={`shrink-0 self-stretch -my-4 -ml-4 py-4 pl-4 flex items-center ${className ?? ''}`}
    {...rest}
  >
    {children}
  </label>
);

// ======================== ResourceListContents ========================

export type ResourceListContentsProps = ComponentProps<'div'>;

export const ResourceListContents = ({
  children,
  className,
  ...rest
}: ResourceListContentsProps) => (
  <div
    className={`w-0 grow shrink flex flex-col gap-1 text-dns-16N-130 [&>*]:max-w-full ${className ?? ''}`}
    {...rest}
  >
    {children}
  </div>
);

// ======================== ResourceListTitle ========================

export type ResourceListTitleAs = 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type ResourceListTitleProps = ComponentProps<'h2'> & {
  as: ResourceListTitleAs;
};

export const ResourceListTitle = ({
  children,
  className,
  as: As,
  ...rest
}: ResourceListTitleProps) => {
  const Tag = As as ElementType;
  return (
    <Tag
      className={`
        text-solid-gray-900 text-std-20B-150
        [a_&]:text-blue-1000 [a_&]:underline [a_&]:underline-offset-[calc(3/16*1rem)] [a_&]:decoration-1
        [&_a]:text-blue-1000 [&_a]:underline [&_a]:underline-offset-[calc(3/16*1rem)] [&_a]:decoration-1
        [&_:is(a,label)]:-my-2 [&_:is(a,label)]:block [&_:is(a,label)]:py-2 [&_:is(a,label)]:isolate
        [a:hover_&]:text-blue-900 [a:hover_&]:decoration-[calc(3/16*1rem)]
        [&_a:hover]:text-blue-900 [&_a:hover]:decoration-[calc(3/16*1rem)]
        [a:active_&]:text-orange-800 [a:active_&]:decoration-1
        [&_a:active]:text-orange-800 [&_a:active]:decoration-1
        [&_a:focus-visible]:my-0 [&_a:focus-visible]:py-0 [&_a:focus-visible]:outline [&_a:focus-visible]:outline-4 [&_a:focus-visible]:outline-black [&_a:focus-visible]:outline-offset-[calc(2/16*1rem)] [&_a:focus-visible]:rounded-4 [&_a:focus-visible]:bg-yellow-300 [&_a:focus-visible]:ring-[calc(2/16*1rem)] [&_a:focus-visible]:ring-yellow-300
        [&_label]:before:content-[normal] [&_label]:before:absolute [&_label]:before:inset-0 [&_label]:before:z-10 [&_label]:before:rounded-[inherit]
        group-data-[interaction=whole]/resource-list:[&_label]:before:content-['']
        [[data-interaction=whole]:has(:disabled)_&]:text-inherit
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// ======================== ResourceListLabel ========================

export type ResourceListLabelProps = ComponentProps<'div'>;

export const ResourceListLabel = ({ children, className, ...rest }: ResourceListLabelProps) => (
  <div className={`order-first ${className ?? ''}`} {...rest}>
    {children}
  </div>
);

// ======================== ResourceListSupport ========================

export type ResourceListSupportProps = ComponentProps<'div'>;

export const ResourceListSupport = ({ children, className, ...rest }: ResourceListSupportProps) => (
  <div className={className} {...rest}>
    {children}
  </div>
);

// ======================== ResourceListSub ========================

export type ResourceListSubProps = ComponentProps<'div'>;

export const ResourceListSub = ({ children, className, ...rest }: ResourceListSubProps) => (
  <div className={`shrink-0 text-dns-16N-130 ${className ?? ''}`} {...rest}>
    {children}
  </div>
);

// ======================== ResourceListAction ========================

export type ResourceListActionProps = ComponentProps<'div'>;

export const ResourceListAction = ({ children, className, ...rest }: ResourceListActionProps) => (
  <div className={`shrink-0 self-stretch rounded-r-[inherit] ${className ?? ''}`} {...rest}>
    {children}
  </div>
);

// ======================== ResourceListActionButton ========================

export type ResourceListActionButtonProps = Omit<ComponentProps<'button'>, 'type'>;

export const ResourceListActionButton = ({
  children,
  className,
  ...rest
}: ResourceListActionButtonProps) => (
  <button
    type='button'
    className={`
      w-11 h-full flex justify-center items-center rounded-[inherit]
      enabled:hover:outline enabled:hover:outline-2 enabled:hover:outline-black enabled:hover:outline-offset-[calc(-1/16*1rem)] enabled:hover:bg-solid-gray-50
      focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(-3/16*1rem)] focus-visible:bg-yellow-300 focus-visible:shadow-none
      ${className ?? ''}
    `}
    {...rest}
  >
    {children}
  </button>
);
