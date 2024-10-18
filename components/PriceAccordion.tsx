import React from 'react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const services = [
  {
    name: 'Cut & Style',
    description: 'Includes shampoo, blow dry, and style',
    icon: 'hair_cut_2',
    items: [
      { name: 'Woman Haircut', description: '1 hr 30 min', price: '$105' },
      { name: 'Men Haircut', description: '30 min', price: '$85' },
      { name: "Girl's Haircut (under 17)", description: '1 hr 30 min', price: '$95' },
      { name: "Boy's Haircut (under 17)", description: '30 min', price: '$80' },
      { name: 'Bangs Trim', description: '30 min', price: '$25' },
    ],
  },
  {
    name: 'Color & Bleach',
    description: 'Includes shampoo, blow dry, and style',
    icon: 'hair_color',
    items: [
      { name: 'Full Color', description: 'one color session /No bleach short$145+ medium 165+ long 185+ time:around 90min-2hours', price: '$145 -' },
      { name: 'Highlights', description: '1 hr 30 min', price: '$120' },
      { name: 'Balayage', description: '1 hr 30 min', price: '$150' },
      { name: 'Ombre', description: '1 hr 30 min', price: '$180' },
    ],
  },
  {
    name: 'Texture',
    description: 'Includes shampoo, blow dry, and style',
    icon: 'hair_perm',
    items: [
      { name: 'Digital Perm', description: '1 hr 30 min', price: '$150' },
      { name: 'Cold Perm', description: '1 hr 30 min', price: '$120' },
      { name: 'Straightening', description: '1 hr 30 min', price: '$180' },
      { name: 'Partial Perm', description: '1 hr 30 min', price: '$80' },
    ],
  },
  {
    name: 'Makeup',
    description: '1 hr 30 min',
    icon: 'makeup',
    items: [
      { name: 'Wedding Makeup', description: '1 hr 30 min', price: '$250+' },
      { name: 'Party Makeup', description: '1 hr 30 min', price: '$150+' },
      { name: 'Bridal Makeup', description: '1 hr 30 min', price: '$200+' },
    ],
  },
];

export function PriceAccordion() {
  return (
    <Accordion type='multiple' className='w-full'>
      {services.map((service, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className='mb-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:no-underline transition-shadow duration-300'>
          <AccordionTrigger className='bg-white hover:bg-lime-700/30 transition-colors duration-300 no-underline group p-6'>
            <div className='flex items-center gap-4'>
              <div className='bg-[#fffaeb] p-2 rounded-full shadow-sm'>
                <Image src={`/images/icons/${service.icon}.png`} alt={service.name} width={40} height={40} />
              </div>
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
                    <span className='text-lg xs:text-xl font-poppins font-medium'>{item.name}</span>
                    <span className='text-sm text-gray-500 font-poppins mt-1'>{item.description}</span>
                  </div>
                  <span className='font-semibold font-poppins text-lg md:text-xl'>{item.price}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
