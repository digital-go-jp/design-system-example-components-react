import { composeStories } from '@storybook/react-vite';
import { useState } from 'react';
import { describe, expect, test, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import {
  ModalDialog,
  ModalDialogBody,
  ModalDialogClose,
  ModalDialogContent,
  ModalDialogHeader,
  ModalDialogHeading,
} from './ModalDialog';
import * as stories from './ModalDialog.stories';
import { type ModalDialogRequestCloseEvent, useModalDialog } from './useModalDialog';

const { Playground } = composeStories(stories);

const getDialog = () => document.querySelector('dialog') as HTMLDialogElement;

type OnRequestClose = (event: ModalDialogRequestCloseEvent) => void;

const TestComponent = ({ onRequestClose }: { onRequestClose?: OnRequestClose }) => {
  const [open, setOpen] = useState(false);
  const { dialogProps, headingProps, closeButtonProps } = useModalDialog({
    open,
    onOpenChange: setOpen,
    onRequestClose,
  });

  return (
    <>
      <button type='button' onClick={() => setOpen(true)}>
        開く
      </button>
      <ModalDialog {...dialogProps}>
        <ModalDialogContent>
          <ModalDialogHeader>
            <ModalDialogHeading {...headingProps}>見出し</ModalDialogHeading>
            <ModalDialogClose {...closeButtonProps} />
          </ModalDialogHeader>
          <ModalDialogBody>コンテンツ</ModalDialogBody>
        </ModalDialogContent>
      </ModalDialog>
    </>
  );
};

describe('useModalDialog', () => {
  describe('ダイアログの開閉', () => {
    test('ダイアログを開くと見出しにフォーカスが当たること', async () => {
      render(<Playground />);

      await page.getByRole('button', { name: 'ダイアログを開く' }).click();

      await expect.element(page.getByRole('heading', { level: 2 })).toHaveFocus();
    });

    test('開くボタンをクリックするとダイアログが表示されること', async () => {
      render(<Playground />);

      await page.getByRole('button', { name: 'ダイアログを開く' }).click();

      expect(getDialog().open).toBe(true);
    });

    test('閉じるボタンをクリックするとダイアログが閉じること', async () => {
      render(<Playground />);

      await page.getByRole('button', { name: 'ダイアログを開く' }).click();
      expect(getDialog().open).toBe(true);

      await page.getByRole('button', { name: '閉じる' }).click();

      expect(getDialog().open).toBe(false);
    });

    test('ESCキーでダイアログが閉じること', async () => {
      render(<Playground />);

      await page.getByRole('button', { name: 'ダイアログを開く' }).click();
      expect(getDialog().open).toBe(true);

      await userEvent.keyboard('{Escape}');

      expect(getDialog().open).toBe(false);
    });
  });

  describe('onRequestClose', () => {
    test('ESCキーでonRequestCloseが呼ばれること', async () => {
      const onRequestClose = vi.fn();
      render(<TestComponent onRequestClose={onRequestClose} />);

      await page.getByRole('button', { name: '開く' }).click();
      expect(getDialog().open).toBe(true);

      await userEvent.keyboard('{Escape}');

      expect(onRequestClose).toHaveBeenCalledOnce();
      expect(getDialog().open).toBe(false);
    });

    test('閉じるボタンでonRequestCloseが呼ばれること', async () => {
      const onRequestClose = vi.fn();
      render(<TestComponent onRequestClose={onRequestClose} />);

      await page.getByRole('button', { name: '開く' }).click();
      expect(getDialog().open).toBe(true);

      await page.getByRole('button', { name: '閉じる' }).click();

      expect(onRequestClose).toHaveBeenCalledOnce();
      expect(getDialog().open).toBe(false);
    });

    test('onRequestCloseでpreventDefaultするとダイアログが閉じないこと', async () => {
      const onRequestClose = vi.fn((e: ModalDialogRequestCloseEvent) => e.preventDefault());
      render(<TestComponent onRequestClose={onRequestClose} />);

      await page.getByRole('button', { name: '開く' }).click();
      expect(getDialog().open).toBe(true);

      await userEvent.keyboard('{Escape}');

      expect(onRequestClose).toHaveBeenCalledOnce();
      expect(getDialog().open).toBe(true);
    });
  });
});
