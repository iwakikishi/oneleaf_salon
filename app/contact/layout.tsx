import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | OneLeaf Salon',
  description: 'Get in touch with OneLeaf Salon in Sierra Madre, CA. Send us a message or call to book your appointment with Kazuyo.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
