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
import { Dl, Dt, Dd } from '../Dl';
import { List } from '../List';
import { Tab, TabItem, TabList, TabPanel } from './Tab';
import { useTab } from './useTab';
import { useTabAria } from './useTabAria';

const meta = {
  id: 'Component/DADS v2/Tab',
  title: 'Component/タブ',
  tags: ['autodocs'],
  parameters: {
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
                <code>Tab</code>: ルートラッパー。<code>position</code>{' '}
                propでタブリストの配置位置を管理し、<code>TabContext</code>
                経由で子コンポーネントに伝播する
              </li>
              <li>
                <code>TabList</code>: タブリスト。<code>{'<ul>'}</code>要素として描画する
              </li>
              <li>
                <code>TabItem</code>: 個々のタブ。<code>{'<li><a>'}</code>
                として描画し、開発者は<code>{'<li>'}</code>を意識しない
              </li>
              <li>
                <code>TabPanel</code>: タブパネル。<code>{'<div>'}</code>要素として描画する
              </li>
              <li>
                <code>useTab</code>: Tabキーナビゲーション用フック
              </li>
              <li>
                <code>useTabAria</code>: 矢印キーナビゲーション用フック
              </li>
            </ul>

            <h3 id='tab-type-overview'>タイプ概要</h3>
            <p>タブコンポーネントには3つのタイプがあります。</p>
            <table aria-labelledby='tab-type-overview' className='w-full'>
              <thead>
                <tr>
                  <th scope='col' className='text-nowrap'>
                    タイプ
                  </th>
                  <th scope='col' className='text-nowrap'>
                    使用フック
                  </th>
                  <th scope='col'>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='whitespace-nowrap'>Tabキーナビゲーション</td>
                  <td>
                    <code>useTab</code>
                  </td>
                  <td>
                    ARIAタブロールを使わず、リンクのクリックでパネルを切り替える。情報提供サイトや行政サービスサイトで使用する
                  </td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>矢印キーナビゲーション</td>
                  <td>
                    <code>useTabAria</code>
                  </td>
                  <td>
                    ARIA Authoring Practices
                    GuideのTabsパターンに準拠したタブ。ウェブアプリケーションや管理画面で使用する
                  </td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>リンクリスト</td>
                  <td>不要</td>
                  <td>ページ遷移型のリンクリスト。各タブがページに別れている場合に使用する</td>
                </tr>
              </tbody>
            </table>

            <h3>Props</h3>

            <h4 id='tab-props'>
              <code>Tab</code>
            </h4>
            <table aria-labelledby='tab-props' className='w-full'>
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
                    <code>position</code>
                  </td>
                  <td>
                    <div>
                      <code>'top' | 'bottom' | 'left' | 'right'</code>
                    </div>
                    タブリストの配置位置。<code>'bottom'</code>の場合はDOM上もパネルの後に
                    <code>TabList</code>を配置する
                  </td>
                  <td>
                    <code>'top'</code>
                  </td>
                </tr>
              </tbody>
            </table>

            <h4 id='tab-list-props'>
              <code>TabList</code>
            </h4>
            <p>
              カスタムPropsはありません。<code>{'<ul>'}</code>
              のすべてのPropsを受け付けます。
            </p>

            <h4 id='tab-item-props'>
              <code>TabItem</code>
            </h4>
            <table aria-labelledby='tab-item-props' className='w-full'>
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
                    <code>href</code>
                  </td>
                  <td>
                    <div>
                      <code>string</code>
                    </div>
                    リンク先URL。リンクリストタイプで使用する。Tabキー・矢印キーナビゲーションでは
                    <code>getTabProps</code>が自動で設定する
                  </td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>

            <h4 id='tab-panel-props'>
              <code>TabPanel</code>
            </h4>
            <p>
              カスタムPropsはありません。<code>{'<div>'}</code>
              のすべてのPropsを受け付けます。
            </p>

            <h2>Tabキーナビゲーションタイプ</h2>

            <h3>仕様</h3>

            <h4 id='use-tab-options'>
              <code>useTab</code> オプション
            </h4>
            <table aria-labelledby='use-tab-options' className='w-full'>
              <thead>
                <tr>
                  <th scope='col' className='text-nowrap'>
                    オプション
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
                    <code>defaultSelectedIndex</code>
                  </td>
                  <td>
                    <div>
                      <code>number</code>
                    </div>
                    初期選択タブのインデックス（0始まり）
                  </td>
                  <td>
                    <code>0</code>
                  </td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>
                    <code>onTabChange</code>
                  </td>
                  <td>
                    <div>
                      <code>{'(detail: TabChangeDetail) => void'}</code>
                    </div>
                    タブ切り替え時に呼ばれるコールバック
                  </td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>

            <h4>見出しの自動挿入</h4>
            <p>
              マウント時に各パネルの先頭にvisually-hidden見出しを自動で挿入します。見出しレベルは
              <code>TabList</code>の<code>aria-labelledby</code>
              が参照する見出し要素のレベル＋1になります（例: 参照先が<code>{'<h2>'}</code>
              の場合、挿入される見出しは<code>{'<h3>'}</code>
              ）。スクリーンリーダーでパネルにフォーカスが移ったとき、ユーザーがパネルの内容を把握できるようにします。
            </p>

            <h3>使い方</h3>
            <p>
              <code>useTab</code>フックを使用します。<code>TabList</code>に
              <code>aria-labelledby</code>でタブ見出しを関連付けてください。
            </p>
            <pre>
              <code>
                {`import { Tab, TabItem, TabList, TabPanel } from './Tab';
import { useTab } from './useTab';

function MyTabComponent() {
  const { getListProps, getTabProps, getPanelProps } = useTab({
    defaultSelectedIndex: 0,
  });

  return (
    <>
      <h2 id="tab-heading">タブ見出し</h2>
      <Tab>
        <TabList {...getListProps()} aria-labelledby="tab-heading">
          <TabItem {...getTabProps(0)}>タブ1</TabItem>
          <TabItem {...getTabProps(1)}>タブ2</TabItem>
          <TabItem {...getTabProps(2)}>タブ3</TabItem>
        </TabList>
        <TabPanel {...getPanelProps(0)}>パネル1の内容</TabPanel>
        <TabPanel {...getPanelProps(1)}>パネル2の内容</TabPanel>
        <TabPanel {...getPanelProps(2)}>パネル3の内容</TabPanel>
      </Tab>
    </>
  );
}`}
              </code>
            </pre>

            <h4>タブ変更イベントを受け取る</h4>
            <p>
              <code>onTabChange</code>オプションでタブ切り替え時のコールバックを受け取れます。
            </p>
            <pre>
              <code>
                {`const { getListProps, getTabProps, getPanelProps } = useTab({
  defaultSelectedIndex: 0,
  onTabChange: ({ selectedIndex, selectedTabLabel }) => {
    console.log(selectedIndex, selectedTabLabel);
  },
});`}
              </code>
            </pre>

            <h4>タブリストをパネルの下部に配置する</h4>
            <p>
              <code>position="bottom"</code>の場合は、DOM上でも<code>TabList</code>を
              <code>TabPanel</code>の後に配置してください。
            </p>
            <pre>
              <code>
                {`<Tab position="bottom">
  <TabPanel {...getPanelProps(0)}>パネル1の内容</TabPanel>
  <TabPanel {...getPanelProps(1)}>パネル2の内容</TabPanel>
  {/* TabList はパネルの後 */}
  <TabList {...getListProps()} aria-labelledby="tab-heading">
    <TabItem {...getTabProps(0)}>タブ1</TabItem>
    <TabItem {...getTabProps(1)}>タブ2</TabItem>
  </TabList>
</Tab>`}
              </code>
            </pre>

            <h2>矢印キーナビゲーションタイプ</h2>

            <h3>仕様</h3>

            <h4 id='use-tab-aria-options'>
              <code>useTabAria</code> オプション
            </h4>
            <table aria-labelledby='use-tab-aria-options' className='w-full'>
              <thead>
                <tr>
                  <th scope='col' className='text-nowrap'>
                    オプション
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
                    <code>defaultSelectedIndex</code>
                  </td>
                  <td>
                    <div>
                      <code>number</code>
                    </div>
                    初期選択タブのインデックス（0始まり）
                  </td>
                  <td>
                    <code>0</code>
                  </td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>
                    <code>activation</code>
                  </td>
                  <td>
                    <div>
                      <code>'auto' | 'manual'</code>
                    </div>
                    <code>'auto'</code>: 矢印キーでフォーカス移動と同時にパネルを選択する
                    <br />
                    <code>'manual'</code>: 矢印キーはフォーカスのみ移動し、Enter/Spaceで選択する
                  </td>
                  <td>
                    <code>'auto'</code>
                  </td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>
                    <code>onTabChange</code>
                  </td>
                  <td>
                    <div>
                      <code>{'(detail: TabChangeDetail) => void'}</code>
                    </div>
                    タブ切り替え時に呼ばれるコールバック
                  </td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>

            <h4 id='arrow-key-keyboard'>キーボード操作</h4>
            <p>
              フォーカスと選択の挙動を <code>activation</code>{' '}
              オプションで切り替えることができます。原則として <code>'auto'</code>
              （フォーカス追従型）を推奨しますが、タブ選択と同時に内容の読み込み等の重い処理が走る場合などは{' '}
              <code>'manual'</code> を使用してください。
            </p>

            <h5 id='arrow-key-keyboard-auto'>
              <code>activation="auto"</code>（デフォルト：フォーカス追従型）
            </h5>
            <table aria-labelledby='arrow-key-keyboard-auto' className='w-full'>
              <thead>
                <tr>
                  <th scope='col' className='text-nowrap'>
                    キー
                  </th>
                  <th scope='col'>動作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='whitespace-nowrap'>上下左右矢印キー</td>
                  <td>タブを移動して選択</td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>
                    <kbd>Home</kbd>
                  </td>
                  <td>最初のタブに移動して選択</td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>
                    <kbd>End</kbd>
                  </td>
                  <td>最後のタブに移動して選択</td>
                </tr>
              </tbody>
            </table>

            <h5 id='arrow-key-keyboard-manual'>
              <code>activation="manual"</code>（手動型）
            </h5>
            <table aria-labelledby='arrow-key-keyboard-manual' className='w-full'>
              <thead>
                <tr>
                  <th scope='col' className='text-nowrap'>
                    キー
                  </th>
                  <th scope='col'>動作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='whitespace-nowrap'>上下左右矢印キー</td>
                  <td>フォーカスを移動</td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>
                    <kbd>Home</kbd>
                  </td>
                  <td>最初のタブにフォーカスを移動</td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>
                    <kbd>End</kbd>
                  </td>
                  <td>最後のタブにフォーカスを移動</td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>
                    <kbd>Enter</kbd>
                  </td>
                  <td>フォーカス中のタブを選択</td>
                </tr>
                <tr>
                  <td className='whitespace-nowrap'>
                    <kbd>Space</kbd>
                  </td>
                  <td>フォーカス中のタブを選択</td>
                </tr>
              </tbody>
            </table>

            <h3>使い方</h3>
            <p>
              <code>useTabAria</code>フックを使用します。<code>role="tab"</code>/
              <code>role="tablist"</code>/<code>role="tabpanel"</code>はフックが自動で付与します。
            </p>
            <pre>
              <code>
                {`import { Tab, TabItem, TabList, TabPanel } from './Tab';
import { useTabAria } from './useTabAria';

function MyAriaTabComponent() {
  const { getListProps, getTabProps, getPanelProps } = useTabAria({
    defaultSelectedIndex: 0,
    activation: 'auto',
  });

  return (
    <Tab>
      <TabList {...getListProps()}>
        <TabItem {...getTabProps(0)}>タブ1</TabItem>
        <TabItem {...getTabProps(1)}>タブ2</TabItem>
        <TabItem {...getTabProps(2)}>タブ3</TabItem>
      </TabList>
      <TabPanel {...getPanelProps(0)}>パネル1の内容</TabPanel>
      <TabPanel {...getPanelProps(1)}>パネル2の内容</TabPanel>
      <TabPanel {...getPanelProps(2)}>パネル3の内容</TabPanel>
    </Tab>
  );
}`}
              </code>
            </pre>

            <h4>タブ変更イベントを受け取る</h4>
            <p>
              <code>onTabChange</code>オプションでタブ切り替え時のコールバックを受け取れます。
            </p>
            <pre>
              <code>
                {`const { getListProps, getTabProps, getPanelProps } = useTabAria({
  defaultSelectedIndex: 0,
  onTabChange: ({ selectedIndex, selectedTabLabel }) => {
    console.log(selectedIndex, selectedTabLabel);
  },
});`}
              </code>
            </pre>

            <h4>タブリストをパネルの下部に配置する</h4>
            <p>
              <code>position="bottom"</code>の場合は、DOM上でも<code>TabList</code>を
              <code>TabPanel</code>の後に配置してください。
            </p>
            <pre>
              <code>
                {`<Tab position="bottom">
  <TabPanel {...getPanelProps(0)}>パネル1の内容</TabPanel>
  <TabPanel {...getPanelProps(1)}>パネル2の内容</TabPanel>
  {/* TabList はパネルの後 */}
  <TabList {...getListProps()}>
    <TabItem {...getTabProps(0)}>タブ1</TabItem>
    <TabItem {...getTabProps(1)}>タブ2</TabItem>
  </TabList>
</Tab>`}
              </code>
            </pre>

            <h2>リンクリストタイプ</h2>

            <h3>使い方</h3>
            <p>
              JavaScriptなしで動作する静的なリンクリストです。フックは不要です。現在のページに対応するタブに
              <code>aria-current="page"</code>を付与し、<code>href</code>属性を省略してください。
            </p>
            <pre>
              <code>
                {`import { Tab, TabItem, TabList, TabPanel } from './Tab';

function MyStaticTabComponent() {
  return (
    <Tab>
      <TabList>
        <TabItem aria-current="page">ページA</TabItem>
        <TabItem href="/page-b">ページB</TabItem>
        <TabItem href="/page-c">ページC</TabItem>
      </TabList>
      <TabPanel>現在のページの内容</TabPanel>
    </Tab>
  );
}`}
              </code>
            </pre>

            <h2>参考情報</h2>
            <ul>
              <li>
                <a
                  href='https://www.w3.org/WAI/ARIA/apg/patterns/tabs/'
                  target='_blank'
                  rel='noreferrer'
                >
                  WAI-ARIA Authoring Practices Guide: Tabs Pattern
                </a>
              </li>
            </ul>
          </div>
        </Unstyled>
      ),
    },
  },
} satisfies Meta;

export default meta;

type PlaygroundArgs = {
  position: 'top' | 'bottom' | 'left' | 'right';
};

export const Playground: StoryObj<PlaygroundArgs> = {
  name: 'Playground (Tab key navigation)',
  render: (args) => {
    const { getListProps, getTabProps, getPanelProps } = useTab({
      defaultSelectedIndex: 0,
    });

    const tabList = (
      <TabList {...getListProps()} aria-labelledby='tab-heading'>
        <TabItem {...getTabProps(0)}>タブラベル</TabItem>
        <TabItem {...getTabProps(1)}>タブラベル</TabItem>
        <TabItem {...getTabProps(2)}>タブラベル</TabItem>
        <TabItem {...getTabProps(3)}>タブラベル</TabItem>
        <TabItem {...getTabProps(4)}>タブラベル</TabItem>
      </TabList>
    );

    const panels = (
      <>
        <TabPanel {...getPanelProps(0)}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </p>
        </TabPanel>
        <TabPanel {...getPanelProps(1)}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p>Ut enim ad minim veniam.</p>
        </TabPanel>
        <TabPanel {...getPanelProps(2)}>
          <List spacing='4'>
            <li>リスト項目あ</li>
            <li>リスト項目い</li>
            <li>リスト項目う</li>
            <li>リスト項目え</li>
            <li>リスト項目お</li>
            <li>リスト項目か</li>
          </List>
        </TabPanel>
        <TabPanel {...getPanelProps(3)}>
          <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Dl>
            <Dt>用語あ</Dt>
            <Dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Dd>
            <Dt>用語い</Dt>
            <Dd>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Dd>
          </Dl>
        </TabPanel>
        <TabPanel {...getPanelProps(4)}>タブパネルの内容（5番目）</TabPanel>
      </>
    );

    return (
      <>
        <h2 id='tab-heading' className='mb-4 text-std-24B-150'>
          タブ見出し
        </h2>
        <Tab position={args.position}>
          {args.position === 'bottom' ? (
            <>
              {panels}
              {tabList}
            </>
          ) : (
            <>
              {tabList}
              {panels}
            </>
          )}
        </Tab>
      </>
    );
  },
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
  args: {
    position: 'top',
  },
};

type PlaygroundAriaArgs = {
  position: 'top' | 'bottom' | 'left' | 'right';
  activation: 'auto' | 'manual';
};

export const PlaygroundAria: StoryObj<PlaygroundAriaArgs> = {
  name: 'Playground (Arrow key navigation)',
  render: (args) => {
    const { getListProps, getTabProps, getPanelProps } = useTabAria({
      defaultSelectedIndex: 0,
      activation: args.activation,
    });

    const tabList = (
      <TabList {...getListProps()}>
        <TabItem {...getTabProps(0)}>タブラベル</TabItem>
        <TabItem {...getTabProps(1)}>タブラベル</TabItem>
        <TabItem {...getTabProps(2)}>タブラベル</TabItem>
        <TabItem {...getTabProps(3)}>タブラベル</TabItem>
        <TabItem {...getTabProps(4)}>タブラベル</TabItem>
      </TabList>
    );

    const panels = (
      <>
        <TabPanel {...getPanelProps(0)}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </p>
        </TabPanel>
        <TabPanel {...getPanelProps(1)}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p>Ut enim ad minim veniam.</p>
        </TabPanel>
        <TabPanel {...getPanelProps(2)}>
          <List spacing='4'>
            <li>リスト項目あ</li>
            <li>リスト項目い</li>
            <li>リスト項目う</li>
            <li>リスト項目え</li>
            <li>リスト項目お</li>
            <li>リスト項目か</li>
          </List>
        </TabPanel>
        <TabPanel {...getPanelProps(3)}>
          <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Dl>
            <Dt>用語あ</Dt>
            <Dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Dd>
            <Dt>用語い</Dt>
            <Dd>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Dd>
          </Dl>
        </TabPanel>
        <TabPanel {...getPanelProps(4)}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <blockquote>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </blockquote>
        </TabPanel>
      </>
    );

    return (
      <Tab position={args.position}>
        {args.position === 'bottom' ? (
          <>
            {panels}
            {tabList}
          </>
        ) : (
          <>
            {tabList}
            {panels}
          </>
        )}
      </Tab>
    );
  },
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    activation: {
      control: { type: 'radio' },
      options: ['auto', 'manual'],
    },
  },
  args: {
    position: 'top',
    activation: 'auto',
  },
};

type PlaygroundStaticArgs = {
  position: 'top' | 'bottom' | 'left' | 'right';
};

export const PlaygroundStatic: StoryObj<PlaygroundStaticArgs> = {
  name: 'Playground (Classic link list)',
  render: (args) => {
    const tabList = (
      <TabList>
        <TabItem href='#' aria-current='page'>
          タブラベル
        </TabItem>
        <TabItem href='#'>タブラベル</TabItem>
        <TabItem href='#'>タブラベル</TabItem>
        <TabItem href='#'>タブラベル</TabItem>
        <TabItem href='#'>タブラベル</TabItem>
      </TabList>
    );

    const panel = <TabPanel>タブパネルの内容</TabPanel>;

    return (
      <Tab position={args.position}>
        {args.position === 'bottom' ? (
          <>
            {panel}
            {tabList}
          </>
        ) : (
          <>
            {tabList}
            {panel}
          </>
        )}
      </Tab>
    );
  },
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
  args: {
    position: 'top',
  },
};
