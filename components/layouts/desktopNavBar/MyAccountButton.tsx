import Link from 'next/link';
import React from 'react';

export default function MyAccountButton() {
  return (
    <Link
      href=''
      className=' cursor-pointer p-2 text-nowrap text-xs'>
      Log in / Register
    </Link>
  );
}
