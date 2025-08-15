import React from 'react';

export default function Title({ children }: { children: React.ReactNode }) {
  return <h1 className='text-blue-400 font-semibold text-xs  '>{children}</h1>;
}
