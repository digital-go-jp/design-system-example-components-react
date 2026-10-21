import type { Meta, StoryObj } from '@storybook/react-vite';
import { useId } from 'react';
import { Checkbox } from '../Checkbox';
import { DatePicker, DatePickerDate, DatePickerMonth, DatePickerYear } from '../DatePicker';
import { ErrorText } from '../ErrorText';
import { Input } from '../Input';
import { Radio } from '../Radio';
import { Select } from '../Select';
import {
  SeparatedDatePicker,
  SeparatedDatePickerDate,
  SeparatedDatePickerMonth,
  SeparatedDatePickerYear,
} from '../SeparatedDatePicker';
import { Textarea } from '../Textarea';
import type { FormControlLabelProps } from './FormControlLabel';
import { FormControlLabel, Label, Legend, RequirementBadge, SupportText } from './FormControlLabel';

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
        <div>
          <Input
            aria-describedby={describedBy}
            id={controlId}
            isError={error}
            name='single'
            required={required}
            blockSize='md'
          />
        </div>
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
      <FormControlLabel as='fieldset' size={size} aria-describedby={describedBy}>
        <Legend size={size}>
          ラベル
          <RequirementBadge isOptional={!required}>{required ? '※必須' : '※任意'}</RequirementBadge>
        </Legend>
        {supportText && (
          <SupportText id={supportTextId}>
            {required ? '1つ以上選択してください。' : '当てはまるものを選択してください。'}
          </SupportText>
        )}
        <div>
          {['選択肢1', '選択肢2', '選択肢3'].map((option) => (
            <Checkbox
              aria-invalid={error || undefined}
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

export const Horizontal: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    const id = useId();

    const horizontalLayout = `
      [overflow-wrap:anywhere]
      md:grid md:[grid-template:'label_field_field'_auto_'support-text_field_field'_1fr_/_1fr_1fr_1fr] md:gap-x-6 md:justify-start md:items-baseline
      md:[&>label]:self-baseline md:[&>label]:[grid-area:label]
      md:[&>p]:[grid-area:support-text]
      md:[&>legend]:contents md:[&>legend>span]:[grid-area:label] md:[&>legend>span]:justify-self-start
    `;

    return (
      <div className='grid gap-y-8'>
        <FormControlLabel className={horizontalLayout}>
          <Label htmlFor={`${id}-input`}>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id={`${id}-input-support`}>サポートテキスト</SupportText>
          <div className='min-w-0 [grid-area:field]'>
            <Input
              id={`${id}-input`}
              blockSize='md'
              required
              isError
              aria-describedby={`${id}-input-error ${id}-input-support`}
            />
            <ErrorText className='mt-2' id={`${id}-input-error`}>
              ＊エラーテキストが入ります。
            </ErrorText>
          </div>
        </FormControlLabel>

        <FormControlLabel className={horizontalLayout}>
          <Label htmlFor={`${id}-textarea`}>
            ラベル<RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id={`${id}-textarea-support`}>サポートテキスト</SupportText>
          <div className='min-w-0 [grid-area:field]'>
            <Textarea
              id={`${id}-textarea`}
              required
              isError
              aria-describedby={`${id}-textarea-error ${id}-textarea-support`}
            />
            <ErrorText className='mt-2' id={`${id}-textarea-error`}>
              ＊エラーテキストが入ります。
            </ErrorText>
          </div>
        </FormControlLabel>

        <FormControlLabel className={horizontalLayout}>
          <Label htmlFor={`${id}-select`}>
            長いラベル長いラベル長いラベル長いラベル長いラベル
            <RequirementBadge>※必須</RequirementBadge>
          </Label>
          <SupportText id={`${id}-select-support`}>
            長いサポートテキスト長いサポートテキスト長いサポートテキスト長いサポートテキスト
          </SupportText>
          <div className='min-w-0 [grid-area:field]'>
            <Select
              id={`${id}-select`}
              blockSize='md'
              required
              isError
              aria-describedby={`${id}-select-error ${id}-select-support`}
            >
              <option value=''>選択してください</option>
              {['選択肢1', '選択肢2', '選択肢3', '選択肢4'].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <ErrorText className='mt-2' id={`${id}-select-error`}>
              ＊エラーテキストが入ります。
            </ErrorText>
          </div>
        </FormControlLabel>

        <FormControlLabel
          as='fieldset'
          className={horizontalLayout}
          aria-describedby={`${id}-checkbox-error ${id}-checkbox-support`}
        >
          <Legend>
            <span>
              ラベル<RequirementBadge>※必須</RequirementBadge>
            </span>
          </Legend>
          <SupportText id={`${id}-checkbox-support`}>サポートテキスト</SupportText>
          <div className='min-w-0 [grid-area:field]'>
            {['選択肢1', '選択肢2', '選択肢3', '選択肢4'].map((option) => (
              <Checkbox
                key={option}
                name={`${id}-checkbox`}
                value={option}
                size='md'
                isError
                aria-invalid
              >
                {option}
              </Checkbox>
            ))}
            <ErrorText className='mt-2' id={`${id}-checkbox-error`}>
              ＊エラーテキストが入ります。
            </ErrorText>
          </div>
        </FormControlLabel>

        <FormControlLabel
          as='fieldset'
          className={horizontalLayout}
          aria-describedby={`${id}-radio-error ${id}-radio-support`}
        >
          <Legend>
            <span>
              ラベル<RequirementBadge>※必須</RequirementBadge>
            </span>
          </Legend>
          <SupportText id={`${id}-radio-support`}>サポートテキスト</SupportText>
          <div className='min-w-0 [grid-area:field]'>
            {['選択肢1', '選択肢2', '選択肢3', '選択肢4'].map((option) => (
              <Radio
                key={option}
                name={`${id}-radio`}
                value={option}
                size='md'
                required
                isError
                aria-invalid
              >
                {option}
              </Radio>
            ))}
            <ErrorText className='mt-2' id={`${id}-radio-error`}>
              ＊エラーテキストが入ります。
            </ErrorText>
          </div>
        </FormControlLabel>

        <FormControlLabel
          as='fieldset'
          className={horizontalLayout}
          aria-describedby={`${id}-date-support`}
        >
          <Legend>
            <span>
              ラベル<RequirementBadge>※必須</RequirementBadge>
            </span>
          </Legend>
          <SupportText id={`${id}-date-support`}>サポートテキスト</SupportText>
          <div className='min-w-0 [grid-area:field]'>
            <DatePicker size='md' isError>
              {({ yearRef, monthRef, dateRef, ...rest }) => (
                <>
                  <DatePickerYear
                    ref={yearRef}
                    required
                    aria-describedby={`${id}-date-error`}
                    {...rest}
                  />
                  <DatePickerMonth
                    ref={monthRef}
                    required
                    aria-describedby={`${id}-date-error`}
                    {...rest}
                  />
                  <DatePickerDate
                    ref={dateRef}
                    required
                    aria-describedby={`${id}-date-error`}
                    {...rest}
                  />
                </>
              )}
            </DatePicker>
            <ErrorText className='mt-2' id={`${id}-date-error`}>
              ＊エラーテキストが入ります。
            </ErrorText>
          </div>
        </FormControlLabel>

        <FormControlLabel
          as='fieldset'
          className={horizontalLayout}
          aria-describedby={`${id}-separated-date-support`}
        >
          <Legend>
            <span>
              ラベル<RequirementBadge>※必須</RequirementBadge>
            </span>
          </Legend>
          <SupportText id={`${id}-separated-date-support`}>サポートテキスト</SupportText>
          <div className='min-w-0 [grid-area:field]'>
            <SeparatedDatePicker size='md' isError>
              {(props) => (
                <>
                  <SeparatedDatePickerYear
                    required
                    aria-describedby={`${id}-separated-date-error`}
                    {...props}
                  />
                  <SeparatedDatePickerMonth
                    required
                    aria-describedby={`${id}-separated-date-error`}
                    {...props}
                  />
                  <SeparatedDatePickerDate
                    required
                    aria-describedby={`${id}-separated-date-error`}
                    {...props}
                  />
                </>
              )}
            </SeparatedDatePicker>
            <ErrorText className='mt-2' id={`${id}-separated-date-error`}>
              ＊エラーテキストが入ります。
            </ErrorText>
          </div>
        </FormControlLabel>
      </div>
    );
  },
};
