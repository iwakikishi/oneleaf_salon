import * as React from 'react';
import { Heading, Tailwind, Text } from '@react-email/components';
import { ContactForm } from '@/lib/schema';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }: ContactForm) => (
  <Tailwind>
    <Heading>Welcome, {name}!</Heading>
    <Text>Thank you for your inquiry</Text>
    <Text>Name: {name}</Text>
    <Text>Email: {email}</Text>
    <Text>Message: {message}</Text>
  </Tailwind>
);
