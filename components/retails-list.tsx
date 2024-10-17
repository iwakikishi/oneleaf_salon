'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const goodsData = [
  {
    id: 1,
    title: 'Haircut',
    image: 'https://placehold.jp/3d4070/ffffff/300x300.png',
  },
  {
    id: 2,
    title: 'Haircut',
    image: 'https://placehold.jp/3d4070/ffffff/300x300.png',
  },
  {
    id: 3,
    title: 'Haircut',
    image: 'https://placehold.jp/3d4070/ffffff/300x300.png',
  },
  {
    id: 4,
    title: 'Haircut',
    image: 'https://placehold.jp/3d4070/ffffff/300x300.png',
  },
];

export default function TopGoods() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-full justify-between grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-1'>
        {goodsData.map((good) => (
          <div key={good.id} className='w-full h-full'>
            <Image src={good.image} alt={good.title} width={300} height={300} />
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-4'>
        <Link href='/retail'>
          <Button className='bg-black text-white font-bold py-2 px-4 rounded-md'>View All</Button>
        </Link>
      </div>
    </div>
  );
}
