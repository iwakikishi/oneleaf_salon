/// <reference types="@types/google.maps" />

// グローバルな google オブジェクトを宣言
declare global {
  interface Window {
    google: any;
  }
}

('use client');
import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapProps {
  address: string;
}

function Map({ address }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      version: 'weekly',
      libraries: ['places'],
    });

    loader.load().then((google) => {
      if (google && mapRef.current) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: address }, (results: google.maps.GeocoderResult[] | null, status: google.maps.GeocoderStatus) => {
          if (status === 'OK' && results) {
            const map = new google.maps.Map(mapRef.current as HTMLElement, {
              center: results[0].geometry.location,
              zoom: 8,
            });
            new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
            });
          } else {
            console.error(`Geocode was not successful for the following reason: ${status}`);
          }
        });
      }
    });
  }, [address]);

  return <div style={{ height: '400px' }} ref={mapRef} />;
}

export default Map;
