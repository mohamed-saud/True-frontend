import React from 'react';

export default function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className='font-medium text-4xl text-gray-900'>{children}</h2>;
}
