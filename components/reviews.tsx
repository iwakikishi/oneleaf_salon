import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, StarHalf } from 'lucide-react';
import reviews from '@/data/reviews.json';

interface Review {
  author_title: string;
  rating: number;
  review_text: string;
}

export default function TopReviews() {
  const json_reviews: Review[] = JSON.parse(reviews);
  return (
    <div className='flex w-full'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-full'>
        <CarouselContent className='flex w-full -ml-4 md:-ml-6'>
          {json_reviews?.map((review: Review, index: number) => (
            <CarouselItem key={index} className='pl-2 md:basis-1/2 lg:basis-1/3'>
              <div className='flex p-1'>
                <Card>
                  <CardHeader>
                    <CardTitle className='text-xl font-bold font-poppins mb-3'>{review.author_title}</CardTitle>
                    <div className='flex flex-row'>
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className='text-yellow-500' fill='yellow' />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className='flex flex-col aspect-square p-6'>
                    <p className='text-sm font-poppins'>{review.review_text}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
