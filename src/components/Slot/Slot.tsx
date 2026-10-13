import { Children, cloneElement, type HTMLAttributes, isValidElement, type ReactNode } from 'react';

type SlotProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
};

export const Slot = (props: SlotProps) => {
  const { children, ...rest } = props;

  // https://react.dev/reference/react/isValidElement
  // https://react.dev/reference/react/cloneElement
  if (isValidElement<HTMLAttributes<HTMLElement>>(children)) {
    return cloneElement(children, {
      ...rest,
      ...children.props,
      className: `${rest.className ?? ''} ${children.props.className ?? ''}`,
    });
  }

  if (Children.count(children) > 1) {
    Children.only(null);
  }

  return null;
};
