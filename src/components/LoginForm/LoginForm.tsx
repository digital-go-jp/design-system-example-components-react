import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import { RequirementBadge } from '../RequirementBadge/RequirementBadge';
import { ErrorText } from '../ErrorText/ErrorText';
import { SupportText } from '../SupportText/SupportText';
import { Heading } from '../Heading/Heading';

export type LoginFormProps = {
  className?: string;
  onSubmit?: (data: { email: string; password: string }) => void;
  isLoading?: boolean;
  emailError?: string;
  passwordError?: string;
  formError?: string;
};

export const LoginForm: React.FC<LoginFormProps> = ({
  className,
  onSubmit,
  isLoading = false,
  emailError,
  passwordError,
  formError,
}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const emailId = React.useId();
  const passwordId = React.useId();
  const emailSupportId = React.useId();
  const passwordSupportId = React.useId();
  const emailErrorId = React.useId();
  const passwordErrorId = React.useId();
  const formErrorId = React.useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit && !isLoading) {
      onSubmit({ email, password });
    }
  };

  const emailDescribedBy = [
    emailSupportId,
    emailError ? emailErrorId : null,
  ].filter(Boolean).join(' ');

  const passwordDescribedBy = [
    passwordSupportId,
    passwordError ? passwordErrorId : null,
  ].filter(Boolean).join(' ');

  return (
    <div className={`max-w-md mx-auto p-6 ${className || ''}`}>
      <Heading level={1} className="mb-6 text-center">
        ログイン
      </Heading>

      <form onSubmit={handleSubmit} className="space-y-6">
        {formError && (
          <div role="alert" aria-live="polite">
            <ErrorText id={formErrorId}>{formError}</ErrorText>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <Label htmlFor={emailId}>
            メールアドレス
            <RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id={emailSupportId}>
            ログインに使用するメールアドレスを入力してください
          </SupportText>
          <Input
            id={emailId}
            name="email"
            type="email"
            blockSize="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby={emailDescribedBy}
            isError={!!emailError}
            aria-disabled={isLoading}
            required
          />
          {emailError && (
            <ErrorText id={emailErrorId}>＊{emailError}</ErrorText>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor={passwordId}>
            パスワード
            <RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id={passwordSupportId}>
            パスワードを入力してください
          </SupportText>
          <Input
            id={passwordId}
            name="password"
            type="password"
            blockSize="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby={passwordDescribedBy}
            isError={!!passwordError}
            aria-disabled={isLoading}
            required
          />
          {passwordError && (
            <ErrorText id={passwordErrorId}>＊{passwordError}</ErrorText>
          )}
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            variant="solid-fill"
            size="lg"
            className="w-full"
            aria-disabled={isLoading}
          >
            {isLoading ? 'ログイン中...' : 'ログイン'}
          </Button>
        </div>
      </form>
    </div>
  );
};