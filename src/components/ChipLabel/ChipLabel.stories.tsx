import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChipLabel, type ChipLabelColor, type ChipLabelVariant } from './ChipLabel';

const meta = {
  id: 'Component/DADS v2/ChipLabel',
  title: 'Component/チップラベル',
  component: ChipLabel,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'ラベルのスタイルを以下から選択します。',
      control: 'radio',
      options: ['text', 'outline', 'filled-outline', 'fill'],
      table: {
        defaultValue: { summary: 'text' },
        type: { summary: "'text' | 'outline' | 'filled-outline' | 'fill'" },
      },
    },
    color: {
      description: 'ラベルの色を以下から選択します。',
      control: 'inline-radio',
      options: [
        'gray',
        'blue',
        'light-blue',
        'cyan',
        'green',
        'lime',
        'yellow',
        'orange',
        'red',
        'magenta',
        'purple',
      ],
      table: {
        defaultValue: { summary: 'gray' },
        type: {
          summary:
            "'gray' | 'blue' | 'light-blue' | 'cyan' | 'green' | 'lime' | 'yellow' | 'orange' | 'red' | 'magenta' | 'purple'",
        },
      },
    },
    children: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof ChipLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

type PlaygroundProps = {
  variant: ChipLabelVariant;
  color: ChipLabelColor;
  icon: boolean;
  text: string;
};

const SampleIcon = () => {
  return (
    <svg
      className='relative [--icon-size:calc(24/16*1rem)] [--offset:calc((var(--icon-size)-1cap)/2)] top-[var(--offset)] -mt-[var(--offset)] mb-[var(--offset)] mr-1 shrink-0'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='currentcolor'
      aria-hidden='true'
    >
      <path d='M4.6 20.5c-.5-.1-1-.6-1.1-1l16-16c.5.1.9.6 1 1l-16 16Zm-1.1-6.4v-2L12 3.4h2.1L3.5 14.1Zm0-7.4V5.3c0-1 .8-1.8 1.8-1.8h1.4L3.5 6.7Zm13.8 13.8 3.2-3.2v1.4c0 1-.8 1.8-1.8 1.8h-1.4Zm-7.4 0L20.5 9.9v2L12 20.6H9.9Z' />
    </svg>
  );
};

export const Playground: StoryObj<PlaygroundProps> = {
  argTypes: {
    icon: {
      description: 'アイコンを表示するかどうかを指定します。',
      control: 'boolean',
    },
    text: {
      description: 'ラベルのテキスト',
      control: 'text',
    },
  },
  args: {
    variant: 'text',
    color: 'gray',
    icon: true,
    text: 'ラベル',
  },
  render: (args) => {
    return (
      <ChipLabel variant={args.variant} color={args.color}>
        {args.icon && <SampleIcon />}
        {args.text}
      </ChipLabel>
    );
  },
};

const variants: ChipLabelVariant[] = ['text', 'outline', 'filled-outline', 'fill'];
const colors: ChipLabelColor[] = [
  'gray',
  'blue',
  'light-blue',
  'cyan',
  'green',
  'lime',
  'yellow',
  'orange',
  'red',
  'magenta',
  'purple',
];

export const AllChipLabels: Story = {
  render: () => {
    return (
      <div className='flex flex-wrap gap-4'>
        {variants.map((variant) =>
          colors.map((color) => (
            <ChipLabel key={`${variant}-${color}`} variant={variant} color={color}>
              <SampleIcon />
              ラベル
            </ChipLabel>
          )),
        )}
      </div>
    );
  },
};
