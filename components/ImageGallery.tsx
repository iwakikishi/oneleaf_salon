import React from 'react';
import Image from 'next/image';

const goodsData = [
  {
    id: 1,
    title: 'Exterior',
    image: '/images/store/exterior.png',
  },
  {
    id: 2,
    title: 'Haircut',
    image: '/images/store/display.png',
  },
  {
    id: 3,
    title: 'Haircut',
    image: '/images/store/chair.png',
  },
  {
    id: 4,
    title: 'Haircut',
    image: '/images/store/mirror.png',
  },
];

export default function ImageGallery() {
  return (
    <div className='flex flex-col items-center justify-center mt-5'>
      <div className='w-full justify-between grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2'>
        {goodsData.map((good) => (
          <div key={good.id} className='w-full h-full'>
            <Image src={good.image} alt={good.title} 
                objectFit="contain" width={300} height={300} />
          </div>
        ))}
      </div>
      
    </div>
  );
}
