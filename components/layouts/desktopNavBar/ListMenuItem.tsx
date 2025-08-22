import { NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import React from 'react';

export default function ListMenuItem({ title }: { title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href='#'>
          <div>{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
