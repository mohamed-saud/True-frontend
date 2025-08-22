import { isRtlLang } from 'rtl-detect';

export default async function useTextDirection(locale: string) {
  return isRtlLang(locale) ? 'rtl' : 'ltr';
}
