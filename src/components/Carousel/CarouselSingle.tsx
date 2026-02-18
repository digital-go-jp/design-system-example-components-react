import type { ComponentProps } from 'react';

export type CarouselSingleProps = ComponentProps<'div'>;

export const CarouselSingle = (props: CarouselSingleProps) => {
  const { className, children, ...rest } = props;
  return (
    <div className={`${className ?? ''}`} {...rest}>
      {children}
    </div>
  );
};

export type CarouselSingleLinkProps = ComponentProps<'a'>;

export const CarouselSingleLink = (props: CarouselSingleLinkProps) => {
  const { className, href, children, ...rest } = props;

  if (href) {
    return (
      <a
        className={`
          relative block w-fit
          after:absolute after:pointer-events-none
          hover:outline hover:outline-4 hover:outline-blue-900 hover:-outline-offset-[calc(2/16*1rem)]
          hover:after:inset-[2px] hover:after:ring-[calc(2/16*1rem)] hover:after:ring-inset hover:after:ring-white
          focus-visible:overflow-hidden focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:-outline-offset-[calc(2/16*1rem)] focus-visible:rounded-8
          focus-visible:after:inset-[2px] focus-visible:after:ring-[calc(2/16*1rem)] focus-visible:after:ring-inset focus-visible:after:ring-yellow-300 focus-visible:after:rounded-6 focus-visible:after:pointer-events-none
          ${className ?? ''}
        `}
        href={href}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return <span className={`relative block w-fit ${className ?? ''}`}>{children}</span>;
};

export type CarouselSingleImageProps = ComponentProps<'img'>;

export const CarouselSingleImage = (props: CarouselSingleImageProps) => {
  const { className, alt, ...rest } = props;
  return (
    <img
      className={`block max-w-full h-auto outline outline-2 outline-black -outline-offset-2 ${className ?? ''}`}
      alt={alt}
      {...rest}
    />
  );
};
