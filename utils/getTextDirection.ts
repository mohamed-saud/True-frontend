export default function getTextDirection( locale: string ): 'ltr' | 'rtl' {
    // Add more RTL locales as needed
    const rtlLocales = [ 'ar', 'en' ];
    return rtlLocales.includes( locale ) ? 'rtl' : 'ltr';
}