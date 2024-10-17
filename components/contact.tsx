'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { contactSchema } from '@/lib/schema';
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ContactForm } from '@/lib/schema';
import { useToast } from '@/components/ui/use-toast';
import { sendEmail } from '@/lib/action';

// import { sendEmail } from '@/utils/send-email';

export default function Contact() {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactForm) => {
    await sendEmail(data);

    toast({
      title: 'Thank you for your inquiry',
      description: 'We will get back to you as soon as possible.',
    });
  };

  return (
    <Form {...form}>
      <form className='space-y-5 mb-5' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
          name='name'
        />
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' {...field} />
              </FormControl>
            </FormItem>
          )}
          name='email'
        />
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
            </FormItem>
          )}
          name='message'
        />
        <div>
          <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>Submit</button>
        </div>
      </form>
    </Form>
  );
}
