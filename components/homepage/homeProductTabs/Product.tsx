import Link from 'next/link';
import React from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

export default function Product({ product }: { product: any }) {
  return (
    <li className=''>
      <Link href=''>
        <Card className='border-none shadow-none'>
          <CardHeader>
            <Image
              alt=''
              width={200}
              height={200}
              src={product.imageUrl}
            />
          </CardHeader>
          <CardContent className='gap-2.5 grid'>
            <CardTitle>{product.productName}</CardTitle>
            <CardDescription>{product.phone}</CardDescription>
            <p className='text-blue-500'> ${product.price.toLocaleString()}</p>
          </CardContent>
        </Card>
      </Link>
    </li>
  );
}
