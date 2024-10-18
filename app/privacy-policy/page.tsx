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
          <p className='text-green-700 mb-6'>Last updated: March 03, 2021</p>

          <PolicyItem title='Introduction'>
            <p>
              {/* アポストロフィを含む文字列をバッククォートで囲む */}
              {`This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the
              Service and tells You about Your privacy rights and how the law protects You.`}
            </p>
            <p className='mt-2'>
              {`We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information
              in accordance with this Privacy Policy.`}
            </p>
          </PolicyItem>

          <PolicyItem title='Interpretation and Definitions'>
            <p>
              {`The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in singular or in plural.`}
            </p>
          </PolicyItem>

          <PolicyItem title='Collecting and Using Your Personal Data'>
            <h4 className='font-semibold mt-2'>Types of Data Collected</h4>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              <li>Personal Data</li>
              <li>Usage Data</li>
              <li>Tracking Technologies and Cookies</li>
            </ul>
          </PolicyItem>

          <PolicyItem title='Use of Your Personal Data'>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              <li>To provide and maintain our Service</li>
              <li>To manage Your Account</li>
              <li>For the performance of a contract</li>
              <li>To contact You</li>
              <li>To provide You with news, special offers and general information</li>
              <li>To manage Your requests</li>
            </ul>
          </PolicyItem>

          <PolicyItem title='Retention of Your Personal Data'>
            <p>
              {`The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal
              agreements and policies.`}
            </p>
          </PolicyItem>

          <PolicyItem title='Transfer of Your Personal Data'>
            <p>
              {`Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties
              involved in the processing are located.`}
            </p>
          </PolicyItem>

          <PolicyItem title='Disclosure of Your Personal Data'>
            <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of the Company</li>
              <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>Protect the personal safety of Users of the Service or the public</li>
              <li>Protect against legal liability</li>
            </ul>
          </PolicyItem>

          <PolicyItem title='Security of Your Personal Data'>
            <p>
              {`The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of
              electronic storage is 100% secure.`}
            </p>
          </PolicyItem>

          <PolicyItem title="Children's Privacy">
            <p>
              {`Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone
              under the age of 13.`}
            </p>
          </PolicyItem>

          <PolicyItem title='Changes to this Privacy Policy'>
            <p>
              {`We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.`}
            </p>
          </PolicyItem>

          <PolicyItem title='Contact Us'>
            <p>If you have any questions about this Privacy Policy, You can contact us:</p>
            <p className='mt-2'>By email: info@oneleafsalon.com</p>
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
