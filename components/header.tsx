'use client';

import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Link from 'next/link';
import MobileHeader from './mobile-header';

import { Button } from './ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <>
      {!isMobile ? (
        <header className='flex w-full h-16 items-center font-montserrat text-white bg-[rgba(0,0,0,0.3)] px-8 md:px-12 lg:px-24 z-10 absolute'>
          <Link href='/'>
            <Image alt='ONELEAF Hair by Kazuyo logo' className='mr-3' height='50' src='/images/header/logo.webp' width='50' />
          </Link>
          <div className='ml-auto md:hidden'>
            <Button asChild onClick={() => setIsOpen(!isOpen)}>
              <img src='/images/icons/menu.svg' alt='Menu' width='30' height='30' />
            </Button>
          </div>
          <div className={`w-full bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:relative md:block`}>
            <Button asChild variant={'ghost'}>
              <Link href='/'>Home</Link>
            </Button>
            <Button asChild variant={'ghost'}>
              <Link href='/about'>About</Link>
            </Button>
            <Button asChild variant={'ghost'}>
              <Link href='/services'>Services</Link>
            </Button>
            <Button asChild variant={'ghost'}>
              <Link href='/conditions'>Hair Conditioning</Link>
            </Button>
            <Button asChild variant={'ghost'}>
              <Link href='/contact'>Contact</Link>
            </Button>
            <Button asChild variant={'ghost'}>
              <Link href='https://booking.setmore.com/scheduleappointment/f37b5239-7295-4828-9acb-a560c84d37ef' target='_blank'>
                Appointment
              </Link>
            </Button>
          </div>
        </header>
      ) : (
        <MobileHeader />
      )}
    </>
  );
};

export default Header;
