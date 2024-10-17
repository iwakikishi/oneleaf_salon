'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <main className='flex flex-col w-full h-full sm:px-4 md:px-16 lg:px-24'>
      <section className='flex flex-col items-center justify-center py-12 sm:px-4 md:px-16 lg:px-24 mt-16'>
        <h1 className='text-black font-semibold text-[calc(16px+1.5vw)]'>Hair Condition Checker</h1>
        <p className='text-black font-semibold text-[calc(16px+1.5vw)]'>Check your hair condition and get personalized advice</p>

        <div className='flex flex-col space-y-10 py-10 font-montserrat'>
          <div className='flex items-center space-x-10'>
            <Label htmlFor='wash'>How many times a week do you wash your hair?</Label>
            <Select defaultValue='7'>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Everyday' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='0'>I do not wash in home</SelectItem>
                <SelectItem value='1'>Once a week</SelectItem>
                <SelectItem value='2'>Twice a week</SelectItem>
                <SelectItem value='3'>Three times a week</SelectItem>
                <SelectItem value='4'>Four times a week</SelectItem>
                <SelectItem value='5'>Five times a week</SelectItem>
                <SelectItem value='6'>Six times a week</SelectItem>
                <SelectItem value='7'>Everyday</SelectItem>
                <SelectItem value='8'>More than once a day</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='flex items-center space-x-10'>
            <Label htmlFor='temp'>What is the temparatures when you wash your hair?</Label>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='90-95' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='60'>60-65</SelectItem>
                <SelectItem value='65'>65-70</SelectItem>
                <SelectItem value='70'>70-75</SelectItem>
                <SelectItem value='75'>75-80</SelectItem>
                <SelectItem value='80'>80-85</SelectItem>
                <SelectItem value='85'>85-90</SelectItem>
                <SelectItem value='90'>90-95</SelectItem>
                <SelectItem value='95'>95-100</SelectItem>
                <SelectItem value='100'>100</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='flex items-center space-x-10'>
            <Label htmlFor='sun'>How many times a week do you get sunshine?</Label>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='7' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='0'>0</SelectItem>
                <SelectItem value='1'>1</SelectItem>
                <SelectItem value='2'>2</SelectItem>
                <SelectItem value='3'>3</SelectItem>
                <SelectItem value='4'>4</SelectItem>
                <SelectItem value='5'>5</SelectItem>
                <SelectItem value='6'>6</SelectItem>
                <SelectItem value='7'>7</SelectItem>
                <SelectItem value='8'>8</SelectItem>
                <SelectItem value='9'>9</SelectItem>
                <SelectItem value='10'>10</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='flex items-center space-x-10'>
            <label htmlFor='terms4' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Do you use dryer after washing your hair?
            </label>
            <RadioGroup defaultValue='YES' className='flex flex-row space-x-4'>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='YES' id='dryer1' />
                <Label htmlFor='dryer1'>YES</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='NO' id='dryer2' />
                <Label htmlFor='dryer2'>NO</Label>
              </div>
            </RadioGroup>
          </div>
          <div className='flex items-center space-x-10'>
            <label htmlFor='sweat' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Do you sweat very much?
            </label>
            <RadioGroup defaultValue='YES' className='flex flex-row space-x-4'>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='YES' id='sweat1' />
                <Label htmlFor='sweat1'>YES</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='NO' id='sweat2' />
                <Label htmlFor='sweat2'>NO</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <Button asChild variant={'ghost'}>
          <Link href='/conditions'>Begin</Link>
        </Button>
      </section>
    </main>
  );
}
