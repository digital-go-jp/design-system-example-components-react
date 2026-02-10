import type { ComponentProps } from 'react';

export const scrollToTopButtonStyle = `
  flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-blue-900 text-blue-900 bg-white
  hover:border-blue-1000 hover:bg-blue-200 hover:text-blue-1000
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-yellow
  active:border-blue-1200 active:bg-blue-300 active:text-blue-1200
`;

export type ScrollToTopButtonProps = ComponentProps<'button'>;

/**
 * @deprecated
 * ※ このコンポーネントはアクセシビリティまたはユーザビリティの観点等から、現在は使用が推奨されません。やむを得ず使用する場合は、不利益があるユーザーの存在を踏まえたうえで注意深く使用してください。
 */
export const ScrollToTopButton = (props: ScrollToTopButtonProps) => {
  const { className, 'aria-label': ariaLabel, ...rest } = props;

  return (
    <button type='button' className={`${scrollToTopButtonStyle} ${className ?? ''}`} {...rest}>
      <svg
        aria-label={ariaLabel ?? 'ページの先頭へ戻る'}
        fill='none'
        height='16'
        role='img'
        viewBox='0 0 15 16'
        width='15'
      >
        <path
          d='M6.75 15.5L6.75 3.37303L1.05383 9.06918L0 7.99998L7.49997 0.5L15 7.99998L13.9461 9.06918L8.24995 3.37303L8.24995 15.5H6.75Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
};
