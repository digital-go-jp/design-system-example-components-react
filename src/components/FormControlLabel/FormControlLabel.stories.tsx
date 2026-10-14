import type { Meta, StoryObj } from '@storybook/react-vite';
import { useId } from 'react';
import { Checkbox } from '../Checkbox';
import { ErrorText } from '../ErrorText';
import { Input } from '../Input';
import type { FormControlLabelProps } from './FormControlLabel';
import {
  FormControlLabel,
  Label,
  Legend,
  RequirementBadge,
  SupportText,
} from './FormControlLabel';

type StoryArgs = FormControlLabelProps & {
  required: boolean;
  supportText: boolean;
  error: boolean;
};

const meta = {
  id: 'Component/DADS v2/FormControlLabel',
  title: 'Component/フォームコントロールラベル',
  component: FormControlLabel,
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    size: {
      type: { name: 'enum', value: ['sm', 'md', 'lg'] },
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    required: { control: { type: 'boolean' } },
    supportText: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
  },
  args: {
    size: 'md',
    required: true,
    supportText: true,
    error: false,
  },
} satisfies Meta<StoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: ({ size, required, supportText, error }) => {
    const controlId = useId();
    const supportTextId = useId();
    const errorTextId = useId();
    const describedBy =
      [error && errorTextId, supportText && supportTextId].filter(Boolean).join(' ') || undefined;

    return (
      <FormControlLabel size={size}>
        <Label htmlFor={controlId} size={size}>
          ラベル
          <RequirementBadge isOptional={!required}>{required ? '※必須' : '※任意'}</RequirementBadge>
        </Label>
        {supportText && <SupportText id={supportTextId}>サポートテキスト</SupportText>}
        <Input
          aria-describedby={describedBy}
          id={controlId}
          isError={error}
          name='single'
          required={required}
          blockSize='md'
        />
        {error && <ErrorText id={errorTextId}>＊入力内容を確認してください。</ErrorText>}
      </FormControlLabel>
    );
  },
};

export const Multiple: Story = {
  render: ({ size, required, supportText, error }) => {
    const supportTextId = useId();
    const errorTextId = useId();
    const describedBy =
      [error && errorTextId, supportText && supportTextId].filter(Boolean).join(' ') || undefined;

    return (
      <FormControlLabel as='fieldset' size={size}>
        <Legend size={size}>
          ラベル
          <RequirementBadge isOptional={!required}>{required ? '※必須' : '※任意'}</RequirementBadge>
        </Legend>
        {supportText && (
          <SupportText id={supportTextId}>
            {required ? '1つ以上選択してください。' : '当てはまるものを選択してください。'}
          </SupportText>
        )}
        <div className='flex flex-col'>
          {['選択肢1', '選択肢2', '選択肢3'].map((option) => (
            <Checkbox
              aria-describedby={describedBy}
              isError={error}
              key={option}
              name='multiple'
              size='md'
              value={option}
            >
              {option}
            </Checkbox>
          ))}
        </div>
        {error && <ErrorText id={errorTextId}>＊選択内容を確認してください。</ErrorText>}
      </FormControlLabel>
    );
  },
};
