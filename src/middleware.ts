import {NextRequest, NextResponse} from "next/server";
import {default as I18NConfig} from "@/i18n/config";
import {match as LocaleMatcher} from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

/**
 * Middleware won't run on:
 * 1. internal path
 * 2. any images
 * 3. /assets
 * 4. site icon
 */
export const config = {
    matcher: [
        '/((?!api|_next|assets|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)'
    ],
};

// middleware I18N
function I18NCheckAndRedirect(nextReq: NextRequest, userHeader: Headers) {
    const {pathname} = nextReq.nextUrl;
    
    let langParam = "";
    const pathnameHasLocale = I18NConfig.SupportedLocales.some(
        (locale) => {
            const flag = pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`;
            if (flag)
                langParam = locale
            return flag;
        }
    )
    
    if (pathnameHasLocale) {
        const response = NextResponse.next();
        response.headers.set('content-language', langParam)
        return response;
        // return;
    }
    
    const pageLocale = getLocale(userHeader);
    nextReq.nextUrl.pathname = `/${pageLocale}${pathname}`;
    
    userHeader.set("content-language", pageLocale);
    
    return NextResponse.redirect(nextReq.nextUrl, {
        'headers': userHeader,
    })
}

// middleware entrance
export function middleware(nextReq: NextRequest) {
    const userHeader = new Headers(nextReq.headers);
    return I18NCheckAndRedirect(nextReq, userHeader);
}

// -- utils
function getLocale(headers: Headers) {
    
    // @ts-expect-error Negotiator typing quick fix
    let currentLang = new Negotiator({headers}).languages();
    
    const SupportedLang = I18NConfig.SupportedLocales;
    const defaultLocale = I18NConfig.defaultLocale;
    
    // when the header is empty, use the default locale
    if (currentLang.length === 1 && currentLang[0] === '*') {
        currentLang = [defaultLocale];
    }
    
    return LocaleMatcher(currentLang, SupportedLang, defaultLocale);
}