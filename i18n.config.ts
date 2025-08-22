import { getRequestConfig } from "next-intl/server";
export const locales = [ "egypt-en", "egypt-ar" ];

export const i18n = {
    defaultLocale: "egypt-en",
    locales: locales,
} as const;

export type Locale = ( typeof i18n )[ "locales" ][ number ];

export default getRequestConfig( async ( { locale } ) => {
    const currentLocale = locale ?? i18n.defaultLocale;
    const langCode = currentLocale.split( "-" )[ 1 ];
    return {
        locale: currentLocale,
        messages: ( await import( `./dictionaries/${ langCode }.json` ) ).default,
    };
} );
