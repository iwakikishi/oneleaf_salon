'use server';

import { ContactForm, contactSchema } from '@/lib/schema';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

export const sendEmail = async (data: ContactForm) => {
  const result = contactSchema.safeParse(data);
  if (!result.success) {
    return { error: 'Invalid data' };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const {error} = await resend.emails.send({
    from: 'contact@example.com',
    to: data.email,
    subject: 'New contact form submission',
    react: EmailTemplate(data),
    text: 'New contact form submission',
  })

  if (error) {
    return { error: 'Error sending email' };
  }

  console.log(data);
};

