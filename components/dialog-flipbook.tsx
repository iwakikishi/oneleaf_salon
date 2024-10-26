'use client';
import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DialogFlipbookProps {
  width: number;
  height: number;
  pages: React.ReactNode[];
  isMobile: boolean;
}

interface PageFlip {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
  };
}

export const DialogFlipbook: React.FC<DialogFlipbookProps> = ({ width, height, pages, isMobile }) => {
  const dialogFlipBook = useRef<PageFlip>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const pageWidth = width;
  const containerWidth = isMobile ? width : width * 2;

  const dialogPageStyle = {
    width: pageWidth,
    height,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: isMobile ? '0' : '20px',
    boxSizing: 'border-box' as const,
    overflow: 'hidden',
    backgroundColor: 'white',
  };

  const dialogContentStyle = isMobile
    ? 'w-full h-full flex flex-col justify-center items-center bg-white'
    : `w-full h-full flex flex-col justify-center items-center bg-white`;

  const dialogPages = [
    // カバーページ
    <div key='dialog-cover' className='page' style={dialogPageStyle}>
      <video autoPlay muted playsInline className='w-full h-full object-cover'>
        <source src='/images/booklet/booklet-cover.mp4' type='video/mp4' />
      </video>
    </div>,
    // その他のページ
    ...pages.map((page, index) => (
      <div key={`dialog-page-${index}`} className='page shadow-page' style={dialogPageStyle}>
        <div className={dialogContentStyle}>
          {React.cloneElement(page as React.ReactElement, {
            className: isMobile
              ? 'w-full h-full flex flex-col justify-start items-center bg-white'
              : 'w-full h-full flex flex-col justify-center items-center bg-white',
          })}
        </div>
      </div>
    )),
  ];

  const nextPage = () => {
    if (dialogFlipBook.current && currentPage < pages.length) {
      dialogFlipBook.current.pageFlip().flipNext();
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (dialogFlipBook.current && currentPage > 0) {
      dialogFlipBook.current.pageFlip().flipPrev();
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className='relative' style={{ width: `${containerWidth}px`, height: `${height}px` }}>
      <HTMLFlipBook
        ref={dialogFlipBook}
        width={pageWidth}
        height={height}
        size='fixed'
        minWidth={pageWidth}
        maxWidth={pageWidth}
        minHeight={height}
        maxHeight={height}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className='dialog-flipbook'
        startPage={0}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={isMobile}
        startZIndex={0}
        autoSize={false}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={false}
        disableFlipByClick={false}
        style={{ width: containerWidth, height: height }}>
        {dialogPages}
      </HTMLFlipBook>
      <button
        onClick={prevPage}
        className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2'
        disabled={currentPage === 0}>
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextPage}
        className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-2'
        disabled={currentPage === pages.length}>
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
