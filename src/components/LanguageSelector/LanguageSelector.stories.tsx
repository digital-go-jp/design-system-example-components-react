import {
  Controls,
  Description,
  Stories,
  Subtitle,
  Title,
  Unstyled,
} from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Link } from '../Link';
import { LanguageSelector } from './LanguageSelector';
import { LanguageSelectorArrowIcon } from './parts/ArrowIcon';
import { LanguageSelectorButton } from './parts/Button';
import { LanguageSelectorGlobeIcon } from './parts/GlobeIcon';
import { LanguageSelectorGlobeWithLabelIcon } from './parts/GlobeWithLabelIcon';
import { LanguageSelectorMenu } from './parts/Menu';
import { LanguageSelectorMenuItem } from './parts/MenuItem';

const meta = {
  id: 'Component/DADS v2/LanguageSelector',
  title: 'Component/ランゲージセレクター',
  component: LanguageSelector,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Controls />
          <Stories />

          <Unstyled>
            <div className='prose'>
              <h2>コンポーネントのガイドライン</h2>
              <p>
                <Link
                  href='https://design.digital.go.jp/dads/components/language-selector/'
                  target='_blank'
                >
                  ランゲージセレクター（概要）｜デジタル庁デザインシステムβ版
                </Link>
              </p>
            </div>
          </Unstyled>
        </>
      ),
    },
  },
} satisfies Meta<typeof LanguageSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const exampleLanguages = [
  {
    name: '日本語',
    code: 'ja',
    url: 'https://www.digital.go.jp/',
  },
  {
    name: 'English',
    code: 'en',
    url: 'https://www.digital.go.jp/en',
  },
  {
    name: '简体中文',
    code: 'zh-cn',
    url: '#',
  },
  {
    name: '繁体中文',
    code: 'zh-tw',
    url: '#',
  },
  {
    name: '한국어',
    code: 'ko',
    url: '#',
  },
  {
    name: 'Español',
    code: 'es',
    url: '#',
  },
  {
    name: 'Bahasa Indonesia',
    code: 'id',
    url: '#',
  },
  {
    name: 'Tiếng Việt',
    code: 'vi',
    url: '#',
  },
];

const exampleLanguages2 = [
  {
    name: '日本語',
    code: 'ja',
    url: 'https://www.digital.go.jp/',
  },
  {
    name: 'English',
    code: 'en',
    url: 'https://www.digital.go.jp/en',
  },
  {
    name: '한국어',
    code: 'ko',
    url: '#',
  },
  {
    name: '简体中文',
    code: 'zh-cn',
    url: '#',
  },
  {
    name: '繁体中文',
    code: 'zh-tw',
    url: '#',
  },
];

export const Example: Story = {
  render: () => {
    const sampleId = React.useId();
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLUListElement>(null);
    const menuItemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const setMenuItemRef = React.useCallback((el: HTMLAnchorElement | null, index: number) => {
      menuItemRefs.current[index] = el;
    }, []);

    React.useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        if (
          !buttonRef.current?.contains(e.target as Node) &&
          !menuRef.current?.contains(e.target as Node)
        ) {
          setIsMenuOpen(false);
        }
      };

      const handleOutsideFocus = (e: FocusEvent) => {
        if (
          !menuRef.current?.contains(e.target as Node) &&
          !buttonRef.current?.contains(e.target as Node)
        ) {
          setIsMenuOpen(false);
        }
      };

      if (isMenuOpen) {
        menuItemRefs.current[0]?.focus();
        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('focusin', handleOutsideFocus);
      }

      return () => {
        document.removeEventListener('click', handleOutsideClick);
        document.removeEventListener('focusin', handleOutsideFocus);
      };
    }, [isMenuOpen]);

    const handleMenuItemKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          setIsMenuOpen(false);
          buttonRef.current?.focus();
          break;
      }
    };

    return (
      <div className='h-80'>
        <LanguageSelector>
          <LanguageSelectorButton
            aria-controls={`${sampleId}-menu`}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            ref={buttonRef}
          >
            <LanguageSelectorGlobeIcon />
            <span className='mb-0.5'>Language</span>
            <LanguageSelectorArrowIcon className='mt-0.5 group-[:has([aria-expanded="true"])]:rotate-180' />
          </LanguageSelectorButton>
          <LanguageSelectorMenu
            className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 overflow-auto`}
            id={`${sampleId}-menu`}
            ref={menuRef}
          >
            {exampleLanguages.map((lang, index) => (
              <LanguageSelectorMenuItem
                href={lang.url}
                isCurrent={lang.code === 'ja'}
                key={lang.code}
                lang={lang.code}
                onKeyDown={handleMenuItemKeyDown}
                ref={(el) => setMenuItemRef(el, index)}
              >
                {lang.name}
              </LanguageSelectorMenuItem>
            ))}
          </LanguageSelectorMenu>
        </LanguageSelector>
      </div>
    );
  },
};

export const WithoutLabel: Story = {
  render: () => {
    const sampleId = React.useId();
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLUListElement>(null);
    const menuItemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const setMenuItemRef = React.useCallback((el: HTMLAnchorElement | null, index: number) => {
      menuItemRefs.current[index] = el;
    }, []);

    React.useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        if (
          !buttonRef.current?.contains(e.target as Node) &&
          !menuRef.current?.contains(e.target as Node)
        ) {
          setIsMenuOpen(false);
        }
      };

      const handleOutsideFocus = (e: FocusEvent) => {
        if (
          !menuRef.current?.contains(e.target as Node) &&
          !buttonRef.current?.contains(e.target as Node)
        ) {
          setIsMenuOpen(false);
        }
      };

      if (isMenuOpen) {
        menuItemRefs.current[0]?.focus();
        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('focusin', handleOutsideFocus);
      }

      return () => {
        document.removeEventListener('click', handleOutsideClick);
        document.removeEventListener('focusin', handleOutsideFocus);
      };
    }, [isMenuOpen]);

    const handleMenuItemKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          setIsMenuOpen(false);
          buttonRef.current?.focus();
          break;
      }
    };

    return (
      <div className='flex justify-end items-start h-72'>
        <LanguageSelector>
          <LanguageSelectorButton
            aria-controls={`${sampleId}-menu`}
            aria-expanded={isMenuOpen}
            className='!px-0 !gap-0 !rounded-4 hover:outline hover:outline-black'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            ref={buttonRef}
          >
            <LanguageSelectorGlobeWithLabelIcon />
            <LanguageSelectorArrowIcon className='mt-0.5 group-[:has([aria-expanded="true"])]:rotate-180' />
          </LanguageSelectorButton>
          <LanguageSelectorMenu
            className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full right-0 overflow-auto`}
            id={`${sampleId}-menu`}
            ref={menuRef}
          >
            {exampleLanguages2.map((lang, index) => (
              <LanguageSelectorMenuItem
                href={lang.url}
                isCurrent={lang.code === 'ja'}
                key={lang.code}
                lang={lang.code}
                onKeyDown={handleMenuItemKeyDown}
                ref={(el) => setMenuItemRef(el, index)}
              >
                {lang.name}
              </LanguageSelectorMenuItem>
            ))}
          </LanguageSelectorMenu>
        </LanguageSelector>
      </div>
    );
  },
};

export const WithPopoverAPI: Story = {
  render: () => {
    const sampleId = React.useId();
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLUListElement>(null);
    const menuItemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);

    const setMenuItemRef = React.useCallback((el: HTMLAnchorElement | null, index: number) => {
      menuItemRefs.current[index] = el;
    }, []);

    const handleOpenerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      switch (e.key) {
        case ' ':
        case 'Enter':
          e.preventDefault();
          menuRef.current?.togglePopover();
          if (menuItemRefs.current[0]) {
            menuItemRefs.current[0].focus();
          }
          break;
        case 'Tab':
          if (e.shiftKey && menuRef.current?.togglePopover()) {
            menuRef.current?.hidePopover();
          }
          break;
      }
    };

    const handleMenuItemKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
      switch (e.key) {
        case 'Tab':
          if (
            !e.shiftKey &&
            menuItemRefs.current[menuItemRefs.current.length - 1] === e.currentTarget
          ) {
            menuRef.current?.hidePopover();
          }
          break;
      }
    };

    return (
      <div className='h-64'>
        <h2 className='mb-4 text-std-32B-150'>
          Popover API と CSS Anchor Positioning を使った実装サンプル
        </h2>
        <p className='mb-8'>
          ※ 2024年8月時点のFirefoxとSafariではCSS Anchor
          Positioningはサポートされていません。そのため、それらのブラウザではメニューの表示位置に問題が出る可能性がありますのでご注意ください。
        </p>
        <LanguageSelector>
          <LanguageSelectorButton
            className='[anchor-name:--trigger]'
            onKeyDown={handleOpenerKeyDown}
            popovertarget={`${sampleId}-menu`}
            ref={buttonRef}
          >
            <LanguageSelectorGlobeIcon />
            <span className='mb-0.5'>Language</span>
            <LanguageSelectorArrowIcon className='mt-0.5 group-[:has(:popover-open)]:rotate-180' />
          </LanguageSelectorButton>
          <LanguageSelectorMenu
            className='absolute top-[anchor(--trigger_bottom)] left-[anchor(--trigger_left)] [position-try-fallbacks:flip-block] inset-[unset]'
            id={`${sampleId}-menu`}
            popover='auto'
            ref={menuRef}
          >
            {exampleLanguages.map((lang, index) => (
              <LanguageSelectorMenuItem
                href={lang.url}
                isCurrent={lang.code === 'ja'}
                key={lang.code}
                lang={lang.code}
                onKeyDown={handleMenuItemKeyDown}
                ref={(el) => setMenuItemRef(el, index)}
              >
                {lang.name}
              </LanguageSelectorMenuItem>
            ))}
          </LanguageSelectorMenu>
        </LanguageSelector>
      </div>
    );
  },
};

export const CondensedMenu: Story = {
  render: () => {
    const sampleId = React.useId();
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLUListElement>(null);
    const menuItemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const setMenuItemRef = React.useCallback((el: HTMLAnchorElement | null, index: number) => {
      menuItemRefs.current[index] = el;
    }, []);

    React.useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        if (
          !buttonRef.current?.contains(e.target as Node) &&
          !menuRef.current?.contains(e.target as Node)
        ) {
          setIsMenuOpen(false);
        }
      };

      const handleOutsideFocus = (e: FocusEvent) => {
        if (
          !menuRef.current?.contains(e.target as Node) &&
          !buttonRef.current?.contains(e.target as Node)
        ) {
          setIsMenuOpen(false);
        }
      };

      if (isMenuOpen) {
        menuItemRefs.current[0]?.focus();
        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('focusin', handleOutsideFocus);
      }

      return () => {
        document.removeEventListener('click', handleOutsideClick);
        document.removeEventListener('focusin', handleOutsideFocus);
      };
    }, [isMenuOpen]);

    const handleMenuItemKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          setIsMenuOpen(false);
          buttonRef.current?.focus();
          break;
      }
    };

    return (
      <div className='h-64'>
        <LanguageSelector>
          <LanguageSelectorButton
            aria-controls={`${sampleId}-menu`}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            ref={buttonRef}
          >
            <LanguageSelectorGlobeIcon />
            <span className='mb-0.5'>Language</span>
            <LanguageSelectorArrowIcon className='mt-0.5 group-[:has([aria-expanded="true"])]:rotate-180' />
          </LanguageSelectorButton>
          <LanguageSelectorMenu
            className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 overflow-auto`}
            id={`${sampleId}-menu`}
            isCondensed={true}
            ref={menuRef}
          >
            {exampleLanguages.map((lang, index) => (
              <LanguageSelectorMenuItem
                href={lang.url}
                isCondensed={true}
                isCurrent={lang.code === 'ja'}
                key={lang.code}
                lang={lang.code}
                onKeyDown={handleMenuItemKeyDown}
                ref={(el) => setMenuItemRef(el, index)}
              >
                {lang.name}
              </LanguageSelectorMenuItem>
            ))}
          </LanguageSelectorMenu>
        </LanguageSelector>
      </div>
    );
  },
};

export const Responsive: Story = {
  render: () => {
    const sampleId = React.useId();
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const menuRef = React.useRef<HTMLUListElement>(null);
    const menuItemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const setMenuItemRef = React.useCallback((el: HTMLAnchorElement | null, index: number) => {
      menuItemRefs.current[index] = el;
    }, []);

    React.useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        if (
          !buttonRef.current?.contains(e.target as Node) &&
          !menuRef.current?.contains(e.target as Node)
        ) {
          setIsMenuOpen(false);
        }
      };

      const handleOutsideFocus = (e: FocusEvent) => {
        if (
          !menuRef.current?.contains(e.target as Node) &&
          !buttonRef.current?.contains(e.target as Node)
        ) {
          setIsMenuOpen(false);
        }
      };

      if (isMenuOpen) {
        menuItemRefs.current[0]?.focus();
        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('focusin', handleOutsideFocus);
      }

      return () => {
        document.removeEventListener('click', handleOutsideClick);
        document.removeEventListener('focusin', handleOutsideFocus);
      };
    }, [isMenuOpen]);

    const handleMenuItemKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          setIsMenuOpen(false);
          buttonRef.current?.focus();
          break;
      }
    };

    return (
      <div className='flex justify-center items-start h-64'>
        <LanguageSelector>
          <LanguageSelectorButton
            aria-controls={`${sampleId}-menu`}
            aria-expanded={isMenuOpen}
            className='!px-0 !gap-0 !rounded-4 hover:outline hover:outline-black desktop:!px-2 desktop:!gap-1 desktop:!rounded-8 desktop:hover:[&:not(:focus-visible)]:outline-0'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            ref={buttonRef}
          >
            <LanguageSelectorGlobeIcon className='hidden desktop:block' />
            <LanguageSelectorGlobeWithLabelIcon className='block desktop:hidden' />
            <span className='hidden desktop:block desktop:mb-0.5'>Language</span>
            <LanguageSelectorArrowIcon className='mt-0.5 group-[:has([aria-expanded="true"])]:rotate-180' />
          </LanguageSelectorButton>
          <LanguageSelectorMenu
            className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full right-0 min-w-full overflow-auto`}
            id={`${sampleId}-menu`}
            isCondensed={true}
            ref={menuRef}
          >
            {exampleLanguages2.map((lang, index) => (
              <LanguageSelectorMenuItem
                href={lang.url}
                isCondensed={true}
                isCurrent={lang.code === 'ja'}
                key={lang.code}
                lang={lang.code}
                onKeyDown={handleMenuItemKeyDown}
                ref={(el) => setMenuItemRef(el, index)}
              >
                {lang.name}
              </LanguageSelectorMenuItem>
            ))}
          </LanguageSelectorMenu>
        </LanguageSelector>
      </div>
    );
  },
};

export const OnlyUI = {
  render: () => {
    const sampleId = React.useId();
    return (
      <div className='flex h-64 gap-8'>
        <LanguageSelector>
          <LanguageSelectorButton>
            <LanguageSelectorGlobeIcon />
            <span className='mb-0.5'>Language</span>
            <LanguageSelectorArrowIcon className='mt-0.5 rotate-180' />
          </LanguageSelectorButton>
          <LanguageSelectorMenu
            className='absolute overflow-auto'
            id={`${sampleId}-menu`}
            isCondensed={true}
          >
            {exampleLanguages2.map((lang) => (
              <LanguageSelectorMenuItem
                href={lang.url}
                isCondensed={true}
                isCurrent={lang.code === 'ja'}
                key={lang.code}
                lang={lang.code}
              >
                {lang.name}
              </LanguageSelectorMenuItem>
            ))}
          </LanguageSelectorMenu>
        </LanguageSelector>

        <LanguageSelector>
          <LanguageSelectorButton className='!px-0 !py-0 !gap-0 !rounded-4 hover:outline hover:outline-black'>
            <LanguageSelectorGlobeWithLabelIcon />
            <LanguageSelectorArrowIcon className='mt-0.5 rotate-180' />
          </LanguageSelectorButton>
          <LanguageSelectorMenu className='absolute overflow-auto' id={`${sampleId}-menu`}>
            {exampleLanguages.map((lang) => (
              <LanguageSelectorMenuItem
                href={lang.url}
                isCurrent={lang.code === 'ja'}
                key={lang.code}
                lang={lang.code}
              >
                {lang.name}
              </LanguageSelectorMenuItem>
            ))}
          </LanguageSelectorMenu>
        </LanguageSelector>
      </div>
    );
  },
};
