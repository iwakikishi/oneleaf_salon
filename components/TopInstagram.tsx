'use client';

import React from 'react';
import Image from 'next/image';

export default function TopInstagram() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-full justify-between grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-1'>
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className='w-full h-full'>
            <Image src={`/images/instagram/${index + 1}.jpg`} alt={`Instagram ${index + 1}`} width={300} height={300} />
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-4'>
        <button className='bg-black text-white font-bold py-2 px-4 rounded-md'>View All</button>
      </div>
    </div>
  );
}
