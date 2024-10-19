import Image from 'next/image';

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className='flex items-center gap-2'>
    <div className='w-[50px] h-[50px] flex-shrink-0'>
      <Image src='/images/leaf2.png' alt='leaf' width={50} height={50} />
    </div>
    <h2 className='text-green-900 font-poppins font-semibold text-2xl md:text-2xl' style={{ textShadow: '2px 2px 4px rgba(0, 128, 0, 0.5)' }}>
      {children}
    </h2>
  </div>
);
