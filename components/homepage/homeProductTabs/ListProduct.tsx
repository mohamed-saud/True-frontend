import React from 'react';
import Product from './Product';

const data = [
  {
    id: 1,
    productName: 'Full Aquarelle iPhone XR',
    price: 20,
    phone: 'iphone 20 pro',
    imageUrl: '/products/blue-case-back.jpg',
  },
  {
    id: 2,
    productName: 'Full Aquarelle iPhone XR',
    price: 20,
    phone: 'iphone 20 pro',
    imageUrl: '/products/blue-case-back.jpg',
  },
  {
    id: 3,
    productName: 'Full Aquarelle iPhone XR',
    price: 20,
    phone: 'iphone 20 pro',
    imageUrl: '/products/blue-case-back.jpg',
  },
  {
    id: 4,
    productName: 'Full Aquarelle iPhone XR',
    price: 2500,
    phone: 'iphone 20 pro',
    imageUrl: '/products/blue-case-back.jpg',
  },
  {
    id: 7,
    productName: 'Full Aquarelle iPhone XR',
    price: 2000,
    phone: 'iphone 20 pro',
    imageUrl: '/products/blue-case-back.jpg',
  },
];
export default function ListProduct({
  categoryName,
}: {
  categoryName: string;
}) {
  /// fetchdata category from the server a
  return (
    <ul className='grid justify-center grid-cols-5 gap-5 w-full'>
      {data.map((product) => (
        <Product
          key={product.id}
          product={product}
        />
      ))}
    </ul>
  );
}
