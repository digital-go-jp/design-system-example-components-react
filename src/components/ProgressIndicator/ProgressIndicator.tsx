import type { ComponentProps, CSSProperties } from 'react';
import './keyframes.css';
import type { ProgressIndicatorSize, ProgressIndicatorType } from './types';

export type ProgressIndicatorProps = Omit<ComponentProps<'div'>, 'role' | 'type'> & {
  type: ProgressIndicatorType;
  value?: number;
  active?: boolean;
};

const clampValue = (value: number) => Math.min(100, Math.max(0, value));

export const ProgressIndicator = (props: ProgressIndicatorProps) => {
  const { children, className, type, value, active = true, style, ...rest } = props;

  if (!active) return null;

  const hasValue = value !== undefined && Number.isFinite(value);
  const normalizedValue = hasValue ? clampValue(value as number) : undefined;
  const isIndeterminate = normalizedValue === undefined;

  const mergedStyle: CSSProperties = {
    ...style,
    ...(normalizedValue !== undefined ? { ['--value' as string]: String(normalizedValue) } : {}),
  };

  return (
    <div
      className={`
        group/progress-indicator flex justify-center items-center gap-y-4 gap-x-2 text-solid-gray-900 text-std-16N-170
        data-[type=stacked]:flex-col
        data-[type=stacked-underlay]:flex-col data-[type=stacked-underlay]:mx-auto data-[type=stacked-underlay]:box-border data-[type=stacked-underlay]:w-fit data-[type=stacked-underlay]:rounded-16 data-[type=stacked-underlay]:border data-[type=stacked-underlay]:border-solid-gray-500 data-[type=stacked-underlay]:bg-white
        data-[type=stacked-underlay]:has-[[data-indicator=spinner]]:min-w-[calc(128/16*1rem)] data-[type=stacked-underlay]:has-[[data-indicator=spinner]]:min-h-[calc(128/16*1rem)] data-[type=stacked-underlay]:has-[[data-indicator=spinner]]:p-4
        data-[type=stacked-underlay]:has-[[data-indicator=static]]:min-w-[calc(128/16*1rem)] data-[type=stacked-underlay]:has-[[data-indicator=static]]:min-h-[calc(128/16*1rem)] data-[type=stacked-underlay]:has-[[data-indicator=static]]:p-4
        data-[type=stacked-underlay]:has-[[data-indicator=linear]]:p-6
        ${className ?? ''}
      `}
      role='progressbar'
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={normalizedValue}
      data-type={type}
      data-indeterminate={isIndeterminate ? '' : undefined}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </div>
  );
};

// --- Spinner ---

const spinnerBarAnimationClass = `
  group-data-[indeterminate]/progress-indicator:[animation:dads-spinner-bar-rotate_2.5s_cubic-bezier(0.4,0,0.3,1)_infinite,dads-spinner-bar-dash_2.5s_cubic-bezier(0.4,0,0.3,1)_infinite]
  motion-reduce:![animation:none]
`;

const spinnerOuterGroupAnimationClass = `
  group-data-[indeterminate]/progress-indicator:[animation:dads-spinner-rotate_13s_linear_infinite]
  motion-reduce:![animation:none]
`;

const spinnerInnerGroupAnimationClass = `
  group-data-[indeterminate]/progress-indicator:[animation:dads-spinner-group-rotate_2.5s_linear_infinite]
  motion-reduce:![animation:none]
`;

export type ProgressIndicatorSpinnerProps = Omit<ComponentProps<'svg'>, 'children'> & {
  size?: ProgressIndicatorSize;
};

export const ProgressIndicatorSpinner = (props: ProgressIndicatorSpinnerProps) => {
  const { size = 'lg', className, ...rest } = props;
  const isLg = size === 'lg';
  const dimension = isLg ? 48 : 24;
  const center = isLg ? 24 : 12;
  const radius = isLg ? 22 : 8;
  const outerRadius = isLg ? 23.5 : 9.5;
  const strokeWidth = isLg ? 4 : 3;

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox={`0 0 ${dimension} ${dimension}`}
      stroke='currentcolor'
      fill='none'
      aria-hidden={true}
      data-indicator='spinner'
      className={className ?? ''}
      {...rest}
    >
      <circle
        className='stroke-current text-key-100 forced-colors:text-[Canvas]'
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <g className={`[transform-origin:center] ${spinnerOuterGroupAnimationClass}`}>
        <g className={`[transform-origin:center] ${spinnerInnerGroupAnimationClass}`}>
          <circle
            className={`
              text-key-1200 [stroke-dasharray:100] [transform:rotate(-90deg)] [transform-origin:center]
              [stroke-dashoffset:calc(100-clamp(0,var(--value,35),100))]
              forced-colors:text-[CanvasText]
              ${spinnerBarAnimationClass}
            `}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            pathLength={100}
          />
        </g>
      </g>
      <circle
        className='text-key-1200 forced-colors:text-[CanvasText]'
        cx={center}
        cy={center}
        r={outerRadius}
        strokeWidth={1}
      />
    </svg>
  );
};

// --- Linear ---

const linearBarClass = `
  [stroke-dasharray:100]
  group-data-[indeterminate]/progress-indicator:[stroke-dasharray:35_65]
  group-data-[indeterminate]/progress-indicator:[animation:dads-linear-rotate_4s_linear_infinite]
  motion-reduce:![animation:none]
`;

export type ProgressIndicatorLinearProps = Omit<ComponentProps<'svg'>, 'children'> & {
  size?: ProgressIndicatorSize;
};

export const ProgressIndicatorLinear = (props: ProgressIndicatorLinearProps) => {
  const { size = 'lg', className, ...rest } = props;
  const width = size === 'lg' ? 240 : 80;

  return (
    <svg
      width={width}
      height={4}
      viewBox={`0 0 ${width} 4`}
      stroke='currentcolor'
      fill='none'
      aria-hidden={true}
      data-indicator='linear'
      className={className ?? ''}
      {...rest}
    >
      <line
        className='stroke-current text-key-100 forced-colors:text-[Canvas]'
        x1={0}
        y1={2}
        x2={width}
        y2={2}
        strokeWidth={4}
      />
      <line
        className={`
          text-key-1200 forced-colors:text-[CanvasText]
          [stroke-dashoffset:calc(100-clamp(0,var(--value,35),100))]
          ${linearBarClass}
        `}
        x1={0}
        y1={2}
        x2={width}
        y2={2}
        strokeWidth={4}
        pathLength={100}
      />
      <line
        className='text-key-1200 forced-colors:text-[CanvasText]'
        x1={0}
        y1={3.5}
        x2={width}
        y2={3.5}
        strokeWidth={1}
      />
    </svg>
  );
};

// --- Static ---

export type ProgressIndicatorStaticProps = Omit<ComponentProps<'svg'>, 'children'> & {
  size?: ProgressIndicatorSize;
};

export const ProgressIndicatorStatic = (props: ProgressIndicatorStaticProps) => {
  const { size = 'lg', className, ...rest } = props;

  if (size === 'lg') {
    return (
      <svg
        width={48}
        height={48}
        viewBox='0 0 48 48'
        fill='none'
        aria-hidden={true}
        data-indicator='static'
        className={`text-key-1200 forced-colors:text-[CanvasText] ${className ?? ''}`}
        {...rest}
      >
        <path
          fill='currentcolor'
          d='M17 15c0 2.5 2.2 7 7 7s7-5 7-7H17ZM15 42h18c0-2-1-4.5-1-4.5L24 34l-8 3.5S15 40 15 42Z'
        />
        <path
          fill='none'
          stroke='currentcolor'
          strokeWidth={2}
          d='M24 24C34.5 24 35.5 6 35.5 4.8V4M24 24C13.5 24 12.5 6 12.5 4.8V4M24 24c7 0 11.5 11.8 11.5 18.3V44M24 24c-7 0-11.5 11.8-11.5 18.3V44M9 4h30M9 44h30'
        />
        <circle cx={24} cy={28} r={1} fill='currentcolor' />
        <circle cx={24} cy={31} r={1} fill='currentcolor' />
      </svg>
    );
  }

  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      aria-hidden={true}
      data-indicator='static'
      className={`text-key-1200 forced-colors:text-[CanvasText] ${className ?? ''}`}
      {...rest}
    >
      <path
        fill='currentcolor'
        d='M9 6c0 1.8 1.1 5 3.5 5S16 7.4 16 6H9ZM8 21h9c0-1-.5-2.2-.5-2.2l-4-1.8-4 1.8S8 20 8 21Z'
      />
      <path
        fill='none'
        stroke='currentcolor'
        d='M4 1.5h17m-17 21h17M6 1.5C6 5.1 7.6 12 12.5 12S18.9 5 19 1.5M19 22.5c.3-3.7-2.2-10.5-6.5-10.5S5.7 18.8 6 22.5'
      />
      <circle cx={12.5} cy={13.5} r={0.5} fill='currentcolor' />
      <circle cx={12.5} cy={15.5} r={0.5} fill='currentcolor' />
    </svg>
  );
};
