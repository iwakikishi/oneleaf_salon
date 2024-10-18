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
    <h3 className='text-green-800 font-semibold text-lg mb-2'>{title}</h3>
    <div className='text-green-700 text-base'>{children}</div>
  </div>
);

export default function Page() {
  return (
    <main className='flex flex-col w-full h-full bg-white mt-8'>
      <div className='max-w-4xl mx-auto px-4 py-12 md:py-24'>
        <div className='bg-gradient-to-br from-[#fffaeb] to-[#f0f9ff] p-8 md:p-12 rounded-2xl shadow-lg'>
          <SectionTitle>Cancellation Policy</SectionTitle>

          <PolicyItem title='24-Hour Notice'>
            <p>We kindly request at least 24 hours notice for cancellations or rescheduling. Failure to do so may result in the following fees:</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              <li>Less than 24 hours notice: 50% of the reserved service amount</li>
              <li>No-shows: 100% of the reserved service amount</li>
            </ul>
          </PolicyItem>

          <PolicyItem title='Late Arrivals'>
            <p>
              If you arrive more than 10 minutes late, we may not be able to offer services and a 50% charge of your total service cost will apply.
            </p>
          </PolicyItem>

          {/* <PolicyItem title='$100 Deposits Required'>
            <p>The following services require a $100 deposit:</p>
            <ul className='grid grid-cols-2 gap-2 mt-2'>
              {['Highlight', 'Ombré', 'Balayage', 'Bleach and Toner', 'Japanese Straightening', 'Color Corrections', 'Digital perm'].map((item) => (
                <li key={item} className='bg-white/50 px-3 py-1 rounded-full text-sm'>
                  {item}
                </li>
              ))}
            </ul>
            <p className='mt-4 text-sm'>Deposits are applied to your service bill. Full refund for cancellations with 24-hour notice.</p>
          </PolicyItem> */}

          {/* <PolicyItem title='Booking Information'>
            <p>Please book appointments one at a time. Ensure you pay the deposit fee during checkout to confirm your appointment.</p>
          </PolicyItem> */}

          <div className='mt-8 text-center'>
            <Button asChild className='bg-green-700 text-white hover:bg-green-600 transition-colors px-8 py-3 rounded-full text-lg'>
              <Link href='https://kazuyoroyaltysalon.setmore.com/' target='_blank'>
                Book Now
              </Link>
            </Button>
          </div>

          <p className='text-green-900 font-semibold text-center mt-8'>Thank you for your understanding and cooperation.</p>
          <p className='text-green-700 text-center mt-2'>- OneLeaf Salon Team</p>
        </div>
      </div>
    </main>
  );
}
