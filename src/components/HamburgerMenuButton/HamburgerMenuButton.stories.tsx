import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
  Unstyled,
} from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useId, useRef, useState } from 'react';
import { Link } from '../Link';
import {
  CloseIcon,
  CloseWithLabelIcon,
  HamburgerIcon,
  HamburgerMenuButton,
  HamburgerMenuIconButton,
  HamburgerWithLabelIcon,
} from './';

const meta = {
  id: 'Component/DADS v2/HamburgerMenuButton',
  title: 'Component/ハンバーガーメニューボタン',
  component: HamburgerMenuButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />

          <Unstyled>
            <div className='prose'>
              <h2>コンポーネントのガイドライン</h2>
              <p>
                <Link
                  href='https://design.digital.go.jp/dads/components/hamburger-menu-button/'
                  target='_blank'
                >
                  ハンバーガーメニューボタン（概要）｜デジタル庁デザインシステムβ版
                </Link>
              </p>
            </div>
          </Unstyled>
        </>
      ),
    },
  },
} satisfies Meta<typeof HamburgerMenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DesktopAndMobileCommon: Story = {
  render: () => {
    const sampleId = useId();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
      <div className='m-4 flex flex-col gap-2'>
        <HamburgerMenuButton
          aria-controls={`${sampleId}-menu`}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <>
              <CloseIcon className='mt-0.5 flex-none' />
              閉じる
            </>
          ) : (
            <>
              <HamburgerIcon className='mt-0.5 flex-none' />
              メニュー
            </>
          )}
        </HamburgerMenuButton>
        {isMenuOpen && (
          <div className='h-40 w-44 border border-solid-gray-420 p-4' id={`${sampleId}-menu`}>
            サンプルメニュー
          </div>
        )}
      </div>
    );
  },
};

export const MobileOnly: Story = {
  decorators: [
    (Story) => (
      <>
        <div className='p-4'>
          <h2 className='mb-8 text-std-32B-150'>モバイル条件付きコンポーネント</h2>
          <Story />
          <p className='mt-8 mb-4'>
            モバイルデバイスでの表示時にヘッダーの領域が限定され、十分な領域が確保できない場合に限り、アイコンにラベルが内包されたモバイル条件付きコンポーネント（
            <code>HamburgerMenuIconButton</code>）を使用します。
          </p>
          <p className='my-4'>
            それ以外の場合は、原則として、アイコンとテキストラベルの組み合わせから成るデスクトップ・モバイル共通コンポーネント（
            <code>HamburgerMenuButton</code>）を使用してください。
          </p>
        </div>
      </>
    ),
  ],
  render: () => {
    const sampleJaId = useId();
    const sampleEnId = useId();
    const [isMenuJaOpen, setIsMenuJaOpen] = useState(false);
    const [isMenuEnOpen, setIsMenuEnOpen] = useState(false);
    return (
      <div className='m-4 flex gap-36'>
        <div className='relative'>
          <HamburgerMenuIconButton
            className='hover:outline hover:outline-black'
            aria-controls={`${sampleJaId}-menu`}
            aria-expanded={isMenuJaOpen}
            onClick={() => setIsMenuJaOpen(!isMenuJaOpen)}
          >
            {isMenuJaOpen ? <CloseWithLabelIcon /> : <HamburgerWithLabelIcon />}
          </HamburgerMenuIconButton>
          {isMenuJaOpen && (
            <div
              className='absolute h-40 w-44 border border-solid-gray-420 p-4 bg-white'
              id={`${sampleJaId}-menu`}
            >
              サンプルメニュー
            </div>
          )}
        </div>
        <div className='relative'>
          <HamburgerMenuIconButton
            className='hover:outline hover:outline-black'
            aria-controls={`${sampleEnId}-menu`}
            aria-expanded={isMenuEnOpen}
            onClick={() => setIsMenuEnOpen(!isMenuEnOpen)}
          >
            {isMenuEnOpen ? (
              <CloseWithLabelIcon isEnglish={true} />
            ) : (
              <HamburgerWithLabelIcon isEnglish={true} />
            )}
          </HamburgerMenuIconButton>
          {isMenuEnOpen && (
            <div
              className='absolute h-40 w-52 border border-solid-gray-420 p-4 bg-white'
              id={`${sampleEnId}-menu`}
            >
              Sample menu
            </div>
          )}
        </div>
      </div>
    );
  },
};

export const WithDrawer: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <>
        {/* NOTE: See "Drawer" story about Drawer */}
        <div className='has-[dialog[open]]:overflow-auto has-[dialog[open]]:[scrollbar-gutter:stable]'>
          <Story />
        </div>
      </>
    ),
  ],
  render: () => {
    const drawerId = useId();
    const drawerRef = useRef<HTMLDialogElement>(null);

    const sampleMenuLinkClasses = `
        flex min-h-[calc(44/16*1rem)] items-center px-4 py-3 text-dns-16N-120 rounded-4
        hover:bg-solid-gray-50 hover:underline hover:underline-offset-[calc(3/16*1rem)]
        focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:-outline-offset-4 focus-visible:bg-yellow-300 focus-visible:ring-[calc(6/16*1rem)] focus-visible:ring-inset focus-visible:ring-yellow-300
      `;

    const sampleMenu = [
      {
        id: 'sample1',
        name: 'メニューアイテム1',
        url: '#',
      },
      {
        id: 'sample2',
        name: 'メニューアイテム2',
        url: '#',
      },
      {
        id: 'sample3',
        name: 'メニューアイテム3',
        url: '#',
      },
      {
        id: 'sample4',
        name: 'メニューアイテム4',
        url: '#',
      },
    ];

    return (
      <>
        <div className='flex p-4'>
          <HamburgerMenuButton onClick={() => drawerRef.current?.showModal()}>
            <HamburgerIcon className='mt-0.5 flex-none' />
            メニュー
          </HamburgerMenuButton>
        </div>
        <dialog
          aria-labelledby={`${drawerId}-heading`}
          className='m-[unset] max-w-full max-h-[unset] w-72 h-dvh end-auto bg-white shadow-2 border-l border-l-transparent [scrollbar-gutter:stable] backdrop:bg-opacity-gray-100 forced-colors:backdrop:bg-[#000b]'
          ref={drawerRef}
        >
          <h2 id={`${drawerId}-heading`} className='sr-only'>
            サンプルメニュー
          </h2>
          <div className='flex p-4'>
            <HamburgerMenuButton className='p-1' onClick={() => drawerRef.current?.close()}>
              <CloseIcon className='mt-0.5 flex-none' />
              閉じる
            </HamburgerMenuButton>
          </div>
          <ul className='px-6 py-4'>
            {sampleMenu.map((item) => (
              <li key={item.id}>
                <a className={sampleMenuLinkClasses} href={item.url}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </dialog>
      </>
    );
  },
};
