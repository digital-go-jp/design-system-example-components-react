import type { ComponentProps } from 'react';
import { Slot } from '../Slot';

export type BreadcrumbItemProps = ComponentProps<'li'> & {
  isCurrent?: boolean;
};

export const BreadcrumbItem = ({
  isCurrent = false,
  children,
  className,
  ...rest
}: BreadcrumbItemProps) => {
  if (isCurrent) {
    return (
      <li
        aria-current='page'
        className={`inline break-words text-oln-16N-100 ${className ?? ''}`}
        {...rest}
      >
        {children}
      </li>
    );
  }
  return (
    <li className={`inline break-words ${className ?? ''}`}>
      {children}
      <svg
        aria-hidden={true}
        className='mx-2 inline'
        fill='none'
        height='12'
        viewBox='0 0 12 12'
        width='12'
      >
        <path
          d='M4.50078 1.2998L3.80078 1.9998L7.80078 5.9998L3.80078 9.9998L4.50078 10.6998L9.20078 5.9998L4.50078 1.2998Z'
          fill='currentColor'
        />
      </svg>
    </li>
  );
};

export const breadcrumbLinkStyle = `
  text-blue-1000 text-oln-16N-100 underline underline-offset-[calc(3/16*1rem)]
  hover:text-blue-900 hover:decoration-[calc(3/16*1rem)]
  active:text-orange-800 active:decoration-1
  focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:text-blue-1000 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300
`;

export type BreadcrumbLinkProps = {
  className?: string;
} & (({ asChild?: false } & ComponentProps<'a'>) | { asChild: true; children: React.ReactNode });

export const BreadcrumbLink = (props: BreadcrumbLinkProps) => {
  const { asChild, children, className, ...rest } = props;

  if (asChild) {
    return (
      <Slot className={`${breadcrumbLinkStyle} ${className ?? ''}`} {...rest}>
        {children}
      </Slot>
    );
  }

  return (
    <a className={`${breadcrumbLinkStyle} ${className ?? ''}`} {...rest}>
      {children}
    </a>
  );
};

export type BreadcrumbListProps = ComponentProps<'ol'>;

export const BreadcrumbList = (props: BreadcrumbListProps) => {
  const { children, className, ...rest } = props;

  return (
    <ol className={`inline ${className ?? ''}`} {...rest}>
      {children}
    </ol>
  );
};

export type BreadcrumbsLabelProps = ComponentProps<'span'>;

export const BreadcrumbsLabel = (props: BreadcrumbsLabelProps) => {
  const { children, className, ...rest } = props;

  return (
    <span className={`${className ?? ''}`} {...rest}>
      {children}
    </span>
  );
};

export type BreadcrumbsProps = ComponentProps<'nav'>;

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { children, className, ...rest } = props;

  return (
    <nav className={`${className ?? ''}`} {...rest}>
      {children}
    </nav>
  );
};
