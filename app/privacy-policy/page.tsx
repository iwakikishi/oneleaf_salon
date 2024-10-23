import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className='flex items-center gap-2 mb-6'>
    <div className='w-[40px] h-[40px] flex-shrink-0'>
      <Image src='/images/leaf2.png' alt='leaf' width={40} height={40} />
    </div>
    <h2 className='text-green-900 font-poppins font-semibold text-2xl md:text-3xl'>{children}</h2>
  </div>
);

const PolicyItem = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className='mb-6'>
    <h3 className='text-green-800 font-semibold text-lg mb-2'>{title}</h3>
    <div className='text-green-700 text-base'>{children}</div>
  </div>
);

export default function Page() {
  return (
    <main className='flex flex-col w-full h-full bg-white font-poppins mt-8'>
      <div className='max-w-4xl mx-auto px-4 py-12 md:py-24'>
        <div className='bg-gradient-to-br from-[#fffaeb] to-[#f0f9ff] p-8 md:p-12 rounded-2xl shadow-lg'>
          <SectionTitle>Privacy Policy</SectionTitle>
          <p className='text-green-700 mb-6'>Last updated: October 20, 2024</p>

          <PolicyItem title='1. Information We Collect'>
            <p>{`We may collect the following personal information:`}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Payment information</li>
            </ul>
          </PolicyItem>

          <PolicyItem title='2. How We Use Your Information'>
            <p>{`The information we collect may be used for:`}</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              <li>Providing and confirming your appointment or services</li>
              <li>Processing payments and billing</li>
              <li>Sending promotional materials or updates</li>
              <li>Improving customer service</li>
            </ul>
          </PolicyItem>

          <PolicyItem title='3. Information Sharing'>
            <p>We may share your personal information with third parties only in the following situations:</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              <li>To comply with legal obligations</li>
              <li>To work with external service providers (e.g., payment processors)</li>
            </ul>
          </PolicyItem>

          <PolicyItem title='4. Security'>
            <p>We take precautions to protect your personal information using SSL encryption and other security measures.</p>
          </PolicyItem>

          <PolicyItem title='5. Use of Cookies'>
            <p>
              {`Our website uses cookies to enhance the user experience. By using our website, you agree to the use of cookies to provide a more personalized experience.`}
            </p>
          </PolicyItem>

          <PolicyItem title='6. Your Rights'>
            <p>{`You have the right to access, modify, or request the deletion of your personal data at any time.`}</p>
          </PolicyItem>

          <div className='mt-12' />
          <SectionTitle>Privacy Policy</SectionTitle>

          <PolicyItem title='1. Use of Services'>
            <p>
              {`By using our website, you agree to the terms outlined here. We provide hairdressing services such as haircuts, coloring, and styling.`}
            </p>
          </PolicyItem>

          <PolicyItem title='2. Appointments and Cancellations'>
            <p>
              {`Cancellations must be made at least 24 hours before your appointment. Cancellations within 24 hours or no-shows may incur a cancellation fee.`}
            </p>
            <p className='text-green-900 text-base font-poppins mt-4'>
              ●
              <Link href='/cancellation-policy'>
                <span className='underline'>Cancellation Policy</span>
              </Link>
            </p>
          </PolicyItem>

          <PolicyItem title='3. Payment'>
            <p>
              {`Service prices will be confirmed at the time of booking. Payments can be made via cash, credit card, or through online payment methods accepted by the salon.`}
            </p>
          </PolicyItem>
          <PolicyItem title='4. Limitation of Liability'>
            <p>
              {`We are not liable for any damages or losses arising from the use of our services. We strive to meet your satisfaction but are not responsible for issues beyond our control.`}
            </p>
          </PolicyItem>
          <PolicyItem title='5. Intellectual Property'>
            <p>
              {`All content on this website, including text, images, and logos, is the property of our salon or its licensors. Unauthorized use is prohibited.`}
            </p>
          </PolicyItem>
          <PolicyItem title='6. Governing Law'>
            <p>
              {`These Terms of Service are governed by the laws of the United States. Any disputes will be resolved in the courts of the United States.
`}
            </p>
          </PolicyItem>

          <PolicyItem title='Contact Us'>
            <p>If you have any questions about this Privacy Policy, You can contact us:</p>
            <p className='mt-2'>By email: oneleaf.inc23@gmail.com</p>
          </PolicyItem>

          <div className='mt-8 text-center'>
            <Button asChild className='bg-green-700 text-white hover:bg-green-600 transition-colors px-8 py-3 rounded-full text-lg'>
              <Link href='/'>Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
