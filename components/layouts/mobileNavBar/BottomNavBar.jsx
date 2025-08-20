import { Heart, ShoppingCart, Store, UserRound } from 'lucide-react';
import Link from 'next/link';

function BottomNavBar() {
  return (
    <div className=' block container fixed z-10 bottom-0 left-0 w-full shadow-[0_-5px_10px_rgba(0,0,0,0.1)] bg-white p-4 items-center justify-center text-blaxk'>
      <div className='flex  w-full justify-between items-center'>
        <Link
          href='/shop'
          className='flex flex-col items-center  gap-1'>
          <Store />
          <span className='text-xs'>Shop</span>
        </Link>
        <Link
          href='/wishlist'
          className='flex flex-col items-center gap-1'>
          <Heart />
          <span className='text-xs'>Wishlist</span>
        </Link>
        <Link
          href='/cart'
          className='flex flex-col items-center gap-1'>
          <ShoppingCart />
          <span className='text-xs'>Cart</span>
        </Link>
        <Link
          href='/my-account'
          className='flex flex-col items-center gap-1'>
          <UserRound />
          <span className='text-xs'>My account</span>
        </Link>
      </div>
    </div>
  );
}

export default BottomNavBar;
