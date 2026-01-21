import type { Meta, StoryObj } from '@storybook/react';
import {
  Heading,
  type HeadingLevel,
  HeadingShoulder,
  type HeadingSize,
  HeadingTitle,
  type RuleSize,
} from './Heading';

const meta = {
  id: 'Component/DADS v2/Heading',
  title: 'Component/見出し',
  component: Heading,
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;

type HeadingPlaygroundProps = {
  level: HeadingLevel;
  size: HeadingSize;
  hasChip: boolean;
  hasRule: boolean;
  rule: RuleSize;
  hasShoulder: boolean;
  shoulderText?: string;
  text: string;
  hasIcon: boolean;
};

export const Playground: StoryObj<HeadingPlaygroundProps> = {
  render: ({ level, size, hasChip, hasIcon, hasRule, rule, hasShoulder, shoulderText, text }) => {
    return (
      <Heading size={size} hasChip={hasChip} rule={hasRule ? rule : undefined}>
        {hasShoulder && <HeadingShoulder>{shoulderText}</HeadingShoulder>}
        <HeadingTitle level={level}>
          {hasIcon && (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='currentColor'
              aria-hidden='true'
              className='inline-block mr-[0.4em] w-[1.25em] h-[1.25em] align-[-0.25em]'
            >
              <path d='M4.6 20.5c-.5-.1-1-.6-1.1-1l16-16c.5.1.9.6 1 1l-16 16Zm-1.1-6.4v-2L12 3.4h2.1L3.5 14.1Zm0-7.4V5.3c0-1 .8-1.8 1.8-1.8h1.4L3.5 6.7Zm13.8 13.8 3.2-3.2v1.4c0 1-.8 1.8-1.8 1.8h-1.4Zm-7.4 0L20.5 9.9v2L12 20.6H9.9Z' />
            </svg>
          )}

          {text}
        </HeadingTitle>
      </Heading>
    );
  },
  args: {
    level: 'h2',
    size: '36',
    hasChip: false,
    hasIcon: false,
    hasRule: false,
    rule: '6',
    hasShoulder: false,
    shoulderText: 'ショルダーテキスト',
    text: '見出しテキスト',
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['64', '57', '45', '36', '32', '28', '24', '20', '18', '16'],
    },
    level: {
      control: { type: 'inline-radio' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    hasChip: {
      control: { type: 'boolean' },
    },
    hasIcon: {
      control: { type: 'boolean' },
    },
    hasRule: {
      control: { type: 'boolean' },
    },
    rule: {
      control: { type: 'inline-radio' },
      options: ['8', '6', '4', '2'],
      if: { arg: 'hasRule', eq: true },
    },
    hasShoulder: {
      control: { type: 'boolean' },
    },
    shoulderText: {
      control: { type: 'text' },
      if: { arg: 'hasShoulder', eq: true },
    },
    text: {
      control: { type: 'text' },
    },
  },
};
