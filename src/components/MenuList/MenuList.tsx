import type { ComponentProps, CSSProperties } from 'react';

export type MenuListType = 'standard' | 'box';
export type MenuListSize = 'regular' | 'small';

export type MenuListProps = ComponentProps<'ul'> & {
  indent?: number;
};

export const MenuList = (props: MenuListProps) => {
  const { children, className, indent, style, ...rest } = props;

  return (
    <ul
      className={`relative z-0 text-solid-gray-800 text-dns-16N-130 ${className ?? ''}`}
      style={
        indent !== undefined
          ? ({ ...style, '--menu-list-indentation': indent } as CSSProperties)
          : style
      }
      {...rest}
    >
      {children}
    </ul>
  );
};

export type MenuListItemProps = ComponentProps<'li'>;

export const MenuListItem = (props: MenuListItemProps) => {
  const { children, ...rest } = props;
  return <li {...rest}>{children}</li>;
};

const menuListItemBaseStyle = `
  group/menu-list-item flex items-center gap-x-2 w-[stretch] px-4
  data-[size=regular]:min-h-11 data-[size=regular]:py-2.5
  data-[size=small]:min-h-9 data-[size=small]:py-1.5 data-[size=small]:text-dns-16N-120
  data-[type=standard]:ml-[calc(1rem*var(--menu-list-indentation,0))]
  data-[type=standard]:data-[size=regular]:rounded-8
  data-[type=standard]:data-[size=small]:rounded-4
  data-[type=box]:pl-[calc(1rem+1rem*var(--menu-list-indentation,0))]
  data-[current]:bg-key-100 data-[current]:text-key-1000 data-[current]:font-bold
  [&:has(+_*_[data-current])]:bg-key-50 [&:has(+_*_[data-current])]:text-key-1000
  hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
  data-[current]:hover:bg-key-50 data-[current]:hover:text-key-900
  [&:has(+_*_[data-current]):hover]:bg-key-50 [&:has(+_*_[data-current]):hover]:text-key-900
  focus-visible:relative focus-visible:z-[1] focus-visible:bg-yellow-300
  data-[type=standard]:focus-visible:outline data-[type=standard]:focus-visible:outline-4 data-[type=standard]:focus-visible:outline-black data-[type=standard]:focus-visible:outline-offset-[calc(2/16*1rem)] data-[type=standard]:focus-visible:ring-[calc(2/16*1rem)] data-[type=standard]:focus-visible:ring-yellow-300
  data-[type=box]:focus-visible:outline data-[type=box]:focus-visible:outline-4 data-[type=box]:focus-visible:outline-black data-[type=box]:focus-visible:-outline-offset-4 data-[type=box]:focus-visible:ring-[calc(6/16*1rem)] data-[type=box]:focus-visible:ring-inset data-[type=box]:focus-visible:ring-yellow-300
  data-[current]:focus-visible:bg-key-100
  [&:has(+_*_[data-current]):focus-visible]:bg-key-50
`;

type MenuListItemSharedAttrs = {
  type: MenuListType;
  size: MenuListSize;
  current?: boolean;
};

export type MenuListItemButtonProps = Omit<ComponentProps<'button'>, 'type'> &
  MenuListItemSharedAttrs;

export const MenuListItemButton = (props: MenuListItemButtonProps) => {
  const { children, className, type, size, current, ...rest } = props;

  return (
    <button
      type='button'
      data-type={type}
      data-size={size}
      data-current={current ? '' : undefined}
      className={`${menuListItemBaseStyle} ${className ?? ''}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export type MenuListItemLinkProps = Omit<ComponentProps<'a'>, 'type'> & MenuListItemSharedAttrs;

export const MenuListItemLink = (props: MenuListItemLinkProps) => {
  const { children, className, type, size, current, ...rest } = props;

  return (
    <a
      data-type={type}
      data-size={size}
      data-current={current ? '' : undefined}
      className={`${menuListItemBaseStyle} ${className ?? ''}`}
      {...rest}
    >
      {children}
    </a>
  );
};
