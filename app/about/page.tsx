import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SectionTitle } from '@/components/section-title';

export default function AboutPage() {
  return (
    <main className='flex flex-col w-full h-full bg-white pb-24'>
      <section className='flex flex-col gap-8 px-4 mt-24 md:px-12 lg:px-48'>
        <SectionTitle>About OneLeaf Salon</SectionTitle>
        <div className='flex flex-col md:flex-row gap-8 items-center md:bg-[#fffaeb]'>
          <div className='w-full md:w-2/3'>
            <Image
              src='/images/store/exterior.png'
              alt='exterior'
              width={500}
              height={500}
              className='rounded-lg md:rounded-none object-cover aspect-3/4'
            />
          </div>
          <div className='w-full p-2'>
            <p className='text-green-900 text-md font-poppins mb-4'>
              Welcome to OneLeaf Salon, where the art of Japanese hospitality meets expert hairstyling. I&apos;m Kazuyo, the owner and lead stylist,
              bringing over 20 years of experience from Tokyo&apos;s leading salons to Sierra Madre.
            </p>
            <p className='text-green-900 text-lg font-poppins mb-4'>
              At OneLeaf, we don&apos;t just style hair; we create experiences. Our salon is a blend of technical expertise and the warm, attentive
              service that is the hallmark of Japanese omotenashi (hospitality).
            </p>
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-8 px-4 mt-24 md:px-12 lg:px-48'>
        <SectionTitle>The Spirit of Omotenashi</SectionTitle>
        <div className='flex flex-col md:flex-row gap-8 items-center md:bg-[#fffaeb]'>
          <div className='w-full md:w-2/3'>
            <Image src='/images/omotenashi.jpg' alt='Omotenashi' width={500} height={500} className='rounded-lg md:rounded-none object-cover' />
          </div>
          <div className='w-full p-2'>
            <p className='text-green-900 text-md font-poppins mb-4'>
              Omotenashi is more than just service; it&apos;s a heartfelt approach to hospitality that anticipates and fulfills needs before
              they&apos;re expressed. At OneLeaf Salon, this philosophy is at the core of everything we do:
            </p>
            <ul className='list-disc list-inside text-green-900 text-md font-poppins mb-4'>
              <li>Personalized consultations to understand your unique style and needs</li>
              <li>Meticulous attention to detail in every cut, color, and treatment</li>
              <li>A serene, welcoming environment where you can relax and rejuvenate</li>
              <li>Continuous education to bring you the latest techniques and trends</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-8 px-4 mt-16 md:px-12 lg:px-48'>
        <SectionTitle>Our Commitment to You</SectionTitle>
        <p className='text-green-900 text-md font-poppins mb-4'>
          At OneLeaf Salon, we believe that true beauty comes from within. Our goal is not just to style your hair, but to enhance your natural beauty
          and boost your confidence. We take the time to listen, understand, and create a look that&apos;s uniquely you.
        </p>
        <p className='text-green-900 text-md font-poppins mb-4'>
          Whether you&apos;re here for a simple trim or a complete transformation, you&apos;ll experience the same level of dedicated, personalized
          care that defines Japanese hospitality.
        </p>
      </section>

      <section className='flex flex-col gap-8 px-4 mt-16 md:px-12 lg:px-48'>
        <SectionTitle>Experience OneLeaf</SectionTitle>
        <p className='text-green-900 text-md font-poppins mb-4'>
          We invite you to experience the OneLeaf difference. From the moment you step through our doors, you&apos;ll be embraced by the warmth of
          omotenashi and the expertise of our skilled stylists.
        </p>
        <div className='flex justify-center'>
          <Button asChild className='p-6 bg-lime-700/30 text-lime-700 text-lg font-poppins hover:bg-lime-700/50'>
            <Link href='https://oneleafsalon.setmore.com/' target='_blank'>
              Book Your Experience
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
