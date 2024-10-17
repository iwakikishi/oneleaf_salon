import React from 'react';
import Image from 'next/image';
import CarouselComponent from '@/components/carousel';
import Booklet from '@/components/booklet';
import ImageGallery from '@/components/ImageGallery';
import TopGoods from '@/components/retails-list';
import TopInstagram from '@/components/TopInstagram';
import TopReviews from '@/components/reviews';
import Contact from '@/components/contact';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Page() {
  return (
    // <main className='flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-16 lg:p-24 bg-scroll bg-[url("/washi_2.png")]'>
    <main className='flex flex-col items-center main-scrollbar-transparent'>
      {/* Introduction Images Section */}
      <section className='w-full -mt-16 aspect-video'>
        <CarouselComponent />
      </section>
      {/* Welcome Section */}
      <section className='flex flex-col w-full font-poppins bg-scroll bg-[url("/images/bg_intro.png")] shadow-2xl'>
        <div className='w-full py-24 px-4 md:px-12 lg:px-48' style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <div className='items-center'>
            <div className='flex flex-row items-center'>
              <div className='w-16 h-16 rounded-full bg-red-500 mr-2'></div>
              <h1 className='text-black text-[calc(12px+1.5vw)] ml-4'>
                Welcome to OneLeaf Salon
                <br />
                Hair by Kazuyo
              </h1>
            </div>
          </div>

          <p className='text-gray-500 text-[calc(12px+0.5vw)] mt-3 sm:mt-3 md:mt-4 lg:mt-8'>
            Kazuyo has been a Master Hairstylist in Japan with more than 20 years of experience working in Tokyo&apos;s leading hair salons. She bases
            each style on drawing out a person&apos;s inner beauty, creating balance with their structural features, and listening to the
            customers&apos; vision on who they want to become as their best selves. The experience will be relaxed and fun as we work together to find
            the beautiful energy you want to project into the world.
          </p>
          <h1 className='text-black text-[calc(16px+1.5vw)] ml-4 mt-10'>The Spirit of Omotenashi</h1>
          <h3 className='text-black text-[calc(16px+1.5vw)] ml-4 mt-10'>What is Omotenashi?</h3>
          <p className='text-gray-500 text-[calc(12px+0.5vw)] sm:mt-2 md:mt-4 lg:mt-8 '>
            Omotenashi, the Japanese concept of hospitality, goes beyond simply providing service. It embodies a deep-rooted cultural tradition of
            anticipating guests&apos; needs and exceeding their expectations with sincerity and genuine care. It&apos;s about creating an
            unforgettable experience where every detail is meticulously thought out to ensure comfort and satisfaction.
          </p>
        </div>
      </section>

      {/* Booklet Section */}
      <section className='flex w-full mt-8 md:mt-12 lg:mt-24 justify-center'>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Booklet />
        </React.Suspense>
      </section>
      {/* Image Gallery */}
      <section className='flex w-full mt-4 md:mt-12 lg:mt-24 justify-center px-4 md:px-12 lg:px-48'>
        <div className='flex flex-col w-full'>
          <h1 className='text-black font-semibold text-[calc(16px+1.5vw)]'>Image Gallery</h1>
          <ImageGallery />
        </div>
      </section>
      {/* Services Section */}
      <section className='flex flex-col w-full font-poppins mt-8 md:mt-28 lg:mt-36 px-8 md:px-12 lg:px-48'>
        <h1 className='text-black font-semibold text-[calc(16px+1.5vw)]'>Services</h1>
        <div className='flex flex-col sm:mt-4 md:mt-8 lg:mt-12 sm:flex-row gap-4'>
          <div className='p-6'>
            <Image src='/images/services/cut.webp' alt='cut' layout='responsive' width={1000} height={1000} />
            <p className='text-black p-4 text-center text-3xl font-bold'>Cut</p>
          </div>
          <div className='p-6'>
            <Image src='/images/services/makeup.webp' alt='makeup' layout='responsive' width={1000} height={1000} />
            <p className='text-black p-4 text-center text-3xl font-bold'>Makeup</p>
          </div>
          <div className='p-6'>
            <Image src='/images/services/perm.webp' alt='perm' layout='responsive' width={1000} height={1000} />
            <p className='text-black p-4 text-center text-3xl font-bold'>Perm</p>
          </div>
        </div>
      </section>

      {/* Head Spa Appointment */}
      <section className='flex flex-col w-full font-poppins sm:mt-8 md:mt-28 lg:mt-36 sm:px-8 md:px-12 lg:px-48'>
        <h1 className='text-black font-semibold text-[calc(16px+1.5vw)]'>Sunday Appointment Only Head Spa Menus</h1>

        <div
          className='w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4'
          style={{ gridTemplateColumns: 'auto 1fr' }}>
          <div className='bg-gray-200'>
            <Image src='/images/services/head_spa.webp' alt='head_spa' layout='responsive' width={500} height={300} />
          </div>
          <div className='text-gray-500 items-center'>
            <h1 className='text-black font-semibold text-[calc(16px+1.5vw)]'>Oily Improvement</h1>
            Craft engaging titles and subtitles for a head spa&apos;s &quot;Hair Condition Consulting&quot; section to enhance content appeal and
            clarity. Titles and subtitles guide readers through understanding and benefiting from personalized hair consulting, detailing the
            consultation process, tailored treatments, scalp health maintenance, advanced solutions, FAQ, and booking information.
          </div>
        </div>
        <div
          className='w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4'
          style={{ gridTemplateColumns: 'auto 1fr' }}>
          <div className='bg-gray-200'>
            <Image src='/images/services/head_spa.webp' alt='head_spa' layout='responsive' width={500} height={300} />
          </div>
          <div className='text-gray-500 items-center'>
            <h1 className='text-black font-semibold text-[calc(16px+1.5vw)]'>Dry Scalp</h1>
            Craft engaging titles and subtitles for a head spa&apos;s &quot;Hair Condition Consulting&quot; section to enhance content appeal and
            clarity. Titles and subtitles guide readers through understanding and benefiting from personalized hair consulting, detailing the
            consultation process, tailored treatments, scalp health maintenance, advanced solutions, FAQ, and booking information.
          </div>
        </div>
        <div
          className='w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4'
          style={{ gridTemplateColumns: 'auto 1fr' }}>
          <div className='bg-gray-200'>
            <Image src='/images/services/head_spa.webp' alt='head_spa' layout='responsive' width={500} height={300} />
          </div>
          <div className='text-gray-500 items-center'>
            <h1 className='text-black font-semibold text-[calc(16px+1.5vw)]'>Hair loss</h1>
            Craft engaging titles and subtitles for a head spa&apos;s &quot;Hair Condition Consulting&quot; section to enhance content appeal and
            clarity. Titles and subtitles guide readers through understanding and benefiting from personalized hair consulting, detailing the
            consultation process, tailored treatments, scalp health maintenance, advanced solutions, FAQ, and booking information.
          </div>
        </div>
        <div
          className='w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4'
          style={{ gridTemplateColumns: 'auto 1fr' }}>
          <div className='bg-gray-200'>
            <Image src='/images/services/head_spa.webp' alt='head_spa' layout='responsive' width={500} height={300} />
          </div>
          <div className='text-gray-500 items-center'>
            <h1 className='text-black font-semibold text-[calc(16px+1.5vw)]'>Stress relief</h1>
            Craft engaging titles and subtitles for a head spa&apos;s &quot;Hair Condition Consulting&quot; section to enhance content appeal and
            clarity. Titles and subtitles guide readers through understanding and benefiting from personalized hair consulting, detailing the
            consultation process, tailored treatments, scalp health maintenance, advanced solutions, FAQ, and booking information.
          </div>
        </div>
        <div className='flex mt-10'>
          <Button asChild className='mt-8 py-5'>
            <Link href='/agreement' className='text-xl'>
              Book an appointment
            </Link>
          </Button>
        </div>
      </section>

      {/* Head Spa Section */}
      <section className='flex flex-col w-full font-poppins sm:mt-8 md:mt-28 lg:mt-36 sm:px-8 md:px-12 lg:px-48'>
        <h1 className='text-black font-semibold text-[calc(16px+1.5vw)]'>Personalized Hair Condition Consulting</h1>
        <p className='text-gray-500 sm:mt-2 md:mt-4 lg:mt-8'>
          Craft engaging titles and subtitles for a head spa&apos;s &quot;Hair Condition Consulting&quot; section to enhance content appeal and
          clarity. Titles and subtitles guide readers through understanding and benefiting from personalized hair consulting, detailing the
          consultation process, tailored treatments, scalp health maintenance, advanced solutions, FAQ, and booking information.
        </p>
        <div className='flex mt-10'>
          <Button asChild className='mt-8'>
            <Link href='/conditions' className='text-xl'>
              Check your hair condition now
            </Link>
          </Button>
        </div>
      </section>

      {/* Retail Section */}
      <section className='flex flex-col w-full sm:mt-8 md:mt-28 lg:mt-36 sm:px-8 md:px-12 lg:px-48'>
        <h1 className='text-black font-semibold text-[calc(16px+1.5vw)]'>Retail</h1>
        <p className='text-gray-500 sm:mt-2 md:mt-4 lg:mt-8'>
          This is the space to introduce the Project section. Take this opportunity to give visitors a brief overview of the types of projects
          they&apos;ll find featured in the showcase below. Consider adding an image or video to spark their interest.
        </p>
        <div className='flex sm:mt-8 md:mt-12 lg:mt-18'>
          <TopGoods />
        </div>
      </section>

      {/* Instagram Section */}
      {/* <section className='flex flex-col w-full sm:mt-8 md:mt-28 lg:mt-36 sm:px-8 md:px-12 lg:px-48'>
        <h1 className='text-black font-semibold text-[calc(16px+1.5vw)]'>Instagram</h1>
        <p className='text-gray-500 sm:mt-2 md:mt-4 lg:mt-8'>@kazuyohairstyle</p>
        <div className='flex sm:mt-8 md:mt-12 lg:mt-18'>
          <TopInstagram />
        </div>
      </section> */}

      {/* Testimonies Section */}
      <section className='flex flex-col w-full sm:mt-8 md:mt-28 lg:mt-36 sm:px-8 md:px-12 lg:px-48'>
        <h1 className='text-black font-poppins font-semibold text-[calc(16px+1.5vw)]'>Thank you for your reviews</h1>
        <p className='text-gray-500 sm:mt-2 md:mt-4 lg:mt-8'>
          This is the space to introduce the Project section. Take this opportunity to give visitors a brief overview of the types of projects
          they&apos;ll find featured in the showcase below. Consider adding an image or video to spark their interest.
        </p>
        <div className='flex sm:mt-8 md:mt-12 lg:mt-18'>
          <TopReviews />
        </div>
      </section>

      {/* Price Section */}
      <section className='flex flex-col items-center justify-center sm:mt-8 md:mt-28 lg:mt-36'>
        <h1 className='text-black font-semibold text-[calc(16px+1.5vw)]'>Prices</h1>
      </section>

      {/* Map Section */}
      <section className='flex flex-col w-full sm:px-8 md:px-12 lg:px-24 sm:mt-8 md:mt-28 lg:mt-36'>
        <h1 className='text-black mb-10 font-semibold text-[calc(16px+1.5vw)]'>Access</h1>
        <p className='text-gray-500'>The parking area is located at the rear of the building. Please proceed to the back for convenient parking.</p>
        <div className='w-full relative my-10' style={{ paddingBottom: '56.25%', height: '80vh' }}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.402952049803!2d-118.05619732447848!3d34.16161397311594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2dc70abd9e333%3A0x8436c838e56c8dc5!2zMzggVyBTaWVycmEgTWFkcmUgQmx2ZCwgU2llcnJhIE1hZHJlLCBDQSA5MTAyNCDjgqLjg6Hjg6rjgqvlkIjooYblm70!5e0!3m2!1sja!2sjp!4v1716251840342!5m2!1sja!2sjp'
            className='absolute top-0 left-0 w-full h-full'
            // allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
        </div>
      </section>
      {/* Contact Section */}
      <section className='flex flex-col w-full sm:my-8 md:my-28 lg:my-36 sm:px-8 md:px-12 lg:px-48'>
        <h1 className='text-black mb-10 font-semibold text-[calc(16px+1.5vw)]'>Contact</h1>
        <Contact />
      </section>
    </main>
  );
}
