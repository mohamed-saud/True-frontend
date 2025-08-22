import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import SearchBar from './SearchBar';
import MenuTabs from './MenuTabs';

function Menu({ setOpen }) {
  return (
    <div className=' w-full flex flex-col  '>
      <div className='p-2'>
        <SearchBar />
      </div>
      <MenuTabs setOpen={setOpen} />
    </div>
  );
}

export default Menu;
