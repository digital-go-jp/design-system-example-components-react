import type { ComponentProps } from 'react';

export type ChipLabelVariant = 'text' | 'outlined' | 'filled-1' | 'filled-2';
export type ChipLabelColor =
  | 'gray'
  | 'blue'
  | 'light-blue'
  | 'cyan'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'magenta'
  | 'purple';

export type ChipLabelProps = ComponentProps<'span'> & {
  variant?: ChipLabelVariant;
  color?: ChipLabelColor;
};

// 色に関するスタイルのみ定義（共通スタイルは data-variant で適用）
const colorClasses: Record<ChipLabelVariant, Record<ChipLabelColor, string>> = {
  text: {
    gray: 'text-solid-gray-800',
    blue: 'text-blue-700',
    'light-blue': 'text-light-blue-800',
    cyan: 'text-cyan-900',
    green: 'text-green-800',
    lime: 'text-lime-900',
    yellow: 'text-yellow-1000',
    orange: 'text-orange-900',
    red: 'text-red-900',
    magenta: 'text-magenta-800',
    purple: 'text-purple-800',
  },
  outlined: {
    gray: 'border-solid-gray-700 text-solid-gray-800 bg-white',
    blue: 'border-blue-700 text-blue-700 bg-white',
    'light-blue': 'border-light-blue-800 text-light-blue-800 bg-white',
    cyan: 'border-cyan-900 text-cyan-900 bg-white',
    green: 'border-green-800 text-green-800 bg-white',
    lime: 'border-lime-900 text-lime-900 bg-white',
    yellow: 'border-yellow-1000 text-yellow-1000 bg-white',
    orange: 'border-orange-900 text-orange-900 bg-white',
    red: 'border-red-900 text-red-900 bg-white',
    magenta: 'border-magenta-800 text-magenta-800 bg-white',
    purple: 'border-purple-800 text-purple-800 bg-white',
  },
  'filled-1': {
    gray: 'border-solid-gray-700 bg-solid-gray-50 text-solid-gray-800 [&_svg]:text-solid-gray-700',
    blue: 'border-blue-700 bg-blue-50 text-blue-800 [&_svg]:text-blue-700',
    'light-blue':
      'border-light-blue-800 bg-light-blue-50 text-light-blue-900 [&_svg]:text-light-blue-800',
    cyan: 'border-cyan-900 bg-cyan-50 text-cyan-1000 [&_svg]:text-cyan-900',
    green: 'border-green-800 bg-green-50 text-green-900 [&_svg]:text-green-800',
    lime: 'border-lime-900 bg-lime-50 text-lime-1000 [&_svg]:text-lime-900',
    yellow: 'border-yellow-1000 bg-yellow-50 text-yellow-1100 [&_svg]:text-yellow-1000',
    orange: 'border-orange-900 bg-orange-50 text-orange-1000 [&_svg]:text-orange-900',
    red: 'border-red-900 bg-red-50 text-red-1000 [&_svg]:text-red-900',
    magenta: 'border-magenta-800 bg-magenta-50 text-magenta-900 [&_svg]:text-magenta-800',
    purple: 'border-purple-800 bg-purple-50 text-purple-800 [&_svg]:text-purple-800',
  },
  'filled-2': {
    gray: 'bg-solid-gray-700',
    blue: 'bg-blue-700',
    'light-blue': 'bg-light-blue-800',
    cyan: 'bg-cyan-900',
    green: 'bg-green-800',
    lime: 'bg-lime-900',
    yellow: 'bg-yellow-1000',
    orange: 'bg-orange-900',
    red: 'bg-red-900',
    magenta: 'bg-magenta-800',
    purple: 'bg-purple-800',
  },
};

export const ChipLabel = (props: ChipLabelProps) => {
  const { className, children, variant = 'text', color = 'gray', ...rest } = props;

  const colorClass = colorClasses[variant][color];

  return (
    <span
      className={`
        inline-grid grid-cols-[auto_auto] items-baseline content-center min-h-8 rounded-8 text-oln-16N-100 [overflow-wrap:anywhere]
        data-[variant=text]:py-1 data-[variant=text]:px-2
        data-[variant=outlined]:py-[calc(3/16*1rem)] data-[variant=outlined]:px-[calc(7/16*1rem)] data-[variant=outlined]:border
        data-[variant=filled-1]:py-[calc(3/16*1rem)] data-[variant=filled-1]:px-[calc(7/16*1rem)] data-[variant=filled-1]:border
        data-[variant=filled-2]:py-[calc(3/16*1rem)] data-[variant=filled-2]:px-[calc(7/16*1rem)] data-[variant=filled-2]:border data-[variant=filled-2]:border-transparent data-[variant=filled-2]:text-white
        [&_svg]:forced-colors:fill-[CanvasText]
        ${colorClass} ${className ?? ''}
      `}
      data-variant={variant}
      data-color={color}
      {...rest}
    >
      {children}
    </span>
  );
};
