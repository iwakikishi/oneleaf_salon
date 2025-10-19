'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';

const FormSchema = z.object({
  accepted: z.boolean().default(false).optional(),
});

export function CheckboxForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      accepted: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // Handle form submission
    if (process.env.NODE_ENV === 'development') {
      console.log(data);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='accepted'
          render={({ field }) => (
            <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md'>
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className='space-y-1 leading-none'>
                <FormLabel>Agree to Terms and Conditions</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button type='submit' disabled={!form.getValues('accepted')}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
