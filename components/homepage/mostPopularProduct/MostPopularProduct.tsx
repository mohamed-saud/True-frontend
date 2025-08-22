import Heading from '@/components/ui/Heading';
import SubTitle from '@/components/ui/SubTitle';
import Title from '@/components/ui/Title';
import React from 'react';
import ListProduct from '../../product/ListProduct';

export default function MostPopularProduct() {
  return (
    <div className=' container m-auto w-full flex justify-center flex-col items-center gap-8'>
      <Title>Learn how to get a discount</Title>
      <Heading size='text-4xl'>Most Popular Products</Heading>
      <SubTitle>
        Proponents of content strategy may shun of dummy copy designers
      </SubTitle>
      <div>
        <ListProduct />
      </div>
    </div>
  );
}
