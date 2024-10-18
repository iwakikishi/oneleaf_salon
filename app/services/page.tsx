import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PriceAccordion } from '@/components/PriceAccordion';

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className='flex items-center gap-2'>
    <div className='w-[50px] h-[50px] flex-shrink-0'>
      <Image src='/images/leaf2.png' alt='leaf' width={50} height={50} />
    </div>
    <h2 className='text-green-900 font-montserrat font-semibold text-[calc(16px+1.5vw)]'>{children}</h2>
  </div>
);

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className='flex flex-col aspect-[4/3] mt-2 bg-[#fffaeb] p-8 gap-6'>
    <Image src={`/images/icons/${icon}.png`} alt={title} className='object-contain' width={100} height={100} />
    <p className='text-green-900 text-2xl font-bold mt-4 font-poppins'>{title}</p>
    <p className='text-gray-500 text-lg break-words font-poppins'>{description}</p>
  </div>
);

export default function page() {
  return (
    <main className='flex flex-col w-full h-full bg-white pb-24'>
      <section className='flex flex-col gap-8 px-2 mt-24 md:px-12 lg:px-48'>
        <SectionTitle>Services</SectionTitle>
        <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2'>
          <ServiceCard icon='hair_cut_2' title='Cut & Style' description='Haircuts not included with color services. Shampoo and styling included' />
          <ServiceCard icon='hair_color' title='Color & Bleach' description='カラー剤とかの説明' />
          <ServiceCard icon='hair_perm' title='Texture' description='何か特徴' />
          <ServiceCard icon='makeup' title='Makeup' description='何か特徴' />
        </div>
      </section>
      <section className='flex flex-col gap-8 px-2 mt-24 md:px-12 lg:px-48'>
        <div className='flex flex-col bg-[#fffaeb] p-8 pb-10 rounded-xl gap-8'>
          <div className='flex flex-row items-start'>
            <Image src='/images/icons/head_spa.png' alt='leaf' width={120} height={120} />
            <Image src='/images/special.png' alt='special' width={80} height={80} className='object-contain -ml-2' />
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-green-900 text-3xl font-poppins font-bold'>ZEN Head Spa</h1>
            <p className='text-green-900 text-base sm:text-sm md:text-md lg:text-lg font-poppins'>Something about head spa</p>
            <div className='flex flex-col aspect-video rounded-xl overflow-hidden'>
              <video
                src='/videos/head_spa_section.mp4'
                loop
                autoPlay
                muted
                className='w-full h-full rounded-xl object-cover xs:object-contain mt-4'
              />
            </div>
            <p className='text-green-900 text-base sm:text-sm md:text-md lg:text-lg font-poppins'>
              Counseling with Microscope * 40, 60min course only* Scalp Cleansing with Jojoba oil with Micro Mist Treatment Head and Neck massage
              Scalp Shampoo & Carbonated Treatment
            </p>
          </div>
        </div>
      </section>
      <section className='flex flex-col gap-8 px-2 mt-24 md:px-12 lg:px-48'>
        <SectionTitle>Prices</SectionTitle>
        <div className='flex flex-col gap-8'>
          <PriceAccordion />
          <Button asChild className='p-8 bg-lime-700/30 text-lime-700 text-xl font-poppins hover:bg-lime-700/50'>
            <Link href='https://kazuyoroyaltysalon.setmore.com/' target='_blank'>
              Book an appointment
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
