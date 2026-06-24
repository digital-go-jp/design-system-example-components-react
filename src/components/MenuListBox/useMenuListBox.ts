import type { ComponentProps } from 'react';
import { useEffect, useRef, useState } from 'react';

export type MenuItemSelectDetail = {
  selectedValue: string;
  selectedIndex: number;
};

export type UseMenuListBoxOptions = {
  onMenuItemSelect?: (detail: MenuItemSelectDetail) => void;
};

export type UseMenuListBoxReturn = {
  isOpen: boolean;
  rootProps: ComponentProps<'div'>;
  openerProps: Partial<ComponentProps<'button'>>;
  popupProps: ComponentProps<'div'>;
};

const focusItem = (items: HTMLElement[], index: number) => {
  for (const item of items) item.setAttribute('tabindex', '-1');
  items[index].setAttribute('tabindex', '0');
  items[index].focus();
};

export function useMenuListBox(options?: UseMenuListBoxOptions): UseMenuListBoxReturn {
  const { onMenuItemSelect } = options ?? {};

  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  // 'first' | 'last' | null — which item to focus after the menu opens
  const pendingFocusRef = useRef<'first' | 'last' | null>(null);

  // Focus the correct item after the popup mounts.
  useEffect(() => {
    if (!isOpen || pendingFocusRef.current === null) return;

    const items = Array.from(
      rootRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? [],
    );
    if (items.length === 0) return;

    focusItem(items, pendingFocusRef.current === 'first' ? 0 : items.length - 1);

    pendingFocusRef.current = null;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
        openerRef.current?.focus();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleRootBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!isOpen) return;
    if (e.relatedTarget && rootRef.current?.contains(e.relatedTarget as Node)) return;
    setIsOpen(false);
  };

  const handleOpenerClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      pendingFocusRef.current = 'first';
      setIsOpen(true);
    }
  };

  const handleOpenerKeydown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const target = e.key === 'ArrowDown' ? 'first' : 'last';
    if (isOpen) {
      const items = Array.from(
        rootRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? [],
      );
      if (items.length > 0) focusItem(items, target === 'first' ? 0 : items.length - 1);
    } else {
      pendingFocusRef.current = target;
      setIsOpen(true);
    }
  };

  // Menuitem selection via click delegation on the popup.
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const item = (e.target as HTMLElement).closest<HTMLElement>('[role="menuitem"]');
    if (!item) return;

    const items = Array.from(e.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]'));
    const selectedIndex = items.indexOf(item);
    if (selectedIndex === -1) return;

    // Prefer data-value attribute; fall back to textContent for plain-text items.
    const selectedValue = item.dataset.value ?? item.textContent?.trim() ?? '';
    onMenuItemSelect?.({ selectedValue, selectedIndex });

    setIsOpen(false);
    openerRef.current?.focus();
  };

  const handlePopupKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const items = Array.from(e.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]'));
    if (items.length === 0) return;

    const currentIndex = items.indexOf(document.activeElement as HTMLElement);

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (currentIndex < items.length - 1) focusItem(items, currentIndex + 1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (currentIndex > 0) focusItem(items, currentIndex - 1);
        break;
      case 'Home':
        e.preventDefault();
        focusItem(items, 0);
        break;
      case 'End':
        e.preventDefault();
        focusItem(items, items.length - 1);
        break;
    }
  };

  return {
    isOpen,
    rootProps: {
      ref: rootRef,
      onBlur: handleRootBlur,
    },
    openerProps: {
      ref: openerRef,
      'aria-expanded': isOpen,
      onClick: handleOpenerClick,
      onKeyDown: handleOpenerKeydown,
    },
    popupProps: {
      onClick: handlePopupClick,
      onKeyDown: handlePopupKeydown,
    },
  };
}
