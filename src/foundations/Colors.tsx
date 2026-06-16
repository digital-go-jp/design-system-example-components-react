import { useEffect } from 'react';
import { ColorItem } from './ColorItem';
import { rgb2hex } from './utils';

export const Colors = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.c');
    for (const item of items) {
      const swatch = item.querySelector('div');
      const label = item.querySelectorAll('p')[1];
      if (!swatch || !label) continue;
      const bgColor = getComputedStyle(swatch).backgroundColor;
      label.textContent = `#${rgb2hex(bgColor)}`;
    }
  }, []);

  return (
    <div className='prose'>
      <h1>カラー</h1>
      <p>デジタル庁デザインシステムで定義されているカラーパレットです。</p>
      <p>
        例では<code>bg-*</code>を利用していますが、<code>text-*</code>や<code>fill-*</code>、
        <code>border-*</code>等、色関連は全てに適用されます。
      </p>
      <h2>キーカラー</h2>
      <div className='mt-8 flex flex-col gap-8'>
        <ColorItem
          colorClasses={[
            'bg-key-50',
            'bg-key-100',
            'bg-key-200',
            'bg-key-300',
            'bg-key-400',
            'bg-key-500',
            'bg-key-600',
            'bg-key-700',
            'bg-key-800',
            'bg-key-900',
            'bg-key-1000',
            'bg-key-1100',
            'bg-key-1200',
          ]}
          title='Key'
        />
      </div>
      <h2>プリミティブカラー</h2>
      <div className='mt-8 flex flex-col gap-8'>
        <ColorItem
          colorClasses={[
            'bg-blue-50',
            'bg-blue-100',
            'bg-blue-200',
            'bg-blue-300',
            'bg-blue-400',
            'bg-blue-500',
            'bg-blue-600',
            'bg-blue-700',
            'bg-blue-800',
            'bg-blue-900',
            'bg-blue-1000',
            'bg-blue-1100',
            'bg-blue-1200',
          ]}
          title='Blue'
        />
        <ColorItem
          colorClasses={[
            'bg-light-blue-50',
            'bg-light-blue-100',
            'bg-light-blue-200',
            'bg-light-blue-300',
            'bg-light-blue-400',
            'bg-light-blue-500',
            'bg-light-blue-600',
            'bg-light-blue-700',
            'bg-light-blue-800',
            'bg-light-blue-900',
            'bg-light-blue-1000',
            'bg-light-blue-1100',
            'bg-light-blue-1200',
          ]}
          title='Light Blue'
        />
        <ColorItem
          colorClasses={[
            'bg-cyan-50',
            'bg-cyan-100',
            'bg-cyan-200',
            'bg-cyan-300',
            'bg-cyan-400',
            'bg-cyan-500',
            'bg-cyan-600',
            'bg-cyan-700',
            'bg-cyan-800',
            'bg-cyan-900',
            'bg-cyan-1000',
            'bg-cyan-1100',
            'bg-cyan-1200',
          ]}
          title='Cyan'
        />
        <ColorItem
          colorClasses={[
            'bg-green-50',
            'bg-green-100',
            'bg-green-200',
            'bg-green-300',
            'bg-green-400',
            'bg-green-500',
            'bg-green-600',
            'bg-green-700',
            'bg-green-800',
            'bg-green-900',
            'bg-green-1000',
            'bg-green-1100',
            'bg-green-1200',
          ]}
          title='Green'
        />
        <ColorItem
          colorClasses={[
            'bg-lime-50',
            'bg-lime-100',
            'bg-lime-200',
            'bg-lime-300',
            'bg-lime-400',
            'bg-lime-500',
            'bg-lime-600',
            'bg-lime-700',
            'bg-lime-800',
            'bg-lime-900',
            'bg-lime-1000',
            'bg-lime-1100',
            'bg-lime-1200',
          ]}
          title='Lime'
        />
        <ColorItem
          colorClasses={[
            'bg-yellow-50',
            'bg-yellow-100',
            'bg-yellow-200',
            'bg-yellow-300',
            'bg-yellow-400',
            'bg-yellow-500',
            'bg-yellow-600',
            'bg-yellow-700',
            'bg-yellow-800',
            'bg-yellow-900',
            'bg-yellow-1000',
            'bg-yellow-1100',
            'bg-yellow-1200',
          ]}
          title='Yellow'
        />
        <ColorItem
          colorClasses={[
            'bg-orange-50',
            'bg-orange-100',
            'bg-orange-200',
            'bg-orange-300',
            'bg-orange-400',
            'bg-orange-500',
            'bg-orange-600',
            'bg-orange-700',
            'bg-orange-800',
            'bg-orange-900',
            'bg-orange-1000',
            'bg-orange-1100',
            'bg-orange-1200',
          ]}
          title='Orange'
        />
        <ColorItem
          colorClasses={[
            'bg-red-50',
            'bg-red-100',
            'bg-red-200',
            'bg-red-300',
            'bg-red-400',
            'bg-red-500',
            'bg-red-600',
            'bg-red-700',
            'bg-red-800',
            'bg-red-900',
            'bg-red-1000',
            'bg-red-1100',
            'bg-red-1200',
          ]}
          title='Red'
        />
        <ColorItem
          colorClasses={[
            'bg-magenta-50',
            'bg-magenta-100',
            'bg-magenta-200',
            'bg-magenta-300',
            'bg-magenta-400',
            'bg-magenta-500',
            'bg-magenta-600',
            'bg-magenta-700',
            'bg-magenta-800',
            'bg-magenta-900',
            'bg-magenta-1000',
            'bg-magenta-1100',
            'bg-magenta-1200',
          ]}
          title='Magenta'
        />
        <ColorItem
          colorClasses={[
            'bg-purple-50',
            'bg-purple-100',
            'bg-purple-200',
            'bg-purple-300',
            'bg-purple-400',
            'bg-purple-500',
            'bg-purple-600',
            'bg-purple-700',
            'bg-purple-800',
            'bg-purple-900',
            'bg-purple-1000',
            'bg-purple-1100',
            'bg-purple-1200',
          ]}
          title='Purple'
        />
        <ColorItem
          colorClasses={[
            'bg-solid-gray-50',
            'bg-solid-gray-100',
            'bg-solid-gray-200',
            'bg-solid-gray-300',
            'bg-solid-gray-400',
            'bg-solid-gray-420',
            'bg-solid-gray-500',
            'bg-solid-gray-536',
            'bg-solid-gray-600',
            'bg-solid-gray-700',
            'bg-solid-gray-800',
            'bg-solid-gray-900',
          ]}
          title='Solid Gray'
        />
      </div>
      <h2>セマンティックカラー</h2>
      <div className='mt-8 flex flex-col gap-8'>
        <ColorItem colorClasses={['bg-success-1', 'bg-success-2']} title='Success' />
        <ColorItem colorClasses={['bg-error-1', 'bg-error-2']} title='Error' />
        <ColorItem
          colorClasses={['bg-warning-yellow-1', 'bg-warning-yellow-2']}
          title='Warning（Yellow）'
        />
        <ColorItem
          colorClasses={['bg-warning-orange-1', 'bg-warning-orange-2']}
          title='Warning（Orange）'
        />
      </div>
    </div>
  );
};
