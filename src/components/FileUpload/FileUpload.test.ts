import { expect, type Page, test } from '@playwright/test';

/**
 * FileUpload Playwright Tests
 *
 * These tests run against Storybook Stories in the browser.
 * This allows testing of real browser behavior including:
 * - Drag and drop
 * - Focus management
 * - File input interactions
 */

// Story IDs
const STORY_ID = {
  playground: 'component-dads-v2-fileupload--playground',
  withExistingFiles: 'component-dads-v2-fileupload--with-existing-files',
};

// Story iframe URL generator
const getStoryUrl = (storyId: string) =>
  `http://localhost:6006/iframe.html?id=${storyId}&viewMode=story`;

// Helper: Navigate to story and wait for it to load
const gotoStory = async (page: Page, storyId: string) => {
  await page.goto(getStoryUrl(storyId));
  // Wait for the FileUpload component to fully render
  await page.waitForSelector('.group\\/file-upload', { state: 'attached' });
};

// Helper: Add mock files using DataTransfer API
const addMockFiles = async (page: Page, files: { name: string; size: number; type: string }[]) => {
  await page.evaluate((fileInfos) => {
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (!input) throw new Error('File input not found');

    const dataTransfer = new DataTransfer();

    for (const info of fileInfos) {
      const file = new File([new ArrayBuffer(info.size)], info.name, { type: info.type });
      dataTransfer.items.add(file);
    }

    input.files = dataTransfer.files;
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }, files);
};

// ============================================
// 機能テスト
// ============================================

test.describe('FileUpload 機能テスト', () => {
  // Run tests serially to avoid Storybook overload
  test.describe.configure({ mode: 'serial' });

  test.describe('基本的な初期化とライフサイクル', () => {
    test('適切に初期化されるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      const selectButton = page.getByRole('button', { name: 'ファイルを選択' });
      const emptyMessage = page.getByText('ファイルが選択されていません');

      await expect(selectButton).toBeVisible();
      await expect(emptyMessage).toBeVisible();
    });

    test('multiple属性がある場合にdata-multiple属性が設定されるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);
      // Playground defaults: maxFiles=5 (multiple mode)

      const fileUpload = page.locator('.group\\/file-upload');
      await expect(fileUpload).toHaveAttribute('data-multiple', 'true');
    });
  });

  test.describe('ファイル選択機能', () => {
    test('ボタンクリックでファイル入力がトリガーされるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      const selectButton = page.getByRole('button', { name: 'ファイルを選択' });

      // ファイル入力のクリックイベントを監視
      const clickPromise = page.evaluate(() => {
        return new Promise((resolve) => {
          const input = document.querySelector('input[type="file"]');
          input?.addEventListener('click', () => resolve(true), { once: true });
        });
      });

      await selectButton.click();
      const wasClicked = await clickPromise;
      expect(wasClicked).toBe(true);
    });

    test('単一ファイルを選択できるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      await addMockFiles(page, [{ name: 'test-file.png', size: 1024, type: 'image/png' }]);

      // ファイルリストはcounter-resetクラスを持つul
      const fileList = page.locator('ul.\\[counter-reset\\:file-item\\]');
      const emptyMessage = page.getByText('ファイルが選択されていません');

      await expect(fileList).toBeVisible();
      await expect(emptyMessage).not.toBeVisible();
      await expect(page.getByText('test-file.png')).toBeVisible();
    });

    test('複数ファイルを選択できるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      await addMockFiles(page, [
        { name: 'file1.png', size: 1024, type: 'image/png' },
        { name: 'file2.jpg', size: 2048, type: 'image/jpeg' },
        { name: 'file3.pdf', size: 4096, type: 'application/pdf' },
      ]);

      await expect(page.getByText('file1.png')).toBeVisible();
      await expect(page.getByText('file2.jpg')).toBeVisible();
      await expect(page.getByText('file3.pdf')).toBeVisible();
    });

    test('選択ファイル数とサイズが表示されるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      await addMockFiles(page, [
        { name: 'file1.png', size: 1048576, type: 'image/png' }, // 1MB
        { name: 'file2.jpg', size: 2097152, type: 'image/jpeg' }, // 2MB
      ]);

      const selectedFilesMessage = page.getByText(/選択中：2個/);
      await expect(selectedFilesMessage).toBeVisible();
      await expect(selectedFilesMessage).toContainText('3MB');
    });

    test('ファイル選択後にボタンにフォーカスが戻るべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      const selectButton = page.getByRole('button', { name: 'ファイルを選択' });
      const fileInput = page.locator('input[type="file"]');

      // setInputFilesを使用して実際のファイル選択をシミュレート
      await fileInput.setInputFiles({
        name: 'test.png',
        mimeType: 'image/png',
        buffer: Buffer.from('fake image content'),
      });

      await expect(selectButton).toBeFocused();
    });
  });

  test.describe('ファイル削除機能', () => {
    test('解除ボタンでファイルを削除できるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      await addMockFiles(page, [
        { name: 'file1.png', size: 1024, type: 'image/png' },
        { name: 'file2.jpg', size: 2048, type: 'image/jpeg' },
      ]);

      const fileItems = page.locator('ul.\\[counter-reset\\:file-item\\] > li');
      await expect(fileItems).toHaveCount(2);

      // 最初のファイルを削除
      const removeButton = fileItems.first().getByRole('button', { name: /解除/ });
      await removeButton.click();

      await expect(fileItems).toHaveCount(1);
      await expect(page.getByText('file2.jpg')).toBeVisible();
    });

    test('すべてのファイルを削除すると空メッセージが表示されるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      await addMockFiles(page, [{ name: 'file1.png', size: 1024, type: 'image/png' }]);

      const removeButton = page.getByRole('button', { name: /解除/ });
      await removeButton.click();

      const emptyMessage = page.getByText('ファイルが選択されていません');
      await expect(emptyMessage).toBeVisible();
    });

    test('ファイル削除後に次のファイルの解除ボタンにフォーカスが移動するべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      await addMockFiles(page, [
        { name: 'file1.png', size: 1024, type: 'image/png' },
        { name: 'file2.jpg', size: 2048, type: 'image/jpeg' },
        { name: 'file3.pdf', size: 4096, type: 'application/pdf' },
      ]);

      const fileItems = page.locator('ul.\\[counter-reset\\:file-item\\] > li');

      // 2番目のファイルを削除
      const secondRemoveButton = fileItems.nth(1).getByRole('button', { name: /解除/ });
      await secondRemoveButton.click();

      // 次のファイル（元の3番目、現在の2番目）の解除ボタンにフォーカスが移動するべき
      const newSecondRemoveButton = fileItems.nth(1).getByRole('button', { name: /解除/ });
      await expect(newSecondRemoveButton).toBeFocused();
    });

    test('最後のファイル削除後に前のファイルの解除ボタンにフォーカスが移動するべき', async ({
      page,
    }) => {
      await gotoStory(page, STORY_ID.playground);

      await addMockFiles(page, [
        { name: 'file1.png', size: 1024, type: 'image/png' },
        { name: 'file2.jpg', size: 2048, type: 'image/jpeg' },
      ]);

      const fileItems = page.locator('ul.\\[counter-reset\\:file-item\\] > li');

      // 最後のファイルを削除
      const lastRemoveButton = fileItems.last().getByRole('button', { name: /解除/ });
      await lastRemoveButton.click();

      // 前のファイル（現在最後）の解除ボタンにフォーカスが移動するべき
      const remainingRemoveButton = fileItems.first().getByRole('button', { name: /解除/ });
      await expect(remainingRemoveButton).toBeFocused();
    });

    test('全ファイル削除後に選択ボタンにフォーカスが移動するべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      await addMockFiles(page, [{ name: 'file1.png', size: 1024, type: 'image/png' }]);

      const removeButton = page.getByRole('button', { name: /解除/ });
      await removeButton.click();

      const selectButton = page.getByRole('button', { name: 'ファイルを選択' });
      await expect(selectButton).toBeFocused();
    });

    test('解除ボタンのaria-labelledbyが正しく設定されるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      await addMockFiles(page, [{ name: 'test-file.png', size: 1024, type: 'image/png' }]);

      const removeButton = page.getByRole('button', { name: /解除/ });
      const ariaLabelledby = await removeButton.getAttribute('aria-labelledby');

      // aria-labelledbyにボタンIDとファイル名IDが含まれるべき
      expect(ariaLabelledby).toMatch(/file-\w+-remove/);
      expect(ariaLabelledby).toMatch(/file-\w+-name/);
    });
  });

  test.describe('バリデーション機能', () => {
    test('max-files超過時にエラーメッセージが表示されるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);
      // Playground defaults: maxFiles=5

      // 6ファイル追加
      await addMockFiles(page, [
        { name: 'file1.png', size: 1024, type: 'image/png' },
        { name: 'file2.png', size: 1024, type: 'image/png' },
        { name: 'file3.png', size: 1024, type: 'image/png' },
        { name: 'file4.png', size: 1024, type: 'image/png' },
        { name: 'file5.png', size: 1024, type: 'image/png' },
        { name: 'file6.png', size: 1024, type: 'image/png' },
      ]);

      await expect(page.getByText(/選択できるファイル数が上限を超過しています/)).toBeVisible();
    });

    test('max-total-size超過時にエラーメッセージが表示されるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);
      // Playground defaults: maxTotalSize=10MB

      // 合計12MB追加
      await addMockFiles(page, [
        { name: 'large1.png', size: 6 * 1024 * 1024, type: 'image/png' }, // 6MB
        { name: 'large2.png', size: 6 * 1024 * 1024, type: 'image/png' }, // 6MB
      ]);

      await expect(
        page.getByText(/選択できるファイルサイズの合計が上限を超過しています/),
      ).toBeVisible();
    });

    test('max-file-size超過時にファイルレベルエラーが表示されるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);
      // Playground defaults: maxFileSize=5MB

      // 6MBファイル追加
      await addMockFiles(page, [
        { name: 'huge-file.png', size: 6 * 1024 * 1024, type: 'image/png' },
      ]);

      const fileItem = page.locator('ul.\\[counter-reset\\:file-item\\] > li');
      await expect(fileItem).toHaveAttribute('data-error', 'true');
      await expect(page.getByText(/ファイルサイズが上限を超過しています/)).toBeVisible();

      // グローバルエラーも表示されるべき
      await expect(
        page.getByText(/選択したファイルにエラーがあります。該当ファイルをチェックしてください/),
      ).toBeVisible();
    });

    test('accept属性で許可されていないファイル形式でエラーが表示されるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);
      // Playground defaults: accept='.png,.jpg,.jpeg,.gif,.xlsx,.xls,.docx,.doc,.pptx,.ppt,.pdf'

      // 許可されていない形式（.exe）
      await addMockFiles(page, [
        { name: 'malware.exe', size: 1024, type: 'application/x-msdownload' },
      ]);

      const fileItem = page.locator('ul.\\[counter-reset\\:file-item\\] > li');
      await expect(fileItem).toHaveAttribute('data-error', 'true');

      // ファイルアイテム内にエラーメッセージが表示されるべき
      await expect(fileItem.getByText(/形式|許可されていない/)).toBeVisible();
    });

    test('エラーがない場合はdata-has-error属性がないべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      await addMockFiles(page, [{ name: 'valid.png', size: 1024, type: 'image/png' }]);

      const fileUpload = page.locator('.group\\/file-upload');
      await expect(fileUpload).not.toHaveAttribute('data-has-error');
    });

    test('ファイル削除後にバリデーションが再実行されるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);
      // Playground defaults: maxFiles=5

      // 6ファイル追加（max-files超過）
      await addMockFiles(page, [
        { name: 'file1.png', size: 1024, type: 'image/png' },
        { name: 'file2.png', size: 1024, type: 'image/png' },
        { name: 'file3.png', size: 1024, type: 'image/png' },
        { name: 'file4.png', size: 1024, type: 'image/png' },
        { name: 'file5.png', size: 1024, type: 'image/png' },
        { name: 'file6.png', size: 1024, type: 'image/png' },
      ]);

      await expect(page.getByText(/選択できるファイル数が上限を超過しています/)).toBeVisible();

      // 1ファイル削除して5ファイルに
      const removeButton = page
        .locator('ul.\\[counter-reset\\:file-item\\] > li')
        .first()
        .getByRole('button', { name: /解除/ });
      await removeButton.click();

      // エラーが解消されるべき
      await expect(page.getByText(/選択できるファイル数が上限を超過しています/)).not.toBeVisible();
    });
  });

  test.describe('UI更新とメッセージ', () => {
    test('ファイルサイズが適切にフォーマットされるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      await addMockFiles(page, [
        { name: 'small.png', size: 500, type: 'image/png' }, // 500B
        { name: 'medium.png', size: 500 * 1024, type: 'image/png' }, // 500KB
        { name: 'large.png', size: 2 * 1024 * 1024, type: 'image/png' }, // 2MB
      ]);

      await expect(page.getByText('500B')).toBeVisible();
      await expect(page.getByText('500KB')).toBeVisible();
      await expect(page.getByText('2MB')).toBeVisible();
    });

    test('ファイルサイズのバイト数がカンマ区切りで表示されるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      await addMockFiles(page, [{ name: 'file.png', size: 1234567, type: 'image/png' }]);

      // バイト数がカンマ区切りで表示されるべき
      await expect(page.getByText('1,234,567', { exact: true })).toBeVisible();
    });

    test('複数エラーが同時に表示されるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);
      // Playground defaults: maxFiles=5, accept で制限

      // max-files超過 + 不正な形式
      await addMockFiles(page, [
        { name: 'file1.png', size: 1024, type: 'image/png' },
        { name: 'file2.png', size: 1024, type: 'image/png' },
        { name: 'file3.png', size: 1024, type: 'image/png' },
        { name: 'file4.png', size: 1024, type: 'image/png' },
        { name: 'file5.png', size: 1024, type: 'image/png' },
        { name: 'file6.png', size: 1024, type: 'image/png' }, // 6ファイル目でmax-files超過
        { name: 'invalid.exe', size: 1024, type: 'application/x-msdownload' }, // 不正な形式
      ]);

      // max-filesエラー
      await expect(page.getByText(/選択できるファイル数が上限を超過しています/)).toBeVisible();
      // ファイルエラーがあることを示すメッセージ
      await expect(
        page.getByText(/選択したファイルにエラーがあります|該当ファイルをチェック/),
      ).toBeVisible();
    });
  });

  test.describe('単一ファイルモード', () => {
    test('maxFiles=1の場合は1ファイルのみ保持されるべき', async ({ page }) => {
      // maxFiles=1 を args で指定してStoryを開く（下のテストと同じ方法）
      await page.goto(
        `http://localhost:6006/iframe.html?id=${STORY_ID.playground}&viewMode=story&args=maxFiles:1`,
      );
      await page.waitForSelector('.group\\/file-upload', { state: 'attached' });

      // 1ファイル目を追加
      await addMockFiles(page, [{ name: 'file1.png', size: 1024, type: 'image/png' }]);

      const fileItems = page.locator('ul.\\[counter-reset\\:file-item\\] > li');
      await expect(fileItems).toHaveCount(1);
      await expect(page.getByText('file1.png')).toBeVisible();

      // 2ファイル目を追加（置き換えられるべき）
      await addMockFiles(page, [{ name: 'file2.png', size: 2048, type: 'image/png' }]);

      // 1ファイルのみ保持され、2ファイル目に置き換わっているべき
      await expect(fileItems).toHaveCount(1);
      await expect(page.getByText('file1.png')).not.toBeVisible();
      await expect(page.getByText('file2.png')).toBeVisible();
    });

    test('maxFiles=1の場合にdata-multiple属性がfalseになるべき', async ({ page }) => {
      // maxFiles=1 を args で指定してStoryを開く
      await page.goto(
        `http://localhost:6006/iframe.html?id=${STORY_ID.playground}&viewMode=story&args=maxFiles:1`,
      );
      await page.waitForSelector('.group\\/file-upload', { state: 'attached' });

      const fileUpload = page.locator('.group\\/file-upload');
      await expect(fileUpload).toHaveAttribute('data-multiple', 'false');
    });
  });

  test.describe('既存ファイルの読み込み', () => {
    test('HTMLに記述された既存ファイルが読み込まれるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.withExistingFiles);

      await expect(page.getByText('運転免許証_表面.jpg')).toBeVisible();
      await expect(page.getByText('健康保険証.pdf')).toBeVisible();
      await expect(page.getByText('マイナンバーカード_両面.pdf')).toBeVisible();
    });

    test('既存ファイルを削除できるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.withExistingFiles);

      const fileItems = page.locator('ul.\\[counter-reset\\:file-item\\] > li');
      const initialCount = await fileItems.count();

      const removeButton = fileItems.first().getByRole('button', { name: /解除/ });
      await removeButton.click();

      await expect(fileItems).toHaveCount(initialCount - 1);
    });

    test('既存ファイルに新規ファイルを追加できるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.withExistingFiles);

      const fileItems = page.locator('ul.\\[counter-reset\\:file-item\\] > li');
      const initialCount = await fileItems.count();

      await addMockFiles(page, [{ name: 'new-file.png', size: 1024, type: 'image/png' }]);

      await expect(fileItems).toHaveCount(initialCount + 1);
      await expect(page.getByText('new-file.png')).toBeVisible();
    });

    test('既存ファイルの解除ボタンにaria-labelledbyが設定されるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.withExistingFiles);

      const removeButton = page
        .locator('ul.\\[counter-reset\\:file-item\\] > li')
        .first()
        .getByRole('button', { name: /解除/ });
      const ariaLabelledby = await removeButton.getAttribute('aria-labelledby');

      expect(ariaLabelledby).toMatch(/file-\w+-remove/);
      expect(ariaLabelledby).toMatch(/file-\w+-name/);
    });
  });

  test.describe('ドラッグ＆ドロップ', () => {
    test('ドロップエリアにファイルをドロップできるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      // ドロップエリアを取得（group/drop-areaクラスを持つdiv）
      const dropArea = page.locator('.group\\/drop-area').first();
      await expect(dropArea).toBeVisible();

      // DataTransfer イベントを発火してドロップをシミュレート
      await page.evaluate(() => {
        const dropArea = document.querySelector('.group\\/drop-area');
        const file = new File(['test content'], 'dropped.png', { type: 'image/png' });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        const dropEvent = new DragEvent('drop', {
          bubbles: true,
          dataTransfer,
        });
        dropArea?.dispatchEvent(dropEvent);
      });

      await expect(page.getByText('dropped.png')).toBeVisible();
    });

    test('ドラッグオーバー時にスタイルが変更されるべき', async ({ page }) => {
      await gotoStory(page, STORY_ID.playground);

      const dropArea = page.locator('.group\\/drop-area').first();

      // ドラッグオーバーイベントを発火
      await page.evaluate(() => {
        const dropArea = document.querySelector('.group\\/drop-area');
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(new File([''], 'test.png', { type: 'image/png' }));

        const dragEnterEvent = new DragEvent('dragenter', {
          bubbles: true,
          dataTransfer,
        });
        dropArea?.dispatchEvent(dragEnterEvent);
      });

      // data-dragover属性が追加されるべき
      await expect(dropArea).toHaveAttribute('data-dragover', 'true');
    });
  });
});
