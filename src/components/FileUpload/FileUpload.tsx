import { type ComponentProps, forwardRef } from 'react';
import { createPortal } from 'react-dom';

export type FileUploadProps = ComponentProps<'div'> & {
  maxFiles?: number;
  hasError?: boolean;
  droppable?: boolean;
};

export const FileUpload = (props: FileUploadProps) => {
  const { children, className, maxFiles = 1, hasError = false, droppable = false, ...rest } = props;

  const isMultiple = maxFiles > 1;

  return (
    <div
      className={`
        group/file-upload
        text-solid-gray-800 text-std-16N-170 [overflow-wrap:anywhere]
        ${className ?? ''}
      `}
      data-multiple={isMultiple ? 'true' : 'false'}
      data-has-error={hasError ? 'true' : undefined}
      data-droppable={droppable ? 'true' : undefined}
      {...rest}
    >
      {children}
    </div>
  );
};

export type FileUploadInputProps = Omit<ComponentProps<'input'>, 'type'>;

export const FileUploadInput = forwardRef<HTMLInputElement, FileUploadInputProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <input
      ref={ref}
      type='file'
      className={`
        hidden
        ${className ?? ''}
      `}
      {...rest}
    />
  );
});

export type FileUploadDropAreaProps = ComponentProps<'div'> & {
  isDragOver?: boolean;
};

export const FileUploadDropArea = (props: FileUploadDropAreaProps) => {
  const { children, className, isDragOver = false, ...rest } = props;

  return (
    <div
      className={`
        group/drop-area
        rounded-8 p-8 border border-solid-gray-536 bg-solid-gray-50
        group-data-[has-error=true]/file-upload:border-error-1
        data-[dragover=true]:outline data-[dragover=true]:outline-4 data-[dragover=true]:outline-success-1 data-[dragover=true]:-outline-offset-4 data-[dragover=true]:bg-green-50
        ${className ?? ''}
      `}
      data-dragover={isDragOver ? 'true' : undefined}
      {...rest}
    >
      {children}
    </div>
  );
};

export type FileUploadFileListProps = ComponentProps<'ul'>;

export const FileUploadFileList = (props: FileUploadFileListProps) => {
  const { children, className, ...rest } = props;

  return (
    <ul
      className={`
        mt-4 p-0 list-none [counter-reset:file-item]
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </ul>
  );
};

export type FileUploadFileItemProps = ComponentProps<'li'> & {
  hasError?: boolean;
};

export const FileUploadFileItem = (props: FileUploadFileItemProps) => {
  const { children, className, hasError = false, ...rest } = props;

  return (
    <li
      className={`
        group/file-item
        flex items-baseline [counter-increment:file-item]
        [&+&]:mt-1
        ${className ?? ''}
      `}
      data-error={hasError ? 'true' : undefined}
      {...rest}
    >
      {children}
    </li>
  );
};

export type FileUploadFileMarkerProps = ComponentProps<'div'>;

export const FileUploadFileMarker = (props: FileUploadFileMarkerProps) => {
  const { className, ...rest } = props;

  return (
    <div
      className={`
        shrink-0
        group-data-[multiple=true]/file-upload:w-8
        group-data-[multiple=true]/file-upload:before:content-[counter(file-item)'.']
        group-data-[multiple=false]/file-upload:flex group-data-[multiple=false]/file-upload:self-start group-data-[multiple=false]/file-upload:justify-center group-data-[multiple=false]/file-upload:items-center group-data-[multiple=false]/file-upload:w-6 group-data-[multiple=false]/file-upload:h-[calc(30/16*1rem)]
        group-data-[multiple=false]/file-upload:before:w-1.5 group-data-[multiple=false]/file-upload:before:h-1.5 group-data-[multiple=false]/file-upload:before:rounded-full group-data-[multiple=false]/file-upload:before:bg-current group-data-[multiple=false]/file-upload:before:content-['']
        group-data-[multiple=false]/file-upload:forced-colors:before:bg-[CanvasText]
        ${className ?? ''}
      `}
      {...rest}
    />
  );
};

export type FileUploadFileInfoProps = ComponentProps<'div'>;

export const FileUploadFileInfo = (props: FileUploadFileInfoProps) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`
        flex-1 min-w-0
        group-data-[error=true]/file-item:border-l-4 group-data-[error=true]/file-item:border-error-1 group-data-[error=true]/file-item:pl-2 group-data-[error=true]/file-item:text-error-1
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </div>
  );
};

export type FileUploadFileNameProps = ComponentProps<'span'>;

export const FileUploadFileName = (props: FileUploadFileNameProps) => {
  const { children, className, ...rest } = props;

  return (
    <span className={`mr-4 font-bold ${className ?? ''}`} {...rest}>
      {children}
    </span>
  );
};

export type FileUploadFileMetaProps = ComponentProps<'span'>;

export const FileUploadFileMeta = (props: FileUploadFileMetaProps) => {
  const { children, className, ...rest } = props;

  return (
    <span
      className={`
        text-solid-gray-600
        group-data-[error=true]/file-item:text-inherit
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </span>
  );
};

export type FileUploadViewportOverlayProps = ComponentProps<'div'>;

export const FileUploadViewportOverlay = (props: FileUploadViewportOverlayProps) => {
  const { children, className, ...rest } = props;

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      className={`
        fixed inset-0 z-[9999] border-4 border-success-1 bg-green-50
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </div>,
    document.body,
  );
};

export type FileUploadViewportOverlayMessageProps = ComponentProps<'div'>;

export const FileUploadViewportOverlayMessage = (props: FileUploadViewportOverlayMessageProps) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`
        flex justify-center content-center flex-wrap box-border w-full h-full p-[calc(2rem-4px)]
        text-[clamp(calc(18/16*1rem),0.75rem+1.875vw,calc(48/16*1rem))] font-bold pointer-events-none
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </div>
  );
};
