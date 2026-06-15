import { Divider } from '../';

export const Typography = () => {
  return (
    <div className='prose'>
      <h1>タイポグラフィ</h1>
      <p>デジタル庁デザインシステムで定義されているテキストスタイルの一覧です。</p>
      <h2>Display (Dsp)</h2>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-std-22B-150 my-4'>Bold</h3>
          <p className='text-dsp-64B-140'>dsp-64B-140 デザインシステム</p>
          <p className='text-dsp-57B-140'>dsp-57B-140 デザインシステム</p>
          <p className='text-dsp-48B-140'>dsp-48B-140 デザインシステム</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-std-22B-150 my-4'>Normal</h3>
          <p className='text-dsp-64N-140'>dsp-64N-140 デザインシステム</p>
          <p className='text-dsp-57N-140'>dsp-57N-140 デザインシステム</p>
          <p className='text-dsp-48N-140'>dsp-48N-140 デザインシステム</p>
        </div>
      </div>

      <Divider />

      <h2>Standard (Std) </h2>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-std-22B-150 my-4'>Bold</h3>
          <p className='text-std-45B-140'>std-45B-140 デザインシステム</p>
          <p className='text-std-36B-140'>std-36B-140 デザインシステム</p>
          <p className='text-std-32B-150'>std-32B-150 デザインシステム</p>
          <p className='text-std-28B-150'>std-28B-150 デザインシステム</p>
          <p className='text-std-24B-150'>std-24B-150 デザインシステム</p>
          <p className='text-std-22B-150'>std-22B-150 デザインシステム</p>
          <p className='text-std-20B-160'>std-20B-160 デザインシステム</p>
          <p className='text-std-18B-160'>std-18B-160 デザインシステム</p>
          <p className='text-std-17B-170'>std-17B-170 デザインシステム</p>
          <p className='text-std-16B-170'>std-16B-170 デザインシステム</p>
          <p className='text-std-16B-175'>std-16B-175 デザインシステム</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-std-22B-150 my-4'>Normal</h3>
          <p className='text-std-45N-140'>std-45N-140 デザインシステム</p>
          <p className='text-std-36N-140'>std-36N-140 デザインシステム</p>
          <p className='text-std-32N-150'>std-32N-150 デザインシステム</p>
          <p className='text-std-28N-150'>std-28N-150 デザインシステム</p>
          <p className='text-std-26N-150'>std-26N-150 デザインシステム</p>
          <p className='text-std-24N-150'>std-24N-150 デザインシステム</p>
          <p className='text-std-22N-150'>std-22N-150 デザインシステム</p>
          <p className='text-std-20N-150'>std-20N-150 デザインシステム</p>
          <p className='text-std-18N-160'>std-18N-160 デザインシステム</p>
          <p className='text-std-17N-170'>std-17N-170 デザインシステム</p>
          <p className='text-std-16N-170'>std-16N-170 デザインシステム</p>
          <p className='text-std-16N-175'>std-16N-175 デザインシステム</p>
        </div>
      </div>

      <Divider />

      <h2>Dense (Dns) </h2>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-std-22B-150 my-4'>Bold</h3>
          <p className='text-dns-17B-130'>dns-17B-130 デザインシステム</p>
          <p className='text-dns-17B-120'>dns-17B-120 デザインシステム</p>
          <p className='text-dns-16B-130'>dns-16B-130 デザインシステム</p>
          <p className='text-dns-16B-120'>dns-16B-120 デザインシステム</p>
          <p className='text-dns-14B-130'>dns-14B-130 デザインシステム</p>
          <p className='text-dns-14B-120'>dns-14B-120 デザインシステム</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-std-22B-150 my-4'>Normal</h3>
          <p className='text-dns-17N-130'>dns-17N-130 デザインシステム</p>
          <p className='text-dns-17N-120'>dns-17N-120 デザインシステム</p>
          <p className='text-dns-16N-130'>dns-16N-130 デザインシステム</p>
          <p className='text-dns-16N-120'>dns-16N-120 デザインシステム</p>
          <p className='text-dns-14N-130'>dns-14N-130 デザインシステム</p>
          <p className='text-dns-14N-120'>dns-14N-120 デザインシステム</p>
        </div>
      </div>

      <Divider />

      <h2>Oneline (Oln) </h2>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-std-22B-150 my-4'>Bold</h3>
          <p className='text-oln-17B-100'>oln-17B-100 デザインシステム</p>
          <p className='text-oln-16B-100'>oln-16B-100 デザインシステム</p>
          <p className='text-oln-14B-100'>oln-14B-100 デザインシステム</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-std-22B-150 my-4'>Normal</h3>
          <p className='text-oln-17N-100'>oln-17N-100 デザインシステム</p>
          <p className='text-oln-16N-100'>oln-16N-100 デザインシステム</p>
          <p className='text-oln-14N-100'>oln-14N-100 デザインシステム</p>
        </div>
      </div>

      <Divider />

      <h2>Mono (Mono) </h2>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-std-22B-150 my-4'>Bold</h3>
          <p className='font-mono text-mono-17B-150'>
            mono-17B-150 &lt;meta charset=&quot;UTF-8&quot;&gt;
          </p>
          <p className='font-mono text-mono-16B-150'>
            mono-16B-105 &lt;meta charset=&quot;UTF-8&quot;&gt;
          </p>
          <p className='font-mono text-mono-14B-150'>
            mono-14B-150 &lt;meta charset=&quot;UTF-8&quot;&gt;
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-std-22B-150 my-4'>Normal</h3>
          <p className='font-mono text-mono-17N-150'>
            mono-17N-150 &lt;meta charset=&quot;UTF-8&quot;&gt;
          </p>
          <p className='font-mono text-mono-16N-150'>
            mono-16N-150 &lt;meta charset=&quot;UTF-8&quot;&gt;
          </p>
          <p className='font-mono text-mono-14N-150'>
            mono-14N-150 &lt;meta charset=&quot;UTF-8&quot;&gt;
          </p>
        </div>
      </div>
    </div>
  );
};
