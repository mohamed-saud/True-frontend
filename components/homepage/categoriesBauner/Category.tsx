import { Button } from '@/components/ui/buttons/button';
import Heading from '@/components/ui/Heading';
import SubTitle from '@/components/ui/SubTitle';
import Title from '@/components/ui/Title';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Category({
  image,
  subtitle,
  title,
  link,
  imageWidth,
  imageHight,
}: {
  image: string;
  subtitle: string;
  title: string;
  link: string;
  imageWidth: number;
  imageHight: number;
}) {
  return (
    <Link
      href={link}
      className='bg-gray-100 h-[350px] p-8 rounded-xl flex items-start relative overflow-hidden '>
      <div className=' max-w-[250px] grid gap-8 relative z-2 '>
        <Title>{subtitle}</Title>
        <Heading size='text-2xl'>{title}</Heading>
        <div>
          <Button className=' cursor-pointer'>TO SHOP</Button>
        </div>
      </div>
      <div>
        <Image
          width={imageWidth}
          height={imageHight}
          loading='lazy'
          className=' absolute right-0 bottom-0 hover:scale-110 transition-all delay-75'
          src={image}
          alt='image category'
        />
      </div>
    </Link>
  );
}
