'use client';

import * as React from 'react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import ListMenuItem from './ListMenuItem';
import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface Cases {
  title: string;
  href: string;
}

const cases: Cases[] = [
  {
    title: 'iPhone11',
    href: '/1',
  },
  {
    title: 'iPhone11',
    href: '2',
  },
  {
    title: 'iPhone11',
    href: '2',
  },
  {
    title: 'iPhone11',
    href: '2',
  },
];

export function Menu() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  return (
    <div className='flex-1/2 z-2  '>
      <NavigationMenu viewport={false}>
        <NavigationMenuList
          className={locale === 'ar' ? 'flex-row-reverse' : ''}>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className=' bg-transparent'>
              <Link href='/'>{t('home')}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=' bg-transparent text-xs p-2 '>
              {t('cases')}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className={cn('grid w-[150px] gap-4 p-1.5 ')}>
                {cases.map((cas, idx) => (
                  <ListMenuItem
                    key={cas.href + idx}
                    title={cas.title}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=' bg-transparent text-xs p-2 '>
              {t('straps')}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[150px] gap-4 p-1.5'>
                {cases.map((cas, idx) => (
                  <ListMenuItem
                    key={cas.href + idx}
                    title={cas.title}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=' bg-transparent text-xs p-2 '>
              {t('powerBanks')}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[150px] gap-4 p-1.5'>
                {cases.map((cas, idx) => (
                  <ListMenuItem
                    key={cas.href + idx}
                    title={cas.title}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=' bg-transparent text-xs p-2 '>
              {t('cables')}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[150px] gap-4 p-1.5'>
                {cases.map((cas, idx) => (
                  <ListMenuItem
                    key={cas.href + idx}
                    title={cas.title}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=' bg-transparent text-xs p-2 '>
              {t('magesafe')}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[150px] gap-4 p-1.5'>
                {cases.map((cas, idx) => (
                  <ListMenuItem
                    key={cas.href + idx}
                    title={cas.title}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=' bg-transparent text-xs p-2 '>
              {t('charger')}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[150px] gap-4 p-1.5'>
                {cases.map((cas, idx) => (
                  <ListMenuItem
                    key={cas.href + idx}
                    title={cas.title}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=' bg-transparent text-xs p-2 '>
              {t('more')}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[150px] gap-4 p-1.5'>
                {cases.map((cas, idx) => (
                  <ListMenuItem
                    key={cas.href + idx}
                    title={cas.title}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

// function ListItem({
//   title,
//   children,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <Link href={href}>
//           <div className='text-sm leading-none font-medium'>{title}</div>
//           <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// }
