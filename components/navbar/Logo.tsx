import Image from 'next/image';
import React from 'react';
import logo from '@/assets/wood-logo-dark.svg';

export default function Logo() {
  return (
    <Image
      className='w-[200px]  '
      priority
      src={logo}
      alt='logo'
    />
  );
}
