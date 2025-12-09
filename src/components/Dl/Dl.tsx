import type { ComponentProps } from 'react';

type DlProps = ComponentProps<'dl'> & {
  marker?: 'none' | 'bullet';
};

export const Dl = (props: DlProps) => {
  const { children, className, marker, ...rest } = props;
  return (
    <dl className={`group/dl grid gap-y-2 ${className ?? ''}`} data-marker={marker} {...rest}>
      {children}
    </dl>
  );
};

type DtProps = ComponentProps<'dt'>;

export const Dt = (props: DtProps) => {
  const { children, className, ...rest } = props;
  return (
    <dt
      className={`font-bold group-data-[marker=bullet]/dl:ml-8 group-data-[marker=bullet]/dl:list-item group-data-[marker=bullet]/dl:list-disc ${className ?? ''}`}
      {...rest}
    >
      {children}
    </dt>
  );
};

type DdProps = ComponentProps<'dd'>;

export const Dd = (props: DdProps) => {
  const { children, className, ...rest } = props;
  return (
    <dd className={`ml-8 ${className ?? ''}`} {...rest}>
      {children}
    </dd>
  );
};
