import type { Meta, StoryObj } from '@storybook/react-vite';
import { useId, useState } from 'react';
import { Label } from '../Label';
import { Legend } from '../Legend';
import { RequirementBadge } from '../RequirementBadge';
import { SupportText } from '../SupportText';
import { SwitchMode, SwitchOnOff } from './Switch';

const meta = {
  id: 'Component/DADS v2/Switch',
  title: 'Component/スイッチ',
} satisfies Meta;

export default meta;

// ---------------------------------------------------------------------------
// オン／オフスイッチ
// ---------------------------------------------------------------------------

type SwitchOnOffPlaygroundArgs = {
  disabled: boolean;
};

export const PlaygroundOnOff: StoryObj<SwitchOnOffPlaygroundArgs> = {
  name: 'Playground (On/Off)',
  render: ({ disabled }) => {
    const [checked, setChecked] = useState(false);

    return (
      <label className='flex w-fit items-center gap-2'>
        <SwitchOnOff
          aria-checked={checked}
          disabled={disabled}
          onClick={() => setChecked((prev) => !prev)}
        />
        ラベル
      </label>
    );
  },
  argTypes: {
    disabled: {
      description:
        '無効状態にする必要がある場合に指定します（disabled 状態自体が非推奨のため、通常は使用しません）。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    disabled: false,
  },
};

export const WithFormControlLabelOnOff: StoryObj<SwitchOnOffPlaygroundArgs> = {
  name: 'With Label (On/Off)',
  render: ({ disabled }) => {
    const [checked, setChecked] = useState(false);
    const formId = useId();
    const supportTextId = useId();

    return (
      <div className='flex flex-col items-start gap-2'>
        <Label htmlFor={formId}>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Label>
        <SupportText id={supportTextId}>サポートテキスト</SupportText>
        <SwitchOnOff
          id={formId}
          aria-checked={checked}
          aria-describedby={supportTextId}
          disabled={disabled}
          onClick={() => setChecked((prev) => !prev)}
        />
      </div>
    );
  },
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      table: { disable: true },
    },
  },
};

// ---------------------------------------------------------------------------
// モードスイッチ
// ---------------------------------------------------------------------------

type SwitchModePlaygroundArgs = {
  leftLabel: string;
  rightLabel: string;
  disabled: boolean;
};

export const PlaygroundMode: StoryObj<SwitchModePlaygroundArgs> = {
  name: 'Playground (Mode)',
  render: ({ leftLabel, rightLabel, disabled }) => {
    const [selected, setSelected] = useState<'left' | 'right'>('left');
    const value = selected === 'left' ? leftLabel : rightLabel;

    return (
      <SwitchMode
        leftLabel={leftLabel}
        rightLabel={rightLabel}
        value={value}
        onChange={(newValue) => setSelected(newValue === rightLabel ? 'right' : 'left')}
        disabled={disabled}
      />
    );
  },
  argTypes: {
    leftLabel: {
      description: '左側の選択肢のラベルです。',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    rightLabel: {
      description: '右側の選択肢のラベルです。',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    disabled: {
      description:
        '無効状態にする必要がある場合に指定します（disabled 状態自体が非推奨のため、通常は使用しません）。',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    leftLabel: 'モード1',
    rightLabel: 'モード2',
    disabled: false,
  },
};

export const WithFormControlLabelMode: StoryObj<SwitchModePlaygroundArgs> = {
  name: 'With Label (Mode)',
  render: ({ leftLabel, rightLabel, disabled }) => {
    const [selected, setSelected] = useState<'left' | 'right'>('left');
    const value = selected === 'left' ? leftLabel : rightLabel;
    const supportTextId = useId();

    return (
      <fieldset className='flex flex-col items-start gap-2'>
        <Legend>
          ラベル<RequirementBadge>※必須</RequirementBadge>
        </Legend>
        <SupportText id={supportTextId}>サポートテキスト</SupportText>
        <SwitchMode
          leftLabel={leftLabel}
          rightLabel={rightLabel}
          value={value}
          onChange={(newValue) => setSelected(newValue === rightLabel ? 'right' : 'left')}
          aria-describedby={supportTextId}
          disabled={disabled}
        />
      </fieldset>
    );
  },
  args: {
    leftLabel: 'モード1',
    rightLabel: 'モード2',
    disabled: false,
  },
  argTypes: {
    leftLabel: { table: { disable: true } },
    rightLabel: { table: { disable: true } },
    disabled: { table: { disable: true } },
  },
};
