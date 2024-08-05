import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT
} from "@/routes";
import MiddlewareUtils from "@/utils/middleware-class";

// TODO: Implement route protection middleware

export function middleware(request: NextRequest) {
  const middlewareUtils = new MiddlewareUtils();

  const { nextUrl } = request;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (middlewareUtils.isUserAuthenticate()) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT(), nextUrl));
    }
    return;
  }

  if (!middlewareUtils.isUserAuthenticate() && !isPublicRoute) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  return;
}

export const config = {
  matcher: [
    "/((?!.*\\..*|_next|public|public/.*|.*\\.css$).*)",
    "/",
    "/(api|trpc)(.*)"
  ]
};
