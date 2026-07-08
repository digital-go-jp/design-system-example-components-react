import { Description, Stories, Subtitle, Title } from '@storybook/addon-docs/blocks';
import { type ChangeEvent, useEffect, useRef, useState } from 'react';
import { Checkbox } from '../Checkbox';
import { Link, linkActiveStyle, linkDefaultStyle, linkHoverStyle, linkVisitedStyle } from '../Link';
import { List } from '../List';

const meta = {
  id: 'Component/DADS v2/Table',
  title: 'Component/テーブル',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories />
        </>
      ),
      description: {
        component:
          'テーブル用のコンポーネントは用意していません。`table`, `thead`, `tbody` `tr`, `th`, `td` などの HTML 要素を用いて実装してください。\n\n実装例は以下のサンプルを参照してください。',
      },
    },
  },
};

export default meta;

const OverflowShadow = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasRightShadow, setHasRightShadow] = useState(false);
  const [hasLeftShadow, setHasLeftShadow] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        setHasRightShadow(scrollLeft + clientWidth < scrollWidth);
        setHasLeftShadow(scrollLeft > 0);
      }
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
      handleScroll();
      return () => {
        container.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, []);

  return (
    <div className='relative'>
      <div
        className={`absolute top-0 left-0 w-6 h-full pointer-events-none transition-opacity duration-300 bg-gradient-to-r from-black/40 to-transparent ${
          hasLeftShadow ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
      <div
        className={`absolute top-0 right-0 w-6 h-full pointer-events-none transition-opacity duration-300 bg-gradient-to-l from-black/40 to-transparent ${
          hasRightShadow ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
      <div className='overflow-x-auto' ref={containerRef}>
        {children}
      </div>
    </div>
  );
};

/** 1行目が見出しセル */
export const FirstRowAsHeaderCell = {
  render: () => {
    return (
      <table className='w-full text-std-16N-170'>
        <thead>
          <tr className='border-b border-black bg-solid-gray-100'>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-solid-gray-420'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-420'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-420'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
        </tbody>
      </table>
    );
  },
};

/** 1列目が見出しセル */
export const FirstColumnAsHeaderCell = {
  render: () => {
    return (
      <table className='w-full text-std-16N-170'>
        <colgroup className='border-r border-black bg-solid-gray-100'></colgroup>
        <colgroup>
          <col className='border-r border-solid-gray-420' />
          <col className='border-r border-solid-gray-420' />
          <col className='border-r border-solid-gray-420' />
          <col className='border-r border-solid-gray-420' />
          <col className='border-r border-solid-gray-420' />
        </colgroup>
        <tbody>
          <tr>
            <th className='px-4 py-5 text-start align-top' scope='row'>
              ラベル
            </th>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr>
            <th className='px-4 py-5 text-start align-top' scope='row'>
              ラベル
            </th>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr>
            <th className='px-4 py-5 text-start align-top' scope='row'>
              ラベル
            </th>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr>
            <th className='px-4 py-5 text-start align-top' scope='row'>
              ラベル
            </th>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
        </tbody>
      </table>
    );
  },
};

/** 1行目と1列目の両方が見出しセル */
export const FirstRowAndColumnAsHeaderCell = {
  render: () => {
    return (
      <table className='w-full text-std-16N-170'>
        <colgroup>
          <col className='border-r border-black bg-solid-gray-100' />
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr className='border-b border-black bg-solid-gray-100'>
            <td className='border-b border-r border-solid-gray-500 px-4 py-5 align-top'></td>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-solid-gray-420'>
            <th
              className='border-b border-solid-gray-500 px-4 py-5 text-start align-top'
              scope='row'
            >
              ラベル
            </th>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-420'>
            <th
              className='border-b border-solid-gray-500 px-4 py-5 text-start align-top'
              scope='row'
            >
              ラベル
            </th>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-420'>
            <th
              className='border-b border-solid-gray-500 px-4 py-5 text-start align-top'
              scope='row'
            >
              ラベル
            </th>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
        </tbody>
      </table>
    );
  },
};

/** セルの高さが狭いテーブル */
export const CondensedTable = {
  render: () => {
    return (
      <table className='w-full text-dns-16N-130'>
        <thead>
          <tr className='border-b border-black bg-solid-gray-100'>
            <th className='px-4 py-3 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-3 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-3 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-3 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-3 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-3 text-start align-top' scope='col'>
              ラベル
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-solid-gray-420'>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-420'>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-420'>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
          </tr>
        </tbody>
      </table>
    );
  },
};

/** 行と列に罫線 */
export const BorderOnRowAndColumn = {
  render: () => {
    return (
      <table className='w-full text-std-16N-170'>
        <colgroup>
          <col className='border border-solid-gray-420' />
          <col className='border border-solid-gray-420' />
          <col className='border border-solid-gray-420' />
          <col className='border border-solid-gray-420' />
          <col className='border border-solid-gray-420' />
          <col className='border border-solid-gray-420' />
        </colgroup>
        <thead>
          <tr className='border-b border-black divide-x divide-solid-gray-536 bg-solid-gray-100'>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='border border-solid-gray-420'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border border-solid-gray-420'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border border-solid-gray-420'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
        </tbody>
      </table>
    );
  },
};

/** テーブルヘッダーがcolspanで列結合され、階層化されたパターン */
export const TableHeaderWithColspan = {
  render: () => {
    return (
      <table className='w-full border border-solid-gray-420 text-std-16N-170'>
        <thead>
          <tr className='bg-solid-gray-100'>
            <th
              className='border-b border-r border-solid-gray-500 px-4 py-5 text-start align-top'
              colSpan={3}
              scope='col'
            >
              親ラベル
            </th>
            <th
              className='border-b border-r border-solid-gray-500 px-4 py-5 text-start align-top'
              colSpan={3}
              scope='col'
            >
              親ラベル
            </th>
          </tr>
          <tr className='border-b border-black bg-solid-gray-100'>
            <th
              className='border-r border-solid-gray-500 px-4 py-5 text-start align-top'
              scope='col'
            >
              子ラベル
            </th>
            <th
              className='border-r border-solid-gray-500 px-4 py-5 text-start align-top'
              scope='col'
            >
              子ラベル
            </th>
            <th
              className='border-r border-solid-gray-500 px-4 py-5 text-start align-top'
              scope='col'
            >
              子ラベル
            </th>
            <th
              className='border-r border-solid-gray-500 px-4 py-5 text-start align-top'
              scope='col'
            >
              子ラベル
            </th>
            <th
              className='border-r border-solid-gray-500 px-4 py-5 text-start align-top'
              scope='col'
            >
              子ラベル
            </th>
            <th
              className='border-r border-solid-gray-500 px-4 py-5 text-start align-top'
              scope='col'
            >
              子ラベル
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-solid-gray-420'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-420'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-420'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
        </tbody>
      </table>
    );
  },
};

/** テーブルヘッダーがrowspanで行結合され、階層化されたパターン */
export const TableHeaderWithRowspan = {
  render: () => {
    return (
      <table className='w-full border border-solid-gray-420 text-std-16N-170'>
        <colgroup>
          <col className='border-r border-solid-gray-500 bg-solid-gray-100' />
          <col className='border-r border-black bg-solid-gray-100' />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr className='border-b border-solid-gray-420'>
            <th
              className='border-b border-solid-gray-500 px-4 py-5 text-start align-top'
              rowSpan={2}
              scope='row'
            >
              親ラベル
            </th>
            <th
              className='border-b border-solid-gray-500 px-4 py-5 text-start align-top'
              scope='row'
            >
              子ラベル
            </th>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-420'>
            <th
              className='border-b border-solid-gray-500 px-4 py-5 text-start align-top'
              scope='row'
            >
              子ラベル
            </th>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-420'>
            <th
              className='border-b border-solid-gray-500 px-4 py-5 text-start align-top'
              rowSpan={2}
              scope='row'
            >
              親ラベル
            </th>
            <th
              className='border-b border-solid-gray-500 px-4 py-5 text-start align-top'
              scope='row'
            >
              子ラベル
            </th>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-420'>
            <th
              className='border-b border-solid-gray-500 px-4 py-5 text-start align-top'
              scope='row'
            >
              子ラベル
            </th>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
        </tbody>
      </table>
    );
  },
};

/* インデント行を持つテーブル */
export const IndentedRows = {
  render: () => (
    <table className='w-full text-std-16N-170'>
      <col className='w-8' />
      <thead>
        <tr className='border-b border-black bg-solid-gray-100'>
          <td className='px-4 py-5 text-start align-top' colSpan={2}></td>
          <th className='px-4 py-5 text-start align-top' scope='col'>
            代表者名
          </th>
          <th className='px-4 py-5 text-start align-top' scope='col'>
            電話番号
          </th>
          <th className='px-4 py-5 text-start align-top' scope='col'>
            住所
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='border-b border-solid-gray-420'>
          <th className='px-4 py-5 text-start align-top' colSpan={2} scope='row'>
            東京本社
          </th>
          <td className='px-4 py-5 align-top'>山田太郎</td>
          <td className='px-4 py-5 align-top'>03-1234-5678</td>
          <td className='px-4 py-5 align-top'>東京都新宿区1-2-3</td>
        </tr>
        <tr className='border-b border-solid-gray-420'>
          <th scope='row'>
            <span className='sr-only'>東京本社</span>
          </th>
          <th className='px-4 py-5 text-start align-top' scope='row'>
            営業部
          </th>
          <td className='px-4 py-5 align-top'>佐藤花子</td>
          <td className='px-4 py-5 align-top'>03-2345-6789</td>
          <td className='px-4 py-5 align-top'>東京都渋谷区4-5-6</td>
        </tr>
        <tr className='border-b border-solid-gray-420'>
          <th scope='row'>
            <span className='sr-only'>東京本社</span>
          </th>
          <th className='px-4 py-5 text-start align-top' scope='row'>
            開発部
          </th>
          <td className='px-4 py-5 align-top'>鈴木一郎</td>
          <td className='px-4 py-5 align-top'>03-3456-7890</td>
          <td className='px-4 py-5 align-top'>東京都港区7-8-9</td>
        </tr>
      </tbody>
    </table>
  ),
};

/** 背景色ストライプ */
export const StripeTable = {
  render: () => {
    return (
      <table className='w-full text-std-16N-170'>
        <thead>
          <tr className='border-b border-black bg-solid-gray-100'>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-solid-gray-500 even:bg-solid-gray-50'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-500 even:bg-solid-gray-50'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-500 even:bg-solid-gray-50'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-500 even:bg-solid-gray-50'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-500 even:bg-solid-gray-50'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-500 even:bg-solid-gray-50'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
        </tbody>
      </table>
    );
  },
};

/** ホバーした行をハイライト */
export const HighlightHoveredRow = {
  render: () => {
    return (
      <table className='w-full text-std-16N-170'>
        <thead>
          <tr className='border-b border-black bg-solid-gray-100'>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
            <th className='px-4 py-5 text-start align-top' scope='col'>
              ラベル
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-solid-gray-500 even:bg-solid-gray-50 hover:bg-key-50'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-500 even:bg-solid-gray-50 hover:bg-key-50'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-500 even:bg-solid-gray-50 hover:bg-key-50'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-500 even:bg-solid-gray-50 hover:bg-key-50'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-500 even:bg-solid-gray-50 hover:bg-key-50'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-500 even:bg-solid-gray-50 hover:bg-key-50'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
        </tbody>
      </table>
    );
  },
};

/**
 * 選択可能なテーブル行
 */
export const SelectableTable = {
  render: () => {
    const checkAll = useRef<HTMLInputElement>(null);
    const [checks, setChecks] = useState([false, true, false]);

    useEffect(() => {
      if (!checkAll.current) return;
      const allChecked = checks.every(Boolean);
      const noneChecked = checks.every((v) => !v);
      checkAll.current.checked = allChecked;
      checkAll.current.indeterminate = !allChecked && !noneChecked;
    }, [checks]);

    const handleCheckAllChange = () => {
      if (!checkAll.current) return;
      const checked = checkAll.current.indeterminate || checkAll.current.checked;
      checkAll.current.checked = checked;
      setChecks(checks.map(() => checked));
    };

    const handleIndividualChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newChecks = [...checks];
      newChecks[index] = e.target.checked;
      setChecks(newChecks);
    };

    return (
      <table className='w-full text-dns-16N-130'>
        <thead>
          <tr className='border-b border-black bg-solid-gray-100'>
            <th className='relative w-10' scope='col'>
              <label className='absolute inset-0 grid justify-center pt-2.5'>
                <Checkbox
                  aria-label='行を選択'
                  aria-description='すべての行を選択する'
                  ref={checkAll}
                  onChange={handleCheckAllChange}
                />
              </label>
            </th>
            <th className='px-4 py-3 text-start align-top' scope='col'>
              タイトル
            </th>
            <th className='px-4 py-3 text-start align-top' scope='col'>
              状態
            </th>
            <th className='px-4 py-3 text-start align-top' scope='col'>
              コメント数
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-solid-gray-500 [&:has(input:checked)]:bg-key-100'>
            <td className='relative'>
              <label className='absolute inset-0 grid justify-center pt-2.5'>
                <Checkbox
                  aria-labelledby='selectable-table-row-1-title'
                  checked={checks[0]}
                  onChange={handleIndividualChange(0)}
                />
              </label>
            </td>
            <th
              className='px-4 py-3 text-left align-top text-dns-16N-130'
              id='selectable-table-row-1-title'
              scope='row'
            >
              記事タイトル1
            </th>
            <td className='px-4 py-3 align-top'>公開中</td>
            <td className='px-4 py-3 align-top'>10</td>
          </tr>
          <tr className='border-b border-solid-gray-500 [&:has(input:checked)]:bg-key-100'>
            <td className='relative'>
              <label className='absolute inset-0 grid justify-center pt-2.5'>
                <Checkbox
                  aria-labelledby='selectable-table-row-2-title'
                  checked={checks[1]}
                  onChange={handleIndividualChange(1)}
                />
              </label>
            </td>
            <th
              className='px-4 py-3 text-left align-top text-dns-16N-130'
              id='selectable-table-row-2-title'
              scope='row'
            >
              記事タイトル2
            </th>
            <td className='px-4 py-3 align-top'>下書き</td>
            <td className='px-4 py-3 align-top'>0</td>
          </tr>
          <tr className='border-b border-solid-gray-500 [&:has(input:checked)]:bg-key-100'>
            <td className='relative'>
              <label className='absolute inset-0 grid justify-center pt-2.5'>
                <Checkbox
                  aria-labelledby='selectable-table-row-3-title'
                  checked={checks[2]}
                  onChange={handleIndividualChange(2)}
                />
              </label>
            </td>
            <th
              className='px-4 py-3 text-left align-top text-dns-16N-130'
              id='selectable-table-row-3-title'
              scope='row'
            >
              記事タイトル3
            </th>
            <td className='px-4 py-3 align-top'>非公開</td>
            <td className='px-4 py-3 align-top'>3</td>
          </tr>
        </tbody>
      </table>
    );
  },
};

/** ソート可能なテーブルヘッダー（2列目は列メニューあり） */
export const SortableHeader = {
  render: () => {
    type Sort = 'ascending' | 'descending' | undefined;

    const [sortStates, setSortStates] = useState<Record<number, Sort>>({ 1: 'ascending' });

    const handleSortClick = (columnIndex: number) => {
      setSortStates((prevStates) => {
        return {
          [columnIndex]: prevStates[columnIndex] === 'ascending' ? 'descending' : 'ascending',
        };
      });
    };

    const SortIcon = ({ sort }: { sort: Sort }) =>
      sort ? (
        <svg
          className={sort === 'descending' ? 'rotate-180' : ''}
          width='24'
          height='24'
          fill='black'
          aria-hidden={true}
        >
          <path d='M17 18.12L21.27 14L22 14.7L16.5 20L11 14.7L11.73 14L16 18.12V4H17V18.12Z' />
          <path d='M14 8.92L11.73 11L9 8.52V20H6V8.52L3.27 11L1 8.93L7.5 3L14 8.93Z' />
        </svg>
      ) : (
        <svg width='24' height='24' fill='black' aria-hidden='true'>
          <path d='M17 18.11L21.27 14L22 14.7L16.5 20L11 14.7L11.73 14L16 18.12V4H17V18.12Z' />
          <path d='M8 5.88L12.27 10L13 9.3L7.5 4L2 9.3L2.73 10L7 5.88V20H8V5.88Z' />
        </svg>
      );

    // 2列目は列メニューあり
    const showColumnMenuIndex = 1;

    return (
      <table className='w-full table-fixed border border-solid-gray-420 text-std-16N-170'>
        <colgroup>
          <col className='border-r border-solid-gray-420' />
          <col className='border-r border-solid-gray-420' />
          <col className='border-r border-solid-gray-420' />
          <col className='border-r border-solid-gray-420' />
          <col className='border-r border-solid-gray-420' />
        </colgroup>
        <thead>
          <tr className='border-b border-black divide-x divide-solid-gray-536 bg-solid-gray-100'>
            {[...Array(5)].map((_, i) => (
              <th
                // biome-ignore lint/suspicious/noArrayIndexKey: 例示のため
                key={i}
                className='px-4 py-3 text-start align-top'
                scope='col'
                aria-sort={sortStates[i] || 'none'}
              >
                <div className='flex items-start justify-between'>
                  <div className='flex items-start py-2'>
                    <button
                      className='inline-flex items-start gap-x-1 text-start underline underline-offset-[calc(3/16*1rem)] hover:decoration-[calc(3/16*1rem)] focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300'
                      type='button'
                      onClick={() => handleSortClick(i)}
                    >
                      ラベル
                      <span className='pt-0.5'>
                        <SortIcon sort={sortStates[i]} />
                      </span>
                    </button>
                  </div>
                  {i === showColumnMenuIndex && (
                    <button
                      className='flex size-11 shrink-0 items-center justify-end rounded-4 focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300'
                      type='button'
                      aria-haspopup='true'
                    >
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 -960 960 960'
                        fill='none'
                        role='img'
                        aria-label='列メニュー'
                      >
                        <path
                          d='M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z'
                          fill='currentcolor'
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-solid-gray-420'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-420'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-420'>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
            <td className='px-4 py-5 align-top'>データ</td>
          </tr>
        </tbody>
      </table>
    );
  },
};

/** ソート可能なテーブルヘッダー Dense（2列目は列メニューあり） */
export const SortableHeaderDense = {
  render: () => {
    type Sort = 'ascending' | 'descending' | undefined;

    const [sortStates, setSortStates] = useState<Record<number, Sort>>({ 1: 'ascending' });

    const handleSortClick = (columnIndex: number) => {
      setSortStates((prevStates) => {
        return {
          [columnIndex]: prevStates[columnIndex] === 'ascending' ? 'descending' : 'ascending',
        };
      });
    };

    const SortIcon = ({ sort }: { sort: Sort }) =>
      sort ? (
        <svg
          className={sort === 'descending' ? 'rotate-180' : ''}
          width='24'
          height='24'
          fill='black'
          aria-hidden={true}
        >
          <path d='M17 18.12L21.27 14L22 14.7L16.5 20L11 14.7L11.73 14L16 18.12V4H17V18.12Z' />
          <path d='M14 8.92L11.73 11L9 8.52V20H6V8.52L3.27 11L1 8.93L7.5 3L14 8.93Z' />
        </svg>
      ) : (
        <svg width='24' height='24' fill='black' aria-hidden='true'>
          <path d='M17 18.11L21.27 14L22 14.7L16.5 20L11 14.7L11.73 14L16 18.12V4H17V18.12Z' />
          <path d='M8 5.88L12.27 10L13 9.3L7.5 4L2 9.3L2.73 10L7 5.88V20H8V5.88Z' />
        </svg>
      );

    // 2列目は列メニューあり
    const showColumnMenuIndex = 1;

    return (
      <table className='w-full table-fixed border border-solid-gray-420 text-dns-16N-130'>
        <colgroup>
          <col className='border-r border-solid-gray-420' />
          <col className='border-r border-solid-gray-420' />
          <col className='border-r border-solid-gray-420' />
          <col className='border-r border-solid-gray-420' />
          <col className='border-r border-solid-gray-420' />
        </colgroup>
        <thead>
          <tr className='border-b border-black divide-x divide-solid-gray-536 bg-solid-gray-100'>
            {[...Array(5)].map((_, i) => (
              <th
                // biome-ignore lint/suspicious/noArrayIndexKey: 例示のため
                key={i}
                className='px-4 py-0 text-start align-top'
                scope='col'
                aria-sort={sortStates[i] || 'none'}
              >
                <div className='flex items-start justify-between'>
                  <div className='flex items-start py-3'>
                    <button
                      className='inline-flex items-start gap-x-1 text-start underline underline-offset-[calc(3/16*1rem)] hover:decoration-[calc(3/16*1rem)] focus-visible:rounded-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:bg-yellow-300 focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300'
                      type='button'
                      onClick={() => handleSortClick(i)}
                    >
                      ラベル
                      <span className='-mt-0.5'>
                        <SortIcon sort={sortStates[i]} />
                      </span>
                    </button>
                  </div>
                  {i === showColumnMenuIndex && (
                    <button
                      className='flex size-11 shrink-0 items-center justify-end rounded-4 focus-visible:bg-yellow-300 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[calc(2/16*1rem)] focus-visible:outline-black focus-visible:ring-[calc(2/16*1rem)] focus-visible:ring-yellow-300'
                      type='button'
                      aria-haspopup='true'
                    >
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 -960 960 960'
                        fill='none'
                        role='img'
                        aria-label='列メニュー'
                      >
                        <path
                          d='M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z'
                          fill='currentcolor'
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-solid-gray-420'>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-420'>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
          </tr>
          <tr className='border-b border-solid-gray-420'>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
            <td className='px-4 py-3 align-top'>データ</td>
          </tr>
        </tbody>
      </table>
    );
  },
};

/** リンクテキストを含むセル */
export const LinkedTextInCell = {
  render: () => (
    <table className='w-full table-fixed text-std-16N-170'>
      <thead>
        <tr className='border-b border-black bg-solid-gray-100'>
          <th className='px-4 py-5 text-start align-top' scope='col'>
            ラベル
          </th>
          <th className='px-4 py-5 text-start align-top' scope='col'>
            ラベル
          </th>
          <th className='px-4 py-5 text-start align-top' scope='col'>
            ラベル
          </th>
          <th className='px-4 py-5 text-start align-top' scope='col'>
            ラベル
          </th>
          <th className='px-4 py-5 text-start align-top' scope='col'>
            ラベル
          </th>
          <th className='px-4 py-5 text-start align-top' scope='col'>
            ラベル
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='border-b border-solid-gray-420'>
          <td className='h-0 p-0'>
            <a
              className={`h-full flex px-4 py-5 ${linkDefaultStyle} ${linkVisitedStyle} ${linkHoverStyle} focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-[calc(-2/16*1rem)] focus-visible:bg-yellow-300 ${linkActiveStyle}`}
              href='#'
            >
              デジタル庁
            </a>
          </td>
          <td className='px-4 py-5 align-top'>データ</td>
          <td className='px-4 py-5 align-top'>データ</td>
          <td className='px-4 py-5 align-top'>データ</td>
          <td className='px-4 py-5 align-top'>データ</td>
          <td className='px-4 py-5 align-top'>データ</td>
        </tr>
        <tr className='border-b border-solid-gray-420'>
          <td className='px-4 py-5 align-top'>データ</td>
          <td className='px-4 py-5 align-top'>データ</td>
          <td className='px-4 py-5 align-top'>データ</td>
          <td className='px-4 py-5 align-top'>データ</td>
          <td className='px-4 py-5 align-top'>データ</td>
          <td className='px-4 py-5 align-top'>データ</td>
        </tr>
        <tr className='border-b border-solid-gray-420'>
          <td className='px-4 py-5 align-top'>
            <List spacing='4'>
              <li>
                <Link href='#'>デジタル庁</Link>
              </li>
              <li>
                <Link href='#'>デジタル庁デザインシステム</Link>
              </li>
            </List>
          </td>
          <td className='px-4 py-5 align-top'>データ</td>
          <td className='px-4 py-5 align-top'>データ</td>
          <td className='px-4 py-5 align-top'>データ</td>
          <td className='px-4 py-5 align-top'>データ</td>
          <td className='px-4 py-5 align-top'>データ</td>
        </tr>
      </tbody>
    </table>
  ),
};

/** キャプション入りテーブル */
export const WithCaption = {
  render: () => {
    return (
      <figure>
        <figcaption className='mb-4 text-start font-bold'>表1: テーブルキャプション</figcaption>
        <table className='w-full text-std-16N-170'>
          <thead>
            <tr className='border-b border-black bg-solid-gray-100'>
              <th className='px-4 py-5 text-start align-top' scope='col'>
                ラベル
              </th>
              <th className='px-4 py-5 text-start align-top' scope='col'>
                ラベル
              </th>
              <th className='px-4 py-5 text-start align-top' scope='col'>
                ラベル
              </th>
              <th className='px-4 py-5 text-start align-top' scope='col'>
                ラベル
              </th>
              <th className='px-4 py-5 text-start align-top' scope='col'>
                ラベル
              </th>
              <th className='px-4 py-5 text-start align-top' scope='col'>
                ラベル
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-solid-gray-420'>
              <td className='px-4 py-5 align-top'>データ</td>
              <td className='px-4 py-5 align-top'>データ</td>
              <td className='px-4 py-5 align-top'>データ</td>
              <td className='px-4 py-5 align-top'>データ</td>
              <td className='px-4 py-5 align-top'>データ</td>
              <td className='px-4 py-5 align-top'>データ</td>
            </tr>
            <tr className='border-b border-solid-gray-420'>
              <td className='px-4 py-5 align-top'>データ</td>
              <td className='px-4 py-5 align-top'>データ</td>
              <td className='px-4 py-5 align-top'>データ</td>
              <td className='px-4 py-5 align-top'>データ</td>
              <td className='px-4 py-5 align-top'>データ</td>
              <td className='px-4 py-5 align-top'>データ</td>
            </tr>
            <tr className='border-b border-solid-gray-420'>
              <td className='px-4 py-5 align-top'>データ</td>
              <td className='px-4 py-5 align-top'>データ</td>
              <td className='px-4 py-5 align-top'>データ</td>
              <td className='px-4 py-5 align-top'>データ</td>
              <td className='px-4 py-5 align-top'>データ</td>
              <td className='px-4 py-5 align-top'>データ</td>
            </tr>
          </tbody>
        </table>
      </figure>
    );
  },
};

/** モバイル等デバイスで横スクロール表示 */
export const OverflowOnMobile = {
  render: () => {
    return (
      <div className='-mx-4'>
        <OverflowShadow>
          <div className='px-4 pb-2'>
            <table className='mx-4 mb-2 w-full min-w-[calc(640/16*1rem)]'>
              <thead>
                <tr className='border-b border-black bg-solid-gray-100'>
                  <th className='w-36 px-4 py-5 text-start align-top md:w-64' scope='col'>
                    項目
                  </th>
                  <th className='px-4 py-5 text-start align-top' scope='col'>
                    例
                  </th>
                  <th className='px-4 py-5 text-start align-top' scope='col'>
                    説明
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-solid-gray-420'>
                  <td className='px-4 py-5 align-top'>チャネルの種類</td>
                  <td className='px-4 py-5 align-top'>
                    オンラインポータル、電話サポート、メール窓口、情報パンフ、動画案内、SNSアカウント、イベント告知、FAQページ
                  </td>
                  <td className='px-4 py-5 align-top'>
                    市民は自分に適した手段で情報取得やサービス利用が可能で、行政も効果的なコミュニケーションとサポートを提供できます
                  </td>
                </tr>
                <tr className='border-b border-solid-gray-420'>
                  <td className='px-4 py-5 align-top'>プロバイダー</td>
                  <td className='px-4 py-5 align-top'>
                    光ファイバー、DSL、ケーブル、ワイヤレスなど
                  </td>
                  <td className='px-4 py-5 align-top'>
                    ユーザーは異なるプロバイダータイプから、自分のニーズに合った高速インターネット接続を選択できます
                  </td>
                </tr>
                <tr className='border-b border-solid-gray-420'>
                  <td className='px-4 py-5 align-top'>サービスを提供する地域</td>
                  <td className='px-4 py-5 align-top'>
                    <List marker='number' spacing='4'>
                      <li>
                        <span>1. </span>
                        りんご区
                      </li>
                      <li>
                        <span>2. </span>
                        みかん区
                      </li>
                      <li>
                        <span>3. </span>
                        ぶどう区
                      </li>
                      <li>
                        <span>4. </span>
                        いちご区
                      </li>
                      <li>
                        <span>5. </span>
                        なし区
                      </li>
                    </List>
                  </td>
                  <td className='px-4 py-5 align-top'>
                    特有のニーズに応えながら、高品質かつ効率的なサポートを目指しています。地元のコミュニティと密接に連携し、信頼性とアクセシビリティを大切にしています。
                  </td>
                </tr>
                <tr className='border-b border-solid-gray-420'>
                  <td className='px-4 py-5 align-top'>チャネルアイコン</td>
                  <td className='px-4 py-5 align-top'>
                    テレビ、ラジオ、スマートフォン、パソコン、ニュース、ゲーム、料理、アート、音楽、カメラ
                  </td>
                  <td className='px-4 py-5 align-top'>
                    これらのアイコンは利用者が興味を持ちそうなチャンネルを素早く特定し、アクセスしやすくするのに役立ちます。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </OverflowShadow>
      </div>
    );
  },
};
