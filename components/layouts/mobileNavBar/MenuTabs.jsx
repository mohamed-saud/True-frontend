import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Smartphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { navigation } from '@/data/navigation-data'; // Assuming you have a separate file for navigation data
function MenuTabs({ setOpen }) {
  return (
    <div className='relative z-10 block ovaherflow-hidden'>
      <TabGroup>
        <TabList className='flex  my-4 w-full justify-between bg-gray-200 '>
          {navigation.categories.map((category) => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                selected
                  ? 'text-black bg-gray-200 border-solid  border-b border-blue-500 p-4 w-[50%] font-semibold '
                  : 'text-gray-500 p-4 bg-gray-300 hover:text-blue-500 transition duration-150 ease-in-out cursor-pointer w-[50%]'
              }>
              {category.name}
            </Tab>
          ))}
        </TabList>

        <TabPanels as={Fragment}>
          {navigation.categories.map((category) => (
            <TabPanel
              key={category.name}
              className='space-y-10 px-4 pt-10 pb-8'>
              <div className='flex flex-col gap-4'>
                {category.featured.map((item) => (
                  <Link
                    onClick={() => setOpen(false)}
                    href={item.href}
                    className='flex items-center gap-2 border-b border-gray-300 pb-4'
                    key={item.name}>
                    {item.imageSrc && (
                      <Image
                        className='w-6 h-6 rounded-md'
                        alt={item.imageAlt}
                        loading={'lazy'}
                        width={10}
                        height={10}
                        unoptimized={true}
                        quality={100}
                        src={item.imageSrc}
                      />
                    )}

                    <span className='text-sm font-medium text-gray-900 hover:text-blue-500'>
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default MenuTabs;
