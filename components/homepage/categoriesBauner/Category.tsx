import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/Heading';
import SubTitle from '@/components/ui/SubTitle';
import Title from '@/components/ui/Title';
import { cn } from '@/lib/utils';
import React from 'react';

export default function Category({ width }: { width: string }) {
  return (
    <a
      href=''
      className='bg-gray-100 h-[400px] p-8 rounded-xl flex items-start relative overflow-hidden'>
      <div className=' min-w-[250px] grid gap-8 relative z-2 '>
        <Title>Something completely new</Title>
        <Heading size='text-2xl'>Cases for Phone</Heading>
        <div>
          <Button>TO SHOP</Button>
        </div>
      </div>
      <div>
        <img
          className=' absolute right-0 bottom-0 hover:scale-110 transition-all delay-75'
          src='https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/04/accessories-banner-2.jpg'
          alt=''
        />
      </div>
    </a>
  );
}
