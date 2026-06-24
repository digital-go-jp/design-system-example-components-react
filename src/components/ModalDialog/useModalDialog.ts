import { type RefObject, useEffect, useId, useRef } from 'react';

export type ModalDialogRequestCloseEvent = {
  defaultPrevented: boolean;
  preventDefault: () => void;
};

export type UseModalDialogOptions = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestClose?: (event: ModalDialogRequestCloseEvent) => void;
};

export type UseModalDialogResult = {
  dialogProps: {
    ref: RefObject<HTMLDialogElement>;
    'aria-labelledby': string;
  };
  headingProps: {
    ref: RefObject<HTMLHeadingElement>;
    id: string;
  };
  closeButtonProps: {
    onClick: () => void;
  };
};

export const useModalDialog = (options: UseModalDialogOptions): UseModalDialogResult => {
  const { open, onOpenChange, onRequestClose } = options;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingId = useId();

  const executeRequestClose = () => {
    const event: ModalDialogRequestCloseEvent = {
      defaultPrevented: false,
      preventDefault() {
        this.defaultPrevented = true;
      },
    };
    onRequestClose?.(event);
    if (!event.defaultPrevented) onOpenChange(false);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
        headingRef.current?.focus();
      }
    } else {
      if (dialog.open) dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      executeRequestClose();
    };

    dialog.addEventListener('cancel', handleCancel);
    return () => dialog.removeEventListener('cancel', handleCancel);
  });

  return {
    dialogProps: {
      ref: dialogRef,
      'aria-labelledby': headingId,
    },
    headingProps: {
      ref: headingRef,
      id: headingId,
    },
    closeButtonProps: {
      onClick: () => executeRequestClose(),
    },
  };
};
