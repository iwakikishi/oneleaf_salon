'use client';

export default function Contact() {
  return (
    <div className='flex flex-col items-center gap-4 md:gap-6 text-center max-w-xl mx-auto py-4'>
      <p className='text-base text-muted-foreground'>
        Please email us with your name, preferred appointment date, and desired services. We&apos;ll reply as soon as possible.
      </p>
      <a
        className='inline-flex items-center justify-center rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none hover:bg-purple-600'
        href='mailto:oneLeaf.inc23@gmail.com'>
        Email oneLeaf.inc23@gmail.com
      </a>
    </div>
  );
}
