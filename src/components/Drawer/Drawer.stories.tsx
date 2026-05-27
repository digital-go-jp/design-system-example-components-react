import type { Meta, StoryObj } from '@storybook/react-vite';
import { useId, useRef } from 'react';
import { Divider } from '../Divider';
import { CloseIcon, HamburgerIcon, HamburgerMenuButton } from '../HamburgerMenuButton';

const meta = {
  id: 'Component/DADS v2/Drawer',
  title: 'Component/ドロワー',
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const FullDrawer: Story = {
  decorators: [
    (Story) => (
      <>
        {/* NOTE: Also see ".storybook/globals.css" about scrollbar-gutter styling for global  */}
        <div className='has-[dialog[open]]:overflow-auto has-[dialog[open]]:[scrollbar-gutter:stable]'>
          <Story />
        </div>
      </>
    ),
  ],
  render: () => {
    const drawerId = useId();
    const drawerRef = useRef<HTMLDialogElement>(null);

    return (
      <>
        <div className='flex justify-end p-4'>
          <HamburgerMenuButton className='p-1' onClick={() => drawerRef.current?.showModal()}>
            <HamburgerIcon className='flex-none' />
            メニュー
          </HamburgerMenuButton>
        </div>
        <dialog
          aria-labelledby={`${drawerId}-heading`}
          className='m-[unset] max-w-[unset] max-h-[unset] w-full h-dvh bg-white [scrollbar-gutter:stable]'
          ref={drawerRef}
        >
          <h2 id={`${drawerId}-heading`} className='sr-only'>
            Full Drawer Example
          </h2>
          <div className='flex justify-end p-4'>
            <HamburgerMenuButton className='p-1' onClick={() => drawerRef.current?.close()}>
              <CloseIcon className='flex-none' />
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

export const RightDrawer: Story = {
  decorators: [
    (Story) => (
      <>
        {/* NOTE: Also see ".storybook/globals.css" about scrollbar-gutter styling for global  */}
        <div className='has-[dialog[open]]:overflow-auto has-[dialog[open]]:[scrollbar-gutter:stable]'>
          <Story />
        </div>
      </>
    ),
  ],
  render: () => {
    const drawerId = useId();
    const drawerRef = useRef<HTMLDialogElement>(null);

    return (
      <>
        <div className='flex justify-end p-4'>
          <HamburgerMenuButton className='p-1' onClick={() => drawerRef.current?.showModal()}>
            <HamburgerIcon className='flex-none' />
            メニュー
          </HamburgerMenuButton>
        </div>
        <dialog
          aria-labelledby={`${drawerId}-heading`}
          className='m-[unset] max-w-full max-h-[unset] w-72 h-dvh start-auto bg-white shadow-2 border-l border-l-transparent [scrollbar-gutter:stable] backdrop:bg-opacity-gray-100 forced-colors:backdrop:bg-[#000b]'
          ref={drawerRef}
        >
          <h2 id={`${drawerId}-heading`} className='sr-only'>
            サンプルメニュー
          </h2>
          <div className='flex justify-end p-4'>
            <HamburgerMenuButton className='p-1' onClick={() => drawerRef.current?.close()}>
              <CloseIcon className='flex-none' />
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

export const LeftDrawer: Story = {
  decorators: [
    (Story) => (
      <>
        {/* NOTE: Also see ".storybook/globals.css" about scrollbar-gutter styling for global  */}
        <div className='has-[dialog[open]]:overflow-auto has-[dialog[open]]:[scrollbar-gutter:stable]'>
          <Story />
        </div>
      </>
    ),
  ],
  render: () => {
    const drawerId = useId();
    const drawerRef = useRef<HTMLDialogElement>(null);

    return (
      <>
        <div className='flex p-4'>
          <HamburgerMenuButton className='p-1' onClick={() => drawerRef.current?.showModal()}>
            <HamburgerIcon className='flex-none' />
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
              <CloseIcon className='flex-none' />
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

export const ScrollOnlyMenuArea: Story = {
  decorators: [
    (Story) => (
      <>
        {/* NOTE: Also see ".storybook/globals.css" about scrollbar-gutter styling for global  */}
        <div className='has-[dialog[open]]:overflow-auto has-[dialog[open]]:[scrollbar-gutter:stable]'>
          <Story />
        </div>
      </>
    ),
  ],
  render: () => {
    const drawerId = useId();
    const drawerRef = useRef<HTMLDialogElement>(null);

    return (
      <>
        <div className='flex justify-end p-4'>
          <HamburgerMenuButton className='p-1' onClick={() => drawerRef.current?.showModal()}>
            <HamburgerIcon className='flex-none' />
            メニュー
          </HamburgerMenuButton>
        </div>
        <dialog
          aria-labelledby={`${drawerId}-heading`}
          className='m-[unset] max-w-full max-h-[unset] overflow-visible w-72 start-auto bg-white shadow-2 border-l border-l-transparent backdrop:bg-opacity-gray-100 forced-colors:backdrop:bg-[#000b]'
          ref={drawerRef}
        >
          <h2 id={`${drawerId}-heading`} className='sr-only'>
            サンプルメニュー
          </h2>
          <div className='grid grid-rows-[auto_1fr] h-dvh'>
            <div className='flex justify-end py-4 pl-4 pr-8'>
              <HamburgerMenuButton className='p-1' onClick={() => drawerRef.current?.close()}>
                <CloseIcon className='flex-none' />
                閉じる
              </HamburgerMenuButton>
            </div>
            <div className='overflow-auto'>
              <ul className='px-6 py-4 h-[1000px]'>
                {sampleMenu.map((item) => (
                  <li key={item.id}>
                    <a className={sampleMenuLinkClasses} href={item.url}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </dialog>
      </>
    );
  },
};

export const PreventLayoutChangeCausedByScrollbarVisibility: Story = {
  decorators: [
    (Story) => (
      <>
        {/* NOTE: Also see ".storybook/globals.css" about scrollbar-gutter styling for global  */}
        <div className='has-[dialog[open]]:overflow-auto has-[dialog[open]]:[scrollbar-gutter:stable]'>
          <Story />
          <div className='p-4'>
            <h2 className='mb-8 text-std-32B-150'>
              スクロールバーによるレイアウトのガタ付きを防止したサンプル
            </h2>
            <p className='my-4'>
              CSS の <code>scrollbar-gutter</code>
              プロパティを使用してスクロールバーの表示/非表示によるレイアウトのガタ付きを防止したサンプルです。ドロワーの開閉時にメインコンテンツの位置が変化しないことをご確認ください。
            </p>
            <p className='my-4'>
              このサンプルは <code>html</code> 要素に設定されている <code>scrollbar-gutter</code>{' '}
              プロパティに依存しています。設定内容は
              <code>".storybook/globals.css"</code> をご参照ください。
            </p>
            <p className='mb-12'>
              ※ Safari v18.1 以下では <code>scrollbar-gutter</code>{' '}
              プロパティはサポートされていません。
            </p>
            <Divider />
            <p className='mt-12 mb-4'>
              これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
            </p>
            <p className='my-4'>
              これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
            </p>
            <p className='my-4'>
              これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
            </p>
          </div>
        </div>
      </>
    ),
  ],
  render: () => {
    const drawerId = useId();
    const drawerRef = useRef<HTMLDialogElement>(null);

    return (
      <>
        <div className='flex justify-end p-4'>
          <HamburgerMenuButton className='p-1' onClick={() => drawerRef.current?.showModal()}>
            <HamburgerIcon className='flex-none' />
            メニュー
          </HamburgerMenuButton>
        </div>
        <dialog
          aria-labelledby={`${drawerId}-heading`}
          className='m-[unset] max-w-full max-h-[unset] w-72 h-dvh start-auto bg-white shadow-2 border-l border-l-transparent [scrollbar-gutter:stable] backdrop:bg-opacity-gray-100 forced-colors:backdrop:bg-[#000b]'
          ref={drawerRef}
        >
          <h2 id={`${drawerId}-heading`} className='sr-only'>
            サンプルメニュー
          </h2>
          <div className='flex justify-end p-4'>
            <HamburgerMenuButton className='p-1' onClick={() => drawerRef.current?.close()}>
              <CloseIcon className='flex-none' />
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
