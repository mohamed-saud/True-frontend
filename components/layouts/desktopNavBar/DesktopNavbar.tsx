'use client';
import React, { useEffect, useState } from 'react';
import Logo from '../Logo';
import { Menu } from './Menu';
import MyAccountButton from './MyAccountButton';
import Search from './Search';
import WishButton from './WishButton';
import Cart from '../Cart';
import LocaleSwitcher from './LocaleSwitcher';
import { cn } from '@/lib/utils';

export default function DesktopNavbar() {
  const [isVisbile, setIsvisbile] = useState(false);

  useEffect(() => {
    let lastScrollY = window.screenY;
    const controleScroll = () => {
      const currentScrollY = window.scrollY;
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
    <header
      className={cn(
        'flex  z-10 justify-center w-full h-[90px] transition-all  ',
        isVisbile === true
          ? ' animate-wiggle fixed t-0 top-0 left-0 w-[100%]  bg-white drop-shadow-xl shadow-gray-400'
          : 'bg-transparent absolute t-0  left-0 w-[100%]'
      )}>
      <div className=' container flex items-center justify-center'>
        <div className='flex justify-between w-full items-center gap-6'>
          <div className='flex items-center gap-6'>
            <Logo />
            <Menu />
          </div>
          <div className='flex gap-2 items-center '>
            <MyAccountButton />
            <Search />
            <WishButton />
            <Cart />
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
