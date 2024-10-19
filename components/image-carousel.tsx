'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton } from '@/components/ui/dot-button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

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
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedIndexModal, setSelectedIndexModal] = useState(0);

  const [direction, setDirection] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    dragFree: false,
  });

  const [emblaRefModal, emblaApiModal] = useEmblaCarousel({
    align: 'center',
    loop: true,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesToShow(2);
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

  useEffect(() => {
    if (emblaApiModal && modalOpen) {
      emblaApiModal.scrollTo(currentImageIndex);
    }
  }, [emblaApiModal, modalOpen, currentImageIndex]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelectModal = useCallback(() => {
    if (!emblaApiModal) return;
    setSelectedIndexModal(emblaApiModal.selectedScrollSnap());
  }, [emblaApiModal]);

  useEffect(() => {
    if (!emblaApiModal) return;

    onSelectModal();
    emblaApiModal.on('select', onSelectModal);
    emblaApiModal.on('reInit', onSelectModal);

    return () => {
      emblaApiModal.off('select', onSelectModal);
      emblaApiModal.off('reInit', onSelectModal);
    };
  }, [emblaApiModal, onSelectModal]);

  const onDotButtonClickModal = useCallback(
    (index: number) => {
      if (emblaApiModal) emblaApiModal.scrollTo(index);
    },
    [emblaApiModal]
  );

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className='w-full'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {images.map((image, index) => (
            <div key={index} className='flex-[0_0_50%] min-w-0 pr-2 sm:flex-[0_0_50%] md:flex-[0_0_33.333333%] lg:flex-[0_0_25%]'>
              <Card onClick={() => openModal(index)} className='cursor-pointer hover:shadow-lg transition-shadow duration-300'>
                <CardContent className='p-0'>
                  <div className='relative aspect-[4/3]'>
                    <Image src={image.src} alt={image.alt} fill className='object-cover' />
                    <div className='absolute bottom-1 left-1 bg-black/30 rounded-md px-3 py-1'>
                      <p className='text-white text-sm font-poppins'>{image.alt}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-4'>
        {images.map((_, index) => (
          <DotButton key={index} selected={index === selectedIndex} onClick={() => onDotButtonClick(index)} />
        ))}
      </div>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className='max-w-[100vw] max-h-[100vh] w-full h-full p-0 m-0 bg-black/90'>
          <div className='relative w-full h-full flex flex-col items-center justify-center'>
            <div className='relative w-full h-[80vh] overflow-hidden' ref={emblaRefModal}>
              <div className='flex h-full'>
                {images.map((image, index) => (
                  <div key={index} className='flex-[0_0_100%] h-full min-w-0'>
                    <div className='relative w-full h-full'>
                      <Image src={image.src} alt={image.alt} fill style={{ objectFit: 'contain' }} className='p-4' />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex justify-center mt-4'>
              {images.map((_, index) => (
                <DotButton key={index} selected={index === selectedIndexModal} onClick={() => onDotButtonClickModal(index)} />
              ))}
            </div>
            <button
              onClick={() => emblaApiModal?.scrollPrev()}
              className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-white/40 transition-colors z-10'>
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => emblaApiModal?.scrollNext()}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-white/40 transition-colors z-10'>
              <ChevronRight size={24} />
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className='absolute top-4 right-4 bg-white/20 p-2 rounded-full text-white hover:bg-white/40 transition-colors z-10'>
              <X size={24} />
            </button>
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-md z-10'>
              <p className='text-white text-sm font-poppins'>
                {images[currentImageIndex].alt.charAt(0).toUpperCase() + images[currentImageIndex].alt.slice(1)}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
