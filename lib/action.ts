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

  // 管理者宛メール
  const { error: adminError } = await resend.emails.send({
    from: 'oneLeaf Salon <contact@example.com>', // 認証済みアドレス
    to: 'oneLeaf.inc23@gmail.com',
    subject: '【oneLeaf】New contact form submission',
    react: EmailTemplate(data),
    text: `New contact form submission\n\nName: ${data.name}\nEmail: ${data.email}\nMessage:\n${data.message}`,
  });

  // ユーザー宛サンクスメール
  const { error: userError } = await resend.emails.send({
    from: 'oneLeaf Salon <contact@example.com>', // 認証済みアドレス
    to: data.email,
    subject: 'Thank you for contacting oneLeaf',
    text: `Dear ${data.name},\n\nThank you for reaching out to oneLeaf.\nWe have received your inquiry and will get back to you as soon as possible.\n\n---\noneLeaf\n`,
  });

  if (adminError || userError) {
    return { error: 'Error sending email' };
  }

  return { success: true };
};

