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
import { type ReactNode, useEffect, useId, useRef, useState } from 'react';
import { Button } from '../Button';
import {
  ProgressIndicator,
  ProgressIndicatorLinear,
  ProgressIndicatorSpinner,
  ProgressIndicatorStatic,
} from './ProgressIndicator';
import { useProgressIndicatorAnnouncer } from './useProgressIndicatorAnnouncer';

const meta = {
  id: 'Component/DADS v2/ProgressIndicator',
  title: 'Component/プログレスインジケーター',
  component: ProgressIndicator,
  tags: ['autodocs'],
  parameters: {
    controls: { include: ['label'] },
    docs: {
      page: () => (
        <>
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
                  <code>ProgressIndicator</code>:
                  ルートコンテナ。レイアウトタイプ・通知方針・進捗値などを管理する
                </li>
                <li>
                  <code>ProgressIndicatorSpinner</code>: スピナー型のインジケーター
                </li>
                <li>
                  <code>ProgressIndicatorLinear</code>: リニア型のインジケーター
                </li>
                <li>
                  <code>ProgressIndicatorStatic</code>: 静的（アニメーションなし）インジケーター
                </li>
                <li>
                  <code>useProgressIndicatorAnnouncer</code>:
                  スクリーンリーダー通知用テキストを返すフック
                </li>
              </ul>

              <h3>Props</h3>

              <h4 id='progress-indicator-props'>
                <code>ProgressIndicator</code>
              </h4>
              <table aria-labelledby='progress-indicator-props' className='w-full'>
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
                      <code>type</code>
                    </td>
                    <td>
                      <div>
                        <code>'stacked' | 'inlined' | 'stacked-underlay'</code>
                      </div>
                      レイアウトタイプ。<code>stacked</code>はインジケーターとラベルを縦並び、
                      <code>inlined</code>は横並び、<code>stacked-underlay</code>
                      は縦並び+背景パネル付き
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td className='whitespace-nowrap'>
                      <code>value</code>
                    </td>
                    <td>
                      <div>
                        <code>number</code>
                      </div>
                      進捗率（0〜100）。指定すると確定進捗（Fill）モード、省略すると不確定進捗（Loop）モード
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td className='whitespace-nowrap'>
                      <code>active</code>
                    </td>
                    <td>
                      <div>
                        <code>boolean</code>
                      </div>
                      <code>false</code>
                      のときコンポーネントは何も描画しない。動的にローディングを開始・停止する場合にステートで制御する
                    </td>
                    <td>
                      <code>true</code>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h4 id='indicator-props'>
                <code>ProgressIndicatorSpinner</code> / <code>ProgressIndicatorLinear</code> /{' '}
                <code>ProgressIndicatorStatic</code> 共通
              </h4>
              <table aria-labelledby='indicator-props' className='w-full'>
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
                      <code>size</code>
                    </td>
                    <td>
                      <div>
                        <code>'lg' | 'sm'</code>
                      </div>
                      インジケーターのサイズ。スピナーは48/24px、リニアは240/80px、静的は48/24px
                    </td>
                    <td>
                      <code>'lg'</code>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3>機能仕様</h3>

              <h4>進捗モード</h4>
              <ul>
                <li>
                  <strong>Loop（不確定進捗）</strong>: <code>value</code>{' '}
                  propを省略した場合。処理時間が不明な場合に使用します。インジケーターがループアニメーションを表示します。
                </li>
                <li>
                  <strong>Fill（確定進捗）</strong>: <code>value</code>{' '}
                  propを指定した場合。進捗率が把握できる場合に使用します。値に応じてインジケーターが充填されます。
                </li>
              </ul>

              <h4 id='announce-timing'>スクリーンリーダー通知</h4>
              <p>
                <code>useProgressIndicatorAnnouncer</code>
                フックの戻り値を非表示の<code>role='status'</code>
                要素に差し込むことで、以下のタイミングでスクリーンリーダーに通知できます。
              </p>
              <table aria-labelledby='announce-timing'>
                <thead>
                  <tr>
                    <th scope='col'>タイミング</th>
                    <th scope='col'>通知内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ローディング開始時</td>
                    <td>読み込みを開始しました</td>
                  </tr>
                  <tr>
                    <td>
                      開始から<code>announceInterval</code>秒後
                    </td>
                    <td>
                      不確定進捗: 読み込み中です / 確定進捗: &#123;value&#125;% 読み込みました。
                    </td>
                  </tr>
                  <tr>
                    <td>
                      以降<code>announceInterval</code>秒ごと
                    </td>
                    <td>同上（繰り返し通知）</td>
                  </tr>
                  <tr>
                    <td>ローディング完了時</td>
                    <td>読み込みが完了しました</td>
                  </tr>
                </tbody>
              </table>

              <h4>
                <code>prefers-reduced-motion</code>
              </h4>
              <p>
                <code>prefers-reduced-motion: reduce</code>
                が有効な環境では、スピナーおよびリニアのアニメーションが停止されます。
              </p>

              <h2>使い方</h2>

              <h3>基本的な使い方</h3>
              <p>
                <code>ProgressIndicator</code>
                をルートに、子要素としてインジケーター（Spinner/Linear/Static）とラベル要素を配置します。
                <code>aria-labelledby</code>属性でラベルを関連付けてください。
              </p>
              <pre>
                <code>
                  {`import { ProgressIndicator, ProgressIndicatorSpinner } from './ProgressIndicator';

const labelId = useId();

<ProgressIndicator type='stacked' aria-labelledby={labelId}>
  <ProgressIndicatorSpinner size='lg' />
  <span id={labelId}>読み込み中</span>
</ProgressIndicator>;`}
                </code>
              </pre>

              <h3>読み込みを開始・停止する</h3>
              <p>
                <code>active</code> propで表示・非表示を制御します。<code>false</code>
                を渡すとコンポーネントは何も描画しません。
              </p>
              <pre>
                <code>
                  {`const [active, setActive] = useState(false);

<Button onClick={() => setActive(true)}>ローディング開始</Button>
<ProgressIndicator type='stacked' active={active} aria-labelledby={labelId}>
  <ProgressIndicatorSpinner size='lg' />
  <span id={labelId}>読み込み中</span>
</ProgressIndicator>`}
                </code>
              </pre>

              <h3>確定進捗でパーセンテージを表示する</h3>
              <p>
                確定進捗（Fill）モードでパーセンテージを表示するには、<code>value</code>{' '}
                propの値からラベル内に表示要素を組み立てます。
              </p>
              <pre>
                <code>
                  {`const percentage = Math.round(value);

<ProgressIndicator type='stacked' value={value} aria-labelledby={labelId}>
  <ProgressIndicatorLinear size='lg' />
  <span id={labelId}>
    読み込み中 (
    <span className='inline-block min-w-[2ch] text-right tabular-nums'>{percentage}</span>%)
  </span>
</ProgressIndicator>`}
                </code>
              </pre>

              <h3>
                <code>useProgressIndicatorAnnouncer</code>フック
              </h3>
              <p>
                スクリーンリーダーへ進捗状況を通知するためのフックです。返ってきたテキストを非表示の
                <code>role='status'</code>要素に差し込んで使用します。
              </p>
              <p>
                ユーザーがボタンを押す・フォームを送信するなど、明示的な操作でローディングが開始される場合に使用してください。無限スクロール・画面遷移・バックグラウンド処理など、暗黙的な操作で開始されるローディングではスクリーンリーダーへの通知は不要なため、本フックは使いません。
              </p>

              <h4>コード使用例</h4>
              <pre>
                <code>
                  {`import { ProgressIndicator, ProgressIndicatorSpinner, useProgressIndicatorAnnouncer } from './ProgressIndicator';

const MyComponent = () => {
  const [active, setActive] = useState(false);
  const announceText = useProgressIndicatorAnnouncer({ active });

  return (
    <>
      <ProgressIndicator type='stacked' active={active} aria-labelledby={labelId}>
        <ProgressIndicatorSpinner size='lg' />
        <span id={labelId}>読み込み中</span>
      </ProgressIndicator>
      <span role='status' className='sr-only'>{announceText}</span>
    </>
  );
};`}
                </code>
              </pre>

              <h4 id='use-announcer-options'>オプション</h4>
              <table aria-labelledby='use-announcer-options' className='w-full table-fixed'>
                <colgroup>
                  <col style={{ width: '20%' }} />
                  <col />
                  <col style={{ width: '14%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope='col'>オプション</th>
                    <th scope='col'>説明</th>
                    <th scope='col'>デフォルト</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='whitespace-nowrap'>
                      <code>active</code>
                    </td>
                    <td>
                      <div>
                        <code>boolean</code>
                      </div>
                      ローディング中かどうか
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td className='whitespace-nowrap'>
                      <code>value</code>
                    </td>
                    <td>
                      <div>
                        <code>number</code>
                      </div>
                      進捗率。指定するとパーセンテージ付きで通知される
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td className='whitespace-nowrap'>
                      <code>announceInterval</code>
                    </td>
                    <td>
                      <div>
                        <code>number</code>
                      </div>
                      最初の進捗通知タイミングおよび繰り返し間隔（秒）
                    </td>
                    <td>
                      <code>5</code>
                    </td>
                  </tr>
                  <tr>
                    <td className='whitespace-nowrap'>
                      <code>messages</code>
                    </td>
                    <td>
                      <div>
                        <code>ProgressIndicatorAnnouncerMessages</code>
                      </div>
                      カスタム通知メッセージ。デフォルト値については後述の「利用可能なメッセージキー」を参照
                    </td>
                    <td>デフォルトメッセージ</td>
                  </tr>
                </tbody>
              </table>

              <h3>通知メッセージのカスタマイズ</h3>
              <p>
                <code>useProgressIndicatorAnnouncer</code>の<code>messages</code>
                オプションで、通知メッセージを上書きできます。
              </p>
              <pre>
                <code>
                  {`const announceText = useProgressIndicatorAnnouncer({
  active,
  value,
  messages: {
    start: 'Loading started',
    end: 'Loading complete',
    long: 'Still loading',
    longWithValue: '{value}% loaded',
  },
});`}
                </code>
              </pre>

              <h4 id='available-announce-messages'>利用可能なメッセージキー</h4>
              <table aria-labelledby='available-announce-messages'>
                <thead>
                  <tr>
                    <th scope='col'>キー</th>
                    <th scope='col'>デフォルトメッセージ</th>
                    <th scope='col'>利用可能な変数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>start</code>
                    </td>
                    <td>読み込みを開始しました</td>
                    <td>なし</td>
                  </tr>
                  <tr>
                    <td>
                      <code>end</code>
                    </td>
                    <td>読み込みが完了しました</td>
                    <td>なし</td>
                  </tr>
                  <tr>
                    <td>
                      <code>long</code>
                    </td>
                    <td>読み込み中です</td>
                    <td>なし</td>
                  </tr>
                  <tr>
                    <td>
                      <code>longWithValue</code>
                    </td>
                    <td>&#123;value&#125;% 読み込みました。</td>
                    <td>
                      <code>&#123;value&#125;</code>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3>通知間隔のカスタマイズ</h3>
              <p>
                <code>announceInterval</code>
                オプションで、読み込み開始後の最初の通知タイミングおよびその後の繰り返し間隔を秒単位で指定できます。省略した場合は
                <code>5</code>秒です。
              </p>
              <pre>
                <code>
                  {`const announceText = useProgressIndicatorAnnouncer({
  active,
  announceInterval: 10,
});`}
                </code>
              </pre>
            </div>
          </Unstyled>
        </>
      ),
    },
  },
} satisfies Meta<typeof ProgressIndicator>;

export default meta;

// loop 系アニメーションを一時停止できるラッパー。
// コンポーネント本体には持たせず、Storybook 上のみで提供する。
const PausableLoopFrame = ({ children }: { children: ReactNode }) => {
  const [paused, setPaused] = useState(false);
  return (
    <div className='flex flex-col items-center gap-8'>
      <Button size='sm' variant='outline' onClick={() => setPaused((p) => !p)}>
        {paused ? 'アニメーションを再生' : 'アニメーションを一時停止'}
      </Button>
      <div className={paused ? '[&_*]:![animation-play-state:paused]' : ''}>{children}</div>
    </div>
  );
};

interface SpinnerLoopProps {
  label: string;
}

export const SpinnerLoop: StoryObj<SpinnerLoopProps> = {
  name: 'Spinner (Loop)',
  render: (args) => {
    const labelId1 = useId();
    const labelId2 = useId();
    const labelId3 = useId();
    const hasLabel = args.label.trim() !== '';
    return (
      <PausableLoopFrame>
        <div className='grid gap-16'>
          <ProgressIndicator
            type='stacked'
            aria-labelledby={hasLabel ? labelId1 : undefined}
            aria-label={hasLabel ? undefined : '読み込み中'}
          >
            <ProgressIndicatorSpinner size='lg' />
            {hasLabel && <span id={labelId1}>{args.label}</span>}
          </ProgressIndicator>

          <ProgressIndicator
            type='inlined'
            aria-labelledby={hasLabel ? labelId2 : undefined}
            aria-label={hasLabel ? undefined : '読み込み中'}
          >
            <ProgressIndicatorSpinner size='sm' />
            {hasLabel && <span id={labelId2}>{args.label}</span>}
          </ProgressIndicator>

          <ProgressIndicator
            type='stacked-underlay'
            aria-labelledby={hasLabel ? labelId3 : undefined}
            aria-label={hasLabel ? undefined : '読み込み中'}
          >
            <ProgressIndicatorSpinner size='lg' />
            {hasLabel && <span id={labelId3}>{args.label}</span>}
          </ProgressIndicator>
        </div>
      </PausableLoopFrame>
    );
  },
  argTypes: {
    label: { control: { type: 'text' } },
  },
  args: {
    label: '読み込み中',
  },
};

interface SpinnerFillProps {
  value: number;
  label: string;
}

export const SpinnerFill: StoryObj<SpinnerFillProps> = {
  name: 'Spinner (Fill)',
  render: (args) => {
    const labelId1 = useId();
    const labelId2 = useId();
    const labelId3 = useId();
    const percentage = Math.round(args.value);
    const hasLabel = args.label.trim() !== '';
    return (
      <div className='grid gap-16'>
        <ProgressIndicator
          type='stacked'
          value={args.value}
          aria-labelledby={hasLabel ? labelId1 : undefined}
          aria-label={hasLabel ? undefined : '読み込み中'}
        >
          <ProgressIndicatorSpinner size='lg' />
          {hasLabel && (
            <span id={labelId1}>
              {args.label} (
              <span className='inline-block min-w-[2ch] text-right tabular-nums'>{percentage}</span>
              %)
            </span>
          )}
        </ProgressIndicator>

        <ProgressIndicator
          type='inlined'
          value={args.value}
          aria-labelledby={hasLabel ? labelId2 : undefined}
          aria-label={hasLabel ? undefined : '読み込み中'}
        >
          <ProgressIndicatorSpinner size='sm' />
          {hasLabel && (
            <span id={labelId2}>
              {args.label} (
              <span className='inline-block min-w-[2ch] text-right tabular-nums'>{percentage}</span>
              %)
            </span>
          )}
        </ProgressIndicator>

        <ProgressIndicator
          type='stacked-underlay'
          value={args.value}
          aria-labelledby={hasLabel ? labelId3 : undefined}
          aria-label={hasLabel ? undefined : '読み込み中'}
        >
          <ProgressIndicatorSpinner size='lg' />
          {hasLabel && (
            <span id={labelId3}>
              {args.label} (
              <span className='inline-block min-w-[2ch] text-right tabular-nums'>{percentage}</span>
              %)
            </span>
          )}
        </ProgressIndicator>
      </div>
    );
  },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 5 } },
    label: { control: { type: 'text' } },
  },
  args: {
    value: 35,
    label: '読み込み中',
  },
  parameters: {
    controls: { include: ['label', 'value'] },
  },
};

interface LinearLoopProps {
  label: string;
}

export const LinearLoop: StoryObj<LinearLoopProps> = {
  name: 'Linear (Loop)',
  render: (args) => {
    const labelId1 = useId();
    const labelId2 = useId();
    const labelId3 = useId();
    const hasLabel = args.label.trim() !== '';
    return (
      <PausableLoopFrame>
        <div className='grid gap-16'>
          <ProgressIndicator
            type='stacked'
            aria-labelledby={hasLabel ? labelId1 : undefined}
            aria-label={hasLabel ? undefined : '読み込み中'}
          >
            <ProgressIndicatorLinear size='lg' />
            {hasLabel && <span id={labelId1}>{args.label}</span>}
          </ProgressIndicator>

          <ProgressIndicator
            type='inlined'
            aria-labelledby={hasLabel ? labelId2 : undefined}
            aria-label={hasLabel ? undefined : '読み込み中'}
          >
            <ProgressIndicatorLinear size='sm' />
            {hasLabel && <span id={labelId2}>{args.label}</span>}
          </ProgressIndicator>

          <ProgressIndicator
            type='stacked-underlay'
            aria-labelledby={hasLabel ? labelId3 : undefined}
            aria-label={hasLabel ? undefined : '読み込み中'}
          >
            <ProgressIndicatorLinear size='lg' />
            {hasLabel && <span id={labelId3}>{args.label}</span>}
          </ProgressIndicator>
        </div>
      </PausableLoopFrame>
    );
  },
  argTypes: {
    label: { control: { type: 'text' } },
  },
  args: {
    label: '読み込み中',
  },
};

interface LinearFillProps {
  value: number;
  label: string;
}

export const LinearFill: StoryObj<LinearFillProps> = {
  name: 'Linear (Fill)',
  render: (args) => {
    const labelId1 = useId();
    const labelId2 = useId();
    const labelId3 = useId();
    const percentage = Math.round(args.value);
    const hasLabel = args.label.trim() !== '';
    return (
      <div className='grid gap-16'>
        <ProgressIndicator
          type='stacked'
          value={args.value}
          aria-labelledby={hasLabel ? labelId1 : undefined}
          aria-label={hasLabel ? undefined : '読み込み中'}
        >
          <ProgressIndicatorLinear size='lg' />
          {hasLabel && (
            <span id={labelId1}>
              {args.label} (
              <span className='inline-block min-w-[2ch] text-right tabular-nums'>{percentage}</span>
              %)
            </span>
          )}
        </ProgressIndicator>

        <ProgressIndicator
          type='inlined'
          value={args.value}
          aria-labelledby={hasLabel ? labelId2 : undefined}
          aria-label={hasLabel ? undefined : '読み込み中'}
        >
          <ProgressIndicatorLinear size='sm' />
          {hasLabel && (
            <span id={labelId2}>
              {args.label} (
              <span className='inline-block min-w-[2ch] text-right tabular-nums'>{percentage}</span>
              %)
            </span>
          )}
        </ProgressIndicator>

        <ProgressIndicator
          type='stacked-underlay'
          value={args.value}
          aria-labelledby={hasLabel ? labelId3 : undefined}
          aria-label={hasLabel ? undefined : '読み込み中'}
        >
          <ProgressIndicatorLinear size='lg' />
          {hasLabel && (
            <span id={labelId3}>
              {args.label} (
              <span className='inline-block min-w-[2ch] text-right tabular-nums'>{percentage}</span>
              %)
            </span>
          )}
        </ProgressIndicator>
      </div>
    );
  },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 5 } },
    label: { control: { type: 'text' } },
  },
  args: {
    value: 35,
    label: '読み込み中',
  },
  parameters: {
    controls: { include: ['label', 'value'] },
  },
};

interface StaticProps {
  label: string;
}

export const Static: StoryObj<StaticProps> = {
  render: (args) => {
    const labelId1 = useId();
    const labelId2 = useId();
    const labelId3 = useId();
    const hasLabel = args.label.trim() !== '';
    return (
      <div className='grid gap-16'>
        <ProgressIndicator
          type='stacked'
          aria-labelledby={hasLabel ? labelId1 : undefined}
          aria-label={hasLabel ? undefined : '読み込み中'}
        >
          <ProgressIndicatorStatic size='lg' />
          {hasLabel && <span id={labelId1}>{args.label}</span>}
        </ProgressIndicator>

        <ProgressIndicator
          type='inlined'
          aria-labelledby={hasLabel ? labelId2 : undefined}
          aria-label={hasLabel ? undefined : '読み込み中'}
        >
          <ProgressIndicatorStatic size='sm' />
          {hasLabel && <span id={labelId2}>{args.label}</span>}
        </ProgressIndicator>

        <ProgressIndicator
          type='stacked-underlay'
          aria-labelledby={hasLabel ? labelId3 : undefined}
          aria-label={hasLabel ? undefined : '読み込み中'}
        >
          <ProgressIndicatorStatic size='lg' />
          {hasLabel && <span id={labelId3}>{args.label}</span>}
        </ProgressIndicator>
      </div>
    );
  },
  argTypes: {
    label: { control: { type: 'text' } },
  },
  args: {
    label: '読み込み中',
  },
};

// --- Interactive Demo ---

const LoopDemo = () => {
  const labelId = useId();
  const [active, setActive] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);
  const announceText = useProgressIndicatorAnnouncer({ active });

  useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);

  const handleStart = () => {
    window.clearTimeout(timerRef.current);
    setActive(false);
    setActive(true);
    timerRef.current = window.setTimeout(() => setActive(false), 15000);
  };

  return (
    <section className='flex flex-col items-start gap-4'>
      <h3 className='m-0 text-std-20B-150 text-solid-gray-900'>Loop タイプ（不確定進捗）</h3>
      <p className='m-0 text-std-16N-170 text-solid-gray-700'>
        処理時間が不明な場合に使用します。15秒後に自動的に完了します。5秒経過ごとに読み込み中であることをスクリーンリーダーに通知します。
      </p>
      <Button size='md' variant='solid-fill' onClick={handleStart}>
        ローディング開始
      </Button>
      <ProgressIndicator type='stacked' active={active} aria-labelledby={labelId}>
        <ProgressIndicatorSpinner size='lg' />
        <span id={labelId}>読み込み中</span>
      </ProgressIndicator>
      <span role='status' className='sr-only'>
        {announceText}
      </span>
    </section>
  );
};

const FillDemo = () => {
  const labelId = useId();
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(0);
  const timerRef = useRef<number | undefined>(undefined);
  const announceText = useProgressIndicatorAnnouncer({ active, value });

  useEffect(() => {
    return () => window.clearInterval(timerRef.current);
  }, []);

  const handleStart = () => {
    window.clearInterval(timerRef.current);
    setActive(false);
    setValue(0);
    setActive(true);

    const DURATION = 15000;
    const INTERVAL = 200;
    const STEPS = DURATION / INTERVAL;
    let currentStep = 0;

    timerRef.current = window.setInterval(() => {
      currentStep++;
      const next = Math.min(100, Math.round((currentStep / STEPS) * 100));
      setValue(next);
      if (next >= 100) {
        window.clearInterval(timerRef.current);
        setActive(false);
      }
    }, INTERVAL);
  };

  const percentage = Math.round(value);

  return (
    <section className='flex flex-col items-start gap-4'>
      <h3 className='m-0 text-std-20B-150 text-solid-gray-900'>Fill タイプ（確定進捗）</h3>
      <p className='m-0 text-std-16N-170 text-solid-gray-700'>
        進捗率が把握できる場合に使用します。15秒かけて100%まで進行します。5秒経過ごとに進捗状況をスクリーンリーダーに通知します。
      </p>
      <Button size='md' variant='solid-fill' onClick={handleStart}>
        ローディング開始
      </Button>
      <ProgressIndicator type='stacked' value={value} active={active} aria-labelledby={labelId}>
        <ProgressIndicatorLinear size='lg' />
        <span id={labelId}>
          読み込み中 (
          <span className='inline-block min-w-[2ch] text-right tabular-nums'>{percentage}</span>%)
        </span>
      </ProgressIndicator>
      <span role='status' className='sr-only'>
        {announceText}
      </span>
    </section>
  );
};

const PassiveDemo = () => {
  const labelId = useId();
  const [active, setActive] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);

  const handleStart = () => {
    window.clearTimeout(timerRef.current);
    setActive(false);
    setActive(true);
    timerRef.current = window.setTimeout(() => setActive(false), 5000);
  };

  return (
    <section className='flex flex-col items-start gap-4'>
      <h3 className='m-0 text-std-20B-150 text-solid-gray-900'>Passive タイプ（通知なし）</h3>
      <p className='m-0 text-std-16N-170 text-solid-gray-700'>
        スクロール等の暗黙的な操作で起動するローディングです。スクリーンリーダーへの通知は行いません。5秒後に完了します。
      </p>
      <Button size='md' variant='solid-fill' onClick={handleStart}>
        ローディング開始
      </Button>
      <ProgressIndicator type='inlined' active={active} aria-labelledby={labelId}>
        <ProgressIndicatorSpinner size='sm' />
        <span id={labelId}>読み込み中</span>
      </ProgressIndicator>
    </section>
  );
};

export const InteractiveDemo: StoryObj = {
  render: () => (
    <div className='flex flex-col gap-12'>
      <LoopDemo />
      <FillDemo />
      <PassiveDemo />
    </div>
  ),
};
