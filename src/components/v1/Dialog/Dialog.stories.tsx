import type { Meta, StoryObj } from '@storybook/react-vite';
import { useRef } from 'react';
import { Button } from '../../Button';
import { Dialog, DialogBody } from './Dialog';

const meta = {
  id: 'Component/DADS v1/ModalDialog',
  title: 'Component/DADS v1/モーダルダイアログ',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    const DialogWithHooks = () => {
      const dialogRef = useRef<HTMLDialogElement>(null);
      return (
        <div>
          <Button onClick={() => dialogRef.current?.showModal()} size='lg' variant='solid-fill'>
            ダイアログ表示
          </Button>

          <Dialog
            aria-labelledby='example-heading1'
            className='max-w-[calc(560/16*1rem)]'
            ref={dialogRef}
          >
            <DialogBody>
              <h2 className='text-std-24B-150 desktop:text-std-28B-150' id='example-heading1'>
                ダイアログタイトル
              </h2>
              <p className='text-std-16N-170'>
                ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。
              </p>
              <div className='mt-2 flex w-full max-w-xs flex-col gap-4 desktop:mt-6'>
                <Button
                  onClick={() => {
                    dialogRef.current?.close();
                  }}
                  size='lg'
                  variant='solid-fill'
                >
                  中断する
                </Button>
                <Button
                  onClick={() => {
                    dialogRef.current?.close();
                  }}
                  size='lg'
                  variant='text'
                >
                  キャンセル
                </Button>
              </div>
            </DialogBody>
          </Dialog>
        </div>
      );
    };
    return <DialogWithHooks />;
  },
};

export const DialogWithHorizontalActions: Story = {
  render: () => {
    const DialogWithHooks = () => {
      const dialogRef = useRef<HTMLDialogElement>(null);

      return (
        <div>
          <Button onClick={() => dialogRef.current?.showModal()} size='lg' variant='solid-fill'>
            ダイアログ表示
          </Button>

          <Dialog
            aria-labelledby='example-heading2'
            className='max-w-[calc(640/16*1rem)]'
            ref={dialogRef}
          >
            <DialogBody>
              <h2 className='text-std-24B-150 desktop:text-std-28B-150' id='example-heading2'>
                ダイアログタイトル
              </h2>
              <p className='text-std-16N-170'>
                ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。
              </p>
              <div className='mt-2 flex w-full flex-col gap-4 desktop:mt-6 desktop:flex-row-reverse'>
                <Button
                  onClick={() => {
                    dialogRef.current?.close();
                  }}
                  size='lg'
                  variant='solid-fill'
                >
                  確定する
                </Button>
                <Button
                  onClick={() => {
                    dialogRef.current?.close();
                  }}
                  size='lg'
                  variant='outline'
                >
                  前の画面に戻る
                </Button>
                <Button
                  className='desktop:mr-auto'
                  onClick={() => {
                    dialogRef.current?.close();
                  }}
                  size='lg'
                  variant='text'
                >
                  キャンセル
                </Button>
              </div>
            </DialogBody>
          </Dialog>
        </div>
      );
    };
    return <DialogWithHooks />;
  },
};

export const AlertDialog: Story = {
  render: () => {
    const DialogWithHooks = () => {
      const dialogRef = useRef<HTMLDialogElement>(null);

      return (
        <div>
          <Button onClick={() => dialogRef.current?.showModal()} size='lg' variant='solid-fill'>
            アラートダイアログ表示
          </Button>

          <Dialog aria-labelledby='alertdialog-heading' ref={dialogRef} role='alertdialog'>
            <DialogBody>
              <h2 className='text-std-24B-150 desktop:text-std-28B-150' id='alertdialog-heading'>
                アラートダイアログタイトル
              </h2>
              <p className='text-std-16N-170'>
                これはアラートダイアログの例です。ユーザーにとって緊急性の高い通知内容が入ります。
              </p>
              <div className='mt-2 flex w-full flex-col gap-4 desktop:mt-6 desktop:flex-row-reverse'>
                <Button
                  onClick={() => {
                    dialogRef.current?.close();
                  }}
                  size='md'
                  variant='solid-fill'
                >
                  OK
                </Button>
              </div>
            </DialogBody>
          </Dialog>
        </div>
      );
    };
    return <DialogWithHooks />;
  },
};
