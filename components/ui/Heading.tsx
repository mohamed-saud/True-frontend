import { cn } from '@/lib/utils';
import React from 'react';

export default function Heading({
  children,
  size,
  clalassName,
}: {
  children: React.ReactNode;
  size?: string;
  clalassName?: string;
}) {
  return (
    <h2 className={cn('font-medium  text-gray-900', size, clalassName)}>
      {children}
    </h2>
  );
}
