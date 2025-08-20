'use client';
import React from 'react';
import DesktopNavbar from './desktopNavBar/DesktopNavbar';
import MobileNavBar from './mobileNavBar/MobileNavBar';

export default function Navbar() {
  return (
    <div>
      <div className='hidden md:flex'>
        <DesktopNavbar />
      </div>
      <div className='block md:hidden'>
        <MobileNavBar />
      </div>
    </div>
  );
}
