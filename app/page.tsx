import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Booklet from '@/components/booklet';
import TopReviews from '@/components/reviews';
import Contact from '@/components/contact';
import ImageCarousel from '@/components/ImageCarousel';

type ImageGalleryProps = {
  image: string;
  alt: string;
};

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

type HeadSpaItemProps = {
  title: string;
  description: string;
};

const ImageGallery = ({ image, alt }: ImageGalleryProps) => (
  <div className='flex mt-2 bg-[#fffaeb]'>
    <div className='relative aspect-[4/3] w-full'>
      <Image src={image} alt={alt} fill className='object-cover' />
    </div>
  </div>
);

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className='flex flex-col aspect-[4/3] mt-2 bg-[#fffaeb] p-8 gap-6'>
    <Image src={`/images/icons/${icon}.png`} alt={title} className='object-contain' width={100} height={100} />
    <p className='text-green-900 text-2xl font-bold mt-4 font-poppins'>{title}</p>
    <p className='text-gray-500 text-lg break-words font-poppins'>{description}</p>
  </div>
);

const HeadSpaItem = ({ title, description }: HeadSpaItemProps) => (
  <div className='w-full mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4' style={{ gridTemplateColumns: 'auto 1fr' }}>
    <div className='bg-gray-200'>
      <Image src='/images/services/head_spa.webp' alt='head_spa' layout='responsive' width={500} height={300} />
    </div>
    <div className='text-gray-500 items-center'>
      <h1 className='text-black font-semibold text-[calc(16px+1.5vw)]'>{title}</h1>
      {description}
    </div>
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className='flex items-center gap-2'>
    <div className='w-[50px] h-[50px] flex-shrink-0'>
      <Image src='/images/leaf2.png' alt='leaf' width={50} height={50} />
    </div>
    <h2 className='text-green-900 font-montserrat font-semibold text-[calc(16px+1.5vw)]'>{children}</h2>
  </div>
);

export default function Page() {
  return (
    <main className='flex flex-col main-scrollbar-transparent'>
      <section className='flex w-full h-[150vw] xs:h-auto xs:aspect-video'>
        <div className='flex w-full h-full relative'>
          <video src='/videos/head_spa_1.mp4' loop autoPlay muted className='w-full h-full object-cover xs:object-contain' />
          <div className='absolute inset-0 bg-black/50' />
          <div className='absolute inset-0 flex flex-col justify-center px-4 xs:pl-12 gap-3'>
            {/* <h3 className='text-white text-xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-poppins tracking-normal'>Welcome to </h3> */}
            <div className='flex flex-col'>
              <h1 className='text-white text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-poppins tracking-wider'>
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

      {/* <section className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 px-2'> */}
      <section className='flex flex-col px-2 mt-2'>
        <ImageCarousel />
      </section>

      <section className='flex flex-col w-full mt-8 md:mt-12 lg:mt-24 justify-center items-center py-8 gap-6 md:gap-8 lg:gap-10'>
        <div className='relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]'>
          <Image src='/images/kazuyo_shichiri.jpg' alt='Kazuyo Shichiri' fill className='rounded-full object-cover' />
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

      <section className='flex w-full mt-8 md:mt-12 lg:mt-24 justify-center py-8 bg-[#fffaeb]'>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Booklet />
        </React.Suspense>
      </section>

      <section className='flex flex-col gap-8 px-2 mt-24 md:px-12 lg:px-48'>
        <SectionTitle>Services</SectionTitle>
        <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2'>
          <ServiceCard icon='hair_cut_2' title='Cut & Style' description='Haircuts not included with color services. Shampoo and styling included' />
          <ServiceCard icon='hair_color' title='Color & Bleach' description='カラー剤とかの説明' />
          <ServiceCard icon='hair_perm' title='Texture' description='何か特徴' />
          <ServiceCard icon='makeup' title='Makeup' description='何か特徴' />
        </div>
      </section>

      <section className='flex flex-col w-full font-poppins mt-24 md:mt-12 lg:mt-24 px-8 md:px-12 lg:px-48 gap-8'>
        <div className='flex flex-col bg-[#fffaeb] p-8 pb-10 rounded-xl gap-8'>
          <Image src='/images/icons/head_spa.png' alt='leaf' width={120} height={120} />
          <div className='flex flex-col gap-3 '>
            <h1 className='text-green-900 text-4xl font-poppins font-bold'>ZEN Head Spa</h1>
            <p className='text-green-900 text-base sm:text-sm md:text-md lg:text-lg font-poppins mt-4'>
              Counseling with Microscope * 40, 60min course only* Scalp Cleansing with Jojoba oil with Micro Mist Treatment Head and Neck massage
              Scalp Shampoo & Carbonated Treatment
            </p>
          </div>
        </div>

        <div className='flex flex-col aspect-video rounded-xl overflow-hidden'>
          <video src='/videos/head_spa_section.mp4' loop autoPlay muted className='w-full h-full object-cover xs:object-contain' />
        </div>
      </section>

      <section className='flex flex-col w-full font-poppins mt-8 md:mt-12 lg:mt-24 px-8 md:px-12 lg:px-48'>
        <SectionTitle>Prices</SectionTitle>
      </section>

      <section className='flex flex-col w-full font-poppins mt-8 md:mt-12 lg:mt-24 px-8 md:px-12 lg:px-48'>
        <SectionTitle>Appointment Policy at OneLeaf Salon</SectionTitle>
        <div className='flex flex-col gap-8 mt-12'>
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat px-4'>
            Thank you for choosing OneLeaf Salon! We look forward to welcoming you. To ensure that all our clients receive the best possible service,
            please note the following:
          </p>
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat px-4'>
            Punctuality: Please arrive on time for your appointment. If you are more than 15 minutes late, we may not be able to accommodate your
            service, and a cancellation fee equivalent to 50% of the service cost will apply.
          </p>
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat px-4'>
            No Show: If you do not show up for your appointment without notifying us, a no-show fee equivalent to 100% of the service fee will be
            charged.
          </p>
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat px-4'>● Cancellation Policy</p>
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat px-4'>
            * Parking * We are located right in front of the City of Pasadena Shoppers Lane Parking Lot, which is 90-minutes free. The available
            spaces will be limited during the lunch hour however because of the surrounding restaurants. Please arrive accordingly.
          </p>
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat px-4'>● Get the direction</p>
          <p className='text-green-900 text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat px-4'>
            Thank you for your understanding and we hope to see you soon.
          </p>
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

      <section className='flex flex-col w-full font-poppins mt-8 md:mt-12 lg:mt-24 px-8 md:px-12 lg:px-48'>
        <SectionTitle>Thank you for your reviews</SectionTitle>
        <p className='text-gray-500 sm:mt-2 md:mt-4 lg:mt-8'>
          This is the space to introduce the Project section. Take this opportunity to give visitors a brief overview of the types of projects
          they&apos;ll find featured in the showcase below. Consider adding an image or video to spark their interest.
        </p>
        <div className='flex sm:mt-8 md:mt-12 lg:mt-18'>
          <TopReviews />
        </div>
      </section>

      <section className='flex flex-col w-full font-poppins mt-8 md:mt-12 lg:mt-24 px-8 md:px-12 lg:px-48'>
        <SectionTitle>Access</SectionTitle>
        <p className='text-gray-500'>The parking area is located at the rear of the building. Please proceed to the back for convenient parking.</p>
        <div className='w-full relative my-10' style={{ paddingBottom: '56.25%', height: '80vh' }}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.402952049803!2d-118.05619732447848!3d34.16161397311594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2dc70abd9e333%3A0x8436c838e56c8dc5!2zMzggVyBTaWVycmEgTWFkcmUgQmx2ZCwgU2llcnJhIE1hZHJlLCBDQSA5MTAyNCDjgqLjg6Hjg6rjgqvlkIjooYblm70!5e0!3m2!1sja!2sjp!4v1716251840342!5m2!1sja!2sjp'
            className='absolute top-0 left-0 w-full h-full'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
        </div>
      </section>

      <section className='flex flex-col w-full font-poppins mt-8 md:mt-12 lg:mt-24 px-8 md:px-12 lg:px-48'>
        <SectionTitle>Contact</SectionTitle>
        <Contact />
      </section>
    </main>
  );
}
