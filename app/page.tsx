import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Booklet from '@/components/booklet';
import TopReviews from '@/components/reviews';
import Contact from '@/components/contact';
import ImageCarousel from '@/components/image-carousel';
import { SectionTitle } from '@/components/section-title';
import { PriceAccordion } from '@/components/PriceAccordion';
import { ServicesCardComponent } from '@/components/services-card';
import { InstagramFeed } from '@/components/instagram-feed';
import { Instagram } from 'lucide-react';

export default function Page() {
  return (
    <main className='flex flex-col w-full overflow-x-hidden scrollbar-transparent'>
      {/* Booklet Section */}
      <section className='justify-center pt-24 py-8 bg-[url(/images/booklet/bg-booklet-2.png)] bg-cover bg-no-repeat bg-white/10 bg-blend-overlay'>
        <React.Suspense fallback={<div className='flex justify-center items-center font-poppins text-black text-2xl'>Loading...</div>}>
          <Booklet />
        </React.Suspense>
      </section>
      {/* Hero Section */}
      <section className='flex w-full h-[150vw] xs:h-auto xs:aspect-video'>
        <div className='flex w-full h-full relative'>
          <video autoPlay muted loop playsInline className='w-full h-full object-cover xs:object-contain'>
            <source src='/videos/head_spa_1.mp4' type='video/mp4' />
          </video>
          <div className='absolute inset-0 bg-black/50' />
          <div className={`absolute top-1/2 xs:top-1/3 md:top-1/2 inset-0 flex flex-col px-4 xs:pl-12 gap-3`}>
            <div className='flex flex-col'>
              <h1 className='text-white text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold font-poppins tracking-wider'>
                OneLeaf Salon
              </h1>
              <p className='text-white text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-poppins tracking-wider mt-1'>
                Hair by Kazuyo
              </p>
            </div>
            <p className='text-gray-300 text-sm xs:text-base sm:text-xl md:text-xl lg:text-2xl font-poppins'>
              Luxury hair salon. Managed by professional Japanese hair stylist
            </p>
            <div className='flex flex-row gap-2 mt-4'>
              <Button
                asChild
                className='bg-white/70 text-black p-3 xs:p-2 sm:p-4 md:p-6 lg:p-8 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl'>
                <Link href='/agreement'>Book an appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Image Carousel Section */}
      <section className='flex flex-col px-2 mt-2'>
        <ImageCarousel />
      </section>
      {/* About Section */}
      <section className='flex flex-col w-full mt-8 md:mt-12 lg:mt-24 justify-center items-center py-8 gap-6 md:gap-8 lg:gap-10'>
        <div className='w-[75px] h-[75px] sm:w-[85px] sm:h-[85px] md:w-[105px] md:h-[105px] lg:w-[125px] lg:h-[125px] flex items-center justify-center rounded-full bg-gradient-to-r from-orange-200 via-orange-500 to-pink-600'>
          <div className='w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center rounded-full'>
            <Image
              src='/images/kazuyo_shichiri.jpg'
              alt='Kazuyo Shichiri'
              className='rounded-full object-cover'
              width={500}
              height={500}
              style={{ aspectRatio: '1 / 1' }}
            />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8'>
          <h1 className='text-green-900 text-2xl md:text-3xl lg:text-4xl font-bold font-poppins text-center'>Hello, (Konnichiwa)</h1>
          <p
            className='text-green-900 text-base sm:text-lg md:text-lg lg:text-xl text-center font-poppins font-light max-w-3xl px-4'
            style={{ lineHeight: '1.5' }}>
            Hello, my name is Kazuyo. I am originally from Japan, with over 25 years of experience as a hairstylist, including time spent working in
            Tokyo. After many wonderful years serving clients in Pasadena, I’m excited to bring my passion and expertise to my own salon here in
            Sierra Madre. With deep gratitude, I look forward to welcoming you to a space where beauty and relaxation meet.
          </p>
        </div>
      </section>
      {/* Booklet Section */}
      {/* <section className='flex w-full mt-8 md:mt-12 lg:mt-24 justify-center py-8 px-8 md:px-12 lg:px-16 bg-[#fffaeb]'>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Booklet />
        </React.Suspense>
      </section> */}

      {/* Services Section */}
      <section className='flex flex-col gap-8 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
        <SectionTitle>Services</SectionTitle>
        <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2'>
          <ServicesCardComponent />
        </div>
        {/* Head Spa */}
        <div className='flex flex-col bg-[#fffaeb] p-8 pb-10 rounded-xl gap-8 mt-8'>
          <div className='flex flex-row items-start gap-3'>
            <Image src='/images/head_spa.png' alt='leaf' width={80} height={80} className='object-contain rounded-lg' />
            <Image src='/images/special.png' alt='special' width={80} height={80} className='object-contain' />
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-green-900 text-3xl font-poppins font-bold'>ZEN Head Spa</h1>
            <p className='text-green-900 text-base sm:text-sm md:text-md lg:text-lg font-poppins'>Something about head spa</p>
            <div className='flex flex-col aspect-video rounded-xl overflow-hidden'>
              <video autoPlay muted loop playsInline className='w-full h-full rounded-xl object-cover xs:object-contain mt-4'>
                <source src='/images/booklet/waterfall.mp4' type='video/mp4' />
              </video>
            </div>
            <p className='text-green-900 text-base sm:text-sm md:text-md lg:text-lg font-poppins'>
              Counseling with Microscope * 40, 60min course only* Scalp Cleansing with Jojoba oil with Micro Mist Treatment Head and Neck massage
              Scalp Shampoo & Carbonated Treatment
            </p>
          </div>
        </div>
      </section>
      {/* Instagram Section */}
      <section className='flex flex-col gap-6 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
        <SectionTitle>Instagram</SectionTitle>
        <div className=' flex flex-row gap-2 bg-[#f0f9ff] p-4 rounded-xl'>
          <Instagram size={24} className='text-green-900' />
          <Link href='https://www.instagram.com/kazuyohairstyle/?hl=en' target='_blank'>
            <p className='text-green-900 text-sm sm:text-sm md:text-md lg:text-lg font-poppins underline'>
              Click here to take a look at our Instagram to discover the style that suits you best!
            </p>
          </Link>
        </div>
        <InstagramFeed />
      </section>
      {/* Price Section */}
      <section className='flex flex-col gap-6 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
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
      {/* Business Hours Section */}
      <section className='flex flex-col gap-6 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
        <SectionTitle>Business Hours</SectionTitle>
        <div className='flex flex-col bg-[#f0f9ff] p-8 pb-10 rounded-xl gap-8'>
          <div className='flex flex-col gap-5'>
            <p className='text-green-900 text-base sm:text-sm md:text-md lg:text-lg font-poppins'>
              We are open to serve you during the following hours:
            </p>
            <ul className='text-green-900 text-base sm:text-sm md:text-md lg:text-lg font-poppins'>
              <li>Monday: 9:00 AM - 6:00 PM</li>
              <li>Tuesday: Closed</li>
              <li>Wednesday: 9:00 AM - 6:00 PM</li>
              <li>Thursday: 9:00 AM - 6:00 PM</li>
              <li>Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 6:00 PM</li>
              <li>Sunday: 9:00 AM - 6:00 PM</li>
            </ul>
            <p className='text-green-900 text-base sm:text-sm md:text-md lg:text-lg font-poppins'>
              Please note that our hours may vary on holidays. We recommend booking an appointment in advance to ensure availability.
            </p>
          </div>
        </div>
      </section>
      {/* Appointment Policy Section */}
      <section className='flex flex-col gap-6 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
        <SectionTitle>Appointment Policy at OneLeaf Salon</SectionTitle>
        <div className='flex flex-col gap-8 px-4'>
          <p className='text-green-900 text-base sm:text-lg md:text-lg lg:text-xl font-poppins'>
            We are grateful that you have chosen OneLeaf Salon and look forward to your visit. To provide the best experience for all our clients, we
            kindly request that you review the following policies:
          </p>
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-poppins'>
            Punctuality: Please be aware that if you are more than 10 minutes late, we may not be able to provide your scheduled service.
            Additionally, in such cases, a cancellation fee of 50% of the service cost may apply.
          </p>
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-poppins'>
            No Show: If you do not show up for your appointment without notifying us, a no-show fee equivalent to 100% of the service fee will be
            charged. Additionally, we regret to inform you that we may not be able to accept any future appointments.
          </p>
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-poppins'>
            ●
            <Link href='/cancellation-policy'>
              <span className='underline'>Cancellation Policy</span>
            </Link>
          </p>
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-poppins'>
            We kindly request that you strictly cancel your appointment at least 24 hours in advance. Unfortunately, we are unable to accommodate
            cancellations made after 24 hours. In such cases, a fee equivalent to 100% of the service cost will be charged.
          </p>

          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-poppins'>
            Thank you for your understanding and cooperation! We are excitedly looking forward to your visit and can&apos;t wait to see you soon!{' '}
          </p>
        </div>
      </section>
      <section className='flex flex-col gap-6 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
        <SectionTitle>Thank you for your reviews</SectionTitle>
        <p className='text-gray-500 sm:mt-2 md:mt-4 lg:mt-8 px-4'>Thank you for your reviews. We are grateful for your support and feedback.</p>
        <div className='flex sm:mt-8 md:mt-12 lg:mt-18'>
          <TopReviews />
        </div>
      </section>
      {/* Access Section */}
      <section className='flex flex-col gap-6 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
        <SectionTitle>Access</SectionTitle>
        <div className='flex flex-col gap-8 px-4'>
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-poppins'>
            * Parking * The parking area is located at the rear of the building. Please proceed to the back for convenient parking.
          </p>
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-poppins'>
            <a
              href='https://www.google.com/maps/dir/?api=1&destination=34.16161397311594,-118.05619732447848'
              target='_blank'
              rel='noopener noreferrer'>
              ● <span className='underline'>Get the direction</span>
            </a>
          </p>
        </div>
        <div className='w-full aspect-square relative mb-10'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.402952049803!2d-118.05619732447848!3d34.16161397311594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2dc70abd9e333%3A0x8436c838e56c8dc5!2s38%20W%20Sierra%20Madre%20Blvd%2C%20Sierra%20Madre%2C%20CA%2091024%2C%20USA!5e0!3m2!1sen!2sus!4v1716251840342!5m2!1sen!2sus'
            className='absolute top-0 left-0 w-full h-full'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
        </div>
      </section>
      <section className='flex flex-col gap-6 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
        <SectionTitle>Contact</SectionTitle>
        <div className='flex flex-col gap-8 px-4'>
          <Contact />
        </div>
      </section>
      {/* <section className='flex flex-col w-full font-poppins mt-24 px-8 md:px-12 lg:px-48'>
        <SectionTitle>Services</SectionTitle>
        <div className='flex flex-col sm:mt-4 md:mt-8 lg:mt-12 sm:flex-row gap-4'>
          {['cut', 'makeup', 'perm'].map((service) => (
            <div key={service} className='p-6'>
              <Image src={`/images/services/${service}.webp`} alt={service} layout='responsive' width={1000} height={1000} />
              <p className='text-black p-4 text-center text-3xl font-bold'>{service.charAt(0).toUpperCase() + service.slice(1)}</p>
            </div>
          ))}
        </div>
      </section> */}
      {/* <section className='flex flex-col w-full font-poppins sm:mt-8 md:mt-28 lg:mt-36 sm:px-8 md:px-12 lg:px-48'>
        <SectionTitle>Sunday Appointment Only Head Spa Menus</SectionTitle>
        {['Oily Improvement', 'Dry Scalp', 'Hair loss', 'Stress relief'].map((title) => (
          <HeadSpaItem
            key={title}
            title={title}
            description='Craft engaging titles and subtitles for a head spa&apos;s "Hair Condition Consulting" section to enhance content appeal and clarity. Titles and subtitles guide readers through understanding and benefiting from personalized hair consulting, detailing the consultation process, tailored treatments, scalp health maintenance, advanced solutions, FAQ, and booking information.'
          />
        ))}
        <div className='flex mt-10'>
          <Button asChild className='mt-8 py-5'>
            <Link href='/agreement' className='text-xl'>
              Book an appointment
            </Link>
          </Button>
        </div>
      </section> */}
      {/* <section className='flex flex-col w-full font-poppins sm:mt-8 md:mt-28 lg:mt-36 sm:px-8 md:px-12 lg:px-48'>
        <SectionTitle>Personalized Hair Condition Consulting</SectionTitle>
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
      </section> */}
      {/* <section className='flex flex-col w-full sm:mt-8 md:mt-28 lg:mt-36 sm:px-8 md:px-12 lg:px-48'>
        <SectionTitle>Retail</SectionTitle>
        <p className='text-gray-500 sm:mt-2 md:mt-4 lg:mt-8'>
          This is the space to introduce the Project section. Take this opportunity to give visitors a brief overview of the types of projects
          they&apos;ll find featured in the showcase below. Consider adding an image or video to spark their interest.
        </p>
        <div className='flex sm:mt-8 md:mt-12 lg:mt-18'>
          <TopGoods />
        </div>
      </section> */}
    </main>
  );
}
