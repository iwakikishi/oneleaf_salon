'use client';

import dynamic from 'next/dynamic';

export const ClientHeader = dynamic(() => import('@/components/header'), { ssr: false });
export const ClientFooter = dynamic(() => import('@/components/footer'), { ssr: false });
