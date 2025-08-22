import { Search } from 'lucide-react';

function SearchBar() {
  return (
    <div className='flex items-center justify-between w-full p-2 gap-2'>
      <input
        className='flex-1 p-2 border rounded'
        type='text'
        placeholder='Search for products...'
      />
      <Search />
    </div>
  );
}

export default SearchBar;
