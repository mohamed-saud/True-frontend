'use client';

import { useEffect, useState } from 'react';
import Menu from './Menu';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Logo from '../Logo';
import Cart from '../Cart';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt:
            'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc:
            'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
};

export default function TopNavBar() {
  const [open, setOpen] = useState(false);
  const [isVisbile, setIsvisbile] = useState(false);

  useEffect(() => {
    let lastScrollY = window.screenY;
    const controleScroll = () => {
      let currentScrollY = window.scrollY;
      if (lastScrollY > currentScrollY && currentScrollY > 200) {
        setIsvisbile(true);
      } else {
        setIsvisbile(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', controleScroll);

    return () => window.removeEventListener('scroll', controleScroll);
  }, []);

  return (
    <div
      className={cn(
        'flex  z-10 justify-between items-center px-4 w-full h-[60px] transition-all f  ',
        isVisbile === true
          ? ' animate-wiggle fixed t-0 top-0 left-0 w-[100%]  bg-white drop-shadow-xl shadow-gray-400'
          : 'bg-transparent absolute t-0  left-0 w-[100%]'
      )}>
      {/* Mobile menu */}
      <Dialog
        open={open}
        onClose={setOpen}
        className='relative z-40 lg:hidden'>
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0'
        />
        <div className='fixed inset-0 z-40 flex'>
          <DialogPanel
            transition
            className='relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full'>
            <div className='flex items-center justify-between  pt-5'>
              <Menu setOpen={setOpen} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className='relative w-full'>
        <nav
          aria-label='Top'
          className='w-full px-2 sm:px-6 lg:px-8'>
          <div className=''>
            <div className='flex h-16 items-center justify-between w-full'>
              <button
                type='button'
                onClick={() => setOpen(true)}
                className='relative rounded-md  text-black lg:hidden'>
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Open menu</span>
                <Bars3Icon
                  aria-hidden='true'
                  className='size-7'
                />
              </button>
              {/* Logo */}
              <div className=''>
                <Logo />
              </div>
              <div className=' flex items-center'>
                {/* Cart */}
                <div className='ml-4 flow-root lg:ml-6'>
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
