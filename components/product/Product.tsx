import Link from 'next/link';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

interface ProductProps {
  product: {
    imageUrl: string;
    productName: string;
    phone: string;
    price: number;
  };
}

export default function Product({ product }: ProductProps) {
  return (
    <li className=''>
      <Link href=''>
        <Card className='border-none shadow-none'>
          <CardHeader>
            <Image
              alt='product image'
              width={200}
              height={200}
              src={product.imageUrl}
            />
          </CardHeader>
          <CardContent className='gap-1 xl:gap-2.5 grid text-center'>
            <CardTitle className='text-sm'>{product.productName}</CardTitle>
            <CardDescription className='text-xs text-gray-500 xl:text-xl'>
              {product.phone}
            </CardDescription>
            <p className='text-blue-500'> ${product.price.toLocaleString()}</p>
          </CardContent>
        </Card>
      </Link>
    </li>
  );
}
