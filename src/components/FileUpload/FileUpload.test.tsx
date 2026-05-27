import { composeStories } from '@storybook/react-vite';
import { describe, expect, test, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import * as stories from './FileUpload.stories';

const { Playground, WithExistingFiles } = composeStories(stories);

type MockFile = { name: string; size: number; type: string };

const addMockFiles = (files: MockFile[]) => {
  const input = document.querySelector<HTMLInputElement>('input[type="file"]');
  if (!input) throw new Error('File input not found');

  const dataTransfer = new DataTransfer();
  for (const info of files) {
    dataTransfer.items.add(new File([new ArrayBuffer(info.size)], info.name, { type: info.type }));
  }
  input.files = dataTransfer.files;
  input.dispatchEvent(new Event('change', { bubbles: true }));
};

const getFileUploadRoot = () => document.querySelector('.group\\/file-upload') as HTMLElement;
const getFileItems = () =>
  Array.from(document.querySelectorAll('ul.\\[counter-reset\\:file-item\\] > li'));
const getDropArea = () => document.querySelector('.group\\/drop-area') as HTMLElement;

describe('FileUpload 機能テスト', () => {
  describe('基本的な初期化とライフサイクル', () => {
    test('適切に初期化されるべき', async () => {
      render(<Playground />);

      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();
      await expect.element(page.getByText('ファイルが選択されていません')).toBeVisible();
    });

    test('multiple属性がある場合にdata-multiple属性が設定されるべき', async () => {
      render(<Playground />);

      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();
      expect(getFileUploadRoot()).toHaveAttribute('data-multiple', 'true');
    });
  });

  describe('ファイル選択機能', () => {
    test('ボタンクリックでファイル入力がトリガーされるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      const input = document.querySelector('input[type="file"]');
      if (!input) throw new Error('File input not found');

      const clickPromise = new Promise<boolean>((resolve) => {
        input.addEventListener('click', () => resolve(true), { once: true });
      });

      await page.getByRole('button', { name: 'ファイルを選択' }).click();
      expect(await clickPromise).toBe(true);
    });

    test('単一ファイルを選択できるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([{ name: 'test-file.png', size: 1024, type: 'image/png' }]);

      await expect.element(page.getByText('test-file.png')).toBeVisible();
      await expect.element(page.getByText('ファイルが選択されていません')).not.toBeInTheDocument();
    });

    test('複数ファイルを選択できるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([
        { name: 'file1.png', size: 1024, type: 'image/png' },
        { name: 'file2.jpg', size: 2048, type: 'image/jpeg' },
        { name: 'file3.pdf', size: 4096, type: 'application/pdf' },
      ]);

      await expect.element(page.getByText('file1.png')).toBeVisible();
      await expect.element(page.getByText('file2.jpg')).toBeVisible();
      await expect.element(page.getByText('file3.pdf')).toBeVisible();
    });

    test('選択ファイル数とサイズが表示されるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([
        { name: 'file1.png', size: 1048576, type: 'image/png' },
        { name: 'file2.jpg', size: 2097152, type: 'image/jpeg' },
      ]);

      const summary = page.getByText(/選択中：2個/);
      await expect.element(summary).toBeVisible();
      await expect.element(summary).toHaveTextContent(/3MB/);
    });

    test('ファイル選択後にボタンにフォーカスが戻るべき', async () => {
      render(<Playground />);
      const selectButton = page.getByRole('button', { name: 'ファイルを選択' });
      await expect.element(selectButton).toBeVisible();

      const input = document.querySelector<HTMLInputElement>('input[type="file"]');
      if (!input) throw new Error('File input not found');
      await userEvent.upload(input, new File(['content'], 'test.png', { type: 'image/png' }));

      await expect.element(selectButton).toHaveFocus();
    });
  });

  describe('ファイル削除機能', () => {
    test('解除ボタンでファイルを削除できるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([
        { name: 'file1.png', size: 1024, type: 'image/png' },
        { name: 'file2.jpg', size: 2048, type: 'image/jpeg' },
      ]);

      await expect.element(page.getByText('file1.png')).toBeVisible();
      expect(getFileItems()).toHaveLength(2);

      const firstRemove = getFileItems()[0].querySelector('button');
      if (!firstRemove) throw new Error('Remove button not found');
      firstRemove.click();

      await expect.element(page.getByText('file1.png')).not.toBeInTheDocument();
      expect(getFileItems()).toHaveLength(1);
      await expect.element(page.getByText('file2.jpg')).toBeVisible();
    });

    test('すべてのファイルを削除すると空メッセージが表示されるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([{ name: 'file1.png', size: 1024, type: 'image/png' }]);
      await expect.element(page.getByText('file1.png')).toBeVisible();

      await page.getByRole('button', { name: /解除/ }).click();

      await expect.element(page.getByText('ファイルが選択されていません')).toBeVisible();
    });

    test('ファイル削除後に次のファイルの解除ボタンにフォーカスが移動するべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([
        { name: 'file1.png', size: 1024, type: 'image/png' },
        { name: 'file2.jpg', size: 2048, type: 'image/jpeg' },
        { name: 'file3.pdf', size: 4096, type: 'application/pdf' },
      ]);
      await expect.element(page.getByText('file3.pdf')).toBeVisible();

      const secondRemoveBefore = getFileItems()[1].querySelector('button');
      if (!secondRemoveBefore) throw new Error('Remove button not found');
      secondRemoveBefore.click();

      await expect.element(page.getByText('file2.jpg')).not.toBeInTheDocument();
      const newSecondRemove = getFileItems()[1].querySelector<HTMLButtonElement>('button');
      expect(newSecondRemove).toBe(document.activeElement);
    });

    test('最後のファイル削除後に前のファイルの解除ボタンにフォーカスが移動するべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([
        { name: 'file1.png', size: 1024, type: 'image/png' },
        { name: 'file2.jpg', size: 2048, type: 'image/jpeg' },
      ]);
      await expect.element(page.getByText('file2.jpg')).toBeVisible();

      const items = getFileItems();
      const lastRemove = items[items.length - 1].querySelector('button');
      if (!lastRemove) throw new Error('Remove button not found');
      lastRemove.click();

      await expect.element(page.getByText('file2.jpg')).not.toBeInTheDocument();
      const remainingRemove = getFileItems()[0].querySelector<HTMLButtonElement>('button');
      expect(remainingRemove).toBe(document.activeElement);
    });

    test('全ファイル削除後に選択ボタンにフォーカスが移動するべき', async () => {
      render(<Playground />);
      const selectButton = page.getByRole('button', { name: 'ファイルを選択' });
      await expect.element(selectButton).toBeVisible();

      addMockFiles([{ name: 'file1.png', size: 1024, type: 'image/png' }]);
      await expect.element(page.getByText('file1.png')).toBeVisible();

      await page.getByRole('button', { name: /解除/ }).click();

      await expect.element(selectButton).toHaveFocus();
    });

    test('解除ボタンのaria-labelledbyが正しく設定されるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([{ name: 'test-file.png', size: 1024, type: 'image/png' }]);

      const removeButton = page.getByRole('button', { name: /解除/ });
      const ariaLabelledby = await removeButton.element().getAttribute('aria-labelledby');
      expect(ariaLabelledby).toMatch(/file-\w+-remove/);
      expect(ariaLabelledby).toMatch(/file-\w+-name/);
    });
  });

  describe('バリデーション機能', () => {
    test('max-files超過時にエラーメッセージが表示されるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles(
        Array.from({ length: 6 }, (_, i) => ({
          name: `file${i + 1}.png`,
          size: 1024,
          type: 'image/png',
        })),
      );

      await expect
        .element(page.getByText(/選択できるファイル数が上限を超過しています/))
        .toBeVisible();
    });

    test('max-total-size超過時にエラーメッセージが表示されるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([
        { name: 'large1.png', size: 6 * 1024 * 1024, type: 'image/png' },
        { name: 'large2.png', size: 6 * 1024 * 1024, type: 'image/png' },
      ]);

      await expect
        .element(page.getByText(/選択できるファイルサイズの合計が上限を超過しています/))
        .toBeVisible();
    });

    test('max-file-size超過時にファイルレベルエラーが表示されるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([{ name: 'huge-file.png', size: 6 * 1024 * 1024, type: 'image/png' }]);

      await expect.element(page.getByText(/ファイルサイズが上限を超過しています/)).toBeVisible();
      expect(getFileItems()[0]).toHaveAttribute('data-error', 'true');
      await expect
        .element(
          page.getByText(/選択したファイルにエラーがあります。該当ファイルをチェックしてください/),
        )
        .toBeVisible();
    });

    test('accept属性で許可されていないファイル形式でエラーが表示されるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([{ name: 'malware.exe', size: 1024, type: 'application/x-msdownload' }]);

      await expect.element(page.getByText(/形式|許可されていない/).first()).toBeVisible();
      expect(getFileItems()[0]).toHaveAttribute('data-error', 'true');
    });

    test('エラーがない場合はdata-has-error属性がないべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([{ name: 'valid.png', size: 1024, type: 'image/png' }]);
      await expect.element(page.getByText('valid.png')).toBeVisible();

      expect(getFileUploadRoot()).not.toHaveAttribute('data-has-error');
    });

    test('ファイル削除後にバリデーションが再実行されるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles(
        Array.from({ length: 6 }, (_, i) => ({
          name: `file${i + 1}.png`,
          size: 1024,
          type: 'image/png',
        })),
      );
      await expect
        .element(page.getByText(/選択できるファイル数が上限を超過しています/))
        .toBeVisible();

      const firstRemove = getFileItems()[0].querySelector('button');
      if (!firstRemove) throw new Error('Remove button not found');
      firstRemove.click();

      await expect
        .element(page.getByText(/選択できるファイル数が上限を超過しています/))
        .not.toBeInTheDocument();
    });
  });

  describe('UI更新とメッセージ', () => {
    test('ファイルサイズが適切にフォーマットされるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([
        { name: 'small.png', size: 500, type: 'image/png' },
        { name: 'medium.png', size: 500 * 1024, type: 'image/png' },
        { name: 'large.png', size: 2 * 1024 * 1024, type: 'image/png' },
      ]);

      await expect.element(page.getByText('500B')).toBeVisible();
      await expect.element(page.getByText('500KB')).toBeVisible();
      await expect.element(page.getByText('2MB').first()).toBeVisible();
    });

    test('ファイルサイズのバイト数がカンマ区切りで表示されるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([{ name: 'file.png', size: 1234567, type: 'image/png' }]);

      await expect.element(page.getByText('1,234,567', { exact: true })).toBeVisible();
    });

    test('複数エラーが同時に表示されるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([
        ...Array.from({ length: 6 }, (_, i) => ({
          name: `file${i + 1}.png`,
          size: 1024,
          type: 'image/png',
        })),
        { name: 'invalid.exe', size: 1024, type: 'application/x-msdownload' },
      ]);

      await expect
        .element(page.getByText(/選択できるファイル数が上限を超過しています/))
        .toBeVisible();
      await expect
        .element(page.getByText(/選択したファイルにエラーがあります|該当ファイルをチェック/))
        .toBeVisible();
    });
  });

  describe('単一ファイルモード', () => {
    test('maxFiles=1の場合は1ファイルのみ保持されるべき', async () => {
      render(<Playground maxFiles={1} />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      addMockFiles([{ name: 'file1.png', size: 1024, type: 'image/png' }]);
      await expect.element(page.getByText('file1.png')).toBeVisible();
      expect(getFileItems()).toHaveLength(1);

      addMockFiles([{ name: 'file2.png', size: 2048, type: 'image/png' }]);
      await expect.element(page.getByText('file2.png')).toBeVisible();
      await expect.element(page.getByText('file1.png')).not.toBeInTheDocument();
      expect(getFileItems()).toHaveLength(1);
    });

    test('maxFiles=1の場合にdata-multiple属性がfalseになるべき', async () => {
      render(<Playground maxFiles={1} />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      expect(getFileUploadRoot()).toHaveAttribute('data-multiple', 'false');
    });
  });

  describe('既存ファイルの読み込み', () => {
    test('HTMLに記述された既存ファイルが読み込まれるべき', async () => {
      render(<WithExistingFiles />);

      await expect.element(page.getByText('運転免許証_表面.jpg')).toBeVisible();
      await expect.element(page.getByText('健康保険証.pdf')).toBeVisible();
      await expect.element(page.getByText('マイナンバーカード_両面.pdf')).toBeVisible();
    });

    test('既存ファイルを削除できるべき', async () => {
      render(<WithExistingFiles />);
      await expect.element(page.getByText('運転免許証_表面.jpg')).toBeVisible();

      const initialCount = getFileItems().length;
      const firstRemove = getFileItems()[0].querySelector('button');
      if (!firstRemove) throw new Error('Remove button not found');
      firstRemove.click();

      await expect.element(page.getByText('運転免許証_表面.jpg')).not.toBeInTheDocument();
      expect(getFileItems()).toHaveLength(initialCount - 1);
    });

    test('既存ファイルに新規ファイルを追加できるべき', async () => {
      render(<WithExistingFiles />);
      await expect.element(page.getByText('運転免許証_表面.jpg')).toBeVisible();

      const initialCount = getFileItems().length;
      addMockFiles([{ name: 'new-file.png', size: 1024, type: 'image/png' }]);

      await expect.element(page.getByText('new-file.png')).toBeVisible();
      expect(getFileItems()).toHaveLength(initialCount + 1);
    });

    test('既存ファイルの解除ボタンにaria-labelledbyが設定されるべき', async () => {
      render(<WithExistingFiles />);
      await expect.element(page.getByText('運転免許証_表面.jpg')).toBeVisible();

      const removeButton = getFileItems()[0].querySelector('button');
      const ariaLabelledby = removeButton?.getAttribute('aria-labelledby');
      expect(ariaLabelledby).toMatch(/file-\w+-remove/);
      expect(ariaLabelledby).toMatch(/file-\w+-name/);
    });
  });

  describe('ドラッグ＆ドロップ', () => {
    test('ドロップエリアにファイルをドロップできるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      const dropArea = getDropArea();
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(new File(['test content'], 'dropped.png', { type: 'image/png' }));
      dropArea.dispatchEvent(new DragEvent('drop', { bubbles: true, dataTransfer }));

      await expect.element(page.getByText('dropped.png')).toBeVisible();
    });

    test('ドラッグオーバー時にスタイルが変更されるべき', async () => {
      render(<Playground />);
      await expect.element(page.getByRole('button', { name: 'ファイルを選択' })).toBeVisible();

      const dropArea = getDropArea();
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(new File([''], 'test.png', { type: 'image/png' }));
      dropArea.dispatchEvent(new DragEvent('dragenter', { bubbles: true, dataTransfer }));

      await vi.waitFor(() => {
        expect(dropArea).toHaveAttribute('data-dragover', 'true');
      });
    });
  });
});
