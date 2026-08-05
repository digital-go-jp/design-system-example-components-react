import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';
import {
  StepNavigation,
  StepNavigationDescription,
  StepNavigationList,
  StepNavigationNumber,
  StepNavigationStateIndicator,
  StepNavigationStep,
  StepNavigationStepHeader,
  type StepNavigationStepState,
  StepNavigationTitle,
} from './StepNavigation';

const meta = {
  id: 'Component/DADS v2/StepNavigation',
  title: 'Component/ステップナビゲーション',
  component: StepNavigation,
} satisfies Meta<typeof StepNavigation>;

export default meta;

interface PlaygroundSingleArgs {
  interaction: 'none' | 'link' | 'button';
  first: boolean;
  last: boolean;
  current: boolean;
  state: StepNavigationStepState | 'default';
  title: string;
  description: string;
}

export const PlaygroundSingle: StoryObj<PlaygroundSingleArgs> = {
  name: 'Playground (Single)',
  parameters: {
    controls: {
      include: ['interaction', 'first', 'last', 'current', 'state', 'title', 'description'],
    },
  },
  render: (args) => {
    const state = args.state === 'default' ? undefined : args.state;
    const hasTitle = Boolean(args.title);
    const hasDescription = Boolean(args.description);

    const headerChildren = (
      <>
        <StepNavigationNumber>
          1
          <StepNavigationStateIndicator state={state} />
        </StepNavigationNumber>
        {hasTitle && <StepNavigationTitle>{args.title}</StepNavigationTitle>}
      </>
    );

    const isNav = args.interaction === 'link';
    const isButton = args.interaction === 'button';

    return (
      <StepNavigation
        asChild={isNav}
        orientation='horizontal'
        size='normal'
        style={{ '--step-min-width': '200' } as React.CSSProperties}
      >
        {isNav ? (
          <nav aria-label='ステップ'>
            <p className='sr-only'>全1ステップ中、1ステップ目まで到達済み</p>
            <StepNavigationList>
              <StepNavigationStep
                state={state}
                first={args.first}
                last={args.last}
                aria-current={args.current ? 'true' : undefined}
              >
                <StepNavigationStepHeader asChild>
                  <a href='#'>{headerChildren}</a>
                </StepNavigationStepHeader>
                {hasDescription && (
                  <StepNavigationDescription>{args.description}</StepNavigationDescription>
                )}
              </StepNavigationStep>
            </StepNavigationList>
          </nav>
        ) : (
          <>
            <p className='sr-only'>全1ステップ中、1ステップ目まで到達済み</p>
            <StepNavigationList>
              <StepNavigationStep
                state={state}
                first={args.first}
                last={args.last}
                aria-current={args.current ? 'true' : undefined}
              >
                <StepNavigationStepHeader asChild={isButton}>
                  {isButton ? <button type='button'>{headerChildren}</button> : headerChildren}
                </StepNavigationStepHeader>
                {hasDescription && (
                  <StepNavigationDescription>{args.description}</StepNavigationDescription>
                )}
              </StepNavigationStep>
            </StepNavigationList>
          </>
        )}
      </StepNavigation>
    );
  },
  argTypes: {
    interaction: {
      control: 'radio',
      options: ['none', 'link', 'button'],
    },
    first: { control: 'boolean' },
    last: { control: 'boolean' },
    current: { control: 'boolean' },
    state: {
      control: 'radio',
      options: ['default', 'reached', 'completed', 'editing', 'error', 'skipped'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
  },
  args: {
    interaction: 'none',
    first: false,
    last: false,
    current: false,
    state: 'default',
    title: 'ステップのタイトル',
    description: 'ステップの説明が入ります。',
  },
};

interface PlaygroundFullArgs {
  orientation: 'horizontal' | 'vertical';
  size: 'normal' | 'small';
  numberOnly: boolean;
  steps: number;
  stepWidth: number;
  stepMinWidth: number;
}

export const PlaygroundFull: StoryObj<PlaygroundFullArgs> = {
  name: 'Playground (Full)',
  parameters: {
    controls: {
      include: ['orientation', 'size', 'numberOnly', 'steps', 'stepWidth', 'stepMinWidth'],
    },
  },
  render: (args) => {
    const stepItems: React.ReactNode[] = [];
    for (let n = 1; n <= args.steps; n++) {
      const isFirst = n === 1;
      const isLast = n === args.steps;
      const state: StepNavigationStepState | undefined = isFirst ? 'reached' : undefined;
      stepItems.push(
        <StepNavigationStep
          key={n}
          state={state}
          first={isFirst}
          last={isLast}
          aria-current={isFirst ? 'true' : undefined}
        >
          <StepNavigationStepHeader>
            <StepNavigationNumber>{n}</StepNavigationNumber>
            {!args.numberOnly && <StepNavigationTitle>ステップのタイトル</StepNavigationTitle>}
          </StepNavigationStepHeader>
          {!args.numberOnly && (
            <StepNavigationDescription>ステップの説明が入ります。</StepNavigationDescription>
          )}
        </StepNavigationStep>,
      );
    }

    const styleOverride: React.CSSProperties =
      args.orientation === 'horizontal' && (args.stepWidth || args.stepMinWidth)
        ? ({
            '--step-width': String(args.stepWidth),
            '--step-min-width': String(args.stepMinWidth),
          } as React.CSSProperties)
        : {};

    return (
      <StepNavigation orientation={args.orientation} size={args.size} style={styleOverride}>
        <p className='sr-only'>全{args.steps}ステップ中、1ステップ目まで到達済み</p>
        <StepNavigationList>{stepItems}</StepNavigationList>
      </StepNavigation>
    );
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'radio',
      options: ['normal', 'small'],
    },
    numberOnly: { control: 'boolean' },
    steps: {
      control: { type: 'number', min: 1, max: 100, step: 1 },
    },
    stepWidth: {
      control: { type: 'number', min: 0, max: 1000, step: 8 },
      if: { arg: 'orientation', eq: 'horizontal' },
    },
    stepMinWidth: {
      control: { type: 'number', min: 0, max: 1000, step: 8 },
      if: { arg: 'orientation', eq: 'horizontal' },
    },
  },
  args: {
    orientation: 'horizontal',
    size: 'normal',
    numberOnly: false,
    steps: 3,
    stepWidth: 320,
    stepMinWidth: 160,
  },
};
