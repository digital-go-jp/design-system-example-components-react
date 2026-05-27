import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Link } from '../Link';
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  Breadcrumbs,
  BreadcrumbsLabel,
} from './Breadcrumbs';

const meta = {
  id: 'Component/DADS v2/Breadcrumbs',
  title: 'Component/パンくずリスト',
  component: Breadcrumbs,
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    const breadcrumbsId = React.useId();
    return (
      <Breadcrumbs aria-labelledby={`${breadcrumbsId}-label`}>
        <BreadcrumbsLabel className='sr-only' id={`${breadcrumbsId}-label`}>
          現在位置
        </BreadcrumbsLabel>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' key='home'>
              ホーム
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' key='organization'>
              組織情報
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' key='a'>
              長いページタイトルが入ります長いページタイトルが入ります
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' key='b'>
              長いページタイトルが入ります長いページタイトルが入ります
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrent>
            長いページタイトルが入ります長いページタイトルが入ります
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>
    );
  },
};

export const WithHomeIcon: Story = {
  render: () => {
    const breadcrumbsId = React.useId();
    return (
      <Breadcrumbs aria-labelledby={`${breadcrumbsId}-label`}>
        <BreadcrumbsLabel className='sr-only' id={`${breadcrumbsId}-label`}>
          現在位置
        </BreadcrumbsLabel>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className='inline-flex items-center gap-1' href='#' key='home'>
              <svg aria-hidden={true} fill='none' height='16' viewBox='0 0 16 16' width='16'>
                <g>
                  <path
                    d='M3 13.6666V6.16667L7.99998 2.40387L13 6.16667V13.6666H9.26922V9.2051H6.73075V13.6666H3Z'
                    fill='currentColor'
                  />
                </g>
              </svg>
              ホーム
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' key='organization'>
              組織情報
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' key='a'>
              長いページタイトルが入ります長いページタイトルが入ります
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' key='b'>
              長いページタイトルが入ります長いページタイトルが入ります
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrent>
            長いページタイトルが入ります長いページタイトルが入ります
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>
    );
  },
};

export const WithVisibleLabel: Story = {
  render: () => {
    const breadcrumbsId = React.useId();
    return (
      <Breadcrumbs className='flex gap-1 items-baseline' aria-labelledby={`${breadcrumbsId}-label`}>
        <div className='flex-none'>
          <BreadcrumbsLabel className='text-dns-16N-120' id={`${breadcrumbsId}-label`}>
            現在位置
          </BreadcrumbsLabel>
          <span className='text-dns-16N-120'>：</span>
        </div>

        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' key='home'>
              ホーム
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' key='organization'>
              組織情報
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' key='a'>
              長いページタイトルが入ります長いページタイトルが入ります
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' key='b'>
              長いページタイトルが入ります長いページタイトルが入ります
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrent>
            長いページタイトルが入ります長いページタイトルが入ります
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>
    );
  },
};

export const WithSlot: Story = {
  render: () => {
    const breadcrumbsId = React.useId();
    return (
      <Breadcrumbs aria-labelledby={`${breadcrumbsId}-label`}>
        <BreadcrumbsLabel className='sr-only' id={`${breadcrumbsId}-label`}>
          現在位置
        </BreadcrumbsLabel>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild key='home'>
              <Link href='#'>Slotを使ったホーム</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink asChild key='organization'>
              <Link href='#'>Slotを使った組織情報</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink asChild key='a'>
              <Link href='#'>
                Slotを使った長いページタイトルが入りますSlotを使った長いページタイトルが入ります
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink asChild key='b'>
              <Link href='#'>
                Slotを使った長いページタイトルが入りますSlotを使った長いページタイトルが入ります
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrent>
            長いページタイトルが入ります長いページタイトルが入ります
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumbs>
    );
  },
};
