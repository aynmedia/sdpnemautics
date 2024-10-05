/** @format */
import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  interest: z.string().min(2, 'Interest must be at least 2 characters long'),
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters long'),
  message: z.string().min(2, 'Message must be at least 2 characters long'),
});
const Enquireproduct = ({ triggerText, productName }) => {
  console.log(productName);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interest: productName,
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });
  const onSubmit = async (data) => {
    try {
      console.log(data);
      // const response = await fetch('/sendmail.php', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   body: new URLSearchParams(data).toString(),
      // });
      // if (response.ok) {
      //   console.log(response);
      //   console.log('Form submitted successfully!');
      //   alert('Form submitted successfully! , We will get back to you soon.');
      // } else {
      //   console.error('Error submitting form:', response.status);
      // }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger className='text-green flex ml-6 items-center'>
          {triggerText} <FaArrowCircleRight size={24} className='pl-2' />
        </DialogTrigger>
        <DialogContent className='bg-white'>
          <DialogHeader>
            <DialogTitle className='mb-6'>
              Get a Quote for {productName}
            </DialogTitle>
            <DialogDescription>
              <div className='text-left'>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='flex flex-col gap-4'>
                    <FormField
                      control={form.control}
                      name='name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter your name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type='text'
                              placeholder='John Doe'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter your email address</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type='text'
                              placeholder='xxxx@xxxx.com'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='phone'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter your phone number</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type='text'
                              placeholder='+91xxxxxxxxxx'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='message'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter your message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              type='message'
                              placeholder='Enter your message'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      variant='outline'
                      type='submit'
                      size='lg'
                      className='bg-green hover:bg-green text-white hover:text-white text-xl py-6 max-w-2xl'>
                      Submit
                    </Button>
                  </form>
                </Form>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Enquireproduct;
