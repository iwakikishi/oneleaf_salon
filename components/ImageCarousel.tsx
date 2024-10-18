'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton } from '@/components/ui/dot-button';

const images = [
  { src: '/images/store/exterior.png', alt: 'exterior' },
  { src: '/images/store/chair.png', alt: 'chair' },
  { src: '/images/store/display.png', alt: 'display' },
  { src: '/images/store/mirror.png', alt: 'mirror' },
];

export default function ImageCarousel() {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    slidesToScroll: 1,
    dragFree: true,
    containScroll: 'trimSnaps',
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesToShow(1);
        setIsMobile(true);
      } else if (width < 768) {
        setSlidesToShow(2);
        setIsMobile(false);
      } else if (width < 1024) {
        setSlidesToShow(3);
        setIsMobile(false);
      } else {
        setSlidesToShow(4);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi, slidesToShow]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className='w-full'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {images.map((image, index) => (
            <div key={index} className='flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.333333%] lg:flex-[0_0_25%]'>
              <Card>
                <CardContent className='p-0'>
                  <div className='relative aspect-[4/3]'>
                    <Image src={image.src} alt={image.alt} fill className='object-cover rounded-md' />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {isMobile && (
        <div className='flex justify-center mt-4'>
          {images.map((_, index) => (
            <DotButton key={index} selected={index === selectedIndex} onClick={() => onDotButtonClick(index)} />
          ))}
        </div>
      )}
    </div>
  );
}
