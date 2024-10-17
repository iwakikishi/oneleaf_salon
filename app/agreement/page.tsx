import React from 'react';
import Image from 'next/image';
import { CheckboxForm } from './components/CheckboxForm';

export default function page() {
  const today = new Date();
  const date = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <main className='flex flex-col font-poppins bg-scroll xs:px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32'>
      <section className='flex flex-col w-full sm:mt-8 md:mt-36 lg:mt-36'>
        <div className='flex flex-row items-center h-[50px]'>
          <div className='bg-gray-200 w-[50px] h-[50px] mr-7'>
            <Image src='/images/header/logo.webp' alt='head_spa' width={50} height={50} />
          </div>
          <div className='flex flex-col items-center'>
            <div className='text-black text-3xl font-bold'>Head Spa Agreement Form</div>
          </div>
        </div>
      </section>
      <section className='flex flex-col w-full mt-10'>
        <div className='flex flex-col'>
          <p className='text-black text-lg mb-4'>
            I acknowledge that I have been informed of the daily maintenance for hair extensions and have been told how to properly take care of them
            and my natural hair. I understand that the extensions are more sensitive than my intact human hair. I agree to properly brush and take
            care of my extensions and if I fail to do so or fail to make it back into the salon for regular upkeep, that I may see wear and tear on my
            natural hair in which case the salon and my stylist are not liable for.
          </p>
          <p className='text-black text-lg mb-4'>
            I agree to pay a 1 non-refundable deposit at the time of booking, and an additional 2 due at the time of service. This means I agree to
            pay 3 as my overall total for my desired services. I acknowledge that my stylist and I have agreed on a specific color and method for my
            extensions and if that should change before the time of install, an additional deposit may be required. I understand that in the event I
            do need to reschedule my appointment I will give my stylist a 48-hour notice and my deposit will be transferred to a new appointment. If I
            fail to do so an additional deposit may be required. If I cancel my appointment entirely I understand I will not receive my deposit back.
            If I decide I do not want to keep my extensions in, I understand there will be a removal fee.
          </p>
          <p className='text-black text-lg mb-4'>My appointment is scheduled for MM/DD/YYY at ex. 9:00 am .</p>
          <p className='text-black text-lg mb-4'>Client First and Last Name</p>
          <p className='text-black text-lg mb-4'>
            Today&apos;s date is <span className='text-black text-lg mb-4'>{date}</span>
          </p>
        </div>
        <div className='flex items-center space-x-2 my-8'>
          <CheckboxForm />
        </div>
      </section>
    </main>
  );
}
