/// <reference types="@types/google.maps" />
'use client';

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { env, hasEnv } from '@/lib/env';

interface MapProps {
  address: string;
}

function Map({ address }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if API key is configured
    if (!hasEnv('GOOGLE_MAPS_API_KEY')) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Google Maps API key not configured');
      }
      return;
    }

    const loader = new Loader({
      apiKey: env.GOOGLE_MAPS_API_KEY!,
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
            // Geocoding failed - silently handle or log to monitoring service
            if (process.env.NODE_ENV === 'development') {
              console.error(`Geocode was not successful for the following reason: ${status}`);
            }
          }
        });
      }
    });
  }, [address]);

  return <div style={{ height: '400px' }} ref={mapRef} />;
}

export default Map;
