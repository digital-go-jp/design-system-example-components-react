import type { ComponentProps } from 'react';

export type HorizontalMenuProps = ComponentProps<'ul'>;

export const HorizontalMenu = (props: HorizontalMenuProps) => {
  const { children, className, ...rest } = props;
  return (
    <ul
      className={`flex items-stretch border-b border-solid-gray-420 text-solid-gray-900 text-dns-16B-130 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </ul>
  );
};

export type HorizontalMenuItemProps = ComponentProps<'li'>;

export const HorizontalMenuItem = (props: HorizontalMenuItemProps) => {
  const { children, className, ...rest } = props;
  return (
    <li className={`relative flex items-stretch ${className ?? ''}`} {...rest}>
      {children}
    </li>
  );
};

const itemInnerBaseStyle = [
  'group/horizontal-menu-item',
  'relative flex items-center gap-1',
  'min-h-16 px-5 py-4',
  // Hover
  'hover:bg-solid-gray-50',
  "hover:after:absolute hover:after:inset-x-0 hover:after:bottom-0 hover:after:border-b-2 hover:after:border-black hover:after:content-['']",
  // Current
  "[&[aria-current]:not([aria-current='false'])]:bg-white [&[aria-current]:not([aria-current='false'])]:text-key-1000",
  "[&[aria-current]:not([aria-current='false'])]:after:absolute [&[aria-current]:not([aria-current='false'])]:after:inset-x-0 [&[aria-current]:not([aria-current='false'])]:after:bottom-0 [&[aria-current]:not([aria-current='false'])]:after:border-b-4 [&[aria-current]:not([aria-current='false'])]:after:border-key-900 [&[aria-current]:not([aria-current='false'])]:after:content-['']",
  // Current + hover
  "[&[aria-current]:not([aria-current='false'])]:hover:text-key-900 [&[aria-current]:not([aria-current='false'])]:hover:underline [&[aria-current]:not([aria-current='false'])]:hover:underline-offset-[calc(3/16*1rem)] [&[aria-current]:not([aria-current='false'])]:hover:decoration-[calc(1/16*1rem)]",
  "[&[aria-current]:not([aria-current='false'])]:hover:after:border-b-4 [&[aria-current]:not([aria-current='false'])]:hover:after:border-key-900",
  // Focus visible
  'focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:rounded-4 focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300',
  "[&[aria-current]:not([aria-current='false'])]:focus-visible:bg-white",
].join(' ');

export type HorizontalMenuItemLinkProps = ComponentProps<'a'>;

export const HorizontalMenuItemLink = (props: HorizontalMenuItemLinkProps) => {
  const { children, className, ...rest } = props;
  return (
    <a className={`${itemInnerBaseStyle} ${className ?? ''}`} {...rest}>
      {children}
    </a>
  );
};

export type HorizontalMenuItemButtonProps = Omit<ComponentProps<'button'>, 'type'>;

export const HorizontalMenuItemButton = (props: HorizontalMenuItemButtonProps) => {
  const { children, className, ...rest } = props;
  return (
    <button type='button' className={`${itemInnerBaseStyle} ${className ?? ''}`} {...rest}>
      {children}
    </button>
  );
};
