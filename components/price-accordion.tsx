import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { priceList } from '@/lib/prices';

export function PriceAccordion() {
  return (
    <Accordion type='multiple' className='w-full'>
      {priceList.map((service, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className='mb-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:no-underline transition-shadow duration-300'>
          <AccordionTrigger className='bg-white hover:bg-lime-700/30 transition-colors duration-300 no-underline group p-6'>
            <div className='flex items-center gap-4'>
              <div className='flex flex-col items-start'>
                <span className='text-xl xs:text-2xl font-poppins font-semibold text-green-900'>{service.name}</span>
                <span className='text-sm text-gray-500 font-poppins'>{service.description}</span>
              </div>
            </div>
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
  );
}
