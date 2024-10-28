import React from 'react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const services = [
  {
    name: 'Cut & Style',
    description: 'Including shampoo and blow-dry',
    icon: '',
    items: [
      { name: 'Woman Haircut', time: '50 mins', description: ['Includes shampoo and blow dry'], price: '$105' },
      { name: 'Men Haircut', time: '45 mins', description: ['Includes shampoo and blow dry'], price: '$85' },
      { name: "Girl's Haircut (under 17)", time: '50 mins', description: ['Includes shampoo and blow dry'], price: '$95' },
      { name: "Boy's Haircut (under 17)", time: '40 mins', description: ['Includes shampoo and blow dry'], price: '$80' },
      { name: 'Bangs cut', time: '10 mins', description: [''], price: '$25' },
      { name: 'Blow Out (with shampoo)', time: '1 hr', description: [''], price: '$75' },
      { name: 'Updo', time: '1 hr', description: ['Private: $100 - $250+', 'Wedding hair: $250+'], price: '' },
    ],
  },
  {
    name: 'Color & Bleach',
    description: 'The price does not include the haircut',
    icon: 'hair_color',
    items: [
      {
        name: 'Root Touch Up (No Bleach)',
        time: '1 hr 30 mins',
        description: ['More than 2 inches $120+', 'Time: around 90 mins'],
        price: '$90',
      },
      {
        name: 'Full Color',
        time: '90 mins - 2 hrs',
        description: ['One color session / No bleach', 'Short: $145+', 'Medium: $165+', 'Long: $185+', 'Time: around 90 mins - 2 hours'],
        price: '',
      },
      {
        name: 'Toner Gross Color',
        time: '90 mins - 2 hrs',
        description: ['Short: $100+', 'Medium: $165+', 'Long: $185+', 'Time: around 90 mins - 2 hours'],
        price: '',
      },
      { name: 'Balayage No Bleach', time: '2 hrs - 150 mins', description: ['$250 - $320', 'Time: around 2 hours - 150 mins'], price: '' },
      {
        name: 'Balayage (Bleach and Tone)',
        time: '3 -5 hrs',
        description: ['Bleach and Tone', '$350 - $500+', 'Time: around 3 - 5 hours'],
        price: '',
      },
      {
        name: 'Bleach & Tone',
        time: '3 - 5 hrs',
        description: ['Short: $200+', 'Medium: $350+', 'Long: $500+', 'Time: around 3 - 5 hours'],
        price: '',
      },
      {
        name: 'Partial Highlight',
        time: '2 - 3 hrs',
        description: ['Partial* only front face framing, only top, etc', 'Cost: $250 - $320', 'Time: around 2 - 3 hours'],
        price: '',
      },
      {
        name: 'Full Highlight',
        time: '3 - 5 hrs',
        description: ['$350 - $500+', 'Time: around 3 - 5 hours'],
        price: '',
      },
    ],
  },
  {
    name: 'Perms & Straightening',
    description: 'The price does not include the haircut',
    icon: 'hair_perm',
    items: [
      { name: 'Cold Perm', time: '2 hrs', description: ['Short: $120+', 'Medium: $165+', 'Long: $185+', 'Time: around 2 hours'], price: '' },

      {
        name: 'Digital Perm',
        time: '2 hrs',
        description: ['No history of bleach hair', 'Short: $150+', 'Medium: $180+', 'Long: $250+', 'Time: around 2 hours'],
        price: '',
      },
      {
        name: 'Japanese Straightening',
        time: '3 hrs',
        description: ['Short: $280+', 'Touch up: $320 - $360+', 'Medium, Long: $400 - $450+', 'Time: around 3 hours'],
        price: '',
      },
      {
        name: 'Brazilian Keratin Hair Treatment',
        time: '2 hrs',
        description: ['Short: $200+', 'Medium: $300+', 'Long: $400+', 'Time: around 2 hours'],
        price: '',
      },
    ],
  },
  {
    name: 'Makeup',
    description: '',
    icon: 'makeup',
    items: [
      { name: 'Make up', time: '1 hr 30 mins', description: ['$200 - $250+', 'wedding $250+'], price: '' },
      { name: 'Make up teaching lesson', time: '1 hr', description: [''], price: '$150' },
      // { name: 'Party Makeup', time: '1 hr 30 mins', description: [''], price: '$150+' },
      // { name: 'Bridal Makeup', time: '1 hr 30 mins', description: [''], price: '$200+' },
    ],
  },
  {
    name: 'Head Spa',
    description: '',
    icon: '',
    items: [
      { name: 'Head Spa (original) 20 mins no blow dry', time: '25 mins', description: ['No waterfall'], price: '$50' },
      { name: 'Head Spa (original) 20 mins with blow dry', time: '1 hr', description: ['No waterfall'], price: '$100' },
      { name: 'Head Spa (original) 40 mins no blow dry', time: '45 mins', description: ['No waterfall'], price: '$95' },
      { name: 'Head Spa (original) 40 mins with blow dry', time: '1 hr', description: ['No waterfall'], price: '$145' },
      { name: 'New! Head Spa 30 mins no blow dry', time: '35 mins', description: ['Waterfall Head Spa'], price: '$75' },
      { name: 'New! Head Spa (original) 30 mins with blow dry', time: '1 hr', description: ['Waterfall Head Spa'], price: '$125' },
      { name: 'New! Head Spa (original) 50 mins no blow dry', time: '1 hr', description: ['Waterfall Head Spa'], price: '$120' },
      { name: 'New! Head Spa (original) 50 mins with blow dry', time: '1 hr and 20 mins', description: ['Waterfall Head Spa'], price: '$170' },
      {
        name: 'Deep treatment Milbon',
        time: '20 mins',
        description: ['Blow dry and styling are NOT included', 'Add other menu or add blow dry +$50)'],
        price: '$45',
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
