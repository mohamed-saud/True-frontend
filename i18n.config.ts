import { getRequestConfig } from "next-intl/server";
export const locales = [ "egypt-en", "egypt-ar" ];

export const i18n = {
    defaultLocale: "egypt-en",
    locales: locales,
} as const;

export type Locale = ( typeof i18n )[ "locales" ][ number ];

export default getRequestConfig( async ( { locale } ) => ( {
    messages: ( await import( `./dictionaries/${ locale.split( "-" )[ 1 ] }.json` ) )
        .default,
} ) );
