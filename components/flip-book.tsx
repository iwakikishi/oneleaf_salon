'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Page {
  content: ReactNode;
  imageUrl: string;
}

const pages: Page[] = [
  {
    content: (
      <>
        <h2 className='text-xl text-green-900 font-bold mb-2'>ようこそ</h2>
        <p>OneLeaf Salonへようこそ。当サロンの特徴やサービスについてご紹介します。</p>
      </>
    ),
    imageUrl: '/images/booklet/1.png',
  },
  {
    content: (
      <>
        <h2 className='text-xl text-green-900 font-bold mb-2'>サービス</h2>
        <p>カット、カラー、パーマなど、幅広いサービスを提供しています。</p>
      </>
    ),
    imageUrl: '/images/booklet/2.png',
  },
  {
    content: (
      <>
        <h2 className='text-xl font-bold mb-2'>スタイリスト</h2>
        <p>経験豊富なスタイリストが、お客様の理想のヘアスタイルを実現します。</p>
      </>
    ),
    imageUrl: '/images/booklet/3.png',
  },
  {
    content: (
      <>
        <h2 className='text-xl font-bold mb-2'>製品</h2>
        <p>高品質なヘアケア製品を使用し、髪の健康を維持します。</p>
      </>
    ),
    imageUrl: '/images/booklet/4.png',
  },
  {
    content: (
      <>
        <h2 className='text-xl font-bold mb-2'>予約</h2>
        <p>オンラインまたは電話で簡単に予約ができます。お気軽にご連絡ください。</p>
      </>
    ),
    imageUrl: '/images/booklet/5.png',
  },
  {
    content: (
      <>
        <h2 className='text-xl font-bold mb-2'>お問い合わせ</h2>
        <p>ご質問やご要望がございましたら、お気軽にお問い合わせください。</p>
      </>
    ),
    imageUrl: '/images/booklet/6.png',
  },
];

export default function PageFlip() {
  const [currentPage, setCurrentPage] = useState(-1); // -1はカバーを示す
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [flipProgress, setFlipProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToNextPage = () => {
    if (!isFlipping && currentPage < pages.length - 1) {
      setIsFlipping(true);
      setFlipDirection('next');
      let progress = 0;
      const flipInterval = setInterval(() => {
        progress += 0.05;
        setFlipProgress(progress);
        if (progress >= 1) {
          clearInterval(flipInterval);
          setCurrentPage((prev) => prev + 1);
          setIsFlipping(false);
          setFlipProgress(0);
        }
      }, 20);
    }
  };

  const goToPreviousPage = () => {
    if (!isFlipping && currentPage > -1) {
      setIsFlipping(true);
      setFlipDirection('prev');
      let progress = 0;
      const flipInterval = setInterval(() => {
        progress += 0.05;
        setFlipProgress(progress);
        if (progress >= 1) {
          clearInterval(flipInterval);
          setCurrentPage((prev) => prev - 1);
          setIsFlipping(false);
          setFlipProgress(0);
        }
      }, 20);
    }
  };

  const renderPageContent = (pageIndex: number) => {
    if (pageIndex === -1) {
      return (
        <div className='absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center'>
          <div className='relative w-3/4 h-3/4 mb-4'>
            <Image src='/images/booklet/0.png' alt='本の表紙' layout='fill' objectFit='cover' className='rounded-md' />
          </div>
          <h1 className='text-2xl font-bold text-center'>OneLeaf Salon ガイド</h1>
        </div>
      );
    } else if (pageIndex >= 0 && pageIndex < pages.length) {
      return <PageContent page={pages[pageIndex]} />;
    }
    return null;
  };

  const PageContent: React.FC<{ page: Page | undefined }> = ({ page }) => (
    <div className='flex flex-col items-center justify-center h-full p-4'>
      {page && (
        <>
          <div className='relative w-32 h-32 mb-4'>
            <Image
              src={page.imageUrl}
              alt='ページ画像'
              className='rounded-full object-cover'
              width={128}
              height={128}
              style={{ aspectRatio: '1 / 1' }}
            />
          </div>
          <div className='text-center overflow-auto max-h-[calc(100%-8rem)]'>{page.content}</div>
        </>
      )}
    </div>
  );

  const bookWidth = windowWidth < 640 ? '90vw' : '80vw';
  const bookHeight = `calc(${bookWidth} * 0.7)`;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 w-full'>
      <style jsx>{`
        @keyframes flipCover {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(-180deg);
          }
        }
        @keyframes flipPageForward {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(-90deg);
          }
          100% {
            transform: rotateY(-180deg);
          }
        }
        @keyframes flipPageBackward {
          0% {
            transform: rotateY(-180deg);
          }
          50% {
            transform: rotateY(-90deg);
          }
          100% {
            transform: rotateY(0deg);
          }
        }
        .book-container {
          perspective: 1500px;
        }
        .book {
          transform-style: preserve-3d;
          transition: transform 0.5s;
        }
        .page {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          transform-origin: left;
          transform-style: preserve-3d;
          transition: transform 0.6s;
          background-color: white;
        }
        .page-content {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background-color: white;
        }
        .page-back {
          transform: rotateY(180deg);
        }
        .animate-flip-cover {
          animation: flipCover 0.6s ease-in-out forwards;
        }
        .animate-flip-forward {
          animation: flipPageForward 0.6s ease-in-out forwards;
        }
        .animate-flip-backward {
          animation: flipPageBackward 0.6s ease-in-out forwards;
        }
      `}</style>
      <div className='book-container w-full max-w-4xl' style={{ width: bookWidth, height: bookHeight }}>
        <div className='book relative bg-white shadow-2xl rounded-lg overflow-hidden w-full h-full'>
          {/* 左ページ */}
          <div className='absolute inset-0 w-1/2 h-full bg-white border-r border-gray-200'>{renderPageContent(currentPage)}</div>

          {/* 右ページ（めくられるページ） */}
          <div
            className='page'
            style={{
              transform: isFlipping ? `rotateY(${flipDirection === 'next' ? -180 * flipProgress : -180 + 180 * flipProgress}deg)` : 'rotateY(0deg)',
            }}>
            <div className='page-content'>{renderPageContent(currentPage === -1 ? 0 : currentPage + 1)}</div>
            <div className='page-content page-back'>
              {renderPageContent(flipDirection === 'next' ? (currentPage === -1 ? 1 : currentPage + 2) : currentPage - 1)}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 flex justify-between w-full max-w-4xl'>
        <button onClick={goToPreviousPage} disabled={currentPage === -1} className='px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300'>
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage >= pages.length - 1}
          className='px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300'>
          Next
        </button>
      </div>
    </div>
  );
}
