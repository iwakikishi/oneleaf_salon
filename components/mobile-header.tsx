'use client';

import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex w-full h-16 p-4 sm:px-8 md:px-12 lg:px-24 z-10 absolute'>
      <div className='flex w-full justify-between items-center'>
        <Link href='/'>{/* <Image alt='ONELEAF Hair by Kazuyo logo' width='40' height='40' src='/images/header/logo.webp' /> */}</Link>
        <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
          <PopoverTrigger asChild>
            <Button variant='outline' className='p-2 bg-lime-500/80 rounded-full'>
              <Menu size={24} color='white' />
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
      </div>
    </header>
  );
};

export default MobileHeader;
