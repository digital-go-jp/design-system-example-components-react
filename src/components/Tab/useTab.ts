import { useEffect, useId, useRef, useState } from 'react';
import type { TabChangeDetail } from './Tab';

type UseTabOptions = {
  defaultSelectedIndex?: number;
  onTabChange?: (detail: TabChangeDetail) => void;
};

type TabGetListProps = {
  ref: React.RefObject<HTMLUListElement>;
  onClick: React.MouseEventHandler<HTMLUListElement>;
  onAuxClick: React.MouseEventHandler<HTMLUListElement>;
};

type TabGetTabProps = {
  href: string;
  'aria-current': true | undefined;
};

type TabGetPanelProps = {
  ref: (el: HTMLDivElement | null) => void;
  id: string;
  hidden: boolean;
};

export const useTab = ({ defaultSelectedIndex = 0, onTabChange }: UseTabOptions = {}) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);
  const idBase = useId();
  const listRef = useRef<HTMLUListElement | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const insertedHeadingsRef = useRef<HTMLElement[]>([]);
  const headingsInsertedRef = useRef(false);
  const headingIdBase = useId();

  // Track the index that should receive focus after the next render.
  const pendingFocusRef = useRef<number | null>(null);

  // Insert visually-hidden headings into each panel on mount.
  useEffect(() => {
    if (headingsInsertedRef.current) return;

    const list = listRef.current;
    if (!list) return;

    const labelledby = list.getAttribute('aria-labelledby');
    if (!labelledby) {
      console.warn('[useTab] aria-labelledby attribute is mandatory.');
      return;
    }

    const headingEl = document.getElementById(labelledby);
    const match = headingEl?.tagName.match(/^H([1-6])$/i);
    const parentLevel = match ? Number.parseInt(match[1], 10) : 2;
    const level = Math.min(parentLevel + 1, 6);

    const tabs = Array.from(list.querySelectorAll<HTMLAnchorElement>('a'));

    panelRefs.current.forEach((panel, index) => {
      if (!panel) return;
      const tab = tabs[index];
      if (!tab) return;

      const label = tab.textContent?.trim() ?? '';
      const heading = document.createElement(`h${level}`);
      heading.textContent = label;
      heading.id = `${headingIdBase}-panel-heading-${index}`;
      heading.setAttribute('tabindex', '-1');
      Object.assign(heading.style, {
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: '1px',
        overflow: 'hidden',
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: '1px',
      });

      panel.insertBefore(heading, panel.firstChild);
      insertedHeadingsRef.current.push(heading);
    });

    headingsInsertedRef.current = true;

    return () => {
      for (const h of insertedHeadingsRef.current) {
        h.remove();
      }
      insertedHeadingsRef.current = [];
      headingsInsertedRef.current = false;
    };
  }, [headingIdBase]);

  // Focus the visually-hidden heading after the panel becomes visible.
  // biome-ignore lint/correctness/useExhaustiveDependencies: selectedIndex is an intentional trigger
  useEffect(() => {
    const index = pendingFocusRef.current;
    if (index === null) return;
    pendingFocusRef.current = null;
    insertedHeadingsRef.current[index]?.focus();
  }, [selectedIndex]);

  const getListProps = (): TabGetListProps => ({
    ref: listRef,
    onClick: (e) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target || !listRef.current?.contains(target)) return;

      e.preventDefault();

      const tabs = Array.from(listRef.current.querySelectorAll<HTMLAnchorElement>('a'));
      const index = tabs.indexOf(target);
      if (index === -1) return;

      setSelectedIndex(index);
      pendingFocusRef.current = index;

      if (onTabChange) {
        onTabChange({
          selectedIndex: index,
          selectedTabLabel: tabs[index]?.textContent?.trim() ?? '',
        });
      }
    },
    onAuxClick: (e) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && e.button === 1) e.preventDefault();
    },
  });

  const getTabProps = (index: number): TabGetTabProps => ({
    href: `#${idBase}-panel-${index}`,
    'aria-current': index === selectedIndex ? true : undefined,
  });

  const getPanelProps = (index: number): TabGetPanelProps => ({
    ref: (el) => {
      panelRefs.current[index] = el;
    },
    id: `${idBase}-panel-${index}`,
    hidden: index !== selectedIndex,
  });

  return { getListProps, getTabProps, getPanelProps };
};
