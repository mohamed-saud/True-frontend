import { isRtlLang } from 'rtl-detect';

export default function useTextDirection(locale: string) {
  return isRtlLang(locale) ? 'rtl' : 'ltr';
}
