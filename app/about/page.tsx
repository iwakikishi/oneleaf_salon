import React from 'react';
import Image from 'next/image';

export default function page() {
  return (
    <main className='flex flex-col h-full pt-16 bg-white'>
      <section className='flex justify-center items-center mt-8 md:mt-36 lg:mt-36'>
        <div className='grid grid-cols-2 gap-0 space-y-5'>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className='w-full h-auto'>
              <Image src={`/images/booklet/${index + 1}.png`} alt='Booklet' layout='responsive' width={1000} height={1000} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
