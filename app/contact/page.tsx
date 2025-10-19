'use client';

import ContactSection from '@/components/contact';

export default function Contact() {
  return (
    <main className='flex flex-col h-full pt-16 bg-white'>
      <section className='flex flex-col items-center text-center font-poppins mt-8 md:mt-28 lg:mt-36 px-6 md:px-12 lg:px-48 gap-4 md:gap-6'>
        <h1 className='text-black font-semibold text-[calc(16px+1.5vw)]'>Contact</h1>
        <ContactSection />
      </section>
    </main>
  );
}
