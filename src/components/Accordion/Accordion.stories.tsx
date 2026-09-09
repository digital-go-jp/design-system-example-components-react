import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
  Unstyled,
} from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '../Link';
import { Accordion, AccordionBackLink, AccordionContent, AccordionSummary } from './Accordion';

const meta = {
  id: 'Component/DADS v2/Accordion',
  title: 'Component/アコーディオン',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />

          <Unstyled>
            <div className='prose'>
              <h2>コンポーネントのガイドライン</h2>
              <p>
                <Link
                  href='https://design.digital.go.jp/dads/components/accordion/'
                  target='_blank'
                >
                  アコーディオン（概要）｜デジタル庁デザインシステムβ版
                </Link>
              </p>
            </div>
          </Unstyled>
        </>
      ),
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className='flex flex-col'>
        <Accordion className='text-std-16N-170'>
          <AccordionSummary className='desktop:text-std-18N-160' id='accordion-example-summary-1'>
            <h3>ダミーテキストとは何ですか？</h3>
          </AccordionSummary>
          <AccordionContent>
            <p className='mb-4'>これはダミーテキストです。</p>
            <p>
              ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
            </p>
            <AccordionBackLink
              className='mt-4 [text-spacing-trim:trim-start]'
              href='#accordion-example-summary-1'
            >
              「ダミーテキストとは何ですか？」の先頭に戻る
            </AccordionBackLink>
          </AccordionContent>
        </Accordion>

        <Accordion className='text-std-16N-170'>
          <AccordionSummary className='desktop:text-std-18N-160' id='accordion-example-summary-2'>
            <h3>
              ダミーテキストがデザインやレイアウトに使用されていることがよくありますが、どのような目的や意味で使用されているのでしょうか？
            </h3>
          </AccordionSummary>
          <AccordionContent>
            これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
            <AccordionBackLink
              className='mt-4 [text-spacing-trim:trim-start]'
              href='#accordion-example-summary-2'
            >
              「ダミーテキストがデザインやレイアウトに使用されていることがよくありますが、どのような目的や意味で使用されているのでしょうか？」の先頭に戻る
            </AccordionBackLink>
          </AccordionContent>
        </Accordion>

        <Accordion className='text-std-16N-170'>
          <AccordionSummary className='desktop:text-std-18N-160' id='accordion-example-summary-3'>
            <h3>ダミーテキストはどのような場合に使用されますか？</h3>
          </AccordionSummary>
          <AccordionContent>
            <p className='mb-4'>これはダミーテキストです。</p>
            <p className='mb-4'>
              ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。
            </p>
            <p>
              ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
            </p>
            <AccordionBackLink
              className='mt-4 [text-spacing-trim:trim-start]'
              href='#accordion-example-summary-3'
            >
              「ダミーテキストはどのような場合に使用されますか？」の先頭に戻る
            </AccordionBackLink>
          </AccordionContent>
        </Accordion>
      </div>
    );
  },
};
