import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className='flex items-center gap-2 mb-6'>
    <div className='w-[40px] h-[40px] flex-shrink-0'>
      <Image src='/images/leaf2.png' alt='leaf' width={40} height={40} />
    </div>
    <h2 className='text-green-900 font-montserrat font-semibold text-2xl md:text-3xl'>{children}</h2>
  </div>
);

const PolicyItem = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className='mb-6'>
    <h3 className='text-green-800 font-semibold font-poppins text-lg mb-2'>{title}</h3>
    <div className='text-green-700 font-poppins text-base'>{children}</div>
  </div>
);

export default function Page() {
  return (
    <main className='flex flex-col w-full h-full bg-white mt-8'>
      <div className='max-w-4xl mx-auto px-4 py-12 md:py-24'>
        <div className='bg-gradient-to-br from-[#fffaeb] to-[#f0f9ff] p-8 md:p-12 rounded-2xl shadow-lg'>
          <SectionTitle>Cancellation Policy</SectionTitle>
          <p className='text-green-900 text-sm sm:text-lg md:text-lg lg:text-xl font-poppins'>
            We are grateful that you have chosen OneLeaf Salon and look forward to your visit. To provide the best experience for all our clients, we
            kindly request that you review the following policies:
          </p>
          <div className='mt-6'>
            <PolicyItem title='Punctuality:'>
              <p>
                Please be aware that if you are more than 10 minutes late, we may not be able to provide your scheduled service. Additionally, in such
                cases, a cancellation fee of 50% of the service cost may apply.
              </p>
              {/* <ul className='list-disc list-inside mt-2 space-y-1'>
              <li>Less than 24 hours notice: 50% of the reserved service amount</li>
              <li>No-shows: 100% of the reserved service amount</li>
            </ul> */}
            </PolicyItem>

            <PolicyItem title='No Show:'>
              <p>
                If you do not show up for your appointment without notifying us, a no-show fee equivalent to 100% of the service fee will be charged.
                Additionally, we regret to inform you that we may not be able to accept any future appointments.{' '}
              </p>
              <p className='mt-8'>
                We kindly request that you strictly cancel your appointment at least 24 hours in advance. Unfortunately, we are unable to accommodate
                cancellations made after 24 hours. In such cases, a fee equivalent to 100% of the service cost will be charged.
              </p>
            </PolicyItem>
          </div>

          <div className='mt-8 text-center'>
            <Button asChild className='bg-green-700 text-white hover:bg-green-600 transition-colors px-8 py-3 rounded-full text-lg'>
              <Link href='https://oneleafsalon.setmore.com/' target='_blank'>
                Book Now
              </Link>
            </Button>
          </div>

          <p className='text-green-900 font-semibold font-poppins text-center mt-8'>Thank you for your understanding and cooperation.</p>
          <p className='text-green-700 font-poppins text-center mt-2'>- OneLeaf Salon Team</p>
        </div>
      </div>
    </main>
  );
}
