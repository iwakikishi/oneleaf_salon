'use client';
import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useWindowSize } from '../hook/useWindowSize';

const Booklet = (props: any) => {
  const width = useWindowSize()?.width || 0; // 'width' が undefined の場合は 0 を使用
  const [showNextButton, setShowNextButton] = useState(true);
  const [showPrevButton, setShowPrevButton] = useState(false);

  const flipBook = useRef(null);
  // レスポンシブなパディングを計算
  const padding = width >= 1024 ? 36 : width >= 768 ? 24 : width >= 640 ? 8 : 4;
  const adjustedWidth = width - padding * 2; // 両側のパディングを引く
  const adjustedHeight = adjustedWidth / 2;

  const PageCover = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>((props, ref) => {
    return (
      <div className='page page-cover' ref={ref} data-density='hard'>
        <div className='page-content'>
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });

  PageCover.displayName = 'PageCover';

  const Page = React.forwardRef<HTMLDivElement, { image: string; children: React.ReactNode; number: number }>((props, ref) => {
    return (
      <div className='page' ref={ref as React.Ref<HTMLDivElement>}>
        <div className='page-content'>
          <div className='page-image'>
            <Image src={props.image} alt='kazuyo' width={adjustedWidth / 2} height={adjustedHeight} />
          </div>
          <div className='page-text'>{props.children}</div>
          <div className='page-footer'>{props.number + 1}</div>
        </div>
      </div>
    );
  });

  Page.displayName = 'Page';

  const onFlip = () => {
    if (flipBook.current && (flipBook.current as any).pageFlip().getCurrentPageIndex() === 10) {
      setShowNextButton(false);
    }
    if (flipBook.current && (flipBook.current as any).pageFlip().getCurrentPageIndex() !== 0) {
      setShowPrevButton(true);
    } else {
      setShowPrevButton(false);
    }
  };

  const nextButtonClick = () => {
    if (flipBook.current) {
      (flipBook.current as any).pageFlip().flipNext();
      // if(flipBook.current.pageFlip().getCurrentPageIndex() === 10){
      //   setShowNextButton(false);
      // }
      // if (flipBook.current.pageFlip().getCurrentPageIndex() !== 0) {
      //   setShowPrevButton(true);
      // }
    }
  };

  const prevButtonClick = () => {
    if (flipBook.current) {
      (flipBook.current as any).pageFlip().flipPrev();
      // if (flipBook.current.pageFlip().getCurrentPageIndex() !== 0) {
      //   setShowPrevButton(true);
      // }
      // if(flipBook.current.pageFlip().getCurrentPageIndex() === 10){
      //   setShowNextButton(false);
      // }
    }
  };

  return adjustedWidth && adjustedHeight ? (
    <div className='flex flex-col w-full items-center justify-center'>
      <HTMLFlipBook
        ref={(el) => (flipBook.current = el || null)}
        width={adjustedWidth / 2}
        height={adjustedHeight}
        startZIndex={-1}
        autoSize={false}
        disableFlipByClick={false}
        size='fixed'
        minWidth={adjustedWidth / 2}
        maxWidth={adjustedWidth / 2}
        minHeight={adjustedHeight}
        maxHeight={adjustedHeight}
        maxShadowOpacity={0.5}
        showCover={true}
        flippingTime={600}
        mobileScrollSupport={true}
        onFlip={onFlip}
        className='' // 必要に応じてクラス名を追加
        style={{}} // 必要に応じてスタイルを追加
        startPage={0} // 初期ページを設定
        drawShadow={true} // 影を描画するかどうか
        useMouseEvents={true} // マウスイベントを使用するかどうか
        swipeDistance={30} // スワイプ距離を設定
        clickEventForward={true} // クリックイベントを転送するかどうか
        usePortrait={false} // ポートレートモードを使用するかどうか
        showPageCorners={true} // ページの角を表示するかどうか
      >
        {/* <div className='flex flex-col p-10' style={{ width: adjustedWidth / 2, height: adjustedHeight }}>
            <div className='flex flex-col items-center justify-center' style={{ width: adjustedWidth / 2, height: adjustedHeight }}>
            <p className='text-black text-2xl font-bold'>Stories of Kazuyo</p>
            </div>
        </div> */}
        <div className='flex p-0'>
          <Image src={`/images/booklet/0.png`} alt='kazuyo' width={adjustedWidth / 2} height={adjustedHeight} />
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <div className='flex' key={index}>
            <Image src={`/images/booklet/${index + 1}.png`} alt='kazuyo' width={adjustedWidth / 2} height={adjustedHeight} />
          </div>
        ))}
      </HTMLFlipBook>
      <div className='flex mt-5 justify-center'>
        <div className='flex gap-4'>
          <Button variant='ghost' className='text-black font-poppins' disabled={!showPrevButton} onClick={prevButtonClick}>
            Previous
          </Button>
          <Button variant='ghost' className='text-black font-poppins' disabled={!showNextButton} onClick={nextButtonClick}>
            Next
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Booklet;
