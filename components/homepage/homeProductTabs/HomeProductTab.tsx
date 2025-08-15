import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ListProduct from '../../product/ListProduct';
import Heading from '@/components/ui/Heading';
import Title from '@/components/ui/Title';
import SubTitle from '@/components/ui/SubTitle';

export default function HomeProductTab() {
  return (
    <div className=' container m-auto w-full flex justify-center flex-col items-center gap-8'>
      <Title>Hurry up to buy</Title>
      <Heading>New Arrivals</Heading>
      <SubTitle>How can you evaluate content without design</SubTitle>
      <div className='flex w-full text-center flex-col gap-8 justify-center items-center'>
        <Tabs
          defaultValue='cases'
          className='flex justify-center items-center gap-8  w-full'>
          <TabsList className='text-center '>
            <TabsTrigger
              value='cases'
              className=' uppercase'>
              Cases
            </TabsTrigger>
            <TabsTrigger
              value='straps'
              className=' uppercase'>
              Straps
            </TabsTrigger>
            <TabsTrigger
              value='magsafe'
              className=' uppercase'>
              Magsafe
            </TabsTrigger>
          </TabsList>
          <TabsContent
            className=' w-full'
            value='cases'>
            <ListProduct categoryName='case' />
          </TabsContent>
          <TabsContent
            className=' w-full'
            value='straps'>
            <ListProduct categoryName='straps' />
          </TabsContent>
          <TabsContent
            className=' w-full'
            value='magsafe'>
            <ListProduct categoryName='magsafe' />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
