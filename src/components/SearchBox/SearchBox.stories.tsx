import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ChangeEvent, useEffect, useRef } from 'react';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Radio } from '../Radio';
import './search-box.css';
import {
  SearchBox,
  SearchBoxDetail,
  SearchBoxDetailActions,
  SearchBoxFields,
  SearchBoxInput,
  SearchBoxSelect,
  SearchBoxSubmit,
} from './SearchBox';

const meta = {
  id: 'Component/DADS v2/SearchBox',
  title: 'Component/検索ボックス',
  component: SearchBox,
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

type PlaygroundArgs = {
  size: 'lg' | 'md' | 'sm';
  hasOption: boolean;
};

export const Playground: StoryObj<PlaygroundArgs> = {
  render: (args) => {
    return (
      <SearchBox size={args.size}>
        <SearchBoxFields>
          {args.hasOption && (
            <SearchBoxSelect label='検索対象' name='scope'>
              <option value=''>すべて</option>
              <option value='images'>画像</option>
              <option value='files'>ファイル</option>
              <option value='map'>地図</option>
              <option value='videos'>動画</option>
            </SearchBoxSelect>
          )}
          <SearchBoxInput label='検索' type='search' name='q' />
        </SearchBoxFields>
        <SearchBoxSubmit size={args.size} type='submit'>
          検索
        </SearchBoxSubmit>
      </SearchBox>
    );
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['lg', 'md', 'sm'],
    },
    hasOption: { control: 'boolean' },
  },
  args: {
    size: 'lg',
    hasOption: true,
  },
};

export const WithDetail: Story = {
  render: (_args) => {
    const checkAllRef = useRef<HTMLInputElement>(null);
    const checkRefs = [
      useRef<HTMLInputElement>(null),
      useRef<HTMLInputElement>(null),
      useRef<HTMLInputElement>(null),
      useRef<HTMLInputElement>(null),
      useRef<HTMLInputElement>(null),
      useRef<HTMLInputElement>(null),
    ];

    // biome-ignore lint/correctness/useExhaustiveDependencies: checkRefs and checkAllRef are refs and won't change
    useEffect(() => {
      const updateCheckAll = () => {
        if (!checkAllRef.current) return;
        const checks = checkRefs.map((r) => r.current);
        const allChecked = checks.every((c) => c?.checked);
        const noneChecked = checks.every((c) => !c?.checked);
        checkAllRef.current.checked = allChecked;
        checkAllRef.current.indeterminate = !allChecked && !noneChecked;
      };

      updateCheckAll();

      const listeners = checkRefs.map((r) => {
        const handler = () => updateCheckAll();
        r.current?.addEventListener('change', handler);
        return { ref: r, handler };
      });

      return () => {
        listeners.forEach(({ ref: r, handler }) => {
          r.current?.removeEventListener('change', handler);
        });
      };
    }, []);

    const handleCheckAll = (e: ChangeEvent<HTMLInputElement>) => {
      checkRefs.forEach((r) => {
        if (r.current) r.current.checked = e.target.checked;
      });
    };

    return (
      <SearchBox size='lg'>
        <SearchBoxFields>
          <SearchBoxSelect label='検索対象' name='scope'>
            <option value=''>すべて</option>
            <option value='images'>画像</option>
            <option value='files'>ファイル</option>
            <option value='map'>地図</option>
            <option value='videos'>動画</option>
          </SearchBoxSelect>
          <SearchBoxInput label='検索' type='search' name='q' />
        </SearchBoxFields>

        <SearchBoxDetail summary='詳細検索'>
          <div className='mb-8 flex flex-col gap-6'>
            <fieldset>
              <legend className='mb-2 text-std-16B-170'>検索対象</legend>
              <div className='flex flex-wrap gap-4'>
                <label className='flex items-center gap-2 text-std-16N-170'>
                  <Radio size='sm' name='search-target' value='current' defaultChecked />
                  現行法令
                </label>
                <label className='flex items-center gap-2 text-std-16N-170'>
                  <Radio size='sm' name='search-target' value='point-in-time' />
                  時点指定
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className='mb-2 text-std-16B-170'>法令種別</legend>
              <div className='flex flex-wrap gap-4'>
                <label className='flex items-center gap-2 text-std-16N-170'>
                  <Checkbox
                    size='sm'
                    name='law-type'
                    value='all'
                    ref={checkAllRef}
                    onChange={handleCheckAll}
                  />
                  すべて
                </label>
                <label className='flex items-center gap-2 text-std-16N-170'>
                  <Checkbox
                    size='sm'
                    name='law-type'
                    value='law'
                    defaultChecked
                    ref={checkRefs[0]}
                  />
                  法令
                </label>
                <label className='flex items-center gap-2 text-std-16N-170'>
                  <Checkbox size='sm' name='law-type' value='cabinet-order' ref={checkRefs[1]} />
                  政令
                </label>
                <label className='flex items-center gap-2 text-std-16N-170'>
                  <Checkbox
                    size='sm'
                    name='law-type'
                    value='imperial-order'
                    defaultChecked
                    ref={checkRefs[2]}
                  />
                  勅令
                </label>
                <label className='flex items-center gap-2 text-std-16N-170'>
                  <Checkbox
                    size='sm'
                    name='law-type'
                    value='ministerial-order'
                    ref={checkRefs[3]}
                  />
                  府省令
                </label>
                <label className='flex items-center gap-2 text-std-16N-170'>
                  <Checkbox
                    size='sm'
                    name='law-type'
                    value='regulation'
                    defaultChecked
                    ref={checkRefs[4]}
                  />
                  規則
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className='mb-2 text-std-16B-170'>並び順</legend>
              <div className='flex flex-wrap gap-4'>
                <label className='flex items-center gap-2 text-std-16N-170'>
                  <Radio size='sm' name='sort-order' value='relevance' defaultChecked />
                  関連度順
                </label>
                <label className='flex items-center gap-2 text-std-16N-170'>
                  <Radio size='sm' name='sort-order' value='updated' />
                  更新日時順
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className='mb-2 text-std-16B-170'>表示件数</legend>
              <div className='flex flex-wrap gap-4'>
                <label className='flex items-center gap-2 text-std-16N-170'>
                  <Radio size='sm' name='display-count' value='10' defaultChecked />
                  10件
                </label>
                <label className='flex items-center gap-2 text-std-16N-170'>
                  <Radio size='sm' name='display-count' value='50' />
                  50件
                </label>
                <label className='flex items-center gap-2 text-std-16N-170'>
                  <Radio size='sm' name='display-count' value='100' />
                  100件
                </label>
              </div>
            </fieldset>
          </div>

          <SearchBoxDetailActions>
            <Button
              variant='solid-fill'
              size='lg'
              type='submit'
              className='w-full md:w-fit md:min-w-[50%]'
            >
              <svg
                aria-hidden={true}
                className='mr-2 inline-block'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path
                  d='m21 20.5-6-6a7.4 7.4 0 0 0 1.9-5A7.4 7.4 0 0 0 9.5 2 7.5 7.5 0 1 0 14 15.5l6 6 1-1ZM3.5 9.5a6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6Z'
                  fill='currentColor'
                />
              </svg>
              検索
            </Button>
            <Button variant='text' size='sm' type='reset'>
              検索条件をクリア
            </Button>
          </SearchBoxDetailActions>
        </SearchBoxDetail>

        <SearchBoxSubmit size='lg' type='submit'>
          検索
        </SearchBoxSubmit>
      </SearchBox>
    );
  },
  argTypes: {
    size: { table: { disable: true } },
  },
};
