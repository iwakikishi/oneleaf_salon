import React from 'react';

export default function page() {
  return (
    <main className='flex flex-col w-full h-full bg-white'>
      <section className='flex mt-8 md:mt-36 lg:mt-36'>
        <React.Suspense fallback={<div>Loading...</div>}></React.Suspense>
      </section>
    </main>
  );
}
