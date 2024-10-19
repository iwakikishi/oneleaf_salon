import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Booklet from '@/components/booklet';
import TopReviews from '@/components/reviews';
import Contact from '@/components/contact';
import ImageCarousel from '@/components/ImageCarousel';
import { PriceAccordion } from '@/components/PriceAccordion';

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className='flex flex-col aspect-[4/3] mt-2 bg-[#fffaeb] p-8 gap-6'>
    {/* <div className='flex flex-row items-center gap-4'> */}
    <Image src={`/images/${icon}.webp`} alt={title} className='object-cover rounded-lg' width={500} height={120} />
    <p className='text-green-900 text-xl font-bold font-poppins'>{title}</p>
    {/* </div> */}
    <p className='text-gray-500 text-md break-words font-poppins'>{description}</p>
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className='flex items-center gap-2'>
    <div className='w-[50px] h-[50px] flex-shrink-0'>
      <Image src='/images/leaf2.png' alt='leaf' width={50} height={50} />
    </div>
    <h2 className='text-green-900 font-montserrat font-semibold text-[calc(16px+1.75vw)]' style={{ textShadow: '2px 2px 4px rgba(0, 128, 0, 0.5)' }}>
      {children}
    </h2>
  </div>
);

const getDirection = () => {
  window.open('https://www.google.com/maps/dir/?api=1&destination=34.16161397311594,-118.05619732447848', '_blank');
};

export default function Page() {
  return (
    <main className='flex flex-col w-full overflow-x-hidden scrollbar-transparent'>
      {/* Hero Section */}
      <section className='flex w-full h-[150vw] xs:h-auto xs:aspect-video'>
        <div className='flex w-full h-full relative'>
          <video autoPlay muted loop playsInline className='w-full h-full object-cover xs:object-contain'>
            <source src='/videos/head_spa_1.mp4' type='video/mp4' />
          </video>
          <div className='absolute inset-0 bg-black/50' />
          <div className='absolute inset-0 flex flex-col justify-center px-4 xs:pl-12 gap-3'>
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
        <div className='w-[65px] h-[65px] sm:w-[85px] sm:h-[85px] md:w-[105px] md:h-[105px] lg:w-[125px] lg:h-[125px] flex items-center justify-center rounded-full bg-gradient-to-r from-orange-200 via-orange-500 to-pink-600'>
          <div className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center rounded-full'>
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
          <h1 className='text-green-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-center'>Hello, (Konnichiwa)</h1>
          <p
            className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl text-center font-poppins font-light max-w-3xl px-4'
            style={{ lineHeight: '1.5' }}>
            My name is Kazuyo, and I am Japanese. Until now, I have been working as a hairstylist in Pasadena, supported by many customers, and with
            gratitude, I was able to open my own salon in Sierra Madre. I look forward to meeting everyone.
          </p>
        </div>
      </section>
      {/* Booklet Section */}
      <section className='flex w-full mt-8 md:mt-12 lg:mt-24 justify-center py-8 px-8 md:px-12 lg:px-16 bg-[#fffaeb]'>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Booklet />
        </React.Suspense>
      </section>
      {/* Services Section */}
      <section className='flex flex-col gap-8 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
        <SectionTitle>Services</SectionTitle>
        <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2'>
          <ServiceCard
            icon='hair_cut_retro'
            title='Cut & Style'
            description='Haircuts not included with color services. Shampoo and styling included'
          />
          <ServiceCard icon='hair_color_retro' title='Color & Bleach' description='カラー剤とかの説明' />
          <ServiceCard icon='hair_perm_retro' title='Texture' description='何か特徴' />
          <ServiceCard icon='make_up_retro' title='Makeup' description='何か特徴' />
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
      {/* Instagram Section */}
      <section className='flex flex-col gap-8 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
        <SectionTitle>Instagram</SectionTitle>
        <div className='flex flex-col gap-8'>ここにインスタグラムのフィードを表示する</div>
      </section>
      {/* Prices Section */}
      <section className='flex flex-col gap-8 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
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
      {/* Business Hours Section */}
      <section className='flex flex-col gap-8 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
        <SectionTitle>Business Hours</SectionTitle>
        <div className='flex flex-col bg-[#f0f9ff] p-8 pb-10 rounded-xl gap-8'>
          <div className='flex flex-col gap-5'>
            <p className='text-green-900 text-base sm:text-sm md:text-md lg:text-lg font-poppins'>
              We are open to serve you during the following hours:
            </p>
            <ul className='text-green-900 text-base sm:text-sm md:text-md lg:text-lg font-poppins'>
              <li>Monday: Closed</li>
              <li>Tuesday: 10:00 AM - 6:00 PM</li>
              <li>Wednesday: 10:00 AM - 6:00 PM</li>
              <li>Thursday: 10:00 AM - 6:00 PM</li>
              <li>Friday: 10:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: 9:00 AM - 5:00 PM</li>
            </ul>
            <p className='text-green-900 text-base sm:text-sm md:text-md lg:text-lg font-poppins'>
              Please note that our hours may vary on holidays. We recommend booking an appointment in advance to ensure availability.
            </p>
          </div>
        </div>
      </section>
      {/* Appointment Policy Section */}
      <section className='flex flex-col gap-8 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
        <SectionTitle>Appointment Policy at OneLeaf Salon</SectionTitle>
        <div className='flex flex-col gap-8 px-4'>
          <p className='text-green-900 text-base sm:text-lg md:text-lg lg:text-xl font-poppins'>
            Thank you for choosing OneLeaf Salon! We look forward to welcoming you. To ensure that all our clients receive the best possible service,
            please note the following:
          </p>
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-poppins'>
            Punctuality: Please arrive on time for your appointment. If you are more than 10 minutes late, we may not be able to accommodate your
            service, and a cancellation fee equivalent to 50% of the service cost will apply.
          </p>
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-poppins'>
            No Show: If you do not show up for your appointment without notifying us, a no-show fee equivalent to 100% of the service fee will be
            charged.
          </p>
          <Link href='/cancellation-policy'>
            <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-poppins'>
              ● <span className='underline'>Cancellation Policy</span>
            </p>
          </Link>
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
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-poppins'>
            Thank you for your understanding and we hope to see you soon.
          </p>
        </div>
      </section>
      <section className='flex flex-col gap-8 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
        <SectionTitle>Thank you for your reviews</SectionTitle>
        <p className='text-gray-500 sm:mt-2 md:mt-4 lg:mt-8 px-4'>Thank you for your reviews. We are grateful for your support and feedback.</p>
        <div className='flex sm:mt-8 md:mt-12 lg:mt-18'>
          <TopReviews />
        </div>
      </section>
      {/* Access Section */}
      <section className='flex flex-col gap-8 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
        <SectionTitle>Access</SectionTitle>
        <p className='text-gray-500 px-4 text-base sm:text-lg md:text-xl lg:text-2xl font-poppins'>
          The parking area is located at the rear of the building. Please proceed to the back for convenient parking.
        </p>
        <div className='w-full relative mb-10' style={{ paddingBottom: '56.25%', height: '80vh' }}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.402952049803!2d-118.05619732447848!3d34.16161397311594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2dc70abd9e333%3A0x8436c838e56c8dc5!2s38%20W%20Sierra%20Madre%20Blvd%2C%20Sierra%20Madre%2C%20CA%2091024%2C%20USA!5e0!3m2!1sen!2sus!4v1716251840342!5m2!1sen!2sus'
            className='absolute top-0 left-0 w-full h-full'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
        </div>
      </section>
      <section className='flex flex-col gap-8 px-2 mt-12 sm:mt-16 md:mt-20 lg:mt-24 py-8 md:px-12 lg:px-56'>
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
