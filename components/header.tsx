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
        <Image
          alt='logo'
          width='45'
          height='45'
          src='/icons/oneleaf-logo-2-square.jpg'
          style={{ width: '45px', height: '45px', marginRight: '10px', borderRadius: '5px' }}
        />{' '}
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
          {/* <Link href='tel:+16263943601'>Appointment</Link> */}
          <Link href='https://oneleafsalon.setmore.com/oneleaf' target='_blank'>
            Appointment
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
