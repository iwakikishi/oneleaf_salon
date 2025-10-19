'use server';

import { ContactForm, contactSchema } from '@/lib/schema';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { requireEnv } from '@/lib/env';

export const sendEmail = async (data: ContactForm) => {
  // Validate input data
  const result = contactSchema.safeParse(data);
  if (!result.success) {
    return { error: 'Invalid data', details: result.error.errors };
  }

  // Ensure API key is configured
  let apiKey: string;
  try {
    apiKey = requireEnv('RESEND_API_KEY');
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Resend API key not configured:', error);
    }
    return { error: 'Email service not configured' };
  }

  const resend = new Resend(apiKey);

  try {
    // 管理者宛メール
    const { error: adminError } = await resend.emails.send({
      from: 'oneLeaf Salon <contact@example.com>', // 認証済みアドレス
      to: 'oneLeaf.inc23@gmail.com',
      subject: '【oneLeaf】New contact form submission',
      react: EmailTemplate(data),
      text: `New contact form submission\n\nName: ${data.name}\nEmail: ${data.email}\nMessage:\n${data.message}`,
    });

    if (adminError) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Admin email failed:', adminError);
      }
      return { error: 'Failed to send notification email', details: adminError };
    }

    // ユーザー宛サンクスメール
    const { error: userError } = await resend.emails.send({
      from: 'oneLeaf Salon <contact@example.com>', // 認証済みアドレス
      to: data.email,
      subject: 'Thank you for contacting oneLeaf',
      text: `Dear ${data.name},\n\nThank you for reaching out to oneLeaf.\nWe have received your inquiry and will get back to you as soon as possible.\n\n---\noneLeaf\n`,
    });

    if (userError) {
      if (process.env.NODE_ENV === 'development') {
        console.error('User confirmation email failed:', userError);
      }
      // Admin email succeeded, so we consider this a partial success
      return {
        success: true,
        warning: 'Your message was received, but confirmation email could not be sent'
      };
    }

    return { success: true };
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Email sending exception:', error);
    }
    return {
      error: 'An unexpected error occurred while sending email',
      details: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

