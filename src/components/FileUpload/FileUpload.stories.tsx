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
import { useId } from 'react';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Label } from '../Label';
import { Link } from '../Link';
import { RequirementBadge } from '../RequirementBadge';
import { SupportText } from '../SupportText';
import {
  FileUpload,
  FileUploadDropArea,
  FileUploadFileInfo,
  FileUploadFileItem,
  FileUploadFileList,
  FileUploadFileMarker,
  FileUploadFileMeta,
  FileUploadFileName,
  FileUploadInput,
  FileUploadViewportOverlay,
  FileUploadViewportOverlayMessage,
} from './FileUpload';
import { useFileUpload } from './hooks';
import { fileUploadDefaultMessages } from './messages';
import type { FileInfo } from './types';
import { formatSize } from './utils';

const meta = {
  id: 'Component/DADS v2/FileUpload',
  title: 'Component/ファイルアップロード／ドロップエリア',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    hasError: { table: { disable: true } },
  },
  parameters: {
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

              <h2>使い方</h2>
              <h3>基本的な使い方</h3>
              <p>
                ファイルアップロードコンポーネントは、ファイル選択とドラッグ＆ドロップ機能を提供する複合コンポーネントです。
                以下のコンポーネントを組み合わせて使用します。
              </p>

              <h4>コンポーネント構成</h4>
              <ul>
                <li>
                  <code>FileUpload</code>: ルートコンテナ
                </li>
                <li>
                  <code>FileUploadInput</code>: 非表示のファイル入力要素
                </li>
                <li>
                  <code>FileUploadDropArea</code>: ドラッグ＆ドロップエリア
                </li>
                <li>
                  <code>FileUploadFileList</code>: 選択ファイル一覧
                </li>
                <li>
                  <code>FileUploadFileItem</code>: ファイル項目
                </li>
                <li>
                  <code>FileUploadFileMarker</code>: ファイル番号・マーカー
                </li>
                <li>
                  <code>FileUploadFileInfo</code>: ファイル情報表示エリア
                </li>
                <li>
                  <code>FileUploadFileName</code>: ファイル名
                </li>
                <li>
                  <code>FileUploadFileMeta</code>: ファイルサイズ等のメタ情報
                </li>
                <li>
                  <code>FileUploadViewportOverlay</code>: 全画面ドロップエリアオーバーレイ
                </li>
                <li>
                  <code>FileUploadViewportOverlayMessage</code>: オーバーレイメッセージ
                </li>
              </ul>

              <h4>Props</h4>
              <h5>
                <code>FileUpload</code>
              </h5>
              <ul>
                <li>
                  <code>maxFiles</code>: 選択可能なファイル数の上限（デフォルト: 1）
                </li>
                <li>
                  <code>hasError</code>: エラー状態の表示
                </li>
                <li>
                  <code>droppable</code>: ドラッグ＆ドロップを有効化
                </li>
              </ul>

              <h5>
                <code>FileUploadDropArea</code>
              </h5>
              <ul>
                <li>
                  <code>isDragOver</code>: ドラッグオーバー状態
                </li>
              </ul>

              <h5>
                <code>FileUploadFileItem</code>
              </h5>
              <ul>
                <li>
                  <code>hasError</code>: 個別ファイルのエラー状態
                </li>
              </ul>

              <p>
                コードスニペットにおける実際の動作は
                <Link href='./?path=/story/component-dads-v2-fileupload--playground'>
                  PlaygroundのStory
                </Link>
                を参照してください。
              </p>

              <h3>
                <code>useFileUpload</code> フック
              </h3>
              <p>
                ファイルアップロードのロジックを簡単に実装するためのカスタムフックを提供しています。
                状態管理、バリデーション、ドラッグ＆ドロップ処理を統合したフックです。
              </p>

              <h4>コード使用例</h4>
              <pre>
                <code>
                  {`import { useFileUpload, fileUploadDefaultMessages } from './FileUpload';

const MyComponent = () => {
  const {
    files,
    errors,
    hasError,
    inputRef,
    selectButtonRef,
    handleSelectButtonClick,
    handleInputChange,
    removeFile,
    selectionSummarySuffix,
    // ドラッグ＆ドロップ用
    isDragOver,
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  } = useFileUpload({
    maxFiles: 5,
    maxFileSize: '5MB',
    maxTotalSize: '10MB',
    accept: '.png,.jpg,.pdf',
    droppable: true,
  });

  return (
    // コンポーネントの実装
  );
};`}
                </code>
              </pre>

              <h4 id='use-file-upload-options'>オプション</h4>
              <table aria-labelledby='use-file-upload-options'>
                <thead>
                  <tr>
                    <th scope='col'>オプション</th>
                    <th scope='col'>型</th>
                    <th scope='col'>デフォルト</th>
                    <th scope='col'>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>maxFiles</code>
                    </td>
                    <td>number</td>
                    <td>1</td>
                    <td>選択可能なファイル数の上限</td>
                  </tr>
                  <tr>
                    <td>
                      <code>maxFileSize</code>
                    </td>
                    <td>string</td>
                    <td>-</td>
                    <td>1ファイルあたりの最大サイズ（例: &quot;5MB&quot;）</td>
                  </tr>
                  <tr>
                    <td>
                      <code>maxTotalSize</code>
                    </td>
                    <td>string</td>
                    <td>-</td>
                    <td>合計の最大サイズ（例: &quot;10MB&quot;）</td>
                  </tr>
                  <tr>
                    <td>
                      <code>accept</code>
                    </td>
                    <td>string</td>
                    <td>-</td>
                    <td>許可するファイル形式（accept属性形式）</td>
                  </tr>
                  <tr>
                    <td>
                      <code>droppable</code>
                    </td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>ドラッグ＆ドロップを有効化</td>
                  </tr>
                  <tr>
                    <td>
                      <code>dropAreaExpandable</code>
                    </td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>全画面ドロップエリアを有効化</td>
                  </tr>
                  <tr>
                    <td>
                      <code>initialFiles</code>
                    </td>
                    <td>FileInfo[]</td>
                    <td>[]</td>
                    <td>初期ファイル一覧</td>
                  </tr>
                  <tr>
                    <td>
                      <code>messages</code>
                    </td>
                    <td>FileUploadMessages</td>
                    <td>デフォルトメッセージ</td>
                    <td>カスタムメッセージ</td>
                  </tr>
                </tbody>
              </table>

              <h4 id='use-file-upload-return'>返り値</h4>
              <table aria-labelledby='use-file-upload-return'>
                <thead>
                  <tr>
                    <th scope='col'>プロパティ</th>
                    <th scope='col'>型</th>
                    <th scope='col'>説明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>files</code>
                    </td>
                    <td>FileInfo[]</td>
                    <td>選択されたファイル一覧</td>
                  </tr>
                  <tr>
                    <td>
                      <code>errors</code>
                    </td>
                    <td>string[]</td>
                    <td>全体のエラーメッセージ一覧</td>
                  </tr>
                  <tr>
                    <td>
                      <code>hasError</code>
                    </td>
                    <td>boolean</td>
                    <td>エラーがあるかどうか</td>
                  </tr>
                  <tr>
                    <td>
                      <code>totalSize</code>
                    </td>
                    <td>number</td>
                    <td>選択ファイルの合計サイズ（バイト）</td>
                  </tr>
                  <tr>
                    <td>
                      <code>selectionSummarySuffix</code>
                    </td>
                    <td>string</td>
                    <td>選択ファイルサマリー要素（選択中：個数、サイズ）のIDサフィックス</td>
                  </tr>
                  <tr>
                    <td>
                      <code>inputRef</code>
                    </td>
                    <td>RefObject</td>
                    <td>input要素のref</td>
                  </tr>
                  <tr>
                    <td>
                      <code>selectButtonRef</code>
                    </td>
                    <td>RefObject</td>
                    <td>選択ボタンのref</td>
                  </tr>
                  <tr>
                    <td>
                      <code>handleSelectButtonClick</code>
                    </td>
                    <td>function</td>
                    <td>ファイル選択ダイアログを開く</td>
                  </tr>
                  <tr>
                    <td>
                      <code>handleInputChange</code>
                    </td>
                    <td>function</td>
                    <td>ファイル選択時のハンドラ</td>
                  </tr>
                  <tr>
                    <td>
                      <code>removeFile</code>
                    </td>
                    <td>function</td>
                    <td>ファイルを削除する</td>
                  </tr>
                  <tr>
                    <td>
                      <code>addFiles</code>
                    </td>
                    <td>function</td>
                    <td>ファイルを追加する</td>
                  </tr>
                </tbody>
              </table>
              <p>
                ドラッグ＆ドロップ用のハンドラ（<code>handleDragEnter</code>、
                <code>handleDragOver</code>、<code>handleDragLeave</code>、<code>handleDrop</code>
                ）や全画面オーバーレイ用のハンドラも返されます。 詳細は
                <Link href='./?path=/story/component-dads-v2-fileupload--playground'>
                  PlaygroundのStory
                </Link>
                のコードを参照してください。
              </p>

              <h3>エラーメッセージ</h3>
              <p>
                デフォルトのエラーメッセージは <code>fileUploadDefaultMessages</code>{' '}
                としてエクスポートされています。
                カスタマイズする場合はこのオブジェクトをベースに上書きしてください。
              </p>
              <pre>
                <code>
                  {`import { fileUploadDefaultMessages } from './messages';

const messages = {
  ...fileUploadDefaultMessages,
  error: {
    ...fileUploadDefaultMessages.error,
    invalidType: 'PNG/JPEG形式の画像のみ選択できます。',
  },
};`}
                </code>
              </pre>

              <h4 id='available-error-message-keys'>利用可能なエラーメッセージキー</h4>
              <table aria-labelledby='available-error-message-keys'>
                <thead>
                  <tr>
                    <th scope='col'>キー</th>
                    <th scope='col'>デフォルトメッセージ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>error.maxFiles</code>
                    </td>
                    <td>選択できるファイル数が上限を超過しています。</td>
                  </tr>
                  <tr>
                    <td>
                      <code>error.maxTotalSize</code>
                    </td>
                    <td>選択できるファイルサイズの合計が上限を超過しています。</td>
                  </tr>
                  <tr>
                    <td>
                      <code>error.invalidType</code>
                    </td>
                    <td>許可されていないファイル形式です。</td>
                  </tr>
                  <tr>
                    <td>
                      <code>error.maxFileSize</code>
                    </td>
                    <td>ファイルサイズが上限を超過しています。</td>
                  </tr>
                  <tr>
                    <td>
                      <code>error.hasFileErrors</code>
                    </td>
                    <td>
                      選択したファイルにエラーがあります。該当ファイルをチェックしてください。
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3>ユーティリティ関数</h3>
              <p>
                フックを使用せず独自にバリデーションを実装する場合は、以下のユーティリティ関数を利用できます：
              </p>
              <ul>
                <li>
                  <code>parseSize(size: string)</code>:
                  サイズ文字列（例：&quot;5MB&quot;）をバイト数に変換
                </li>
                <li>
                  <code>formatSize(bytes: number)</code>: バイト数をフォーマット済み文字列に変換
                </li>
                <li>
                  <code>parseAcceptAttribute(accept: string)</code>:
                  accept属性値をパースして配列に変換
                </li>
                <li>
                  <code>isFileTypeAllowed(fileName, mimeType, allowedExtensions)</code>:
                  ファイル形式が許可されているか判定
                </li>
              </ul>

              <h3>複数ステップフォームでの使い方</h3>
              <p>
                複数ステップのフォームで既存ファイルを引き継ぐ場合は、初期状態として既存ファイル情報を設定します。
                <Link href='./?path=/story/component-dads-v2-fileupload--with-existing-files'>
                  WithExistingFilesのStory
                </Link>
                を参照してください。
              </p>
            </div>
          </Unstyled>
        </>
      ),
    },
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

type FileUploadPlaygroundProps = {
  maxFiles: number;
  maxFileSize: string;
  maxTotalSize: string;
  accept: string;
  droppable: boolean;
  dropAreaExpandable: boolean;
};

export const Playground: StoryObj<FileUploadPlaygroundProps> = {
  argTypes: {
    maxFiles: { control: { type: 'number', min: 1 } },
    maxFileSize: { control: 'text' },
    maxTotalSize: { control: 'text' },
    accept: { control: 'text' },
    droppable: { control: 'boolean' },
    dropAreaExpandable: { control: 'boolean', if: { arg: 'droppable' } },
  },
  args: {
    maxFiles: 5,
    maxFileSize: '5MB',
    maxTotalSize: '10MB',
    accept: '.png,.jpg,.jpeg,.gif,.xlsx,.xls,.docx,.doc,.pptx,.ppt,.pdf',
    droppable: true,
    dropAreaExpandable: true,
  },
  render: (args) => {
    const { maxFiles, maxFileSize, maxTotalSize, accept, droppable, dropAreaExpandable } = args;

    const customMessages = {
      ...fileUploadDefaultMessages,
      error: {
        ...fileUploadDefaultMessages.error,
        invalidType:
          'PNG/JPEG/GIF形式の画像、Excel/Word/PowerPoint/PDF形式のドキュメントだけが選択できます。',
      },
    };

    // ID生成
    const labelId = useId();
    const buttonId = useId();
    const inputId = useId();
    const supportTextId = useId();
    const errorMessagesId = useId();
    const selectedFilesId = useId();

    const {
      files,
      errors,
      isDragOver,
      isExpandedDropArea,
      showViewportOverlay,
      announcerText,
      announcerAssertiveText,
      totalSize,
      hasError,
      maxFileSizeBytes,
      maxTotalSizeBytes,
      selectionSummarySuffix,
      inputRef,
      selectButtonRef,
      removeFile,
      handleSelectButtonClick,
      handleInputChange,
      handleExpandedDropAreaChange,
      handleDragEnter,
      handleDragOver,
      handleDragLeave,
      handleDrop,
      handleViewportDragEnter,
      handleViewportDragOver,
      handleViewportDragLeave,
      handleViewportDrop,
    } = useFileUpload({
      maxFiles,
      maxFileSize,
      maxTotalSize,
      accept,
      droppable,
      dropAreaExpandable,
      messages: customMessages,
    });

    // droppable=falseの場合はボタン自体がドロップゾーンになる
    // droppable=trueの場合はFileUploadDropAreaがドロップゾーンなので、ボタンにはハンドラ不要
    const buttonDragHandlers = droppable
      ? {}
      : {
          onDragEnter: handleDragEnter,
          onDragOver: handleDragOver,
          onDragLeave: handleDragLeave,
          onDrop: handleDrop,
        };

    const buttonArea = (
      <div className='flex flex-wrap items-center gap-y-2 gap-x-4'>
        <Button
          id={buttonId}
          type='button'
          variant='outline'
          size='md'
          // droppable=falseの場合はボタン自体がドロップゾーンになるのでdata-dragover属性を付与
          data-dragover={!droppable ? isDragOver : undefined}
          className={`
            shrink-0
            group-data-[dragover=true]/drop-area:bg-blue-300 group-data-[dragover=true]/drop-area:text-blue-1200 group-data-[dragover=true]/drop-area:underline
            group-data-[has-error=true]/file-upload:border-error-1
            data-[dragover=true]:bg-blue-300 data-[dragover=true]:text-blue-1200 data-[dragover=true]:underline
          `}
          onClick={handleSelectButtonClick}
          ref={selectButtonRef}
          aria-labelledby={`${labelId} ${buttonId}`}
          aria-describedby={`${selectedFilesId}-${selectionSummarySuffix} ${errorMessagesId} ${supportTextId}`}
          {...buttonDragHandlers}
        >
          ファイルを選択
        </Button>
        {droppable && (
          <p className='w-0 grow min-w-[12em]'>または、このエリア内にドラッグ＆ドロップ</p>
        )}
      </div>
    );

    const selectSummary = files.length > 0 && (
      <p id={`${selectedFilesId}-${selectionSummarySuffix}`} className='mt-2'>
        選択中：{files.length}個、{formatSize(totalSize)}（{totalSize.toLocaleString()}バイト）
      </p>
    );

    const errorMessages = errors.length > 0 && (
      <ul
        id={errorMessagesId}
        className='mt-2 p-0 list-none text-error-1 group-data-[droppable=true]/file-upload:text-error-2'
      >
        {errors.map((error) => (
          <li key={error}>＊{error}</li>
        ))}
      </ul>
    );

    const fileList = (
      <>
        {files.length === 0 && <p className='mt-4'>ファイルが選択されていません</p>}
        {files.length > 0 && (
          <FileUploadFileList>
            {files.map((file, index) => {
              const hasFileError = file.errors && file.errors.length > 0;
              return (
                <FileUploadFileItem key={file.id} data-id={file.id} hasError={hasFileError}>
                  <FileUploadFileMarker />
                  <FileUploadFileInfo>
                    <p>
                      <FileUploadFileName id={`${file.id}-name`}>{file.name}</FileUploadFileName>
                      <FileUploadFileMeta>
                        <span>{formatSize(file.size)}</span>（
                        <span>{file.size.toLocaleString()}</span>バイト）
                      </FileUploadFileMeta>
                    </p>
                    {hasFileError && file.errors?.map((error) => <p key={error}>＊{error}</p>)}
                  </FileUploadFileInfo>
                  <Button
                    id={`${file.id}-remove`}
                    type='button'
                    variant='text'
                    size='xs'
                    className='order-[-1] shrink-0 min-w-12 min-h-[calc(30/16*1rem)] text-oln-16B-100'
                    onClick={() => removeFile(file.id, index)}
                    aria-labelledby={`${file.id}-remove ${file.id}-name`}
                  >
                    解除
                  </Button>
                </FileUploadFileItem>
              );
            })}
          </FileUploadFileList>
        )}
      </>
    );

    return (
      <div className='flex flex-col gap-2'>
        <Label id={labelId} htmlFor={inputId}>
          参照する画像・ドキュメント
          <RequirementBadge isOptional>※任意</RequirementBadge>
        </Label>
        <SupportText id={supportTextId}>
          対応ファイル：PNG/JPEG/GIF形式の画像、Excel/Word/PowerPoint/PDF形式のドキュメント
          <br />
          {maxFiles}ファイルまで選択可能。
          {maxFileSizeBytes
            ? `1ファイルあたり${maxFileSize}（${maxFileSizeBytes.toLocaleString()}バイト）まで`
            : ''}
          {maxFileSizeBytes && maxTotalSizeBytes ? '、' : ''}
          {maxTotalSizeBytes
            ? `合計${maxTotalSize}（${maxTotalSizeBytes.toLocaleString()}バイト）まで`
            : ''}
        </SupportText>
        <FileUpload className='mt-2' maxFiles={maxFiles} hasError={hasError} droppable={droppable}>
          <FileUploadInput
            id={inputId}
            name='file-upload-1'
            multiple={maxFiles > 1}
            accept={accept}
            ref={inputRef}
            onChange={handleInputChange}
          />

          <div className='sr-only' aria-live='polite'>
            {announcerText}
          </div>
          <div className='sr-only' aria-live='assertive'>
            {announcerAssertiveText}
          </div>

          {droppable ? (
            <div>
              <FileUploadDropArea
                isDragOver={isDragOver}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {buttonArea}
                {selectSummary}
                {errorMessages}
                {dropAreaExpandable && (
                  <p className='mt-12 -mb-4 -ml-1'>
                    <Checkbox
                      size='md'
                      checked={isExpandedDropArea}
                      onChange={(e) => handleExpandedDropAreaChange(e.target.checked)}
                    >
                      ドラッグ＆ドロップの範囲をこのブラウザウィンドウ全体に広げる
                    </Checkbox>
                  </p>
                )}
              </FileUploadDropArea>
              {fileList}
            </div>
          ) : (
            <div>
              {buttonArea}
              {selectSummary}
              {errorMessages}
              {fileList}
            </div>
          )}

          {droppable && dropAreaExpandable && showViewportOverlay && (
            <FileUploadViewportOverlay
              onDragEnter={handleViewportDragEnter}
              onDragOver={handleViewportDragOver}
              onDragLeave={handleViewportDragLeave}
              onDrop={handleViewportDrop}
            >
              <FileUploadViewportOverlayMessage>
                <span className='inline-block'>このエリア内にファイルを</span>
                <span className='inline-block'>ドラッグ＆ドロップ</span>
              </FileUploadViewportOverlayMessage>
            </FileUploadViewportOverlay>
          )}
        </FileUpload>
      </div>
    );
  },
};

export const WithExistingFiles: Story = {
  render: () => {
    const initialFiles: FileInfo[] = [
      {
        id: 'file-abc123',
        name: '運転免許証_表面.jpg',
        size: 1887436,
        isExisting: true,
        errors: [],
      },
      {
        id: 'file-def456',
        name: '健康保険証.pdf',
        size: 862208,
        isExisting: true,
        errors: [],
      },
      {
        id: 'file-ghi789',
        name: 'マイナンバーカード_両面.pdf',
        size: 2411724,
        isExisting: true,
        errors: [],
      },
    ];

    const maxFiles = 5;
    const maxTotalSize = '10MB';
    const maxFileSize = '5MB';
    const accept = '.png,.jpg,.jpeg,.gif,.xlsx,.xls,.docx,.doc,.pptx,.ppt,.pdf';

    const customMessages = {
      ...fileUploadDefaultMessages,
      error: {
        ...fileUploadDefaultMessages.error,
        invalidType:
          'PNG/JPEG/GIF形式の画像、Excel/Word/PowerPoint/PDF形式のドキュメントだけが選択できます。',
      },
    };

    // ID生成
    const labelId = useId();
    const buttonId = useId();
    const inputId = useId();
    const supportTextId = useId();
    const errorMessagesId = useId();
    const selectedFilesId = useId();

    const {
      files,
      errors,
      isDragOver,
      isExpandedDropArea,
      showViewportOverlay,
      announcerText,
      announcerAssertiveText,
      totalSize,
      hasError,
      maxFileSizeBytes,
      maxTotalSizeBytes,
      selectionSummarySuffix,
      inputRef,
      selectButtonRef,
      removeFile,
      handleSelectButtonClick,
      handleInputChange,
      handleExpandedDropAreaChange,
      handleDragEnter,
      handleDragOver,
      handleDragLeave,
      handleDrop,
      handleViewportDragEnter,
      handleViewportDragOver,
      handleViewportDragLeave,
      handleViewportDrop,
    } = useFileUpload({
      maxFiles,
      maxFileSize,
      maxTotalSize,
      accept,
      droppable: true,
      dropAreaExpandable: true,
      initialFiles,
      messages: customMessages,
    });

    return (
      <div className='flex flex-col gap-2'>
        <Label id={labelId} htmlFor={inputId}>
          参照する画像・ドキュメント
          <RequirementBadge isOptional>※任意</RequirementBadge>
        </Label>
        <SupportText id={supportTextId}>
          対応ファイル：PNG/JPEG/GIF形式の画像、Excel/Word/PowerPoint/PDF形式のドキュメント
          <br />
          {maxFiles}ファイルまで選択可能。
          {maxFileSizeBytes
            ? `1ファイルあたり${maxFileSize}（${maxFileSizeBytes.toLocaleString()}バイト）まで`
            : ''}
          {maxFileSizeBytes && maxTotalSizeBytes ? '、' : ''}
          {maxTotalSizeBytes
            ? `合計${maxTotalSize}（${maxTotalSizeBytes.toLocaleString()}バイト）まで`
            : ''}
        </SupportText>
        <FileUpload className='mt-2' maxFiles={maxFiles} hasError={hasError} droppable>
          <FileUploadInput
            id={inputId}
            name='file-upload-2'
            multiple
            accept={accept}
            ref={inputRef}
            onChange={handleInputChange}
          />

          <div className='sr-only' aria-live='polite'>
            {announcerText}
          </div>
          <div className='sr-only' aria-live='assertive'>
            {announcerAssertiveText}
          </div>

          <div>
            <FileUploadDropArea
              isDragOver={isDragOver}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className='flex flex-wrap items-center gap-y-2 gap-x-4'>
                <Button
                  id={buttonId}
                  type='button'
                  variant='outline'
                  size='md'
                  className='shrink-0 group-data-[dragover=true]/drop-area:bg-blue-300 group-data-[dragover=true]/drop-area:text-blue-1200 group-data-[dragover=true]/drop-area:underline group-data-[has-error=true]/file-upload:border-error-1'
                  onClick={handleSelectButtonClick}
                  ref={selectButtonRef}
                  aria-labelledby={`${labelId} ${buttonId}`}
                  aria-describedby={`${selectedFilesId}-${selectionSummarySuffix} ${errorMessagesId} ${supportTextId}`}
                >
                  ファイルを選択
                </Button>
                <p className='w-0 grow min-w-[12em]'>または、このエリア内にドラッグ＆ドロップ</p>
              </div>
              {files.length > 0 && (
                <p id={`${selectedFilesId}-${selectionSummarySuffix}`} className='mt-2'>
                  選択中：{files.length}個、{formatSize(totalSize)}（{totalSize.toLocaleString()}
                  バイト）
                </p>
              )}
              {errors.length > 0 && (
                <ul id={errorMessagesId} className='mt-2 p-0 list-none text-error-2'>
                  {errors.map((error) => (
                    <li key={error}>＊{error}</li>
                  ))}
                </ul>
              )}
              <p className='mt-12 -mb-4 -ml-1'>
                <Checkbox
                  size='md'
                  checked={isExpandedDropArea}
                  onChange={(e) => handleExpandedDropAreaChange(e.target.checked)}
                >
                  ドラッグ＆ドロップの範囲をこのブラウザウィンドウ全体に広げる
                </Checkbox>
              </p>
            </FileUploadDropArea>
            {files.length === 0 && <p className='mt-4'>ファイルが選択されていません</p>}
            {files.length > 0 && (
              <FileUploadFileList>
                {files.map((file, index) => {
                  const hasFileError = file.errors && file.errors.length > 0;
                  return (
                    <FileUploadFileItem key={file.id} data-id={file.id} hasError={hasFileError}>
                      {file.isExisting && (
                        <input
                          type='hidden'
                          name='file-upload-existing'
                          value={`temp-${file.id}`}
                        />
                      )}
                      <FileUploadFileMarker />
                      <FileUploadFileInfo>
                        <p>
                          <FileUploadFileName id={`${file.id}-name`}>
                            {file.name}
                          </FileUploadFileName>
                          <FileUploadFileMeta>
                            <span>{formatSize(file.size)}</span>（
                            <span>{file.size.toLocaleString()}</span>バイト）
                          </FileUploadFileMeta>
                        </p>
                        {hasFileError && file.errors?.map((error) => <p key={error}>＊{error}</p>)}
                      </FileUploadFileInfo>
                      <Button
                        id={`${file.id}-remove`}
                        type='button'
                        variant='text'
                        size='xs'
                        className='order-[-1] shrink-0 min-w-12 min-h-[calc(30/16*1rem)] text-oln-16B-100'
                        onClick={() => removeFile(file.id, index)}
                        aria-labelledby={`${file.id}-remove ${file.id}-name`}
                      >
                        解除
                      </Button>
                    </FileUploadFileItem>
                  );
                })}
              </FileUploadFileList>
            )}
          </div>

          {showViewportOverlay && (
            <FileUploadViewportOverlay
              onDragEnter={handleViewportDragEnter}
              onDragOver={handleViewportDragOver}
              onDragLeave={handleViewportDragLeave}
              onDrop={handleViewportDrop}
            >
              <FileUploadViewportOverlayMessage>
                <span className='inline-block'>このエリア内にファイルを</span>
                <span className='inline-block'>ドラッグ＆ドロップ</span>
              </FileUploadViewportOverlayMessage>
            </FileUploadViewportOverlay>
          )}
        </FileUpload>
      </div>
    );
  },
};
