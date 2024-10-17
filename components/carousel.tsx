'use client';

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const CarouselComponent = () => {
  return (
    <div className='flex flex-col w-full aspect-video'>
      <AspectRatio ratio={16 / 9}>
        <Carousel
          className='w-full aspect-video'
          plugins={[
            Autoplay({
              delay: 3600,
            }),
          ]}
          opts={{ loop: true }}>
          <CarouselContent className='w-full aspect-video'>
            {/* <Carousel autoPlay infiniteLoop interval={3600}> */}
            <CarouselItem className='w-full pl-0 -ml-0 aspect-video'>
              <video src='/videos/head_spa_1.mp4' loop autoPlay muted width='100%' height='auto' />
            </CarouselItem>
            {/* <CarouselItem>
          </CarouselItem> */}
          </CarouselContent>
        </Carousel>
      </AspectRatio>
      {/* <CarouselNext>Next</CarouselNext>
      <CarouselPrevious>Previous</CarouselPrevious> */}
    </div>
  );
};

export default CarouselComponent;
