'use client';

import React from 'react';
import { useWindowSize } from '../hook/useWindowSize';

export function InstagramFeed() {
  const width = useWindowSize()?.width || 0;
  const padding = width >= 1024 ? 240 : width >= 768 ? 48 : width >= 640 ? 24 : 12;

  return (
    <div className={`flex w-full h-[${width - padding * 2 + 16}px]`}>
      <iframe
        src='https://snapwidget.com/embed/1082314'
        className='snapwidget-widget'
        style={{ border: 'none', overflow: 'hidden', width: '100%', height: `${width - padding * 2 + 16}px` }}
        title='Posts from Instagram'></iframe>
    </div>
  );
}
