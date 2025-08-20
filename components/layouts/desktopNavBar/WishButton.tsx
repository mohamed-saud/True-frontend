import { Heart } from 'lucide-react';
import React from 'react';

export default function WishButton() {
  return (
    <button className=' cursor-pointer p-2 relative'>
      <span className='bg-blue-400 px-2  absolute -top-2 -right-1 text-center text-white rounded-full'>
        1
      </span>
      <Heart />
    </button>
  );
}
