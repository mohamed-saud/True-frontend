import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Cart() {
  return (
    <Link
      href=''
      className=' cursor-pointer p-2 relative'>
      <span className='bg-blue-400 px-2  absolute -top-2 -right-1 text-center text-white rounded-full'>
        1
      </span>

      <ShoppingCart />
    </Link>
  );
}
