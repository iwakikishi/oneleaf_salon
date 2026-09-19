import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { currentServices, type ServiceCategory } from '@/lib/prices';

// URL of the updated (November 2026) price list page
const NEW_PRICE_LIST_URL = '/new-prices';

type PriceAccordionProps = {
  services?: ServiceCategory[];
  showNotice?: boolean;
};

export function PriceAccordion({ services = currentServices, showNotice = true }: PriceAccordionProps) {
  return (
    <>
      {showNotice && (
      <div className='flex flex-col gap-3 bg-[#f0f9ff] p-4 text-sm rounded-xl'>
        <p className='font-semibold text-base'>Notice of Price Adjustment</p>
        <p>Dear Valued Clients,</p>
        <p>Thank you sincerely for your continued support of One Leaf Salon.</p>
        <p>
          Thanks to all of you, we are grateful to be celebrating our second anniversary in November 2026. We could not have reached this milestone
          without your trust and support, and we truly appreciate each and every one of you.
        </p>
        <p>
          We have made every effort to maintain our current prices. However, due to the continued rise in the cost of shampoos, color products, and
          other professional supplies, we will be adjusting our service prices beginning November 1, 2026. This adjustment will allow us to continue
          providing the high-quality products and services you deserve.
        </p>
        <p>
          We recognize that price changes may require some adjustment, and we sincerely appreciate your understanding. We remain committed to
          providing exceptional service, beautiful results, and a relaxing experience every time you visit us.
        </p>
        <p>
          <Link href={NEW_PRICE_LIST_URL} className='font-semibold text-green-900 underline underline-offset-2'>
            Click here to view our updated price list
          </Link>
        </p>
        <p>
          <span className='font-semibold'>Effective Date:</span> New pricing will apply to all appointments taking place on or after November 1, 2026.
        </p>
        <p>Thank you for your continued trust and support. We look forward to welcoming you to One Leaf Salon for many years to come.</p>
        <p>
          With gratitude,
          <br />
          One Leaf Salon
        </p>
      </div>
      )}
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
