import type { Metadata } from 'next';
import { Inter, Montserrat, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import Script from 'next/script';

import './globals.css';

const Header = dynamic(() => import('@/components/header'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'OneLeaf Salon Hair by Kazuyo | Premium Hair Salon in Sierra Madre, CA',
  description:
    'Experience top-quality hair care at OneLeaf Salon Hair by Kazuyo, located at 38 W Sierra Madre Blvd, Sierra Madre, CA 91024. Our expert stylists offer the latest trends, cuts, colors, and personalized styles. Book your appointment online today.',
  keywords:
    'oneleaf, oneleaf salon, oneleafsalon, hair salon, hairstyling, haircut, hair color, perm, Pasadena, Sierra Madre, OneLeaf, Kazuyo, California, 38 W Sierra Madre Blvd',
  authors: [{ name: 'Kazuyo Shichiri' }],
  openGraph: {
    title: 'OneLeaf Salon Hair by Kazuyo | Premium Hair Salon in Sierra Madre, CA',
    description:
      'Luxury hair salon at 38 W Sierra Madre Blvd, Sierra Madre, CA 91024. Offering latest trends, cuts, colors, and personalized styles. Book online now.',
    url: 'https://www.oneleafsalon.com',
    siteName: 'OneLeaf Salon Hair by Kazuyo',
    images: [
      {
        url: 'https://ik.imagekit.io/iwaki/oneleaf-logo-3.jpg?updatedAt=1730002193804',
        width: 1200,
        height: 598,
        alt: 'OneLeaf Salon Hair by Kazuyo - Premium Hair Salon at 38 W Sierra Madre Blvd',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.oneleafsalon.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'cgQ28Oau24Xjix4LZKuA-WrvaTRcrnC2cJGsTw0pmgM',
    // bing: 'your-bing-verification-code',
  },
  category: 'Beauty & Personal Care',
  other: {
    classification: 'Hair Salon',
    referrer: 'no-referrer-when-downgrade',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#ffffff' />
      </head>
      {/* 構造化データ */}
      <body className={cn(`${inter.variable} ${montserrat.variable} ${poppins.variable}`, 'min-h-dvh')}>
        <Script id='schema-org' type='application/ld+json'>
          {`
            {
              "@context": "https://schema.org",
              "@type": "HairSalon",
              "name": "OneLeaf Salon Hair by Kazuyo",
              "image": "https://www.oneleaf.vercel.app/salon-image.jpg",
              "url": "https://www.oneleaf.vercel.app",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "38 W Sierra Madre Blvd",
                "addressLocality": "Sierra Madre",
                "addressRegion": "CA",
                "postalCode": "91024",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 34.1808,
                "longitude": -118.0645
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "10:00",
                  "closes": "20:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/kazuyohairstyle/?hl=en",
              ]
            }
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
