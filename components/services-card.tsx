import Image from 'next/image';

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
};

const services: ServiceCardProps[] = [
  { image: 'hair_cut_retro', title: 'Cut & Style', description: 'Haircuts not included with color services. Shampoo and styling included' },
  { image: 'hair_color_retro', title: 'Color & Bleach', description: 'カラー剤とかの説明' },
  { image: 'hair_perm_retro', title: 'Texture', description: '何か特徴' },
  { image: 'make_up_retro', title: 'Makeup', description: '何か特徴' },
];

export function ServicesCardComponent() {
  return (
    <>
      {services.map((service) => (
        <div key={service.title} className='flex flex-col aspect-[4/3] mt-2 bg-[#fffaeb] p-8 gap-6'>
          <Image src={`/images/${service.image}.webp`} alt={service.title} className='object-cover rounded-lg' width={500} height={120} />
          <p className='text-green-900 text-xl font-bold font-poppins'>{service.title}</p>
          <p className='text-gray-500 text-md break-words font-poppins'>{service.description}</p>
        </div>
      ))}
    </>
  );
}
