import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent } from 'storybook/test';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'Components/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  args: {
    onSubmit: fn(),
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  play: async ({ canvas, args }) => {
    const emailInput = canvas.getByLabelText('メールアドレス※必須');
    const passwordInput = canvas.getByLabelText('パスワード※必須');
    const submitButton = canvas.getByRole('button', { name: 'ログイン' });

    await userEvent.type(emailInput, 'user@example.com');
    await userEvent.type(passwordInput, 'password123');
    await userEvent.click(submitButton);

    await expect(args.onSubmit).toHaveBeenCalledWith({
      email: 'user@example.com',
      password: 'password123',
    });
  },
};

export const WithEmailError: Story = {
  args: {
    emailError: 'メールアドレスの形式が正しくありません',
  },
  play: async ({ canvas }) => {
    const errorMessage = canvas.getByText('＊メールアドレスの形式が正しくありません');
    await expect(errorMessage).toBeInTheDocument();

    const emailInput = canvas.getByLabelText('メールアドレス※必須');
    await expect(emailInput).toHaveAttribute('aria-describedby');
  },
};

export const WithPasswordError: Story = {
  args: {
    passwordError: 'パスワードは8文字以上で入力してください',
  },
  play: async ({ canvas }) => {
    const errorMessage = canvas.getByText('＊パスワードは8文字以上で入力してください');
    await expect(errorMessage).toBeInTheDocument();

    const passwordInput = canvas.getByLabelText('パスワード※必須');
    await expect(passwordInput).toHaveAttribute('aria-describedby');
  },
};

export const WithFormError: Story = {
  args: {
    formError: 'メールアドレスまたはパスワードが間違っています',
  },
  play: async ({ canvas }) => {
    const errorMessage = canvas.getByText('メールアドレスまたはパスワードが間違っています');
    await expect(errorMessage).toBeInTheDocument();

    const errorContainer = canvas.getByRole('alert');
    await expect(errorContainer).toHaveAttribute('aria-live', 'polite');
  },
};

export const LoadingState: Story = {
  args: {
    isLoading: true,
  },
  play: async ({ canvas }) => {
    const submitButton = canvas.getByRole('button', { name: 'ログイン中...' });
    await expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    const emailInput = canvas.getByLabelText('メールアドレス※必須');
    const passwordInput = canvas.getByLabelText('パスワード※必須');

    await expect(emailInput).toHaveAttribute('aria-disabled', 'true');
    await expect(passwordInput).toHaveAttribute('aria-disabled', 'true');
  },
};

export const AllErrors: Story = {
  args: {
    emailError: 'メールアドレスの形式が正しくありません',
    passwordError: 'パスワードは8文字以上で入力してください',
    formError: 'ログインに失敗しました',
  },
  play: async ({ canvas }) => {
    const formError = canvas.getByText('ログインに失敗しました');
    const emailError = canvas.getByText('＊メールアドレスの形式が正しくありません');
    const passwordError = canvas.getByText('＊パスワードは8文字以上で入力してください');

    await expect(formError).toBeInTheDocument();
    await expect(emailError).toBeInTheDocument();
    await expect(passwordError).toBeInTheDocument();
  },
};

export const KeyboardNavigation: Story = {
  args: {},
  play: async ({ canvas }) => {
    const emailInput = canvas.getByLabelText('メールアドレス※必須');

    await userEvent.click(emailInput);
    await expect(emailInput).toHaveFocus();

    await userEvent.tab();
    const passwordInput = canvas.getByLabelText('パスワード※必須');
    await expect(passwordInput).toHaveFocus();

    await userEvent.tab();
    const submitButton = canvas.getByRole('button', { name: 'ログイン' });
    await expect(submitButton).toHaveFocus();
  },
};
