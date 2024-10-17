'use client';

import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex w-full h-16 justify-between font-montserrat text-white px-4 sm:px-8 md:px-12 lg:px-24 z-10 absolute'>
      <Link href='/'>
        <Image alt='ONELEAF Hair by Kazuyo logo' className='mr-3' height='50' src='/images/header/logo.webp' width='50' />
      </Link>
      <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
        <PopoverTrigger asChild>
          <Button variant='outline'>
            <Image src='/icons/menu.svg' alt='Menu' width='30' height='30' />
          </Button>
        </PopoverTrigger>

        <PopoverContent className='w-full h-full'>
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
              <Link href='/conditions'>Hair Conditioning</Link>
            </Button>
            <Button asChild variant={'ghost'} onClick={() => setIsOpen(false)}>
              <Link href='/contact'>Contact</Link>
            </Button>
            <Button asChild variant={'ghost'} onClick={() => setIsOpen(false)}>
              <Link href='https://booking.setmore.com/scheduleappointment/f37b5239-7295-4828-9acb-a560c84d37ef' target='_blank'>
                Appointment
              </Link>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </header>
  );
};

export default MobileHeader;
