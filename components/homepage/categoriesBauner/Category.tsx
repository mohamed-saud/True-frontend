import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/Heading';
import SubTitle from '@/components/ui/SubTitle';
import React from 'react';

export default function Category() {
  return (
    <div className='bg-gray-100 p-5 '>
      <div>
        <SubTitle>Something completely new</SubTitle>
        <Heading size='text-2xl'>Cases for Phone</Heading>
        <Button>TO SHOP</Button>
      </div>
      <div>
        <img
          src='https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/04/accessories-banner-2.jpg'
          alt=''
        />
      </div>
    </div>
  );
}
