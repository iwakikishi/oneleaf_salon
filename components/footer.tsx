import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const links = [
    { href: '/cancellation-policy', label: 'Cancellation Policy' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/privacy-policy', label: 'Terms of Service' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <footer className='bg-lime-700/50 text-white py-8 font-poppins'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='flex flex-col'>
            <h3 className='text-xl font-semibold'>OneLeaf Salon</h3>
            <p className='text-sm'>Hair by Kazuyo</p>
            <p className='text-sm mt-4 flex items-center'>
              <MapPin size={16} className='mr-2' />
              38 W Sierra Madre Blvd, Sierra Madre, CA 91024
            </p>
            <p className='text-sm flex items-center mt-2'>
              <Phone size={16} className='mr-2' />
              (626) 394-3601
            </p>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <nav className='flex flex-col space-y-2'>
              {links.map((link) => (
                <Link key={link.href} href={link.href} className='text-sm hover:text-green-300 transition-colors'>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-xl font-semibold mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              {/* <a href='#' className='text-white hover:text-green-300 transition-colors'>
                <Facebook size={20} />
              </a> */}
              <Link
                href='https://www.instagram.com/kazuyohairstyle/?hl=en'
                target='_blank'
                className='text-white hover:text-green-300 transition-colors'>
                <span className='text-white hover:text-green-300 transition-colors'>
                  <Instagram size={20} />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-green-700 text-center text-sm'>
          <p>&copy; {new Date().getFullYear()} OneLeaf Salon Hair by Kazuyo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
