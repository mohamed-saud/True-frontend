import { cn } from '@/lib/utils';
import React from 'react';

export default function Heading({
  children,
  size,
}: {
  children: React.ReactNode;
  size: string;
}) {
  return <h2 className={cn('font-medium  text-gray-900', size)}>{children}</h2>;
}
