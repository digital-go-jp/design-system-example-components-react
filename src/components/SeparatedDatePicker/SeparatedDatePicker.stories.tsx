import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  type DateValue,
  Dialog,
  Popover,
  DatePicker as ReactAriaDatePicker,
} from 'react-aria-components';
import {
  Button,
  ErrorText,
  Legend,
  RequirementBadge,
  Select,
  SeparatedDatePicker,
  SeparatedDatePickerCalendarButton,
  SeparatedDatePickerDate,
  SeparatedDatePickerMonth,
  SeparatedDatePickerYear,
  SupportText,
} from '..';

/**
 * Separatedタイプのデートピッカー。
 * 左右キーで年月日フィールド間を移動する機能を持ちます。
 *
 * DefaultタイプはDatePickerコンポーネントを参照してください。
 */
const meta = {
  id: 'Component/DADS v2/DatePicker/SeparatedDatePicker',
  title: 'Component/日付ピッカー/Separated',
  tags: ['autodocs'],
  component: SeparatedDatePicker,
  argTypes: {
    size: {
      type: 'string',
      description: 'デートピッカーのサイズを以下から選択します。',
      control: { type: 'radio' },
      options: ['lg', 'md', 'sm'],
      table: {
        defaultValue: { summary: 'lg' },
        type: { summary: "'lg' | 'md' | 'sm'" },
      },
    },
    isError: {
      description: 'エラー状態であるかどうかを指定します。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    isDisabled: {
      description: '無効状態であるかどうかを指定します。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    isReadonly: {
      description: '編集不可（読み取り専用）状態であるかどうかを指定します。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    size: 'lg',
    isError: false,
    isDisabled: false,
    isReadonly: false,
    children: ({ ...rest }) => (
      <>
        <SeparatedDatePickerYear {...rest} />
        <SeparatedDatePickerMonth {...rest} />
        <SeparatedDatePickerDate {...rest} />
      </>
    ),
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** 項目ラベルやサポートテキスト等と一緒に表示した例 */
export const WithFieldset: Story = {
  render({ ...args }) {
    return (
      <fieldset className='flex flex-col gap-2 items-start'>
        <Legend>
          日付<RequirementBadge>※必須</RequirementBadge>
        </Legend>
        <SupportText id='date-picker-2-support-text'>西暦、半角</SupportText>
        <SeparatedDatePicker {...args}>
          {({ ...rest }) => (
            <>
              <SeparatedDatePickerYear aria-describedby='date-picker-2-support-text' {...rest} />
              <SeparatedDatePickerMonth aria-describedby='date-picker-2-support-text' {...rest} />
              <SeparatedDatePickerDate aria-describedby='date-picker-2-support-text' {...rest} />
            </>
          )}
        </SeparatedDatePicker>
      </fieldset>
    );
  },
};

/**
 * 項目ラベルやサポートテキスト等と一緒に表示した例
 *
 * Separatedタイプは個別の入力フィールドがエラー状態になります。
 */
export const Errored: Story = {
  args: {
    isError: true,
  },
  render({ ...args }) {
    return (
      <fieldset className='flex flex-col gap-2 items-start'>
        <Legend>
          日付<RequirementBadge>※必須</RequirementBadge>
        </Legend>
        <SupportText id='date-picker-4-support-text'>西暦、半角</SupportText>
        <SeparatedDatePicker {...args}>
          {({ ...rest }) => (
            <>
              <SeparatedDatePickerYear
                aria-describedby='date-picker-4-error-text date-picker-4-support-text'
                {...rest}
              />
              <SeparatedDatePickerMonth
                defaultValue={10}
                aria-describedby='date-picker-4-support-text'
                {...rest}
              />
              <SeparatedDatePickerDate
                defaultValue={28}
                aria-describedby='date-picker-4-support-text'
                {...rest}
              />
            </>
          )}
        </SeparatedDatePicker>
        <ErrorText id='date-picker-4-error-text'>＊正しい日付を入力してください。</ErrorText>
      </fieldset>
    );
  },
};

/**
 * Disabled状態を表示した例
 *
 * 無効化するために`disabled`属性ではなく`aria-disabled`属性を使用します。
 */
export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render({ ...args }) {
    return (
      <fieldset className='flex flex-col gap-2 items-start'>
        <Legend>
          日付<RequirementBadge isOptional>※任意</RequirementBadge>
        </Legend>
        <SupportText id='date-picker-5-support-text'>
          〜の理由により、この項目は編集できません。
        </SupportText>
        <SeparatedDatePicker {...args}>
          {({ ...rest }) => (
            <>
              <SeparatedDatePickerYear aria-describedby='date-picker-5-support-text' {...rest} />
              <SeparatedDatePickerMonth aria-describedby='date-picker-5-support-text' {...rest} />
              <SeparatedDatePickerDate aria-describedby='date-picker-5-support-text' {...rest} />
            </>
          )}
        </SeparatedDatePicker>
      </fieldset>
    );
  },
};

/**
 * Readonly状態を表示した例
 */
export const Readonly: Story = {
  args: {
    isReadonly: true,
  },
  render({ ...args }) {
    return (
      <fieldset className='flex flex-col gap-2 items-start'>
        <Legend>
          日付<RequirementBadge isOptional>※任意</RequirementBadge>
        </Legend>
        <SupportText id='date-picker-6-support-text'>
          〜の理由により、この項目は編集できません。
        </SupportText>
        <SeparatedDatePicker {...args}>
          {({ ...rest }) => (
            <>
              <SeparatedDatePickerYear
                value={2025}
                aria-describedby='date-picker-6-support-text'
                {...rest}
              />
              <SeparatedDatePickerMonth
                value={10}
                aria-describedby='date-picker-6-support-text'
                {...rest}
              />
              <SeparatedDatePickerDate
                value={28}
                aria-describedby='date-picker-6-support-text'
                {...rest}
              />
            </>
          )}
        </SeparatedDatePicker>
      </fieldset>
    );
  },
};

/** カレンダーで日付を選択できるようにした例 */
export const WithCalendar: Story = {
  render({ size, ...args }) {
    const [yearInput, setYearInput] = useState('');
    const [monthInput, setMonthInput] = useState('');
    const [dayInput, setDayInput] = useState('');

    function handleCalendarChange(newDate: DateValue | null) {
      if (newDate !== null) {
        setYearInput(String(newDate.year));
        setMonthInput(String(newDate.month).padStart(2, '0'));
        setDayInput(String(newDate.day).padStart(2, '0'));
      } else {
        setYearInput('');
        setMonthInput('');
        setDayInput('');
      }
    }

    return (
      <ReactAriaDatePicker className='flex items-end gap-4'>
        {({ state }) => {
          const updateCalendarDate = () => {
            const year = Number.parseInt(yearInput);
            const month = Number.parseInt(monthInput);
            const day = Number.parseInt(dayInput);

            if (!Number.isNaN(year) && !Number.isNaN(month) && !Number.isNaN(day)) {
              state.setValue(new CalendarDate(year, month, day));
            } else {
              state.setValue(null);
            }
          };

          return (
            <SeparatedDatePicker size={size} {...args}>
              {({ ...rest }) => (
                <>
                  <SeparatedDatePickerYear
                    value={yearInput}
                    onChange={(e) => setYearInput(e.target.value)}
                    onBlur={updateCalendarDate}
                    {...rest}
                  />
                  <SeparatedDatePickerMonth
                    value={monthInput}
                    onChange={(e) => setMonthInput(e.target.value)}
                    onBlur={updateCalendarDate}
                    {...rest}
                  />
                  <SeparatedDatePickerDate
                    value={dayInput}
                    onChange={(e) => setDayInput(e.target.value)}
                    onBlur={updateCalendarDate}
                    {...rest}
                  />
                  <SeparatedDatePickerCalendarButton
                    size={size}
                    aria-haspopup='dialog'
                    aria-expanded={state.isOpen}
                    onClick={() => state.setOpen(true)}
                  />
                  <Popover>
                    <Dialog
                      className='border border-solid-gray-420 bg-white shadow-1 rounded-8 focus:outline-0'
                      aria-label='カレンダー'
                    >
                      <Calendar
                        className='flex flex-col items-center w-max'
                        onChange={handleCalendarChange}
                      >
                        {({ state: calendarState }) => (
                          <>
                            <div className='flex items-center gap-2 p-4'>
                              <Select
                                className='!h-11'
                                blockSize='md'
                                value={calendarState.focusedDate.year}
                                onChange={(event) =>
                                  calendarState.setFocusedDate(
                                    calendarState.focusedDate.set({
                                      year: Number(event.target.value),
                                    }),
                                  )
                                }
                                aria-label='年'
                              >
                                <option value={2018}>2018年(平成30年)</option>
                                <option value={2019}>2019年(令和元年)</option>
                                <option value={2020}>2020年(令和2年)</option>
                                <option value={2021}>2021年(令和3年)</option>
                                <option value={2022}>2022年(令和4年)</option>
                                <option value={2023}>2023年(令和5年)</option>
                                <option value={2024}>2024年(令和6年)</option>
                                <option value={2025}>2025年(令和7年)</option>
                                <option value={2026}>2026年(令和8年)</option>
                                <option value={2027}>2027年(令和9年)</option>
                                <option value={2028}>2028年(令和10年)</option>
                                <option value={2029}>2029年(令和11年)</option>
                                <option value={2030}>2030年(令和12年)</option>
                              </Select>
                              <div className='flex items-center'>
                                <Button
                                  className='!min-w-0 !size-11 !p-0 hover:border-[3px] hover:bg-white'
                                  size='sm'
                                  variant='outline'
                                  onClick={() => calendarState.focusPreviousPage()}
                                >
                                  <svg
                                    className='mx-auto'
                                    width='16'
                                    height='16'
                                    role='img'
                                    aria-label='前の月'
                                  >
                                    <path
                                      d='m5.27 8 5.33-5.33-.93-.94L3.4 8l6.27 6.27.93-.94L5.27 8Z'
                                      fill='currentcolor'
                                    />
                                  </svg>
                                </Button>
                                <p className='w-14 text-center'>
                                  {calendarState.focusedDate.month}月
                                </p>
                                <Button
                                  className='!min-w-0 !size-11 !p-0 hover:border-[3px] hover:bg-white'
                                  slot='next'
                                  size='sm'
                                  variant='outline'
                                  onClick={() => calendarState.focusNextPage()}
                                >
                                  <svg
                                    className='mx-auto'
                                    width='16'
                                    height='16'
                                    role='img'
                                    aria-label='次の月'
                                  >
                                    <path
                                      d='m6 1.73-.93.94L10.4 8l-5.33 5.33.93.94L12.27 8 6 1.73Z'
                                      fill='currentcolor'
                                    />
                                  </svg>
                                </Button>
                              </div>
                            </div>
                            <CalendarGrid className='mx-3 mb-2'>
                              <CalendarGridHeader className='[&_th]:p-0'>
                                {(day) => (
                                  <CalendarHeaderCell className='size-12 text-center font-bold'>
                                    {day}
                                  </CalendarHeaderCell>
                                )}
                              </CalendarGridHeader>
                              <CalendarGridBody className='[&_td]:p-0'>
                                {(date) => (
                                  <CalendarCell
                                    className='m-1 flex items-center justify-center size-10 rounded-full underline-offset-[calc(3/16*1rem)] aria-disabled:hidden hover:bg-solid-gray-50 hover:underline focus:outline focus:outline-0 data-[focus-visible]:bg-yellow-300 data-[focus-visible]:outline data-[focus-visible]:outline-4 data-[focus-visible]:outline-black data-[focus-visible]:outline-offset-[calc(2/16*1rem)] data-[focus-visible]:ring-[calc(2/16*1rem)] data-[focus-visible]:ring-yellow-300 data-[selected]:!bg-blue-900 data-[selected]:border data-[selected]:border-transparent data-[selected]:text-white'
                                    date={date}
                                  />
                                )}
                              </CalendarGridBody>
                            </CalendarGrid>
                            <div className='flex self-stretch justify-between gap-4 p-4'>
                              <Button
                                variant='text'
                                size='sm'
                                onClick={() => calendarState.setValue(null)}
                              >
                                削除
                              </Button>
                              <Button
                                variant='outline'
                                size='sm'
                                onClick={() => calendarState.selectDate(today(getLocalTimeZone()))}
                              >
                                今日
                              </Button>
                            </div>
                          </>
                        )}
                      </Calendar>
                    </Dialog>
                  </Popover>
                </>
              )}
            </SeparatedDatePicker>
          );
        }}
      </ReactAriaDatePicker>
    );
  },
};

/** 年月または月日のみのタイプ */
export const Partial: Story = {
  render({ ...args }) {
    return (
      <div className='flex flex-col gap-8'>
        <SeparatedDatePicker {...args}>
          {({ ...rest }) => (
            <>
              <SeparatedDatePickerYear {...rest} />
              <SeparatedDatePickerMonth {...rest} />
            </>
          )}
        </SeparatedDatePicker>

        <SeparatedDatePicker {...args}>
          {({ ...rest }) => (
            <>
              <SeparatedDatePickerMonth {...rest} />
              <SeparatedDatePickerDate {...rest} />
            </>
          )}
        </SeparatedDatePicker>
      </div>
    );
  },
};
