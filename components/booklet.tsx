'use client';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useWindowSize } from '../hook/useWindowSize';
import { Fullscreen, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { DialogFlipbook } from '@/components/dialog-flipbook';
import { X } from 'lucide-react';

const Booklet = (props: any) => {
  const { width = 0 } = useWindowSize() || {};
  const isMobile = width < 640;
  // Calculate responsive padding
  const padding = width >= 1024 ? 240 : width >= 768 ? 48 : width >= 640 ? 24 : 12;
  const adjustedWidth = width - padding * 2;
  const adjustedHeight = adjustedWidth * 0.73;

  const [dialogWidth, setDialogWidth] = useState(0);
  const [dialogHeight, setDialogHeight] = useState(0);
  const dialogFlipBook = useRef(null);

  useEffect(() => {
    const updateDialogDimensions = () => {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      const maxHeight = screenHeight * 0.9;
      const maxWidth = screenWidth * 0.9;

      // アスペクト比を10:7に設定
      const aspectRatio = 10 / 7;

      let height = maxHeight;
      let width = height / aspectRatio;

      if (width > maxWidth) {
        width = maxWidth;
        height = width * aspectRatio;
      }

      setDialogWidth(width);
      setDialogHeight(height);
    };

    updateDialogDimensions();
    window.addEventListener('resize', updateDialogDimensions);

    return () => window.removeEventListener('resize', updateDialogDimensions);
  }, []);

  const [showNextButton, setShowNextButton] = useState(true);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [coverMargin, setCoverMargin] = useState(`-${adjustedWidth / 4}px`);
  const [fontSize, setFontSize] = useState(12);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const textRef = useRef<HTMLParagraphElement>(null);
  const flipBook = useRef(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const pageCoverRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const coverImageRef = useRef<HTMLImageElement>(null);
  const coverVideoRef = useRef<HTMLVideoElement>(null);

  // const [dialogPages, setDialogPages] = useState<React.ReactNode[]>([]);

  const [dialogCurrentPage, setDialogCurrentPage] = useState(0);

  // Define pages array
  const pages = [
    // Page 1-1
    <div
      key='page-1-1'
      className="flex w-full h-full bg-[url('/images/booklet/bg-paper-white.png')] bg-cover bg-no-repeat shadow-md shadow-gray-600"
      style={{
        height: `${adjustedHeight}px`,
      }}>
      <div className={`p-4 sm:p-6 md:p-8 w-full flex flex-col justify-around relative overflow-hidden `} style={{ height: `${adjustedHeight}px` }}>
        <div className='flex flex-col justify-center gap-2'>
          <div className={`w-[${adjustedWidth / 3}px] h-[${adjustedHeight / 3}px]`}>
            <Image src={`/images/booklet/2.png`} alt='kazuyo' width={adjustedWidth / 3} height={adjustedHeight} />
          </div>
          <div className='flex flex-col items-start text-gray-900 font-poppins font-bold'>
            <div className='text-xs sm:text-md text-gray-700' style={{ fontSize: isMobile ? '8px' : '12px' }}>
              Owner & Hairstylist
            </div>
            <div className='text-sm sm:text-md md:text-xl'>Kazuyo Shichiri</div>
          </div>
        </div>
        <div className='text-gray-700 text-xs sm:text-sm font-poppins'>
          <div className='text-xs sm:text-md text-gray-700' style={{ fontSize: isMobile ? '8px' : '12px' }}>
            OneLeaf Salon Hair by Kazuyo
          </div>
          <div className='flex items-center text-xs sm:text-md text-gray-700' style={{ fontSize: isMobile ? '8px' : '12px' }}>
            <Instagram color='gray' size={isMobile ? 12 : 16} />
            <Link href='https://www.instagram.com/kazuyohairstyle/' target='_blank'>
              <span className='ml-1'>kazuyohairstyle</span>
            </Link>
          </div>
        </div>
      </div>
    </div>,

    // Page 1-2
    <div
      key='page-1-2'
      className="flex bg-[url('/images/booklet/bg-paper-white.png')] bg-cover bg-no-repeat shadow-md shadow-gray-600"
      style={{
        height: `${adjustedHeight}px`,
      }}>
      <article className={`p-4 sm:p-6 md:p-8 w-full flex flex-col justify-center font-poppins`} style={{ height: `${adjustedHeight}px` }}>
        <p className={`text-black overflow-hidden`} style={{ fontSize: isMobile ? '2.25vw' : '12px' }}>
          Hello, my name is Kazuyo. I am originally from Japan, with over 25 years of experience as a hairstylist, including time spent working in
          Tokyo. After many wonderful years serving clients in Pasadena, I&apos;m excited to bring my passion and expertise to my own salon here in
          Sierra Madre. With deep gratitude, I look forward to welcoming you to a space where beauty and relaxation meet.
        </p>
      </article>
    </div>,

    // Page 2-1
    <div
      key='page-2-1'
      className="flex bg-[url('/images/booklet/bg-paper-white.png')] bg-cover bg-no-repeat shadow-md shadow-gray-600"
      style={{
        height: `${adjustedHeight}px`,
      }}>
      <div className={`p-4 sm:p-6 md:p-8 w-full flex flex-col justify-center gap-3`} style={{ height: `${adjustedHeight}px` }}>
        <div className='text-lime-700/70 text-xl sm:text-5xl font-poppins font-bold'>more</div>
        <div className='text-lime-700/70 text-xl sm:text-5xl font-poppins font-bold'>than</div>
        <div className='text-lime-700/70 text-xl sm:text-5xl font-poppins font-bold'>20 years</div>
      </div>
    </div>,

    // Page 2-2
    <div
      key='page-2-2'
      className="flex bg-[url('/images/booklet/bg-paper-white.png')] bg-cover bg-no-repeat shadow-md shadow-gray-600"
      style={{
        height: `${adjustedHeight}px`,
      }}>
      <div className={`p-4 sm:p-6 md:p-8 w-full flex flex-col justify-center`} style={{ height: `${adjustedHeight}px` }}>
        <p className='text-black overflow-hidden' style={{ fontSize: isMobile ? '2.25vw' : '12px' }}>
          Kazuyo has been a Master Hairstylist in Japan with more than 20 years of experience working in Tokyo&apos;s leading hair salons. She bases
          each style on drawing out a person&apos;s inner beauty, creating balance with their structural features, and listening to the
          customers&apos; vision on who they want to become as their best selves. The experience will be relaxed and fun as we work together to find
          the beautiful energy you want to project into the world.
        </p>
      </div>
    </div>,

    // Page 3-1
    <div
      key='page-3-1'
      className="flex bg-[url('/images/booklet/bg-paper-white.png')] bg-cover bg-no-repeat shadow-md shadow-gray-600"
      style={{
        height: `${adjustedHeight}px`,
      }}>
      <div className={`p-4 sm:p-6 md:p-8 w-full flex flex-col justify-around gap-2`} style={{ height: `${adjustedHeight}px` }}>
        <h2 className='text-lime-700/70 text-xs sm:text-2xl font-poppins font-bold'>
          History <br />〜 Tokyo to LA 〜
        </h2>
        <div className={`flex w-full gap-2`}>
          <div className='w-full'>
            <Image src={`/images/booklet/kazuyo-past-1.jpg`} alt='kazuyo' width={adjustedWidth / 4} height={adjustedHeight / 2} objectFit='cover' />
          </div>
          <div className='w-full'>
            <Image src={`/images/booklet/otera.jpg`} alt='kazuyo' width={adjustedWidth / 4} height={adjustedHeight / 2} objectFit='cover' />
          </div>
        </div>
      </div>
    </div>,

    // Page 3-2
    <div
      key='page-3-2'
      className="flex bg-[url('/images/booklet/bg-paper-white.png')] bg-cover bg-no-repeat shadow-md shadow-gray-600"
      style={{
        height: `${adjustedHeight}px`,
      }}>
      <article className={`p-4 sm:p-6 md:p-8 w-full flex flex-col justify-center font-poppins`} style={{ height: `${adjustedHeight}px` }}>
        <p className='text-black overflow-hidden' style={{ fontSize: isMobile ? '1.7vw' : '12px' }}>
          Kazuyo, a Japanese hairstylist with a vibrant spirit and an extraordinary eye, embarked on an adventure far from her origins. Both of her
          grandfathers were monks at a traditional Japanese temple, where from an early age, she was taught by them about simplicity, gratitude for
          nature, and mindfulness. Touch your Hair , touch your Hart Through her work as a hairstylist, Kazuyo has always valued the connection she
          makes not only with her clients&apos; hair but also with their hearts. In Tokyo, she thrived as a manager and top stylist at a renowned
          salon and worked as a hair and makeup artist for Japanese films. After relocating to Los Angeles, she gained valuable experience in
          Hollywood entertainment. Now, with the successful opening of her own salon, Kazuyo is dedicated to developing special techniques and unique
          services, all with the goal of bringing happiness to all her clients
        </p>
      </article>
    </div>,

    // Page 4-1
    <div
      key='page-4-1'
      className="flex bg-[url('/images/booklet/bg-paper-white.png')] bg-cover bg-no-repeat shadow-md shadow-gray-600"
      style={{
        height: `${adjustedHeight}px`,
      }}>
      <div className={`p-4 sm:p-6 md:p-8 w-full flex flex-col justify-around gap-${isMobile ? '2' : '3'}`} style={{ height: `${adjustedHeight}px` }}>
        <h2 className='text-lime-700/70 text-sm sm:text-3xl font-poppins font-bold'>Zen Head Spa</h2>
        <div className='flex flex-col aspect-video overflow-hidden'>
          <video autoPlay muted loop playsInline className='w-full h-full object-cover xs:object-contain'>
            <source src='/videos/head_spa_1.mp4' type='video/mp4' />
          </video>
        </div>
        <div className={`flex w-full gap-2`}>
          <div className='w-1/2'>
            <Image src={`/images/booklet/head-spa-2.jpg`} alt='kazuyo' width={adjustedWidth / 4} height={adjustedHeight / 2} objectFit='cover' />
            <Image src={`/images/booklet/head-spa-1.jpg`} alt='kazuyo' width={adjustedWidth / 4} height={adjustedHeight / 2} objectFit='cover' />
          </div>
          <div className='w-1/2'>
            <Image src={`/images/booklet/head-spa-4.jpg`} alt='kazuyo' width={adjustedWidth / 4} height={adjustedHeight / 2} objectFit='cover' />
          </div>
        </div>
      </div>
    </div>,

    // Page 4-2
    <div
      key='page-4-2'
      className="flex bg-[url('/images/booklet/bg-paper-white.png')] bg-cover bg-no-repeat shadow-md shadow-gray-600"
      style={{
        height: `${adjustedHeight}px`,
      }}>
      <article className={`p-4 sm:p-6 md:p-8 w-full flex flex-col justify-center font-poppins`} style={{ height: `${adjustedHeight}px` }}>
        <p className='text-black overflow-hidden' style={{ fontSize: isMobile ? '2.25vw' : '12px' }}>
          Waterfall Japanese Headspa In Zen practice, there is a form of training called takigyo, or waterfall meditation, which involves purifying
          the mind under a waterfall. Inspired by her roots and Japanese culture, Kazuyo developed a unique relaxation treatment called the Waterfall
          Head Spa. This method aims to clear away worldly desires, foster mindfulness, and bring deep tranquility to the mind.
        </p>
      </article>
    </div>,

    // Page 5-1
    <div
      key='page-5-1'
      className="flex bg-[url('/images/booklet/bg-paper-white.png')] bg-cover bg-no-repeat shadow-md shadow-gray-600"
      style={{
        height: `${adjustedHeight}px`,
      }}>
      <div className={`p-4 sm:p-6 md:p-8 w-full flex flex-col justify-around gap-2`} style={{ height: `${adjustedHeight}px` }}>
        <h2 className='text-lime-700/70 text-sm sm:text-3xl font-poppins font-bold'>
          Zen spa
          <br />
          (Shojin MONK MODE)
        </h2>
        <Image src={'/images/booklet/shoujin-1.jpg'} alt='kazuyo' width={adjustedWidth / 2} height={adjustedHeight} />
      </div>
    </div>,

    // Page 5-2
    <div
      key='page-5-2'
      className="flex bg-[url('/images/booklet/bg-paper-white.png')] bg-cover bg-no-repeat shadow-md shadow-gray-600"
      style={{
        height: `${adjustedHeight}px`,
      }}>
      <article className={`p-4 sm:p-6 md:p-8 w-full flex flex-col justify-center font-poppins`} style={{ height: `${adjustedHeight}px` }}>
        <p className='text-black overflow-hidden' style={{ fontSize: isMobile ? '1.75vw' : '12px' }}>
          MONK MODE is inspired by the lifestyle of monks, focusing on detaching from material desires and pursuing spiritual growth through
          introspection and meditation. Kazuyo&apos;s original Zen Spa is truly special, using primarily organic products. The combination of
          exceptional organic facial and head massage treatments will leave you feeling completely rejuvenated, as if you have been reborn :About
          Sojin Kazuyo also studied shojin ryori, a type of vegetarian cuisine deeply rooted in Zen Buddhism. Shojin ryori, or &apos;devotional
          cooking,&apos; abstains from the use of meat or fish, focusing instead on seasonal vegetables, tofu, and grains, which are carefully
          prepared to respect the natural flavors and nutritional value of each ingredient. This cuisine reflects the Zen principles of harmlessness
          and mindful appreciation for all forms of life
        </p>
      </article>
    </div>,
  ];

  // useEffect(() => {
  //   if (props.pages && Array.isArray(props.pages)) {
  //     const newDialogPages = props.pages.map((page, index) => (
  //       <div key={`dialog-page-${index}`} className='page' style={{ width: dialogWidth, height: dialogHeight }}>
  //         {page}
  //       </div>
  //     ));
  //     setDialogPages(newDialogPages);
  //   }
  // }, [props.pages, dialogWidth, dialogHeight]);

  const onFlip = useCallback(
    (e: any) => {
      const newPage = e.data;
      setCurrentPage(newPage);
      if (newPage === 0) {
        setShowPrevButton(false);
        setTimeout(() => {
          if (divRef.current) {
            divRef.current.style.transform = 'translateX(0)';
            divRef.current.style.transition = 'transform 0.6s ease-in-out';
          }
          if (coverVideoRef.current) {
            coverVideoRef.current.style.transform = 'translateX(0)';
            coverVideoRef.current.style.transition = 'transform 0.6s ease-in-out';
          }
          if (coverVideoRef.current) {
            coverVideoRef.current.currentTime = 0;
            coverVideoRef.current.play();
          }
        }, 600);
        setTimeout(() => {
          if (coverVideoRef.current) {
            coverVideoRef.current.currentTime = 0;
            coverVideoRef.current.play();
          }
        }, 1200);
      } else if (newPage === 6) {
        setShowNextButton(false);
      } else {
        setShowNextButton(true);
        setShowPrevButton(true);
      }
    },
    [currentPage]
  );

  useEffect(() => {
    setCoverMargin(`-${adjustedWidth / 4}px`);
  }, [adjustedWidth]);

  const handleVideoLoaded = () => {
    console.log('video loaded');
    setIsVideoLoaded(true);
  };

  const nextButtonClick = () => {
    if (flipBook.current && coverVideoRef.current) {
      if (currentPage === 0) {
        coverVideoRef.current.style.transform = `translateX(${adjustedWidth / 4}px)`;
        coverVideoRef.current.style.transition = 'transform 0.6s ease-in-out';
        setTimeout(() => {
          (flipBook.current as any).pageFlip().flipNext();
        }, 600);
      } else {
        (flipBook.current as any).pageFlip().flipNext();
      }
    }
  };

  const prevButtonClick = () => {
    if (flipBook.current && coverVideoRef.current) {
      (flipBook.current as any).pageFlip().flipPrev();
    }
  };

  const dialogNextPage = () => {
    if (dialogFlipBook.current && dialogCurrentPage < pages.length - 1) {
      dialogFlipBook.current.pageFlip().flipNext();
      setDialogCurrentPage((prev) => prev + 1);
    }
  };

  const dialogPrevPage = () => {
    if (dialogFlipBook.current && dialogCurrentPage > 0) {
      dialogFlipBook.current.pageFlip().flipPrev();
      setDialogCurrentPage((prev) => prev - 1);
    }
  };

  const PageCover = React.forwardRef((props: any, ref) => {
    return (
      <div className='page page-cover' ref={pageCoverRef} data-density='hard'>
        <div className='page-content'>
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });
  PageCover.displayName = 'PageCover';

  const Page = React.forwardRef((props: any, ref) => {
    return (
      <div className='page' ref={pageRef}>
        <div className='page-content'>
          <h2 className='page-header'>Page header - {props.number}</h2>
          <div className='page-image'></div>
          <div className='page-text'>{props.children}</div>
          <div className='page-footer'>{props.number + 1}</div>
        </div>
      </div>
    );
  });
  Page.displayName = 'Page';

  const dialogPageStyle = {
    width: dialogWidth,
    height: dialogHeight,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box' as const,
  };

  const dialogPages = [
    // カバーページ
    <div key='dialog-cover' className='page' style={dialogPageStyle}>
      <video
        autoPlay
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}>
        <source src='/images/booklet/booklet-cover.mp4' type='video/mp4' />
      </video>
    </div>,
    // その他のページ
    ...pages.map((page, index) => (
      <div key={`dialog-page-${index}`} className='page' style={dialogPageStyle}>
        <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>{page}</div>
      </div>
    )),
  ];

  return adjustedWidth && adjustedHeight ? (
    <div className='flex flex-col w-full items-center justify-center py-8' style={{ height: `${adjustedHeight}px` }}>
      <HTMLFlipBook
        ref={(el) => (flipBook.current = el || null)}
        width={adjustedWidth / 2}
        height={adjustedHeight}
        startZIndex={-1}
        autoSize={true}
        disableFlipByClick={false}
        size='fixed'
        minWidth={adjustedWidth / 2}
        maxWidth={adjustedWidth / 2}
        minHeight={adjustedHeight}
        maxHeight={adjustedHeight}
        maxShadowOpacity={0.5}
        showCover={true}
        flippingTime={isMobile ? 900 : 600}
        mobileScrollSupport={false}
        onFlip={(e) => onFlip(e)}
        className={`h-[${adjustedHeight}px]`}
        style={{ height: `${adjustedHeight}px` }}
        startPage={0}
        drawShadow={true}
        useMouseEvents={true}
        swipeDistance={30}
        clickEventForward={true}
        usePortrait={false}
        showPageCorners={false}>
        {/* Cover */}
        <div ref={divRef} className='flex' style={{ marginLeft: coverMargin, transform: 'translateX(0)', transition: 'none' }}>
          <video
            ref={coverVideoRef}
            autoPlay
            muted
            playsInline
            onLoadedData={handleVideoLoaded}
            style={{
              width: adjustedWidth / 2,
              height: adjustedHeight,
              marginLeft: coverMargin,
              transform: 'translateX(0)',
              transition: 'none',
              borderTopRightRadius: 18,
              borderBottomRightRadius: 12,
              boxShadow: '0 0 12px 0 rgba(0, 0, 0, 1)',
            }}>
            <source src='/images/booklet/booklet-cover.mp4' type='video/mp4' />
          </video>
        </div>
        {/* Other pages */}
        {pages}
      </HTMLFlipBook>
      <div className='flex mt-6 justify-center'>
        <div className='flex gap-4'>
          <Button className='text-black font-poppins bg-white' disabled={!showPrevButton} onClick={prevButtonClick}>
            Prev
          </Button>
          <Button variant='ghost' className='text-black' onClick={() => setIsDialogOpen(true)}>
            <Fullscreen size={24} />
          </Button>
          <Button className='text-black font-poppins bg-white' disabled={!showNextButton} onClick={nextButtonClick}>
            Next
          </Button>
        </div>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={() => setIsDialogOpen(!isDialogOpen)}>
        <DialogContent className='max-w-[100vw] max-h-[100vh] w-full h-full p-0 m-0 bg-black/90'>
          <DialogTitle></DialogTitle>
          <div className='max-w-[100vw] max-h-[100vh] w-full h-full p-0 m-0 bg-black/90 relative'>
            <div className='relative w-full h-full flex items-center justify-center'>
              <DialogFlipbook width={dialogWidth} height={dialogHeight} pages={pages} isMobile={isMobile} />
            </div>
            <Button onClick={() => setIsDialogOpen(false)} className='absolute right-4 top-4 bg-white/30 rounded-full p-2 z-50' aria-label='Close'>
              <X size={24} />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  ) : null;
};

export default Booklet;
