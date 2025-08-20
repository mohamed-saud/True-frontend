import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Cart() {
  return (
    <Link
      href='/cart'
      className=' cursor-pointer flex items-center relative h-[20px] '>
      <span className='bg-blue-400 px-[4px] text-[10px] -top-1  absolute  -right-2 text-center text-white rounded-full'>
        1
      </span>

      <ShoppingCart />
    </Link>
  );
}
