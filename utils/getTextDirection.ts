
export default async function getTextDirection( locale?: string ) {

    const langCode = locale === "ar" ? "rtl" : "ltr";
    return langCode
}