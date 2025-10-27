import type { ComponentProps } from 'react';
import { Slot } from '../Slot';

export const linkDefaultStyle = 'text-blue-1000 underline underline-offset-[calc(3/16*1rem)]';
export const linkVisitedStyle = 'visited:text-magenta-900';
export const linkHoverStyle = 'hover:text-blue-1000 hover:decoration-[calc(3/16*1rem)]';
export const linkFocusStyle =
  'focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:text-blue-1000 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300';
export const linkActiveStyle = 'active:text-orange-800 active:decoration-1';

export const linkStyle = `
  ${linkDefaultStyle}
  ${linkVisitedStyle}
  ${linkHoverStyle}
  ${linkFocusStyle}
  ${linkActiveStyle}
`;

export type LinkProps = {
  className?: string;
  icon?: LinkExternalLinkIconProps;
} & (({ asChild?: false } & ComponentProps<'a'>) | { asChild: true; children: React.ReactNode });

export const Link = (props: LinkProps) => {
  const { asChild, children, className, icon, ...rest } = props;

  if (asChild) {
    return (
      <Slot className={`${linkStyle} ${className ?? ''}`} {...rest}>
        {children}
      </Slot>
    );
  }

  return (
    <a className={`${linkStyle} ${className ?? ''}`} {...rest}>
      {children}

      {props.target === '_blank' && <LinkExternalLinkIcon {...icon} />}
    </a>
  );
};

export type LinkExternalLinkIconProps = ComponentProps<'svg'>;

export const LinkExternalLinkIcon = (props: LinkExternalLinkIconProps) => {
  const { className, ...rest } = props;

  return (
    <svg
      aria-label={`${rest['aria-label'] ?? '新規タブで開きます'}`}
      className={`mb-[calc(3/16*1rem)] ml-[calc(3/16*1rem)] inline ${className ?? ''}`}
      fill='none'
      height='17'
      role='img'
      viewBox='0 0 16 17'
      width='16'
    >
      <g>
        <path
          clipRule='evenodd'
          d='M3 13.5H13V9.16667H14V14.5H2V2.5H7.33333V3.5H3V13.5ZM9.33333 3.5V2.5H14V7.16667H13V4.23333L7 10.1667L6.33333 9.5L12.2667 3.5H9.33333Z'
          fillRule='evenodd'
          fill='currentColor'
        />
      </g>
    </svg>
  );
};
