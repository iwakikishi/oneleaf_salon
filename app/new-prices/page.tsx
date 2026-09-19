import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/section-title';
import { PriceAccordion } from '@/components/PriceAccordion';
import { newServices } from '@/lib/prices';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Updated Prices (Effective November 1, 2026) | OneLeaf Salon',
  description: 'Updated service prices at OneLeaf Salon in Sierra Madre, CA, effective for all appointments on or after November 1, 2026.',
};

export default function page() {
  return (
    <main className='flex flex-col w-full h-full bg-white pb-24'>
      <section className='flex flex-col gap-5 px-2 mt-24 md:px-12 lg:px-48'>
        <SectionTitle>Updated Prices</SectionTitle>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-2 bg-[#f0f9ff] p-4 text-sm rounded-xl'>
            <p>
              <span className='font-semibold'>Effective Date:</span> The prices below apply to all appointments taking place on or after November
              1, 2026.
            </p>
            <p>
              For appointments before that date, please see our{' '}
              <Link href='/services' className='font-semibold text-green-900 underline underline-offset-2'>
                current price list
              </Link>
              .
            </p>
          </div>
          <PriceAccordion services={newServices} showNotice={false} />
          <Button asChild className='p-8 bg-lime-700/30 text-lime-700 text-xl font-poppins hover:bg-lime-700/50'>
            <Link href='https://oneleafsalon.setmore.com/oneleaf' target='_blank'>
              Book an appointment
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
