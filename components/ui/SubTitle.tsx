import { cn } from '@/lib/utils';
import React from 'react';

export default function SubTitle({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn('text-gray-400 text-center px-5', className)}>
      {children}
    </p>
  );
}
