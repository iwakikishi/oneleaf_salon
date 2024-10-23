import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SectionTitle } from '@/components/section-title';
import { PriceAccordion } from '@/components/PriceAccordion';
import { ServicesCardComponent } from '@/components/services-card';

export default function page() {
  return (
    <main className='flex flex-col w-full h-full bg-white pb-24'>
      <section className='flex flex-col gap-5 px-2 mt-24 md:px-12 lg:px-48'>
        <SectionTitle>Services</SectionTitle>
        <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2'>
          <ServicesCardComponent />
        </div>
      </section>
      <section className='flex flex-col gap-5 px-2 mt-24 md:px-12 lg:px-48'>
        <div className='flex flex-col bg-[#fffaeb] p-8 pb-10 rounded-xl gap-8'>
          <div className='flex flex-row items-start'>
            <Image src='/images/head_spa.png' alt='leaf' width={80} height={80} className='object-contain rounded-lg' />
            <Image src='/images/special.png' alt='special' width={80} height={80} className='object-contain ml-2' />
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-green-900 text-3xl font-poppins font-bold'>ZEN Head Spa</h1>
            <p className='text-green-900 text-base sm:text-sm md:text-md lg:text-lg font-poppins'>Something about head spa</p>
            <div className='flex flex-col aspect-video rounded-xl overflow-hidden'>
              <video autoPlay muted loop playsInline className='w-full h-full rounded-xl object-cover xs:object-contain mt-4'>
                <source src='/videos/head_spa_section.mp4' type='video/mp4' />
              </video>
            </div>
            <p className='text-green-900 text-base sm:text-sm md:text-md lg:text-lg font-poppins'>
              Counseling with Microscope * 40, 60min course only* Scalp Cleansing with Jojoba oil with Micro Mist Treatment Head and Neck massage
              Scalp Shampoo & Carbonated Treatment
            </p>
          </div>
        </div>
      </section>
      <section className='flex flex-col gap-5 px-2 mt-24 md:px-12 lg:px-48'>
        <SectionTitle>Prices</SectionTitle>
        <div className='flex flex-col gap-8'>
          <PriceAccordion />
          <Button asChild className='p-8 bg-lime-700/30 text-lime-700 text-xl font-poppins hover:bg-lime-700/50'>
            <Link href='https://oneleafsalon.setmore.com/' target='_blank'>
              Book an appointment
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
