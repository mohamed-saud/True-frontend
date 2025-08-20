'use client';

import { Fragment, useEffect, useState } from 'react';
import Menu from './Menu';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../Logo';
import Cart from '../Cart';
import { cn } from '@/lib/utils';

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
            <div className='flex px-4 pt-5 pb-2'>
              <button
                type='button'
                onClick={() => setOpen(false)}
                className='relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'>
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Close menu</span>
                <XMarkIcon
                  aria-hidden='true'
                  className='size-6'
                />
              </button>
            </div>

            {/* Links */}
            <TabGroup className='mt-2'>
              <div className='border-b border-gray-200'>
                <TabList className='-mb-px flex space-x-8 px-4'>
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className='flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600'>
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className='space-y-10 px-4 pt-10 pb-8'>
                    <div className='grid grid-cols-2 gap-x-4'>
                      {category.featured.map((item) => (
                        <div
                          key={item.name}
                          className='group relative text-sm'>
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className='aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75'
                          />
                          <a
                            href={item.href}
                            className='mt-6 block font-medium text-gray-900'>
                            <span
                              aria-hidden='true'
                              className='absolute inset-0 z-10'
                            />
                            {item.name}
                          </a>
                          <p
                            aria-hidden='true'
                            className='mt-1'>
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className='font-medium text-gray-900'>
                          {section.name}
                        </p>
                        <ul
                          role='list'
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className='mt-6 flex flex-col space-y-6'>
                          {section.items.map((item) => (
                            <li
                              key={item.name}
                              className='flow-root'>
                              <a
                                href={item.href}
                                className='-m-2 block p-2 text-gray-500'>
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
              {navigation.pages.map((page) => (
                <div
                  key={page.name}
                  className='flow-root'>
                  <a
                    href={page.href}
                    className='-m-2 block p-2 font-medium text-gray-900'>
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
              <div className='flow-root'>
                <a
                  href='#'
                  className='-m-2 block p-2 font-medium text-gray-900'>
                  Sign in
                </a>
              </div>
              <div className='flow-root'>
                <a
                  href='#'
                  className='-m-2 block p-2 font-medium text-gray-900'>
                  Create account
                </a>
              </div>
            </div>

            <div className='border-t border-gray-200 px-4 py-6'>
              <a
                href='#'
                className='-m-2 flex items-center p-2'>
                <img
                  alt=''
                  src='https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg'
                  className='block h-auto w-5 shrink-0'
                />
                <span className='ml-3 block text-base font-medium text-gray-900'>
                  CAD
                </span>
                <span className='sr-only'>, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className='relative w-full'>
        <nav
          aria-label='Top'
          className='w-full px-4 sm:px-6 lg:px-8'>
          <div className=''>
            <div className='flex h-16 items-center justify-between w-full'>
              <button
                type='button'
                onClick={() => setOpen(true)}
                className='relative rounded-md p-2 text-black lg:hidden'>
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Open menu</span>
                <Bars3Icon
                  aria-hidden='true'
                  className='size-6'
                />
              </button>

              {/* Logo */}
              <div className=''>
                <a href='#'>
                  <span className='sr-only'>Your Company</span>
                  <Logo />
                </a>
              </div>

              {/* Flyout menus */}
              <Menu />

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
