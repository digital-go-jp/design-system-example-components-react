import type { FileUploadMessages } from './types';

export const fileUploadDefaultMessages: FileUploadMessages = {
  error: {
    maxFiles: '選択できるファイル数が上限を超過しています。',
    maxTotalSize: '選択できるファイルサイズの合計が上限を超過しています。',
    invalidType: '許可されていないファイル形式です。',
    maxFileSize: 'ファイルサイズが上限を超過しています。',
    hasFileErrors: '選択したファイルにエラーがあります。該当ファイルをチェックしてください。',
  },
  announce: {
    dropAvailable: 'ここにドロップできます。',
    dropUnavailable: 'ドロップエリア外。',
  },
};
