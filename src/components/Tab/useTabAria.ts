import { useId, useRef, useState } from 'react';
import type { TabChangeDetail } from './Tab';

type UseTabAriaOptions = {
  defaultSelectedIndex?: number;
  activation?: 'auto' | 'manual';
  onTabChange?: (detail: TabChangeDetail) => void;
};

type TabAriaGetListProps = {
  ref: React.RefObject<HTMLUListElement>;
  role: 'tablist';
  onClick: React.MouseEventHandler<HTMLUListElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLUListElement>;
};

type TabAriaGetTabProps = {
  id: string;
  role: 'tab';
  'aria-selected': boolean;
  'aria-controls': string;
  tabIndex: 0 | -1;
  _internalListItemRole: 'presentation';
  _internalElementType: 'button';
};

type TabAriaGetPanelProps = {
  id: string;
  role: 'tabpanel';
  'aria-labelledby': string;
  tabIndex: 0;
  hidden: boolean;
};

export const useTabAria = ({
  defaultSelectedIndex = 0,
  activation = 'auto',
  onTabChange,
}: UseTabAriaOptions = {}) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);
  const tablistRef = useRef<HTMLUListElement | null>(null);
  const idBase = useId();

  const selectTab = (index: number) => {
    setSelectedIndex(index);

    const list = tablistRef.current;
    const tabs = list ? Array.from(list.querySelectorAll<HTMLElement>('[role=tab]')) : [];
    tabs[index]?.focus();

    if (onTabChange) {
      onTabChange({
        selectedIndex: index,
        selectedTabLabel: tabs[index]?.textContent?.trim() ?? '',
      });
    }
  };

  const focusTab = (index: number) => {
    const list = tablistRef.current;
    const tabs = list ? Array.from(list.querySelectorAll<HTMLElement>('[role=tab]')) : [];
    tabs[index]?.focus();
  };

  const getListProps = (): TabAriaGetListProps => ({
    ref: tablistRef,
    role: 'tablist',
    onClick: (e) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>('[role=tab]');
      if (!target || !tablistRef.current?.contains(target)) return;

      e.preventDefault();

      const tabs = Array.from(tablistRef.current.querySelectorAll<HTMLElement>('[role=tab]'));
      const index = tabs.indexOf(target);
      if (index === -1) return;

      selectTab(index);
    },
    onKeyDown: (e) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>('[role=tab]');
      if (!target || !tablistRef.current?.contains(target)) return;

      const tabs = Array.from(tablistRef.current.querySelectorAll<HTMLElement>('[role=tab]'));
      const currentIndex = tabs.indexOf(target);
      const count = tabs.length;
      const isManual = activation === 'manual';

      const activate = isManual ? (i: number) => focusTab(i) : (i: number) => selectTab(i);

      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          if (currentIndex > 0) activate(currentIndex - 1);
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          if (currentIndex < count - 1) activate(currentIndex + 1);
          break;
        case 'Home':
          e.preventDefault();
          activate(0);
          break;
        case 'End':
          e.preventDefault();
          activate(count - 1);
          break;
      }
    },
  });

  const getTabProps = (index: number): TabAriaGetTabProps => ({
    id: `${idBase}-tab-${index}`,
    role: 'tab',
    'aria-selected': index === selectedIndex,
    'aria-controls': `${idBase}-panel-${index}`,
    tabIndex: index === selectedIndex ? 0 : -1,
    _internalListItemRole: 'presentation',
    _internalElementType: 'button',
  });

  const getPanelProps = (index: number): TabAriaGetPanelProps => ({
    id: `${idBase}-panel-${index}`,
    role: 'tabpanel',
    'aria-labelledby': `${idBase}-tab-${index}`,
    tabIndex: 0,
    hidden: index !== selectedIndex,
  });

  return { getListProps, getTabProps, getPanelProps };
};
