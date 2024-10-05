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
import EnquiryForm from '../contact/form';

const ProductDialog = ({ triggerText }) => {
  return (
    <Dialog>
      <DialogTrigger className='text-green flex ml-6 items-center'>
        {triggerText} <FaArrowCircleRight size={24} className='pl-2' />
      </DialogTrigger>
      <DialogContent className='bg-white'>
        <DialogHeader>
          <DialogTitle className='mb-6'>Get a Quote</DialogTitle>
          <DialogDescription>
            <EnquiryForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
