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
import { useState } from 'react';
import { userEvent, within } from 'storybook/test';
import { Button } from '../Button';
import {
  ModalDialog,
  ModalDialogActions,
  ModalDialogBody,
  ModalDialogClose,
  ModalDialogContent,
  ModalDialogHeader,
  ModalDialogHeading,
  ModalDialogScrollArea,
} from './ModalDialog';
import { useModalDialog } from './useModalDialog';

const meta = {
  id: 'Component/DADS v2/ModalDialog',
  title: 'Component/モーダルダイアログ',
  component: ModalDialog,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['scroll', 'width'],
    },
    docs: {
      page: () => (
        <Unstyled>
          <div className='prose'>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Stories includePrimary={false} />

            <h2>仕様</h2>

            <h3>コンポーネント構成</h3>
            <ul>
              <li>
                <code>ModalDialog</code>: ルートの <code>{'<dialog>'}</code>{' '}
                要素。スクロールモードと幅を管理する
              </li>
              <li>
                <code>ModalDialogContent</code>:
                ダイアログの内側コンテナ。角丸・背景・影を持つ白いパネル
              </li>
              <li>
                <code>ModalDialogHeader</code>: タイトルと閉じるボタンを横並びに配置するヘッダー領域
              </li>
              <li>
                <code>ModalDialogHeading</code>: ダイアログのタイトル見出し（<code>{'<h2>'}</code>
                ）。フォーカス管理のため <code>tabIndex={-1}</code> がデフォルト
              </li>
              <li>
                <code>ModalDialogClose</code>: 「閉じる」テキストとアイコンを内包した閉じるボタン。
                <code>children</code> は受け取らない
              </li>
              <li>
                <code>ModalDialogBody</code>: 本文コンテンツ領域
              </li>
              <li>
                <code>ModalDialogActions</code>: ボタン等のアクション領域
              </li>
              <li>
                <code>ModalDialogScrollArea</code>:
                内側スクロール時にスクロール対象となる領域。ヘッダー・アクションエリアの固定に使用する
              </li>
              <li>
                <code>useModalDialog</code>: <code>open</code> 状態と <code>showModal()</code> /{' '}
                <code>close()</code> を同期し、フォーカス管理・ESCキー処理を担うフック
              </li>
            </ul>

            <h3>Props</h3>

            <h4 id='modal-dialog-props'>
              <code>ModalDialog</code>
            </h4>
            <table aria-labelledby='modal-dialog-props' className='w-full'>
              <thead>
                <tr>
                  <th scope='col' className='text-nowrap'>
                    Props
                  </th>
                  <th scope='col'>説明</th>
                  <th scope='col' className='text-nowrap'>
                    デフォルト
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='whitespace-nowrap'>
                    <code>scroll</code>
                  </td>
                  <td>
                    <div>
                      <code>'inner' | 'outer'</code>
                    </div>
                    スクロールモード。<code>'inner'</code> でコンテンツ内部がスクロール、省略時（
                    <code>'outer'</code>）でダイアログ全体がスクロール
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>
                    <code>width</code>
                  </td>
                  <td>
                    <div>
                      <code>string</code>
                    </div>
                    コンテンツの幅。CSS の長さ値を文字列で指定する（例: <code>'800px'</code>、
                    <code>'100%'</code>）。省略時は <code>fit-content</code>
                  </td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>

            <h4 id='modal-dialog-close-props'>
              <code>ModalDialogClose</code>
            </h4>
            <p>
              ボタン内のテキストとアイコンは固定のため <code>children</code> は受け取りません。
            </p>

            <h2>使い方</h2>

            <h3>基本的な使い方</h3>
            <p>
              <code>useModalDialog</code> で開閉状態を管理し、各コンポーネントに{' '}
              <code>dialogProps</code>・<code>headingProps</code>・<code>closeButtonProps</code>{' '}
              をスプレッドします。
            </p>
            <p>
              <code>headingProps</code> には一意の <code>id</code> が含まれており、
              <code>dialogProps</code> の <code>aria-labelledby</code>{' '}
              と自動的に紐付けられます。これにより、スクリーンリーダーはダイアログが開いたときに見出しテキストをアナウンスします。
            </p>
            <pre>
              <code>
                {`import { useState } from 'react';
import {
  ModalDialog,
  ModalDialogBody,
  ModalDialogClose,
  ModalDialogContent,
  ModalDialogHeader,
  ModalDialogHeading,
} from './ModalDialog';
import { useModalDialog } from './useModalDialog';

const [open, setOpen] = useState(false);
const { dialogProps, headingProps, closeButtonProps } = useModalDialog({
  open,
  onOpenChange: setOpen,
});

<button onClick={() => setOpen(true)}>ダイアログを開く</button>
<ModalDialog {...dialogProps}>
  <ModalDialogContent>
    <ModalDialogHeader>
      <ModalDialogHeading {...headingProps}>タイトル</ModalDialogHeading>
      <ModalDialogClose {...closeButtonProps} />
    </ModalDialogHeader>
    <ModalDialogBody>コンテンツ</ModalDialogBody>
  </ModalDialogContent>
</ModalDialog>`}
              </code>
            </pre>

            <h3>内側をスクロールにする</h3>
            <p>
              <code>ModalDialog</code> に <code>scroll='inner'</code>{' '}
              を指定すると、コンテンツが長い場合にダイアログ内部がスクロールします。
            </p>
            <pre>
              <code>
                {`<ModalDialog {...dialogProps} scroll='inner'>
  <ModalDialogContent>
    <ModalDialogHeader>
      <ModalDialogHeading {...headingProps}>タイトル</ModalDialogHeading>
      <ModalDialogClose {...closeButtonProps} />
    </ModalDialogHeader>
    <ModalDialogBody>長いコンテンツ...</ModalDialogBody>
    <ModalDialogActions>
      <button {...closeButtonProps}>OK</button>
    </ModalDialogActions>
  </ModalDialogContent>
</ModalDialog>`}
              </code>
            </pre>

            <h3>ヘッダーまたはアクションエリアを固定する</h3>
            <p>
              内側スクロール（<code>scroll='inner'</code>）時に、
              <code>ModalDialogScrollArea</code>{' '}
              でスクロールさせたい部分を囲むことで、ヘッダーやアクションエリアを画面上に固定できます。
            </p>
            <pre>
              <code>
                {`{/* ヘッダーとアクションエリアを両方固定する場合 */}
<ModalDialog {...dialogProps} scroll='inner'>
  <ModalDialogContent>
    <ModalDialogHeader>
      <ModalDialogHeading {...headingProps}>タイトル</ModalDialogHeading>
      <ModalDialogClose {...closeButtonProps} />
    </ModalDialogHeader>
    <ModalDialogScrollArea>
      <ModalDialogBody>長いコンテンツ...</ModalDialogBody>
    </ModalDialogScrollArea>
    <ModalDialogActions>
      <button {...closeButtonProps}>OK</button>
    </ModalDialogActions>
  </ModalDialogContent>
</ModalDialog>`}
              </code>
            </pre>

            <h3>幅を指定する</h3>
            <p>
              <code>width</code> prop でコンテンツの幅を固定できます。CSS
              の長さ値を文字列で渡します。省略時は <code>fit-content</code>{' '}
              になります。なお、幅を固定しても画面サイズに応じて最大幅は自動で調整されるようになっています。
            </p>
            <pre>
              <code>
                {`<ModalDialog {...dialogProps} width='800px'>
  {/* ... */}
</ModalDialog>`}
              </code>
            </pre>

            <h3>閉じる操作をキャンセルする</h3>
            <p>
              フォームの未保存状態など、閉じる前に確認が必要な場合は <code>onRequestClose</code> で{' '}
              <code>event.preventDefault()</code> を呼ぶことで閉じる操作を止められます。
            </p>
            <pre>
              <code>
                {`const { dialogProps, headingProps, closeButtonProps } = useModalDialog({
  open,
  onOpenChange: setOpen,
  onRequestClose: (event) => {
    if (hasUnsavedChanges) {
      event.preventDefault();
      // 確認ダイアログを表示するなどの処理
    }
  },
});`}
              </code>
            </pre>

            <h3>スクロールおよびリフローの制御</h3>
            <p>
              本コンポーネントはモーダルダイアログの実装に <code>&lt;dialog&gt;</code>{' '}
              要素を使用しています。モーダルダイアログを適切な形で提示するために、以下に対応する必要があります。
            </p>
            <ol>
              <li>モーダルダイアログが表示されている間、メインコンテンツのスクロールを抑制する</li>
              <li>
                モーダルダイアログの表示／非表示に伴うスクロールバーの有無の変化が引き起こすリフローを抑制する
              </li>
            </ol>
            <p>具体的には、グローバルCSSに以下のようなスタイルを追加します。</p>
            <pre>
              <code>
                {`html {
  scrollbar-gutter: stable; /* 2 */
}

html:has(:modal) {
  overflow: clip; /* 1 */
  scrollbar-gutter: auto; /* 2 */
}

body:has(:modal) {
  overflow: auto; /* 1 */
  scrollbar-gutter: stable; /* 2 */
}`}
              </code>
            </pre>
          </div>
        </Unstyled>
      ),
    },
  },
} satisfies Meta<typeof ModalDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const longParagraphs = Array.from({ length: 50 }, (_, i) => ({ id: `p-${i + 1}` }));
const LongContent = () => (
  <>
    {longParagraphs.map(({ id }) => (
      <p key={id} className='my-4'>
        コンテンツ
      </p>
    ))}
  </>
);

type ModalDialogCustomArgs = {
  hasCloseButton: boolean;
  longContent: boolean;
};

export const Playground: StoryObj<ModalDialogCustomArgs> = {
  render: ({ hasCloseButton, longContent }) => {
    const [open, setOpen] = useState(false);
    const { dialogProps, headingProps, closeButtonProps } = useModalDialog({
      open,
      onOpenChange: setOpen,
    });

    return (
      <>
        <Button size='lg' variant='solid-fill' onClick={() => setOpen(true)}>
          ダイアログを開く
        </Button>
        <ModalDialog {...dialogProps}>
          <ModalDialogContent>
            <ModalDialogHeader>
              <ModalDialogHeading {...headingProps}>タイトル</ModalDialogHeading>
              {hasCloseButton && <ModalDialogClose {...closeButtonProps} />}
            </ModalDialogHeader>
            <ModalDialogBody>{longContent ? <LongContent /> : <>コンテンツ</>}</ModalDialogBody>
            <ModalDialogActions className='flex justify-end'>
              <Button size='lg' variant='solid-fill' {...closeButtonProps}>
                OK
              </Button>
            </ModalDialogActions>
          </ModalDialogContent>
        </ModalDialog>
      </>
    );
  },
  args: {
    hasCloseButton: true,
    longContent: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('ダイアログを開く'));
  },
};

export const InnerScroll: StoryObj<ModalDialogCustomArgs> = {
  render: ({ hasCloseButton, longContent }) => {
    const [open, setOpen] = useState(false);
    const { dialogProps, headingProps, closeButtonProps } = useModalDialog({
      open,
      onOpenChange: setOpen,
    });

    return (
      <>
        <Button size='lg' variant='solid-fill' onClick={() => setOpen(true)}>
          内側がスクロールするダイアログを開く
        </Button>
        <ModalDialog {...dialogProps} scroll='inner'>
          <ModalDialogContent>
            <ModalDialogHeader>
              <ModalDialogHeading {...headingProps}>タイトル</ModalDialogHeading>
              {hasCloseButton && <ModalDialogClose {...closeButtonProps} />}
            </ModalDialogHeader>
            <ModalDialogBody>{longContent ? <LongContent /> : <>コンテンツ</>}</ModalDialogBody>
            <ModalDialogActions className='flex justify-end'>
              <Button size='lg' variant='solid-fill' {...closeButtonProps}>
                OK
              </Button>
            </ModalDialogActions>
          </ModalDialogContent>
        </ModalDialog>
      </>
    );
  },
  args: {
    hasCloseButton: true,
    longContent: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('内側がスクロールするダイアログを開く'));
  },
};

export const InnerScrollWithFixedHeader: StoryObj<ModalDialogCustomArgs> = {
  render: ({ hasCloseButton, longContent }) => {
    const [open, setOpen] = useState(false);
    const { dialogProps, headingProps, closeButtonProps } = useModalDialog({
      open,
      onOpenChange: setOpen,
    });
    return (
      <>
        <Button size='lg' variant='solid-fill' onClick={() => setOpen(true)}>
          ヘッダーが固定されるダイアログを開く
        </Button>
        <ModalDialog {...dialogProps} scroll='inner'>
          <ModalDialogContent>
            <ModalDialogHeader>
              <ModalDialogHeading {...headingProps}>タイトル</ModalDialogHeading>
              {hasCloseButton && <ModalDialogClose {...closeButtonProps} />}
            </ModalDialogHeader>
            <ModalDialogScrollArea>
              <ModalDialogBody>{longContent ? <LongContent /> : <>コンテンツ</>}</ModalDialogBody>
              <ModalDialogActions className='flex justify-end'>
                <Button size='lg' variant='solid-fill' {...closeButtonProps}>
                  OK
                </Button>
              </ModalDialogActions>
            </ModalDialogScrollArea>
          </ModalDialogContent>
        </ModalDialog>
      </>
    );
  },
  args: {
    hasCloseButton: true,
    longContent: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('ヘッダーが固定されるダイアログを開く'));
  },
};

export const InnerScrollWithFixedActions: StoryObj<ModalDialogCustomArgs> = {
  render: ({ hasCloseButton, longContent }) => {
    const [open, setOpen] = useState(false);
    const { dialogProps, headingProps, closeButtonProps } = useModalDialog({
      open,
      onOpenChange: setOpen,
    });
    return (
      <>
        <Button size='lg' variant='solid-fill' onClick={() => setOpen(true)}>
          アクションエリアが固定されるダイアログを開く
        </Button>
        <ModalDialog {...dialogProps} scroll='inner'>
          <ModalDialogContent>
            <ModalDialogScrollArea>
              <ModalDialogHeader>
                <ModalDialogHeading {...headingProps}>タイトル</ModalDialogHeading>
                {hasCloseButton && <ModalDialogClose {...closeButtonProps} />}
              </ModalDialogHeader>
              <ModalDialogBody>{longContent ? <LongContent /> : <>コンテンツ</>}</ModalDialogBody>
            </ModalDialogScrollArea>
            <ModalDialogActions className='flex justify-end'>
              <Button size='lg' variant='solid-fill' {...closeButtonProps}>
                OK
              </Button>
            </ModalDialogActions>
          </ModalDialogContent>
        </ModalDialog>
      </>
    );
  },
  args: {
    hasCloseButton: true,
    longContent: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('アクションエリアが固定されるダイアログを開く'));
  },
};

export const InnerScrollWithFixedBoth: StoryObj<ModalDialogCustomArgs> = {
  render: ({ hasCloseButton, longContent }) => {
    const [open, setOpen] = useState(false);
    const { dialogProps, headingProps, closeButtonProps } = useModalDialog({
      open,
      onOpenChange: setOpen,
    });
    return (
      <>
        <Button size='lg' variant='solid-fill' onClick={() => setOpen(true)}>
          ヘッダーとアクションエリアが固定されるダイアログを開く
        </Button>
        <ModalDialog {...dialogProps} scroll='inner'>
          <ModalDialogContent>
            <ModalDialogHeader>
              <ModalDialogHeading {...headingProps}>タイトル</ModalDialogHeading>
              {hasCloseButton && <ModalDialogClose {...closeButtonProps} />}
            </ModalDialogHeader>
            <ModalDialogScrollArea>
              <ModalDialogBody>{longContent ? <LongContent /> : <>コンテンツ</>}</ModalDialogBody>
            </ModalDialogScrollArea>
            <ModalDialogActions className='flex justify-end'>
              <Button size='lg' variant='solid-fill' {...closeButtonProps}>
                OK
              </Button>
            </ModalDialogActions>
          </ModalDialogContent>
        </ModalDialog>
      </>
    );
  },
  args: {
    hasCloseButton: true,
    longContent: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(
      canvas.getByText('ヘッダーとアクションエリアが固定されるダイアログを開く'),
    );
  },
};

export const FixedWidth: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const { dialogProps, headingProps, closeButtonProps } = useModalDialog({
      open,
      onOpenChange: setOpen,
    });

    return (
      <>
        <Button size='lg' variant='solid-fill' onClick={() => setOpen(true)}>
          幅800pxのダイアログを開く
        </Button>
        <ModalDialog {...dialogProps} width='800px'>
          <ModalDialogContent>
            <ModalDialogHeader>
              <ModalDialogHeading {...headingProps}>プライバシーポリシー</ModalDialogHeading>
              <ModalDialogClose {...closeButtonProps} />
            </ModalDialogHeader>
            <ModalDialogBody>
              <h3 className='mt-6 text-std-20B-160'>第3条（利用目的）</h3>
              <p className='my-4'>
                当サイトが取得した個人情報は、当サイトが提供する行政手続に関する情報提供、申請書作成支援機能、入力内容の整理および文章生成補助、ならびにこれらに付随する利用者サポートを円滑に実施する目的のために利用します。これには、利用者から寄せられた問い合わせへの回答、内容確認のための連絡、利用状況に応じた画面表示や案内内容の調整等が含まれます。
              </p>
              <p className='my-4'>
                また、当サイトは、利用者の入力内容や操作履歴、閲覧情報等を分析し、当サイトの構成、表示方法、機能内容および操作性の改善を図る目的で個人情報を利用する場合があります。これらの分析および検討は、原則として特定の個人を識別できない形で行い、個々の利用者の思想、信条、社会的立場等を推測または評価する目的で行うものではありません。
              </p>
              <p className='my-4'>
                当サイトは、取得した個人情報を、あらかじめ明示した利用目的、またはこれと合理的な関連性を有すると認められる範囲内でのみ取り扱うものとし、当該範囲を超えて利用することはありません。利用目的を変更する必要が生じた場合には、法令に基づき、当サイト上での公表その他適切な方法により、利用者に対して周知を行います。
              </p>
              <p className='my-4'>
                なお、当サイトは架空の行政支援サイトとして設計されており、取得した個人情報を用いて、実際の行政機関への申請手続、審査、決定、または公的な判断を行うものではありません。当サイトにおける支援は、あくまで情報提供および作成補助を目的としたものであり、利用者は、その内容を参考情報として、自らの判断と責任において活用するものとします。
              </p>
              <p className='my-4'>
                当サイトが取得した個人情報は、利用者に対するサービス提供および当サイトの適正な運営に必要な期間に限り利用され、利用目的が達成された後は、適切な方法により管理、廃棄または消去されます。
              </p>
            </ModalDialogBody>
            <ModalDialogActions className='flex justify-end'>
              <Button size='lg' variant='solid-fill' {...closeButtonProps}>
                OK
              </Button>
            </ModalDialogActions>
          </ModalDialogContent>
        </ModalDialog>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('幅800pxのダイアログを開く'));
  },
};
