import { NextResponse } from "next/server";

import { i18n } from "@/i18n.config";

function getLocale(request: any) {
  const locale = request.cookies.get("NEXT_LOCALE")?.value || "ar";
  return locale;
}

export function middleware(request: any) {
  const searchParams = new URLSearchParams(request.nextUrl.search);
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}${
          "?" + searchParams.toString()
        }`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
