'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Instagram, Menu, CalendarClock } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Image from 'next/image';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerWidth * 1.5;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `flex w-full h-16 p-4 z-10 fixed top-0 left-0 right-0 transition-colors duration-300 ${
    isScrolled ? 'bg-white' : 'bg-white/50'
  }`;

  const menuButtonClass = `px-2 py-0 rounded-md items-center justify-center bg-white`;

  const bookNowButtonClass = `px-2 py-0 rounded-md text-sm font-poppins items-center justify-center ${
    isScrolled ? 'bg-white hover:bg-white text-[#4a6741] border border-[#4a6741]' : 'bg-lime-700/70 text-white hover:bg-lime-700'
  }`;

  return (
    <header className={headerClass}>
      <div className='flex w-full justify-between items-center'>
        <div className='flex gap-2'>
          {/* <Image
            alt='logo'
            width='40'
            height='40'
            src='/icons/oneleaf-logo-2-square.jpg'
            style={{ width: '40px', height: '40px', borderRadius: '10px' }}
          /> */}
          <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
            <PopoverTrigger asChild>
              <Button variant={'ghost'} className={menuButtonClass}>
                <Image
                  alt='logo'
                  width='36'
                  height='36'
                  src='/icons/oneleaf-logo-2-square.jpg'
                  style={{ width: '36px', height: '36px', borderRadius: '10px' }}
                />
                {/* <Menu size={24} color={isOpen || isScrolled ? 'black' : 'black'} /> */}
              </Button>
            </PopoverTrigger>

            <PopoverContent className='w-screen h-[calc(100vh-4rem)] mt-8 bg-white/95 backdrop-blur-sm left-0 right-auto transform-none'>
              <div className={`flex flex-col transition-all duration-300 ease-in-out md:relative md:block`}>
                <Button asChild variant={'ghost'} onClick={() => setIsOpen(false)}>
                  <Link href='/'>Home</Link>
                </Button>
                <Button asChild variant={'ghost'} onClick={() => setIsOpen(false)}>
                  <Link href='/about'>About</Link>
                </Button>
                <Button asChild variant={'ghost'} onClick={() => setIsOpen(false)}>
                  <Link href='/services'>Services</Link>
                </Button>
                <Button asChild variant={'ghost'} onClick={() => setIsOpen(false)}>
                  <Link href='/team'>Team</Link>
                </Button>
                <Button asChild variant={'ghost'} onClick={() => setIsOpen(false)}>
                  <Link href='/contact'>Contact</Link>
                </Button>
                <Button asChild variant={'ghost'} onClick={() => setIsOpen(false)}>
                  <Link href='/cancellation-policy'>Cancellation Policy</Link>
                </Button>
                <Button asChild variant={'ghost'} className='mt-8' onClick={() => setIsOpen(false)}>
                  <Link href='https://www.instagram.com/kazuyohairstyle/?hl=en' target='_blank' className='flex items-center'>
                    <Instagram size={20} color='black' className='hover:text-green-300 transition-colors mr-2' />
                    Instagram
                  </Link>
                </Button>
                <Button asChild variant={'ghost'} onClick={() => setIsOpen(false)}>
                  <Link href='https://booking.setmore.com/scheduleappointment/f37b5239-7295-4828-9acb-a560c84d37ef' target='_blank'>
                    <CalendarClock size={20} color='black' className='hover:text-green-300 transition-colors mr-2' />
                    Book Now
                  </Link>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <Button size={'sm'} asChild className={bookNowButtonClass}>
          <Link href='https://booking.setmore.com/scheduleappointment/f37b5239-7295-4828-9acb-a560c84d37ef' target='_blank'>
            Book Now
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default MobileHeader;
