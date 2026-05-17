import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hair Condition Checker | OneLeaf Salon',
  description: 'Check your hair condition and get personalized hair care advice from OneLeaf Salon in Sierra Madre, CA.',
};

export default function ConditionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
