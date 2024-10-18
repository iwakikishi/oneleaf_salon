'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex w-full h-16 p-4 z-10 fixed top-0 left-0 right-0'>
      <div className='flex w-full justify-between items-center'>
        <Popover open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
          <PopoverTrigger asChild>
            <Button variant={'ghost'} className='p-0 bg-lime-700/70 rounded-md w-11 h-11 items-center justify-center'>
              <Menu size={24} color={isOpen ? 'black' : 'white'} />
            </Button>
          </PopoverTrigger>

          <PopoverContent className='w-screen h-[calc(100vh-4rem)] mt-8 bg-white/95 backdrop-blur-sm left-0 right-auto transform-none'>
            <div className={`flex flex-col transition-all duration-300 ease-in-out md:relative md:block`}>
              <Button asChild variant={'ghost'} onClick={() => setIsOpen(false)}>
                <Link href='/'>Home</Link>
              </Button>
              {/* <Button asChild variant={'ghost'} onClick={() => setIsOpen(false)}>
                <Link href='/about'>About</Link>
              </Button> */}
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
                <Link href='https://booking.setmore.com/scheduleappointment/f37b5239-7295-4828-9acb-a560c84d37ef' target='_blank'>
                  Appointment
                </Link>
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        <div />
        <Button asChild className='px-2 bg-lime-700/70 rounded-md text-white text-xs font-poppins items-center justify-center'>
          <Link href='https://booking.setmore.com/scheduleappointment/f37b5239-7295-4828-9acb-a560c84d37ef' target='_blank'>
            Book Now
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default MobileHeader;
