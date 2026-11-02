import { CheckboxForm } from './components/checkbox-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Head Spa Agreement Form | OneLeaf Salon',
  description: 'Complete the Head Spa agreement form at OneLeaf Salon before your appointment in Sierra Madre, CA.',
};

export default function AgreementPage() {
  const today = new Date();
  const date = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <main className='flex flex-col font-poppins bg-scroll xs:px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 p-4'>
      <section className='flex flex-col w-full mt-24 sm:mt-8 md:mt-36 lg:mt-36'>
        <div className='flex flex-row items-center h-[50px]'>
          <div className='flex flex-col items-center'>
            <div className='text-black text-3xl font-bold'>Head Spa Agreement Form</div>
          </div>
        </div>
      </section>
      <section className='flex flex-col w-full mt-10'>
        <div className='flex flex-col'>
          <p className='text-black text-lg mb-4'>
            I acknowledge that I have been informed of the daily maintenance for hair extensions and have been told how to properly take care of them
            and my natural hair. I understand that the extensions are more sensitive than my intact human hair. I agree to properly brush and take
            care of my extensions and if I fail to do so or fail to make it back into the salon for regular upkeep, that I may see wear and tear on my
            natural hair in which case the salon and my stylist are not liable for.
          </p>
          <p className='text-black text-lg mb-4'>My appointment is scheduled for MM/DD/YYY at ex. 9:00 am .</p>
          <p className='text-black text-lg mb-4'>Client First and Last Name</p>
          <p className='text-black text-lg mb-4'>
            Today&apos;s date is <span className='text-black text-lg mb-4'>{date}</span>
          </p>
        </div>
        <div className='flex items-center space-x-2 my-4'>
          <CheckboxForm />
        </div>
      </section>
    </main>
  );
}
