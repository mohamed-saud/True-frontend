'use client';
import { usePathname } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react';

export default function LocaleSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const nextLocale = locale === 'en' ? 'ar' : 'en'; // ✅ switch logic

  function onSelectChange() {
    startTransition(() => {
      router.replace(`/${nextLocale}${pathname}`); // ✅ locale-aware routing
    });
  }

  return (
    <>
      <button
        className=' cursor-pointer p-2 text-xs'
        onClick={onSelectChange}>
        {nextLocale === 'en' ? 'English' : 'العربية'}
      </button>
    </>
  );
}
