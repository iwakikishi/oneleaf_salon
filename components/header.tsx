'use client';

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { Button } from './ui/button';

const MobileHeader = dynamic(() => import('./mobile-header'), { ssr: false });

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * (9 / 16);
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `flex w-full h-16 items-center font-poppins font-semibold px-8 md:px-12 lg:px-24 z-10 fixed top-0 left-0 transition-colors duration-300 ${
    isScrolled ? 'bg-[#fffaeb]' : 'bg-lime-700/50'
  } ${isScrolled ? 'text-black' : 'text-white'}`;

  if (isMobile) {
    return <MobileHeader />;
  }

  return (
    <header className={headerClass}>
      <Link href='/'>
        <Image alt='ONELEAF Hair by Kazuyo logo' className='mr-3' height='50' src='/images/header/logo.webp' width='50' />
      </Link>
      <div className='flex'>
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
          <Link href='/team'>Team</Link>
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
  );
};

export default Header;
