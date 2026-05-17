import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retail Products | OneLeaf Salon',
  description: 'Browse professional hair care products available at OneLeaf Salon in Sierra Madre, CA.',
};

export default function page() {
  return (
    <main className='flex flex-col w-full h-full bg-white'>
      <section className='flex mt-8 md:mt-36 lg:mt-36'>
        <React.Suspense fallback={<div>Loading...</div>}></React.Suspense>
      </section>
    </main>
  );
}
