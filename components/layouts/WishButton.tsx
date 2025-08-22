import { Heart } from 'lucide-react';
import React from 'react';

export default function WishButton() {
  return (
    <button className=' cursor-pointer flex items-center relative h-[20px]  '>
      <span className='bg-blue-400 px-[4px] text-[10px] -top-1  absolute  -right-2 text-center text-white rounded-full'>
        1
      </span>
      <Heart />
    </button>
  );
}
