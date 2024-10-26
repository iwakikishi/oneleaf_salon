import React from 'react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const services = [
  {
    name: 'Cut & Style',
    description: '',
    icon: '',
    items: [
      { name: 'Woman Haircut', time: '50 min', description: ['Includes shampoo and blow dry'], price: '$105' },
      { name: 'Men Haircut', time: '45 min', description: ['Includes shampoo and blow dry'], price: '$85' },
      { name: "Girl's Haircut (under 17)", time: '50 min', description: ['Includes shampoo and blow dry'], price: '$95' },
      { name: "Boy's Haircut (under 17)", time: '40 min', description: ['Includes shampoo and blow dry'], price: '$80' },
      { name: 'Bangs cut', time: '10 min', description: [''], price: '$25' },
      { name: 'Blow Out (with shampoo)', time: '1 hr', description: [''], price: '$75' },
      { name: 'Updo', time: '1 hr', description: ['Private: $100-$250+', 'Wedding hair: $250+'], price: '' },
    ],
  },
  {
    name: 'Color & Bleach',
    description: '',
    icon: 'hair_color',
    items: [
      {
        name: 'Full Color',
        time: '1 hr',
        description: ['One color session / No bleach', 'Short: $145+', 'Medium: $165+', 'Long: $185+'],
        price: '',
      },
      { name: 'Balayage No Bleach', time: '1 hr', description: ['$250 - $320', 'Time: around 2 hours - 150 min'], price: '' },
      {
        name: 'Toner Gross Color',
        time: '1 hr',
        description: ['Short: $100+', 'Medium: $165+', 'Long: $185+', 'Time: around 90 min - 2 hours'],
        price: '',
      },
      {
        name: 'Root Touch Up (No Bleach)',
        time: '1 hr 30 min',
        description: ['More than 2 inches $120+', 'Time: around 90 min'],
        price: '$90',
      },
    ],
  },
  {
    name: 'Perms & Straightening',
    description: '',
    icon: 'hair_perm',
    items: [
      { name: 'Digital Perm', time: '1 hr 30 min', description: [''], price: '$150' },
      { name: 'Cold Perm', time: '1 hr 30 min', description: [''], price: '$120' },
      { name: 'Straightening', time: '1 hr 30 min', description: [''], price: '$180' },
      { name: 'Partial Perm', time: '1 hr 30 min', description: [''], price: '$80' },
    ],
  },
  {
    name: 'Makeup',
    description: '',
    icon: 'makeup',
    items: [
      { name: 'Make up', time: '1 hr 30 min', description: ['$200-$250+', 'wedding $250+'], price: '$250+' },
      { name: 'Wedding Makeup', time: '1 hr 30 min', description: [''], price: '$250+' },
      { name: 'Party Makeup', time: '1 hr 30 min', description: [''], price: '$150+' },
      { name: 'Bridal Makeup', time: '1 hr 30 min', description: [''], price: '$200+' },
    ],
  },
  {
    name: 'Head Spa',
    description: '',
    icon: 'makeup',
    items: [
      { name: 'Head Spa 20 min no blow dry', time: '25 min', description: [''], price: '$50' },
      { name: 'Head Spa 20 min with blow dry', time: '1 hr', description: [''], price: '$100' },
      { name: 'Head Spa 40 min no blow dry', time: '45 min', description: [''], price: '$95' },
      { name: 'Head Spa 40 min with blow dry', time: '1 hr', description: [''], price: '$145' },
      {
        name: 'Deep treatment Milbon',
        time: '20 min',
        description: ['Blow dry and styling are NOT included', 'Add other menu or add blow dry +$50)'],
        price: '$120',
      },
    ],
  },
];

export function PriceAccordion() {
  return (
    <>
      <div className='flex flex-col bg-[#f0f9ff] p-4 text-sm rounded-xl'>
        Dear Valued Client, We are grateful for your continued patronage and support. Due to the recent increase in the cost of raw materials, we
        regret to inform you that we will be implementing a price adjustment across some of our services effective January 1st 2025. This change is
        necessary to maintain the premium quality and exceptional care you have come to expect from us. We appreciate your understanding and thank you
        for your ongoing support. Sincerely, OneLeaf Salon Hair by Kazuyo
      </div>
      <Accordion type='multiple' className='w-full'>
        {services.map((service, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className='mb-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:no-underline transition-shadow duration-300'>
            <AccordionTrigger className='bg-white hover:bg-lime-700/30 transition-colors duration-300 no-underline group p-6'>
              <div className='flex items-center gap-4'>
                {/* <div className='bg-[#fffaeb] p-2 rounded-full shadow-sm'>
                <Image src={`/images/icons/${service.icon}.png`} alt={service.name} width={40} height={40} />
              </div> */}
                <div className='flex flex-col items-start'>
                  <span className='text-xl xs:text-2xl font-poppins font-semibold text-green-900'>{service.name}</span>
                  <span className='text-sm text-gray-500 font-poppins'>{service.description}</span>
                </div>
              </div>
              {/* <div className='mr-4 group-data-[state=open]:rotate-180 transition-transform duration-200'>
              <ChevronDown className='h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200' />
            </div> */}
            </AccordionTrigger>
            <AccordionContent className='bg-white'>
              <ul className='space-y-4 p-6'>
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className='flex justify-between items-start text-green-800 border-b border-green-100 pb-4'>
                    <div className='flex flex-col'>
                      <span className='text-md xs:text-lg font-poppins font-medium'>{item.name}</span>
                      <span className='text-sm text-gray-500 font-poppins mt-1'>{item.time}</span>
                      {item.description.map((desc, descIndex) => (
                        <span key={descIndex} className='text-sm text-gray-500 font-poppins mt-1'>
                          {desc}
                        </span>
                      ))}
                    </div>
                    <span className='font-semibold font-poppins text-lg md:text-xl'>{item.price}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
