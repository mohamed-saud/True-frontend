import { isRtlLang } from 'rtl-detect';
import { useLocale } from 'next-intl';

export default function useTextDirection(locale: string) {
  return isRtlLang(locale) ? 'rtl' : 'ltr';
}
