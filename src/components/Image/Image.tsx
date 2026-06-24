import type { ComponentProps } from 'react';

export type ImageProps = ComponentProps<'figure'> & {
  fullWidth?: boolean;
};

export const Image = (props: ImageProps) => {
  const { children, className, fullWidth, ...rest } = props;
  return (
    <figure
      className={`group/image w-fit data-[full-width]:w-full ${className ?? ''}`}
      data-full-width={fullWidth ? '' : undefined}
      {...rest}
    >
      {children}
    </figure>
  );
};

export type ImageAreaProps = ComponentProps<'div'> & {
  bordered?: boolean;
};

export const ImageArea = (props: ImageAreaProps) => {
  const { children, className, bordered, ...rest } = props;
  return (
    <div
      className={`[&_img]:block [&_img]:max-w-full [&_img]:h-auto group-data-[full-width]/image:[&_img]:w-full data-[bordered]:outline data-[bordered]:outline-1 data-[bordered]:outline-solid-gray-420 data-[bordered]:[outline-offset:-1px] ${className ?? ''}`}
      data-bordered={bordered ? '' : undefined}
      {...rest}
    >
      {children}
    </div>
  );
};

export type ImageAreaLinkProps = Omit<ComponentProps<'a'>, 'href'> & { href: string };

export const ImageAreaLink = (props: ImageAreaLinkProps) => {
  const { children, className, ...rest } = props;
  return (
    <a
      className={`block [&_img]:block [&_img]:max-w-full [&_img]:h-auto group-data-[full-width]/image:[&_img]:w-full outline outline-1 outline-blue-900 [outline-offset:-1px] hover:outline-4 hover:[outline-offset:-4px] focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300 ${className ?? ''}`}
      {...rest}
    >
      {children}
    </a>
  );
};

export type ImageCaptionStyle = 'dashed' | 'solid';

export type ImageCaptionProps = ComponentProps<'figcaption'> & {
  captionStyle?: ImageCaptionStyle;
};

export const ImageCaption = (props: ImageCaptionProps) => {
  const { children, className, captionStyle, ...rest } = props;
  return (
    <figcaption
      className={`mt-2 [contain:inline-size] py-2 px-6 text-solid-gray-900 text-std-16N-170 data-[style=dashed]:border data-[style=dashed]:border-dashed data-[style=dashed]:border-solid-gray-700 data-[style=solid]:border data-[style=solid]:border-solid-gray-420 ${className ?? ''}`}
      data-style={captionStyle}
      {...rest}
    >
      {children}
    </figcaption>
  );
};
