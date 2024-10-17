'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

const appId = process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID as string;
const redirectUri = process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI;

export default function TopInstagram() {
  // useEffect(() => {
  //   fetch(`https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`)
  //     .then(response => {
  //       response.json();
  //       console.log(response)
  //     })
  //     .then(data => console.log(data))
  // }, [])

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
