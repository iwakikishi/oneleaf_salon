import React from 'react';
import Image from 'next/image';

export default function page() {
  return (
    <main className='flex flex-col w-full h-full bg-white'>
      <section className='flex flex-col w-full font-poppins mt-8 md:mt-28 lg:mt-36 px-8 md:px-12 lg:px-48'>
        <h1 className='text-black font-semibold text-[calc(16px+1.5vw)]'>Services</h1>
        <div className='flex flex-col sm:mt-4 md:mt-8 lg:mt-12 sm:flex-row gap-4'>
          <div className='p-6'>
            <Image src='/images/services/cut.webp' alt='cut' layout='responsive' width={1000} height={1000} />
            <p className='text-black p-4 text-center text-3xl font-bold'>Cut</p>
          </div>
          <div className='p-6'>
            <Image src='/images/services/makeup.webp' alt='makeup' layout='responsive' width={1000} height={1000} />
            <p className='text-black p-4 text-center text-3xl font-bold'>Makeup</p>
          </div>
          <div className='p-6'>
            <Image src='/images/services/perm.webp' alt='perm' layout='responsive' width={1000} height={1000} />
            <p className='text-black p-4 text-center text-3xl font-bold'>Perm</p>
          </div>
        </div>
      </section>
    </main>
  );
}
